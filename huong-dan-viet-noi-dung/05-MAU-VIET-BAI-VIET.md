# Mẫu Chuẩn Soạn Thảo Bài Viết & Chia Sẻ Kinh Nghiệm Kỹ Thuật

> **Tài liệu hướng dẫn dành cho Thầy Giang:**  
> Dùng mẫu này để viết các bài viết chia sẻ kinh nghiệm thực chiến, cẩm nang kỹ thuật, phân tích lỗi (debug), tối ưu firmware hoặc hướng dẫn thiết kế mạch điện tử để đăng lên mục **Bài viết** (`/blog`).

---

## 1. Thông tin quản lý file

* **Vị trí lưu file trên máy tính:**  
  `src/content/blog/ten-slug-bai-viet.md`  
  *(Tên file bắt buộc phải trùng khớp với `slug` khai báo bên trong file).*
* **Ví dụ:**  
  Nếu slug là `kinh-nghiem-layout-pcb-chong-nhieu-emc`  
  => Tên file sẽ là: `src/content/blog/kinh-nghiem-layout-pcb-chong-nhieu-emc.md`

---

## 2. Phần khai báo thông số bài viết (Frontmatter)

Copy chính xác phần nằm giữa hai hàng gạch `---` sau đây đặt ở dòng đầu tiên của file:

```yaml
---
title: "Tiêu đề bài viết kỹ thuật (Ví dụ: Kinh Nghiệm Layout PCB Chống Nhiễu EMC Trong Môi Trường Công Nghiệp)"
slug: "kinh-nghiem-layout-pcb-chong-nhieu-emc"
description: "Tóm tắt ngắn gọn 1-2 câu về nội dung bài viết. Đoạn này sẽ xuất hiện trên thẻ bài viết và hiển thị khi chia sẻ link lên Facebook, Zalo, Google."
cover: "/media/blog-pcb-emc.svg"
category: "Thiết kế PCB"
tags: ["PCB", "EMC", "Phần cứng", "Chống nhiễu", "KiCad"]
date: 2026-03-25
readingTime: "7 phút đọc"
author: "Hoài Giang"
featured: true
published: true
---
```

### Giải thích chi tiết các trường:

| Trường | Bắt buộc? | Mô tả & Lưu ý |
| :--- | :---: | :--- |
| `title` | **Có** | Tiêu đề bài viết. Nên viết hoa các chữ cái đầu từ quan trọng, đặt tên rõ ràng, hấp dẫn người đọc chuyên môn. |
| `slug` | **Có** | Tên đường dẫn duy nhất, viết thường không dấu, nối bằng dấu `-`. Ví dụ: `toi-uu-freertos-stm32`. |
| `description` | **Có** | Mô tả tóm tắt dài khoảng 120-160 ký tự giúp chuẩn SEO và giúp người đọc hiểu ngay bài viết giải quyết vấn đề gì. |
| `cover` | Không | Ảnh bìa bài viết. Tải ảnh vào `public/media/` rồi điền `/media/ten-anh.jpg`. Nếu để trống sẽ tự dùng ảnh kỹ thuật mặc định. |
| `category` | **Có** | Chọn 1 trong các chuyên mục chuẩn: `Thiết kế PCB`, `Lập trình STM32`, `Hệ thống IoT`, `Kinh nghiệm thực chiến`, `Tự động hóa PLC`, `FPGA & Verilog`, hoặc `Kiến thức chung`. |
| `tags` | Không | Danh sách từ khóa chuyên ngành, ví dụ: `["STM32", "FreeRTOS", "RTOS", "Firmware"]`. |
| `date` | Không | Ngày đăng bài theo định dạng `YYYY-MM-DD` (Ví dụ: `2026-03-25`). Hệ thống tự động sắp xếp bài mới nhất lên trên. |
| `readingTime`| Không | Ước tính thời gian đọc (Ví dụ: `"5 phút đọc"`, `"8 phút đọc"`). |
| `author` | Không | Tên tác giả bài viết, mặc định là `"Hoài Giang"`. |
| `featured` | Không | `true` nếu muốn đưa bài viết này lên trang chủ; `false` nếu chỉ hiển thị trong trang Bài viết. |
| `published` | **Có** | `true` để xuất bản cho mọi người đọc; `false` để lưu bản nháp tạm thời (chỉ mình Thầy thấy trong CMS). |

