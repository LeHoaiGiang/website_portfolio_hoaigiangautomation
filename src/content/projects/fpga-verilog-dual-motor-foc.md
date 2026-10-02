---
title: "Bộ Điều Khiển Động Cơ Bước / Servo FOC Tốc Độ Cao Sử Dụng FPGA Verilog"
slug: "fpga-verilog-dual-motor-foc"
description: "Hiện thực giải thuật điều khiển tựa từ thông FOC (Field-Oriented Control) và phát xung SVPWM đa trục trên FPGA với chu kỳ điều khiển dưới 1 microsecond."
cover: "/media/fpga-motor-controller.svg"
category: "FPGA"
technologies:
  - "FPGA"
  - "Verilog HDL"
  - "Intel Cyclone IV"
  - "FOC"
  - "SVPWM"
  - "Quartus Prime"
  - "ModelSim"
date: 2025-08-10
featured: false
published: true
hardware: "Bo mạch FPGA Cyclone IV EP4CE6, Cầu H công suất MOSFET 3 pha, Mạch giải mã Encoder quang học 2500 xung"
software: "Verilog HDL, Testbench mô phỏng ModelSim, Giao diện giám sát phần cứng qua cổng UART/JTAG"
github: "https://github.com/LeHoaiGiang"
demo: ""
gallery:
  - "/media/fpga-motor-controller.svg"
---

## 1. Tổng quan & Thách thức

Điều khiển động cơ không chổi than (BLDC / PMSM) ở tốc độ cao và độ chính xác micro-positioning đòi hỏi chu kỳ tính toán vòng lặp dòng điện (Current Loop) cực ngắn (< 5 µs). Các vi điều khiển tuần tự truyền thống thường bị nghẽn cổ chai tính toán các phép biến đổi hệ tọa độ Clarke/Park và thuật toán phát xung vector không gian (SVPWM).

Bằng cách tận dụng khả năng tính toán song song phần cứng của **FPGA**, toàn bộ thuật toán FOC được pipeline thành các khối mạch logic số, giảm thời gian chu kỳ xuống còn **800 nanoseconds**.

## 2. Kiến trúc khối RTL Verilog

Hệ thống được thiết kế theo module hóa trong ngôn ngữ Verilog HDL:

1. **`clarke_transform.v`**: Chuyển đổi dòng 3 pha $I_a, I_b, I_c$ sang hệ quy chiếu cố định $I_\alpha, I_\beta$.
2. **`cordic_park.v`**: Sử dụng thuật toán CORDIC phần cứng không cần bảng tra cứu Sin/Cos để biến đổi hệ tọa độ quay $I_d, I_q$.
3. **`pi_controller.v`**: 2 bộ điều khiển PI số (Proportional-Integral) độc lập cho trục d và trục q với cơ chế Anti-windup.
4. **`svpwm_generator.v`**: Tạo 6 kênh xung PWM đối xứng với Dead-time 500ns cấu hình được nhằm chống hiện tượng ngắn mạch nhánh cầu MOSFET.
5. **`quad_encoder_decoder.v`**: Đọc tín hiệu quadrature A/B/Z từ encoder độ phân giải cao để xác định góc rotor thời gian thực.

## 3. Kết quả mô phỏng và chạy thực nghiệm

- Tần số xung clock hệ thống: **50 MHz**.
- Độ trễ phản hồi dòng điện đến ngõ ra PWM: **< 1 µs**.
- Động cơ hoạt động êm ái, mô-men xoắn phẳng, triệt tiêu gần như hoàn toàn tiếng rít tần số âm thanh so với phương pháp điều khiển 6 bước thông thường.
