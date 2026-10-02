---
title: "Trạm Giám Sát Môi Trường & Đo Lường Năng Lượng IoT ESP32"
slug: "esp32-iot-cloud-telemetry-hub"
description: "Thiết bị IoT kết nối Wi-Fi/4G thu thập các thông số điện năng 3 pha, nhiệt ẩm môi trường, bảo mật truyền thông TLS 1.3 và hiển thị trực quan trên Dashboard."
cover: "/media/esp32-iot-cloud.svg"
category: "ESP32"
technologies:
  - "ESP32-S3"
  - "ESP-IDF"
  - "MQTT/TLS"
  - "Wi-Fi"
  - "ThingsBoard"
  - "Grafana"
  - "KiCad"
date: 2025-10-20
featured: true
published: true
hardware: "ESP32-S3-WROOM-1, IC đo điện năng chuyên dụng ADE7758/HLW8032, Cảm biến SHT31, Màn hình OLED 0.96 inch"
software: "ESP-IDF v5.x framework, MbedTLS stack, MQTT client, Webserver cấu hình Wi-Fi captive portal, OTA update"
github: "https://github.com/LeHoaiGiang"
demo: "https://www.youtube.com/@lehoaigiangctu"
gallery:
  - "/media/esp32-iot-cloud.svg"
---

## 1. Tổng quan dự án

Nhu cầu theo dõi chỉ số tiêu thụ năng lượng điện và tình trạng vi khí hậu trong các tủ điện phân phối công nghiệp là rất cấp thiết nhằm:
- Phát hiện sớm hiện tượng quá nhiệt tiếp xúc aptomat hoặc lệch pha điện áp.
- Tự động hóa quá trình ghi nhận số liệu điện năng theo thời gian thực.
- Cảnh báo tức thời qua Telegram / SMS khi dòng điện hoặc nhiệt độ vượt ngưỡng an toàn.

Dự án thiết kế trạm đo đa thông số nhỏ gọn lắp vừa thanh ray tủ điện (DIN-rail mount), sử dụng vi điều khiển **ESP32-S3** kết hợp giao thức **MQTT bảo mật SSL/TLS**.

## 2. Các tính năng chính

- Đo lường điện áp (V), dòng điện (A), công suất tác dụng (kW), hệ số công suất (cos phi) và điện năng tiêu thụ (kWh).
- Đo nhiệt độ và độ ẩm bên trong tủ điện sử dụng cảm biến công nghiệp kỹ thuật số giao tiếp I2C.
- Chế độ **Smart Config / Captive Portal**: Cho phép kỹ thuật viên dùng điện thoại kết nối vào Wi-Fi của thiết bị để cấu hình thông số mạng, MQTT Broker IP và các ngưỡng cảnh báo mà không cần lập trình lại.
- Lưu trữ dữ liệu ngoại tuyến vào bộ nhớ Flash nội bộ lên đến 7 ngày nếu bị đứt kết nối mạng.

## 3. Kiến trúc bảo mật và truyền thông

```text
[ Tủ Điện 3 Pha ] ──> [ Biến Dòng CT + Cảm Biến ]
                              │ (I2C / UART)
                              ▼
                      [ ESP32-S3 Hub ]
                              │
                    (MbedTLS 1.3 / MQTT)
                              │
                              ▼
               [ Cloud / ThingsBoard Server ] ──> [ Alert Telegram Bot ]
```

## 4. Phần mềm & Quản trị

- Firmware được viết bằng **C (ESP-IDF)** thuần, tận dụng tối đa 2 lõi CPU Xtensa 240MHz: Lõi 0 xử lý truyền thông Wi-Fi/TLS và webserver, Lõi 1 chuyên tính toán thuật toán giải mã tín hiệu đo lường thời gian thực.
- Hỗ trợ cơ chế **Dual OTA partition**: Tải bản cập nhật firmware qua Internet một cách an toàn, tự động rollback về phiên bản cũ nếu bản mới gặp sự cố khởi động.
