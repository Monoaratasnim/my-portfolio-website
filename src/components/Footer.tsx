import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-slate-100">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <div className="text-xl font-extrabold text-primary mb-2">Monoara<span className="text-slate-400">Tasnim</span></div>
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">
            © 2026 • Crafted with passion and precision
          </p>
        </div>
        <div className="flex gap-8">
          {[
            { name: "LinkedIn", icon: "share", href: "https://www.linkedin.com/in/tasnim-monoara" },
            { name: "GitHub", icon: "terminal", href: "https://github.com/Monoaratasnim" },
            
          ].map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="text-slate-400 hover:text-primary transition-all flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest group"
            >
              <span className="material-symbols-outlined text-lg group-hover:scale-110 transition-transform">{social.icon}</span>
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
