"use client";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Starter Plan",
      price: "25.000",
      period: "/bulan",
      description: "Cocok untuk website personal dan blog",
      features: [
        "1 Website",
        "1 GB SSD Storage",
        "SSL Gratis",
        "Dukungan Email",
        "Uptime 99.9%",
        "Backup Mingguan"
      ],
      buttonText: "Pilih Paket Ini",
      buttonLink: "https://wa.me/6283863676263",
      popular: false,
      color: "from-primary to-secondary"
    },
    {
      name: "Pro Plan",
      price: "75.000",
      period: "/bulan",
      description: "Paling populer untuk bisnis kecil",
      features: [
        "5 Website",
        "10 GB SSD Storage",
        "SSL & Domain Gratis",
        "Support Premium 24/7",
        "Uptime 99.9%",
        "Backup Harian",
        "CDN Gratis"
      ],
      buttonText: "Paling Populer",
      buttonLink: "https://wa.me/6283863676263",
      popular: true,
      color: "from-secondary to-accent"
    },
    {
      name: "Bisnis Plan",
      price: "150.000",
      period: "/bulan",
      description: "Untuk bisnis besar dan e-commerce",
      features: [
        "Unlimited Website",
        "50 GB SSD Storage",
        "SSL & Domain Gratis",
        "Dedicated Support",
        "Uptime 99.9%",
        "Backup Harian",
        "CDN Premium",
        "Priority Support"
      ],
      buttonText: "Mulai Sekarang",
      buttonLink: "https://wa.me/6283863676263",
      popular: false,
      color: "from-accent to-primary"
    }
  ];

  return (
    <section className="py-20 bg-body-bg" id="pricing-section">
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
              Paket Harga
            </span>
          </h2>
          <p className="text-lightsky/80 text-lg max-w-2xl mx-auto">
            Pilih paket hosting yang sesuai dengan kebutuhan website Anda. 
            Semua paket sudah termasuk SSL gratis dan support 24/7.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative ${
                plan.popular 
                  ? 'lg:scale-110 z-10' 
                  : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <span className="bg-gradient-to-r from-secondary to-accent text-white px-6 py-2 rounded-full text-sm font-semibold">
                    ⭐ Paling Populer
                  </span>
                </div>
              )}
              
              <div className={`
                relative bg-gradient-to-br from-darkmode to-tablebg rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105
                ${plan.popular 
                  ? 'border-primary shadow-2xl shadow-primary/20' 
                  : 'border-border hover:border-primary/50'
                }
              `}>
                {/* Glow Effect for Popular Plan */}
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl"></div>
                )}
                
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-lightsky mb-2">{plan.name}</h3>
                    <p className="text-lightsky/60 text-sm mb-6">{plan.description}</p>
                    
                    <div className="mb-6">
                      <span className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Rp {plan.price}
                      </span>
                      <span className="text-lightsky/60 text-lg">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex}
                        className="flex items-center text-lightsky/80"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Icon 
                          icon="material-symbols:check-circle" 
                          className="text-primary mr-3 text-xl flex-shrink-0" 
                        />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.a
                    href={plan.buttonLink}
                    target="_blank"
                    className={`
                      w-full inline-flex items-center justify-center px-6 py-4 rounded-xl font-semibold text-white transition-all duration-300
                      bg-gradient-to-r ${plan.color} hover:shadow-lg hover:shadow-primary/25
                    `}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon icon="material-symbols:chat" className="mr-2 text-xl" />
                    {plan.buttonText}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-lightsky mb-4">
              🎉 Promo Khusus Bulan Ini
            </h3>
            <p className="text-lightsky/80 mb-6">
              Dapatkan diskon 30% untuk pembayaran tahunan + migrasi gratis dari hosting lain
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/6283863676263"
                target="_blank"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon icon="material-symbols:chat" className="mr-2" />
                Konsultasi Gratis
              </motion.a>
              <motion.a
                href="tel:+6283863676263"
                className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon icon="material-symbols:phone" className="mr-2" />
                Hubungi Kami
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
