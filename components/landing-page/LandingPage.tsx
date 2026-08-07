"use client";

import React from "react";

import { motion } from "framer-motion";

import { HeroSection } from "@/components/landing-page/HeroSection";
import { Navbar } from "@/components/common/navbar/Navbar";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function LandingPage() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={containerVariants}
      className="min-h-screen bg-[#0D1117] text-slate-100 landing-page-scrollbar overflow-x-hidden"
    >
      <Navbar/>
      <HeroSection />

    </motion.div>
  );
}
