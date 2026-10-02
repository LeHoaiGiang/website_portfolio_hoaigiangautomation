# Đặc tả dự án website portfolio — Hoài Giang Automation
## 1. Mục tiêu

Xây dựng website portfolio cá nhân cho **Hoài Giang Automation** để giới thiệu các dự án kỹ thuật đã thực hiện trong lĩnh vực:

- Embedded Systems: STM32, ESP32, firmware C/C++.
- IoT và hệ thống giám sát/điều khiển.
- FPGA và Verilog.
- Thiết kế PCB, nguyên lý mạch và phần cứng.
- PLC và tự động hóa công nghiệp.
- Phần mềm kỹ thuật, Qt/C++ và công cụ hỗ trợ.

Website ưu tiên đơn giản, tốc độ tải nhanh, dễ bảo trì, chi phí vận hành thấp và dễ mở rộng. Người quản trị phải có thể thêm/sửa/ẩn dự án qua giao diện web mà không cần trực tiếp chỉnh sửa mã nguồn.

## 2. Công nghệ đề xuất

- **Frontend / static site generator:** Astro.
- **Ngôn ngữ:** TypeScript, Astro components, CSS.
- **Quản lý nội dung:** Pages CMS, nội dung được lưu trong GitHub.
- **Mã nguồn:** GitHub repository.
- **Hosting / CI/CD:** Vercel.
- **Ảnh dự án:** lưu trong repository tại `public/media/` ở giai đoạn đầu.
- **Tên miền:** dùng tên miền `*.vercel.app` trước; chưa mua tên miền riêng.
- **Package manager:** npm.
- Không dùng database hoặc backend riêng trong phiên bản đầu.
- Không dùng Next.js trừ khi có yêu cầu mới thực sự cần chức năng server-side.

### Nguyên tắc quan trọng

1. Website công khai là website tĩnh được build từ nội dung trong repository.
2. Pages CMS là giao diện quản trị nội dung; nội dung và ảnh được commit vào GitHub.
3. Khi nội dung được cập nhật trên GitHub, Vercel tự động build và deploy.
4. Không lưu token, mật khẩu hoặc thông tin bí mật trong mã nguồn.
5. Không giả định cấu hình CMS hoạt động nếu chưa kiểm tra với tài liệu hiện hành của Pages CMS.
6. Kiểm tra khả năng sử dụng của gói Vercel theo điều khoản hiện hành trước khi dùng cho mục đích thương mại.

## 3. Người dùng và quyền truy cập

### Khách truy cập
- Xem trang chủ, danh sách dự án, trang chi tiết và thông tin liên hệ.
- Lọc dự án theo lĩnh vực.
- Mở các liên kết GitHub, video hoặc demo nếu có.
- Không cần đăng nhập.

### Chủ website / quản trị viên
- Đăng nhập vào Pages CMS bằng tài khoản GitHub được cấp quyền.
- Thêm, chỉnh sửa, xuất bản hoặc ẩn dự án.
- Tải ảnh bìa và ảnh nội dung lên.
- Cập nhật mô tả, công nghệ, ngày thực hiện và liên kết.
- Không xây dựng trang đăng nhập tùy chỉnh trong website ở phiên bản đầu.

**Bảo mật:** Chỉ cấp quyền CMS cho tài khoản GitHub của chủ website. Không coi việc ẩn URL quản trị là biện pháp bảo mật. Repository có thể đặt Private nếu cách tích hợp và quyền truy cập hiện tại của CMS hỗ trợ. Website build trên Vercel vẫn có thể công khai.

## 4. Cấu trúc trang

### 4.1 Trang chủ `/`
- Header với tên/nhãn hiệu “Thầy Giang Tự Động Hóa”.
- Menu: Trang chủ, Dự án, Liên hệ.
- Hero section:
  - Tiêu đề: “Thiết kế và hiện thực các hệ thống tự động hóa”.
  - Mô tả ngắn về embedded, IoT, FPGA, PCB và tự động hóa.
  - Nút “Xem dự án”.
  - Nút “Liên hệ”.
- Khu vực lĩnh vực chuyên môn: Embedded/IoT, STM32/ESP32, FPGA, PCB, PLC, Qt/C++.
- Khu vực dự án nổi bật, lấy dữ liệu từ collection dự án với `featured: true` và `published: true`.
- Khu vực giới thiệu ngắn về tác giả.
- Footer chứa liên kết liên hệ và mạng xã hội.

