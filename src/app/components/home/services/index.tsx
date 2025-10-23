"use client";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";

const Services = () => {
  const services = [
    {
      icon: "material-symbols:cloud",
      title: "Web Hosting Cepat",
      description: "Hosting dengan performa tinggi dan uptime 99.9%, cocok untuk semua jenis website. Server SSD NVMe untuk kecepatan maksimal.",
      features: ["SSD NVMe Storage", "Uptime 99.9%", "LiteSpeed Server", "Auto Scaling"],
      color: "from-primary to-secondary"
    },
    {
      icon: "material-symbols:code",
      title: "Pembuatan Website Profesional",
      description: "Tim kami siap membuat website custom sesuai kebutuhan bisnis Anda. Desain modern, responsive, dan SEO friendly.",
      features: ["Custom Design", "Responsive Layout", "SEO Optimized", "CMS Integration"],
      color: "from-secondary to-accent"
    },
    {
      icon: "material-symbols:security",
      title: "Domain & SSL Gratis",
      description: "Semua paket sudah termasuk domain dan SSL gratis untuk keamanan dan kredibilitas website Anda.",
      features: ["Free Domain", "SSL Certificate", "Security Monitoring", "Auto Renewal"],
      color: "from-accent to-primary"
    },
    {
      icon: "material-symbols:support",
      title: "Maintenance & Support 24/7",
      description: "Layanan bantuan teknis responsif dan monitoring server setiap saat. Tim support berpengalaman siap membantu.",
      features: ["24/7 Support", "Server Monitoring", "Technical Assistance", "Quick Response"],
      color: "from-primary to-accent"
    }
  ];

  return (
    <section className="py-20 bg-darkmode" id="services-section">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Layanan Kami
            </span>
          </h2>
          <p className="text-lightsky/80 text-lg max-w-2xl mx-auto">
            Solusi lengkap untuk kebutuhan digital bisnis Anda. 
            Dari hosting cepat hingga pembuatan website profesional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-gradient-to-br from-tablebg to-darkmode rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-primary/10 h-full">
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    <Icon 
                      icon={service.icon} 
                      className="text-white text-2xl" 
                    />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-lightsky mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-lightsky/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex}
                        className="flex items-center text-sm text-lightsky/60"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Icon 
                          icon="material-symbols:check" 
                          className="text-primary mr-2 text-sm flex-shrink-0" 
                        />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Hover Button */}
                  <motion.div 
                    className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                  >
                    <motion.a
                      href="https://wa.me/6283863676263"
                      target="_blank"
                      className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${service.color} text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon icon="material-symbols:arrow-forward" className="mr-1 text-sm" />
                      Pelajari Lebih
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-lightsky mb-4">
              Butuh Konsultasi Gratis?
            </h3>
            <p className="text-lightsky/80 mb-6 max-w-2xl mx-auto">
              Tim ahli kami siap membantu Anda memilih solusi hosting dan website yang tepat untuk kebutuhan bisnis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/6283863676263"
                target="_blank"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon icon="material-symbols:chat" className="mr-2 text-xl" />
                Konsultasi WhatsApp
              </motion.a>
              <motion.a
                href="tel:+6283863676263"
                className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon icon="material-symbols:phone" className="mr-2 text-xl" />
                Hubungi Sekarang
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
