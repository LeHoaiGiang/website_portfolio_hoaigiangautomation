---
title: "Kỹ Thuật Tối Ưu FreeRTOS Trên STM32: Tránh Lỗi HardFault và Stack Overflow"
slug: "toi-uu-freertos-stm32-tranh-hardfault-va-deadlock"
description: "Phân tích các nguyên nhân phổ biến khiến firmware STM32 chạy RTOS bị văng lỗi HardFault: cấu hình sai ưu tiên ngắt NVIC, tràn bộ nhớ ngăn xếp Task và kỹ thuật gỡ lỗi thực tế."
cover: "/media/blog-freertos-stm32.svg"
category: "Lập trình STM32"
tags: ["STM32", "FreeRTOS", "Firmware", "HardFault", "Debug", "Embedded C"]
date: 2026-03-24
readingTime: "8 phút đọc"
author: "Hoài Giang"
featured: true
published: true
---

Khi chuyển từ lập trình vòng lặp trần (Bare-metal Super Loop) sang hệ điều hành thời gian thực (RTOS) như **FreeRTOS** trên vi điều khiển **STM32**, các kỹ sư thường gặp phải những lỗi treo chip bí ẩn: chip chạy được vài phút hoặc vài giờ rồi dừng hẳn, con trỏ lệnh nhảy vào hàm `HardFault_Handler()`.

Bài viết này mổ xẻ nguyên nhân cốt lõi và hướng dẫn cách thiết lập chuẩn xác để hệ thống chạy mượt mà, tin cậy.

---

## 1. Cấu hình NVIC Priority Grouping và FreeRTOS SysCall

Đây là nguyên nhân số 1 gây ra HardFault trên dòng ARM Cortex-M3/M4/M7:

- ARM Cortex-M có thanh ghi phân chia nhóm mức ưu tiên ngắt (`PRIGROUP`) thành **Preemption Priority** (ưu tiên chiếm quyền) và **Subpriority** (ưu tiên phụ).
- FreeRTOS yêu cầu **toàn bộ 4 bit ưu tiên phải được dùng cho Preemption Priority**, không chia cho Subpriority.

```c
/* Bắt buộc gọi trước khi khởi động RTOS kernel */
NVIC_SetPriorityGrouping(NVIC_PRIORITYGROUP_4);
```

### Quy tắc gọi hàm API từ ngắt (ISR)
Nếu bạn gọi hàm FreeRTOS bên trong chương trình phục vụ ngắt (ISR), bạn phải:
1. Sử dụng biến thể có đuôi `FromISR` (ví dụ: `xQueueSendFromISR`, không dùng `xQueueSend`).
2. Mức ưu tiên ngắt của ngắt đó phải **thấp hơn hoặc bằng** hằng số `configLIBRARY_MAX_SYSCALL_INTERRUPT_PRIORITY`.
   *(Lưu ý: Trong Cortex-M, số ưu tiên càng lớn thì quyền ưu tiên càng thấp!)*

---

## 2. Kiểm soát hiện tượng tràn Stack (Stack Overflow)

Trong FreeRTOS, mỗi Task được cấp phát một vùng nhớ Stack riêng. Nếu bạn khai báo một mảng đệm quá lớn hoặc đệ quy sâu bên trong Task:

```c
void Task_ProcessData(void *pvParameters) {
    /* NGUY HIỂM: Khai báo bộ đệm lớn trực tiếp trên Stack của Task */
    char buffer[1024]; 
    for(;;) {
        // ...
    }
}
```

Nếu Task chỉ được cấp 256 words (1024 bytes), việc khai báo mảng 1024 bytes sẽ lập tức đè nát các biến quản lý của hệ điều hành.

### Bật cơ chế phát hiện tràn Stack tự động
Trong file `FreeRTOSConfig.h`, hãy bật:

```c
#define configCHECK_FOR_STACK_OVERFLOW  2
```

Khi có tràn Stack xảy ra, kernel sẽ nhảy vào hàm callback:

```c
void vApplicationStackOverflowHook(TaskHandle_t xTask, char *pcTaskName) {
    /* Đặt breakpoint tại đây để bắt ngay Task gây tràn */
    printf("Task tràn stack: %s\n", pcTaskName);
    while (1);
}
```

Để đo lượng stack dư thừa trong khi chạy thực tế, hãy sử dụng hàm:
```c
UBaseType_t highWaterMark = uxTaskGetStackHighWaterMark(NULL);
```

---

## 3. Tránh hiện tượng Đảo ngược mức ưu tiên (Priority Inversion) & Deadlock

Khi nhiều Task cùng truy cập một tài nguyên dùng chung (ví dụ: bus I2C hoặc cổng UART để in log):

1. **Tuyệt đối không dùng cờ biến toàn cục (Global Flag) thô sơ** để khóa tài nguyên giữa các Task. Hãy dùng **Mutex** (`xSemaphoreCreateMutex()`) vì Mutex trong FreeRTOS có tích hợp sẵn cơ chế **Priority Inheritance** (kế thừa mức ưu tiên), giúp Task có ưu tiên cao không bị chặn vô hạn bởi Task ưu tiên thấp.
2. **Quy tắc thứ tự chiếm khóa:** Nếu một Task cần 2 Mutex A và B, tất cả các Task khác cũng phải chiếm A trước rồi mới chiếm B. Nếu Task 1 chiếm A chờ B, trong khi Task 2 chiếm B chờ A, hệ thống sẽ rơi vào thế kẹt cứng (Deadlock).

---

## Tóm tắt các thiết lập chuẩn

| Thiết lập | Giá trị khuyến nghị | Mục đích |
| :--- | :--- | :--- |
| `NVIC Priority Group` | `NVIC_PRIORITYGROUP_4` | Chuẩn hóa toàn bộ ngắt thành Preemption |
| `configCHECK_FOR_STACK_OVERFLOW` | `2` | Bật phát hiện tràn ngăn xếp ở cấp độ sâu |
| `configUSE_MALLOC_FAILED_HOOK` | `1` | Phát hiện lỗi khi phân bổ bộ nhớ Heap thất bại |
| `configASSERT` | Bật đầy đủ trong giai đoạn Dev | Bắt ngay thông số sai truyền vào API |

Việc nắm vững kiến trúc bộ nhớ và cơ chế quản lý ngắt của Cortex-M sẽ biến FreeRTOS thành một công cụ cực kỳ mạnh mẽ và ổn định cho các dự án IoT và công nghiệp của bạn.
