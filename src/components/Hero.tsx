"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([titleRef.current, subtitleRef.current, buttonsRef.current], {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.5,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative max-w-[1200px] mx-auto px-6 py-24 md:py-40 grid md:grid-cols-2 gap-20 items-center overflow-visible"
    >
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10" />
      
      <div className="order-2 md:order-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-6 px-4 py-2 rounded-full border border-primary/10"
        >
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          Available for new projects
        </motion.div>
        <h1 ref={titleRef} className="text-6xl md:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight">
          Crafting <span className="text-primary italic">Digital</span> Experiences
        </h1>
        <p ref={subtitleRef} className="text-xl md:text-2xl text-slate-500 mb-10 font-medium max-w-xl leading-relaxed">
          I'm Monoara Tasnim, a UI Designer & Developer focused on building beautiful, user-centric products.
        </p>
        <div ref={buttonsRef} className="flex flex-wrap gap-5">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, translateY: -2 }}
            whileTap={{ scale: 0.98 }}
            className="bg-primary text-on-primary px-10 py-5 rounded-2xl font-bold shadow-xl shadow-primary/20 transition-all hover:shadow-2xl hover:shadow-primary/30 flex items-center justify-center cursor-pointer"
          >
            Start a Project
          </motion.a>
          <a
            href="/neeha-resume.pdf"
            download="Neeha_Resume.pdf"
            className="group flex items-center gap-2 border-2 border-slate-200 text-slate-700 px-10 py-5 rounded-2xl font-bold transition-all hover:border-primary hover:text-primary hover:scale-105"
          >
            Download CV
            <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-y-1">expand_more</span>
          </a>
        </div>
      </div>

      <div className="order-1 md:order-2 flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ y: -10 }}
          className="hero-frame w-full max-w-sm aspect-[4/5] rounded-[120px] overflow-hidden shadow-level-1"
        >
          <motion.img
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            alt="Neeha Hossain"
            className="w-full h-full object-cover object-top bg-white"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv4a2OsBYgVsJps14A0sUMEysEw0Dpbb4J92kQ-Os0n1TA6WUpvAMqYDBQUAHnhdgAx2esWV7zw7YYxH6XsPWt882uXdqH6FIRVlBenPqReoFEUYulGzG3oCCgFxYHFXNpnjmuAU5f2Cm80fPKdTEtm2_dmH575G4FOVm6VhBcCG4try-tfRV3ruhGznGgFJc4kHx3GJhccKigCv6OpMN3TD7Xq20AigNY5ph8kAhU2JbosEQfVVzJYCoX9YYia65w13XdBhGdOpg"
          />
        </motion.div>
      </div>
    </section>
  );
}
