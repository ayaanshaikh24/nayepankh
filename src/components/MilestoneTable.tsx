"use client";

import React, { useState } from "react";
import { Check, Star, Award, Zap } from "lucide-react";

interface Tier {
  id: string;
  name: string;
  target: string;
  stipend: string;
  certificate: string;
  lor: boolean;
  linkedin: boolean;
  badgeColor: string;
  glowColor: string;
}

const TIERS: Tier[] = [
  {
    id: "bronze",
    name: "Bronze Level",
    target: "10-25 Social Tasks Completed",
    stipend: "Certificate Only",
    certificate: "Standard Certificate",
    lor: false,
    linkedin: false,
    badgeColor: "bg-amber-700/10 text-amber-700 border-amber-700/20",
    glowColor: "group-hover:border-amber-700/30",
  },
  {
    id: "silver",
    name: "Silver Tier",
    target: "26-50 Social Tasks Completed",
    stipend: "10% Stipend Share",
    certificate: "Silver Excellence Certificate",
    lor: true,
    linkedin: false,
    badgeColor: "bg-slate-400/15 text-slate-700 border-slate-400/35",
    glowColor: "group-hover:border-slate-400/50",
  },
  {
    id: "gold",
    name: "Gold Champion",
    target: "51-100 Social Tasks Completed",
    stipend: "15% Stipend Share",
    certificate: "Gold Honors Certificate",
    lor: true,
    linkedin: true,
    badgeColor: "bg-brand-yellow/15 text-brand-yellow-light border-brand-yellow/30",
    glowColor: "group-hover:border-brand-yellow/50",
  },
  {
    id: "diamond",
    name: "Diamond Elite",
    target: "100+ Tasks / Team Lead role",
    stipend: "20% Stipend Share",
    certificate: "Elite Leadership Certificate",
    lor: true,
    linkedin: true,
    badgeColor: "bg-brand-purple/15 text-brand-purple-light border-brand-purple/30",
    glowColor: "group-hover:border-brand-purple/50",
  },
];

export default function MilestoneTable() {
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 font-bold">
              <th className="p-4 sm:p-5 font-bold tracking-wide">Internship Milestone</th>
              <th className="p-4 sm:p-5 font-bold tracking-wide">Milestone Criteria</th>
              <th className="p-4 sm:p-5 font-bold tracking-wide text-brand-orange">Stipends</th>
              <th className="p-4 sm:p-5 font-bold tracking-wide">Certificate Type</th>
              <th className="p-4 sm:p-5 font-bold tracking-wide text-center">LOR Issued</th>
              <th className="p-4 sm:p-5 font-bold tracking-wide text-center">LinkedIn Endorsement</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {TIERS.map((tier) => {
              const isHovered = hoveredRow === tier.id;
              return (
                <tr
                  key={tier.id}
                  onMouseEnter={() => setHoveredRow(tier.id)}
                  onMouseLeave={() => setHoveredRow(null)}
                  className={`group transition-all duration-200 cursor-default ${
                    isHovered
                      ? "bg-slate-50 shadow-inner"
                      : "hover:bg-slate-50/40"
                  }`}
                >
                  {/* Milestone Name */}
                  <td className="p-4 sm:p-5">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-2 h-2 rounded-full transition-transform duration-200 ${
                          tier.id === "diamond"
                            ? "bg-brand-purple"
                            : tier.id === "gold"
                            ? "bg-brand-yellow"
                            : tier.id === "silver"
                            ? "bg-slate-400"
                            : "bg-amber-700"
                        } ${isHovered ? "scale-125" : ""}`}
                      />
                      <span className="font-extrabold text-slate-900">{tier.name}</span>
                    </div>
                  </td>

                  {/* Target/Criteria */}
                  <td className="p-4 sm:p-5 text-slate-500 font-medium">{tier.target}</td>

                  {/* Stipends */}
                  <td className="p-4 sm:p-5">
                    <span
                      className={`font-bold ${
                        tier.stipend.includes("20%")
                          ? "text-brand-purple font-extrabold"
                          : tier.stipend.includes("Share")
                          ? "text-brand-orange"
                          : "text-slate-500"
                      }`}
                    >
                      {tier.stipend}
                    </span>
                  </td>

                  {/* Certificate type */}
                  <td className="p-4 sm:p-5">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-bold ${tier.badgeColor}`}
                    >
                      {tier.id === "diamond" ? (
                        <Zap className="w-3.5 h-3.5" />
                      ) : (
                        <Award className="w-3.5 h-3.5" />
                      )}
                      <span>{tier.certificate}</span>
                    </span>
                  </td>

                  {/* LOR */}
                  <td className="p-4 sm:p-5 text-center">
                    <div className="inline-flex items-center justify-center">
                      {tier.lor ? (
                        <Check className="w-5 h-5 text-emerald-500 stroke-[3]" />
                      ) : (
                        <span className="text-slate-300 font-bold text-xs">-</span>
                      )}
                    </div>
                  </td>

                  {/* LinkedIn endorsements */}
                  <td className="p-4 sm:p-5 text-center">
                    <div className="inline-flex items-center justify-center">
                      {tier.linkedin ? (
                        <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                      ) : (
                        <span className="text-slate-300 font-bold text-xs">-</span>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
