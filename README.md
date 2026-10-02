# Hoài Giang Automation — Website Portfolio & Khóa Học Kỹ Thuật

> **Thương hiệu:** Hoài Giang Automation  
> **Tên giới thiệu:** Thầy Giang Tự Động Hóa  
> **Tagline:** `Embedded Systems · IoT · FPGA · Automation`  
> **Kiến trúc:** Astro Static Site + Pages CMS + GitHub + Vercel Hosting

---

## 1. Giới thiệu dự án

Website portfolio kỹ thuật và cổng thông tin đào tạo thực chiến của **Hoài Giang Automation**, phục vụ:
1. **Trưng bày dự án kỹ thuật:** Các thiết bị phần cứng nhúng STM32, hệ thống IoT công nghiệp ESP32, vi mạch FPGA/Verilog, thiết kế bo mạch PCB và giải pháp tự động hóa PLC/SCADA.
2. **Giới thiệu chương trình đào tạo:** Thông tin chi tiết các khóa học chuyên sâu từ cơ bản đến nâng cao (lộ trình, kiến thức đầu vào, công cụ chuẩn bị và kết quả đầu ra).
3. **Quản trị nội dung không chạm code:** Tích hợp **Pages CMS** kết nối trực tiếp với GitHub Repository để thêm/sửa/ẩn dự án và khóa học qua giao diện trực quan.

---

## 2. Công nghệ sử dụng

