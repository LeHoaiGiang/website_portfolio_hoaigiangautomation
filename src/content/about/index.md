---
title: "Về Tôi — Thầy Giang Tự Động Hóa"
subtitle: "Kỹ sư Thiết kế Hệ thống Nhúng & Giảng viên Đào tạo Kỹ thuật Thực chiến với hơn 8 năm kinh nghiệm chế tạo và vận hành thiết bị thực tế."
description: "Hành trình cá nhân của Thầy Giang (Hoài Giang) — Từ kỹ sư mày mò phần cứng, xử lý sự cố công nghiệp đến người truyền lửa đào tạo nhúng STM32, ESP32, PCB và Tự động hóa."
cover: "/media/team-lab.webp"
stats:
  - number: "8+"
    label: "Năm kinh nghiệm thực chiến"
  - number: "500+"
    label: "Học viên & Kỹ sư đã theo học"
  - number: "120+"
    label: "Video chia sẻ kiến thức YouTube"
  - number: "30+"
    label: "Bo mạch & Dự án bàn giao công nghiệp"
---

## 1. Hành trình cá nhân: Từ bàn thí nghiệm đến nhà máy

Xin chào bạn, tôi là **Hoài Giang** (thường được anh em kỹ sư và các bạn học viên gọi thân mật là **Thầy Giang Tự Động Hóa**).

Tôi bắt đầu hành trình kỹ thuật của mình không phải bằng những thành công hào nhoáng, mà từ hàng chục lần bo mạch bốc khói, nổ tụ chống ngược cực, và những đêm thức trắng săn lùng lỗi `HardFault_Handler` trên vi điều khiển STM32. 

Qua hơn **8 năm trực tiếp thiết kế phần cứng, viết firmware nhúng và triển khai các hệ thống tự động hóa công nghiệp**, tôi nhận ra một khoảng cách rất lớn:
> *Rất nhiều bạn sinh viên ra trường thuộc lòng lý thuyết vi xử lý, nhưng khi cầm mỏ hàn thì không biết chọn thiếc, khi vẽ bo mạch thì bỏ qua đường đất chống nhiễu EMC, và khi viết code nhúng thì hệ thống bị đơ sau vài giờ chạy thực tế ngoài xưởng.*

Đó là lý do tôi thành lập phòng Lab kỹ thuật và xây dựng không gian chia sẻ này: **Giúp các kỹ sư trẻ làm chủ công nghệ bằng chính đôi tay và sản phẩm thật.**

---

## 2. Năng lực kỹ thuật thực chiến mà tôi trực tiếp làm chủ

Mọi kiến thức tôi chia sẻ và mọi dự án tôi nhận chuyển giao đều dựa trên năng lực hiện thực hóa thực tế:

### 2.1. Thiết kế phần cứng & Bo mạch in (PCB Design)
- **Tư duy Schematic chuẩn công nghiệp:** Thiết kế mạch nguồn xung (Buck/Boost DC-DC), mạch cách ly quang Optocoupler, tầng bảo vệ chống sốc điện TVS và quá dòng tự phục hồi.
- **Layout PCB 2–4 lớp:** Sử dụng Altium Designer và KiCad, tối ưu trở kháng đường truyền (Impedance Matching), phân tách vùng đất Analog/Digital (AGND/DGND) và tuân thủ nghiêm ngặt tiêu chuẩn chống nhiễu điện từ EMC/EMI.

### 2.2. Vi điều khiển nhúng chuyên sâu (STM32, ESP32 & FreeRTOS)
- **Lập trình firmware tầng thấp:** Làm chủ thanh ghi (Registers), ngoại vi DMA, ngắt NVIC, giao tiếp tốc độ cao SPI, I2C, UART.
- **Hệ điều hành thời gian thực (RTOS):** Kiến trúc hệ thống đa nhiệm bằng FreeRTOS, quản lý tài nguyên đồng bộ với Semaphore/Mutex, hàng đợi Queue và triệt tiêu nguy cơ Deadlock hay tràn Stack.
- **Giao thức công nghiệp:** Xây dựng thiết bị Master/Slave qua Modbus RTU/TCP, mạng điều khiển phân tán CAN-Bus và giao tiếp Ethernet công nghiệp.

### 2.3. Industrial IoT & Giám sát dữ liệu Cloud
- **Gateway vi xử lý ESP32:** Thu thập tín hiệu cảm biến rung động, nhiệt độ, dòng điện và lưu lượng từ xưởng sản xuất.
- **Bảo mật & Tốc độ cao:** Mã hóa kết nối MbedTLS 1.3, đóng gói giao thức MQTT / HTTP REST, cơ chế cập nhật firmware từ xa không dây (OTA) ổn định.
- **Trực quan hóa:** Xây dựng Dashboard giám sát trực quan thời gian thực trên ThingsBoard, Grafana và cảnh báo sự cố tức thời qua Zalo / Telegram Bot.

### 2.4. Lập trình PLC & Tự động hóa máy
- **Dòng PLC công nghiệp:** Lập trình chuyên sâu trên dòng Siemens S7-1200 / S7-1500, Mitsubishi FX Series bằng ngôn ngữ LAD và SCL chuẩn IEC 61131-3.
- **Truyền động & Giám sát:** Điều khiển biến tần (VFD), động cơ bước, Servo qua xung PTO hoặc mạng Profinet; thiết kế màn hình giao diện HMI trực quan cho công nhân vận hành.

---

## 3. Triết lý đào tạo & Làm việc của tôi

Dù là giảng dạy một học viên mới bắt đầu hay thiết kế một dây chuyền tự động hóa cho doanh nghiệp, tôi luôn giữ vững 3 nguyên tắc:

1. **Học đi đôi với phần cứng thật:** Không dạy lý thuyết chay, không dùng mô phỏng thiếu thực tế. Mọi bài học đều đi liền với mạch in, máy hiện sóng và linh kiện thực tế.
2. **Code chuẩn — Mạch sạch — Dễ bảo trì:** Mỗi đường mạch vẽ ra phải tối ưu sản xuất, mỗi dòng code viết ra phải có tài liệu chú thích rõ ràng để đồng nghiệp hoặc người vận hành dễ dàng tiếp quản.
3. **Đồng hành đến cùng:** Với học viên, tôi sẵn sàng hỗ trợ sửa lỗi mạch và định hướng công việc. Với đối tác doanh nghiệp, tôi cam kết bàn giao đầy đủ mã nguồn, file thiết kế và hướng dẫn chuyển giao minh bạch.

---

## 4. Kênh kết nối & Trao đổi cá nhân

Nếu bạn là sinh viên muốn có lộ trình thực chiến để tự tin đi làm, kỹ sư cần bổ sung kỹ năng chuyên sâu, hoặc doanh nghiệp cần người tư vấn giải pháp phần cứng nhúng:

- **Hotline / Zalo cá nhân:** 0336379944
- **Email công việc:** lehoaigiangg@gmail.com
- **Kênh YouTube kỹ thuật:** [youtube.com/@lehoaigiangctu](https://www.youtube.com/@lehoaigiangctu) *(Nơi tôi chia sẻ hơn 120+ bài giảng và phân tích mạch miễn phí)*
- **Kênh TikTok thực hành:** [tiktok.com/@gianglh.automation](https://www.tiktok.com/@gianglh.automation)
- **Địa chỉ Lab làm việc:** Ninh Kiều, Cần Thơ
