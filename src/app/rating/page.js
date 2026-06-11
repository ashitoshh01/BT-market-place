"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Rating() {
  const router = useRouter();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [selectedTip, setSelectedTip] = useState(null); // 10 | 20 | 'custom'
  const [customTip, setCustomTip] = useState("");

  const handleSubmit = () => {
    router.push("/dashboard");
  };

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col items-center justify-center px-4 relative overflow-x-hidden antialiased">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-primary/20 rounded-full blur-[40px] z-0 pointer-events-none"></div>
      <div className="absolute bottom-[-50px] right-[-50px] w-[250px] h-[250px] bg-secondary/10 rounded-full blur-[40px] z-0 pointer-events-none"></div>

      <main className="w-full max-w-md animate-fade-in z-10">
        
        {/* Header Section */}
        <div className="text-center mb-8 flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl mb-6 flex items-center justify-center shadow-[0_0_20px_rgba(78,222,163,0.3)] animate-pulse">
            <span className="material-symbols-outlined text-[40px] text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
          </div>
          <h1 className="font-headline-lg-mobile text-[24px] md:text-[32px] font-semibold text-primary-fixed mb-2">Session Complete</h1>
          <p className="font-body-lg text-[16px] text-on-surface-variant">Take a deep breath. You did great.</p>
        </div>

        {/* Glass Container */}
        <div className="bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-8 flex flex-col gap-8 mb-8 relative shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-b-full"></div>

          {/* Rating Section */}
          <div className="flex flex-col items-center">
            <h2 className="font-title-md text-[20px] font-medium text-on-surface mb-4">Rate your Listener</h2>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map(star => (
                <span 
                  key={star}
                  className={`material-symbols-outlined text-[36px] cursor-pointer transition-all ${
                    (hoverRating || rating) >= star 
                      ? "text-[#faba72] drop-shadow-[0_0_8px_rgba(250,186,114,0.4)]" 
                      : "text-on-surface-variant"
                  }`}
                  style={{ fontVariationSettings: (hoverRating || rating) >= star ? "'FILL' 1" : "'FILL' 0" }}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  onClick={() => setRating(star)}
                >
                  star
                </span>
              ))}
            </div>
          </div>

          <div className="w-full h-px bg-white/5"></div>

          {/* Tipping Section */}
          <div className="flex flex-col">
            <h2 className="font-title-md text-[20px] font-medium text-on-surface mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#faba72] opacity-80" style={{ fontVariationSettings: "'FILL' 1" }}>volunteer_activism</span>
              Say Thanks with a Tip
            </h2>
            <p className="font-body-sm text-[14px] text-on-surface-variant mb-4">100% goes directly to your anonymous listener.</p>
            
            <div className="grid grid-cols-3 gap-3">
              {[10, 20, 'Custom'].map(tip => (
                <button 
                  key={tip}
                  onClick={() => setSelectedTip(tip)}
                  className={`py-3 rounded-xl font-title-md text-[20px] font-medium text-on-surface border transition-all ${
                    selectedTip === tip 
                      ? "bg-primary/10 border-primary shadow-[0_0_15px_rgba(223,183,255,0.2)]" 
                      : "bg-white/[0.03] border-white/10 hover:bg-white/5"
                  }`}
                >
                  {typeof tip === 'number' ? `₹${tip}` : tip}
                </button>
              ))}
            </div>

            {selectedTip === 'Custom' && (
              <div className="mt-3 relative animate-fade-in-up">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-title-md text-[20px]">₹</span>
                <input 
                  type="number" 
                  value={customTip}
                  onChange={(e) => setCustomTip(e.target.value)}
                  className="w-full bg-[#080a0c]/40 border border-white/10 rounded-xl py-3 pl-8 pr-4 font-body-lg text-[16px] text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:shadow-[0_0_15px_rgba(223,183,255,0.2)] outline-none transition-all"
                  placeholder="Enter amount"
                />
              </div>
            )}
          </div>

          <div className="w-full h-px bg-white/5"></div>

          {/* Feedback Section */}
          <div className="flex flex-col">
            <h2 className="font-title-md text-[20px] font-medium text-on-surface mb-3">Private Feedback</h2>
            <textarea 
              className="w-full bg-[#080a0c]/40 border border-white/10 rounded-xl p-4 font-body-lg text-[16px] text-on-surface placeholder:text-on-surface-variant/50 resize-none h-32 focus:border-primary focus:shadow-[0_0_15px_rgba(223,183,255,0.2)] outline-none transition-all"
              placeholder="How did they help you today? Your thoughts are anonymous and secure."
            ></textarea>
          </div>
        </div>

        {/* Primary Action */}
        <button 
          onClick={handleSubmit}
          className="w-full py-4 rounded-full font-title-md text-[20px] font-medium text-white flex items-center justify-center gap-2 bg-gradient-to-br from-primary-container to-secondary-container hover:opacity-90 shadow-[0_10px_20px_rgba(107,33,168,0.3)] transition-all transform active:scale-95"
        >
          Submit & Return to Dashboard
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
        
        <p className="text-center mt-6 font-body-sm text-[14px] text-on-surface-variant/50 flex items-center justify-center gap-1">
          <span className="material-symbols-outlined text-[16px]">lock</span>
          Your privacy is permanently protected.
        </p>

      </main>
    </div>
  );
}
