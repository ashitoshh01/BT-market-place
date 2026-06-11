"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  return (
    <div className="bg-surface-container-lowest text-on-surface min-h-screen flex flex-col pt-16 pb-20">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-white/10 flex justify-between items-center px-6 h-16 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 text-primary cursor-pointer active:scale-95 transition-transform hover:opacity-80">
          <span className="material-symbols-outlined text-[24px]">bubble_chart</span>
        </div>
        <div className="font-headline-lg-mobile text-headline-lg-mobile font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Vently
        </div>
        <div className="flex items-center gap-4 text-on-surface-variant cursor-pointer active:scale-95 transition-transform hover:opacity-80" onClick={() => router.push("/settings")}>
          <span className="material-symbols-outlined text-[24px]">account_circle</span>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="flex-1 w-full max-w-md mx-auto px-margin-mobile flex flex-col gap-6 pt-6">
        
        {/* Hero: Instant Match */}
        <section className="glass-card-strong p-8 flex flex-col items-center justify-center text-center gap-4 glow-primary mt-4">
          <h1 className="font-title-md text-title-md text-on-surface">Find your sanctuary.</h1>
          <p className="font-body-sm text-body-sm text-on-surface-variant mb-2">Connect anonymously with someone who understands right now.</p>
          <button className="btn-gradient w-full rounded-full py-4 font-title-md text-title-md shadow-lg flex items-center justify-center gap-2" onClick={() => router.push("/match")}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>wifi_tethering</span>
            Instant Match
          </button>
        </section>

        {/* Discover Categories */}
        <section className="flex flex-col gap-3">
          <div className="flex justify-between items-end mb-1">
            <h2 className="font-title-md text-title-md text-primary">Discover Categories</h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {/* Card 1 */}
            <div className="glass-card p-4 flex flex-col gap-3 items-start justify-between aspect-square hover:bg-white/5 transition-colors cursor-pointer active:scale-95 duration-200" onClick={() => router.push("/match")}>
              <div className="w-10 h-10 rounded-full bg-primary-container/30 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">favorite</span>
              </div>
              <span className="font-title-md text-title-md text-on-surface">Relationships</span>
            </div>
            {/* Card 2 */}
            <div className="glass-card p-4 flex flex-col gap-3 items-start justify-between aspect-square hover:bg-white/5 transition-colors cursor-pointer active:scale-95 duration-200" onClick={() => router.push("/match")}>
              <div className="w-10 h-10 rounded-full bg-secondary-container/30 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">work</span>
              </div>
              <span className="font-title-md text-title-md text-on-surface">Career</span>
            </div>
            {/* Card 3 */}
            <div className="glass-card p-4 flex flex-col gap-3 items-start justify-between aspect-square hover:bg-white/5 transition-colors cursor-pointer active:scale-95 duration-200" onClick={() => router.push("/match")}>
              <div className="w-10 h-10 rounded-full bg-tertiary-container/30 flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined">psychology</span>
              </div>
              <span className="font-title-md text-title-md text-on-surface">Mental Health</span>
            </div>
            {/* Card 4 */}
            <div className="glass-card p-4 flex flex-col gap-3 items-start justify-between aspect-square hover:bg-white/5 transition-colors cursor-pointer active:scale-95 duration-200" onClick={() => router.push("/match")}>
              <div className="w-10 h-10 rounded-full bg-primary-container/30 flex items-center justify-center text-primary-fixed">
                <span className="material-symbols-outlined">auto_awesome</span>
              </div>
              <span className="font-title-md text-title-md text-on-surface">Spiritual</span>
            </div>
          </div>
        </section>

        {/* Recent Vents Feed */}
        <section className="flex flex-col gap-4 mt-2">
          <h2 className="font-title-md text-title-md text-primary">Recent Vents</h2>
          {/* Vent Item 1 */}
          <div className="glass-card p-5 flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(78,222,163,0.6)]"></div>
                <span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider">Listening</span>
              </div>
              <span className="font-body-sm text-body-sm text-on-surface-variant">2m ago</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface leading-relaxed">Feeling completely overwhelmed at work today. It feels like no matter how much I do, it's never enough. Just need to let this out into the void.</p>
            <div className="flex gap-2 mt-1">
              <span className="px-3 py-1 rounded-full bg-secondary-container/20 border border-secondary/20 font-label-caps text-label-caps text-secondary">Career</span>
              <span className="px-3 py-1 rounded-full bg-primary-container/20 border border-primary/20 font-label-caps text-label-caps text-primary">Stress</span>
            </div>
          </div>
          {/* Vent Item 2 */}
          <div className="glass-card p-5 flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-tertiary shadow-[0_0_8px_rgba(250,186,114,0.6)]"></div>
                <span className="font-label-caps text-label-caps text-tertiary uppercase tracking-wider">Active</span>
              </div>
              <span className="font-body-sm text-body-sm text-on-surface-variant">15m ago</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface leading-relaxed">Had a massive fight with my partner over something so small. Why does communication have to be this hard sometimes?</p>
            <div className="flex gap-2 mt-1">
              <span className="px-3 py-1 rounded-full bg-primary-container/20 border border-primary/20 font-label-caps text-label-caps text-primary">Relationships</span>
            </div>
          </div>
        </section>
      </main>

      {/* BottomNavBar */}
      <nav className="md:hidden fixed bottom-0 w-full z-50 flex justify-around items-center h-16 px-4 bg-surface/80 backdrop-blur-lg border-t border-white/10 shadow-lg rounded-t-xl">
        <div className="flex flex-col items-center gap-1 cursor-pointer text-primary scale-110 active:scale-90 transition-all" onClick={() => router.push("/dashboard")}>
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
          <span className="font-label-caps text-label-caps">Home</span>
        </div>
        <div className="flex flex-col items-center gap-1 cursor-pointer text-on-surface-variant hover:text-primary active:scale-90 transition-all" onClick={() => router.push("/categories")}>
          <span className="material-symbols-outlined">grid_view</span>
          <span className="font-label-caps text-label-caps">Categories</span>
        </div>
        <div className="flex flex-col items-center gap-1 cursor-pointer text-on-surface-variant hover:text-primary active:scale-90 transition-all">
          <span className="material-symbols-outlined">chat_bubble</span>
          <span className="font-label-caps text-label-caps">Chat</span>
        </div>
        <div className="flex flex-col items-center gap-1 cursor-pointer text-on-surface-variant hover:text-primary active:scale-90 transition-all" onClick={() => router.push("/settings")}>
          <span className="material-symbols-outlined">settings</span>
          <span className="font-label-caps text-label-caps">Settings</span>
        </div>
      </nav>
    </div>
  );
}
