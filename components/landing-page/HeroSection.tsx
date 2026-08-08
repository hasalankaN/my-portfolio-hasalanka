"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const techBadges = [
  { label: "Next.js", color: "bg-white/10 text-white border-white/15" },
  { label: "React", color: "bg-sky-500/10 text-sky-300 border-sky-500/20" },
  { label: "TypeScript", color: "bg-blue-500/10 text-blue-300 border-blue-500/20" },
  { label: "Node.js", color: "bg-green-500/10 text-green-300 border-green-500/20" },
  { label: "Tailwind", color: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20" },
];

const statsData = [
  { value: "3+", label: "Years Exp." },
  { value: "20+", label: "Projects" },
  { value: "100%", label: "Dedication" },
];

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0D1117]"
      style={{ width: "100vw", marginLeft: "calc(50% - 50vw)" }}
    >
      <Image
        src="/hero-bg.png"
        alt="Hero Background"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-[0.06] select-none pointer-events-none"
        quality={80}
      />

      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-sky-500/10 rounded-full blur-[80px] pointer-events-none" />

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(to right, #e2e8f0 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-24 pb-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <motion.div
          initial="hidden"
          animate="show"
          variants={containerVariants}
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1"
        >
          <motion.div variants={itemVariants} className="mb-5">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Full Stack Developer
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-5"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Hasalanka
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Nipun
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed mb-8"
          >
            I craft beautiful, high-performance web applications with modern
            technologies — turning complex ideas into seamless digital experiences.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10"
          >
            <a
              href="#projects"
              className="px-7 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-7 py-3 rounded-full border border-slate-600/80 bg-white/5 text-slate-300 font-semibold text-sm hover:border-slate-400 hover:text-white hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-2 justify-center lg:justify-start"
          >
            {techBadges.map((badge) => (
              <span
                key={badge.label}
                className={`px-3 py-1 rounded-full border text-xs font-medium ${badge.color}`}
              >
                {badge.label}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex gap-8 justify-center lg:justify-start"
          >
            {statsData.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl font-extrabold text-white">{stat.value}</p>
                <p className="text-xs text-slate-500 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease: "easeOut" }}
          className="flex-1 order-1 lg:order-2 relative w-full max-w-sm sm:max-w-md lg:max-w-none flex justify-center"
        >
          <div className="relative h-[420px] sm:h-[480px] lg:h-[580px] w-full max-w-[440px]">
            <div className="absolute right-20 top-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-sky-950/40 border border-sky-800/30 rounded-3xl shadow-2xl z-0" />

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-0 top-0 w-[55%] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#0D1117] z-20 bg-[#161b27]"
            >
              <Image
                src="/images/hasalanka1.jpeg"
                alt="Hasalanka Nipun Portrait 1"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.4)] pointer-events-none" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              className="absolute right-0 bottom-0 w-[58%] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#0D1117] z-30 bg-[#161b27]"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-sky-500/30 to-indigo-500/20 rounded-[inherit] blur-xl -z-10" />
              <Image
                src="/images/hasalanka2.jpeg"
                alt="Hasalanka Nipun Portrait 2"
                fill
                sizes="(max-width: 768px) 55vw, 28vw"
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.3)] pointer-events-none" />
            </motion.div>

            <div className="absolute right-2 -bottom-2 grid grid-cols-5 gap-1.5 opacity-40 pointer-events-none z-40">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] text-slate-600 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}