export interface SiteConfig {
  brandName: string;
  brandSubname: string;
  tagline: string;
  siteDescription: string;
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
  siteDescription:
    'Chuyên đào tạo thực chiến & thiết kế hệ thống nhúng STM32, ESP32, FPGA, bo mạch PCB và tự động hóa công nghiệp. Học thực hành chuyên sâu trên thiết bị lab thực tế.',
  authorName: 'Hoài Giang',
  authorTitle: 'Kỹ sư Thiết kế Hệ thống Nhúng & Tự động hóa',
  authorBio:
    'Kỹ sư với 8+ năm kinh nghiệm thực chiến trong thiết kế bo mạch phần cứng, lập trình vi điều khiển STM32/ESP32, kiến trúc FPGA và hệ thống tự động hóa công nghiệp.',
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
    { label: 'Về tôi', href: '/about' },
    { label: 'Dự án', href: '/projects' },
    { label: 'Bài viết', href: '/blog' },
    { label: 'Khóa học', href: '/courses' },
    { label: 'Liên hệ', href: '/contact' },
  ],
};
