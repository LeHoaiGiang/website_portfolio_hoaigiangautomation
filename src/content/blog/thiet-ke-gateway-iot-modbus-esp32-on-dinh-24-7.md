---
title: "Giải Pháp Thiết Kế Gateway IoT Thu Thập Dữ Liệu Modbus RTU Chạy Ổn Định 24/7"
slug: "thiet-ke-gateway-iot-modbus-esp32-on-dinh-24-7"
description: "Kinh nghiệm thực tế xây dựng bộ chuyển đổi giao thức Modbus RTU (RS-485) sang MQTT Cloud sử dụng ESP32: cơ chế phân tách Dual-Core, Watchdog phần cứng và xử lý mất kết nối mạng."
cover: "/media/blog-modbus-esp32.svg"
category: "Hệ thống IoT"
tags: ["ESP32", "IoT", "Modbus", "RS485", "MQTT", "DualCore", "Watchdog"]
date: 2026-03-28
readingTime: "6 phút đọc"
author: "Hoài Giang"
featured: false
published: true
---

Trong các hệ thống giám sát năng lượng, trạm quan trắc môi trường hoặc dây chuyền sản xuất, chuẩn truyền thông **Modbus RTU trên nền vật lý RS-485** vẫn là giao thức thống trị nhờ độ bền bỉ và giá thành thiết bị hợp lý.

Tuy nhiên, việc đưa dữ liệu này lên Cloud (MQTT / HTTP) thông qua chip vi điều khiển Wi-Fi/4G như **ESP32** thường gặp các thách thức:
1. Wi-Fi mất kết nối làm luồng đọc Modbus bị đứng theo (Blocking).
2. Tín hiệu RS-485 bị xung nhiễu làm sai khung truyền (CRC Error) gây tràn buffer UART.
3. Bộ nhớ RAM bị phân mảnh (Heap Fragmentation) sau vài tuần chạy liên tục khiến thiết bị tự khởi động lại.

Dưới đây là kiến trúc phần mềm và phần cứng giúp khắc phục triệt để các vấn đề này.

---

## 1. Tận dụng kiến trúc Dual-Core của ESP32

ESP32 sở hữu 2 nhân vi xử lý Xtensa 32-bit (Core 0 và Core 1). Hãy tận dụng tối đa điều này bằng cách gán tác vụ (Task Pinning):

- **Core 0:** Dành riêng cho **Giao thức mạng** (Wi-Fi Driver, TCP/IP Stack lwIP, SSL/TLS handshake, MQTT Client). Việc kết nối lại Wi-Fi hoặc mã hóa TLS tốn rất nhiều chu kỳ CPU, hãy để Core 0 xử lý.
- **Core 1:** Dành riêng cho **Tác vụ công nghiệp thời gian thực** (Đọc/ghi Modbus RTU qua UART, lấy mẫu cảm biến, điều khiển còi báo động).

```c
/* Ghim Task Modbus vào Core 1 để đảm bảo tính thời gian thực */
xTaskCreatePinnedToCore(
    Task_Modbus_Poll,
    "ModbusTask",
    4096,
    NULL,
    3,
    &hModbusTask,
    1 // Core 1
);
```

Nhờ cách này, dù mạng Internet bên ngoài có chập chờn hay mất sóng cả ngày, luồng đọc Modbus của máy móc vẫn diễn ra liên tục, dữ liệu được xếp vào hàng đợi bộ nhớ mà không bao giờ bị nghẽn CPU.

---

## 2. Phần cứng chuyển hướng RS-485 tự động (Auto-Direction)

Chip transceiver RS-485 thông dụng như MAX485 yêu cầu điều khiển chân `DE/RE` (Driver Enable / Receiver Enable). Nếu firmware điều khiển chân này bằng delay phần mềm:
- Đổi trạng thái quá sớm: Byte cuối cùng chưa truyền xong đã bị cắt đứt.
- Đổi trạng thái quá trễ: Thiết bị Slave phản hồi về sẽ bị va chạm tín hiệu (Bus Collision).

**Khuyến nghị giải pháp:**
- Sử dụng IC có tích hợp Auto Direction Control như **MAX13487** hoặc mạch chuyển tự động bằng transistor / cổng NOT. Vi điều khiển chỉ cần gửi dữ liệu qua chân `TX` như UART thông thường, phần cứng sẽ tự mở kênh truyền và tự ngắt cực kỳ chuẩn xác.

---

## 3. Kỹ thuật Hardware Watchdog Timer (WDT)

Trong công nghiệp, nguyên tắc là không bao giờ tin rằng vi điều khiển sẽ không bao giờ bị treo. Cần có cơ chế "người gác cổng" giám sát:

1. **Task Watchdog Timer (TWDT):** Mỗi Task quan trọng phải "cho chó ăn" định kỳ (Feed Watchdog). Nếu Task Modbus bị kẹt trong vòng lặp đọc UART quá 10 giây mà không gọi `esp_task_wdt_reset()`, hệ thống sẽ can thiệp khởi động lại an toàn.
2. **Watchdog phần cứng ngoài (External WDT IC):** Trong các ứng dụng khắc nghiệt, sử dụng thêm IC reset chuyên dụng (ví dụ TPL5010 hoặc STM6315). Nếu chân GPIO của ESP32 không phát xung nhịp mỗi 30 giây, IC ngoài sẽ kéo chân `EN/RST` của ESP32 xuống đất để khởi động lại nguội (Cold Reset).

---

## 4. Quản lý lưu trữ ngoại tuyến khi mất mạng (Offline Storage)

Khi nhà máy mất mạng Internet trong 2-3 giờ, dữ liệu năng lượng và nhiệt độ không được phép bị mất:
- Không lưu dồn dập vào Flash SPI nội bộ của ESP32 vì số lần ghi của Flash có giới hạn (khoảng 100,000 lần).
- Giải pháp: Sử dụng bộ nhớ **FRAM (Ferroelectric RAM)** chuẩn I2C/SPI hoặc thẻ nhớ microSD công nghiệp. FRAM có tốc độ ghi tức thì và tuổi thọ lên tới hàng nghìn tỷ chu kỳ ghi.

---

## Kết luận

Một bộ Gateway IoT tốt không chỉ nằm ở việc hiển thị số liệu đẹp trên Web, mà nằm ở độ tin cậy và khả năng tự phục hồi khi gặp sự cố tại hiện trường. Hãy luôn thiết kế hệ thống với tư duy "phòng ngừa rủi ro" ngay từ sơ đồ nguyên lý phần cứng đến cấu trúc firmware.
