"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, ArrowRight, BookOpen, Smile, Sparkles, Globe, ShieldCheck } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import PressMarquee from "@/components/PressMarquee";

// Viewport container animation presets
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
} as const;

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-50 overflow-hidden">
      {/* Dynamic Background Accents */}
      <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-brand-purple/5 blur-3xl pointer-events-none" />
      <div className="absolute top-60 right-10 w-[500px] h-[500px] rounded-full bg-brand-orange/5 blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-20 left-1/3 w-80 h-80 rounded-full bg-brand-yellow/5 blur-3xl pointer-events-none" />

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8"
          >
            {/* Hero Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-purple/10 bg-brand-purple/5 text-brand-purple text-xs font-bold mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>India&apos;s Leading Student-Led Social Movement</span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6"
              >
                Giving Wings to{" "}
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-orange to-brand-yellow bg-[length:300%_300%] animate-[gradient_6s_ease_infinite]">
                  Underprivileged Lives
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
              >
                NayePankh Foundation is dedicated to driving positive societal change. Run by passionate youth and student leaders, we work on the ground to provide food, health care, and modern education.
              </motion.p>

              {/* Action Buttons */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                  <Link
                    href="/join"
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-brand-purple to-brand-purple-light text-white font-extrabold py-4 px-8 rounded-2xl shadow-lg shadow-brand-purple/20 text-sm tracking-wide"
                  >
                    <span>Join as an Intern</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                  <Link
                    href="/donate"
                    className="flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-extrabold py-4 px-8 rounded-2xl shadow-sm text-sm tracking-wide"
                  >
                    <Heart className="w-4 h-4 fill-brand-orange text-brand-orange" />
                    <span>Support Our Work</span>
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Hero Right Decorative Panel */}
            <div className="flex-1 w-full max-w-md lg:max-w-none">
              <motion.div
                variants={itemVariants}
                className="relative rounded-3xl border border-slate-200/50 bg-white/70 p-6 sm:p-8 shadow-xl backdrop-blur-sm overflow-hidden"
              >
                {/* Decorative gradients */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-tr from-brand-yellow to-brand-orange opacity-15 rounded-bl-full" />
                
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2 border-b border-slate-100 pb-3">
                  <ShieldCheck className="w-5 h-5 text-brand-purple" />
                  <span>Our Commitment to You</span>
                </h3>

                <div className="flex flex-col gap-6">
                  {[
                    {
                      icon: BookOpen,
                      title: "Quality Education Initiatives",
                      desc: "Setting up learning libraries and providing mentorship to children in remote areas.",
                      color: "text-brand-purple bg-brand-purple/10",
                    },
                    {
                      icon: Smile,
                      title: "Food & Basic Dignity Care",
                      desc: "Distributing nutritious meals and sanitation kits to families facing poverty.",
                      color: "text-brand-orange bg-brand-orange/10",
                    },
                    {
                      icon: Globe,
                      title: "Youth Mobilization Network",
                      desc: "Empowering 1,500+ active student interns across 20+ cities in social leadership.",
                      color: "text-brand-yellow-light bg-brand-yellow/10",
                    },
                  ].map((perk, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className={`p-2.5 rounded-xl ${perk.color} shrink-0`}>
                        <perk.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-slate-800">{perk.title}</h4>
                        <p className="text-xs text-slate-500 leading-relaxed mt-1">{perk.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Live Impact Dashboard */}
      <section className="py-16 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Real-Time Impact Dashboard
            </h2>
            <p className="text-slate-500 mt-2">
              Driven by youth leadership, we deliver transparency and direct action where it matters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                value: 50000,
                suffix: "+",
                label: "Lives Impacted",
                desc: "Beneficiary count across food, medical and literacy camps.",
                glow: "glow-purple",
                accent: "border-brand-purple/20 border-t-brand-purple border-t-2",
                numberColor: "text-brand-purple",
              },
              {
                value: 20,
                suffix: "+",
                label: "Cities Covered",
                desc: "Active volunteer circles and hubs running local operations.",
                glow: "glow-orange",
                accent: "border-brand-orange/20 border-t-brand-orange border-t-2",
                numberColor: "text-brand-orange",
              },
              {
                value: 1500,
                suffix: "+",
                label: "Active Student Interns",
                desc: "Empowered youths spearheading remote and field campaigns.",
                glow: "glow-yellow",
                accent: "border-brand-yellow/20 border-t-brand-yellow border-t-2",
                numberColor: "text-brand-yellow",
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1 }}
                className={`p-8 bg-slate-50/50 hover:bg-white rounded-2xl border border-slate-200/50 shadow-sm ${stat.accent} ${stat.glow} flex flex-col justify-between min-h-[220px]`}
              >
                <div>
                  <h3 className={`text-4xl sm:text-5xl font-black ${stat.numberColor} tracking-tight`}>
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </h3>
                  <h4 className="text-slate-900 font-extrabold text-lg mt-3">{stat.label}</h4>
                </div>
                <p className="text-sm text-slate-500 mt-2 leading-relaxed">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Marquee Section */}
      <PressMarquee />

      {/* Key Focus Campaigns */}
      <section className="py-20 bg-slate-50/50 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">What We Do</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
              Transforming Youth Potential into Social Power
            </h2>
            <p className="text-slate-500 mt-3 leading-relaxed">
              We guide students and young volunteers to organize community-centric solutions to age-old social problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Digital & Literacy Camps",
                desc: "Bridging the educational divide by introducing digital modules, distribution of school kits, and mentoring programs in municipal schools.",
                metric: "12,000+ Kids Educated",
              },
              {
                title: "Zero-Hunger Drives",
                desc: "Daily distribution of balanced dry rations and cooked food plates in homeless clusters. Tackling malnutrition directly at the ground level.",
                metric: "100k+ Meals Served",
              },
              {
                title: "Youth Internship Cohorts",
                desc: "Training student interns in leadership, operations, and public advocacy. Generating certificates and letters of recommendations for stellar performances.",
                metric: "8,000+ Alumni Interns",
              },
            ].map((campaign, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl border border-slate-200/50 p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-purple/5 text-brand-purple font-extrabold flex items-center justify-center text-lg mb-6 group-hover:bg-brand-purple group-hover:text-white transition-colors duration-300">
                    {`0${idx + 1}`}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{campaign.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-6">{campaign.desc}</p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-brand-orange tracking-wide uppercase">
                    {campaign.metric}
                  </span>
                  <span className="text-slate-300 group-hover:text-brand-purple transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 bg-white relative z-10">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden bg-slate-950 p-10 md:p-16 text-center text-white border border-slate-800"
          >
            {/* Glowing elements */}
            <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-brand-purple/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-brand-orange/20 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Be the Wind Beneath Their Wings
              </h2>
              <p className="text-slate-400 mt-4 text-sm sm:text-base leading-relaxed">
                Whether you commit your time as a remote social intern or contribute a tax-deductible donation, you help us scale student action across India.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                <Link
                  href="/join"
                  className="w-full sm:w-auto bg-gradient-to-r from-brand-purple to-brand-purple-light hover:from-brand-purple-light hover:to-brand-purple text-white font-extrabold py-4 px-8 rounded-2xl shadow-lg shadow-brand-purple/20 text-sm tracking-wide"
                >
                  Join the Program
                </Link>
                <Link
                  href="/donate"
                  className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-extrabold py-4 px-8 rounded-2xl text-sm tracking-wide flex items-center justify-center gap-2"
                >
                  <Heart className="w-4 h-4 fill-brand-orange text-brand-orange" />
                  <span>Donate Section 80G</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
