"use client";

import React from "react";

import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const mobileMenuVariants: Variants = {
  hidden: { opacity: 0, y: -16, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.22, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.97,
    transition: { duration: 0.18, ease: "easeIn" },
  },
};

const linkVariants: Variants = {
  hidden: { opacity: 0, x: -12 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.07, duration: 0.2, ease: "easeOut" },
  }),
};

interface NavLink {
  label: string;
  href: string;
}

interface MobileNavbarProps {
  navLinks: NavLink[];
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

export function MobileNavbar({
  navLinks,
  isOpen,
  onToggle,
  onClose,
}: MobileNavbarProps) {
  return (
    <>
      {/* Hamburger Button */}
      <button
        id="mobile-menu-toggle"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        onClick={onToggle}
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg hover:bg-slate-800/60 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
      >
        <motion.span
          animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.22 }}
          className="block w-5 h-0.5 bg-slate-300 rounded-full"
        />
        <motion.span
          animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.15 }}
          className="block w-5 h-0.5 bg-slate-300 rounded-full"
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.22 }}
          className="block w-5 h-0.5 bg-slate-300 rounded-full"
        />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="absolute top-full left-0 right-0 md:hidden bg-[#0F172A]/95 backdrop-blur-xl border-b border-slate-800/60 px-5 pb-6 pt-2"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  animate="show"
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="flex items-center gap-3 px-3 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 text-sm font-medium transition-all duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/70 shrink-0" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}

              {/* Hire Me CTA */}
              <motion.li
                custom={navLinks.length}
                variants={linkVariants}
                initial="hidden"
                animate="show"
                className="mt-3"
              >
                <a
                  href="#contacts"
                  onClick={onClose}
                  className="flex items-center justify-center w-full py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 shadow-md shadow-indigo-500/20"
                >
                  Hire Me
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-[-1] bg-black/40 md:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
}
