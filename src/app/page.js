"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="bg-surface-container-lowest text-on-surface min-h-screen flex flex-col pt-16 pb-20">
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-white/10 flex justify-between items-center px-6 h-16 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 text-primary cursor-pointer active:scale-95 transition-transform hover:opacity-80" onClick={() => router.push("/")}>
          <span className="material-symbols-outlined text-[24px]">bubble_chart</span>
          <span className="font-headline-lg-mobile text-headline-lg-mobile font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Vently</span>
        </div>
        <div>
          <button className="text-on-surface hover:text-primary transition-colors mr-6" onClick={() => router.push("/onboarding")}>
            Login
          </button>
          <button className="btn-gradient px-4 py-2 rounded-lg font-title-md text-[14px]" onClick={() => router.push("/onboarding")}>
            Get Started
          </button>
        </div>
      </header>

      <main className="flex-1 w-full max-w-4xl mx-auto px-6 flex flex-col items-center justify-center text-center gap-6 pt-16">
        <h1 className="font-display-lg text-[48px] md:text-[64px] font-bold text-on-surface mb-2 tracking-tight leading-tight glow-primary">
          Need someone to <span className="bg-gradient-to-r from-primary via-tertiary to-secondary bg-clip-text text-transparent" style={{ animation: "gradientShift 3s ease infinite", backgroundSize: "200% auto" }}>listen?</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-8 text-glow">
          Share your thoughts, frustrations, and stress anonymously with real human listeners. No judgment. No identity revealed.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 w-full max-w-md">
          <button className="btn-gradient w-full py-4 rounded-full font-title-md text-title-md shadow-lg flex items-center justify-center gap-2" onClick={() => router.push("/onboarding")}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            Vent Now Anonymously
          </button>
          <button className="glass-card w-full py-4 rounded-full font-title-md text-title-md text-on-surface hover:bg-white/5 transition-colors" onClick={() => router.push("/onboarding")}>
            Become a Listener
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left mt-8">
          <div className="glass-card p-6 flex flex-col gap-3 hover:scale-105 transition-transform duration-300 glow-primary">
            <span className="material-symbols-outlined text-4xl text-primary mb-2 text-glow">shield_lock</span>
            <h3 className="font-title-md text-title-md text-on-surface text-glow">100% Anonymous</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Your identity is completely hidden. Generate an anonymous username and start talking.</p>
          </div>
          
          <div className="glass-card p-6 flex flex-col gap-3 hover:scale-105 transition-transform duration-300 glow-primary">
            <span className="material-symbols-outlined text-4xl text-secondary mb-2 text-glow">group</span>
            <h3 className="font-title-md text-title-md text-on-surface text-glow">Real Human Listeners</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Connect instantly with verified people who are ready to listen without judgment.</p>
          </div>
          
          <div className="glass-card p-6 flex flex-col gap-3 hover:scale-105 transition-transform duration-300 glow-primary">
            <span className="material-symbols-outlined text-4xl text-tertiary mb-2 text-glow">bolt</span>
            <h3 className="font-title-md text-title-md text-on-surface text-glow">Instant Matches</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">No waiting around. Get matched with a listener within minutes and start venting.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
