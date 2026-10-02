---
title: "Mạch Điều Khiển Đếm Lùi LED 7 Đoạn Đèn Giao Thông STM32F103"
slug: "stm32-traffic-light-countdown-controller"
description: "Thiết kế và chế tạo bo mạch điều khiển đếm lùi LED 7 đoạn cho đèn tín hiệu giao thông dùng vi điều khiển STM32F103, nhận tín hiệu pha 220VAC/24VDC cách ly quang, tự động đo chu kỳ pha và cấu hình chế độ đếm về 0 hoặc 1 trực tiếp trên board."
cover: "/media/stm32-traffic-countdown.svg"
category: "STM32"
technologies:
  - "STM32F103"
  - "ARM Cortex-M3"
  - "C/C++"
  - "Optocoupler AC/DC"
  - "74HC595 Driver"
  - "LED 7 Đoạn Công Nghiệp"
  - "Altium Designer"
  - "Keil MDK"
date: 2026-03-25
featured: true
published: true
hardware: "STM32F103C8T6, Opto cách ly AC/DC PC814/EL814, Mạch lọc RC & TVS chống sét, IC ghi dịch 74HC595 + ULN2803/MOSFET, DIP switch cấu hình chế độ đếm"
software: "Firmware C bare-metal tối ưu trễ thời gian thực, Timer Capture tự học chu kỳ pha, Bộ lọc khử nhiễu tín hiệu số, Watchdog IWDG chống treo vi điều khiển"
github: "https://github.com/LeHoaiGiang"
demo: "https://www.youtube.com/@lehoaigiangctu"
gallery:
  - "/media/stm32-traffic-countdown.svg"
---

## 1. Tổng quan & Bài toán kỹ thuật thực tế

Đèn đếm lùi thời gian (Traffic Light Countdown Timer) là một thành phần quan trọng tại các nút giao thông đô thị, giúp người tham gia giao thông chủ động điều chỉnh tốc độ, giảm thiểu tình trạng phanh gấp, vượt đèn vàng và giải tỏa xung đột luồng xe tại giao lộ.

Tuy nhiên, trong quá trình triển khai thực tế tại các tuyến đường, kỹ sư giao thông thường đối mặt với các khó khăn lớn:

- **Đa dạng về chuẩn tủ điều khiển:** Các tủ điều khiển tín hiệu giao thông hiện trường có nhiều xuất xứ khác nhau (tủ vi xử lý nội địa, tủ ngoại nhập, tủ điều khiển dùng PLC, hoặc tủ relay/triac đời cũ). Mức điện áp cấp ra đèn có thể là **220VAC** (đèn sợi đốt hoặc đèn LED 220V) hoặc **24VDC** (chuẩn đèn LED an toàn điện áp thấp).
- **Thiếu cổng giao tiếp đồng bộ:** Hầu hết các tủ điều khiển không mở giao thức truyền thông (RS485/CAN/Ethernet) hoặc nhà thầu không được phép can thiệp vào bo mạch điều khiển trung tâm của tủ đèn.
- **Nhiễu công nghiệp và xung gai điện lưới:** Hiện tượng hồ quang đóng cắt từ relay, triac rò áp hoặc xung sét lan truyền trên đường dây ngoài trời dài hàng chục mét thường khiến các bộ đếm lùi giá rẻ bị đếm loạn, nhảy số, treo chip hoặc chớp tắt liên tục.
- **Khác biệt về quy chuẩn hiển thị giữa các địa phương:** Một số nơi quy định đếm lùi kết thúc ở **số 0** (3 -> 2 -> 1 -> 0 rồi chuyển pha), trong khi nhiều tỉnh thành và tiêu chuẩn mới lại yêu cầu kết thúc ở **số 1** (3 -> 2 -> 1 rồi ngắt hiển thị sang pha mới để tránh người điều khiển phương tiện tăng ga sớm khi vừa nhìn thấy số 0).

**Mục tiêu của dự án:** Nghiên cứu, thiết kế phần cứng và lập trình firmware hoàn chỉnh cho bo mạch điều khiển đếm lùi LED 7 đoạn độc lập sử dụng vi điều khiển **STM32F103 (ARM Cortex-M3)**, có khả năng đấu song song trực tiếp với ngõ ra của đèn tín hiệu (220VAC hoặc 24VDC), tự động nhận biết chu kỳ thời gian của từng pha đèn, và cho phép kỹ thuật viên chọn chế độ đếm lùi về 0 hoặc về 1 ngay bằng công tắc trên bo mạch mà không cần nạp lại phần mềm.

