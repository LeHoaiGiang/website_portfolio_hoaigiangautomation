import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    description: z.string(),
    cover: z.string().default('/media/placeholder-project.svg'),
    category: z.enum([
      'IoT',
      'STM32',
      'ESP32',
      'FPGA',
      'PCB',
      'PLC',
      'Qt/C++',
      'Tự động hóa',
      'Khác',
    ]),
    technologies: z.array(z.string()).default([]),
    date: z.coerce.date().optional(),
    featured: z.boolean().default(false),
    published: z.boolean().default(true),
    hardware: z.string().optional(),
    software: z.string().optional(),
    github: z.string().optional().or(z.literal('')),
    demo: z.string().optional().or(z.literal('')),
    gallery: z.array(z.string()).default([]),
  }),
});

const courses = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/courses' }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    description: z.string(),
    cover: z.string().default('/media/placeholder-course.svg'),
    category: z.string(),
    level: z.string().optional(),
    format: z.string().optional(),
    duration: z.string().optional(),
    status: z
      .enum(['Đang cập nhật', 'Sắp mở', 'Đang nhận đăng ký', 'Đã kết thúc'])
      .optional()
      .default('Đang cập nhật'),
    featured: z.boolean().default(false),
    published: z.boolean().default(true),
    prerequisites: z.string().optional(),
    outcomes: z.array(z.string()).default([]),
    hardware: z.array(z.string()).default([]),
    software: z.array(z.string()).default([]),
    contactLabel: z.string().default('Liên hệ hỏi khóa học'),
    contactUrl: z.string().default('/contact'),
    date: z.coerce.date().optional(),
  }),
});

const about = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/about' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    cover: z.string().optional(),
    subtitle: z.string().optional(),
    stats: z
      .array(
        z.object({
          number: z.string(),
          label: z.string(),
        })
      )
      .optional()
      .default([]),
  }),
});

export const collections = {
  projects,
  courses,
  about,
};
