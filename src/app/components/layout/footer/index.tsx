"use client";

import { Footerlinkdata, Sociallinkdata } from "@/lib/data/pageData";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-body-bg relative pt-10">
      <div className="bg-linear-to-r from-primary to-secondary hidden lg:block absolute w-full h-full top-0 -left-1/2 blur-390"></div>
      <div className="container relative z-10 pb-16">
        <div className="grid grid-cols-1 gap-y-10 md:gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          <div className="lg:col-span-6 sm:col-span-2">
            {/* Ngehost Logo */}
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon 
                    icon="material-symbols:cloud" 
                    className="text-white text-xl"
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Ngehost
              </span>
            </div>
            
            <p className="text-lightsky/60 text-sm font-normal max-w-96 leading-7 mb-7">
              Ngehost adalah penyedia layanan hosting dan pembuatan website profesional yang berfokus pada kecepatan, keamanan, dan kemudahan bagi pelanggan. Kami membantu bisnis, UMKM, hingga personal brand untuk membangun kehadiran online yang optimal.
            </p>
            
            <div className="flex gap-4">
              {Sociallinkdata.map((items, i) => (
                <Link
                  href={items.href}
                  target="_blank"
                  key={i}
                  className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center hover:from-primary/30 hover:to-secondary/30 transition-all duration-300"
                >
                  <img
                    src={items.imgsrc}
                    alt={items.imgsrc}
                    className="w-5 h-5 hover:scale-110 transition-transform duration-300"
                  />
                </Link>
              ))}
            </div>
          </div>
          
          <div className="group relative lg:col-span-2">
            <p className="text-lightsky text-xl font-medium mb-9">Navigasi</p>
            <ul>
              {Footerlinkdata.map((product, i) => (
                <li key={i} className="mb-5">
                  <Link
                    href={product.href}
                    className="text-lightsky/60 text-sm font-normal mb-6 space-links hover:text-primary transition-colors duration-300"
                  >
                    {product.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-4">
            <p className="text-lightsky text-xl font-medium mb-9">Kontak Kami</p>
            
            <Link
              href="tel:+6283863676263"
              className="text-lightsky/60 hover:text-primary text-sm font-normal mb-6 flex gap-2 w-fit items-center transition-colors duration-300"
            >
              <Icon icon="material-symbols:phone" className="text-primary text-xl" />
              0838-6367-6263
            </Link>
            
            <Link
              href="mailto:support@ngehost.id"
              className="text-lightsky/60 hover:text-primary text-sm font-normal mb-6 flex gap-2 w-fit items-center transition-colors duration-300"
            >
              <Icon icon="material-symbols:email" className="text-primary text-xl" />
              support@ngehost.id
            </Link>
            
            <Link
              href="https://wa.me/6283863676263"
              target="_blank"
              className="text-lightsky/60 hover:text-primary text-sm font-normal mb-6 flex gap-2 w-fit items-center transition-colors duration-300"
            >
              <Icon icon="material-symbols:chat" className="text-primary text-xl" />
              WhatsApp Support
            </Link>
            
            <div className="text-lightsky/60 text-sm font-normal mb-6 flex gap-2">
              <Icon icon="material-symbols:location-on" className="text-primary text-xl" />
              Jakarta, Indonesia
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-8 px-4 border-t border-primary/20">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-lightsky/60 text-sm text-center md:text-left">
              © 2025 Ngehost. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-lightsky/60 hover:text-primary transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-lightsky/60 hover:text-primary transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