---

## 2. Thông số kỹ thuật cốt lõi

| Thông số | Giá trị thiết kế | Ghi chú kỹ thuật |
|---|---|---|
| **Vi điều khiển trung tâm** | STM32F103C8T6 (ARM Cortex-M3 @ 72MHz) | Xử lý thời gian thực độ trễ nano-giây, tích hợp Timer 16-bit |
| **Điện áp nhận tín hiệu pha** | **220VAC (85V – 265VAC)** hoặc **24VDC (18V – 30VDC)** | Hỗ trợ 3 pha: Xanh (Green), Đỏ (Red), Vàng (Yellow) |
| **Cơ chế cách ly tín hiệu** | Optocoupler AC/DC hai chiều tốc độ cao | Điện áp cách ly quang > 2500Vrms, an toàn tuyệt đối cho MCU |
| **Bảo vệ ngõ vào** | Cầu chia áp công suất + Mạch lọc RC + Diode TVS | Chống điện áp ngược, triệt tiêu xung gai đóng cắt Triac/Relay |
| **Chế độ đếm lùi** | Cấu hình qua **DIP Switch** tích hợp trên board | Tùy chọn: **Đếm về 0** hoặc **Đếm về 1** tức thì |
| **Thuật toán đồng bộ pha** | Tự học chu kỳ (Auto Cycle Learning & Adaptive Sync) | Tự đo và bám thời gian chu kỳ chỉ sau 01 vòng pha đèn |
| **Ngõ ra điều khiển LED** | Bus SPI / Chuẩn IC dịch 74HC595 + Mảng công suất | Tương thích LED 7 đoạn ngoài trời kích thước D300, D400 |
| **Môi trường hoạt động** | -20°C đến +75°C, độ ẩm 95% RH | Phủ keo Conformal Coating chống ẩm nhiệt đới và ăn mòn |
| **Cơ chế an toàn (Failsafe)**| Hardware Watchdog (IWDG) + Auto-Blanking | Tự tắt hiển thị nếu phát hiện xung đột pha hoặc lệch chu kỳ |

---

## 3. Kiến trúc sơ đồ khối hệ thống

```text
  ┌──────────────────────────────────────────────────────────┐
  │         TỦ ĐIỀU KHIỂN TÍN HIỆU GIAO THÔNG HIỆN TRƯỜNG     │
  │     (Ngõ ra đèn tín hiệu: 220VAC hoặc 24VDC)            │
  └───────┬────────────────────┬────────────────────┬────────┘
          │ Đèn Đỏ             │ Đèn Vàng           │ Đèn Xanh
          ▼                    ▼                    ▼
  ┌──────────────────────────────────────────────────────────┐
  │   KHỐI NHẬN TÍN HIỆU CÁCH LY QUANG & BỘ LỌC PHẦN CỨNG     │
  │   (TVS Surge Protection + Opto PC814/EL814 + RC Filter) │
  └────────────────────────────┬─────────────────────────────┘
                               │ Xung logic 3.3V sạch
                               ▼
  ┌──────────────────────────────────────────────────────────┐
  │             VI ĐIỀU KHIỂN TRUNG TÂM STM32F103            │
  │                                                          │
  │  - Hardware Timer Capture (Đo chu kỳ từng pha chính xác) │
  │  - Thuật toán Tự học chu kỳ (Cycle Self-Learning)        │
  │  - Xử lý Debounce phần mềm & Failsafe Watchdog           │
  └──────────────▲─────────────────────────────┬─────────────┘
                 │                             │
    ┌────────────┴───────────┐                 │ Tín hiệu quét LED
    │  CÔNG TẮC CẤU HÌNH     │                 ▼
    │       DIP SWITCH       │    ┌──────────────────────────┐
    │  - Switch 1: Mode 0 / 1│    │  KHỐI DRIVER CÔNG SUẤT   │
    │  - Switch 2: Đèn Vàng  │    │  (74HC595 + ULN2803/FET) │
    │  - Switch 3: Test LED  │    └────────────┬─────────────┘
    └────────────────────────┘                 │
                                               ▼
                                  ┌──────────────────────────┐
                                  │   BẢNG LED 7 ĐOẠN ĐẾM LÙI │
                                  │   (Chữ số lớn D300/D400) │
                                  └──────────────────────────┘
```

---

## 4. Thiết kế phần cứng chi tiết (Hardware Design)

