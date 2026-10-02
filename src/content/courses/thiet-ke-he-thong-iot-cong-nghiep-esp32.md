---
title: "Thiết Kế Hệ Thống IoT Công Nghiệp Với ESP32 & Nền Tảng Cloud"
slug: "thiet-ke-he-thong-iot-cong-nghiep-esp32"
description: "Khóa học thực chiến xây dựng thiết bị IoT chuẩn công nghiệp từ lập trình firmware ESP-IDF, truyền thông bảo mật TLS/MQTT đến thiết kế Dashboard giám sát dữ liệu thời gian thực."
cover: "/media/course-iot-esp32.svg"
category: "ESP32 và IoT"
level: "Trung cấp"
format: "Kết hợp Online & Thực hành Lab"
duration: "8 tuần (24 buổi)"
status: "Sắp mở"
featured: true
published: true
prerequisites: "Biết lập trình C cơ bản. Có hiểu biết sơ bộ về mạng máy tính (IP, TCP/UDP)."
outcomes:
  - "Lập trình thành thạo vi điều khiển ESP32 bằng framework chuẩn hãng ESP-IDF."
  - "Nắm vững cơ chế kết nối Wi-Fi, Ethernet, Bluetooth BLE và xử lý tự động phục hồi kết nối (Auto-reconnect)."
  - "Làm chủ giao thức MQTT qua kênh bảo mật MbedTLS (chứng chỉ SSL/TLS Certificate)."
  - "Xây dựng tính năng cập nhật firmware từ xa an toàn (FOTA - Firmware Over-The-Air)."
  - "Tích hợp và xây dựng Dashboard hiển thị dữ liệu đồ thị trên nền tảng ThingsBoard / Grafana."
hardware:
  - "Kit phát triển ESP32-S3 hoặc ESP32 DevKit V1"
  - "Cảm biến nhiệt độ, áp suất, dòng điện công nghiệp 4-20mA / Modbus"
  - "Mạch chuyển đổi USB-UART và cáp nạp"
software:
  - "VS Code với ESP-IDF Extension (FreeRTOS core)"
  - "Mosquitto MQTT Broker & MQTT Explorer"
  - "Nền tảng ThingsBoard Community Edition / Node-RED"
contactLabel: "Đăng ký nhận thông tin khi mở lớp"
contactUrl: "/contact"
date: 2025-11-20
---

## 1. Tổng quan khóa học

Internet of Things (IoT) trong môi trường công nghiệp đòi hỏi độ tin cậy cao hơn rất nhiều so với các ứng dụng thử nghiệm thông thường. Thiết bị phải có khả năng hoạt động liên tục trong điều kiện nhiễu sóng, mất điện đột ngột hoặc mạng chập chờn mà không bị treo hay mất dữ liệu.

Khóa học trang bị cho học viên toàn bộ quy trình thiết kế firmware IoT chuyên nghiệp với **ESP-IDF**, thay vì dựa vào các thư viện Arduino thiếu an toàn bộ nhớ.

## 2. Các chuyên đề trọng tâm

1. **Khởi tạo và cấu hình ESP-IDF**: Cấu trúc project CMake, cấu hình `sdkconfig` bằng Menuconfig, cơ chế Event Loop và FreeRTOS Dual-Core.
2. **Quản lý kết nối & Trải nghiệm cấu hình**: Tự động phát Wi-Fi AP kèm Webserver (Captive Portal) để người dùng cài đặt tài khoản mạng bằng điện thoại; lưu cấu hình vào phân vùng NVS (Non-Volatile Storage).
3. **Truyền thông IoT Bảo mật**: Giao thức MQTT qua TLS, xác thực 2 chiều (Mutual TLS / Client Certificates), đóng gói dữ liệu JSON / Protobuf.
4. **An toàn thiết bị & Cập nhật từ xa (OTA)**: Phân vùng bộ nhớ Flash (Factory, OTA_0, OTA_1), cơ chế kiểm tra tính toàn vẹn bản ghi firmware (SHA-256), chống mã độc và tự động khôi phục bản cũ nếu firmware mới gặp sự cố.
5. **Nền tảng Cloud & Bảng điều khiển (Dashboard)**: Dựng server IoT cục bộ bằng Docker, cấu hình ThingsBoard, tạo widget điều khiển nút bấm, biểu đồ xu hướng và cảnh báo qua Telegram.
