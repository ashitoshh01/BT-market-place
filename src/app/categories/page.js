"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Categories() {
  const router = useRouter();

  return (
    <div className="bg-surface-container-lowest text-on-surface antialiased min-h-screen flex flex-col relative pb-24 md:pb-0">
      {/* Top App Bar (Desktop Only) */}
      <header className="hidden md:flex bg-surface/80 backdrop-blur-xl border-b border-white/10 fixed top-0 w-full z-50 justify-between items-center px-6 h-16 max-w-7xl mx-auto cursor-pointer active:scale-95 transition-transform">
        <div className="flex items-center gap-4 hover:opacity-80 transition-opacity" onClick={() => router.push("/dashboard")}>
          <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>bubble_chart</span>
          <span className="font-headline-lg text-headline-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Vently</span>
        </div>
        <nav className="flex gap-8">
          <a className="text-on-surface-variant hover:opacity-80 transition-opacity font-title-md text-title-md cursor-pointer" onClick={() => router.push("/dashboard")}>Home</a>
          <a className="text-primary hover:opacity-80 transition-opacity font-title-md text-title-md cursor-pointer" onClick={() => router.push("/categories")}>Categories</a>
          <a className="text-on-surface-variant hover:opacity-80 transition-opacity font-title-md text-title-md cursor-pointer" onClick={() => router.push("/chat")}>Chat</a>
          <a className="text-on-surface-variant hover:opacity-80 transition-opacity font-title-md text-title-md cursor-pointer" onClick={() => router.push("/settings")}>Settings</a>
        </nav>
        <div className="hover:opacity-80 transition-opacity cursor-pointer" onClick={() => router.push("/settings")}>
          <span className="material-symbols-outlined text-on-surface-variant text-2xl">account_circle</span>
        </div>
      </header>

      {/* Main Layout Container */}
      <div className="flex-1 flex max-w-[1440px] mx-auto w-full pt-8 md:pt-24 px-margin-mobile md:px-container-padding gap-gutter">
        
        {/* Side Navigation (Desktop Only) */}
        <aside className="hidden md:flex flex-col py-20 px-4 space-y-2 bg-surface/60 backdrop-blur-2xl border-r border-white/10 shadow-2xl h-full w-72 fixed left-0 top-0 z-40 duration-200 ease-in-out">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-8 px-4">Categories</h2>
          <nav className="flex flex-col gap-2 w-full">
            <a className="flex items-center gap-4 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-white/5 hover:bg-white/10 transition-colors cursor-pointer" onClick={() => router.push("/match")}>
              <span className="material-symbols-outlined">favorite</span>
              <span className="font-body-lg text-body-lg">Relationships</span>
            </a>
            <a className="flex items-center gap-4 px-4 py-3 rounded-lg bg-primary-container/30 text-primary border-l-4 border-primary hover:bg-white/10 transition-colors cursor-pointer" onClick={() => router.push("/match")}>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>work</span>
              <span className="font-body-lg text-body-lg">Career</span>
            </a>
            <a className="flex items-center gap-4 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-white/5 hover:bg-white/10 transition-colors cursor-pointer" onClick={() => router.push("/match")}>
              <span className="material-symbols-outlined">psychology</span>
              <span className="font-body-lg text-body-lg">Mental Health</span>
            </a>
            <a className="flex items-center gap-4 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-white/5 hover:bg-white/10 transition-colors cursor-pointer" onClick={() => router.push("/match")}>
              <span className="material-symbols-outlined">auto_awesome</span>
              <span className="font-body-lg text-body-lg">Spiritual</span>
            </a>
          </nav>
        </aside>

        {/* Main Content Canvas */}
        <main className="flex-1 w-full md:pl-72 flex flex-col gap-8 pb-32">
          <header className="mb-4">
            <h1 className="font-display-lg text-display-lg md:text-[48px] text-[32px] text-on-surface mb-2 tracking-tight">Explore Categories</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Find a safe space to vent, share, and connect anonymously. Select a topic that resonates with your current state of mind.</p>
          </header>

          <style dangerouslySetInnerHTML={{ __html: `
            .gradient-border-card {
              position: relative;
              background: rgba(20, 20, 28, 0.8);
              backdrop-filter: blur(20px);
              -webkit-backdrop-filter: blur(20px);
              border-radius: 1rem;
              overflow: hidden;
              z-index: 1;
              transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.4s ease;
            }
            .gradient-border-card::before {
              content: "";
              position: absolute;
              inset: 0;
              border-radius: 1rem;
              padding: 2px;
              background: linear-gradient(135deg, var(--color-secondary), var(--color-primary));
              -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
              -webkit-mask-composite: xor;
              mask-composite: exclude;
              opacity: 0.7;
              transition: opacity 0.4s ease, filter 0.4s ease;
              z-index: -1;
            }
            .gradient-border-card:hover {
              transform: translateY(-6px) scale(1.02);
              box-shadow: 0 15px 40px rgba(255, 87, 185, 0.3), inset 0 0 20px rgba(0, 229, 255, 0.1);
            }
            .gradient-border-card:hover::before {
              opacity: 1;
              filter: drop-shadow(0 0 10px rgba(255, 87, 185, 0.8));
            }
            .icon-glow {
              filter: drop-shadow(0 0 12px var(--color-primary));
              animation: floatIcon 3s ease-in-out infinite;
            }
            @keyframes floatIcon {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-5px); }
            }
          `}} />

          {/* Bento Grid of Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Category Card 1: Relationships */}
            <a onClick={() => router.push("/match")} className="cursor-pointer gradient-border-card p-8 flex flex-col items-center justify-center text-center group min-h-[240px]">
              <div className="w-16 h-16 rounded-full bg-surface-container-high/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-4xl text-primary icon-glow" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
              </div>
              <h3 className="font-title-md text-title-md text-on-surface mb-2">Relationships</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant opacity-80">Navigate love, friendships, and boundaries.</p>
            </a>
            
            {/* Category Card 2: Career */}
            <a onClick={() => router.push("/match")} className="cursor-pointer gradient-border-card p-8 flex flex-col items-center justify-center text-center group min-h-[240px] md:col-span-2 xl:col-span-1">
              <div className="w-16 h-16 rounded-full bg-surface-container-high/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-4xl text-secondary icon-glow" style={{ fontVariationSettings: "'FILL' 1" }}>work</span>
              </div>
              <h3 className="font-title-md text-title-md text-on-surface mb-2">Career</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant opacity-80">Workplace stress, ambitions, and burnout.</p>
            </a>

            {/* Category Card 3: Family */}
            <a onClick={() => router.push("/match")} className="cursor-pointer gradient-border-card p-8 flex flex-col items-center justify-center text-center group min-h-[240px]">
              <div className="w-16 h-16 rounded-full bg-surface-container-high/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-4xl text-[#faba72] icon-glow" style={{ fontVariationSettings: "'FILL' 1" }}>family_restroom</span>
              </div>
              <h3 className="font-title-md text-title-md text-on-surface mb-2">Family</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant opacity-80">Dynamics, expectations, and history.</p>
            </a>

            {/* Category Card 4: Personal Growth */}
            <a onClick={() => router.push("/match")} className="cursor-pointer gradient-border-card p-8 flex flex-col items-center justify-center text-center group min-h-[240px] md:col-span-2 lg:col-span-3 xl:col-span-2 relative overflow-hidden">
              <div className="absolute -bottom-10 -right-10 opacity-10 pointer-events-none">
                <span className="material-symbols-outlined text-[150px] text-primary">psychology</span>
              </div>
              <div className="w-16 h-16 rounded-full bg-surface-container-high/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                <span className="material-symbols-outlined text-4xl text-primary icon-glow" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
              </div>
              <h3 className="font-title-md text-title-md text-on-surface mb-2 relative z-10">Personal Growth</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant opacity-80 max-w-sm relative z-10">Self-discovery, habits, and overcoming internal obstacles.</p>
            </a>

            {/* Category Card 5: Finance */}
            <a onClick={() => router.push("/match")} className="cursor-pointer gradient-border-card p-8 flex flex-col items-center justify-center text-center group min-h-[240px]">
              <div className="w-16 h-16 rounded-full bg-surface-container-high/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-4xl text-secondary icon-glow" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
              </div>
              <h3 className="font-title-md text-title-md text-on-surface mb-2">Finance</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant opacity-80">Money anxiety and financial goals.</p>
            </a>

            {/* Category Card 6: Health & Fitness */}
            <a onClick={() => router.push("/match")} className="cursor-pointer gradient-border-card p-8 flex flex-col items-center justify-center text-center group min-h-[240px]">
              <div className="w-16 h-16 rounded-full bg-surface-container-high/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-4xl text-[#faba72] icon-glow" style={{ fontVariationSettings: "'FILL' 1" }}>fitness_center</span>
              </div>
              <h3 className="font-title-md text-title-md text-on-surface mb-2">Health</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant opacity-80">Physical well-being and body image.</p>
            </a>
          </div>
        </main>
      </div>

      {/* Bottom Navigation Bar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 w-full z-50 flex justify-around items-center h-16 px-4 bg-surface/80 backdrop-blur-lg rounded-t-xl shadow-lg active:scale-90 transition-all">
        <a className="flex flex-col items-center gap-1 text-on-surface-variant hover:text-primary p-2" onClick={() => router.push("/dashboard")}>
          <span className="material-symbols-outlined">home</span>
          <span className="font-label-caps text-[10px]">Home</span>
        </a>
        <a className="flex flex-col items-center gap-1 text-primary scale-110 p-2 cursor-pointer" onClick={() => router.push("/categories")}>
          <div className="relative">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>grid_view</span>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"></div>
          </div>
          <span className="font-label-caps text-[10px]">Categories</span>
        </a>
        <a className="flex flex-col items-center gap-1 text-on-surface-variant hover:text-primary p-2 cursor-pointer" onClick={() => router.push("/chat")}>
          <span className="material-symbols-outlined">chat_bubble</span>
          <span className="font-label-caps text-[10px]">Chat</span>
        </a>
        <a className="flex flex-col items-center gap-1 text-on-surface-variant hover:text-primary p-2 cursor-pointer" onClick={() => router.push("/settings")}>
          <span className="material-symbols-outlined">settings</span>
          <span className="font-label-caps text-[10px]">Settings</span>
        </a>
      </nav>
    </div>
  );
}
