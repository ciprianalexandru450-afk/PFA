import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Facebook, Instagram, Linkedin, ArrowLeft, Target, TrendingUp, Filter, Zap, BrainCircuit, Annoyed, BarChart, Globe, ClipboardCheck, Sparkles, Camera, LayoutGrid, Share2, Palette, Gauge, Smartphone } from 'lucide-react';

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
    <header className="px-4 py-4 md:px-8 md:py-6 border-b border-slate-700 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h2 className="font-bold text-lg cursor-pointer" onClick={() => setView('home')}>DigitalBloom</h2>
        <nav className="flex items-center space-x-6">
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-1 text-slate-200 hover:text-sky-400 transition-colors focus:outline-none"
            >
              <span>Servicii</span>
              <ChevronDown size={16} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-slate-800 border border-slate-700 rounded-md shadow-lg z-10">
                <a href="#" onClick={(e) => { e.preventDefault(); setView('ads'); setIsDropdownOpen(false); }} className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 transition-colors">Ads Manager</a>
                <a href="#" onClick={(e) => { e.preventDefault(); setView('social'); setIsDropdownOpen(false); }} className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 transition-colors">Social Media</a>
                <a href="#" onClick={(e) => { e.preventDefault(); setView('website'); setIsDropdownOpen(false); }} className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 transition-colors">Creare Website</a>
              </div>
            )}
          </div>
          <a href="#contact" className="bg-sky-400 text-slate-900 px-4 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
};

// --- Component: Hero --- //
const Hero = () => (
  <section className="px-4 py-16 md:px-8 md:py-24 text-center">
    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight font-serif bg-clip-text text-transparent bg-gradient-to-b from-slate-200 to-slate-200/70">
      Propulsăm Afacerea Ta în Era Digitală
    </h1>
    <p className="mt-4 text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
      De la strategie și creație, la campanii de impact și website-uri performante, suntem partenerul tău pentru succes online.
    </p>
  </section>
);

// --- Component: Services --- //
const services = [
  { icon: <BarChart size={32} className="text-sky-400" />, title: 'Ads Manager', description: 'Optimizăm campaniile tale pentru a atinge audiența potrivită și a maximiza ROI-ul.' },
  { icon: <Annoyed size={32} className="text-sky-400" />, title: 'Social Media', description: 'Creăm conținut relevant și creștem prezența brandului tău pe platformele sociale.' },
  { icon: <Globe size={32} className="text-sky-400" />, title: 'Creare Website', description: 'Dezvoltăm website-uri moderne, rapide și optimizate pentru mobil, care convertesc.' },
];

