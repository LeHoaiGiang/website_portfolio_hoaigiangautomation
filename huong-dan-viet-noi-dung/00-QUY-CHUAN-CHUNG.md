# Quy Chuẩn Viết Nội Dung & Đăng Bài — Hoài Giang Automation

> Thư mục này chứa toàn bộ tài liệu hướng dẫn và mẫu soạn thảo văn bản chuẩn dành cho Thầy Giang khi viết mô tả **Dự án kỹ thuật** và **Khóa học đào tạo**.  
> Làm đúng theo các tài liệu này sẽ đảm bảo bài viết khi hiển thị lên website luôn chuẩn đẹp, hiển thị đúng bộ lọc và chuẩn SEO Google.

---

## 1. Danh sách các tài liệu trong thư mục này

1. [**`01-MAU-VIET-DU-AN.md`**](./01-MAU-VIET-DU-AN.md): Mẫu khung sườn (Template) chuẩn để viết bài thuyết minh dự án kỹ thuật (phần cứng STM32/ESP32/FPGA/PLC).
2. [**`02-MAU-VIET-KHOA-HOC.md`**](./02-MAU-VIET-KHOA-HOC.md): Mẫu khung sườn (Template) chuẩn để viết đề cương chi tiết khóa học thực hành lab.
3. [**`03-CHECKLIST-TRUOC-KHI-DANG.md`**](./03-CHECKLIST-TRUOC-KHI-DANG.md): Bảng kiểm tra 8 bước trước khi xuất bản bài viết để không bị lỗi hiển thị.
4. [**`04-MAU-VIET-GIOI-THIEU.md`**](./04-MAU-VIET-GIOI-THIEU.md): Mẫu chuẩn và hướng dẫn chỉnh sửa trang **Về chúng tôi** (chèn ảnh, số liệu thống kê, năng lực chuyên môn).

---

## 2. Quy chuẩn chung về File và Đường dẫn

### 2.1. Quy tắc đặt Slug (Đường dẫn bài viết)
* **Slug là gì?** Là phần đuôi của liên kết trang web. Ví dụ: `https://.../projects/stm32-modbus-industrial-gateway` thì `stm32-modbus-industrial-gateway` là slug.
* **Quy tắc vàng:**
  * Chỉ dùng **chữ cái thường không dấu** (`a-z`) và số (`0-9`).
  * Các từ cách nhau bằng dấu gạch ngang `-`.
  * Không dùng dấu cách, không dùng ký tự đặc biệt (`_`, `@`, `#`, `/`, `%`).
  * *Ví dụ đúng:* `mach-nguon-xung-buck-24v`, `esp32-can-bus-logger`.
  * *Ví dụ sai:* `Mạch Nguồn 24V!`, `esp32_can_bus_logger`.

### 2.2. Chuẩn bị hình ảnh tải lên (Ảnh bìa & Ảnh minh họa)
* **Thư mục lưu ảnh:** Toàn bộ ảnh sẽ được tải vào thư mục `public/media/`. Khi khai báo trong bài viết, đường dẫn bắt đầu bằng: `/media/ten-anh.jpg`.
* **Kích thước ảnh bìa khuyên dùng:**
  * **Tỷ lệ chuẩn:** `16:9` (ví dụ: `1280 x 720 px` hoặc `1920 x 1080 px`).
  * **Định dạng tối ưu:** `.webp`, `.jpg`, `.png`, hoặc `.svg`.
  * **Dung lượng:** Nên nén dưới `500 KB` mỗi ảnh để website tải nhanh nhất.

### 2.3. Danh mục Lĩnh vực hợp lệ (Category)

Hệ thống bộ lọc tự động phân loại theo các danh mục chuẩn sau (viết hoa đúng chính tả):

* **Đối với Dự án (`category`):**
  * `STM32`
  * `ESP32`
  * `IoT`
  * `FPGA`
  * `PCB`
  * `PLC`
  * `Qt/C++`
  * `Tự động hóa`
  * `Khác`

* **Đối với Khóa học (`category`):**
  * `Lập trình nhúng`
  * `STM32`
  * `ESP32 và IoT`
  * `FPGA / Verilog`
  * `PCB và thực hành phần cứng`
  * `PLC và tự động hóa`
  * `Khác`

---

## 3. Hai cách đăng bài vào website

### Cách 1: Đăng qua giao diện web Pages CMS (Dễ nhất - Khuyên dùng)
1. Mở trang: [https://pagescms.org](https://pagescms.org) và đăng nhập bằng GitHub.
2. Chọn collection **Dự án kỹ thuật** hoặc **Khóa học**.
3. Điền vào các ô theo biểu mẫu có sẵn, tải ảnh trực tiếp từ máy tính lên.
4. Bấm **Save**. Hệ thống sẽ tự động build và cập nhật website.

### Cách 2: Tạo trực tiếp file `.md` trong mã nguồn
1. Dự án: Lưu file mới tại thư mục `src/content/projects/ten-slug.md`.
2. Khóa học: Lưu file mới tại thư mục `src/content/courses/ten-slug.md`.
3. Copy mẫu từ tài liệu `01-MAU-VIET-DU-AN.md` hoặc `02-MAU-VIET-KHOA-HOC.md` vào và chỉnh sửa.
