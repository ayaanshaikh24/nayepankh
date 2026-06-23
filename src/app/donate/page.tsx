"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ShieldCheck, Mail, User, CreditCard, ChevronRight, FileText } from "lucide-react";

// Framer Motion Checkmark animation settings
const circleVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
} as const;

const checkVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { delay: 0.4, duration: 0.4, ease: "easeOut" },
  },
} as const;

export default function Donate() {
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState<number>(1000);
  const [customVal, setCustomVal] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pan: "",
  });
  const [loading, setLoading] = useState(false);
  const [txnId, setTxnId] = useState("");

  const handleAmountChip = (val: number) => {
    setAmount(val);
    setCustomVal("");
  };

  const handleCustomInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCustomVal(val);
    const num = parseFloat(val);
    if (!isNaN(num) && num > 0) {
      setAmount(num);
    } else {
      setAmount(0);
    }
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      if (amount <= 0) return;
      setStep(2);
    } else if (step === 2) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setTxnId(`TXN-NP-${Math.floor(100000 + Math.random() * 900000)}`);
        setStep(3);
      }, 1500);
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-50 pb-20 pt-10">
      {/* Background shapes */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-brand-purple/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-brand-orange/5 blur-3xl pointer-events-none" />

      {/* Hero Header */}
      <section className="py-12 md:py-16 relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-orange/15 bg-brand-orange/5 text-brand-orange text-xs font-bold mb-4"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Tax-Deductible Under Section 80G</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Empower With a Contribution
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed max-w-xl mx-auto"
          >
            Your contributions directly fund classrooms, libraries, and food camps. Claim 50% tax deductions on all transfers.
          </motion.p>
        </div>
      </section>

      {/* Donation Wizard Card */}
      <section className="py-6 relative z-10">
        <div className="max-w-xl mx-auto px-6">
          <div className="bg-white rounded-3xl border border-slate-200/60 p-8 sm:p-10 shadow-sm relative">
            {/* Step Indicators */}
            <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-5 text-xs font-bold text-slate-400">
              <span className={step >= 1 ? "text-brand-purple" : ""}>01. SELECT AMOUNT</span>
              <ChevronRight className="w-4 h-4 text-slate-300" />
              <span className={step >= 2 ? "text-brand-purple" : ""}>02. DONOR DETAILS</span>
              <ChevronRight className="w-4 h-4 text-slate-300" />
              <span className={step >= 3 ? "text-brand-purple" : ""}>03. SUCCESS</span>
            </div>

            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step-amount"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <form onSubmit={handleNextStep} className="flex flex-col gap-6">
                    <h3 className="text-lg font-bold text-slate-900">Select Donation Amount</h3>
                    
                    {/* Amount Chips Grid */}
                    <div className="grid grid-cols-3 gap-3">
                      {[500, 1000, 2000].map((val) => (
                        <button
                          key={val}
                          type="button"
                          onClick={() => handleAmountChip(val)}
                          className={`py-3.5 px-4 rounded-xl border text-sm font-extrabold transition-all cursor-pointer ${
                            amount === val && customVal === ""
                              ? "bg-brand-purple border-brand-purple text-white shadow-md shadow-brand-purple/10"
                              : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                          }`}
                        >
                          ₹{val.toLocaleString()}
                        </button>
                      ))}
                    </div>

                    {/* Custom Input */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Or enter custom amount
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-3.5 text-slate-400 font-extrabold text-sm">
                          ₹
                        </span>
                        <input
                          type="number"
                          min="1"
                          placeholder="Enter custom amount"
                          value={customVal}
                          onChange={handleCustomInput}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-8 pr-4 text-sm focus:bg-white focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple outline-none transition-all font-bold text-slate-800"
                        />
                      </div>
                    </div>

                    {/* Persistent 80G Tax Benefit Info Box */}
                    {amount > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-2xl bg-brand-purple/5 border border-brand-purple/10 flex flex-col gap-1.5"
                      >
                        <div className="flex items-center gap-2 text-xs font-bold text-brand-purple uppercase tracking-wider">
                          <Heart className="w-3.5 h-3.5 fill-brand-purple" />
                          <span>80G Tax Exemption Applied</span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Your selected contribution of <span className="font-bold text-slate-900">₹{amount.toLocaleString()}</span> qualifies for a 50% tax deduction. You save <span className="font-bold text-brand-purple">₹{(amount * 0.5).toLocaleString()}</span> on income tax. Net cost to you: <span className="font-bold text-slate-900">₹{(amount * 0.5).toLocaleString()}</span>.
                        </p>
                      </motion.div>
                    )}

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={amount <= 0}
                      className="flex items-center justify-center gap-2 bg-gradient-to-r from-brand-purple to-brand-purple-light text-white font-extrabold py-4 px-6 rounded-2xl w-full text-center shadow-lg shadow-brand-purple/20 cursor-pointer disabled:opacity-50 mt-4"
                    >
                      <span>Continue to Details</span>
                      <ChevronRight className="w-4 h-4" />
                    </motion.button>
                  </form>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step-details"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <form onSubmit={handleNextStep} className="flex flex-col gap-6">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">Donor Information</h3>
                      <p className="text-xs text-slate-500 mt-1">
                        Needed for generating your Section 80G tax exemption receipt.
                      </p>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Full Name (as on PAN)
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

                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
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
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        PAN Card Number
                      </label>
                      <div className="relative">
                        <CreditCard className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
                        <input
                          type="text"
                          required
                          placeholder="ABCDE1234F"
                          maxLength={10}
                          value={formData.pan}
                          onChange={(e) => setFormData({ ...formData, pan: e.target.value.toUpperCase() })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-sm focus:bg-white focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple outline-none transition-all uppercase font-semibold text-slate-700"
                        />
                      </div>
                    </div>

                    <div className="flex gap-4 mt-4">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-6 py-4 border border-slate-200 hover:border-slate-300 text-slate-600 rounded-2xl font-extrabold text-sm"
                      >
                        Back
                      </button>
                      
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={loading}
                        className="flex-grow flex items-center justify-center gap-2 bg-gradient-to-r from-brand-purple to-brand-purple-light text-white font-extrabold py-4 px-6 rounded-2xl text-center shadow-lg shadow-brand-purple/20 cursor-pointer disabled:opacity-50"
                      >
                        {loading ? (
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            <Heart className="w-4 h-4 fill-brand-yellow text-brand-yellow" />
                            <span>Complete Donation of ₹{amount.toLocaleString()}</span>
                          </>
                        )}
                      </motion.button>
                    </div>
                  </form>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 120 }}
                  className="flex flex-col items-center text-center py-6"
                >
                  {/* Visual Checkmark Animation */}
                  <div className="w-20 h-20 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center relative mb-6">
                    <svg className="w-10 h-10 text-emerald-500" viewBox="0 0 52 52" fill="none">
                      <motion.circle
                        cx="26"
                        cy="26"
                        r="25"
                        stroke="currentColor"
                        strokeWidth="4"
                        variants={circleVariants}
                        initial="hidden"
                        animate="visible"
                      />
                      <motion.path
                        d="M14 27l8 8 16-16"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        variants={checkVariants}
                        initial="hidden"
                        animate="visible"
                      />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900">Donation Successful!</h3>
                  <p className="text-sm text-slate-500 mt-2 max-w-sm">
                    Thank you so much, <span className="font-bold text-brand-purple">{formData.name}</span>! Your donation of <span className="font-bold text-slate-800">₹{amount.toLocaleString()}</span> has been received and processed.
                  </p>

                  <div className="w-full mt-8 p-5 bg-slate-50 rounded-2xl border border-slate-100 text-left flex flex-col gap-3 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-400 font-bold">Transaction ID</span>
                      <span className="text-slate-700 font-bold uppercase">{txnId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 font-bold">PAN Number</span>
                      <span className="text-slate-700 font-bold uppercase">{formData.pan}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 font-bold">80G Tax Exemption (50%)</span>
                      <span className="text-emerald-600 font-extrabold uppercase">Eligible</span>
                    </div>
                  </div>

                  {/* Mock print/receipt action */}
                  <button
                    onClick={() => window.print()}
                    className="mt-6 flex items-center justify-center gap-2 border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold py-3.5 px-6 rounded-2xl w-full text-xs shadow-sm"
                  >
                    <FileText className="w-4 h-4 text-brand-purple-light" />
                    <span>Download Exemption Receipt</span>
                  </button>

                  <button
                    onClick={() => {
                      setStep(1);
                      setAmount(1000);
                      setCustomVal("");
                      setFormData({ name: "", email: "", pan: "" });
                    }}
                    className="text-xs text-brand-purple hover:underline font-bold mt-5"
                  >
                    Make another donation
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