const Services = () => (
  <section id="services" className="px-4 py-16 md:px-8 md:py-24 bg-slate-900">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center font-serif">Serviciile Noastre</h2>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.title} className="p-8 bg-slate-800 border border-slate-700 rounded-2xl hover:border-sky-400 transition-colors">
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-slate-400">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- Component: Contact --- //
const Contact = () => (
  <section id="contact" className="px-4 py-16 md:px-8 md:py-24 bg-slate-800 border-t border-slate-700">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold font-serif">Lucrează cu noi</h2>
      <p className="mt-4 text-lg text-slate-400">Completează formularul și te vom contacta în cel mai scurt timp.</p>
      <form className="mt-8 text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-300">Nume</label>
            <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-md shadow-sm focus:outline-none focus:ring-sky-400 focus:border-sky-400" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300">Email</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-md shadow-sm focus:outline-none focus:ring-sky-400 focus:border-sky-400" />
          </div>
        </div>
        <div className="mt-6">
          <label htmlFor="message" className="block text-sm font-medium text-slate-300">Mesaj</label>
          <textarea id="message" name="message" rows={4} className="mt-1 block w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-md shadow-sm focus:outline-none focus:ring-sky-400 focus:border-sky-400"></textarea>
        </div>
        <div className="mt-6 text-center">
          <button type="submit" className="bg-sky-400 text-slate-900 px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors">Trimite Mesajul</button>
        </div>
      </form>
    </div>
  </section>
);

// --- Component: Footer --- //
const Footer = () => (
  <footer className="px-4 py-8 md:px-8 md:py-12 bg-slate-900 border-t border-slate-700">
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
      <p className="text-slate-400">&copy; {new Date().getFullYear()} DigitalBloom. Toate drepturile rezervate.</p>
      <div className="flex space-x-4 mt-4 sm:mt-0">
        <a href="#" className="text-slate-500 hover:text-sky-400 transition-colors"><Facebook /></a>
        <a href="#" className="text-slate-500 hover:text-sky-400 transition-colors"><Instagram /></a>
        <a href="#" className="text-slate-500 hover:text-sky-400 transition-colors"><Linkedin /></a>
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
      <Services />
      <Contact />
    </main>
    <Footer />
  </>
);

// --- Page: AdsManagerPage --- //
const AdsManagerPage = ({ setView }: { setView: (view: string) => void }) => (
  <div className="min-h-screen bg-slate-900 text-slate-200 font-sans">
    <header className="p-4 sticky top-0 bg-slate-900/80 backdrop-blur-sm z-10">
      <button onClick={() => setView('home')} className="flex items-center space-x-2 text-slate-300 hover:text-sky-400 transition-colors">
        <ArrowLeft size={16} />
        <span>Înapoi la pagina principală</span>
      </button>
    </header>
    <main>
      <section className="text-center px-4 py-20 sm:py-28">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-sky-500">
          Management Anunțuri. Performanță Maximă.
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
          Transformăm bugetele de publicitate în rezultate măsurabile. Atinge-ți audiența ideală și domină piața cu strategii de ads create pentru a converti.
        </p>
      </section>
      <section className="px-4 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Meta & Google Ads */}
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <h2 className="text-3xl font-bold text-sky-400">Meta & Google Ads</h2>
              <p className="mt-2 text-slate-400">De la notorietate la conversie, acoperim cele mai importante platforme. Creăm campanii personalizate care aduc clienți, nu doar click-uri.</p>
              <div className="mt-6 space-y-4">
                <div className="flex items-start space-x-3">
                  <Target className="w-6 h-6 text-sky-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Targetare Avansată</h3>
                    <p className="text-sm text-slate-400">Identificăm și atragem exact publicul de care ai nevoie.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-6 h-6 text-sky-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Maximizare ROI</h3>
                    <p className="text-sm text-slate-400">Optimizăm fiecare aspect al campaniilor pentru cel mai bun randament.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-80 md:h-full w-full">
              <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1920&auto=format&fit=crop" alt="Ads strategy team" className="w-full h-full object-cover rounded-2xl"/>
            </div>
          </div>

          {/* TikTok Ads */}
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <div className="h-80 md:h-full w-full md:order-2">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" alt="TikTok Ads content" className="w-full h-full object-cover rounded-2xl"/>
            </div>
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 md:order-1">
              <h2 className="text-3xl font-bold text-sky-400">TikTok Ads</h2>
              <p className="mt-2 text-slate-400">Expertiză în ecosistemul TikTok. Ne concentrăm pe strategii de content nativ și campanii de tip Spark Ads care capitalizează pe trendurile actuale. Transformăm limbajul specific platformei în rezultate măsurabile de business prin targetare comportamentală avansată.</p>
              <div className="mt-6 space-y-4">
                <div className="flex items-start space-x-3">
                  <ClipboardCheck className="w-6 h-6 text-sky-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Pixel TikTok & Conversii</h3>
                    <p className="text-sm text-slate-400">Implementăm Pixelul TikTok și monitorizăm evenimentele de conversie pentru a măsura cu precizie impactul campaniilor.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Sparkles className="w-6 h-6 text-sky-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Spark Ads & Content Nativ</h3>
                    <p className="text-sm text-slate-400">Capitalizăm pe trenduri cu Spark Ads și conținut care se simte nativ pe platformă, generând engagement autentic.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif">Procesul Nostru</h2>
          <p className="mt-2 text-slate-400">Claritate și eficiență în fiecare etapă.</p>
        </div>
        <div className="mt-12 max-w-5xl mx-auto grid sm:grid-cols-3 gap-8 text-center">
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
            <BrainCircuit size={40} className="mx-auto text-sky-400" />
            <h3 className="mt-4 text-xl font-bold">1. Strategie</h3>
            <p className="mt-2 text-slate-400">Analizăm piața și obiectivele pentru a crea un plan de acțiune.</p>
          </div>
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
            <Zap size={40} className="mx-auto text-sky-400" />
            <h3 className="mt-4 text-xl font-bold">2. Implementare</h3>
            <p className="mt-2 text-slate-400">Lansăm campaniile și monitorizăm performanța inițială.</p>
          </div>
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
            <Filter size={40} className="mx-auto text-sky-400" />
            <h3 className="mt-4 text-xl font-bold">3. Optimizare</h3>
            <p className="mt-2 text-slate-400">Ajustăm constant campaniile pentru a îmbunătăți rezultatele.</p>
          </div>
        </div>
      </section>
    </main>
  </div>
);

// --- Page: SocialMediaPage --- //
const SocialMediaPage = ({ setView }: { setView: (view: string) => void }) => (
  <div className="min-h-screen bg-slate-900 text-slate-200 font-sans">
    <header className="p-4 sticky top-0 bg-slate-900/80 backdrop-blur-sm z-10">
      <button onClick={() => setView('home')} className="flex items-center space-x-2 text-slate-300 hover:text-sky-400 transition-colors">
        <ArrowLeft size={16} />
        <span>Înapoi la pagina principală</span>
      </button>
    </header>
    <main>
      <section className="text-center px-4 py-20 sm:py-28">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-sky-500">
          Social Media Content & Strategy
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
          Creăm conținut care captivează și construiește comunități. De la producție video la strategie vizuală, suntem partenerul tău creativ.
        </p>
      </section>

      <section className="px-4 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 flex flex-col justify-center">
            <Camera size={32} className="text-sky-400 mb-4" />
            <h2 className="text-2xl font-bold text-sky-400">Content Creation & Video Production</h2>
            <p className="mt-2 text-slate-400">Descrie procesul de filmare la nevoie și editare profesională pentru YouTube (Long & Shorts), TikTok, și Reels (FB/IG).</p>
          </div>
          <div className="h-80 md:h-full w-full">
            <img src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=1000" alt="Professional video editing and production" className="w-full h-full object-cover rounded-2xl"/>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:pb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">
           <div className="h-80 md:h-full w-full md:order-2">
            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000" alt="Digital marketing strategy and planning" className="w-full h-full object-cover rounded-2xl"/>
          </div>
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 flex flex-col justify-center md:order-1">
             <LayoutGrid size={32} className="text-sky-400 mb-4" />
            <h2 className="text-2xl font-bold text-sky-400">Strategie Vizuală</h2>
            <p className="mt-2 text-slate-400">Planificarea postărilor pentru a menține o estetică unitară a brandului pe toate platformele.</p>
             <div className="mt-4 text-slate-400">
                <h3 className="font-semibold text-sky-400 flex items-center"><Share2 size={18} className="mr-2"/> Platforme</h3>
                <p className="text-sm mt-1">Adaptăm formatele pentru Facebook, Instagram, TikTok și YouTube, asigurând relevanță și impact maxim.</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  </div>
);

// --- Page: WebsitePage --- //
const WebsitePage = ({ setView }: { setView: (view: string) => void }) => (
  <div className="min-h-screen bg-slate-900 text-slate-200 font-sans">
    <header className="p-4 sticky top-0 bg-slate-900/80 backdrop-blur-sm z-10">
      <button onClick={() => setView('home')} className="flex items-center space-x-2 text-slate-300 hover:text-sky-400 transition-colors">
        <ArrowLeft size={16} />
        <span>Înapoi la pagina principală</span>
      </button>
    </header>
    <main>
      <section className="text-center px-4 py-20 sm:py-28">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-sky-500">
          Web Design & Development Performance
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
          Construim prezența ta digitală cu focus pe estetică și performanță tehnică. Site-uri care nu doar arată bine, ci și convertesc.
        </p>
      </section>

      <section className="px-4 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Custom Design & UI/UX */}
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 flex flex-col justify-center">
              <Palette size={32} className="text-sky-400 mb-4" />
              <h2 className="text-2xl font-bold text-sky-400">Custom Design & UI/UX</h2>
              <p className="mt-2 text-slate-400">Creăm layout-uri moderne, intuitive și personalizate pe brandul tău. Ne asigurăm că fiecare interacțiune a utilizatorului este fluidă și plăcută.</p>
            </div>
            <div className="h-80 md:h-full w-full">
              <img src="https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=1000" alt="Custom UI/UX Design" className="w-full h-full object-cover rounded-2xl"/>
            </div>
          </div>

          {/* Performance & Speed */}
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <div className="h-80 md:h-full w-full md:order-2">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" alt="Website Performance" className="w-full h-full object-cover rounded-2xl"/>
            </div>
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 flex flex-col justify-center md:order-1">
              <Gauge size={32} className="text-sky-400 mb-4" />
              <h2 className="text-2xl font-bold text-sky-400">Performance & Speed</h2>
              <p className="mt-2 text-slate-400">Focus pe viteza de încărcare, optimizarea codului și SEO tehnic. Un site rapid este esențial pentru a converti vizitatorii în clienți fideli.</p>
            </div>
          </div>

          {/* Responsive & Mobile First */}
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 flex flex-col justify-center">
              <Smartphone size={32} className="text-sky-400 mb-4" />
              <h2 className="text-2xl font-bold text-sky-400">Responsive & Mobile First</h2>
              <p className="mt-2 text-slate-400">Site-urile noastre sunt optimizate perfect pentru orice dispozitiv. Indiferent dacă este Telefon, Tabletă sau Desktop, experiența rămâne impecabilă.</p>
            </div>
            <div className="h-80 md:h-full w-full">
              <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1000" alt="Responsive Web Design" className="w-full h-full object-cover rounded-2xl"/>
            </div>
          </div>
        </div>
      </section>
    </main>
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
    <div className="min-h-screen bg-slate-900 text-slate-200">
      {renderView()}
    </div>
  );
}
