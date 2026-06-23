import React from "react";
import Link from "next/link";
import { Heart, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8 border-t border-slate-800 relative overflow-hidden">
      {/* Decorative accent colors in the footer background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-brand-purple/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-brand-orange/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 pb-12 border-b border-slate-800">
          {/* Column 1: Info */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg overflow-hidden border border-slate-700 bg-white">
                <img
                  src="/logo.jpg"
                  alt="NayePankh Foundation Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-bold text-white tracking-tight">NayePankh Foundation</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mt-2">
              India&apos;s leading student-led social movement. Empowering lives through education, training, and continuous social campaigns.
            </p>
            <div className="flex items-center gap-3 mt-3">
              {[
                {
                  name: "Instagram",
                  href: "https://instagram.com",
                  svg: (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  ),
                },
                {
                  name: "Facebook",
                  href: "https://facebook.com",
                  svg: (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  ),
                },
                {
                  name: "Twitter",
                  href: "https://twitter.com",
                  svg: (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  ),
                },
                {
                  name: "LinkedIn",
                  href: "https://linkedin.com",
                  svg: (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  ),
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-brand-orange hover:bg-slate-700 transition-colors shadow-sm"
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home Dashboard</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About & Transparency</Link>
              </li>
              <li>
                <Link href="/join" className="hover:text-white transition-colors">Internships Hub</Link>
              </li>
              <li>
                <Link href="/donate" className="hover:text-white transition-colors">Donation Portal</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Info */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Contact Details</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-purple-light shrink-0 mt-0.5" />
                <span>Noida, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-purple-light shrink-0" />
                <a href="mailto:info@nayepankh.org" className="hover:text-white transition-colors">
                  info@nayepankh.org
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Heart className="w-4 h-4 text-brand-orange shrink-0 fill-brand-orange" />
                <span>Society Reg: KAP/04397/2021-2022</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter or Quote & Signature Badge */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2">Empowering India</h4>
            <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-800 text-xs italic leading-relaxed text-slate-400">
              &quot;We cannot build our future for the youth, but we can build our youth for the future.&quot;
            </div>
            
            {/* Developer Signature Badge */}
            <div className="mt-2 self-start">
              <div className="relative group overflow-hidden rounded-full p-[1px] bg-gradient-to-r from-brand-purple via-brand-orange to-brand-yellow">
                <div className="bg-slate-950 px-4 py-1.5 rounded-full flex items-center gap-2 text-xs font-bold tracking-wide transition-all group-hover:bg-transparent">
                  <span className="text-slate-300 group-hover:text-slate-950">Designed & Developed by</span>
                  <span className="bg-gradient-to-r from-brand-orange to-brand-yellow bg-clip-text text-transparent group-hover:text-slate-950 font-extrabold">Ayaan Shaikh</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} NayePankh Foundation. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-slate-300 transition-colors">80G & 12A Status</Link>
            <Link href="/join" className="hover:text-slate-300 transition-colors">Internship Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
