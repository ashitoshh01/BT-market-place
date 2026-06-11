"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Onboarding() {
  const router = useRouter();
  const [role, setRole] = useState(null); // 'venter' | 'listener'
  const [interests, setInterests] = useState([]);

  const toggleInterest = (interest) => {
    if (interests.includes(interest)) {
      setInterests(interests.filter(i => i !== interest));
    } else {
      setInterests([...interests, interest]);
    }
  };

  const handleContinue = () => {
    if (role === 'venter') {
      router.push("/dashboard");
    } else {
      router.push("/listener");
    }
  };

  return (
    <div className="bg-surface-container-lowest text-on-surface min-h-screen flex flex-col items-center justify-center pt-16 pb-20 px-6">
      
      {/* TopAppBar Minimal */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-white/10 flex justify-center items-center h-16 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 text-primary cursor-pointer active:scale-95 transition-transform hover:opacity-80" onClick={() => router.push("/")}>
          <span className="material-symbols-outlined text-[24px]">bubble_chart</span>
          <span className="font-headline-lg-mobile text-headline-lg-mobile font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Vently</span>
        </div>
      </header>

      <main className="w-full max-w-md mx-auto flex flex-col gap-8 animate-fade-in">
        <div className="text-center">
          <h1 className="font-display-lg text-[32px] md:text-[40px] font-bold text-on-surface mb-2">Welcome to your sanctuary</h1>
          <p className="font-body-lg text-on-surface-variant">How would you like to use Vently today?</p>
        </div>

        {/* Role Selection */}
        <div className="flex flex-col gap-4">
          <div 
            onClick={() => setRole('venter')}
            className={`glass-card p-6 cursor-pointer transition-all duration-300 flex items-center gap-4 ${role === 'venter' ? 'border-primary ring-1 ring-primary/50 glow-purple bg-primary-container/10' : 'hover:bg-white/5'}`}
          >
            <div className="w-12 h-12 rounded-full bg-primary-container/30 flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            </div>
            <div>
              <h3 className="font-title-md text-title-md text-on-surface">I need to Vent</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Talk anonymously with a listener about what's on your mind.</p>
            </div>
          </div>

          <div 
            onClick={() => setRole('listener')}
            className={`glass-card p-6 cursor-pointer transition-all duration-300 flex items-center gap-4 ${role === 'listener' ? 'border-secondary ring-1 ring-secondary/50 glow-emerald bg-secondary-container/10' : 'hover:bg-white/5'}`}
          >
            <div className="w-12 h-12 rounded-full bg-secondary-container/30 flex items-center justify-center text-secondary shrink-0">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
            </div>
            <div>
              <h3 className="font-title-md text-title-md text-on-surface">I want to Listen</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Support others and earn money for your time and empathy.</p>
            </div>
          </div>
        </div>

        {/* Dynamic Step 2 based on selection */}
        {role && (
          <div className="animate-fade-in flex flex-col gap-4 mt-4">
            <h2 className="font-title-md text-title-md text-on-surface">What topics interest you?</h2>
            <div className="flex flex-wrap gap-3">
              {['Relationships', 'Career', 'Mental Health', 'Family', 'Finance', 'Spiritual'].map(topic => (
                <div 
                  key={topic}
                  onClick={() => toggleInterest(topic)}
                  className={`px-4 py-2 rounded-full cursor-pointer border font-body-sm transition-all ${
                    interests.includes(topic) 
                      ? 'bg-primary-container/30 border-primary text-primary' 
                      : 'bg-surface/50 border-white/10 text-on-surface-variant hover:border-white/30'
                  }`}
                >
                  {topic}
                </div>
              ))}
            </div>
            
            <button 
              onClick={handleContinue}
              className="btn-gradient w-full py-4 rounded-full font-title-md text-title-md mt-6"
            >
              Continue to Dashboard
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
