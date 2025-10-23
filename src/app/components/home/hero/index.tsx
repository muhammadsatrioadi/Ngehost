"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { useState } from "react";

const Banner = () => {
  const [isOpen, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <section className="relative pb-0 min-h-screen flex items-center" id="home-section">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-body-bg via-darkmode to-body-bg">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent"></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12">
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="mb-6 lg:text-start text-center text-5xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Hosting Cepat,
              </span>
              <br />
              <span className="text-lightsky">
                Website Hebat.
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lightsky/80 font-normal mb-10 max-w-[80%] lg:text-start text-center lg:mx-0 mx-auto text-lg leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Bangun dan jalankan website impianmu dengan layanan hosting cepat, aman, dan jasa pembuatan website profesional dari Ngehost. Server SSD NVMe, uptime 99.9%, dan tim developer berpengalaman siap membantu.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a
                href="#pricing-section"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary to-secondary rounded-xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Lihat Paket Hosting</span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
              
              <motion.a
                href="https://wa.me/6283863676263"
                target="_blank"
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary border-2 border-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon icon="material-symbols:chat" className="mr-2 text-xl" />
                Buat Website Sekarang
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Server Illustration */}
              <div className="relative w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl backdrop-blur-sm border border-primary/30 p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl"></div>
                
                {/* Server Rack */}
                <div className="relative z-10 space-y-4">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center px-4"
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
                        delay: i * 0.5,
                      }}
                    >
                      <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                      <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Icon icon="material-symbols:cloud" className="text-white text-sm" />
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gradient-to-br from-primary to-secondary rounded-lg sm:m-0 m-4">
            <div className="overlay flex items-center justify-between border-b border-solid border-border p-5 z-50 backdrop-blur-sm">
              <h3 className="text-white">Cara Kerja Ngehost</h3>
              <button onClick={closeModal} className="inline-block dark:invert">
                <Icon
                  icon="tabler:circle-x"
                  className="text-2xl text-white hover:cursor-pointer hover:text-primary"
                />
              </button>
            </div>
            <iframe
              height="400"
              className="p-4 md:w-[50rem] w-full"
              src="https://www.youtube.com/embed/xAAEiykov1w?si=7Keuu5t0oJzZ67Q-"
              title="Cara Kerja Ngehost"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Banner;
