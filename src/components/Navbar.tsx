"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart, Award, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Join Us", href: "/join" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [pathname, isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-white/75 backdrop-blur-md border-b border-slate-200/50 shadow-sm"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group relative z-50">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-purple to-brand-orange text-white shadow-md shadow-brand-purple/20 group-hover:scale-105 transition-transform duration-300">
              <span className="font-extrabold text-lg tracking-wider">NP</span>
              {/* Subtle Wing Glow Accent */}
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-brand-yellow border-2 border-white animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight tracking-tight text-slate-900 group-hover:text-brand-purple transition-colors">
                NayePankh
              </span>
              <span className="text-xs font-semibold tracking-widest text-slate-500 uppercase -mt-0.5">
                Foundation
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative py-2 text-sm font-semibold tracking-wide text-slate-600 hover:text-brand-purple transition-colors duration-200"
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-purple to-brand-orange rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Call to Actions (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/join"
              className="text-sm font-bold text-brand-purple hover:text-brand-purple-light transition-colors py-2 px-3"
            >
              Internships
            </Link>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                href="/donate"
                className="flex items-center gap-2 bg-gradient-to-r from-brand-purple to-brand-purple-light hover:from-brand-purple-light hover:to-brand-purple text-white text-sm font-bold py-2.5 px-6 rounded-full shadow-lg shadow-brand-purple/20 transition-all"
              >
                <Heart className="w-4 h-4 fill-brand-yellow text-brand-yellow" />
                <span>Donate Now</span>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl border border-slate-200 hover:bg-slate-100 transition-colors relative z-50 text-slate-800"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-md"
            />

            {/* Sidebar Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-40 w-full max-w-sm bg-white shadow-2xl flex flex-col p-8 pt-24"
            >
              {/* Decorative Accent Background Glows */}
              <div className="absolute top-20 right-10 w-48 h-48 rounded-full bg-brand-purple/5 blur-3xl pointer-events-none" />
              <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-brand-orange/5 blur-3xl pointer-events-none" />

              <nav className="flex flex-col gap-6 mb-8">
                {NAV_LINKS.map((link, idx) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className={`text-xl font-bold flex items-center justify-between border-b border-slate-100 pb-3 transition-colors ${
                          isActive
                            ? "text-brand-purple border-brand-purple/20"
                            : "text-slate-800 hover:text-brand-purple"
                        }`}
                      >
                        <span>{link.name}</span>
                        {isActive && (
                          <div className="w-2.5 h-2.5 rounded-full bg-brand-orange" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="flex flex-col gap-4 mt-auto">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Link
                    href="/join"
                    className="flex items-center justify-center gap-2 border border-slate-200 hover:border-brand-purple text-slate-800 hover:text-brand-purple font-bold py-3.5 px-6 rounded-2xl w-full text-center transition-colors bg-slate-50 hover:bg-white"
                  >
                    <Award className="w-5 h-5 text-brand-purple" />
                    <span>Apply for Internship</span>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <Link
                    href="/donate"
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-brand-purple to-brand-purple-light text-white font-bold py-4 px-6 rounded-2xl w-full text-center shadow-lg shadow-brand-purple/10"
                  >
                    <Heart className="w-5 h-5 fill-brand-yellow text-brand-yellow" />
                    <span>Donate Now</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
