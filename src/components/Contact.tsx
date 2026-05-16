"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-40">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.span className="text-primary font-bold text-xs uppercase tracking-widest mb-4 block">
              Contact
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 md:mb-8 leading-tight">Let's build something <span className="text-primary italic">great</span></h2>
            <p className="text-base md:text-lg text-slate-500 mb-8 md:mb-12 leading-relaxed max-w-md mx-auto md:mx-0">
              Have a project in mind? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            <div className="space-y-6 md:space-y-8">
              <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 group cursor-pointer">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm border border-slate-100 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <span className="material-symbols-outlined text-xl md:text-2xl">mail</span>
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-slate-400 uppercase tracking-widest font-bold mb-1">Email Me</p>
                  <p className="text-base md:text-lg font-bold text-slate-900">hossainneeha8@gmail.com</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 group cursor-pointer">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm border border-slate-100 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <span className="material-symbols-outlined text-xl md:text-2xl">location_on</span>
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-slate-400 uppercase tracking-widest font-bold mb-1">Location</p>
                  <p className="text-base md:text-lg font-bold text-slate-900">Sugondha R/A, Chattogram</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-16 rounded-3xl md:rounded-[3rem] shadow-level-2 border border-slate-100 relative"
          >
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-24 h-24 md:w-32 md:h-32 bg-primary/5 rounded-full blur-3xl -z-10" />
            
            <form className="space-y-6 md:space-y-8">
              <div className="space-y-2 md:space-y-3">
                <label className="block text-sm font-bold text-slate-900">Your Name</label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl md:rounded-2xl p-4 md:p-5 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all outline-none text-slate-900 text-sm md:text-base"
                  placeholder="What's your name?"
                  type="text"
                />
              </div>
              <div className="space-y-2 md:space-y-3">
                <label className="block text-sm font-bold text-slate-900">Email Address</label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl md:rounded-2xl p-4 md:p-5 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all outline-none text-slate-900 text-sm md:text-base"
                  placeholder="your@email.com"
                  type="email"
                />
              </div>
              <div className="space-y-2 md:space-y-3">
                <label className="block text-sm font-bold text-slate-900">Message</label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl md:rounded-2xl p-4 md:p-5 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all outline-none text-slate-900 text-sm md:text-base"
                  placeholder="Tell me about your project..."
                  rows={4}
                ></motion.textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary text-on-primary font-bold py-4 md:py-5 rounded-xl md:rounded-2xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 text-sm md:text-base"
                type="submit"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
