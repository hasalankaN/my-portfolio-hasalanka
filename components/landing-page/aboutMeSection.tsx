"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { personalAboutData } from "../../data/aboutData";

export function AboutSection() {
  return (
    <section id="about" className="py-28 bg-[#0D1117] text-slate-300 relative overflow-hidden">
      {/* Decorative background glow effects to match Hero Section */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <span className="text-indigo-400 font-mono text-sm uppercase tracking-widest bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-500/20">
              Get to know me
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mt-4">
              {personalAboutData.title.split(" ")[0]}{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {personalAboutData.title.split(" ").slice(1).join(" ")}
              </span>
            </h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
              {personalAboutData.subtitle}
            </p>
          </div>

          {/* Main Bio Paragraph Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-16 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-md relative"
          >
            <div className="absolute -top-3 left-10 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              Background & Vision
            </div>
            <p className="text-lg sm:text-xl leading-relaxed text-slate-200 mt-2">
              {personalAboutData.bio}
            </p>

            {/* Interest Tags Inside Bio */}
            <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap gap-2">
              {personalAboutData.interests.map((tag, idx) => (
                <span key={idx} className="text-xs font-medium px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  # {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Highlight Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {personalAboutData.cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                <Card className="h-full bg-[#161b27]/80 backdrop-blur border-slate-800/80 hover:border-indigo-500/50 hover:bg-[#1a2130] transition-all duration-300 group flex flex-col justify-between shadow-xl">
                  <CardHeader>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-white/5 text-slate-400 group-hover:text-indigo-300 group-hover:bg-indigo-500/10 transition">
                        {card.badge}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-bold text-white group-hover:text-indigo-300 transition">
                      {card.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <CardDescription className="text-base text-slate-200 font-medium">
                      {card.desc}
                    </CardDescription>
                    <div className="pt-2 border-t border-slate-800/60">
                      <p className="text-sm text-indigo-300 font-semibold">
                        {card.institute}
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {card.year}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}