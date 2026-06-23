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
      <section className="py-12 md:py-16 relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
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
            className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Empowering Through Trust
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed"
          >
            We believe social change is built on strict compliance and public integrity. NayePankh operates as a fully registered, audited, and tax-exempt NGO driven by youths.
          </motion.p>
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
