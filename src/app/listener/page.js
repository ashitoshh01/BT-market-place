"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function ListenerDashboard() {
  const router = useRouter();
  const [status, setStatus] = useState("online"); // 'online' | 'busy'
  const [requests, setRequests] = useState([
    { id: 1, topic: "Career Stress", user: "Anonymous User", time: "2m ago", snippet: "Feeling overwhelmed with upcoming deadlines and lack of direction...", type: "normal", icon: "work", color: "text-primary", bg: "bg-primary-container/30", border: "border-primary/20" },
    { id: 2, topic: "Relationships", user: "Anonymous User", time: "5m ago", snippet: "High emotional distress indicated", type: "urgent", icon: "favorite", color: "text-[#faba72]", bg: "bg-[#faba72]/20", border: "border-[#faba72]/20" }
  ]);

  const handleAccept = (id) => {
    // In a real app, this would assign the listener to the chat session
    router.push("/chat");
  };

  const handleDecline = (id) => {
    setRequests(requests.filter(req => req.id !== id));
  };

  return (
    <div className="bg-surface-container-lowest text-on-surface min-h-screen flex flex-col font-sans antialiased pb-28 md:pb-0 overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container">
      
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-surface-dim/80 backdrop-blur-xl border-b border-white/10 flex justify-between items-center px-4 h-16 md:px-10">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => router.push("/")}>
          <div className="w-8 h-8 rounded-full bg-surface-container-high overflow-hidden border border-white/10 flex items-center justify-center text-primary">
             <span className="material-symbols-outlined text-[16px]">psychology</span>
          </div>
          <h1 className="font-headline-lg-mobile text-primary bg-clip-text bg-gradient-to-r from-primary to-secondary text-transparent font-bold tracking-tight">Vently</h1>
        </div>
        
        {/* Web Nav (Hidden on Mobile) */}
        <nav className="hidden md:flex items-center gap-6">
          <a className="text-primary font-title-md hover:bg-white/5 transition-colors px-3 py-1 rounded-lg cursor-pointer" onClick={() => router.push("/listener")}>Home</a>
          <a className="text-on-surface-variant font-title-md hover:text-primary transition-colors px-3 py-1 rounded-lg cursor-pointer" onClick={() => router.push("/wallet")}>Earnings</a>
          <a className="text-on-surface-variant font-title-md hover:text-primary transition-colors px-3 py-1 rounded-lg cursor-pointer" onClick={() => router.push("/wallet")}>History</a>
          <a className="text-on-surface-variant font-title-md hover:text-primary transition-colors px-3 py-1 rounded-lg cursor-pointer" onClick={() => router.push("/settings")}>Settings</a>
        </nav>
        
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-primary hover:bg-white/5 transition-colors cursor-pointer active:scale-95 duration-150 p-2 rounded-full">sensors</span>
        </div>
      </header>

      <main className="flex-grow pt-24 px-4 md:px-10 max-w-[1440px] mx-auto w-full flex flex-col gap-8">
        
        {/* Dashboard Header & Availability */}
        <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="font-headline-lg text-[32px] text-on-surface font-semibold">Welcome back.</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-1">Ready to listen?</p>
          </div>
          <div className="glass-card rounded-full p-1 flex items-center gap-1 w-full md:w-auto bg-surface-container/40 border border-white/5 backdrop-blur-lg">
            <button 
              onClick={() => setStatus("online")}
              className={`flex-1 md:flex-none px-4 py-2 rounded-full font-title-md text-sm transition-all flex items-center justify-center gap-2 ${status === 'online' ? 'bg-secondary-container/20 text-secondary border border-secondary/30 shadow-[0_0_12px_#4edea3]' : 'text-on-surface-variant hover:text-on-surface'}`}
            >
              {status === 'online' && <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>}
              Online
            </button>
            <button 
              onClick={() => setStatus("busy")}
              className={`flex-1 md:flex-none px-4 py-2 rounded-full font-title-md text-sm transition-all flex items-center justify-center gap-2 ${status === 'busy' ? 'bg-error-container/20 text-error border border-error/30 shadow-[0_0_12px_#ffb4ab]' : 'text-on-surface-variant hover:text-on-surface'}`}
            >
              Busy
            </button>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="glass-card rounded-xl p-6 flex flex-col gap-2 bg-white/5 border border-white/10">
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider text-[12px] font-semibold">Total Earnings</span>
            <div className="flex items-end gap-2">
              <span className="font-display-lg text-[48px] font-bold text-primary leading-tight">₹12,450</span>
              <span className="font-body-sm text-body-sm text-secondary mb-2">+14% this week</span>
            </div>
          </div>
          <div className="glass-card rounded-xl p-6 flex flex-col gap-2 bg-white/5 border border-white/10">
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider text-[12px] font-semibold">Completed Sessions</span>
            <div className="flex items-end gap-2">
              <span className="font-display-lg text-[48px] font-bold text-on-surface leading-tight">84</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant mb-2">lifetime</span>
            </div>
          </div>
          <div className="glass-card rounded-xl p-6 flex flex-col gap-2 bg-white/5 border border-white/10">
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider text-[12px] font-semibold">Average Rating</span>
            <div className="flex items-center gap-2">
              <span className="font-display-lg text-[48px] font-bold text-[#faba72] leading-tight">4.9</span>
              <div className="flex text-[#faba72]">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined">star_half</span>
              </div>
            </div>
          </div>
        </section>

        {/* Live Requests */}
        <section className="flex flex-col gap-4">
          <div className="flex justify-between items-center border-b border-white/5 pb-2">
            <h3 className="font-title-md text-title-md text-on-surface flex items-center gap-2 text-[20px] font-medium">
              Live Requests
              {requests.length > 0 && <span className="bg-primary/20 text-primary text-xs px-2 py-0.5 rounded-full">{requests.length}</span>}
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {requests.length === 0 ? (
              <p className="text-on-surface-variant italic">No live requests right now. Stay online to receive matches.</p>
            ) : (
              requests.map(req => (
                <div key={req.id} className="glass-card rounded-xl p-5 flex flex-col gap-4 transition-all duration-300 bg-white/5 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(223,183,255,0.1)] border border-white/10">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${req.bg} ${req.color} ${req.border}`}>
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{req.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-body-lg text-[16px] font-medium text-on-surface">{req.topic}</h4>
                        <span className="font-body-sm text-[14px] text-on-surface-variant">{req.user}</span>
                      </div>
                    </div>
                    <span className="font-body-sm text-[14px] text-on-surface-variant">{req.time}</span>
                  </div>
                  
                  <div className="bg-surface-container/50 rounded-lg p-3 border border-white/5 flex items-center gap-2">
                    {req.type === 'urgent' && <div className="w-2 h-2 rounded-full bg-error animate-pulse shrink-0"></div>}
                    <p className={`font-body-sm text-[14px] ${req.type === 'urgent' ? 'text-error/80' : 'text-on-surface-variant italic'}`}>
                      {req.type === 'normal' ? `"${req.snippet}"` : req.snippet}
                    </p>
                  </div>
                  
                  <div className="flex gap-3 mt-2">
                    <button onClick={() => handleAccept(req.id)} className="flex-1 bg-gradient-to-br from-primary-container to-secondary-container text-white font-title-md text-sm py-2 rounded-lg transition-all hover:opacity-90 flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(107,33,168,0.2)]">
                      <span className="material-symbols-outlined text-sm">check</span> Accept
                    </button>
                    <button onClick={() => handleDecline(req.id)} className="flex-1 bg-surface/60 border border-primary/30 text-on-surface font-title-md text-sm py-2 rounded-lg transition-all hover:bg-surface/80 hover:border-primary/60">
                      Decline
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </main>

      {/* Bottom Nav Bar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 w-full z-50 rounded-t-xl bg-surface-dim/80 backdrop-blur-xl border-t border-white/10 shadow-2xl flex justify-around items-center h-20 px-4 pb-safe">
        <a className="flex flex-col items-center justify-center text-secondary bg-secondary-container/20 rounded-xl px-3 py-1 transition-all active:translate-y-[-2px] duration-200 cursor-pointer" onClick={() => router.push("/listener")}>
          <span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
          <span className="font-label-caps text-[10px] font-semibold tracking-wider">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-all cursor-pointer" onClick={() => router.push("/wallet")}>
          <span className="material-symbols-outlined mb-1">payments</span>
          <span className="font-label-caps text-[10px] font-semibold tracking-wider">Earnings</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-all cursor-pointer" onClick={() => router.push("/wallet")}>
          <span className="material-symbols-outlined mb-1">history</span>
          <span className="font-label-caps text-[10px] font-semibold tracking-wider">History</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-all" onClick={() => router.push("/settings")}>
          <span className="material-symbols-outlined mb-1">settings</span>
          <span className="font-label-caps text-[10px] font-semibold tracking-wider">Settings</span>
        </a>
      </nav>
    </div>
  );
}
