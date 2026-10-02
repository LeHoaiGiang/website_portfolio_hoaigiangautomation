# Mẫu Chuẩn Viết Bài Mô Tả Dự Án Kỹ Thuật

> File này cung cấp mẫu chuẩn (Template) hoàn chỉnh để Thầy Giang soạn thảo một bài viết giới thiệu dự án phần cứng/phần mềm nhúng.  
> Thầy chỉ cần copy toàn bộ đoạn mã trong khung bên dưới, tạo file mới và thay thế bằng nội dung thực tế của mình.

---

## 1. Mẫu Markdown hoàn chỉnh (Copy & Dán)

```markdown
---
title: "Tên Dự Án Viết Hoa Rõ Ràng (Ví dụ: Bo Mạch Gateway STM32 Modbus RTU)"
slug: "ten-du-an-viet-thuong-khong-dau"
description: "Đoạn tóm tắt ngắn gọn từ 1 đến 2 câu giới thiệu mục tiêu chính và công nghệ cốt lõi của dự án."
cover: "/media/ten-anh-bia-du-an.jpg"
category: "STM32"
technologies:
  - "STM32F407"
  - "C/C++"
  - "FreeRTOS"
  - "RS-485"
  - "KiCad"
date: 2026-03-15
featured: true
published: true
hardware: "STM32F407VET6, PHY LAN8720A, IC cách ly quang MAX13487, Nguồn xung 24VDC hạ áp 3.3V"
software: "FreeRTOS Kernel, LwIP Stack, Giao thức Modbus Master, MQTT Client, Keil MDK"
github: "https://github.com/LeHoaiGiang/ten-repo-neu-co"
demo: "https://youtube.com/watch?v=link-video-neu-co"
gallery:
  - "/media/anh-so-do-nguyen-ly.jpg"
  - "/media/anh-mach-in-3d.jpg"
  - "/media/anh-chup-mach-thuc-te.jpg"
---

## 1. Tổng quan & Bài toán kỹ thuật

Mô tả bối cảnh ra đời của dự án:
- Vấn đề thực tế trong nhà máy hoặc đời sống cần giải quyết là gì?
- Tại sao lại chọn giải pháp này thay vì các thiết bị thương mại có sẵn trên thị trường?
- Lợi ích về mặt chi phí, độ ổn định hoặc khả năng tùy biến khi tự phát triển phần cứng/firmware.

## 2. Mục tiêu kỹ thuật & Thông số chính

Liệt kê các thông số kỹ thuật cốt lõi đạt được:
- **Tốc độ xử lý / Tần số lấy mẫu:** (Ví dụ: Chu kỳ đọc Modbus 100ms, độ trễ phản hồi < 5ms).
- **Chuẩn truyền thông:** (Ví dụ: RS-485 Half-duplex, Ethernet 10/100 Mbps, CAN-Bus 1Mbps).
- **Điện áp hoạt động:** (Ví dụ: Nguồn vào công nghiệp 9V - 36VDC, tích hợp chống ngược cực và bảo vệ quá dòng).
- **Môi trường hoạt động:** Nhiệt độ xưởng công nghiệp -10°C đến 65°C.

## 3. Kiến trúc sơ đồ hệ thống

Mô tả luồng truyền nhận tín hiệu từ cảm biến/thiết bị qua vi điều khiển đến máy tính hoặc Cloud. Có thể vẽ sơ đồ khối dạng chữ:

```text
[ Cảm Biến Modbus / Biến Tần ] 
               │ (RS-485 Bus)
               ▼
   [ Bo Mạch STM32 Gateway ] ── (Ethernet / LwIP) ──> [ Máy Chủ Giám Sát SCADA / Cloud ]
               │
          [ Lưu Trữ Thẻ Nhớ SD Buffer ]
```

## 4. Thiết kế phần cứng (Hardware)

Trình bày chi tiết về phần cứng:
- **Lựa chọn linh kiện:** Lý do chọn dòng vi điều khiển, IC nguồn, IC truyền thông.
- **Thiết kế mạch in (Layout PCB):** Số lớp (2 layer / 4 layer), kỹ thuật chia mặt đất (Ground Plane), phân tách nguồn analog và digital.
- **Tiêu chuẩn chống nhiễu (EMC/EMI):** Bổ sung diode TVS chống sét lan truyền, cuộn lọc common-mode choke, cách ly quang optocoupler cho các cổng tín hiệu ngoại vi.

## 5. Kiến trúc phần mềm & Firmware (Software)

Giải thích cấu trúc mã nguồn:
- **Hệ điều hành / Cấu trúc chương trình:** Giải thích cách phân chia các Task trong FreeRTOS (Task đo lường, Task mạng, Task watchdog).
- **Cơ chế đồng bộ:** Sử dụng Queue, Semaphore hoặc Mutex để truyền dữ liệu an toàn giữa các luồng.
- **Cơ chế an toàn (Failsafe):** Tự động phát hiện đứt cáp truyền thông, tự động khởi động lại bằng Watchdog Timer khi phát hiện lỗi treo hệ thống.

## 6. Kết quả thực tế & Ứng dụng

- Hình ảnh thiết bị sau khi gia công SMT và lắp ráp hoàn chỉnh vào vỏ hộp công nghiệp.
- Kết quả chạy thử nghiệm liên tục trong điều kiện xưởng thực tế (thời gian chạy liên tục, tỷ lệ gói tin bị lỗi).
- Đánh giá khả năng mở rộng trong tương lai.
```

---

## 2. Giải thích chi tiết các trường Frontmatter (Phần đầu bài viết)

| Trường | Kiểu dữ liệu | Bắt buộc? | Hướng dẫn nhập |
|---|---|:---:|---|
| `title` | Văn bản | **Có** | Tên dự án viết hoa rõ ràng, ngắn gọn, có tính kỹ thuật. |
| `slug` | Văn bản | **Có** | Tên link URL không dấu (ví dụ: `stm32-can-gateway`). |
| `description` | Văn bản | **Có** | 1 - 2 câu tóm tắt (hiển thị ở thẻ xem trước và kết quả tìm kiếm Google). |
| `cover` | Đường dẫn ảnh | **Có** | Ảnh bìa chính đại diện cho dự án (ví dụ: `/media/stm32-gateway.jpg`). |
| `category` | Danh mục | **Có** | Chọn 1: `STM32`, `ESP32`, `IoT`, `FPGA`, `PCB`, `PLC`, `Qt/C++`, `Tự động hóa`, `Khác`. |
| `technologies` | Danh sách | Không | Các chip, ngôn ngữ, phần mềm (mỗi dòng bắt đầu bằng dấu `- `). |
| `date` | Ngày (YYYY-MM-DD)| Không | Ngày hoàn thành dự án (ví dụ: `2026-03-20`). |
| `featured` | Đúng/Sai (boolean)| Không | Để `true` nếu muốn đưa ra Trang chủ; để `false` nếu chỉ nằm trong trang Dự án. |
| `published` | Đúng/Sai (boolean)| Không | Để `true` để công khai; để `false` để lưu bản nháp ẩn. |
| `hardware` | Văn bản ngắn | Không | Tóm tắt các chip và linh kiện chính (hiển thị trên thẻ dự án). |
| `software` | Văn bản ngắn | Không | Tóm tắt firmware/stack phần mềm chính. |
| `github` | Link URL | Không | Đường link mã nguồn (bỏ trống nếu bảo mật bản quyền). |
| `demo` | Link URL | Không | Đường link xem video YouTube chạy thực tế. |
| `gallery` | Danh sách ảnh | Không | Danh sách các ảnh chụp bổ sung để website tự xếp thành album ảnh. |
