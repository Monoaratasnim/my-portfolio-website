"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "MongoDB", icon: "database" },
  { name: "Next.js", icon: "rocket_launch" },
  { name: "Express.js", icon: "terminal" },
  { name: "Tailwind", icon: "style" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-40 bg-slate-50/50">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-extrabold mb-6"
          >
            Core <span className="text-primary italic">Stack</span>
          </motion.h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            The modern technologies I use to bring complex ideas to life with performance and scalability.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                backgroundColor: "#ffffff",
                boxShadow: "0 20px 40px rgba(0,0,0,0.05)"
              }}
              className="bg-white/50 backdrop-blur-sm p-10 rounded-[2.5rem] transition-all text-center group border border-slate-200/50 cursor-default"
            >
              <div className="w-20 h-20 bg-slate-100 rounded-[2rem] flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <span className="material-symbols-outlined text-4xl transition-transform group-hover:scale-110">
                  {skill.icon}
                </span>
              </div>
              <h4 className="text-xl font-bold text-slate-900">{skill.name}</h4>
              <div className="w-8 h-1 bg-primary/20 mx-auto mt-4 rounded-full group-hover:w-16 group-hover:bg-primary transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
