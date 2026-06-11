"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Settings() {
  const router = useRouter();
  const [pushEnabled, setPushEnabled] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [onlineStatus, setOnlineStatus] = useState(false);

  return (
    <div className="bg-surface-container-lowest text-on-surface min-h-screen flex flex-col font-sans antialiased pb-32">
      
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-4 h-16 max-w-[1440px] mx-auto">
        <button 
          onClick={() => router.back()} 
          className="text-on-surface-variant hover:bg-white/5 transition-colors active:scale-95 duration-200 p-2 rounded-full flex items-center justify-center"
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_back</span>
        </button>
        <h1 className="font-headline-lg-mobile text-[24px] font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent tracking-tight cursor-pointer" onClick={() => router.push("/")}>Vently</h1>
        <div className="w-10"></div> {/* Placeholder to balance layout */}
      </header>

      {/* Main Content */}
      <main className="flex-1 mt-20 px-4 flex flex-col gap-6 max-w-3xl mx-auto w-full">
        
        {/* Profile Card */}
        <section className="bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-xl p-6 flex flex-col items-center text-center relative overflow-hidden shadow-[0_0_20px_rgba(223,183,255,0.15)]">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="relative mb-4 group cursor-pointer">
            <div className="w-24 h-24 rounded-full bg-surface-container-high border-2 border-primary p-1 overflow-hidden relative">
              <img 
                alt="Anonymous Phoenix Avatar" 
                className="w-full h-full object-cover rounded-full" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAO2GLuNW1NJC1Npmcc8l6ssOsyEc0HhZWvTR8Y2_FBg4MbxlfdEnc8XYUNjiYgI261-kzL_k1A7WtaLlqDoICjDWEeshgL-UHhtCw2GYhSBuSuGPRrz7NDQmGmQ2y7_XPv7QJEsoR_1EsjRY4kr_0ojO5t8AB-5MsJWGnRpTg8anB_YLICJSKKV9rbpzS0YzsMCyzA2JCRgtWGPeWg5XhxohslL4mez_-OOU_s-7ziYDn5Rua3VTLXG5r2RYNIjQYA1PHbAOL2hP8"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-full">
                <span className="material-symbols-outlined text-white">edit</span>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 bg-primary-container text-white rounded-full p-1.5 border-2 border-surface">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>camera_alt</span>
            </div>
          </div>
          
          <h2 className="font-title-md text-[20px] font-medium text-on-surface mb-1">SilentObserver_88</h2>
          <p className="font-body-sm text-[14px] text-on-surface-variant mb-4">Premium Member • Since Oct 2023</p>
          
          <button className="w-full py-3 px-4 rounded-lg bg-white/5 border border-white/10 text-on-surface hover:bg-white/10 active:scale-95 transition-all flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">edit_square</span>
            <span>Edit Profile</span>
          </button>
        </section>

        {/* App Settings */}
        <section>
          <h3 className="font-label-caps text-[12px] font-semibold text-on-surface-variant mb-3 pl-2 uppercase tracking-wider">Preferences</h3>
          <div className="bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-xl flex flex-col divide-y divide-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            
            {/* Push Notifications */}
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary border border-white/5">
                  <span className="material-symbols-outlined">notifications</span>
                </div>
                <div>
                  <div className="font-title-md text-[16px] text-on-surface">Push Notifications</div>
                  <div className="font-body-sm text-[14px] text-on-surface-variant">Alerts for mentions & updates</div>
                </div>
              </div>
              <div 
                className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in cursor-pointer"
                onClick={() => setPushEnabled(!pushEnabled)}
              >
                <div className={`absolute block w-6 h-6 rounded-full bg-surface border-4 appearance-none transition-transform duration-200 ease-in-out z-10 ${pushEnabled ? 'translate-x-6 border-[#4edea3]' : 'border-[#4c4452]'}`}></div>
                <div className={`block overflow-hidden h-6 rounded-full border transition-colors duration-200 ${pushEnabled ? 'bg-[#4edea3]/20 border-[#4edea3]' : 'bg-surface-container-high border-[#4c4452]'}`}></div>
              </div>
            </div>

            {/* Sound Alerts */}
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary border border-white/5">
                  <span className="material-symbols-outlined">volume_up</span>
                </div>
                <div>
                  <div className="font-title-md text-[16px] text-on-surface">Sound Alerts</div>
                  <div className="font-body-sm text-[14px] text-on-surface-variant">In-app interaction sounds</div>
                </div>
              </div>
              <div 
                className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in cursor-pointer"
                onClick={() => setSoundEnabled(!soundEnabled)}
              >
                <div className={`absolute block w-6 h-6 rounded-full bg-surface border-4 appearance-none transition-transform duration-200 ease-in-out z-10 ${soundEnabled ? 'translate-x-6 border-[#4edea3]' : 'border-[#4c4452]'}`}></div>
                <div className={`block overflow-hidden h-6 rounded-full border transition-colors duration-200 ${soundEnabled ? 'bg-[#4edea3]/20 border-[#4edea3]' : 'bg-surface-container-high border-[#4c4452]'}`}></div>
              </div>
            </div>

            {/* Show Online Status */}
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary border border-white/5">
                  <span className="material-symbols-outlined">visibility</span>
                </div>
                <div>
                  <div className="font-title-md text-[16px] text-on-surface">Show Online Status</div>
                  <div className="font-body-sm text-[14px] text-on-surface-variant">Let others know when you're active</div>
                </div>
              </div>
              <div 
                className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in cursor-pointer"
                onClick={() => setOnlineStatus(!onlineStatus)}
              >
                <div className={`absolute block w-6 h-6 rounded-full bg-surface border-4 appearance-none transition-transform duration-200 ease-in-out z-10 ${onlineStatus ? 'translate-x-6 border-[#4edea3]' : 'border-[#4c4452]'}`}></div>
                <div className={`block overflow-hidden h-6 rounded-full border transition-colors duration-200 ${onlineStatus ? 'bg-[#4edea3]/20 border-[#4edea3]' : 'bg-surface-container-high border-[#4c4452]'}`}></div>
              </div>
            </div>

          </div>
        </section>

        {/* Payment Methods */}
        <section>
          <h3 className="font-label-caps text-[12px] font-semibold text-on-surface-variant mb-3 pl-2 uppercase tracking-wider">Payment</h3>
          <div className="bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-xl flex flex-col gap-3 p-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            
            <div className="bg-white/5 border border-white/5 rounded-lg p-4 flex items-center justify-between group hover:border-white/20 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-8 bg-white rounded flex items-center justify-center p-1">
                  <div className="flex -space-x-2">
                    <div className="w-4 h-4 rounded-full bg-red-500 opacity-80 mix-blend-multiply"></div>
                    <div className="w-4 h-4 rounded-full bg-yellow-500 opacity-80 mix-blend-multiply"></div>
                  </div>
                </div>
                <div>
                  <div className="font-title-md text-[16px] text-on-surface">Mastercard</div>
                  <div className="font-body-sm text-[14px] text-on-surface-variant">**** **** **** 4242</div>
                </div>
              </div>
              <button className="text-[#988d9e] hover:text-[#ffb4ab] transition-colors">
                <span className="material-symbols-outlined">delete</span>
              </button>
            </div>

            <button className="w-full py-3 rounded-lg border border-dashed border-white/20 text-primary hover:bg-primary/5 hover:border-primary/50 transition-all flex items-center justify-center gap-2 mt-1">
              <span className="material-symbols-outlined">add_circle</span>
              <span className="font-title-md text-[16px]">Add New Payment Method</span>
            </button>
          </div>
        </section>

        {/* Danger Zone */}
        <section className="mt-4 flex flex-col gap-3">
          <button 
            className="w-full py-4 rounded-xl bg-white/[0.03] border border-[#ffb4ab]/20 text-[#ffb4ab] hover:bg-[#ffb4ab]/10 transition-all font-title-md text-[16px]"
            onClick={() => router.push("/")}
          >
            Sign Out
          </button>
          <button className="w-full py-4 rounded-xl bg-white/[0.03] border border-transparent text-[#ffb4ab]/70 hover:bg-[#ffb4ab]/10 hover:text-[#ffb4ab] hover:border-[#ffb4ab]/20 transition-all font-title-md text-[16px]" onClick={() => router.push("/")}>
            Delete Account
          </button>
        </section>

      </main>

      {/* Bottom Nav Bar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 w-full z-50 flex justify-around items-center px-4 py-3 bg-surface/80 backdrop-blur-2xl rounded-t-xl border-t border-white/10 shadow-2xl">
        <a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors" onClick={() => router.push("/dashboard")}>
          <span className="material-symbols-outlined mb-1">chat_bubble</span>
          <span className="font-label-caps text-[10px] font-semibold tracking-wider">Vents</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors" onClick={() => router.push("/wallet")}>
          <span className="material-symbols-outlined mb-1">account_balance_wallet</span>
          <span className="font-label-caps text-[10px] font-semibold tracking-wider">Wallet</span>
        </a>
        <a className="flex flex-col items-center justify-center text-secondary bg-secondary-container/20 rounded-xl px-3 py-1">
          <span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
          <span className="font-label-caps text-[10px] font-semibold tracking-wider">Profile</span>
        </a>
      </nav>
    </div>
  );
}
