"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, FileText, Info } from "lucide-react";

interface TrustCardProps {
  title: string;
  badgeCode: string;
  authority: string;
  benefit: string;
  backDetails: {
    label: string;
    value: string;
  }[];
}

export default function TrustCard({
  title,
  badgeCode,
  authority,
  benefit,
  backDetails,
}: TrustCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="w-full h-80 cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative transform-style-3d"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 20 }}
      >
        {/* Front Face */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-3xl border border-slate-200/60 p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div>
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-brand-purple/10 text-brand-purple flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 bg-slate-100 px-3 py-1.5 rounded-full flex items-center gap-1">
                <Info className="w-3 h-3 text-brand-purple-light" />
                <span>Verified</span>
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mt-6">{title}</h3>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Approved by the {authority}. Click to flip and review statutory details and audit records.
            </p>
          </div>
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="font-semibold text-slate-400">Code: {badgeCode}</span>
            <span className="font-extrabold text-brand-orange uppercase tracking-wide">{benefit}</span>
          </div>
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-slate-900 text-white rounded-3xl border border-slate-800 p-8 shadow-md flex flex-col justify-between"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div>
            <h3 className="text-base font-bold text-white mb-5 border-b border-slate-800 pb-2 flex items-center gap-2">
              <FileText className="w-4 h-4 text-brand-yellow" />
              <span>Trust Details & Compliance</span>
            </h3>
            <div className="flex flex-col gap-3">
              {backDetails.map((detail, idx) => (
                <div key={idx} className="flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-semibold">{detail.label}</span>
                  <span className="text-white font-bold text-right ml-2">{detail.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="text-[10px] text-brand-yellow font-extrabold uppercase tracking-widest text-center bg-slate-800/50 py-2 rounded-xl">
            Click to view certificate badge
          </div>
        </div>
      </motion.div>
    </div>
  );
}
