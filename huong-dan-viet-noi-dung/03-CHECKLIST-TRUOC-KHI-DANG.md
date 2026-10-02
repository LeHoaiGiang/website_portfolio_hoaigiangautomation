# Bảng Kiểm Tra Nhanh (Checklist) Trước Khi Đăng Bài

> Hãy dành 1 phút rà soát 8 điều dưới đây trước khi bấm **Save** trên Pages CMS hoặc commit vào GitHub để đảm bảo bài viết khi hiển thị lên website luôn chuẩn đẹp và không bị lỗi.

---

### [ ] 1. Kiểm tra Slug (Định danh đường dẫn URL)
* [ ] Slug là chữ thường, không dấu tiếng Việt, không chứa khoảng trắng.
* [ ] Các từ cách nhau bằng dấu gạch ngang (Ví dụ: `bo-dieu-khien-dong-co-foc`).
* [ ] Slug chưa từng được dùng cho bài viết nào khác (tránh trùng lặp link).

---

### [ ] 2. Kiểm tra Danh mục (Category)
* [ ] Tên danh mục được viết chính xác theo danh sách chuẩn:
  * **Dự án:** `STM32`, `ESP32`, `IoT`, `FPGA`, `PCB`, `PLC`, `Qt/C++`, `Tự động hóa`, `Khác`.
  * **Khóa học:** `Lập trình nhúng`, `STM32`, `ESP32 và IoT`, `FPGA / Verilog`, `PCB và thực hành phần cứng`, `PLC và tự động hóa`, `Khác`.
* [ ] *Lưu ý:* Nếu gõ sai chính tả (ví dụ gõ `stm32` chữ thường hoặc `iot` chữ thường), bộ lọc bên ngoài web sẽ không nhóm đúng bài viết.

---

### [ ] 3. Kiểm tra Ảnh bìa (Cover Image)
* [ ] Ảnh bìa đã được tải vào thư mục `public/media/`.
* [ ] Đường dẫn ảnh trong bài viết bắt đầu bằng `/media/...` (Ví dụ: `/media/mach-esp32-can.jpg`).
* [ ] Ảnh có tỷ lệ chữ nhật ngang xấp xỉ `16:9` để không bị méo hoặc cắt lệch trên điện thoại.
* [ ] Dung lượng ảnh dưới `500 KB` (nếu ảnh chụp từ điện thoại dung lượng lớn 3-5MB, nên nén trước qua các trang như TinyPNG để web tải nhanh).

---

### [ ] 4. Kiểm tra Trạng thái Xuất bản (`published`)
* [ ] Nếu bài đã viết xong và muốn mọi người thấy ngay: Đặt `published: true`.
* [ ] Nếu bài đang viết dở, muốn lưu tạm: Đặt `published: false` (bài sẽ được giấu kín hoàn toàn).

---

### [ ] 5. Kiểm tra Vị trí Nổi bật (`featured`)
* [ ] Nếu muốn bài xuất hiện tại khu vực **Nổi bật ở Trang chủ**: Đặt `featured: true`.
* [ ] Nếu chỉ muốn bài nằm trong trang danh mục Dự án hoặc Khóa học: Đặt `featured: false`.
* [ ] *Khuyên dùng:* Chỉ nên chọn từ 2 đến 4 bài nổi bật nhất để trang chủ gọn gàng, súc tích.

---

### [ ] 6. Riêng đối với Khóa học (Courses): Quy tắc Giá
* [ ] **Tuyệt đối không điền giá tiền, học phí, ưu đãi giảm giá hay thanh toán.**
* [ ] Để liên hệ trao đổi lộ trình hoặc tư vấn, hướng người xem bấm nút *Liên hệ hỏi khóa học* hoặc nhắn tin Zalo `0336379944`.

---

### [ ] 7. Định dạng văn bản Markdown chuẩn
* [ ] Tiêu đề các mục lớn dùng `## ` (Ví dụ: `## 1. Tổng quan dự án`).
* [ ] Tiêu đề các mục nhỏ dùng `### ` (Ví dụ: `### Phần 1: Kiến trúc phần cứng`).
* [ ] Các đoạn mã nguồn lập trình đặt trong khối 3 dấu nháy ngược kèm tên ngôn ngữ (Ví dụ: ````c ... ```` hoặc ````verilog ... ````).
* [ ] Danh sách gạch đầu dòng bắt đầu bằng dấu gạch ngang và một dấu cách `- `.

---

### [ ] 8. Kiểm tra liên kết ngoài (GitHub & Video)
* [ ] Link GitHub bắt đầu đầy đủ bằng `https://github.com/...`.
* [ ] Link video YouTube kiểm tra xem video có đang để chế độ Công khai (Public) hoặc Không công khai (Unlisted) để người xem có thể mở được.
