"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function FindingMatch() {
  const router = useRouter();

  useEffect(() => {
    // Simulate finding a match and redirecting to chat
    const timer = setTimeout(() => {
      router.push("/chat");
    }, 4000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="bg-surface-container-lowest text-on-surface h-screen w-full overflow-hidden flex flex-col items-center justify-center relative">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 0.8; }
          100% { transform: scale(3.5); opacity: 0; }
        }
        .pulse-ring { animation: pulse-ring 3s cubic-bezier(0.215, 0.61, 0.355, 1) infinite; }
        .pulse-ring-delay-1 { animation-delay: 1s; }
        .pulse-ring-delay-2 { animation-delay: 2s; }
        
        @keyframes orb-float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-15px) scale(1.05); }
        }
        .orb-float { animation: orb-float 4s ease-in-out infinite; }
    
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .gradient-bg {
          background-size: 200% 200%;
          animation: gradient-shift 5s ease infinite;
        }
    
        @keyframes slow-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }
        .glass-shape { animation: slow-float 8s ease-in-out infinite; }
        .text-glow { text-shadow: 0 0 20px rgba(223, 183, 255, 0.3); }
      `}} />

      {/* Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-primary-container rounded-full mix-blend-screen filter blur-[150px] opacity-20 pointer-events-none transition-transform duration-1000 ease-out"></div>
      <div class="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] bg-secondary-container rounded-full mix-blend-screen filter blur-[150px] opacity-20 pointer-events-none transition-transform duration-1000 ease-out"></div>
      
      {/* Background Glassmorphism Shapes */}
      <div className="absolute top-[15%] left-[10%] w-64 h-64 bg-surface/30 backdrop-blur-3xl rounded-3xl border border-white/5 glass-shape opacity-50 pointer-events-none hidden md:block"></div>
      <div className="absolute bottom-[20%] right-[15%] w-48 h-48 bg-surface/30 backdrop-blur-3xl rounded-full border border-white/5 glass-shape opacity-50 pointer-events-none hidden md:block" style={{ animationDelay: "-4s" }}></div>
      <div className="absolute top-[30%] right-[10%] w-32 h-32 bg-surface/20 backdrop-blur-2xl rounded-2xl border border-white/5 glass-shape opacity-40 pointer-events-none hidden md:block" style={{ animationDelay: "-2s", transform: "rotate(15deg)" }}></div>
      
      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center w-full max-w-2xl mx-auto">
        
        {/* Animated Orb */}
        <div className="relative flex items-center justify-center w-64 h-64 mb-12 orb-float">
          {/* Pulse Rings */}
          <div className="absolute inset-0 rounded-full border border-primary/40 pulse-ring"></div>
          <div className="absolute inset-0 rounded-full border border-secondary/40 pulse-ring pulse-ring-delay-1"></div>
          <div className="absolute inset-0 rounded-full border border-primary/20 pulse-ring pulse-ring-delay-2"></div>
          
          {/* Core Glowing Orb */}
          <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-primary-container to-secondary-container shadow-[0_0_60px_rgba(223,183,255,0.4)] gradient-bg flex items-center justify-center backdrop-blur-xl border border-white/20 relative z-20">
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent pointer-events-none"></div>
            <span className="material-symbols-outlined text-on-primary-container text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>graphic_eq</span>
          </div>
        </div>

        {/* Typography */}
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-display-lg md:text-display-lg text-on-surface text-glow mb-4">
          Finding a listener who understands...
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md mx-auto opacity-80 mt-2">
          Creating a secure connection in your digital sanctuary.
        </p>
      </div>

      {/* Bottom Safe Tag (Decorative context) */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex items-center space-x-2 bg-secondary-container/20 border border-secondary/30 backdrop-blur-md px-4 py-2 rounded-full">
          <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
          <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">Anonymous & Secure</span>
        </div>
      </div>
    </div>
  );
}
