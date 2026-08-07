"use client";

import React from "react";

import Link from "next/link";

export function Navigation() {
  return (
    <nav className="w-full bg-[#0F172A] border-b border-slate-800 px-6 py-4 flex items-center justify-between">
      {/* Logo / Brand Name */}
      <Link href="/" className="text-white text-xl font-bold tracking-tight">
        Jensen Omega
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-8">
        <Link href="#home" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">
          Home
        </Link>
        <Link href="#about" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">
          About
        </Link>
        <Link href="#projects" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">
          Projects
        </Link>
        <Link href="#contacts" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">
          Contacts
        </Link>
      </div>
    </nav>
  );
}
