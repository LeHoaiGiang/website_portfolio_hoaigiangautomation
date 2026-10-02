---
title: "Hệ Thống Tự Động Hóa Dây Chuyền Chiết Rót & Đóng Gói Sử Dụng PLC Siemens S7-1200"
slug: "plc-s7-1200-scada-packaging-line"
description: "Lập trình điều khiển tự động dây chuyền chiết rót định lượng, tích hợp màn hình HMI cảm ứng và truyền thông Modbus TCP kết nối hệ thống quản lý sản xuất SCADA."
cover: "/media/plc-scada-system.svg"
category: "PLC"
technologies:
  - "PLC S7-1200"
  - "TIA Portal"
  - "HMI KTP700"
  - "Modbus TCP"
  - "SCADA"
  - "Biến tần V20"
date: 2025-06-05
featured: false
published: true
hardware: "PLC Siemens CPU 1214C DC/DC/DC, Màn hình HMI Siemens KTP700 Basic, Biến tần Sinamics V20, Cụm loadcell cân định lượng"
software: "Siemens TIA Portal V18, SCADA WinCC Runtime Advanced, Ngôn ngữ lập trình Ladder (LAD) & SCL"
github: ""
demo: "https://www.youtube.com/@lehoaigiangctu"
gallery:
  - "/media/plc-scada-system.svg"
---

## 1. Tổng quan hệ thống

Dự án nâng cấp hệ thống điều khiển tự động cho dây chuyền chiết rót chất lỏng và dán nhãn tự động công suất 120 sản phẩm/phút tại xưởng sản xuất:
- Cần độ chính xác định lượng thể tích sai số < 1%.
- Đồng bộ tốc độ băng tải với đầu chiết thông qua biến tần điều khiển mạng truyền thông Profinet/Modbus TCP.
- Ghi nhận lịch sử vận hành, cảnh báo lỗi và tính toán hiệu suất thiết bị tổng thể (OEE).

## 2. Giải pháp kỹ thuật

- **PLC Điều khiển trung tâm**: Siemens S7-1200 (CPU 1214C) với các khối hàm FB chuẩn hóa viết bằng ngôn ngữ SCL (Structured Control Language).
- **Điều khiển PID chiết rót**: Kết hợp van khí nén tác động nhanh 2 cấp (Fast-filling / Fine-filling) dựa trên tín hiệu analog từ bộ khuyếch đại loadcell.
- **Giao diện vận hành tại chỗ (HMI)**: Màn hình cảm ứng màu 7 inch hiển thị trực quan sơ đồ dòng chảy, cho phép cài đặt thông số công thức (Recipe Management) cho từng mã hàng.
- **Kết nối cấp cao (SCADA)**: Máy tính công nghiệp giám sát tập trung qua mạng LAN Ethernet công nghiệp, lưu trữ dữ liệu vào cơ sở dữ liệu và xuất báo cáo tự động theo ca làm việc.
