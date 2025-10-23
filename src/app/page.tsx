import { Metadata } from "next";
import Banner from "./components/home/hero";
import Services from "./components/home/services";
import WebDevelopment from "./components/home/web-development";
import Work from "./components/home/work";
import Pricing from "./components/home/pricing";
import Testimonials from "./components/home/testimonials";
import About from "./components/home/about";
import Faq from "./components/home/faq";
import CTA from "./components/home/cta";

export const metadata: Metadata = {
  title: "Ngehost - Hosting Cepat, Website Hebat | Jasa Pembuatan Website & Web Hosting Indonesia",
  description: "Ngehost menyediakan layanan web hosting cepat, domain, SSL, dan jasa pembuatan website profesional. Tim developer berpengalaman siap membuat website perusahaan, e-commerce, blog, dan aplikasi web custom. Server SSD NVMe, uptime 99.9%, support 24/7.",
  keywords: "hosting indonesia, web hosting murah, jasa pembuatan website, jasa buat website, website perusahaan, website e-commerce, domain murah, SSL gratis, hosting SSD, developer website, Ngehost",
  openGraph: {
    title: "Ngehost - Jasa Pembuatan Website & Hosting Profesional",
    description: "Layanan jasa pembuatan website profesional dan web hosting dengan server cepat, aman, dan support 24/7. Tim developer berpengalaman siap membantu mewujudkan website impian Anda.",
    type: "website",
    locale: "id_ID",
  },
};

export default function Home() {
  return (
    <main>
      <Banner/>
      <Services />
      <WebDevelopment />
      <Work />
      <Pricing />
      <Testimonials />
      <About />
      <Faq />
      <CTA />
    </main>
  );
}
