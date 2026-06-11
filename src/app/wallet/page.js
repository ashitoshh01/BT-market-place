"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Wallet() {
  const router = useRouter();

  return (
    <div className="bg-surface-container-lowest text-on-surface min-h-screen pb-24 md:pb-0 font-sans">
      
      {/* TopAppBar */}
      <header className="fixed top-0 w-full bg-surface/80 backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-4 h-16 z-50">
        <button className="text-primary hover:opacity-80 transition-opacity flex items-center justify-center p-2 rounded-full bg-white/[0.03] border border-white/10" onClick={() => router.back()}>
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="font-headline-lg-mobile text-[24px] font-bold text-primary">Wallet</h1>
        <button className="text-on-surface-variant hover:opacity-80 transition-opacity flex items-center justify-center p-2 rounded-full bg-white/[0.03] border border-white/10" onClick={() => router.push("/settings")}>
          <span className="material-symbols-outlined">settings</span>
        </button>
      </header>

      {/* Main Content */}
      <main className="pt-24 px-4 md:px-10 max-w-[1440px] mx-auto grid grid-cols-4 md:grid-cols-12 gap-5">
        <div className="col-span-4 md:col-start-4 md:col-span-6 space-y-6">
          
          {/* Hero Balance Card */}
          <section className="bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-2xl p-8 relative overflow-hidden shadow-[0_0_40px_rgba(107,33,168,0.15),inset_0_0_20px_rgba(78,222,163,0.05)]">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10 flex flex-col items-center text-center space-y-4">
              <p className="font-body-sm text-[14px] text-on-surface-variant uppercase tracking-wider">Current Balance</p>
              <h2 className="font-display-lg text-[48px] font-bold text-on-surface leading-none">₹1,240</h2>
              <button className="mt-6 w-full md:w-auto px-8 py-3 rounded-xl bg-gradient-to-br from-primary-container to-secondary-container hover:opacity-90 transition-opacity font-title-md text-[20px] font-medium text-white flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(107,33,168,0.3)]">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>add_circle</span>
                Add Money
              </button>
            </div>
          </section>

          {/* Session Pricing Block */}
          <section className="bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-xl p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary border border-secondary/20">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>forum</span>
              </div>
              <div>
                <h3 className="font-title-md text-[20px] font-medium text-on-surface">Session Pricing</h3>
                <p className="font-body-sm text-[14px] text-on-surface-variant">Standard Vent Session</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-headline-lg-mobile text-[24px] font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">₹49</p>
              <p className="font-body-sm text-[14px] text-on-surface-variant">per session</p>
            </div>
          </section>

          {/* Recent Transactions */}
          <section className="pt-4">
            <h3 className="font-title-md text-[20px] font-medium text-on-surface mb-4 pl-2">Recent Transactions</h3>
            <div className="space-y-3">
              
              <div className="bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-xl p-4 flex items-center justify-between hover:bg-white/[0.05] transition-colors cursor-default">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">account_balance_wallet</span>
                  </div>
                  <div>
                    <h4 className="font-body-lg text-[16px] text-on-surface">Wallet Top-up</h4>
                    <p className="font-body-sm text-[14px] text-on-surface-variant">Today, 2:30 PM</p>
                  </div>
                </div>
                <span className="font-title-md text-[20px] font-medium text-secondary">+₹500</span>
              </div>

              <div className="bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-xl p-4 flex items-center justify-between hover:bg-white/[0.05] transition-colors cursor-default">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-error/10 flex items-center justify-center text-error">
                    <span className="material-symbols-outlined">chat_bubble</span>
                  </div>
                  <div>
                    <h4 className="font-body-lg text-[16px] text-on-surface">Vent Session</h4>
                    <p className="font-body-sm text-[14px] text-on-surface-variant">Yesterday, 9:15 PM</p>
                  </div>
                </div>
                <span className="font-title-md text-[20px] font-medium text-error">-₹49</span>
              </div>

            </div>
            <button className="w-full mt-4 py-3 font-body-sm text-[14px] text-primary hover:text-primary-fixed transition-colors text-center">
              View All Transactions
            </button>
          </section>

        </div>
      </main>

      {/* Bottom Nav Bar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 w-full z-50 flex justify-around items-center px-4 py-3 bg-surface/80 backdrop-blur-2xl rounded-t-xl border-t border-white/10 shadow-2xl pb-safe">
        <a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors" onClick={() => router.push("/dashboard")}>
          <span className="material-symbols-outlined mb-1">chat_bubble</span>
          <span className="font-label-caps text-[10px] font-semibold tracking-wider">Vents</span>
        </a>
        <a className="flex flex-col items-center justify-center text-secondary bg-secondary-container/20 rounded-xl px-3 py-1">
          <span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance_wallet</span>
          <span className="font-label-caps text-[10px] font-semibold tracking-wider">Wallet</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors" onClick={() => router.push("/categories")}>
          <span className="material-symbols-outlined mb-1">grid_view</span>
          <span className="font-label-caps text-[10px] font-semibold tracking-wider">Categories</span>
        </a>
      </nav>
    </div>
  );
}
