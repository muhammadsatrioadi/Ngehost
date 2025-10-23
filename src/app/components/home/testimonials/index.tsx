"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Rizky Pratama",
      company: "Owner TokoKita.id",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: "Pindah ke Ngehost adalah keputusan terbaik. Website kami jadi jauh lebih cepat dan support-nya super responsif. Uptime 99.9% benar-benar terasa!",
      rating: 5
    },
    {
      name: "Sarah Wijaya",
      company: "CEO Digital Agency",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      content: "Ngehost memberikan layanan hosting yang sangat stabil. Server SSD NVMe membuat website klien kami loading super cepat. Tim support juga sangat membantu.",
      rating: 5
    },
    {
      name: "Ahmad Fauzi",
      company: "Founder StartupTech",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: "Sebagai startup, kami butuh hosting yang reliable dan affordable. Ngehost memberikan keduanya. Migrasi dari hosting lama juga gratis dan cepat.",
      rating: 5
    },
    {
      name: "Lisa Sari",
      company: "E-commerce Owner",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content: "Toko online saya jadi lebih stabil setelah pindah ke Ngehost. SSL gratis dan backup harian membuat saya tenang. Harga juga sangat terjangkau.",
      rating: 5
    },
    {
      name: "Budi Santoso",
      company: "Web Developer",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      content: "Sebagai developer, saya sangat puas dengan performa server Ngehost. LiteSpeed dan SSD NVMe membuat website klien loading sangat cepat.",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-body-bg" id="testimonials-section">
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
              Testimoni Pelanggan
            </span>
          </h2>
          <p className="text-lightsky/80 text-lg max-w-2xl mx-auto">
            Dengarkan pengalaman pelanggan yang telah mempercayai Ngehost 
            untuk kebutuhan hosting dan website mereka.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial Card */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-darkmode to-tablebg rounded-2xl p-8 lg:p-12 border border-border relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
              
              <div className="relative z-10">
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <Icon icon="material-symbols:format-quote" className="text-white text-2xl" />
                  </div>
                </div>

                {/* Content */}
                <blockquote className="text-center mb-8">
                  <p className="text-lightsky text-lg lg:text-xl leading-relaxed italic">
                    "{testimonials[currentIndex].content}"
                  </p>
                </blockquote>

                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Icon 
                      key={i}
                      icon="material-symbols:star" 
                      className="text-yellow-400 text-xl mx-1" 
                    />
                  ))}
                </div>

                {/* Author */}
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <img
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary/30"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-lightsky mb-1">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-primary font-semibold">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              <Icon icon="material-symbols:arrow-back" className="text-xl" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              <Icon icon="material-symbols:arrow-forward" className="text-xl" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-primary to-secondary' 
                    : 'bg-lightsky/30 hover:bg-lightsky/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
              1000+
            </div>
            <p className="text-lightsky/80">Pelanggan Puas</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
              99.9%
            </div>
            <p className="text-lightsky/80">Uptime Garansi</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <p className="text-lightsky/80">Support Siap</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