### 4.2 Danh sách dự án `/projects/`
- Hiển thị dự án dạng card/grid.
- Mỗi card gồm ảnh bìa, tên, mô tả ngắn, lĩnh vực và công nghệ.
- Có bộ lọc theo lĩnh vực.
- Chỉ hiển thị dự án có `published: true`.
- Có trạng thái trống hợp lý khi không có dự án phù hợp.
- Sắp xếp theo ngày mới nhất nếu có ngày; xử lý ổn định với dự án không có ngày.

### 4.3 Chi tiết dự án `/projects/[slug]/`
- Sinh trang tĩnh cho từng dự án đã xuất bản.
- Hiển thị tên, mô tả, ảnh bìa, lĩnh vực, công nghệ và ngày thực hiện.
- Nội dung Markdown của dự án.
- Các mục nội dung có thể có:
  - Tổng quan / bài toán.
  - Mục tiêu.
  - Kiến trúc hoặc sơ đồ hệ thống.
  - Phần cứng.
  - Firmware / phần mềm.
  - Truyền thông và giao thức.
  - Kết quả thực tế.
  - Hình ảnh bổ sung.
  - Liên kết GitHub, video hoặc demo.
- Chỉ hiển thị các mục nếu có dữ liệu.
- Có liên kết quay lại danh sách dự án.
- Nếu slug không tồn tại hoặc dự án không được xuất bản, không được đưa nội dung đó ra trang công khai.

### 4.4 Trang liên hệ `/contact/`
- Email dạng `mailto:`.
- Liên kết GitHub, YouTube, TikTok và các kênh khác.
- Thông tin liên hệ lấy từ một file cấu hình tập trung.
- Không cần backend gửi email trong phiên bản đầu.
- Không tự bịa địa chỉ email hoặc URL mạng xã hội; dùng placeholder cấu hình và ghi rõ cần thay bằng thông tin thật.

## 5. Thiết kế giao diện

Phong cách:
- Chuyên nghiệp, tối giản, thiên về kỹ thuật/công nghệ.
- Nền sáng, chữ dễ đọc, màu nhấn xanh dương đậm hoặc xanh navy.
- Bố cục sạch, khoảng trắng hợp lý.
- Responsive cho desktop, tablet và mobile.
- Hiệu ứng chuyển động nhẹ; ưu tiên hiệu năng và khả năng truy cập.
- Không dùng ảnh minh họa giả làm ảnh dự án thực tế.
- Nếu chưa có ảnh dự án thật, dùng placeholder trung tính và ghi rõ cần thay ảnh.
- Tránh thiết kế giống trang bán hàng hoặc dashboard; đây là portfolio kỹ thuật.

Các thành phần nên tách riêng:
- `SiteHeader`
- `SiteFooter`
- `ProjectCard`
- `ProjectGrid`
- `ProjectFilters`
- `SocialLinks`
- `SEOHead` hoặc cơ chế SEO tương đương

## 6. Schema dữ liệu dự án

Sử dụng Astro Content Collections với schema Zod. Cần đồng bộ schema, file Markdown và trường trong Pages CMS.

Các trường đề xuất:

| Trường | Kiểu | Bắt buộc | Ý nghĩa |
|---|---|---:|---|
| `title` | string | Có | Tên dự án |
| `slug` | string | Có | Slug URL, duy nhất |
| `description` | string | Có | Mô tả ngắn |
| `cover` | string | Có | Đường dẫn ảnh bìa |
| `category` | string/enum | Có | Lĩnh vực chính |
| `technologies` | string[] | Không | Công nghệ sử dụng |
| `date` | date | Không | Ngày dự án |
| `featured` | boolean | Không | Hiển thị ở trang chủ |
| `published` | boolean | Không | Cho phép hiển thị công khai |
| `hardware` | string | Không | Mô tả phần cứng |
| `software` | string | Không | Mô tả phần mềm/firmware |
| `github` | URL string | Không | Link mã nguồn |
| `demo` | URL string | Không | Link demo/video |
| `gallery` | string[] | Không | Danh sách ảnh bổ sung |

Các category ban đầu:
- `IoT`
- `STM32`
- `ESP32`
- `FPGA`
- `PCB`
- `PLC`
- `Qt/C++`
- `Tự động hóa`
- `Khác`

