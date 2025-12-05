"use client";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";

const CTA = () => {
  const [particles, setParticles] = useState<Array<{
    left: string;
    top: string;
    x: number;
    y: number;
    duration: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    const count = 15;
    const generated = Array.from({ length: count }, () => {
      const x = Math.random() * 200 - 100;
      const y = Math.random() * 200 - 100;
      return {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        x,
        y,
        duration: Math.random() * 15 + 10,
        delay: Math.random() * 5,
      };
    });
    setParticles(generated);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-body-bg via-darkmode to-body-bg relative overflow-hidden" id="contact">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
      
      {/* Floating Particles (generated client-side to avoid SSR hydration mismatch) */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            animate={{ x: [0, p.x], y: [0, p.y], opacity: [0, 1, 0] }}
            transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
            style={{ left: p.left, top: p.top }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Siap Online Bersama Ngehost?
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lightsky/80 text-lg lg:text-xl leading-relaxed mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Jangan biarkan website impian Anda tertunda. Mulai perjalanan digital Anda bersama Ngehost dan rasakan perbedaan hosting yang cepat, aman, dan jasa pembuatan website profesional yang terpercaya.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://wa.me/6283863676263"
              target="_blank"
              className="group relative inline-flex items-center justify-center px-10 py-5 text-xl font-semibold text-white bg-gradient-to-r from-primary to-secondary rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center">
                <Icon icon="material-symbols:chat" className="mr-3 text-2xl" />
                Hubungi Kami Sekarang
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
            
            <motion.a
              href="#pricing-section"
              className="group inline-flex items-center justify-center px-10 py-5 text-xl font-semibold text-primary border-2 border-primary rounded-2xl hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon icon="material-symbols:arrow-forward" className="mr-3 text-2xl" />
              Konsultasi Gratis
            </motion.a>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon icon="material-symbols:phone" className="text-white text-2xl" />
              </div>
              <h3 className="text-lightsky font-semibold text-lg mb-2">Telepon</h3>
              <p className="text-lightsky/60">0838-6367-6263</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon icon="material-symbols:email" className="text-white text-2xl" />
              </div>
              <h3 className="text-lightsky font-semibold text-lg mb-2">Email</h3>
              <p className="text-lightsky/60">support@ngehost.id</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon icon="material-symbols:chat" className="text-white text-2xl" />
              </div>
              <h3 className="text-lightsky font-semibold text-lg mb-2">WhatsApp</h3>
              <p className="text-lightsky/60">24/7 Support</p>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="mt-16 pt-8 border-t border-primary/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <p className="text-lightsky/60 text-sm mb-6">Dipercaya oleh 1000+ pelanggan di seluruh Indonesia</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-lightsky/40 font-semibold">✓ SSL Gratis</div>
              <div className="text-lightsky/40 font-semibold">✓ Uptime 99.9%</div>
              <div className="text-lightsky/40 font-semibold">✓ Support 24/7</div>
              <div className="text-lightsky/40 font-semibold">✓ Migrasi Gratis</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