### 4.1. Khối nhận tín hiệu pha đa năng (220VAC / 24VDC)
Khối đầu vào được thiết kế tương thích với cả tín hiệu xoay chiều 220VAC lẫn một chiều 24VDC:
- **Bộ suy hao và tản nhiệt:** Sử dụng mạng điện trở công suất 2W - 3W chịu áp cao, hạn chế dòng qua Opto trong ngưỡng an toàn (1mA - 3mA).
- **Cách ly quang AC hai chiều (Bidirectional Optocoupler):** Sử dụng IC **PC814** hoặc **EL814** có 2 diode phát quang ngược chiều bên trong, giúp bắt trọn cả bán kỳ âm và dương của điện lưới 220VAC mà không gây lệch nhịp.
- **Tầng lọc thông thấp RC & Schmitt Trigger:** Tín hiệu sau cực thu của Opto được đưa qua mắt lọc RC (R = 10kΩ, C = 100nF) để san phẳng các dao động 100Hz/50Hz của điện lưới và triệt tiêu gai nhiễu từ tiếp điểm relay hoặc triac. Tín hiệu số sạch 3.3V được đưa trực tiếp vào các chân ngắt ngoài (EXTI) và bộ đếm Timer của STM32F103.
- **Bảo vệ quá áp:** Bổ sung biến trở chống sét **MOV** ở ngõ vào AC và diode **TVS 3.3V** tại ngõ vào vi điều khiển.

### 4.2. Khối vi điều khiển trung tâm STM32F103
- Sử dụng chip **STM32F103C8T6** với xung nhịp 72MHz từ thạch anh ngoài 8MHz qua khối nhân tần PLL.
- Bộ nhớ Flash 64KB và SRAM 20KB đảm bảo dư dả tài nguyên cho các bộ đệm vòng lưu trữ lịch sử chu kỳ pha đèn.
- Khối nguồn hạ áp sử dụng IC nguồn xung Buck công nghiệp dải rộng kết hợp LDO **AMS1117-3.3V**, tản nhiệt tốt, bảo đảm bo mạch hoạt động bền bỉ trong hộp kín ngoài trời dưới trời nắng gắt.

### 4.3. Khối cấu hình DIP Switch trực tiếp trên board
Mạch tích hợp cụm DIP Switch 4 vị trí kèm điện trở kéo lên (Pull-up) để người vận hành có thể cài đặt tại chỗ mà không cần mang máy tính ra cột đèn:
1. **Bit 1 (Mode 0 / Mode 1):**
   - **Gạt OFF (Mode 0):** Đếm lùi về số 0. Ví dụ: `3 -> 2 -> 1 -> 0 -> Tắt / Chuyển pha`.
   - **Gạt ON (Mode 1):** Đếm lùi về số 1. Ví dụ: `3 -> 2 -> 1 -> Tắt / Chuyển pha`.
2. **Bit 2 (Yellow Countdown):** Cho phép hoặc không cho phép hiển thị đếm lùi cho pha đèn Vàng (thường là 3 giây).
3. **Bit 3 (Flash Sync Test):** Chế độ tự kiểm tra quét toàn bộ các nét LED 7 đoạn (Diagnostic Mode) khi nghiệm thu lắp đặt.
4. **Bit 4 (Day/Night Dimming):** Tùy chỉnh chế độ giảm độ sáng ban đêm để chống chói mắt cho tài xế.

### 4.4. Khối xuất tín hiệu điều khiển màn hình LED 7 đoạn
- Màn hình LED 7 đoạn đếm lùi ngoài trời thường có kích thước lớn (chữ số cao từ 300mm đến 400mm), ghép nối tiếp từ nhiều bóng LED siêu sáng và yêu cầu nguồn 12VDC hoặc 24VDC với dòng điện lớn (hàng trăm mA đến vài Ampe mỗi thanh nét).
- Bo mạch sử dụng chuẩn mở rộng **74HC595** (Serial-in, Parallel-out Shift Register) kết hợp với mảng transistor Darlington **ULN2803** hoặc **Power MOSFET** chịu dòng cao, đảm bảo tín hiệu điều khiển quét LED sắc nét, không bị sụt áp, không bị bóng mờ hay chớp nháy.

---

## 5. Kiến trúc Firmware & Thuật toán xử lý

Firmware được viết bằng ngôn ngữ **C** theo cấu trúc State Machine phi tuần tự (Non-blocking), không sử dụng hàm delay gây nghẽn CPU:

