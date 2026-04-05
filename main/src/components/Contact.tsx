import { MoveUpRight } from "lucide-react";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.12-.34 6.4-1.51 6.4-6.9a5.4 5.4 0 0 0-1.5-3.89 5.07 5.07 0 0 0-.14-3.88s-1.22-.39-4 1.5a13.9 13.9 0 0 0-7 0c-2.78-1.89-4-1.5-4-1.5a5.07 5.07 0 0 0-.14 3.88 5.4 5.4 0 0 0-1.5 3.89c0 5.38 3.27 6.56 6.39 6.9A4.8 4.8 0 0 0 4 19v3"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Contact() {
  return (
    <section className="relative w-full min-h-[70vh] bg-neutral-950 text-white flex flex-col justify-between px-6 md:px-16 pt-24 pb-8 z-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col justify-center">
        <h2 className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 text-neutral-200">
          Let&apos;s create <br /> something <span className="text-neutral-500 italic font-serif">iconic.</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Email block */}
          <div className="group cursor-pointer">
            <h3 className="text-sm tracking-widest uppercase text-neutral-500 mb-4 font-medium">Quick connect</h3>
            <a href="mailto:singh.rajat70880@gmail.com " className="inline-flex items-center gap-3 text-2xl md:text-4xl font-light text-neutral-300 group-hover:text-white transition-colors">
              singh.rajat70880@gmail.com 
              <MoveUpRight className="w-8 h-8 opacity-0 -translate-y-2 -translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-500" />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex flex-col md:items-end md:justify-center">
            <h3 className="text-sm tracking-widest uppercase text-neutral-500 mb-6 font-medium md:mb-4">Socials</h3>
            <div className="flex gap-4">
              <SocialLink href="https://www.instagram.com/that_0ne_techie/" icon={<InstagramIcon />} label="Instagram" />
              <SocialLink href="https://www.linkedin.com/in/rajat-singh-3263b9382/" icon={<LinkedinIcon />} label="LinkedIn" />
              <SocialLink href="https://github.com/singhrajat1111" icon={<GithubIcon />} label="GitHub" />
            </div>
          </div>  
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center mt-24 pt-8 border-t border-white/10 text-neutral-600 text-sm font-medium tracking-wide">
        <p>© {new Date().getFullYear()} Rajat Singh. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Bridging Design & Engineering</p>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer" 
      className="w-14 h-14 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-neutral-400 hover:bg-white hover:text-black hover:border-white transition-all duration-500 group relative overflow-hidden"
      aria-label={label}
    >
      <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
      <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
    </a>
  );
}