Có thể dùng `hardware` và `software` làm phần nội dung tóm tắt, đồng thời sử dụng Markdown body cho bài viết chi tiết. Không bắt buộc mọi dự án phải có tất cả các trường tùy chọn.

## 7. Cấu trúc thư mục mong muốn

```text
giang-automation-portfolio/
├── public/
│   ├── media/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── SiteHeader.astro
│   │   ├── SiteFooter.astro
│   │   ├── ProjectCard.astro
│   │   └── ProjectFilters.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── projects/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   └── contact.astro
│   ├── content/
│   │   └── projects/
│   ├── content.config.ts
│   └── styles/
│       └── global.css
├── .pages.yml
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

Có thể điều chỉnh cấu trúc theo phiên bản Astro hiện hành, nhưng cần giữ code có tổ chức và không tạo file thừa.

## 8. Pages CMS

Tạo file `.pages.yml` ở thư mục gốc để định nghĩa collection dự án.

Yêu cầu:
- Collection có tên `projects`, nhãn tiếng Việt “Dự án kỹ thuật”.
- Collection đọc/ghi vào `src/content/projects`.
- Dùng Markdown với YAML frontmatter.
- Hỗ trợ tải ảnh vào `public/media/`, đường dẫn sử dụng trên website là `/media/...`.
- Có các trường tương ứng với schema ở mục 6.
- Có trường `published` để ẩn/hiện dự án.
- Có trường `featured` để chọn dự án nổi bật.
- Hỗ trợ danh sách `technologies` và `gallery` nếu Pages CMS hỗ trợ phù hợp.
- Có hướng dẫn rõ cách đặt slug và tránh trùng slug.

Trước khi hoàn thiện cấu hình, AI phải kiểm tra tài liệu Pages CMS hiện hành để xác nhận đúng cú pháp YAML, cấu hình image/media, collection, filename và trường list/select. Không được coi ví dụ cấu hình chưa kiểm chứng là chắc chắn hợp lệ.

### Quy trình quản trị mong muốn
1. Chủ website mở Pages CMS và đăng nhập bằng GitHub.
2. Chọn repository.
3. Mở collection “Dự án kỹ thuật”.
4. Tạo/sửa bản ghi bằng biểu mẫu.
5. Tải ảnh và nhập nội dung.
6. Lưu thay đổi vào GitHub.
7. Vercel tự động build/deploy từ nhánh production.
8. Website công khai cập nhật sau khi deploy thành công.

## 9. Astro Content Collections

- Dùng API Content Collections phù hợp với phiên bản Astro đang cài.
- Tạo schema Zod để kiểm tra dữ liệu frontmatter.
- Đảm bảo đường dẫn ảnh từ CMS phù hợp với cách Astro render ảnh.
- Dùng API hiện hành (`getCollection`, `render` hoặc API tương ứng của phiên bản đã cài).
- Lọc `published === true` ở cả trang danh sách, trang chủ và quá trình tạo trang chi tiết.
- Không để nội dung bản nháp xuất hiện trong HTML công khai.
- Tạo trang chi tiết động theo `slug` và cấu hình prerender/static generation đúng cho Vercel.
- Tránh sử dụng API Astro đã lỗi thời; kiểm tra tài liệu theo phiên bản thực tế.

## 10. SEO và chất lượng

- Mỗi trang có title và meta description riêng.
- Thiết lập Open Graph cơ bản.
- Có favicon.
- URL dễ đọc, dùng slug ổn định.
- Ảnh có alt text; tối ưu dung lượng, ưu tiên WebP.
- Semantic HTML, điều hướng bằng bàn phím và độ tương phản phù hợp.
- Không tải thư viện JavaScript nặng nếu không cần thiết.
- Có trang 404.
- Kiểm tra lỗi liên kết và lỗi ảnh.
- Không đưa thông tin nhạy cảm, thông tin khách hàng hoặc sơ đồ công nghiệp có tính bảo mật lên website nếu chưa được phép.

## 11. Triển khai trên Windows và Vercel

### Môi trường phát triển
- Windows 10/11.
- Node.js LTS.
- npm.
- Git for Windows.
- Visual Studio Code.

### Lệnh khởi tạo tham khảo

```powershell
npm create astro@latest giang-automation-portfolio
cd giang-automation-portfolio
npm run dev
```

Nếu project đã được tạo, không chạy lại lệnh khởi tạo. Tiếp tục cài dependencies cần thiết và chỉnh sửa project hiện tại.

### Kiểm tra trước khi deploy

```powershell
npm install
npm run build
```

Sửa mọi lỗi build trước khi đẩy code lên GitHub.

### GitHub
- Tạo repository `giang-automation-portfolio`.
- Commit và push code lên nhánh `main`.
- Không commit token, secret hoặc file môi trường chứa bí mật.

### Vercel
- Import repository từ GitHub.
- Framework preset: Astro (nếu được tự nhận diện, giữ cấu hình đó).
- Build command: `npm run build`.
- Output directory: `dist`.
- Deploy và xác nhận website hoạt động trên URL `*.vercel.app`.
- Xác nhận commit mới trên nhánh production kích hoạt deployment mới.

## 12. Chiến lược chi phí

- Dùng các công cụ mã nguồn mở và gói miễn phí khi phù hợp.
- Chưa mua domain riêng.
- Không dùng database, dịch vụ lưu trữ ảnh trả phí hoặc backend riêng ở giai đoạn đầu.
- Kiểm tra điều khoản và giới hạn hiện hành của Vercel trước khi sử dụng; không giả định gói Hobby miễn phí phù hợp với mọi hoạt động thương mại.
- Nếu quy mô tăng, đánh giá lại hosting và lưu trữ ảnh dựa trên mức sử dụng thực tế.

## 13. Tiêu chí nghiệm thu

Website chỉ được xem là hoàn thành khi:

1. `npm run build` chạy thành công.
2. Trang chủ, danh sách dự án, trang chi tiết, trang liên hệ và 404 hoạt động.
3. Dữ liệu dự án được sinh từ Content Collection, không hard-code danh sách dự án trong từng trang.
4. Có ít nhất một dự án mẫu, được đánh dấu rõ là nội dung mẫu cần thay bằng thông tin/ảnh thật.
5. Dự án `published: false` không xuất hiện ở bất kỳ trang công khai nào.
6. Dự án `featured: true` và `published: true` xuất hiện trong khu vực nổi bật.
7. Lọc dự án theo category hoạt động.
8. Giao diện responsive trên desktop và mobile.
9. CMS có thể tạo và chỉnh sửa dự án theo cấu hình đã kiểm chứng.
10. Ảnh được tải lên đúng thư mục và hiển thị sau khi deploy.
11. Thay đổi CMS được lưu vào GitHub và kích hoạt deploy Vercel.
12. Các liên kết mạng xã hội/email dùng cấu hình tập trung; placeholder được ghi rõ.
13. Không có secret trong repository hoặc log công khai.
14. README mô tả cách chạy local, thêm dự án qua CMS, deploy và xử lý lỗi thường gặp.

## 14. Cách làm việc dành cho AI coding agent

Thực hiện theo từng giai đoạn, không tạo toàn bộ một cách thiếu kiểm soát.

### Giai đoạn A — Kiểm tra môi trường
- Kiểm tra project và phiên bản Node/Astro hiện tại.
- Nếu đã có code, đọc cấu trúc và giữ lại phần hữu ích.
- Không ghi đè project có sẵn mà chưa kiểm tra.

### Giai đoạn B — Xây website cơ bản
- Thiết lập layout, CSS, header/footer.
- Xây trang chủ, danh sách, trang chi tiết, liên hệ và 404.
- Thiết lập Content Collections, schema và dữ liệu mẫu.
- Chạy build, sửa lỗi.

### Giai đoạn C — Tích hợp Pages CMS
- Kiểm tra tài liệu Pages CMS hiện hành.
- Viết `.pages.yml` tương thích với schema.
- Kiểm tra đường dẫn media và frontmatter.
- Viết hướng dẫn kết nối GitHub và quản trị.
- Không tạo OAuth/backend riêng nếu Pages CMS không yêu cầu.

### Giai đoạn D — Kiểm thử và tài liệu
- Chạy build.
- Kiểm tra lọc category, published, featured, slug và ảnh.
- Kiểm tra responsive và accessibility cơ bản.
- Viết README tiếng Việt với các lệnh chính xác.

### Giai đoạn E — Hướng dẫn triển khai
- Hướng dẫn người dùng push lên GitHub.
- Hướng dẫn import repository vào Vercel.
- Hướng dẫn đăng nhập Pages CMS và tạo dự án đầu tiên.
- Nêu rõ các thao tác người dùng phải tự thực hiện trong tài khoản cá nhân; không tuyên bố đã deploy hoặc cấp quyền nếu chưa thực sự thực hiện.

## 15. Yêu cầu đầu ra từ AI

- Ưu tiên sửa/tạo file trực tiếp trong workspace nếu môi trường cho phép.
- Nếu không thể thao tác trực tiếp, cung cấp nội dung đầy đủ của từng file và chỉ rõ đường dẫn.
- Không chỉ đưa snippet rời rạc mà bỏ sót file cần thiết.
- Không bịa kết quả kiểm thử.
- Báo cáo rõ:
  - File đã tạo/sửa.
  - Lệnh đã chạy.
  - Kết quả build/test thực tế.
  - Việc nào cần chủ website thực hiện thủ công.
  - Các giới hạn hoặc cấu hình chưa xác minh.
- Viết mã rõ ràng, dễ bảo trì, tránh phụ thuộc không cần thiết.

---

## Prompt ngắn để giao cho AI coding agent

Hãy triển khai website theo đặc tả trên trong workspace hiện tại. Trước tiên hãy kiểm tra cấu trúc thư mục, phiên bản Node/Astro và tài liệu chính thức hiện hành của Astro, Pages CMS và Vercel. Sau đó triển khai theo từng giai đoạn, tạo đầy đủ các file cần thiết, chạy `npm run build`, sửa lỗi và viết README tiếng Việt. Ưu tiên Astro static + GitHub + Pages CMS + Vercel, không thêm database hoặc backend riêng. Không được tuyên bố đã deploy, đã cấu hình quyền GitHub hoặc đã kiểm thử nếu chưa thực sự thực hiện. Nếu có điểm không tương thích giữa Pages CMS và schema Astro, hãy giải quyết bằng cấu hình đúng theo tài liệu hiện hành và giải thích rõ.


---

# PHỤ LỤC CẬP NHẬT — THƯƠNG HIỆU HOÀI GIANG AUTOMATION VÀ TRANG KHÓA HỌC

> Phụ lục này cập nhật và ưu tiên hơn các nội dung cũ có liên quan trong đặc tả. AI coding agent phải áp dụng các yêu cầu dưới đây khi triển khai.

## A. Tên thương hiệu chính thức

- Tên thương hiệu hiển thị: **Hoài Giang Automation**.
- Tên tiếng Việt có thể dùng trong phần giới thiệu: **Thầy Giang Tự Động Hóa**.
- Website là portfolio kỹ thuật và nơi giới thiệu khóa học của Hoài Giang.
- Tagline đề xuất: `Embedded Systems · IoT · FPGA · Automation`.
- Dùng tên **Hoài Giang Automation** nhất quán ở header, footer, title mặc định, metadata SEO và README.
- Không đổi tên repository hiện có nếu việc đó không cần thiết; tên hiển thị của thương hiệu không bắt buộc phải trùng tên repository.

## B. Menu và các trang

Menu chính:
1. Trang chủ `/`
2. Dự án `/projects/`
3. Khóa học `/courses/`
4. Liên hệ `/contact/`

Các trang cần có:
- `/` — giới thiệu thương hiệu, chuyên môn, dự án nổi bật và khóa học nổi bật.
- `/projects/` — danh sách dự án kỹ thuật.
- `/projects/[slug]/` — chi tiết dự án.
- `/courses/` — danh sách khóa học.
- `/courses/[slug]/` — chi tiết khóa học.
- `/contact/` — thông tin liên hệ.
- Trang 404.

## C. Trang danh sách khóa học `/courses/`

Mục tiêu là giới thiệu các khóa học và giúp người xem tìm hiểu nội dung hoặc liên hệ hỏi thêm. Đây không phải trang bán hàng trực tuyến.

Mỗi thẻ khóa học hiển thị:
- Ảnh bìa.
- Tên khóa học.
- Mô tả ngắn.
- Chủ đề/lĩnh vực.
- Cấp độ phù hợp, nếu có.
- Hình thức học, nếu có.
- Trạng thái: đang cập nhật, sắp mở, đang nhận đăng ký hoặc đã kết thúc — chỉ hiển thị khi được quản trị viên cấu hình.
- Nút `Xem nội dung` dẫn đến trang chi tiết.
- Có thể có nút `Liên hệ hỏi khóa học` dẫn đến trang liên hệ hoặc email.

**Không hiển thị giá, học phí, giá khuyến mãi, giá gạch ngang hoặc thông tin thanh toán ở bất kỳ vị trí nào.** Không tạo trường giá trong schema CMS. Không tự sinh giá trong nội dung mẫu.

Có thể lọc theo lĩnh vực, ví dụ:
- Lập trình nhúng.
- STM32.
- ESP32 và IoT.
- FPGA / Verilog.
- PCB và thực hành phần cứng.
- PLC và tự động hóa.

Chỉ hiển thị khóa học có `published: true`.

## D. Trang chi tiết khóa học `/courses/[slug]/`

Nội dung tùy chọn:
- Tên khóa học.
- Ảnh bìa.
- Giới thiệu và mục tiêu học tập.
- Đối tượng phù hợp.
- Kiến thức đầu vào.
- Nội dung/chương trình học theo chương hoặc buổi.
- Công cụ, phần cứng và phần mềm cần chuẩn bị.
- Sản phẩm hoặc kết quả dự kiến sau khóa học.
- Hình thức học và thời lượng, nếu đã được xác định.
- Trạng thái khóa học.
- Câu hỏi thường gặp, nếu có.
- Nút liên hệ để hỏi thêm thông tin.

Không hiển thị giá hoặc tích hợp thanh toán. Không khẳng định khóa học đã mở đăng ký nếu trường trạng thái không được quản trị viên bật. Không tự bịa thời lượng, lịch học, chứng chỉ, cam kết đầu ra hoặc nội dung chưa được cung cấp; các trường này phải để trống/ẩn hoặc dùng nội dung mẫu có ghi rõ cần cập nhật.

## E. Schema khóa học

Tạo Astro Content Collection riêng cho khóa học, ví dụ `courses`, độc lập với collection `projects`.

Các trường đề xuất:

| Trường | Kiểu | Bắt buộc | Ý nghĩa |
|---|---|---:|---|
| `title` | string | Có | Tên khóa học |
| `slug` | string | Có | Slug URL duy nhất |
| `description` | string | Có | Mô tả ngắn |
| `cover` | string | Có | Đường dẫn ảnh bìa |
| `category` | string/enum | Có | Lĩnh vực |
| `level` | string | Không | Cơ bản, trung cấp, nâng cao |
| `format` | string | Không | Online, trực tiếp hoặc kết hợp |
| `duration` | string | Không | Thời lượng nếu đã xác định |
| `status` | string/enum | Không | Đang cập nhật, sắp mở, đang nhận đăng ký, đã kết thúc |
| `featured` | boolean | Không | Hiển thị ở trang chủ |
| `published` | boolean | Không | Cho phép hiển thị công khai |
| `prerequisites` | string | Không | Kiến thức đầu vào |
| `outcomes` | string[] | Không | Kết quả học tập dự kiến |
| `curriculum` | list/object hoặc Markdown body | Không | Chương trình học |
| `hardware` | string[] | Không | Phần cứng cần chuẩn bị |
| `software` | string[] | Không | Phần mềm cần chuẩn bị |
| `contactLabel` | string | Không | Nhãn nút liên hệ |
| `contactUrl` | URL string | Không | Liên kết liên hệ tùy chọn |
| `date` | date | Không | Ngày cập nhật hoặc ngày dự kiến nếu phù hợp |

**Không thêm trường `price`, `tuition`, `discount`, `payment` hoặc các trường có ý nghĩa giá/thanh toán vào schema CMS.**

Nếu dùng Markdown body để lưu nội dung chương trình học, cần render body ở trang chi tiết khóa học. Không yêu cầu quản trị viên viết HTML.

## F. Pages CMS cho cả dự án và khóa học

Trong `.pages.yml`, giữ collection `projects` hiện có và thêm collection `courses`.

Collection khóa học cần:
- Nhãn tiếng Việt: `Khóa học`.
- Đọc/ghi nội dung vào `src/content/courses`.
- Lưu nội dung Markdown với YAML frontmatter.
- Tải ảnh bìa vào thư mục media dùng chung, ví dụ `public/media/`.
- Cung cấp biểu mẫu để thêm/sửa khóa học.
- Có trường `published` để ẩn/hiện.
- Có trường `featured` để chọn khóa học nổi bật trên trang chủ.
- Có các trường mô tả, category, level, format, duration, status, prerequisites, outcomes, hardware và software nếu phù hợp.
- Không có trường giá hoặc thanh toán.
- Cú pháp `.pages.yml` phải được kiểm tra theo tài liệu Pages CMS hiện hành; đảm bảo cấu hình filename, slug và danh sách trường thực sự tương thích với CMS.

Thầy phải có thể quản lý dự án và khóa học từ cùng giao diện Pages CMS, không cần sửa mã nguồn để thêm nội dung thông thường.

## G. Trang chủ sau cập nhật

Trang chủ nên có các khu vực:
1. Hero giới thiệu Hoài Giang Automation.
2. Các lĩnh vực chuyên môn.
3. Dự án kỹ thuật nổi bật — lấy từ `projects` với `featured: true` và `published: true`.
4. Khóa học nổi bật — lấy từ `courses` với `featured: true` và `published: true`.
5. Giới thiệu ngắn về người xây dựng website.
6. Lời mời liên hệ.
7. Footer.

Nếu chưa có khóa học thực tế, không tự tạo thông tin như thể khóa học đã mở. Có thể hiển thị khu vực giới thiệu khóa học với lời mời theo dõi/cập nhật, hoặc dùng bản ghi mẫu được ghi rõ cần thay thế.

## H. Liên hệ

Trang liên hệ phục vụ cả hai mục đích:
- Trao đổi về dự án kỹ thuật/dịch vụ.
- Hỏi thông tin về khóa học.

Có thể dùng các nút `Liên hệ về khóa học` và `Trao đổi về dự án`, dẫn tới email hoặc kênh liên hệ đã cấu hình. Không tạo biểu mẫu gửi dữ liệu tới backend nếu chưa có dịch vụ xử lý thực tế.

## I. Cấu trúc thư mục cập nhật

```text
src/
├── components/
│   ├── SiteHeader.astro
│   ├── SiteFooter.astro
│   ├── ProjectCard.astro
│   ├── CourseCard.astro
│   └── ...
├── content/
│   ├── projects/
│   └── courses/
├── pages/
│   ├── index.astro
│   ├── projects/
│   │   ├── index.astro
│   │   └── [slug].astro
│   ├── courses/
│   │   ├── index.astro
│   │   └── [slug].astro
│   └── contact.astro
└── content.config.ts
```

Điều chỉnh theo cấu trúc và API của phiên bản Astro đang dùng, nhưng phải giữ hai collection riêng biệt.

## J. Tiêu chí nghiệm thu bổ sung

1. Header có liên kết `Trang chủ`, `Dự án`, `Khóa học`, `Liên hệ`.
2. `/courses/` hiển thị danh sách khóa học đã xuất bản.
3. Mỗi khóa học có trang chi tiết theo slug.
4. Khóa học nổi bật xuất hiện ở trang chủ.
5. Khóa học có `published: false` không xuất hiện trên trang công khai.
6. Quản trị viên thêm/sửa/ẩn khóa học qua Pages CMS mà không cần sửa code.
7. CMS có collection dự án và collection khóa học riêng.
8. Không có giá hoặc thành phần thanh toán trong giao diện, schema hay nội dung mẫu.
9. Trang khóa học responsive, có metadata SEO và ảnh alt text.
10. `npm run build` thành công sau khi thêm collection và các trang khóa học.
11. README được cập nhật hướng dẫn quản lý cả dự án và khóa học.
12. Xác minh luồng CMS → GitHub → Vercel deploy thực tế hoặc ghi rõ bước nào người dùng cần tự kiểm tra.

## K. Chỉ dẫn bổ sung cho AI coding agent

Hãy cập nhật website theo phụ lục này. Giữ lại các phần dự án và cấu hình hữu ích đã có; không viết lại toàn bộ nếu không cần thiết. Thêm collection khóa học, cấu hình Pages CMS, các trang danh sách/chi tiết, khu vực khóa học nổi bật trên trang chủ và cập nhật menu/SEO/README. Không thêm giá hoặc chức năng thanh toán. Kiểm tra tài liệu hiện hành, chạy build và báo cáo trung thực các kết quả.
