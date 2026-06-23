"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, CheckCircle, Mail, MapPin, Send, User, BookOpen } from "lucide-react";
import MilestoneTable from "@/components/MilestoneTable";

export default function Join() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    college: "",
    phone: "",
    role: "social-intern",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Mock API delay
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="relative min-h-screen bg-slate-50 pb-20 pt-10">
      {/* Background shapes */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-brand-purple/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-brand-orange/5 blur-3xl pointer-events-none" />

      {/* Hero Header */}
      <section className="py-12 md:py-16 relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-purple/15 bg-brand-purple/5 text-brand-purple text-xs font-bold mb-4"
          >
            <Award className="w-3.5 h-3.5" />
            <span>1-Month Remote Onboarding Programs</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Gamified Social Internships Hub
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed"
          >
            Complete tasks, earn experience points, and unlock high-value certificates, LinkedIn endorsements, and up to 20% stipend shares.
          </motion.p>
        </div>
      </section>

      {/* Onboarding Stages */}
      <section className="py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Apply Online",
                desc: "Fill the quick form below. Choose your social cohort alignment.",
              },
              {
                step: "02",
                title: "Virtual Induction",
                desc: "Attend a 1-hour induction call to learn digital activism metrics.",
              },
              {
                step: "03",
                title: "Complete Tasks",
                desc: "Work on campaigns (literacy drives, care packages, crowd awareness).",
              },
              {
                step: "04",
                title: "Unlock Rewards",
                desc: "Reach milestones to obtain certificates, stipends, and LORs.",
              },
            ].map((stage, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-slate-200/50 p-6 shadow-sm flex flex-col justify-between"
              >
                <div className="text-3xl font-black text-slate-200 group-hover:text-brand-orange transition-colors">
                  {stage.step}
                </div>
                <div className="mt-4">
                  <h3 className="font-bold text-slate-900 text-base">{stage.title}</h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">{stage.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks Matrix Grid */}
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Interactive Perks & Milestone Matrix
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              Hover over tiers below to see how stipend shares, letters of recommendation, and digital credentials scale.
            </p>
          </div>

          <MilestoneTable />
        </div>
      </section>

      {/* Application Intake Form */}
      <section className="py-10 relative z-10">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl border border-slate-200/60 p-8 sm:p-10 shadow-sm"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-extrabold text-slate-900">Start Your Internship</h3>
              <p className="text-xs text-slate-500 mt-2">
                No prior experience required. We train you in digital leadership and social action.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="application-form"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Name Input */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
                      <input
                        type="text"
                        required
                        placeholder="Ayaan Shaikh"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-sm focus:bg-white focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
                        <input
                          type="email"
                          required
                          placeholder="ayaan@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-sm focus:bg-white focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        WhatsApp Number
                      </label>
                      <div className="relative">
                        <MapPin className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
                        <input
                          type="tel"
                          required
                          placeholder="+91 9876543210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-sm focus:bg-white focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* College / Institution */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      College / School Name
                    </label>
                    <div className="relative">
                      <BookOpen className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
                      <input
                        type="text"
                        required
                        placeholder="Amity University"
                        value={formData.college}
                        onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-sm focus:bg-white focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Cohort choice */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Select Cohort
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 px-4 text-sm focus:bg-white focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple outline-none transition-all cursor-pointer font-semibold text-slate-700"
                    >
                      <option value="social-intern">Social Advocacy & Awareness Intern</option>
                      <option value="education-mentor">Underprivileged Education Mentor</option>
                      <option value="outreach-lead">Community Relations & Outreach Lead</option>
                    </select>
                  </div>

                  {/* Submit button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={loading}
                    className="mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-brand-purple to-brand-purple-light text-white font-extrabold py-4 px-6 rounded-2xl w-full text-center shadow-lg shadow-brand-purple/20 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Application</span>
                      </>
                    )}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-message"
                  className="text-center py-10 flex flex-col items-center gap-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  <CheckCircle className="w-16 h-16 text-emerald-500" />
                  <h4 className="text-xl font-bold text-slate-900">Application Submitted!</h4>
                  <p className="text-sm text-slate-500 max-w-sm">
                    Thank you, <span className="font-bold text-brand-purple">{formData.name}</span>. An onboarding specialist will reach out to you on WhatsApp at <span className="font-bold text-slate-700">{formData.phone}</span> within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", college: "", phone: "", role: "social-intern" });
                    }}
                    className="text-xs text-brand-purple hover:text-brand-purple-light underline font-bold mt-4"
                  >
                    Submit another application
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
