"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: "design_services", title: "UI/UX", desc: "Modern interfaces" },
  { icon: "palette", title: "Graphics", desc: "Visual identity" },
  { icon: "code", title: "Web Design", desc: "Clean code" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(mockupRef.current, {
        scrollTrigger: {
          trigger: mockupRef.current,
          start: "top 80%",
        },
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        },
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-40 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div ref={mockupRef} className="relative group">
            <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] -z-10 group-hover:bg-primary/10 transition-colors" />
            <div className="laptop-mockup shadow-level-2">
              <div className="laptop-screen">
                <img
                  alt="About Neeha"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjxtmo9vFXlyB4hZzBbrOqSXfNBbMevmu09gv-pHZ5w1qa72nVLOF56vSy6HKtb2_f3YaHhCExVGKEg7HG6dYR_uVWcD8Xq2D_X5667giR8d9-r9c56ee8p11c8UiuXLe5DOM_LbJ-5QTKKnRhsutC_UVsI4CBMRD2BH6pHpAbiL1NDp5PIFxuqbH-08YNed1VfdWPXUqGi4lYky8Ru2GY9ptyG07MsTpCGKfm2kp4Rd7WopDDrBa4sItc9JEcbETUqPd1czZIGlw"
                />
              </div>
            </div>
            <div className="laptop-base"></div>
          </div>

          <div ref={contentRef}>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary font-bold text-xs uppercase tracking-widest mb-4 block"
            >
              My Story
            </motion.span>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">Designing for the <span className="text-primary">Future</span></h3>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed">
              I am a passionate web developer and a proud graduate of <strong>Chittagong Independent University</strong>.
              My journey started with a fascination for how code can transform ideas into interactive digital experiences,
              and I am dedicated to building responsive and scalable web applications.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.05)" }}
                  className="bg-white p-8 rounded-3xl border border-slate-100 transition-all cursor-default text-center"
                >
                  <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary">
                    <span className="material-symbols-outlined text-2xl">
                      {service.icon}
                    </span>
                  </div>
                  <h4 className="font-bold text-sm text-slate-900">{service.title}</h4>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider mt-2">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
