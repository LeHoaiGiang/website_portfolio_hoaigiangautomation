import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#090d16"/>
      <stop offset="60%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#02253b"/>
    </linearGradient>
    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="50%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#2563eb"/>
    </linearGradient>
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e293b" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#0f172a" stop-opacity="0.98"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="30" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bgGrad)"/>

  <!-- Subtle grid lines -->
  <g stroke="#0284c7" stroke-width="1" opacity="0.09">
    <line x1="0" y1="70" x2="1200" y2="70"/>
    <line x1="0" y1="140" x2="1200" y2="140"/>
    <line x1="0" y1="210" x2="1200" y2="210"/>
    <line x1="0" y1="280" x2="1200" y2="280"/>
    <line x1="0" y1="350" x2="1200" y2="350"/>
    <line x1="0" y1="420" x2="1200" y2="420"/>
    <line x1="0" y1="490" x2="1200" y2="490"/>
    <line x1="0" y1="560" x2="1200" y2="560"/>
    <line x1="100" y1="0" x2="100" y2="630"/>
    <line x1="200" y1="0" x2="200" y2="630"/>
    <line x1="300" y1="0" x2="300" y2="630"/>
    <line x1="400" y1="0" x2="400" y2="630"/>
    <line x1="500" y1="0" x2="500" y2="630"/>
    <line x1="600" y1="0" x2="600" y2="630"/>
    <line x1="700" y1="0" x2="700" y2="630"/>
    <line x1="800" y1="0" x2="800" y2="630"/>
    <line x1="900" y1="0" x2="900" y2="630"/>
    <line x1="1000" y1="0" x2="1000" y2="630"/>
    <line x1="1100" y1="0" x2="1100" y2="630"/>
  </g>

  <!-- Glowing Accent blobs -->
  <circle cx="1060" cy="110" r="190" fill="#0284c7" opacity="0.22" filter="url(#glow)"/>
  <circle cx="140" cy="530" r="160" fill="#38bdf8" opacity="0.15" filter="url(#glow)"/>

  <!-- Main Card Container -->
  <rect x="70" y="60" width="1060" height="510" rx="24" fill="url(#cardGrad)" stroke="#0284c7" stroke-width="2" stroke-opacity="0.45"/>

  <!-- Status pill -->
  <rect x="120" y="110" width="280" height="38" rx="19" fill="#0284c7" fill-opacity="0.18" stroke="#38bdf8" stroke-width="1.5"/>
  <circle cx="142" cy="129" r="5" fill="#10b981"/>
  <text x="160" y="134" fill="#38bdf8" font-family="monospace, sans-serif" font-size="13" font-weight="700" letter-spacing="1">EMBEDDED &amp; AUTOMATION LAB</text>

  <!-- Brand Title -->
  <text x="120" y="215" fill="#ffffff" font-family="sans-serif" font-size="54" font-weight="800" letter-spacing="-0.5">Hoài Giang Automation</text>
  <text x="120" y="260" fill="#38bdf8" font-family="sans-serif" font-size="24" font-weight="700">Thầy Giang Tự Động Hóa</text>

  <!-- Value Promise -->
  <text x="120" y="325" fill="#f1f5f9" font-family="sans-serif" font-size="27" font-weight="600">
    Đào Tạo Kỹ Thuật Thực Chiến &amp; Thiết Kế Phần Cứng Nhúng
  </text>
  <text x="120" y="365" fill="#94a3b8" font-family="sans-serif" font-size="19">
    Quy trình chuẩn công nghiệp từ Schematic bo mạch đến Firmware FreeRTOS &amp; IoT Cloud
  </text>

  <!-- Tech tags -->
  <g transform="translate(120, 420)">
    <!-- Badge 1: STM32 ARM -->
    <rect x="0" y="0" width="170" height="46" rx="10" fill="#1e293b" stroke="#0284c7" stroke-width="1.5"/>
    <text x="85" y="29" text-anchor="middle" fill="#38bdf8" font-family="monospace, sans-serif" font-size="15" font-weight="700">STM32 ARM</text>

    <!-- Badge 2: ESP32 IoT -->
    <rect x="185" y="0" width="170" height="46" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
    <text x="270" y="29" text-anchor="middle" fill="#34d399" font-family="monospace, sans-serif" font-size="15" font-weight="700">ESP32 / IoT</text>

    <!-- Badge 3: PCB Hardware -->
    <rect x="370" y="0" width="170" height="46" rx="10" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
    <text x="455" y="29" text-anchor="middle" fill="#c084fc" font-family="monospace, sans-serif" font-size="15" font-weight="700">PCB KiCad</text>

    <!-- Badge 4: FPGA Verilog -->
    <rect x="555" y="0" width="170" height="46" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
    <text x="640" y="29" text-anchor="middle" fill="#fbbf24" font-family="monospace, sans-serif" font-size="15" font-weight="700">FPGA Verilog</text>

    <!-- Badge 5: PLC & SCADA -->
    <rect x="740" y="0" width="170" height="46" rx="10" fill="#1e293b" stroke="#ef4444" stroke-width="1.5"/>
    <text x="825" y="29" text-anchor="middle" fill="#f87171" font-family="monospace, sans-serif" font-size="15" font-weight="700">PLC Siemens</text>
  </g>

  <!-- URL footer -->
  <text x="1090" y="535" text-anchor="end" fill="#64748b" font-family="monospace, sans-serif" font-size="15">hoaigiangautomation.vercel.app</text>
</svg>`;

async function main() {
  const outputPath = path.resolve('public/media/og-image.png');
  await sharp(Buffer.from(svg))
    .png({ compressionLevel: 9 })
    .toFile(outputPath);
  console.log('Successfully created:', outputPath);
}

main().catch(err => {
  console.error('Error generating OG image:', err);
  process.exit(1);
});
