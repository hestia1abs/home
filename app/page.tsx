'use client'

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, } from "framer-motion";
import { Background } from "./components/Background";
import { MenuOverlay, MenuOverlayRef } from "./components/MenuOverlay";
import { useToast } from "./components/use-toast";


const COMMANDS = {
  curl: "curl -fsSL https://hestialabs.in/install.sh | bash",
  bun: "sudo bun i -g hxtp",
  pnpm: "sudo pnpm i -g hxtp",
  npm: "sudo npm i -g hxtp"
};

type Tab = keyof typeof COMMANDS;

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("curl");
  const menuOverlayRef = useRef<MenuOverlayRef>(null);
  const { toast } = useToast();

  const openMenu = () => {
    menuOverlayRef.current?.open();
    setIsMenuOpen(true);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(COMMANDS[activeTab]);
    toast({
      title: "Command Copied",
    });
  };

  return (
    <main className="relative w-full h-screen overflow-hidden bg-black font-sans text-white selection:bg-sky-500/30">
      <Background />

      {/* Frame (Header/Nav) */}
      <div className={`frame fixed inset-0 z-50 grid p-6 sm:p-12 pointer-events-none transition-opacity duration-700 ${isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="flex justify-between items-start w-full">
          <div className="pointer-events-auto text-sm font-bold tracking-[0.3em] opacity-70 hover:opacity-100 transition-all duration-300">
            <Link href="/" className="bg-linear-to-r from-sky-400 to-white bg-clip-text text-transparent">HESTIA LABS</Link>
          </div>

          <div className="pointer-events-auto">
            <button
              onClick={openMenu}
              className="group flex flex-col items-center justify-center p-2 hover:bg-white/5 rounded-full transition-all"
              aria-label="Open menu"
            >
              <Image src="/menu.svg" alt="Menu" className="w-auto h-auto invert" width={32} height={32} unoptimized />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className={`content relative z-10 flex flex-col items-center justify-start pt-[18vh] sm:pt-[20vh] h-full transition-all duration-1000 ${isMenuOpen ? 'scale-95 blur-2xl' : 'scale-100'}`}>
        <div className="text-center w-full max-w-6xl px-4 sm:px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[7vw] leading-[0.9] font-black tracking-tighter mb-4 pointer-events-auto uppercase font-mono bg-linear-to-r from-sky-400 to-white bg-clip-text text-transparent"
          >
            Hestia X-change Transfer Protocol
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1, duration: 1.5 }}
            className="font-mono text-[10px] sm:text-[12px] text-sky-400/80 mt-6 uppercase tracking-[0.5em] font-bold pointer-events-auto"
          >
            The physical world is not a cloud service.
          </motion.h2>

          {/* CLI Installer Section (Tabbed, No Cards) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-16 sm:mt-32 pointer-events-auto w-full max-w-2xl mx-auto"
          >
            {/* Tabs Header */}
            <div className="flex border-b border-white/10 mb-6 sm:mb-8">
              {(Object.keys(COMMANDS) as Tab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 sm:px-6 py-3 text-[10px] uppercase tracking-widest transition-all relative rounded-sm hover:bg-white/5 ${activeTab === tab ? 'text-sky-400 font-bold' : 'text-white/40 hover:text-white'}`}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-1px bg-sky-400"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Command Display */}
            <div className="relative group">
              <div
                onClick={copyToClipboard}
                className="font-mono text-xs sm:text-base leading-relaxed p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all cursor-pointer flex items-center justify-between gap-4 group/cmd border border-white/5 hover:border-white/10"
              >
                <span className="opacity-80 group-hover/cmd:opacity-100 transition-opacity break-all sm:break-normal">
                  {COMMANDS[activeTab]}
                </span>
                <div className="flex-none flex items-center gap-2 opacity-40 group-hover/cmd:opacity-80 transition-opacity">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" ry="1" /></svg>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Footer Links */}
          <div className="mt-8 sm:mt-12 flex items-center justify-center gap-4 text-[10px] uppercase tracking-[0.3em] text-white/20 pointer-events-auto">
            <a href="/terms" className="hover:text-white/60 transition-colors">Terms</a>
            <span>·</span>
            <a href="/privacy" className="hover:text-white/60 transition-colors">Privacy</a>
          </div>
        </div>
      </div>

      <MenuOverlay
        ref={menuOverlayRef}
        onCloseComplete={() => setIsMenuOpen(false)}
      />
    </main>
  );
}
