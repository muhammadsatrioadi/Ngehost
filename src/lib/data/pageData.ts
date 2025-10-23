import { FaqType } from "@/app/types/faq";
import { FeatureType } from "@/app/types/features";
import { FooterType } from "@/app/types/footerlink";
import { HeaderItem } from "@/app/types/menu";
import { SocialType } from "@/app/types/sociallink";
import { WorkType } from "@/app/types/work";

export const Headerdata: HeaderItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Layanan", href: "/#services-section" },
  { label: "Jasa Website", href: "/#web-development-section" },
  { label: "Paket Harga", href: "/#pricing-section" },
  { label: "Tentang", href: "/#about-section" },
  { label: "Testimoni", href: "/#testimonials-section" },
  { label: "Kontak", href: "/#contact" },
];

const basePath = process.env.NODE_ENV === "production" ? "/crypto-nextjs" : "";

export const Companiesdata: { imgSrc: string }[] = [
  {
    imgSrc: `${basePath}/images/companies/birdseye.svg`,
  },
  {
    imgSrc: `${basePath}/images/companies/break.svg`,
  },
  {
    imgSrc: `${basePath}/images/companies/keddar.svg`,
  },
  {
    imgSrc: `${basePath}/images/companies/shield.svg`,
  },
  {
    imgSrc: `${basePath}/images/companies/tandov.svg`,
  },
  {
    imgSrc: `${basePath}/images/companies/tree.svg`,
  },
];

export const workdata: WorkType[] = [
  {
    imgSrc: `${basePath}/images/work/icon-one.svg`,
    heading: "Pilih Paket Hosting",
    subheading:
      "Pilih paket hosting yang sesuai dengan kebutuhan website Anda. Mulai dari paket Starter hingga Bisnis dengan fitur lengkap dan harga terjangkau.",
  },
  {
    imgSrc: `${basePath}/images/work/icon-two.svg`,
    heading: "Setup Domain & SSL",
    subheading:
      "Dapatkan domain gratis dan SSL certificate untuk keamanan website. Kami juga menyediakan migrasi gratis dari hosting lain.",
  },
  {
    imgSrc: `${basePath}/images/work/icon-three.svg`,
    heading: "Website Online & Support",
    subheading:
      "Website Anda akan online dengan performa optimal. Tim support kami siap membantu 24/7 melalui WhatsApp dan email.",
  },
];

export const Featuresdata: FeatureType[] = [
  {
    imgSrc: `${basePath}/images/features/featureOne.svg`,
    heading: "Web Hosting Cepat",
    subheading:
      "Hosting dengan performa tinggi dan uptime 99.9%, cocok untuk semua jenis website. Server SSD NVMe untuk kecepatan maksimal.",
  },
  {
    imgSrc: `${basePath}/images/features/featureTwo.svg`,
    heading: "Jasa Pembuatan Website",
    subheading:
      "Tim developer profesional siap membuat website custom sesuai kebutuhan bisnis. Mulai dari website perusahaan, e-commerce, hingga aplikasi web.",
  },
  {
    imgSrc: `${basePath}/images/features/featureThree.svg`,
    heading: "Domain & SSL Gratis",
    subheading:
      "Semua paket sudah termasuk domain dan SSL gratis untuk keamanan dan kredibilitas website Anda.",
  },
  {
    imgSrc: `${basePath}/images/features/featureOne.svg`,
    heading: "Maintenance & Support 24/7",
    subheading:
      "Layanan bantuan teknis responsif dan monitoring server setiap saat. Tim support berpengalaman siap membantu.",
  },
];

export const Faqdata: FaqType[] = [
  {
    heading: "1. Apa itu web hosting?",
    subheading:
      "Web hosting adalah layanan yang memungkinkan website Anda dapat diakses melalui internet. Ngehost menyediakan server cepat dengan teknologi SSD NVMe dan uptime 99.9% untuk performa optimal.",
  },
  {
    heading: "2. Apakah Ngehost menyediakan jasa pembuatan website?",
    subheading:
      "Ya, kami menyediakan jasa pembuatan website profesional untuk berbagai kebutuhan. Mulai dari website perusahaan, e-commerce, blog, hingga aplikasi web custom dengan tim developer berpengalaman.",
  },
  {
    heading: "3. Berapa lama proses pembuatan website?",
    subheading:
      "Waktu pembuatan website bervariasi tergantung kompleksitas. Website sederhana 1-2 minggu, website e-commerce 3-4 minggu, dan aplikasi web custom 1-3 bulan. Kami akan memberikan timeline yang jelas di awal proyek.",
  },
  {
    heading: "4. Apakah website yang dibuat responsive dan SEO friendly?",
    subheading:
      "Tentu! Semua website yang kami buat sudah responsive untuk semua perangkat dan dioptimasi untuk SEO. Kami menggunakan teknologi terbaru dan best practices untuk memastikan performa optimal.",
  },
  {
    heading: "5. Apakah ada garansi uptime untuk hosting?",
    subheading:
      "Ya, kami memberikan garansi uptime 99.9% dengan monitoring server 24/7. Jika terjadi downtime, kami akan memberikan kompensasi sesuai dengan SLA yang berlaku.",
  },
  {
    heading: "6. Bagaimana cara migrasi dari hosting lain?",
    subheading:
      "Kami menyediakan layanan migrasi gratis dari hosting lain. Tim teknis kami akan membantu memindahkan website, database, dan email tanpa downtime yang signifikan.",
  },
];

export const Sociallinkdata: SocialType[] = [
  {
    imgsrc: `${basePath}/images/footer/insta.svg`,
    href: "https://instagram.com/ngehost",
  },
  {
    imgsrc: `${basePath}/images/footer/twitter.svg`,
    href: "https://twitter.com/ngehost",
  },
  {
    imgsrc: `${basePath}/images/footer/youtube.svg`,
    href: "https://youtube.com/@ngehost",
  },
];

export const Footerlinkdata: FooterType[] = [
  { label: "Beranda", href: "/" },
  { label: "Layanan", href: "/#services-section" },
  { label: "Jasa Website", href: "/#web-development-section" },
  { label: "Paket Harga", href: "/#pricing-section" },
  { label: "Tentang", href: "/#about-section" },
  { label: "Kontak", href: "/#contact" },
];