```c
// Trích đoạn mã định nghĩa cấu hình chế độ đếm lùi
typedef enum {
    COUNTDOWN_TO_ZERO = 0,  // Đếm lùi về 0: 3 -> 2 -> 1 -> 0 -> Blank
    COUNTDOWN_TO_ONE  = 1   // Đếm lùi về 1: 3 -> 2 -> 1 -> Blank
} CountdownMode_t;

// Đọc trạng thái cấu hình từ DIP Switch phần cứng
CountdownMode_t Get_Countdown_Mode(void) {
    if (HAL_GPIO_ReadPin(DIP_MODE_GPIO_Port, DIP_MODE_Pin) == GPIO_PIN_SET) {
        return COUNTDOWN_TO_ONE;
    }
    return COUNTDOWN_TO_ZERO;
}
```

### 5.1. Thuật toán tự học và đồng bộ chu kỳ pha (Adaptive Cycle Learning)
1. **Khởi động chu kỳ đầu tiên (Learning Phase):** Khi mới cấp nguồn hoặc khi tủ điều khiển đổi giờ hoạt động, bo mạch đưa màn hình LED về trạng thái chờ (Blank - không hiển thị số). Phần cứng bắt đầu kích hoạt Hardware Timer để đếm chính xác thời lượng tồn tại của pha Xanh ($T_{Green}$), pha Đỏ ($T_{Red}$) và pha Vàng ($T_{Yellow}$).
2. **Thực thi đếm lùi ở chu kỳ tiếp theo (Execution Phase):** Từ chu kỳ thứ 2, khi một pha đèn vừa bật, vi điều khiển nạp giá trị thời gian đã học được của pha đó trừ đi thời gian kết thúc (0 hoặc 1 tùy theo DIP Switch) và bắt đầu xuất đếm lùi từng giây nhịp nhàng theo xung nhịp chuẩn của bộ dao động nội.
3. **Cơ chế chống lệch nhịp khi có sự can thiệp đột xuất:**
   - Trong thực tế, cảnh sát giao thông có thể bấm nút chuyển pha khẩn cấp, hoặc tủ điều khiển chuyển chế độ chớp vàng ban đêm.
   - Nếu tín hiệu pha đèn ngoài thực tế bị ngắt sớm hơn dự kiến, firmware lập tức phát hiện trong vòng **< 10ms** và **tắt màn hình hiển thị ngay lập tức**, đồng thời reset bộ đếm để tránh tình trạng đèn ngoài đã đỏ mà đồng hồ vẫn tiếp tục đếm lùi số xanh.

### 5.2. Chống treo và bảo vệ hệ thống (Fail-safe)
- Tích hợp **Independent Watchdog Timer (IWDG)**: Nếu xảy ra xung tĩnh điện hoặc phóng điện cảm ứng khiến MCU bị đơ, IWDG sẽ tự động tái khởi động vi điều khiển trong vòng **250ms**.
- Toàn bộ tham số chu kỳ được lưu trong RAM được kiểm tra mã checksum chống sai lệch ô nhớ do bức xạ điện từ ngoài trời.

---

## 6. Kết quả thử nghiệm & Khả năng tương thích thực tế

- **Khả năng tương thích:** Đã thử nghiệm thành công trên nhiều dòng tủ điều khiển đèn giao thông tại Việt Nam (tủ điều khiển tín hiệu AC 220V điều khiển bằng Triac, tủ đèn LED 24VDC bán dẫn, tủ PLC Siemens S7-200/1200 và tủ vi điều khiển tự chế).
- **Thời gian phản hồi:** Tự động đồng bộ chuẩn xác chỉ sau duy nhất **01 chu kỳ đèn**.
- **Độ ổn định:** Hoạt động liên tục trong môi trường kiểm nghiệm rung lắc và nhiệt độ cao mà không xuất hiện lỗi treo số hay sai lệch nhịp đếm.
- **Tính tiện lợi tại hiện trường:** Kỹ thuật viên bảo trì chỉ cần đấu nối 4 sợi dây cơ bản (Dây Chung `COM`, Dây Pha `Đỏ`, Dây Pha `Vàng`, Dây Pha `Xanh`) và gạt công tắc DIP switch để chọn kiểu đếm mong muốn mà không phải mang theo cáp nạp hay máy tính xách tay lên trụ đèn.

> *(Hình ảnh chi tiết quá trình lắp đặt thực tế trên trụ đèn, kết cấu bo mạch hoàn thiện và video vận hành thử nghiệm tại hiện trường sẽ được cập nhật bổ sung trong giai đoạn tiếp theo).*