---

## 3. Khung sườn nội dung bài viết kỹ thuật chuẩn (Mẫu tham khảo)

Dưới đây là cấu trúc bài viết được khuyến nghị để người đọc kỹ thuật dễ theo dõi và đánh giá cao tính chuyên môn:

````markdown
Đoạn mở đầu: Nêu vấn đề thực tế thường gặp phải (Pain Point).
Ví dụ: Tại sao mạch chạy ở phòng Lab thì bình thường, nhưng đưa vào nhà máy lại bị reset ngẫu nhiên? Hoặc lỗi HardFault xảy ra do đâu khi vừa khởi động RTOS?

---

## 1. Bản chất nguyên nhân từ phần cứng / phần mềm

Giải thích nguyên lý gốc rễ của vấn đề. Có thể dùng danh sách gạch đầu dòng:
- Nguyên nhân 1: Xung nhiễu cảm ứng từ contactor hoặc biến tần.
- Nguyên nhân 2: Hiện tượng sụt áp trên đường cấp nguồn cho vi điều khiển.
- Nguyên nhân 3: Cấu hình sai mức ưu tiên ngắt NVIC trong ARM Cortex-M.

> **Lưu ý quan trọng:** Đặt các quy tắc cốt lõi hoặc cảnh báo quan trọng vào khối trích dẫn này để thu hút ánh nhìn của người đọc.

---

## 2. Giải pháp kỹ thuật và cách xử lý thực tế

Trình bày từng bước giải quyết:

### Bước 1: Điều chỉnh sơ đồ nguyên lý hoặc Layout mạch
Mô tả chi tiết giải pháp (ví dụ: bổ sung Diode TVS xả xung sét, phân tách đường mass công suất và mass tín hiệu analog).

### Bước 2: Tối ưu mã nguồn firmware
Thầy có thể chèn đoạn code C/C++ có tô màu cú pháp trực quan:

```c
/* Ví dụ: Cấu hình chuẩn nhóm ưu tiên ngắt cho FreeRTOS trên STM32 */
NVIC_SetPriorityGrouping(NVIC_PRIORITYGROUP_4);

/* Cấp phát hàng đợi truyền thông bảo đảm thread-safe */
xQueueHandle = xQueueCreate(10, sizeof(SensorData_t));
if (xQueueHandle == NULL) {
    /* Xử lý lỗi cấp phát bộ nhớ */
}
```

---

## 3. Bảng so sánh thông số trước và sau khi xử lý

| Tiêu chí | Trước khi tối ưu | Sau khi xử lý chuẩn |
| :--- | :--- | :--- |
| Tỷ lệ rớt gói tin RS485 | 12 - 15% khi biến tần chạy | 0% ổn định 24/7 |
| Hiện tượng treo chip | Xảy ra sau 2-3 tiếng | Chạy liên tục > 30 ngày |
| Nhiệt độ linh kiện công suất | 75°C | 48°C (nhờ tản nhiệt và vias) |

---

## 4. Hình ảnh và sơ đồ minh họa

Để chèn hình ảnh thực tế hoặc sơ đồ chụp từ KiCad/Altium:

![Sơ đồ bố trí tụ thoát nhiễu sát chân vi điều khiển](/media/ten-anh-chup.jpg)

---

## 5. Tổng kết và lời khuyên thực tế

Tóm tắt 3-4 gạch đầu dòng ngắn gọn để người đọc ghi nhớ ngay khi rời bài viết:
1. Luôn ưu tiên mặt phẳng GND liên tục ở lớp dưới.
2. Đặt tụ thoát nhiễu cách chân chip dưới 3mm.
3. Bật cơ chế kiểm tra tràn stack tự động trong quá trình phát triển firmware.
````

---

## 4. Cách đăng bài qua Pages CMS (Không cần chạm code)

1. Mở trang quản trị [Pages CMS](https://pagescms.org).
2. Vào mục **Bài viết & Chia sẻ kinh nghiệm**.
3. Bấm **New** (Tạo bài mới).
4. Điền tiêu đề, chọn ảnh bìa, nhập nội dung bằng khung soạn thảo trực quan.
5. Bấm **Save**. Hệ thống sẽ tự động cập nhật lên website trong vòng 1-2 phút.
