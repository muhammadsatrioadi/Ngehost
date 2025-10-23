"use client";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";

const WebDevelopment = () => {
  const services = [
    {
      icon: "material-symbols:web",
      title: "Website Perusahaan",
      description: "Website profesional untuk perusahaan dengan desain modern dan fitur lengkap",
      features: ["Responsive Design", "SEO Optimized", "CMS Integration", "Contact Form"],
      price: "Mulai dari 2.5jt",
      color: "from-primary to-secondary"
    },
    {
      icon: "material-symbols:storefront",
      title: "Website E-commerce",
      description: "Toko online lengkap dengan sistem pembayaran dan manajemen produk",
      features: ["Payment Gateway", "Product Management", "Order Tracking", "Admin Panel"],
      price: "Mulai dari 5jt",
      color: "from-secondary to-accent"
    },
    {
      icon: "material-symbols:article",
      title: "Website Berita/Blog",
      description: "Platform berita atau blog dengan sistem manajemen konten yang mudah",
      features: ["Content Management", "User Registration", "Comment System", "Social Sharing"],
      price: "Mulai dari 1.5jt",
      color: "from-accent to-primary"
    },
    {
      icon: "material-symbols:school",
      title: "Website Sekolah",
      description: "Website institusi pendidikan dengan fitur akademik dan informasi",
      features: ["Student Portal", "Academic Calendar", "News & Events", "Gallery"],
      price: "Mulai dari 3jt",
      color: "from-primary to-accent"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Konsultasi & Analisis",
      description: "Diskusi kebutuhan website, target audience, dan fitur yang diinginkan"
    },
    {
      step: "02", 
      title: "Design & Prototype",
      description: "Pembuatan mockup dan prototype website sesuai dengan brand identity"
    },
    {
      step: "03",
      title: "Development",
      description: "Pengembangan website dengan teknologi terbaru dan standar coding"
    },
    {
      step: "04",
      title: "Testing & Launch",
      description: "Testing menyeluruh dan deployment website ke server hosting"
    }
  ];

  return (
    <section className="py-20 bg-body-bg" id="web-development-section">
      <div className="container">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Jasa Pembuatan Website
            </span>
          </h2>
          <p className="text-lightsky/80 text-lg max-w-3xl mx-auto">
            Tim developer profesional kami siap membantu mewujudkan website impian Anda. 
            Dari konsep hingga launch, kami memberikan solusi website yang modern, responsive, dan SEO-friendly.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-gradient-to-br from-darkmode to-tablebg rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-primary/10 h-full">
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    <Icon 
                      icon={service.icon} 
                      className="text-white text-2xl" 
                    />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-lightsky mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-lightsky/70 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-4">
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

                  {/* Price */}
                  <div className="text-center mb-4">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                  </div>

                  {/* CTA Button */}
                  <motion.a
                    href="https://wa.me/6283863676263"
                    target="_blank"
                    className={`w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r ${service.color} text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon icon="material-symbols:chat" className="mr-2 text-lg" />
                    Konsultasi Gratis
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-lightsky mb-12">
            Proses Pembuatan Website
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-secondary transform translate-x-10"></div>
                  )}
                </div>
                <h4 className="text-xl font-bold text-lightsky mb-3">{step.title}</h4>
                <p className="text-lightsky/70">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-lightsky mb-4">
              Siap Membuat Website Profesional?
            </h3>
            <p className="text-lightsky/80 mb-6 max-w-2xl mx-auto">
              Konsultasikan kebutuhan website Anda dengan tim developer kami. 
              Dapatkan penawaran terbaik dan timeline yang sesuai dengan kebutuhan bisnis.
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
                Konsultasi Gratis
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

export default WebDevelopment;
