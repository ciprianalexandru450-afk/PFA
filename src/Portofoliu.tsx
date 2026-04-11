import React from 'react';
import { motion } from 'motion/react';
import { Smartphone } from 'lucide-react';
import { Header, Footer, Background, useScrollReveal } from './App';

const PortofoliuPage = ({ setView }: { setView: (view: string) => void }) => {
  useScrollReveal('portfolio');

  return (
    <div className="min-h-screen text-slate-300 font-sans relative">
      <Background />
      <Header setView={setView} currentView="portfolio" />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative px-4 pt-48 pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-24"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-serif bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 tracking-tight leading-tight">
                Proiecte Recente
              </h1>
              <p className="mt-8 max-w-2xl mx-auto text-xl md:text-2xl text-slate-400 font-light tracking-wide leading-relaxed">
                Nu vindem servicii, livrăm rezultate tangibile. Descoperă cum am transformat viziunile clienților noștri în realitate digitală.
              </p>
            </motion.div>

            <div className="space-y-48">
              {/* Project 1: AccesLimo */}
              <div className="grid md:grid-cols-12 gap-12 lg:gap-24 items-center reveal">
                <div className="md:col-span-5 space-y-8 order-1">
                  <div className="inline-block px-4 py-1 rounded-full border border-[#00f2fe]/20 text-[#00f2fe] text-xs font-medium tracking-widest uppercase">
                    DEZVOLTARE WEB
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold text-white font-serif tracking-tight">
                    AccesLimo – Prezență Digitală Premium
                  </h3>
                  <p className="text-lg text-slate-400 font-light leading-relaxed">
                    Proiectare și dezvoltare completă a platformei <a href="https://www.google.com/search?q=acceslimo.com" target="_blank" rel="noopener noreferrer" className="text-[#00f2fe] hover:underline">acceslimo.com</a>. Un design minimalist, orientat spre conversie, cu focus pe viteză de încărcare și o experiență de rezervare fluidă pe mobil.
                  </p>
                  <div className="w-24 h-[1px] bg-gradient-to-r from-[#00f2fe] to-transparent" />
                </div>

                <div className="md:col-span-7 order-2">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#00f2fe]/20 to-transparent rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative aspect-[16/10] border border-white/10 rounded-[2rem] bg-black/20 backdrop-blur-sm overflow-hidden flex items-center justify-center p-8">
                      <div className="w-full h-full border border-white/5 rounded-xl bg-white/5 flex items-center justify-center">
                        <img src="https://i.ibb.co/xqMr90PB/Screenshot-2026-04-11-13-49-52-842-com-android-chrome-edit.jpg" alt="AccesLimo Portfolio" className="w-full h-full object-cover object-top rounded-xl" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project 2: NUTRICIONE Romania */}
              <div className="grid md:grid-cols-12 gap-12 lg:gap-24 items-center reveal">
                <div className="md:col-span-5 space-y-8 order-1 md:order-2">
                  <div className="inline-block px-4 py-1 rounded-full border border-[#4facfe]/20 text-[#4facfe] text-xs font-medium tracking-widest uppercase">
                    CONTENT & ADS MANAGER
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold text-white font-serif tracking-tight">
                    NUTRICIONE – Scalare Full-Stack
                  </h3>
                  <p className="text-lg text-slate-400 font-light leading-relaxed">
                    O preluare End-to-End a ecosistemului de marketing: de la filmarea și editarea materialelor video (TikTok/Reels), până la arhitectura și administrarea bugetelor de Meta & TikTok Ads pentru maximizarea ROAS-ului.
                  </p>
                  <div className="w-24 h-[1px] bg-gradient-to-r from-[#4facfe] to-transparent" />
                </div>

                <div className="md:col-span-7 order-2 md:order-1">
                  <div className="relative group flex justify-center">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#4facfe]/20 to-transparent rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative w-full max-w-sm aspect-[9/16] border border-white/10 rounded-[3rem] bg-black/20 backdrop-blur-sm overflow-hidden flex items-center justify-center p-6">
                      <div className="w-full h-full border border-white/5 rounded-[2rem] bg-white/5 flex items-center justify-center">
                        <Smartphone size={64} className="text-white/10" />
                        <p className="absolute text-xs font-mono text-white/20 tracking-widest uppercase rotate-90">Mobile/Ads Placeholder</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer setView={setView} />
    </div>
  );
};

export default PortofoliuPage;