- **Frontend Core:** [Astro](https://astro.build/) (Chế độ Static Site Generation — SSG cho tốc độ tải tức thì và SEO tối đa).
- **Ngôn ngữ:** TypeScript, Astro Components, Semantic HTML5.
- **Styling:** Vanilla CSS hiện đại, hệ màu kỹ thuật Slate/Navy kết hợp Cyan/Blue accents, responsive hoàn toàn trên Desktop, Tablet và Mobile.
- **Quản lý nội dung:** [Pages CMS](https://pagescms.org/) thông qua cấu hình `.pages.yml`.
- **Mã nguồn:** Lưu trữ trên GitHub Repository.
- **Hosting / CI/CD:** Vercel (Tự động build và deploy khi có commit mới từ CMS hoặc GitHub).

---

## 3. Cấu trúc thư mục

```text
website_portfolio_hoaigiangautomation/
├── .pages.yml                 # Cấu hình quản trị nội dung cho Pages CMS
├── astro.config.mjs           # Cấu hình Astro SSG & URL
├── package.json               # Cấu hình dependencies và scripts
├── tsconfig.json              # Cấu hình TypeScript
├── public/
│   ├── favicon.svg            # Icon chip kỹ thuật
│   ├── robots.txt             # Chỉ mục tìm kiếm SEO
│   └── media/                 # Thư mục lưu ảnh dự án, khóa học tải lên từ CMS
└── src/
    ├── content.config.ts      # Schema Zod cho collections 'projects' và 'courses'
    ├── components/
    │   ├── SEOHead.astro      # Thẻ OpenGraph, Twitter, Meta SEO
    │   ├── SiteHeader.astro   # Thanh điều hướng trên cùng & Menu Mobile
    │   ├── SiteFooter.astro   # Chân trang, liên kết mạng xã hội & bản quyền
    │   ├── ProjectCard.astro  # Thẻ hiển thị dự án kỹ thuật
    │   ├── CourseCard.astro   # Thẻ khóa học (KHÔNG có giá/thanh toán)
    │   ├── ProjectFilters.astro # Bộ lọc danh mục dự án tương tác
    │   └── CourseFilters.astro  # Bộ lọc chủ đề khóa học tương tác
    ├── data/
    │   └── siteConfig.ts      # Thông tin thương hiệu, liên hệ tập trung
    ├── layouts/
    │   └── BaseLayout.astro   # Master layout
    ├── pages/
    │   ├── index.astro        # Trang chủ
    │   ├── 404.astro          # Trang báo lỗi 404
    │   ├── contact.astro      # Trang liên hệ trao đổi dự án & khóa học
    │   ├── projects/
    │   │   ├── index.astro    # Danh sách dự án (có bộ lọc)
    │   │   └── [slug].astro   # Chi tiết từng dự án (SSG)
    │   └── courses/
    │       ├── index.astro    # Danh sách khóa học
    │       └── [slug].astro   # Chi tiết từng khóa học (SSG)
    ├── content/
    │   ├── projects/          # File Markdown các dự án kỹ thuật
    │   └── courses/           # File Markdown các khóa học
    └── styles/
        └── global.css         # Hệ thống thiết kế CSS toàn cục
```

---

## 4. Hướng dẫn chạy và phát triển trên máy cá nhân (Local)

### Yêu cầu môi trường
- Hệ điều hành: Windows 10/11, macOS hoặc Linux.
- Node.js: Phiên bản LTS (Node 20+ hoặc 22+).
- npm: Đi kèm Node.js.
- Git: Quản lý mã nguồn.

### Các bước thực hiện

1. **Cài đặt thư viện dependencies:**
   ```powershell
   npm install
   ```

2. **Chạy máy chủ phát triển (Dev server):**
   ```powershell
   npm run dev
   ```
   Mở trình duyệt truy cập: `http://localhost:4321`

3. **Kiểm tra bản build tĩnh (Production build):**
   ```powershell
   npm run build
   ```

4. **Xem trước bản build cục bộ:**
   ```powershell
   npm run preview
   ```

---

## 5. Hướng dẫn quản trị nội dung qua Pages CMS

Trang web đã được cấu hình sẵn file `.pages.yml` để làm việc với [Pages CMS](https://pagescms.org).

### Bước 1: Đăng nhập Pages CMS
1. Truy cập [https://pagescms.org](https://pagescms.org).
2. Nhấn **Log in with GitHub** và ủy quyền truy cập cho tài khoản GitHub của Thầy Giang.
3. Chọn repository của dự án này (ví dụ: `LeHoaiGiang/website_portfolio_hoaigiangautomation`).

### Bước 2: Thêm hoặc chỉnh sửa Dự án
1. Chọn collection **Dự án kỹ thuật** trong thanh điều hướng bên trái.
2. Nhấn **New** để tạo dự án mới:
   - **Tên dự án:** Nhập tiêu đề kỹ thuật.
   - **Slug:** Nhập định danh URL không dấu (ví dụ: `stm32-can-bus-logger`).
   - **Lĩnh vực chính:** Chọn từ danh sách (`IoT`, `STM32`, `ESP32`, `FPGA`, `PCB`, `PLC`, `Qt/C++`, `Tự động hóa`, `Khác`).
   - **Ảnh bìa:** Tải ảnh từ máy tính (ảnh được lưu vào `public/media/`).
   - **Nổi bật:** Bật nếu muốn dự án hiển thị trên Trang chủ.
   - **Xuất bản công khai:** Bật `true` để hiển thị trên website; tắt `false` để lưu dạng bản nháp nội bộ.
   - **Nội dung:** Viết chi tiết nguyên lý, sơ đồ khối, mã nguồn bằng trình soạn thảo Markdown.
3. Nhấn **Save** (Lưu). Pages CMS sẽ tự động commit thay đổi vào GitHub repository.

### Bước 3: Thêm hoặc chỉnh sửa Khóa học
1. Chọn collection **Khóa học** trong Pages CMS.
2. Nhấn **New** để thêm khóa học mới:
   - **Tên khóa học:** Nhập tên chương trình đào tạo.
   - **Slug:** Định danh URL (ví dụ: `lap-trinh-nhung-stm32-thuc-chien`).
   - **Lĩnh vực:** Chọn chuyên đề (`Lập trình nhúng`, `STM32`, `ESP32 và IoT`, `FPGA / Verilog`, `PCB và thực hành phần cứng`, `PLC và tự động hóa`).
   - **Trạng thái:** Chọn `Đang cập nhật`, `Sắp mở`, `Đang nhận đăng ký` hoặc `Đã kết thúc`.
   - **Cấp độ / Hình thức / Thời lượng:** Điền thông tin thực tế.
   - **Nội dung:** Nhập giáo trình chi tiết từng buổi học.
   - *(Lưu ý: Hệ thống hoàn toàn không có trường giá hay thanh toán theo đúng định hướng thương hiệu).*
3. Nhấn **Save**.

---

## 6. Hướng dẫn Triển khai lên Vercel (CI/CD)

Khi Thầy Giang muốn đưa website lên Internet miễn phí thông qua Vercel:

1. **Đẩy mã nguồn lên GitHub:**
   ```powershell
   git add .
   git commit -m "feat: complete Hoai Giang Automation portfolio and courses website"
   git push origin main
   ```

2. **Kết nối Vercel:**
   - Truy cập [vercel.com](https://vercel.com) và đăng nhập bằng tài khoản GitHub.
   - Nhấn nút **Add New...** > **Project**.
   - Chọn repository `website_portfolio_hoaigiangautomation`.
   - Vercel sẽ tự động phát hiện Framework Preset là **Astro**.
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Nhấn **Deploy**.

3. **Cơ chế triển khai tự động (Auto-deployment):**
   - Mỗi lần Thầy Giang thêm ảnh hoặc viết bài mới trên **Pages CMS**, một commit sẽ được tạo trên GitHub.
   - Vercel tự động lắng nghe Webhook của GitHub và chạy `npm run build` để cập nhật website trực tiếp sau 30-45 giây.

---

## 7. Cập nhật thông tin liên hệ tập trung

Để thay đổi địa chỉ email, số điện thoại Zalo, link mạng xã hội (YouTube, TikTok, GitHub) hiển thị đồng bộ trên toàn trang web:
- Mở file: [`src/data/siteConfig.ts`](file:///c:/Users/Admin/Desktop/GiangLH/TrangWeb/website_portfolio_hoaigiangautomation/src/data/siteConfig.ts)
- Thay đổi thông tin tại mục `contact` và `socials`.

---

## 8. Xử lý sự cố thường gặp (Troubleshooting)

- **Lỗi không tìm thấy file khi build:** Kiểm tra đảm bảo các trường `cover` trong file markdown trỏ đến file ảnh có tồn tại trong `public/media/` hoặc dùng ảnh mặc định.
- **Bài viết không hiển thị trên website:** Kiểm tra thuộc tính `published` trong frontmatter; chỉ những bài có `published: true` mới được sinh trang tĩnh công khai.
- **Không muốn dự án xuất hiện trên trang chủ:** Đặt thuộc tính `featured: false`.

---
*Bản quyền © 2026 Hoài Giang Automation. Phát triển trên nền tảng Astro hiện đại.*
