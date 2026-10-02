export interface SiteConfig {
  brandName: string;
  brandSubname: string;
  tagline: string;
  authorName: string;
  authorTitle: string;
  authorBio: string;
  siteUrl: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    workingHours: string;
  };
  socials: {
    github: string;
    youtube: string;
    tiktok: string;
    zalo: string;
    facebook: string;
    linkedin: string;
  };
  navigation: Array<{ label: string; href: string }>;
}

export const siteConfig: SiteConfig = {
  brandName: 'Hoài Giang Automation',
  brandSubname: 'Thầy Giang Tự Động Hóa',
  tagline: 'Embedded Systems · IoT · FPGA · Automation',
  authorName: 'Hoài Giang',
  authorTitle: 'Kỹ sư Thiết kế Hệ thống Nhúng & Tự động hóa',
  authorBio:
    'Chuyên nghiên cứu, thiết kế và hiện thực các hệ thống điều khiển tự động, phần cứng nhúng STM32/ESP32, kiến trúc phần cứng FPGA/Verilog và giải pháp IoT công nghiệp.',
  siteUrl: 'https://hoaigiangautomation.vercel.app',
  contact: {
    email: 'lehoaigiangg@gmail.com',
    phone: '0336379944',
    location: 'Ninh Kiều, Cần Thơ',
    workingHours: 'Thứ Hai - Thứ Bảy (08:30 - 18:00)',
  },
  socials: {
    github: 'https://github.com/LeHoaiGiang',
    youtube: 'https://www.youtube.com/@lehoaigiangctu',
    tiktok: 'https://www.tiktok.com/@gianglh.automation',
    zalo: 'https://zalo.me/0336379944',
    facebook: 'https://facebook.com/hoaigiangautomation',
    linkedin: 'https://linkedin.com/in/hoaigiangautomation',
  },
  navigation: [
    { label: 'Trang chủ', href: '/' },
    { label: 'Về chúng tôi', href: '/about' },
    { label: 'Dự án', href: '/projects' },
    { label: 'Khóa học', href: '/courses' },
    { label: 'Liên hệ', href: '/contact' },
  ],
};
