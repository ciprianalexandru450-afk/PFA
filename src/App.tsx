import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Facebook, Instagram, Linkedin, ArrowLeft, Target, TrendingUp, Filter, Zap, BrainCircuit, Annoyed, BarChart, Globe, ClipboardCheck, Sparkles, Camera, LayoutGrid, Share2, Palette, Gauge, Smartphone, Bot, MessageSquare, BarChart3, Lightbulb, MapPin, Mail, Phone, Building2, FileText, Folder } from 'lucide-react';

// --- Component: Header --- //
const Header = ({ setView }: { setView: (view: string) => void }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="px-4 py-4 md:px-8 md:py-5 border-b border-white/5 bg-brand-bg/70 backdrop-blur-xl sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.h2 
          whileHover={{ scale: 1.02 }}
          className="font-serif text-2xl font-bold cursor-pointer text-white tracking-tight" 
          onClick={() => setView('home')}
        >
          DigitalBloom
        </motion.h2>
        <nav className="flex items-center space-x-8">
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-1.5 text-slate-300 hover:text-brand-accent transition-colors focus:outline-none text-sm font-medium tracking-wide"
            >
              <span>Servicii</span>
              <ChevronDown size={14} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full right-0 mt-4 w-56 glass-panel rounded-xl overflow-hidden z-50"
                >
                  <div className="py-2">
                    <a href="#" onClick={(e) => { e.preventDefault(); setView('ads'); setIsDropdownOpen(false); }} className="block px-5 py-3 text-sm text-slate-300 hover:bg-white/10 hover:text-brand-accent transition-colors">Ads Manager</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); setView('social'); setIsDropdownOpen(false); }} className="block px-5 py-3 text-sm text-slate-300 hover:bg-white/10 hover:text-brand-accent transition-colors">Social Media</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); setView('website'); setIsDropdownOpen(false); }} className="block px-5 py-3 text-sm text-slate-300 hover:bg-white/10 hover:text-brand-accent transition-colors">Creare Website</a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <a href="#ai-automation" className="text-slate-300 hover:text-brand-accent transition-colors text-sm font-medium tracking-wide">Automatizare AI</a>
          <a href="#contact" className="btn-premium text-sm">Contact</a>
        </nav>
      </div>
    </header>
  );
};

// --- Component: Hero --- //
const Hero = () => (
  <section className="relative px-4 py-24 md:py-32 text-center overflow-hidden">
    {/* Radial lighting effect */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(0,209,255,0.08)_0%,transparent_70%)] pointer-events-none" />
    
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative z-10"
    >
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] font-serif bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 max-w-5xl mx-auto">
        Propulsăm Afacerea Ta în Era Digitală
      </h1>
      <p className="mt-8 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
        De la strategie și creație, la campanii de impact și website-uri performante, suntem partenerul tău pentru succes online.
      </p>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-12"
      >
        <a href="#about" className="btn-premium shadow-[0_0_30px_rgba(0,209,255,0.2)]">Află Mai Multe</a>
      </motion.div>
    </motion.div>
  </section>
);

// --- Component: AgencyPresentation --- //
const AgencyPresentation = () => (
  <section id="about" className="section-spacing px-4 md:px-8 bg-brand-bg">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Mai mult decât o agenție. <br/>
            <span className="text-brand-accent italic font-medium">Partenerul tău de creștere.</span>
          </h2>
          <p className="text-lg text-slate-400 font-light leading-relaxed tracking-wide">
            Nu credem în soluții predefinite. Construim strategii digitale personalizate, de la arhitectura website-ului până la campanii de Ads care scalează profitul. Combinăm analiza datelor cu creativitatea pură pentru a-ți transforma vizitatorii în clienți fideli.
          </p>
          
          <div className="p-8 rounded-2xl border border-white/10 glass-panel relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-brand-accent" />
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-xl bg-brand-accent/10 text-brand-accent">
                <Camera size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Producție Video & Conținut On-Site</h3>
                <p className="text-slate-400 font-light leading-relaxed text-sm">
                  Nu facem marketing doar din spatele ecranului. Ne deplasăm direct la locația afacerii tale pentru filmări profesionale, ședințe foto și creare de conținut adaptat pentru TikTok, Reels și YouTube. Serviciu disponibil în Iași și zonele limitrofe.
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl border border-white/10 glass-panel relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-brand-accent" />
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-xl bg-brand-accent/10 text-brand-accent">
                <Palette size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Design Grafic & Materiale Printabile</h3>
                <p className="text-slate-400 font-light leading-relaxed text-sm">
                  Brandul tău trebuie să arate impecabil atât online, cât și offline. Creăm identități vizuale coerente: de la cărți de vizită memorabile și bannere stradale, până la materiale promoționale care atrag atenția. Transformăm viziunea ta în realitate fizică, garantând calitate superioară și un impact vizual puternic.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex items-center h-full"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-premium group w-full h-full">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000" 
              alt="Creative workspace and video production" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/40 to-transparent" />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-accent/10 blur-3xl rounded-full" />
        </motion.div>
      </div>
    </div>
  </section>
);

