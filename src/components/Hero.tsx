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
      className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-36 grid md:grid-cols-2 gap-12 md:gap-16 items-center overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/20 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full -z-10"></div>

      {/* LEFT CONTENT */}
      <div className="order-2 md:order-1 text-center md:text-left">

        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-5 py-2 rounded-full border border-primary/20 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          Available for Work
        </motion.div>
        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] tracking-tight text-slate-900"
        >
          <span className="text-slate-500">Aspiring</span> Full Stack <br />
          <span className="text-primary">Developer</span>
        </h1>
        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="mt-6 text-base md:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto md:mx-0"
        >
          I'm Monoara Tasnim, passionate about building
          modern, responsive, and user-friendly web applications.
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-8">
          {["React", "Next.js", "MongoDB", "Tailwind CSS"].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs md:text-sm font-medium shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div
          ref={buttonsRef}
          className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-5 mt-10"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 md:px-8 py-3 md:py-4 rounded-2xl bg-primary text-white font-semibold shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all text-sm md:text-base"
          >
            Hire Me
          </motion.a>

          <motion.a
            href="/monoara-resume.pdf"
            download="Monoara_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 md:px-8 py-3 md:py-4 rounded-2xl border border-slate-300 bg-white text-slate-700 font-semibold hover:border-primary hover:text-primary transition-all text-sm md:text-base"
          >
            Download CV
          </motion.a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="order-1 md:order-2 flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 blur-3xl opacity-30"></div>

          {/* Image */}
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-[380px] md:h-[380px] rounded-full overflow-hidden border-[6px] border-white shadow-2xl">
            <motion.img
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv4a2OsBYgVsJps14A0sUMEysEw0Dpbb4J92kQ-Os0n1TA6WUpvAMqYDBQUAHnhdgAx2esWV7zw7YYxH6XsPWt882uXdqH6FIRVlBenPqReoFEUYulGzG3oCCgFxYHFXNpnjmuAU5f2Cm80fPKdTEtm2_dmH575G4FOVm6VhBcCG4try-tfRV3ruhGznGgFJc4kHx3GJhccKigCv6OpMN3TD7Xq20AigNY5ph8kAhU2JbosEQfVVzJYCoX9YYia65w13XdBhGdOpg"
              alt="Monoara Tasnim"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
