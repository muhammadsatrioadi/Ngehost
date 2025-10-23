"use client";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";

const About = () => {
  const features = [
    {
      icon: "material-symbols:speed",
      title: "Kecepatan Server Tinggi",
      description: "SSD NVMe, LiteSpeed Web Server untuk performa optimal"
    },
    {
      icon: "material-symbols:location-on",
      title: "Data Center Indonesia & Singapura",
      description: "Server terdekat untuk akses website yang lebih cepat"
    },
    {
      icon: "material-symbols:backup",
      title: "Backup Harian Otomatis",
      description: "Data website Anda aman dengan backup otomatis setiap hari"
    },
    {
      icon: "material-symbols:swap-horiz",
      title: "Gratis Migrasi dari Hosting Lain",
      description: "Tim teknis kami membantu migrasi tanpa downtime"
    },
    {
      icon: "material-symbols:support",
      title: "Dukungan Pelanggan 24 Jam",
      description: "Support melalui WhatsApp, email, dan live chat"
    }
  ];

  return (
    <section className="py-20 bg-darkmode" id="about-section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Mengapa Ngehost?
              </span>
            </h2>
            
            <p className="text-lightsky/80 text-lg leading-relaxed mb-8">
              Ngehost berdiri dengan misi membantu masyarakat Indonesia membangun kehadiran digital yang kuat. Kami percaya bahwa setiap ide hebat pantas memiliki rumah di internet. Dengan server cepat, harga terjangkau, dan tim profesional, Ngehost siap mendukung bisnis Anda menuju sukses online.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon icon={feature.icon} className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lightsky font-semibold text-lg mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-lightsky/70">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="https://wa.me/6283863676263"
                  target="_blank"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon icon="material-symbols:chat" className="mr-2 text-xl" />
                  Konsultasi Gratis
                </motion.a>
                <motion.a
                  href="#pricing-section"
                  className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon icon="material-symbols:arrow-forward" className="mr-2 text-xl" />
                  Lihat Paket
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Main Server Illustration */}
              <div className="relative w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl backdrop-blur-sm border border-primary/30 p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl"></div>
                
                {/* Server Rack */}
                <div className="relative z-10 space-y-4">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center px-4"
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(0, 224, 255, 0.3)",
                          "0 0 40px rgba(0, 224, 255, 0.6)",
                          "0 0 20px rgba(0, 224, 255, 0.3)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    >
                      <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                      <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                      <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-6 -right-6 w-12 h-12 bg-accent rounded-full flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Icon icon="material-symbols:cloud" className="text-white text-lg" />
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-6 -left-6 w-8 h-8 bg-primary rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                ></motion.div>

                <motion.div
                  className="absolute top-1/2 -left-4 w-6 h-6 bg-secondary rounded-full"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                ></motion.div>
              </div>

              {/* Stats Cards */}
              <motion.div
                className="absolute -top-4 -left-4 bg-gradient-to-br from-darkmode to-tablebg rounded-xl p-4 border border-primary/30 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">99.9%</div>
                  <div className="text-xs text-lightsky/60">Uptime</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -right-4 bg-gradient-to-br from-darkmode to-tablebg rounded-xl p-4 border border-secondary/30 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">24/7</div>
                  <div className="text-xs text-lightsky/60">Support</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