// --- Component: BrandPhilosophy --- //
const BrandPhilosophy = () => (
  <section className="py-24 px-4 md:px-8 bg-brand-bg relative overflow-hidden">
    <div className="max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight font-serif">
          Nu doar trafic. Rezultate reale.
        </h2>
        <p className="text-xl text-slate-400 font-light leading-relaxed tracking-wide max-w-3xl mx-auto mb-10">
          Marketing-ul digital nu este despre a fi vizibil peste tot, ci despre a fi prezent acolo unde contează. Construim strategii care conectează brandul tău cu oamenii care au nevoie de el, transformând click-urile în relații durabile și profit.
        </p>
        <div className="w-24 h-1 bg-brand-accent mx-auto rounded-full" />
      </motion.div>
    </div>
  </section>
);

// --- Component: AIAutomation --- //
const AIAutomation = () => {
  const pillars = [
    {
      icon: <Bot size={28} />,
      title: "Automatizarea Sarcinilor",
      description: "Elimină munca manuală repetitivă și alocă resursele umane acolo unde contează cu adevărat."
    },
    {
      icon: <MessageSquare size={28} />,
      title: "Chatboți Inteligenți",
      description: "Răspunde instantaneu clienților 24/7 și crește rata de conversie prin interacțiuni personalizate."
    },
    {
      icon: <BarChart3 size={28} />,
      title: "Analiză Predictivă",
      description: "Folosește AI pentru a prognoza tendințele pieței și pentru a lua decizii de business bazate pe date concrete."
    },
    {
      icon: <Lightbulb size={28} />,
      title: "Automatizări Personalizate",
      description: "Nu știi de unde să începi? Oferim consultanță pentru a identifica și implementa soluții de automatizare unice, adaptate nevoilor specifice afacerii tale."
    }
  ];

  return (
    <section id="ai-automation" className="section-spacing px-4 md:px-8 bg-brand-bg border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-serif">
            Eficiență Digitală prin Inteligență Artificială
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-10 rounded-3xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-all duration-300 group"
            >
              <div className="mb-6 p-4 w-fit rounded-2xl bg-brand-accent/10 text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{pillar.title}</h3>
              <p className="text-slate-400 font-light leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Component: Contact --- //
const Contact = () => (
  <section id="contact" className="section-spacing px-4 md:px-8 bg-brand-bg border-t border-white/5">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-center">
        {/* Left Side: Text & Data */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tight font-serif leading-tight text-white">
              Hai să discutăm <br/>proiectul tău.
            </h2>
            <p className="text-xl text-slate-400 font-light leading-relaxed tracking-wide max-w-xl">
              Ai o idee sau vrei să îți creștem afacerea? Completează formularul și te contactăm în maxim 24 de ore pentru o discuție preliminară.
            </p>
          </div>

          <div className="space-y-8">
            {/* Contact Info */}
            <div className="space-y-5">
              <div className="flex items-center space-x-4 group">
                <div className="p-3 rounded-xl bg-brand-accent/10 text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                  <MapPin size={20} />
                </div>
                <span className="text-lg text-slate-300 font-light tracking-wide">Iași, România</span>
              </div>
              
              <div className="flex items-center space-x-4 group">
                <div className="p-3 rounded-xl bg-brand-accent/10 text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                  <Mail size={20} />
                </div>
                <a href="mailto:contact@digitalbloom.ro" className="text-lg text-slate-300 font-light tracking-wide hover:text-brand-accent transition-colors">
                  contact@digitalbloom.ro
                </a>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="p-3 rounded-xl bg-brand-accent/10 text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                  <Phone size={20} />
                </div>
                <a href="tel:+40700000000" className="text-lg text-slate-300 font-light tracking-wide hover:text-brand-accent transition-colors">
                  +40 700 000 000
                </a>
              </div>
            </div>

            {/* Legal Info */}
            <div className="pt-8 border-t border-white/5 space-y-3">
              <div className="flex items-center space-x-3 text-slate-500 text-sm font-light">
                <Building2 size={16} className="opacity-70" />
                <span>Digital Bloom Agency S.R.L.</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-500 text-sm font-light">
                <FileText size={16} className="opacity-70" />
                <span>CUI: RO12345678</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-500 text-sm font-light">
                <Folder size={16} className="opacity-70" />
                <span>Nr. Reg. Com.: J22/1234/2026</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-8 md:p-12 rounded-3xl self-center"
        >
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-xs font-semibold text-slate-500 uppercase tracking-widest">Nume</label>
                <input type="text" id="name" name="name" className="w-full px-0 py-3 bg-transparent border-b border-white/10 text-white focus:outline-none focus:border-brand-accent transition-colors placeholder:text-slate-700" placeholder="Numele tău" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-xs font-semibold text-slate-500 uppercase tracking-widest">Email</label>
                <input type="email" id="email" name="email" className="w-full px-0 py-3 bg-transparent border-b border-white/10 text-white focus:outline-none focus:border-brand-accent transition-colors placeholder:text-slate-700" placeholder="email@exemplu.ro" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="block text-xs font-semibold text-slate-500 uppercase tracking-widest">Mesaj</label>
              <textarea id="message" name="message" rows={4} className="w-full px-0 py-3 bg-transparent border-b border-white/10 text-white focus:outline-none focus:border-brand-accent transition-colors resize-none placeholder:text-slate-700" placeholder="Cum te putem ajuta?"></textarea>
            </div>
            <div className="pt-4 text-center">
              <button type="submit" className="btn-premium w-full md:w-auto min-w-[240px]">Trimite Mesajul</button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  </section>
);

// --- Component: Footer --- //
const Footer = () => (
  <footer className="px-4 py-12 md:px-8 md:py-16 bg-brand-bg border-t border-white/5">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
      <div className="text-center md:text-left">
        <h3 className="font-serif text-2xl font-bold text-white mb-2">DigitalBloom</h3>
        <p className="text-slate-500 text-sm font-light tracking-wide">&copy; {new Date().getFullYear()} DigitalBloom. Toate drepturile rezervate.</p>
      </div>
      <div className="flex space-x-6">
        {[
          { icon: <Facebook size={20} />, href: "#" },
          { icon: <Instagram size={20} />, href: "#" },
          { icon: <Linkedin size={20} />, href: "#" }
        ].map((social, i) => (
          <motion.a 
            key={i}
            href={social.href} 
            whileHover={{ y: -3, color: "#00D1FF" }}
            className="text-slate-500 transition-colors"
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
    </div>
  </footer>
);

// --- Page: HomePage --- //
const HomePage = ({ setView }: { setView: (view: string) => void }) => (
  <>
    <Header setView={setView} />
    <main>
      <Hero />
      <AgencyPresentation />
      <BrandPhilosophy />
      <AIAutomation />
      <Contact />
    </main>
    <Footer />
  </>
);

// --- Page: AdsManagerPage --- //
const AdsManagerPage = ({ setView }: { setView: (view: string) => void }) => (
  <div className="min-h-screen bg-brand-bg text-slate-300 font-sans">
    <header className="p-6 sticky top-0 bg-brand-bg/70 backdrop-blur-xl z-50 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <button onClick={() => setView('home')} className="flex items-center space-x-2 text-slate-400 hover:text-brand-accent transition-colors group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Înapoi la pagina principală</span>
        </button>
      </div>
    </header>
    <main>
      <section className="relative text-center px-4 py-24 sm:py-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(0,209,255,0.05)_0%,transparent_70%)] pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-serif bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 tracking-tight leading-tight">
            Management Anunțuri. <br/>Performanță Maximă.
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-slate-400 font-light leading-relaxed tracking-wide">
            Transformăm bugetele de publicitate în rezultate măsurabile. Atinge-ți audiența ideală și domină piața cu strategii de ads create pentru a converti.
          </p>
        </motion.div>
      </section>

      <section className="section-spacing px-4 md:px-8">
        <div className="max-w-7xl mx-auto space-y-24">
          {/* Meta & Google Ads */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-stretch"
          >
            <div className="glass-panel p-10 md:p-12 rounded-3xl flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">Meta & Google Ads</h2>
              <p className="text-slate-400 font-light leading-relaxed mb-8">De la notorietate la conversie, acoperim cele mai importante platforme. Creăm campanii personalizate care aduc clienți, nu doar click-uri.</p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-brand-accent/10">
                    <Target className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Targetare Avansată</h3>
                    <p className="text-sm text-slate-500 font-light">Identificăm și atragem exact publicul de care ai nevoie.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-brand-accent/10">
                    <TrendingUp className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Maximizare ROI</h3>
                    <p className="text-sm text-slate-500 font-light">Optimizăm fiecare aspect al campaniilor pentru cel mai bun randament.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-3xl">
              <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1920&auto=format&fit=crop" alt="Ads strategy team" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>

          {/* TikTok Ads */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-stretch"
          >
            <div className="relative group overflow-hidden rounded-3xl md:order-2">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" alt="TikTok Ads content" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="glass-panel p-10 md:p-12 rounded-3xl flex flex-col justify-center md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">TikTok Ads</h2>
              <p className="text-slate-400 font-light leading-relaxed mb-8">Expertiză în ecosistemul TikTok. Ne concentrăm pe strategii de content nativ și campanii de tip Spark Ads care capitalizează pe trendurile actuale. Transformăm limbajul specific platformei în rezultate măsurabile de business prin targetare comportamentală avansată.</p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-brand-accent/10">
                    <ClipboardCheck className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Pixel TikTok & Conversii</h3>
                    <p className="text-sm text-slate-500 font-light">Implementăm Pixelul TikTok și monitorizăm evenimentele de conversie pentru a măsura cu precizie impactul campaniilor.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-brand-accent/10">
                    <Sparkles className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Spark Ads & Content Nativ</h3>
                    <p className="text-sm text-slate-500 font-light">Capitalizăm pe trenduri cu Spark Ads și conținut care se simte nativ pe platformă, generând engagement autentic.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing px-4 md:px-8 bg-brand-bg/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Procesul Nostru</h2>
            <p className="text-slate-500 font-light tracking-wide">Claritate și eficiență în fiecare etapă.</p>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { icon: <BrainCircuit size={32} />, step: "1. Strategie", desc: "Analizăm piața și obiectivele pentru a crea un plan de acțiune." },
              { icon: <Zap size={32} />, step: "2. Implementare", desc: "Lansăm campaniile și monitorizăm performanța inițială." },
              { icon: <Filter size={32} />, step: "3. Optimizare", desc: "Ajustăm constant campaniile pentru a îmbunătăți rezultatele." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-10 rounded-3xl text-center group hover:-translate-y-2 transition-all duration-300"
              >
                <div className="mb-6 p-4 w-fit mx-auto rounded-2xl bg-white/5 text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{item.step}</h3>
                <p className="text-slate-400 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

// --- Page: SocialMediaPage --- //
const SocialMediaPage = ({ setView }: { setView: (view: string) => void }) => (
  <div className="min-h-screen bg-brand-bg text-slate-300 font-sans">
    <header className="p-6 sticky top-0 bg-brand-bg/70 backdrop-blur-xl z-50 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <button onClick={() => setView('home')} className="flex items-center space-x-2 text-slate-400 hover:text-brand-accent transition-colors group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Înapoi la pagina principală</span>
        </button>
      </div>
    </header>
    <main>
      <section className="relative text-center px-4 py-24 sm:py-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(0,209,255,0.05)_0%,transparent_70%)] pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-serif bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 tracking-tight leading-tight">
            Social Media <br/>Content & Strategy
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-slate-400 font-light leading-relaxed tracking-wide">
            Creăm conținut care captivează și construiește comunități. De la producție video la strategie vizuală, suntem partenerul tău creativ.
          </p>
        </motion.div>
      </section>

      <section className="section-spacing px-4 md:px-8">
        <div className="max-w-7xl mx-auto space-y-24">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-stretch"
          >
            <div className="glass-panel p-10 md:p-12 rounded-3xl flex flex-col justify-center">
              <div className="p-3 w-fit rounded-lg bg-brand-accent/10 mb-6">
                <Camera size={28} className="text-brand-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">Content Creation & Video Production</h2>
              <p className="text-slate-400 font-light leading-relaxed">Descrie procesul de filmare la nevoie și editare profesională pentru YouTube (Long & Shorts), TikTok, și Reels (FB/IG).</p>
            </div>
            <div className="relative group overflow-hidden rounded-3xl">
              <img src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=1000" alt="Professional video editing and production" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-stretch"
          >
            <div className="relative group overflow-hidden rounded-3xl md:order-2">
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000" alt="Digital marketing strategy and planning" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="glass-panel p-10 md:p-12 rounded-3xl flex flex-col justify-center md:order-1">
              <div className="p-3 w-fit rounded-lg bg-brand-accent/10 mb-6">
                <LayoutGrid size={28} className="text-brand-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">Strategie Vizuală</h2>
              <p className="text-slate-400 font-light leading-relaxed mb-8">Planificarea postărilor pentru a menține o estetică unitară a brandului pe toate platformele.</p>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                <h3 className="font-semibold text-white flex items-center mb-2">
                  <Share2 size={18} className="mr-2 text-brand-accent"/> Platforme
                </h3>
                <p className="text-sm text-slate-500 font-light leading-relaxed">Adaptăm formatele pentru Facebook, Instagram, TikTok și YouTube, asigurând relevanță și impact maxim.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

// --- Page: WebsitePage --- //
const WebsitePage = ({ setView }: { setView: (view: string) => void }) => (
  <div className="min-h-screen bg-brand-bg text-slate-300 font-sans">
    <header className="p-6 sticky top-0 bg-brand-bg/70 backdrop-blur-xl z-50 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <button onClick={() => setView('home')} className="flex items-center space-x-2 text-slate-400 hover:text-brand-accent transition-colors group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Înapoi la pagina principală</span>
        </button>
      </div>
    </header>
    <main>
      <section className="relative text-center px-4 py-24 sm:py-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(0,209,255,0.05)_0%,transparent_70%)] pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-serif bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 tracking-tight leading-tight">
            Web Design & <br/>Development Performance
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-slate-400 font-light leading-relaxed tracking-wide">
            Construim prezența ta digitală cu focus pe estetică și performanță tehnică. Site-uri care nu doar arată bine, ci și convertesc.
          </p>
        </motion.div>
      </section>

      <section className="section-spacing px-4 md:px-8">
        <div className="max-w-7xl mx-auto space-y-24">
          {/* Custom Design & UI/UX */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-stretch"
          >
            <div className="glass-panel p-10 md:p-12 rounded-3xl flex flex-col justify-center">
              <div className="p-3 w-fit rounded-lg bg-brand-accent/10 mb-6">
                <Palette size={28} className="text-brand-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">Custom Design & UI/UX</h2>
              <p className="text-slate-400 font-light leading-relaxed">Creăm layout-uri moderne, intuitive și personalizate pe brandul tău. Ne asigurăm că fiecare interacțiune a utilizatorului este fluidă și plăcută.</p>
            </div>
            <div className="relative group overflow-hidden rounded-3xl">
              <img src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1000" alt="Custom UI/UX Design" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>

          {/* Performance & Speed */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-stretch"
          >
            <div className="relative group overflow-hidden rounded-3xl md:order-2">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" alt="Website Performance" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="glass-panel p-10 md:p-12 rounded-3xl flex flex-col justify-center md:order-1">
              <div className="p-3 w-fit rounded-lg bg-brand-accent/10 mb-6">
                <Gauge size={28} className="text-brand-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">Performance & Speed</h2>
              <p className="text-slate-400 font-light leading-relaxed">Focus pe viteza de încărcare, optimizarea codului și SEO tehnic. Un site rapid este esențial pentru a converti vizitatorii în clienți fideli.</p>
            </div>
          </motion.div>

          {/* Responsive & Mobile First */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-stretch"
          >
            <div className="glass-panel p-10 md:p-12 rounded-3xl flex flex-col justify-center">
              <div className="p-3 w-fit rounded-lg bg-brand-accent/10 mb-6">
                <Smartphone size={28} className="text-brand-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">Responsive & Mobile First</h2>
              <p className="text-slate-400 font-light leading-relaxed">Site-urile noastre sunt optimizate perfect pentru orice dispozitiv. Indiferent dacă este Telefon, Tabletă sau Desktop, experiența rămâne impecabilă.</p>
            </div>
            <div className="relative group overflow-hidden rounded-3xl">
              <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1000" alt="Responsive Web Design" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

// --- Main App Component --- //
export default function App() {
  const [view, setView] = useState('home');

  const renderView = () => {
    switch (view) {
      case 'ads':
        return <AdsManagerPage setView={setView} />;
      case 'social':
        return <SocialMediaPage setView={setView} />;
      case 'website':
        return <WebsitePage setView={setView} />;
      case 'home':
      default:
        return <HomePage setView={setView} />;
    }
  }

  return (
    <div className="min-h-screen bg-brand-bg text-slate-300 font-sans selection:bg-brand-accent/30 selection:text-white">
      {renderView()}
    </div>
  );
}
