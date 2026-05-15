"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "SkillSphere - Learning Platform",
    desc: "A comprehensive platform for online education with interactive courses and progress tracking.",
    image: "/projects/online-learning.png",
    tags: ["React", "Next.js, Authentication"],
    link: "https://b13-a08-seven.vercel.app/",
    colSpan: "md:col-span-8",
  },
  {
    title: "KeenKeeper - CRM",
    desc: "A powerful tool for managing professional relationships and networking efficiently.",
    image: "/projects/relationship-management.png",
    tags: ["Next.js", "Tailwind"],
    link: "https://keenkeeperwebapp.vercel.app/home",
    colSpan: "md:col-span-4",
  },
  {
    title: "DigiTools - SaaS",
    desc: "A collection of digital tools designed to enhance productivity and workflow.",
    image: "/projects/digitools.png",
    tags: ["HTML", "CSS"],
    link: "https://monoaratasnim.github.io/B13-A06/",
    colSpan: "md:col-span-4",
  },
  {
    title: "GitHub Issues Tracker",
    desc: "An enterprise-grade issue tracking system for managing software development workflows.",
    image: "/projects/gitissue-tracker.png",
    tags: ["JavaScript", "API"],
    link: "https://gitissue-tracker.netlify.app/",
    colSpan: "md:col-span-8",
    isLarge: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-40">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-extrabold mb-6"
            >
              Selected <span className="text-primary italic">Works</span>
            </motion.h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              A curated selection of projects where I've combined design and development to solve real-world problems.
            </p>
          </div>
          <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center border border-primary/10">
            <span className="material-symbols-outlined text-primary text-4xl animate-bounce">south</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`${project.colSpan} group relative bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 ${
                project.isLarge ? "flex flex-col md:flex-row" : ""
              }`}
            >
              <div className={`${project.isLarge ? "md:w-1/2 h-full min-h-[500px]" : "h-[450px]"} overflow-hidden relative bg-white p-6 flex items-center justify-center`}>
                <motion.img
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  alt={project.title}
                  className="max-w-full max-h-full object-contain shadow-md rounded-lg border border-slate-100"
                  src={project.image}
                />
                <div className="absolute inset-0 bg-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
              
              <div className={`${project.isLarge ? "md:w-1/2 p-10 md:p-16" : "p-10"} flex flex-col justify-between`}>
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-slate-100 text-slate-600 text-[10px] uppercase tracking-widest font-bold px-4 py-1.5 rounded-full border border-slate-200/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-slate-900 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-slate-500 leading-relaxed mb-8">
                    {project.desc}
                  </p>
                </div>

                <Link 
                  href={project.link || "#"} 
                  target="_blank"
                  className="inline-flex items-center gap-3 font-bold text-primary group/link"
                >
                  View Project
                  <span className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center group-hover/link:bg-primary group-hover/link:text-white transition-all">
                    <span className="material-symbols-outlined text-xl">arrow_outward</span>
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
