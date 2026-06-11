"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function Chat() {
  const router = useRouter();
  const chatContainerRef = useRef(null);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "listener",
      text: "Hi there. I saw your post. I'm here to listen if you want to talk about it.",
      time: "10:42 PM",
    },
    {
      id: 2,
      sender: "me",
      text: "Thanks for reaching out. I just feel incredibly overwhelmed with work right now. It feels like no matter how much I do, it's never enough.",
      time: "10:44 PM",
    },
    {
      id: 3,
      sender: "listener",
      text: "That sounds exhausting. It's really hard when you're putting in so much effort and not feeling recognized or feeling like the finish line keeps moving. Are you taking any breaks?",
      time: "10:45 PM",
    },
    {
      id: 4,
      sender: "me",
      text: "Barely. Even when I try to disconnect, I'm just thinking about what I have to do tomorrow. It's affecting my sleep.",
      time: "10:47 PM",
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isListenerTyping, setIsListenerTyping] = useState(true);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isListenerTyping]);

  const handleSend = () => {
    if (!inputText.trim()) return;
    
    const newMessage = {
      id: Date.now(),
      sender: "me",
      text: inputText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, newMessage]);
    setInputText("");
    setIsListenerTyping(true);
    
    // Mock response after a delay
    setTimeout(() => {
      setIsListenerTyping(false);
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        sender: "listener",
        text: "I hear you. Lack of sleep definitely makes the overwhelm worse. Have you considered talking to your manager about the workload?",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    }, 4000);
  };

  return (
    <div className="bg-background text-on-surface font-body-lg h-screen overflow-hidden flex flex-col relative">
      <style dangerouslySetInnerHTML={{ __html: `
        .glow-emerald { box-shadow: 0 0 20px rgba(78, 222, 163, 0.15); }
        .typing-dot { animation: typing 1.4s infinite ease-in-out both; }
        .typing-dot:nth-child(1) { animation-delay: -0.32s; }
        .typing-dot:nth-child(2) { animation-delay: -0.16s; }
        @keyframes typing {
            0%, 80%, 100% { transform: scale(0); opacity: 0.5; }
            40% { transform: scale(1); opacity: 1; }
        }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.1); border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.2); }
      `}} />

      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-white/10">
        <div className="flex justify-between items-center px-6 h-16 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-4 cursor-pointer active:scale-95 transition-transform hover:opacity-80" onClick={() => router.push("/dashboard")}>
            <span className="material-symbols-outlined text-primary">bubble_chart</span>
            <span className="font-headline-lg text-headline-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Vently</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary-container/20 border border-secondary/30">
              <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
            </div>
            <button className="hidden md:flex items-center gap-1 text-error hover:opacity-80 transition-opacity ml-4 bg-error-container/20 px-3 py-1 rounded-full border border-error/30" onClick={() => router.push("/rating")}>
              <span className="font-label-caps text-[10px]">End Session</span>
            </button>
            <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:opacity-80 transition-opacity ml-2 md:ml-4 bg-white/5 rounded-full p-1" onClick={() => router.push("/rating")}>close</span>
          </div>
        </div>
      </header>

      {/* Main Chat Canvas */}
      <main className="flex-grow flex flex-col max-w-3xl w-full mx-auto mt-16 pb-24 relative h-[calc(100vh-4rem)]">
        
        {/* Chat History Scrollable Area */}
        <div className="flex-grow overflow-y-auto px-4 md:px-gutter py-8 space-y-6 flex flex-col" ref={chatContainerRef}>
          
          {/* System/Time Marker */}
          <div className="flex justify-center w-full">
            <span className="font-label-caps text-label-caps text-on-surface-variant/50 bg-surface-container/50 px-3 py-1 rounded-full border border-white/5">Today, 10:42 PM</span>
          </div>

          {messages.map((msg) => (
            msg.sender === "listener" ? (
              <div key={msg.id} className="flex w-full justify-start pr-12">
                <div className="flex gap-3 max-w-[85%]">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary-container/20 border border-secondary/30 flex items-center justify-center mt-1">
                    <span className="material-symbols-outlined text-secondary text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
                  </div>
                  <div className="glass-card glow-emerald rounded-2xl rounded-tl-sm p-4 text-on-surface font-body-lg">
                    <p>{msg.text}</p>
                    <div className="text-[10px] text-on-surface-variant/50 text-right mt-2">{msg.time}</div>
                  </div>
                </div>
              </div>
            ) : (
              <div key={msg.id} className="flex w-full justify-end pl-12">
                <div className="glass-card border-primary/20 bg-primary-container/10 rounded-2xl rounded-tr-sm p-4 text-on-surface font-body-lg max-w-[85%]">
                  <p>{msg.text}</p>
                  <div className="flex justify-end items-center gap-1 mt-2">
                    <span className="text-[10px] text-on-surface-variant/50">{msg.time}</span>
                    <span className="material-symbols-outlined text-[14px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>done_all</span>
                  </div>
                </div>
              </div>
            )
          ))}

          {/* Typing Indicator */}
          {isListenerTyping && (
            <div className="flex w-full justify-start pr-12">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary-container/10 border border-secondary/20 flex items-center justify-center mt-1 opacity-50">
                  <span className="material-symbols-outlined text-secondary text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
                </div>
                <div className="glass-card rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-2">
                  <span className="font-body-sm text-body-sm text-on-surface-variant italic">Someone is listening</span>
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary typing-dot"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary typing-dot"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary typing-dot"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div className="h-4"></div>
        </div>

        {/* Input Area */}
        <div className="absolute bottom-0 w-full p-4 md:p-6 bg-gradient-to-t from-background via-background/90 to-transparent">
          <div className="max-w-3xl mx-auto glass-card rounded-xl p-2 flex items-end gap-2 focus-within:border-primary/50 transition-colors duration-300 relative overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-secondary/10 blur-xl opacity-50 pointer-events-none"></div>
            <button className="p-2 text-on-surface-variant hover:text-primary transition-colors flex-shrink-0 z-10">
              <span className="material-symbols-outlined">add_circle</span>
            </button>
            <textarea 
              className="w-full bg-transparent border-none text-on-surface placeholder:text-on-surface-variant/50 focus:ring-0 resize-none font-body-lg text-body-lg py-2 max-h-32 min-h-[40px] z-10 outline-none" 
              placeholder="Express yourself safely..." 
              rows={1}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => {
                if(e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
            ></textarea>
            <button 
              className="p-2 rounded-lg bg-gradient-to-br from-primary to-primary-container text-white hover:opacity-90 transition-opacity flex-shrink-0 z-10 shadow-[0_0_15px_rgba(223,183,255,0.3)]"
              onClick={handleSend}
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
