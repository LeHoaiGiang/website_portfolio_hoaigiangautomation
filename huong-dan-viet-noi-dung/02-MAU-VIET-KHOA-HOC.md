# Mẫu Chuẩn Viết Bài Mô Tả Khóa Học & Đào Tạo

> **Quy tắc vàng của thương hiệu:** Khóa học là nơi Thầy Giang chia sẻ chuyên môn đào tạo kỹ thuật thực chiến. **Tuyệt đối không hiển thị học phí, giá tiền hoặc nút mua hàng/thanh toán**. Mọi trao đổi chi tiết sẽ thực hiện thông qua liên hệ trực tiếp.

---

## 1. Mẫu Markdown hoàn chỉnh (Copy & Dán)

```markdown
---
title: "Tên Khóa Học Rõ Ràng (Ví dụ: Lập Trình Vi Điều Khiển STM32 Thực Chiến)"
slug: "ten-khoa-hoc-viet-thuong-khong-dau"
description: "Đoạn giới thiệu ngắn 1-2 câu nêu bật mục tiêu thực hành và giá trị cốt lõi mà người học nhận được."
cover: "/media/ten-anh-bia-khoa-hoc.jpg"
category: "STM32"
level: "Trung cấp"
format: "Trực tiếp tại Lab hoặc Online kèm bộ Kit thực hành"
duration: "10 tuần (30 buổi học & thực hành)"
status: "Đang nhận đăng ký"
featured: true
published: true
prerequisites: "Đã nắm vững ngôn ngữ lập trình C cơ bản (con trỏ, struct, bitwise). Có kiến thức điện tử cơ bản."
outcomes:
  - "Làm chủ kiến trúc vi điều khiển ARM Cortex-M và cách tra cứu Datasheet chuyên nghiệp."
  - "Thành thạo lập trình các ngoại vi: GPIO, Timer/PWM, DMA, ADC, UART, SPI, I2C, CAN-Bus."
  - "Nắm vững nguyên lý và triển khai hệ điều hành thời gian thực FreeRTOS."
  - "Tự tay thiết kế và hoàn thiện đồ án thực tế: Bộ điều khiển công nghiệp giao tiếp Modbus RTU / RS485."
hardware:
  - "Bo mạch thực hành STM32F407 Discovery hoặc BlackPill STM32F401/F411"
  - "Mạch nạp và gỡ lỗi ST-Link V2"
  - "Module truyền thông RS-485, USB to TTL CP2102"
  - "Logic Analyzer 8 kênh phục vụ đo đạc dạng sóng ngoại vi"
software:
  - "STM32CubeIDE hoặc Keil MDK-ARM"
  - "STM32CubeMX cấu hình cây xung nhịp Clock Tree"
  - "Saleae Logic Software giải mã giao thức truyền thông"
contactLabel: "Liên hệ tư vấn khóa học này"
contactUrl: "/contact"
date: 2026-03-10
---

## 1. Giới thiệu tổng quan khóa học

Trình bày lý do xây dựng khóa học và định hướng phương pháp giảng dạy:
- Khóa học tập trung giải quyết các bài toán kỹ thuật thực tế gặp phải khi đi làm tại doanh nghiệp.
- Học viên được cầm tay chỉ việc trên phần cứng thực tế, sử dụng máy hiện sóng (Oscilloscope) và logic analyzer để bắt tín hiệu, thay vì chỉ lập trình mô phỏng trên phần mềm.
- Học viên hiểu sâu bản chất từ thanh ghi (Bare-metal register), thư viện chuẩn (HAL/LL) đến hệ điều hành đa nhiệm (RTOS).

## 2. Đối tượng học viên phù hợp

- Sinh viên các ngành Điện - Điện tử, Tự động hóa, Cơ điện tử, CNTT muốn theo đuổi công việc Kỹ sư Nhúng (Embedded Engineer).
- Kỹ sư đang làm việc muốn chuyển đổi hoặc nâng cấp kiến thức từ các vi điều khiển 8-bit lên vi xử lý 32-bit hiệu năng cao.
- Các bạn nghiên cứu R&D muốn tự tay làm chủ thiết kế sản phẩm công nghệ từ đầu đến cuối.

## 3. Chương trình đào tạo chi tiết (Syllabus)

### Phần 1: Kiến trúc vi xử lý & Thiết lập công cụ chuẩn
- **Buổi 1:** Tổng quan kiến trúc nhân vi xử lý, cấu trúc bản đồ bộ nhớ (Memory Map) và quy trình biên dịch nạp code.
- **Buổi 2:** Phân tích cây xung nhịp (Clock Tree, PLL, Prescaler) và kỹ thuật gỡ lỗi phần cứng từng bước (Step-by-step Debugging).

### Phần 2: Ngoại vi cơ bản & Cơ chế tối ưu hiệu năng DMA
- **Buổi 3:** Lập trình GPIO nâng cao, ngắt ngoài EXTI và kỹ thuật chống dội nút nhấn phần cứng.
- **Buổi 3 - 4:** Bộ định thời Timer, đo độ rộng xung (Input Capture) và băm xung PWM điều khiển góc quay động cơ / biến tần.
- **Buổi 5:** Bộ biến đổi tương tự số (ADC) đa kênh kết hợp cơ chế DMA (Direct Memory Access) chạy nền không chiếm dụng CPU.
- **Buổi 6:** Giao tiếp ngoại vi nối tiếp: UART/USART vòng đệm (Ring Buffer) với ngắt phát hiện rảnh dòng IDLE Line; SPI kết nối thẻ nhớ và I2C đọc cảm biến.

### Phần 3: Giao thức truyền thông công nghiệp & Mạng thiết bị
- **Buổi 7:** Chuẩn truyền thông vi sai RS-485: Thiết kế mạch thu phát và xử lý nhiễu điện từ.
- **Buổi 8:** Hiện thực giao thức Modbus RTU (Master / Slave) và xử lý lỗi gói tin CRC-16.
- **Buổi 9:** Nhập môn mạng CAN-Bus (Controller Area Network) ứng dụng trong ô tô và máy móc tự động.

### Phần 4: Hệ điều hành thời gian thực FreeRTOS
- **Buổi 10:** Khái niệm Real-time OS, cơ chế lập lịch Scheduler, Task States và Context Switching.
- **Buổi 11:** Kỹ thuật giao tiếp và đồng bộ giữa các tác vụ: Hàng đợi Message Queue, Binary / Counting Semaphore, Mutex chống tranh chấp tài nguyên.
- **Buổi 12:** Quản lý bộ nhớ heap, Software Timers và kỹ thuật tối ưu chống tràn ngăn xếp (Stack Overflow).

### Phần 5: Đồ án thực chiến & Đánh giá tốt nghiệp
- **Buổi 13 - 15:** Học viên tự tay phát triển một đồ án phần cứng hoàn chỉnh dưới sự hướng dẫn của Thầy Giang.
- Đánh giá mã nguồn, chuẩn clean code và kỹ thuật đóng gói tài liệu kỹ thuật chuyên nghiệp.
```

