# Hướng Dẫn Kỹ Thuật & Quản Trị Website — Hoài Giang Automation

> **Tài liệu nội bộ dành riêng cho Thầy Giang:** Toàn bộ thông tin cấu hình, quản trị mã nguồn, hướng dẫn thêm/sửa bài viết qua CMS và quy trình đưa website lên mạng (Deploy Vercel).  
> *Đã lược bỏ toàn bộ các ghi chú kỹ thuật trên giao diện người dùng công khai để website luôn chỉn chu, chuyên nghiệp.*

---

## 1. Thông tin liên hệ đã cấu hình chính thức

Tất cả thông tin liên hệ được đồng bộ tự động từ file: [`src/data/siteConfig.ts`](file:///c:/Users/Admin/Desktop/GiangLH/TrangWeb/website_portfolio_hoaigiangautomation/src/data/siteConfig.ts)

| Hạng mục | Thông tin hiện tại | Ghi chú |
|---|---|---|
| **Số điện thoại** | `0336379944` | Hiển thị ở footer, trang liên hệ, gọi trực tiếp |
| **Zalo** | `https://zalo.me/0336379944` | Nút nhắn tin Zalo tức thì |
| **GitHub** | `https://github.com/LeHoaiGiang` | Liên kết mã nguồn dự án |
| **TikTok** | `https://www.tiktok.com/@gianglh.automation` | Kênh video ngắn kỹ thuật & thực hành |
| **YouTube** | `https://www.youtube.com/@lehoaigiangctu` | Kênh chia sẻ bài giảng & thí nghiệm |
| **Email** | `lehoaigiangg@gmail.com` | Tiếp nhận email trao đổi dự án & đào tạo |
| **Địa chỉ** | Ninh Kiều, Cần Thơ | |

> **Cách đổi thông tin:** Khi Thầy muốn đổi số điện thoại, email hoặc link mạng xã hội, chỉ cần mở file `src/data/siteConfig.ts` và sửa giá trị, toàn bộ trang web (Header, Footer, Contact, SEO) sẽ tự động đổi theo.

---

## 2. Quản trị nội dung bằng Pages CMS (Không cần chạm mã nguồn)

Website đã tích hợp sẵn file cấu hình [`.pages.yml`](file:///c:/Users/Admin/Desktop/GiangLH/TrangWeb/website_portfolio_hoaigiangautomation/.pages.yml) cho [Pages CMS](https://pagescms.org). Thầy có thể dùng điện thoại hoặc máy tính để đăng bài bất kỳ lúc nào.

### 2.1. Đăng nhập hệ thống CMS
1. Truy cập [https://pagescms.org](https://pagescms.org).
2. Nhấn nút **Log in with GitHub** và đăng nhập bằng tài khoản `LeHoaiGiang`.
3. Chọn repository: `LeHoaiGiang/website_portfolio_hoaigiangautomation`.

### 2.2. Quản lý "Dự án kỹ thuật" (Projects)
* **Thư mục lưu trữ:** `src/content/projects/`
* **Các trường dữ liệu khi tạo dự án mới:**
  * `title` (Tên dự án): Tiêu đề hiển thị (ví dụ: *Bộ chuyển đổi Gateway STM32 Modbus RTU*).
  * `slug` (Định danh URL): Viết chữ thường không dấu, cách nhau dấu gạch ngang (ví dụ: `stm32-gateway-modbus`).
  * `description` (Mô tả ngắn): 2-3 câu tóm tắt mục tiêu và ứng dụng của dự án.
  * `cover` (Ảnh bìa): Nhấn nút tải ảnh trực tiếp từ máy tính lên. Ảnh sẽ tự động lưu vào `public/media/`.
  * `category` (Lĩnh vực chính): Chọn 1 trong các nhóm: `IoT`, `STM32`, `ESP32`, `FPGA`, `PCB`, `PLC`, `Qt/C++`, `Tự động hóa`, `Khác`.
  * `technologies` (Công nghệ sử dụng): Danh sách các tag (ví dụ: *STM32F4*, *FreeRTOS*, *KiCad*, *RS485*).
  * `date` (Ngày thực hiện): Dùng để sắp xếp dự án mới nhất lên đầu.
  * `featured` (Nổi bật): Chọn `true` nếu muốn dự án xuất hiện ở khu vực nổi bật trên **Trang chủ**.
  * `published` (Xuất bản):
    * `true`: Hiển thị công khai trên website.
    * `false`: Lưu thành **Bản nháp** (chỉ có Thầy thấy trong kho mã nguồn, website bên ngoài hoàn toàn không hiển thị và trả về 404).
  * `hardware`: Tóm tắt phần cứng chính (ví dụ: *STM32F407, LAN8720, MAX13487*).
  * `software`: Tóm tắt phần mềm (ví dụ: *FreeRTOS, LwIP, Modbus Master*).
  * `github`: Link mã nguồn GitHub (nếu muốn chia sẻ public).
  * `demo`: Link video YouTube chạy thực tế (nếu có).
  * `body`: Nội dung bài viết chi tiết, sơ đồ nguyên lý, hình ảnh minh họa viết bằng Markdown.

### 2.3. Quản lý "Khóa học" (Courses)
* **Thư mục lưu trữ:** `src/content/courses/`
* **Đặc thù thương hiệu:** Hệ thống được thiết kế theo đúng định hướng chia sẻ đào tạo kỹ thuật, **hoàn toàn không có trường giá tiền, học phí hay cổng thanh toán**.
* **Các trường dữ liệu khi tạo khóa học mới:**
  * `title`: Tên chương trình (ví dụ: *Lập trình STM32 thực chiến từ cơ bản đến nâng cao*).
  * `slug`: Định danh URL (ví dụ: *lap-trinh-nhung-stm32*).
  * `category`: Lĩnh vực (*Lập trình nhúng*, *STM32*, *ESP32 và IoT*, *FPGA / Verilog*, *PCB và thực hành phần cứng*, *PLC và tự động hóa*).
  * `level`: Cấp độ (*Cơ bản*, *Trung cấp*, *Nâng cao*, *Mọi cấp độ*).
  * `format`: Hình thức học (*Trực tiếp tại Lab*, *Online kèm kit thực hành*, v.v.).
  * `duration`: Thời lượng (*8 tuần - 24 buổi*, v.v.).
  * `status`: Trạng thái tuyển sinh:
    * `Đang nhận đăng ký`: Hiển thị huy hiệu màu xanh lá (Active).
    * `Sắp mở`: Hiển thị huy hiệu màu cam.
    * `Đang cập nhật`: Hiển thị huy hiệu màu xanh dương.
    * `Đã kết thúc`: Hiển thị huy hiệu màu tối.
  * `prerequisites`: Kiến thức đầu vào học viên cần chuẩn bị trước.
  * `outcomes`: Danh sách các kết quả học tập đạt được sau khóa học.
  * `hardware`: Danh sách kit vi điều khiển, mạch nạp, máy hiện sóng dùng trong khóa học.
  * `software`: Phần mềm công cụ thực hành (*STM32CubeIDE*, *Keil*, *KiCad*, *VS Code*).
  * `body`: Giáo trình chi tiết theo từng phần/buổi học.

---

## 3. Kiến trúc thư mục mã nguồn

```text
website_portfolio_hoaigiangautomation/
├── .pages.yml               # File cấu hình form nhập liệu của Pages CMS
├── astro.config.mjs         # Cấu hình website tĩnh Astro (output: 'static')
├── package.json             # Danh sách dependencies & lệnh chạy
├── README.md                # Tài liệu tổng quan dự án
├── HUONG_DAN_QUAN_TRI_DEV.md# TÀI LIỆU NÀY (Dành riêng cho quản trị viên)
├── public/
│   ├── favicon.svg          # Biểu tượng vi mạch hiển thị trên tab trình duyệt
│   ├── robots.txt           # Hướng dẫn bot Google lập chỉ mục SEO
│   └── media/               # Toàn bộ hình ảnh dự án, khóa học, avatar
└── src/
    ├── content.config.ts    # Định nghĩa cấu trúc Schema Zod kiểm soát dữ liệu
    ├── data/
    │   └── siteConfig.ts    # Nơi chỉnh sửa thông tin cá nhân/mạng xã hội tập trung
    ├── styles/
    │   └── global.css       # Toàn bộ mã màu, font chữ (Inter/Mono), grid layout
    ├── components/
    │   ├── SEOHead.astro    # Tối ưu thẻ SEO, OpenGraph Facebook, Twitter
    │   ├── SiteHeader.astro # Thanh menu cố định, logo chip, menu mobile
    │   ├── SiteFooter.astro # Chân trang và liên kết nhanh
    │   ├── ProjectCard.astro# Thẻ dự án (HW/SW tags, chip công nghệ, ảnh)
    │   ├── CourseCard.astro # Thẻ khóa học (Cấp độ, trạng thái, không có giá)
    │   ├── ProjectFilters.astro # Bộ lọc dự án chạy trực tiếp trên trình duyệt
    │   └── CourseFilters.astro  # Bộ lọc khóa học
    ├── layouts/
    │   └── BaseLayout.astro # Khung sườn chung của các trang
    └── pages/
        ├── index.astro      # Trang chủ (Hero, Lĩnh vực, Nổi bật, Bio)
        ├── 404.astro        # Trang báo lỗi đường dẫn không tồn tại
        ├── contact.astro    # Trang liên hệ trao đổi dự án & khóa học
        ├── projects/
        │   ├── index.astro  # Trang danh sách tất cả dự án
        │   └── [slug].astro # Trang chi tiết từng dự án (tự sinh động SSG)
        └── courses/
            ├── index.astro  # Trang danh sách tất cả khóa học
            └── [slug].astro # Trang chi tiết từng khóa học (tự sinh động SSG)
```

---

## 4. Các lệnh phát triển trên máy tính (Local Commands)

Mở PowerShell tại thư mục dự án:

1. **Khởi chạy môi trường thử nghiệm (Live Reload):**
   ```powershell
   npm run dev
   ```
   *Trình duyệt truy cập:* `http://localhost:4321` (khi sửa code hoặc thêm bài viết, trình duyệt tự động cập nhật ngay lập tức).

2. **Kiểm tra biên dịch production:**
   ```powershell
   npm run build
   ```
   *Lệnh này sinh ra thư mục `dist/` chứa toàn bộ mã HTML/CSS/JS tĩnh.*

3. **Xem trước bản build tĩnh:**
   ```powershell
   npm run preview
   ```

---

## 5. Quy trình đưa website lên Vercel (Miễn phí 100% & Tự động Deploy)

### Bước 1: Lưu code và đẩy lên GitHub
Chạy các lệnh sau trong PowerShell:
```powershell
git add .
git commit -m "feat: cap nhat thong tin lien he va hoan thien website"
git push origin main
```

### Bước 2: Kết nối với Vercel
1. Đăng nhập [vercel.com](https://vercel.com) bằng tài khoản GitHub `LeHoaiGiang`.
2. Bấm **Add New...** > chọn **Project**.
3. Tìm và chọn repository `website_portfolio_hoaigiangautomation`.
4. Vercel tự động nhận diện framework là **Astro**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Bấm **Deploy**.
6. Sau khoảng 45 giây, website của Thầy sẽ chính thức online với tên miền dạng:
   `https://website-portfolio-hoaigiangautomation.vercel.app` (hoặc tên miền tùy chọn của Vercel).

### Bước 3: Hoạt động tự động khi dùng Pages CMS
* Mỗi khi Thầy đăng bài mới qua **Pages CMS**, hệ thống tự động gửi một commit vào GitHub.
* **Vercel** sẽ tự động phát hiện commit đó và build lại website trong 30 giây mà Thầy không cần làm thêm bất kỳ thao tác kỹ thuật nào.

---

## 6. Xử lý sự cố thường gặp (Troubleshooting)

1. **Ảnh không hiển thị sau khi đăng qua CMS:**
   * Đảm bảo đường dẫn ảnh trong file Markdown bắt đầu bằng `/media/...` (ví dụ: `/media/mach-stm32.jpg`).
   * Ảnh tải lên qua Pages CMS sẽ nằm trong thư mục `public/media/`.

2. **Dự án hoặc khóa học không thấy hiển thị ngoài web:**
   * Kiểm tra xem trường `published` trong bài viết đã bật `true` chưa. Nếu là `false`, hệ thống sẽ tự động giấu bài đó.

3. **Muốn đưa dự án lên trang chủ:**
   * Đặt thuộc tính `featured: true`.
