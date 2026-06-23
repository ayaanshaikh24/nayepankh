import React from "react";

const PUBLICATIONS = [
  { name: "Times of India", subtitle: "TOI" },
  { name: "Hindustan Times", subtitle: "HT" },
  { name: "The Indian Express", subtitle: "Express" },
  { name: "Dainik Jagran", subtitle: "Jagran" },
  { name: "Dainik Bhaskar", subtitle: "Bhaskar" },
  { name: "The Economic Times", subtitle: "ET" },
];

export default function PressMarquee() {
  // Double the list to create a seamless infinite loop
  const listItems = [...PUBLICATIONS, ...PUBLICATIONS, ...PUBLICATIONS];

  return (
    <div className="w-full overflow-hidden bg-white py-10 border-y border-slate-200/60 relative">
      {/* Fade overlays on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-6">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400">
          Featured in National Media & Press
        </p>
      </div>

      <div className="flex w-full overflow-hidden">
        <div className="flex gap-12 items-center animate-marquee whitespace-nowrap">
          {listItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 px-6 py-2.5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-200 transition-all duration-300 shadow-sm shadow-slate-100/50 cursor-default shrink-0"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-200 flex items-center justify-center font-black text-[10px] text-slate-600 tracking-tighter uppercase border border-slate-300">
                {item.subtitle}
              </div>
              <span className="font-extrabold text-sm tracking-tight text-slate-700 font-serif italic">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