---

## 2. Bảng tra cứu các trường thông tin trong Khóa Học

| Trường | Kiểu dữ liệu | Bắt buộc? | Hướng dẫn nhập |
|---|---|:---:|---|
| `title` | Văn bản | **Có** | Tên khóa học rõ ràng, chuyên nghiệp. |
| `slug` | Văn bản | **Có** | Đường dẫn URL không dấu (ví dụ: `lap-trinh-nhung-stm32`). |
| `description` | Văn bản | **Có** | Tóm tắt ngắn gọn 1-2 câu về nội dung khóa học. |
| `cover` | Đường dẫn ảnh | **Có** | Ảnh bìa đại diện (ví dụ: `/media/course-stm32.svg`). |
| `category` | Danh mục | **Có** | Chọn 1: `Lập trình nhúng`, `STM32`, `ESP32 và IoT`, `FPGA / Verilog`, `PCB và thực hành phần cứng`, `PLC và tự động hóa`, `Khác`. |
| `level` | Văn bản | Không | Điền một trong các giá trị: `Cơ bản`, `Trung cấp`, `Nâng cao`, hoặc `Mọi cấp độ`. |
| `format` | Văn bản | Không | Hình thức học (ví dụ: *Trực tiếp tại Lab*, *Online kèm Kit*, *Kết hợp Online & Lab*). |
| `duration` | Văn bản | Không | Thời lượng dự kiến (ví dụ: *8 tuần (24 buổi)*). |
| `status` | Lựa chọn | Không | Chọn 1 trong 4 trạng thái: `Đang nhận đăng ký` (màu xanh lá), `Sắp mở` (màu cam), `Đang cập nhật` (màu xanh dương), hoặc `Đã kết thúc` (màu tối). |
| `featured` | Đúng/Sai (boolean)| Không | Để `true` để đưa khóa học lên vị trí nổi bật tại Trang chủ; để `false` nếu chỉ nằm trong trang Khóa học. |
| `published` | Đúng/Sai (boolean)| Không | Để `true` để công khai; để `false` để lưu bản nháp ẩn. |
| `prerequisites`| Văn bản | Không | Yêu cầu kiến thức đầu vào để người học chuẩn bị. |
| `outcomes` | Danh sách | Không | 3 - 5 mục tiêu kiến thức học viên đạt được sau khi học xong. |
| `hardware` | Danh sách | Không | Danh sách linh kiện, kit vi điều khiển cần cho khóa học. |
| `software` | Danh sách | Không | Danh sách phần mềm lập trình cần cài đặt trên máy tính học viên. |
| `contactLabel` | Văn bản | Không | Nhãn nút bấm (ví dụ: *Liên hệ tư vấn khóa học này*). |
| `contactUrl` | Đường dẫn | Không | Mặc định là `/contact` (dẫn tới trang liên hệ). |
