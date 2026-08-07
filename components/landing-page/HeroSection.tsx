"use client";

import React from "react";

import Image from "next/image";

import { motion, type Variants } from "framer-motion";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ width: "100vw", marginLeft: "calc(50% - 50vw)" }}
    >
      {/* Full-width background image */}
      <Image
        src="/hero-bg.png"
        alt="Hero Background"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        quality={90}
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1117]/60 via-[#0D1117]/40 to-[#0D1117]/80" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto pt-20">
        <motion.p
          variants={itemVariants}
          className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-4"
        >
          Full Stack Developer
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
        >
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Hasalanka Nipun
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed mb-10"
        >
          I build beautiful, high-performance web applications with modern
          technologies. Turning ideas into reality, one line of code at a time.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5"
          >
            View My Work
          </a>
          <a
            href="#contacts"
            className="px-8 py-3 rounded-full border border-slate-600 text-slate-300 font-semibold text-sm hover:border-slate-400 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-500 uppercase tracking-widest">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-0.5 h-8 bg-gradient-to-b from-slate-500 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}
