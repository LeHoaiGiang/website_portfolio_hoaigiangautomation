# Mẫu Chuẩn & Hướng Dẫn Soạn Thảo Trang "Về Chúng Tôi"

> Trang **Về chúng tôi** (`/about`) là nơi giới thiệu năng lực thực chiến, kinh nghiệm đa lĩnh vực của đội ngũ Hoài Giang Automation trong thiết kế điện tử, lập trình PLC, mạch điện điều khiển và hệ thống giám sát dữ liệu.  
> Toàn bộ nội dung của trang này được đọc từ file: [`src/content/about/index.md`](file:///c:/Users/Admin/Desktop/GiangLH/TrangWeb/website_portfolio_hoaigiangautomation/src/content/about/index.md) hoặc có thể sửa trực tiếp trên giao diện web **Pages CMS**.

---

## 1. Mẫu Markdown chuẩn (Copy & Dán để sửa)

```markdown
---
title: "Về Chúng Tôi — Hoài Giang Automation"
subtitle: "Đội ngũ kỹ thuật giàu kinh nghiệm thực tế đa lĩnh vực trong điện tử, PLC, mạch điện điều khiển và hệ thống giám sát dữ liệu công nghiệp."
description: "Giới thiệu về Hoài Giang Automation — Nơi hội tụ các giải pháp phần cứng nhúng, tự động hóa PLC và chương trình đào tạo kỹ thuật thực chiến."
cover: "/media/team-lab.svg"
stats:
  - number: "10+"
    label: "Năm kinh nghiệm thực tế"
  - number: "50+"
    label: "Hệ thống & Dự án hoàn thiện"
  - number: "100%"
    label: "Làm chủ thiết kế phần cứng & firmware"
  - number: "24/7"
    label: "Độ ổn định vận hành công nghiệp"
---

## 1. Giới thiệu chung về Hoài Giang Automation

**Hoài Giang Automation** (Thầy Giang Tự Động Hóa) là đơn vị chuyên sâu trong nghiên cứu, thiết kế phần cứng điện tử và hiện thực hóa các giải pháp tự động hóa toàn diện cho nhà máy và các dự án R&D.

Chúng tôi tập hợp đội ngũ kỹ sư có **nhiều năm kinh nghiệm thực tế đa lĩnh vực**, trưởng thành từ các công trình công nghiệp khắt khe và các phòng thí nghiệm kỹ thuật. Thế mạnh cốt lõi là khả năng kết nối liền mạch giữa:
- **Phần cứng điện tử bo mạch (Hardware PCB)**
- **Lập trình PLC điều khiển máy móc công nghiệp**
- **Phần mềm giám sát thu thập dữ liệu thời gian thực (SCADA/IoT)**

---

## 2. Năng lực chuyên môn đa lĩnh vực

### 2.1. Điện tử & Thiết kế mạch điện điều khiển
- **Thiết kế nguyên lý (Schematic):** Xây dựng mạch điều khiển công suất, mạch cách ly tín hiệu, mạch bảo vệ chống sét lan truyền.
- **Layout bo mạch in (PCB Design):** Thiết kế bo mạch từ 2 đến 4 lớp trên Altium Designer và KiCad, tối ưu đường mạch xung nhịp tốc độ cao và chống nhiễu EMC/EMI.
- **Mạch điện tủ điều khiển:** Thiết kế bản vẽ tủ điện điều khiển động cơ, mạch biến tần, khởi động mềm, cụm rơ-le và khí nén.

### 2.2. Lập trình PLC & Tự động hóa công nghiệp
- **Đa dạng dòng PLC:** Thành thạo các dòng PLC phổ biến: Siemens (S7-1200, S7-1500), Mitsubishi (FX5U, Q-Series), Delta, Omron.
- **Ngôn ngữ chuẩn hóa:** Viết code theo chuẩn IEC 61131-3 (LAD, SCL, FBD) đảm bảo tính module hóa, dễ bảo trì và mở rộng.
- **Điều khiển truyền động:** Cấu hình và điều khiển biến tần (VFD), Servo, động cơ bước qua Profinet, Modbus RTU/TCP hoặc PTO.

### 2.3. Hệ thống giám sát dữ liệu & SCADA / IoT
- **Giao diện HMI:** Thiết kế giao diện vận hành trực quan trên Siemens KTP, Weintek, Delta.
- **SCADA công xưởng:** Hệ thống SCADA quản lý tập trung trên WinCC, Ignition hoặc Web-based SCADA.
- **Industrial IoT:** Thu thập dữ liệu cảm biến đo lường qua MQTT/TLS, lưu trữ và hiển thị trên Dashboard thời gian thực, cảnh báo qua Telegram/SMS.

### 2.4. Vi điều khiển nhúng chuyên sâu (Embedded & FPGA)
- Lập trình firmware C/C++ vi điều khiển 32-bit STM32 (ARM Cortex-M), ESP32 dual-core với FreeRTOS.
- Thiết kế mạch logic số tốc độ cao trên FPGA bằng ngôn ngữ Verilog HDL.

---

## 3. Hình ảnh phòng Lab & Hoạt động thực tế

<!-- Cách chèn ảnh minh họa vào bài viết: Lưu ảnh vào public/media/ và chèn cú pháp bên dưới -->
![Phòng Lab và Thiết Bị Thực Hành Hoài Giang Automation](/media/team-lab.svg)

---

## 4. Triết lý làm việc: Kỹ thuật chính xác — Thực nghiệm khắt khe

1. **Thực nghiệm khắt khe:** Mọi sơ đồ nguyên lý và dòng code đều được kiểm chứng thực tế trên thiết bị thật tại phòng Lab trước khi bàn giao.
2. **Độ bền công nghiệp:** Thiết kế mạch chịu được điện áp trồi sụt và môi trường nhiệt ẩm bụi bẩn của nhà xưởng.
3. **Chuyển giao minh bạch:** Bàn giao tài liệu thiết kế, sơ đồ nguyên lý và hỗ trợ kỹ thuật lâu dài.

---

## 5. Kết nối & Hợp tác

- **Hotline / Zalo:** 0336379944
- **Email:** lehoaigiangg@gmail.com
- **Địa chỉ:** Ninh Kiều, Cần Thơ
```

---

## 2. Hướng dẫn cách chèn hình ảnh vào bài viết giới thiệu

Khi Thầy có ảnh chụp phòng Lab, ảnh máy móc thực tế, ảnh tủ điện hoặc ảnh đội ngũ làm việc:

1. **Bước 1:** Copy file ảnh vào thư mục `public/media/` (Ví dụ: `public/media/anh-phong-lab.jpg`).
2. **Bước 2:** Trong nội dung Markdown của file `src/content/about/index.md`, chèn cú pháp:
   ```markdown
   ![Mô tả ảnh phòng Lab](/media/anh-phong-lab.jpg)
   ```
3. Nếu sửa qua giao diện **Pages CMS**:
   - Trong ô soạn thảo *Nội dung bài viết*, bấm biểu tượng **Insert Image** (Thêm ảnh) và chọn ảnh trực tiếp từ máy tính.
4. Ảnh sẽ tự động hiển thị responsive, co giãn đẹp mắt trên cả điện thoại và máy tính.

---

## 3. Cách tùy biến các con số thống kê nổi bật (Stats)

Ở đầu file `src/content/about/index.md`, mục `stats` tạo ra các ô số liệu to và ấn tượng ở đầu trang:

```yaml
stats:
  - number: "10+"
    label: "Năm kinh nghiệm thực tế"
  - number: "50+"
    label: "Hệ thống & Dự án hoàn thiện"
  - number: "100%"
    label: "Làm chủ thiết kế phần cứng & firmware"
  - number: "24/7"
    label: "Độ ổn định vận hành công nghiệp"
```
Thầy có thể sửa các con số `10+`, `50+`... hoặc thêm bớt các ô thống kê tùy theo mong muốn.
