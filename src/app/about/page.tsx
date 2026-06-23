"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Compass, Scale, Users, Calendar } from "lucide-react";
import TrustCard from "@/components/TrustCard";

const TIMELINE_EVENTS = [
  {
    year: "2021",
    title: "The Inception",
    desc: "NayePankh Foundation was founded with the vision to channel youth power into social work. Initiated first municipal primary school tutoring program in Noida.",
  },
  {
    year: "2022",
    title: "Official Society Incorporation",
    desc: "Obtained official Society Registration under UP government (KAP/04397/2021-2022). Scaled operations to three neighboring cities in northern India.",
  },
  {
    year: "2023",
    title: "12A & 80G Tax Exemption Approval",
    desc: "Granted Section 12A and 80G tax-exemption approvals from the Income Tax Dept. Launched remote social internship program to train students nationwide.",
  },
  {
    year: "2024",
    title: "Reaching 20+ Cities",
    desc: "Successfully crossed 1,500 active student interns in our remote cohorts, organizing digital literacy camps and zero-hunger drives locally.",
  },
  {
    year: "2026",
    title: "Expanding Horizon",
    desc: "Impacting 50,000+ underprivileged beneficiaries. Setting up model learning cells inside rural public schools with visual and modern study materials.",
  },
];

export default function About() {
  return (
    <div className="relative min-h-screen bg-slate-50 pb-20 pt-10">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-brand-purple/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-brand-orange/5 blur-3xl pointer-events-none" />

      {/* Hero Intro */}
      <section className="relative z-10 pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Background Image Integration */}
        <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full z-0 pointer-events-none select-none hidden lg:block">
          <img
            src="/second_image.avif"
            alt="NayePankh Foundation volunteers and children together in community setting"
            className="w-full h-full object-cover object-center"
          />
          {/* Smooth linear gradient mask blending into the light background */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            {/* Hero Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-orange/15 bg-brand-orange/5 text-brand-orange text-xs font-bold mb-4"
              >
                <Scale className="w-3.5 h-3.5" />
                <span>Transparency & Trust Compliance</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4"
              >
                Empowering Through Trust
              </motion.h1>

              {/* Mobile Hero Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="w-full lg:hidden my-6 rounded-2xl overflow-hidden aspect-[4/3] shadow-md border border-slate-200/50"
              >
                <img
                  src="/second_image.avif"
                  alt="NayePankh Foundation volunteers and children together in community setting"
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
              >
                We believe social change is built on strict compliance and public integrity. NayePankh operates as a fully registered, audited, and tax-exempt NGO driven by youths.
              </motion.p>
            </div>

            {/* Hero Right Decorative Panel */}
            <div className="flex-1 w-full max-w-md lg:max-w-none">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="relative rounded-3xl border border-slate-200/50 bg-white/70 p-6 sm:p-8 shadow-xl backdrop-blur-sm overflow-hidden"
              >
                {/* Decorative gradients */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-tr from-brand-yellow to-brand-orange opacity-15 rounded-bl-full" />
                
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2 border-b border-slate-100 pb-3">
                  <Award className="w-5 h-5 text-brand-purple" />
                  <span>Statutory Registrations</span>
                </h3>

                <div className="flex flex-col gap-6">
                  {[
                    {
                      label: "Society Registration",
                      value: "Reg No: KAP/04397/2021-2022",
                      desc: "Registered under the Societies Registration Act, 1860 by Govt of UP.",
                    },
                    {
                      label: "12A & 80G Compliant",
                      value: "Tax-Exempt Donations",
                      desc: "Donations are eligible for 50% tax exemption under Section 80G of the IT Act.",
                    },
                  ].map((stat, i) => (
                    <div key={i} className="flex gap-4 items-start text-left">
                      <div className="p-2 bg-brand-orange/10 text-brand-orange rounded-xl shrink-0 mt-0.5 font-bold text-xs w-6 h-6 flex items-center justify-center">
                        ✓
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-slate-800">{stat.label}</h4>
                        <div className="text-xs font-bold text-brand-purple mt-0.5">{stat.value}</div>
                        <p className="text-xs text-slate-500 leading-relaxed mt-1">{stat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Compliance Section */}
      <section className="py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Trust & Statutory Verifications
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              Click on any card to flip it and view official registration codes, validation dates, and direct tax deduction benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TrustCard
              title="Society Registration"
              badgeCode="KAP/04397/2021-2022"
              authority="Registrar of Societies, Govt of UP"
              benefit="Registered NGO"
              backDetails={[
                { label: "Registration No.", value: "KAP/04397/2021-2022" },
                { label: "Act under which reg.", value: "Societies Registration Act, 1860" },
                { label: "Date of Registration", value: "September 14, 2021" },
                { label: "Operational State", value: "Uttar Pradesh & PAN India" },
                { label: "Annual Audits Status", value: "Compliant (FY 2024-25)" },
              ]}
            />

            <TrustCard
              title="12A Exemption Status"
              badgeCode="CIT(EXEMP)/12A/2022-23"
              authority="Income Tax Department, Govt of India"
              benefit="Tax Exempt Entity"
              backDetails={[
                { label: "Order Unique ID", value: "AABTN4397KE20221" },
                { label: "Section under Act", value: "Section 12A Exemption" },
                { label: "Approved Authority", value: "Commissioner of Income Tax" },
                { label: "Applicability", value: "Tax exemptions on organizational receipts" },
                { label: "Type", value: "Non-Profit Public Charity" },
              ]}
            />

            <TrustCard
              title="80G Tax Exemption"
              badgeCode="CIT(EXEMP)/80G/2022-23"
              authority="Income Tax Department, Govt of India"
              benefit="50% Donor Tax Deduction"
              backDetails={[
                { label: "Order Unique ID", value: "AABTN4397KF20222" },
                { label: "Section under Act", value: "Section 80G Exemption" },
                { label: "Tax Benefit", value: "50% deduction of donation amount" },
                { label: "Donor Eligibility", value: "Indian Citizens / PAN Holders" },
                { label: "Effective Period", value: "Lifetime Exemption (unless revoked)" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 relative z-10 bg-white border-y border-slate-200/50 mt-12">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-purple">Our Journey</span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
              Timeline of Grassroots Growth
            </h2>
            <p className="text-slate-500 mt-2">
              Tracing NayePankh&apos;s journey from a small municipal project to a national youth-driven collective.
            </p>
          </div>

          <div className="relative border-l border-slate-200 ml-4 md:ml-0 md:grid md:grid-cols-1 md:gap-0 max-w-3xl mx-auto">
            {TIMELINE_EVENTS.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative pl-8 md:pl-0 md:grid md:grid-cols-10 md:gap-8 pb-12 last:pb-0"
              >
                {/* Visual marker dot */}
                <div className="absolute -left-1.5 md:left-1/2 md:-ml-1.5 top-1.5 w-3.5 h-3.5 rounded-full bg-brand-orange border-2 border-white shadow-sm z-10" />

                {/* Left (Year) - Desktop Only */}
                <div className="hidden md:flex md:col-span-4 md:justify-end md:text-right pt-0.5">
                  <div className="flex items-center gap-2 font-black text-xl text-brand-purple">
                    <Calendar className="w-5 h-5 text-brand-purple-light" />
                    <span>{event.year}</span>
                  </div>
                </div>

                {/* Right (Content) */}
                <div className="md:col-span-6 md:pl-4">
                  {/* Mobile Year Badge */}
                  <div className="md:hidden inline-flex items-center gap-1 bg-brand-purple/10 text-brand-purple text-xs font-extrabold px-2.5 py-1 rounded-full mb-2">
                    <span>{event.year}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 leading-tight">
                    {event.title}
                  </h3>
                  <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                    {event.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              The Principles That Guide Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Youth Leadership",
                desc: "We trust young minds to lead. Students don't just volunteer; they design projects, manage campaigns, and lead local volunteer wings.",
              },
              {
                icon: Compass,
                title: "Direct Implementation",
                desc: "No middlemen or complex paperwork overhead. Our teams deliver relief materials, set up schools, and directly audit program outcomes.",
              },
              {
                icon: Award,
                title: "Institutional Ethics",
                desc: "Adhering to strict compliance and taxation audits. We publish results and financial summaries to maintain absolute transparency.",
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-slate-200/50 p-8 shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
