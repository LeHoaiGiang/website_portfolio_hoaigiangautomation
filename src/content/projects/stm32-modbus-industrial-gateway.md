---
title: "Bộ Chuyển Đổi Gateway Công Nghiệp STM32 Modbus RTU sang MQTT"
slug: "stm32-modbus-industrial-gateway"
description: "Thiết kế và lập trình thiết bị Gateway công nghiệp thu thập dữ liệu cảm biến qua Modbus RTU/RS485 và truyền thông lên Server giám sát qua Ethernet/MQTT."
cover: "/media/stm32-gateway.svg"
category: "STM32"
technologies:
  - "STM32F407"
  - "C/C++"
  - "FreeRTOS"
  - "Modbus RTU"
  - "LwIP"
  - "Ethernet"
  - "KiCad"
date: 2025-11-15
featured: true
published: true
hardware: "STM32F407VET6, PHY LAN8720, cách ly quang RS485 MAX13487, nguồn xung 24VDC hạ áp Buck"
software: "FreeRTOS kernel, LwIP stack, Modbus Master protocol, MQTT Client, Keil MDK-ARM / STM32CubeIDE"
github: "https://github.com/LeHoaiGiang"
demo: "https://www.youtube.com/@lehoaigiangctu"
gallery:
  - "/media/stm32-gateway.svg"
---

## 1. Tổng quan & Bài toán kỹ thuật

Trong các nhà máy sản xuất, việc thu thập dữ liệu tập trung từ các thiết bị đo lường (đồng hồ năng lượng, biến tần, cảm biến nhiệt độ/áp suất) sử dụng chuẩn **RS-485 Modbus RTU** lên hệ thống SCADA/Cloud thường gặp các rào cản:
- Khoảng cách truyền dẫn lớn, dễ bị nhiễu công nghiệp từ biến tần và động cơ công suất lớn.
- Thiếu gateway chuyên dụng có khả năng đệm dữ liệu (buffer) khi mất kết nối mạng.
- Chi phí thiết bị nhập ngoại đắt đỏ, khó tùy biến firmware theo giao thức riêng của nhà máy.

Dự án này hiện thực một bo mạch **Industrial Gateway** sử dụng vi điều khiển **STM32F407 (ARM Cortex-M4 @ 168MHz)**, chạy hệ điều hành thời gian thực **FreeRTOS** nhằm đảm bảo tính ổn định 24/7 và độ trễ cực thấp.

## 2. Mục tiêu kỹ thuật

- Đọc tuần tự dữ liệu từ tối đa **32 slave Modbus RTU** trên cùng một đường bus RS-485.
- Đóng gói dữ liệu định dạng **JSON** và gửi định kỳ lên MQTT Broker thông qua cổng **Ethernet 10/100 Mbps (LAN8720A)**.
- Tích hợp bộ nhớ **EEPROM / Flash SPI** ngoài để lưu trữ tạm thời dữ liệu khi mất kết nối Internet (Data Logging Buffer).
- Thiết kế bo mạch đạt tiêu chuẩn chống sét lan truyền (TVS Diode) và cách ly quang (Optocoupler isolation) cho cổng RS-485.

## 3. Kiến trúc hệ thống

```text
[ Cảm biến 1 ] ──┐
[ Biến tần 2 ] ──┼── [ RS-485 Bus (Modbus RTU) ] ──> [ STM32F407 Gateway ]
[ Đồng hồ 3  ] ──┘                                        │
                                                      (Ethernet / LwIP)
                                                          │
                                                          ▼
                                                  [ MQTT Broker / Cloud ]
```

## 4. Thiết kế phần cứng

1. **Bộ vi điều khiển chính**: STM32F407VET6 (512KB Flash, 192KB RAM).
2. **Khối truyền thông RS-485**:
   - IC chuyển đổi: MAX13487 với tính năng Auto-Direction Control.
   - Cách ly tín hiệu: IC số tốc độ cao và nguồn cách ly DC-DC 5V-5V B0505S.
   - Bảo vệ chống sét: TVS Diode SM712 chuyên dụng cho bus RS-485.
3. **Khối mạng Ethernet**: IC PHY LAN8720A kết nối qua giao tiếp RMII với STM32.
4. **Khối nguồn**: Nguồn công nghiệp 9V - 36VDC đầu vào, sử dụng IC hạ áp Buck LM2596 / MP2307 chống quá áp, ngược cực.

## 5. Kiến trúc phần mềm & Firmware

Firmware được cấu trúc trên nền tảng **FreeRTOS** chia thành các task độc lập:

- **`vTaskModbusMaster`** (Priority High): Quét vòng polling đọc các thanh ghi holding register từ các địa chỉ slave được cấu hình.
- **`vTaskNetworkManager`** (Priority Medium): Quản lý kết nối cáp Ethernet, cấp phát IP động DHCP hoặc IP tĩnh, duy trì kết nối TCP/IP socket.
- **`vTaskMQTTPublisher`** (Priority Medium): Lấy dữ liệu từ hàng đợi (Message Queue) của Modbus Task, serialize thành JSON và publish tới topic tương ứng.
- **`vTaskWatchdog`** (Priority Real-time): Reset watchdog phần cứng IWDG định kỳ, tự động reboot hệ thống nếu xảy ra lỗi deadlock.

## 6. Kết quả thực tế & Ứng dụng

- Hệ thống đã được thử nghiệm liên tục trong môi trường xưởng gia công cơ khí trong 30 ngày không xảy ra sự cố tràn bộ nhớ hay treo vi điều khiển.
- Tốc độ lấy mẫu ổn định 100ms/thiết bị với tỷ lệ lỗi CRC < 0.01%.
- Dễ dàng nâng cấp firmware từ xa (Firmware Over-The-Air / TFTP bootloader).
