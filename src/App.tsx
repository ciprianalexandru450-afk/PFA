import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import emailjs from '@emailjs/browser';
import { Menu, X, ChevronDown, Facebook, Instagram, Linkedin, ArrowLeft, Target, TrendingUp, Filter, Zap, BrainCircuit, Annoyed, BarChart, Globe, ClipboardCheck, Sparkles, Camera, LayoutGrid, Share2, Palette, Gauge, Smartphone, Bot, MessageSquare, BarChart3, Lightbulb, MapPin, Mail, Phone, Building2, FileText, Folder } from 'lucide-react';

// Initialize EmailJS with your Public Key
// Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS Public Key
emailjs.init('_NN9XD3VJxmiVFkCu');

// --- Component: Background --- //
const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = window.innerWidth < 768 ? 40 : 100;
    const connectionDistance = 150;
    const mouse = { x: -1000, y: -1000 };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      rgb: string;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.size = Math.random() * 2 + 0.5;
        
        // Color distribution: 40% White, 30% Blue, 30% Orange
        const rand = Math.random();
        if (rand < 0.4) {
          this.rgb = '255, 255, 255';
        } else if (rand < 0.7) {
          this.rgb = '0, 209, 255'; // Electric Blue
        } else {
          this.rgb = '255, 120, 0'; // Solar Orange
        }
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const connDistSq = connectionDistance * connectionDistance;

      // Update and draw connections
      ctx.lineWidth = 0.6;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < connDistSq) {
            const opacity = (1 - Math.sqrt(distSq) / connectionDistance) * 0.45;
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Batch draw particles by color
      const whiteParticles: Particle[] = [];
      const blueParticles: Particle[] = [];
      const orangeParticles: Particle[] = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (p.rgb === '255, 255, 255') whiteParticles.push(p);
        else if (p.rgb === '0, 209, 255') blueParticles.push(p);
        else orangeParticles.push(p);
      }

      // Draw White
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.beginPath();
      for (let i = 0; i < whiteParticles.length; i++) {
        const p = whiteParticles[i];
        ctx.moveTo(p.x + p.size, p.y);
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      }
      ctx.fill();

      // Draw Blue
      ctx.fillStyle = 'rgba(0, 209, 255, 0.8)';
      ctx.beginPath();
      for (let i = 0; i < blueParticles.length; i++) {
        const p = blueParticles[i];
        ctx.moveTo(p.x + p.size, p.y);
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      }
      ctx.fill();

      // Draw Orange
      ctx.fillStyle = 'rgba(255, 120, 0, 0.8)';
      ctx.beginPath();
      for (let i = 0; i < orangeParticles.length; i++) {
        const p = orangeParticles[i];
        ctx.moveTo(p.x + p.size, p.y);
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      }
      ctx.fill();

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    init();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-brand-bg">
      {/* Base dark layer */}
      <div className="absolute inset-0 bg-brand-bg" />
      
      {/* Subtle Animated Glow Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-brand-accent/3 blur-[120px] animate-float" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/3 blur-[100px] animate-float-reverse" />
      
      {/* Canvas Constellation */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 opacity-100"
      />
      
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-10" />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </div>
  );
};

// --- Custom Hook: Scroll Reveal --- //
const useScrollReveal = (view: string) => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [view]); // Re-run when view changes
};

// --- Component: Header --- //
const Header = ({ setView, currentView }: { setView: (view: string) => void, currentView: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const handleAnchorClick = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (currentView !== 'home') {
      setView('home');
      setTimeout(() => {
        const element = document.getElementById(target);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(target);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    { name: 'SEO & Conținut', view: 'social' },
    { name: 'Marketing Performanță', view: 'ads' },
    { name: 'Dezvoltare Web', view: 'website' },
  ];

  const navLinks = [
    { name: 'Acasă', target: 'hero', action: () => { if (currentView === 'home') window.scrollTo({ top: 0, behavior: 'smooth' }); else setView('home'); setIsMenuOpen(false); } },
    { name: 'Automatizare AI', target: 'ai-automation' },
    { name: 'Portofoliu', target: 'about' },
    { name: 'Blog', target: 'about' },
    { name: 'Despre', target: 'about' },
  ];

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
      <nav className="bg-black/20 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 flex justify-between items-center shadow-lg shadow-black/5 transition-all duration-300">
        {/* Logo */}
        <div 
          className="font-serif text-xl font-bold cursor-pointer text-white tracking-tight"
          onClick={() => {
            if (currentView === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
            else setView('home');
          }}
        >
          CPR Media
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); if (currentView === 'home') window.scrollTo({ top: 0, behavior: 'smooth' }); else setView('home'); }}
            className="text-sm font-medium text-white/70 hover:text-white transition-all duration-200 tracking-wide"
          >
            Acasă
          </a>

          {/* Services Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="flex items-center space-x-1 text-sm font-medium text-white/70 hover:text-white transition-all duration-200 tracking-wide">
              <span>Servicii</span>
              <ChevronDown size={14} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 bg-black/60 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden py-2"
                >
                  {services.map((service) => (
                    <button
                      key={service.name}
                      onClick={() => { setView(service.view); setIsServicesOpen(false); }}
                      className="w-full text-left px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200"
                    >
                      {service.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.slice(1).map((link) => (
            <a
              key={link.name}
              href={`#${link.target}`}
              onClick={(e) => link.action ? link.action() : handleAnchorClick(e, link.target)}
              className="text-sm font-medium text-white/70 hover:text-white transition-all duration-200 tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a 
            href="#contact" 
            onClick={(e) => handleAnchorClick(e, 'contact')}
            className="bg-brand-accent text-white text-sm font-semibold px-6 py-2 rounded-full hover:bg-brand-accent/90 transition-all duration-300 shadow-md shadow-brand-accent/20"
          >
            Cere o Ofertă
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white/80 hover:text-white transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 mt-4 p-6 bg-black/60 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl z-40 md:hidden"
          >
            <div className="flex flex-col space-y-4">
              <a
                href="#hero"
                onClick={(e) => { e.preventDefault(); setView('home'); setIsMenuOpen(false); }}
                className="text-lg font-medium text-white/80 hover:text-brand-accent transition-colors"
              >
                Acasă
              </a>

              {/* Mobile Services Accordion */}
              <div className="space-y-2">
                <button 
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="flex items-center justify-between w-full text-lg font-medium text-white/80 hover:text-brand-accent transition-colors"
                >
                  <span>Servicii</span>
                  <ChevronDown size={20} className={`transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4 flex flex-col space-y-3 border-l border-white/10"
                    >
                      {services.map((service) => (
                        <button
                          key={service.name}
                          onClick={() => { setView(service.view); setIsMenuOpen(false); }}
                          className="text-left text-white/60 hover:text-white transition-colors py-1"
                        >
                          {service.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.slice(1).map((link) => (
                <a
                  key={link.name}
                  href={`#${link.target}`}
                  onClick={(e) => link.action ? link.action() : handleAnchorClick(e, link.target)}
                  className="text-lg font-medium text-white/80 hover:text-brand-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="pt-4">
                <a 
                  href="#contact" 
                  onClick={(e) => handleAnchorClick(e, 'contact')}
                  className="block bg-brand-accent text-white text-center py-4 rounded-2xl font-bold shadow-lg shadow-brand-accent/20"
                >
                  Cere o Ofertă
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

// --- Component: Hero --- //
const Hero = () => (
  <section id="hero" className="relative min-h-screen flex flex-col justify-center px-4 pt-32 pb-16 overflow-hidden">
    {/* Spotlight Effect */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none z-0" />

    <div className="max-w-7xl mx-auto w-full relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] font-serif bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            Strategii digitale care transformă vizibilitatea în profit.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-slate-400 font-light leading-relaxed tracking-wide max-w-xl">
            Execuție precisă pentru SEO, Ads și Web. Fără promisiuni inutile, doar creștere sustenabilă.
          </p>
        </motion.div>

        {/* Right Side: Glassmorphism Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:justify-self-end w-full max-w-md"
        >
          <div className="glass-panel p-8 rounded-[2rem] border border-white/10 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
            <h3 className="text-xl font-bold text-white mb-8 relative z-10 flex items-center">
              <Zap size={20} className="mr-2 text-brand-accent" />
              Procesul nostru
            </h3>
            <ul className="space-y-6 relative z-10">
              {[
                { title: "Audit & Strategie", desc: "Analiză profundă și planificare." },
                { title: "Implementare Proiect", desc: "Execuție tehnică impecabilă." },
                { title: "Optimizare Continuă", desc: "Monitorizare și scalare profit." }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent text-sm font-bold shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{item.title}</h4>
                    <p className="text-sm text-slate-500 font-light">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Partners Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-24 pt-12 border-t border-white/5"
      >
        <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-semibold mb-8">Parteneri în succes:</p>
        <div className="flex flex-wrap justify-between items-center gap-8 opacity-30 grayscale contrast-125">
          {/* Placeholders for monochrome logos */}
          <div className="h-8 w-32 bg-white/20 rounded animate-pulse" />
          <div className="h-8 w-24 bg-white/20 rounded animate-pulse" />
          <div className="h-8 w-40 bg-white/20 rounded animate-pulse" />
          <div className="h-8 w-28 bg-white/20 rounded animate-pulse" />
          <div className="h-8 w-36 bg-white/20 rounded animate-pulse" />
        </div>
      </motion.div>
    </div>
  </section>
);

// --- Component: AgencyPresentation --- //
const AgencyPresentation = () => (
  <section id="about" className="section-spacing px-4 md:px-8 reveal">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Mai mult decât o agenție. <br/>
            <span className="text-brand-accent italic font-medium">Partenerul tău de creștere.</span>
          </h2>
          <p className="text-lg text-slate-400 font-light leading-relaxed tracking-wide">
            Nu credem în soluții predefinite. Construim strategii digitale personalizate, de la arhitectura website-ului până la campanii de Ads care scalează profitul. Combinăm analiza datelor cu creativitatea pură pentru a-ți transforma vizitatorii în clienți fideli.
          </p>
          
          <div className="reveal-stagger space-y-6">
            <div className="p-8 rounded-2xl border border-white/10 glass-panel relative overflow-hidden group reveal">
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

            <div className="p-8 rounded-2xl border border-white/10 glass-panel relative overflow-hidden group reveal">
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
          </div>
        </div>

        <div className="relative flex items-center h-full reveal">
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
        </div>
      </div>
    </div>
  </section>
);

// --- Component: BrandPhilosophy --- //
const BrandPhilosophy = () => (
  <section className="py-24 px-4 md:px-8 relative overflow-hidden reveal">
    <div className="max-w-4xl mx-auto text-center">
      <div>
        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight font-serif">
          Nu doar trafic. Rezultate reale.
        </h2>
        <p className="text-xl text-slate-400 font-light leading-relaxed tracking-wide max-w-3xl mx-auto mb-10">
          Marketing-ul digital nu este despre a fi vizibil peste tot, ci despre a fi prezent acolo unde contează. Construim strategii care conectează brandul tău cu oamenii care au nevoie de el, transformând click-urile în relații durabile și profit.
        </p>
        <div className="w-24 h-1 bg-brand-accent mx-auto rounded-full" />
      </div>
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
    <section id="ai-automation" className="section-spacing px-4 md:px-8 border-t border-white/5 reveal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-serif">
            Eficiență Digitală prin Inteligență Artificială
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal-stagger">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="p-10 rounded-3xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-all duration-300 group reveal"
            >
              <div className="mb-6 p-4 w-fit rounded-2xl bg-brand-accent/10 text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{pillar.title}</h3>
              <p className="text-slate-400 font-light leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Component: Contact --- //
const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    if (!formRef.current) return;

    // Replace these with your actual Service ID and Template ID from EmailJS
    const SERVICE_ID = 'service_11w2h6m';
    const TEMPLATE_ID = 'template_xg5ie4w';

    try {
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current
      );

      if (result.text === 'OK') {
        setStatus('success');
        formRef.current.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-spacing px-4 md:px-8 border-t border-white/5 reveal">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-center">
          {/* Left Side: Text & Data */}
          <div className="space-y-12 reveal">
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
                  <a href="mailto:contact@cprmedia.ro" className="text-lg text-slate-300 font-light tracking-wide hover:text-brand-accent transition-colors">
                    contact@cprmedia.ro
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
                  <span>CPR Media</span>
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
          </div>

          {/* Right Side: Form */}
          <div className="glass-panel p-8 md:p-12 rounded-3xl self-center relative overflow-hidden reveal">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-brand-accent/20 text-brand-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <ClipboardCheck size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Mulțumim!</h3>
                  <p className="text-slate-400 font-light leading-relaxed">
                    Mesajul a fost trimis către CPR Media.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-8 text-sm text-brand-accent hover:underline"
                  >
                    Trimite alt mesaj
                  </button>
                </motion.div>
              ) : (
                <form 
                  id="contact-form"
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  {/* Honeypot */}
                  <input type="text" name="_gotcha" style={{ display: 'none' }} />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-xs font-semibold text-slate-500 uppercase tracking-widest">Nume</label>
                      <input 
                        required
                        type="text" 
                        id="name" 
                        name="name" 
                        className="w-full px-0 py-3 bg-transparent border-b border-white/10 text-white focus:outline-none focus:border-brand-accent transition-colors placeholder:text-slate-700" 
                        placeholder="Numele tău" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-500 uppercase tracking-widest">Email</label>
                      <input 
                        required
                        type="email" 
                        id="email" 
                        name="email" 
                        className="w-full px-0 py-3 bg-transparent border-b border-white/10 text-white focus:outline-none focus:border-brand-accent transition-colors placeholder:text-slate-700" 
                        placeholder="email@exemplu.ro" 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-xs font-semibold text-slate-500 uppercase tracking-widest">Telefon</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      className="w-full px-0 py-3 bg-transparent border-b border-white/10 text-white focus:outline-none focus:border-brand-accent transition-colors placeholder:text-slate-700" 
                      placeholder="+40 700 000 000" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-500 uppercase tracking-widest">Mesaj</label>
                    <textarea 
                      required
                      id="message" 
                      name="message" 
                      rows={4} 
                      className="w-full px-0 py-3 bg-transparent border-b border-white/10 text-white focus:outline-none focus:border-brand-accent transition-colors resize-none placeholder:text-slate-700" 
                      placeholder="Cum te putem ajuta?"
                    ></textarea>
                  </div>
                  
                  <div className="pt-4 text-center">
                    <button 
                      type="submit" 
                      disabled={status === 'submitting'}
                      className="btn-premium w-full md:w-auto min-w-[240px] flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Se trimite...</span>
                        </>
                      ) : (
                        <span>Trimite Mesajul</span>
                      )}
                    </button>
                    {status === 'error' && (
                      <p className="mt-4 text-sm text-red-500 font-medium animate-pulse">
                        Ups! A apărut o eroare. Te rugăm să încerci din nou.
                      </p>
                    )}
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Component: Footer --- //
const Footer = ({ setView }: { setView: (view: string) => void }) => (
  <footer className="px-4 py-12 md:px-8 md:py-16 border-t border-white/5">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 mb-12">
        <div className="text-center md:text-left">
          <h3 className="font-serif text-2xl font-bold text-white mb-2">CPR Media</h3>
          <p className="text-slate-500 text-sm font-light tracking-wide">&copy; {new Date().getFullYear()} CPR Media. Toate drepturile rezervate.</p>
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
      
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex flex-wrap justify-center md:justify-start gap-6">
          <button 
            onClick={() => setView('terms')} 
            className="text-xs text-slate-500 hover:text-brand-accent transition-colors font-light tracking-wider uppercase"
          >
            Termeni și Condiții
          </button>
          <button 
            onClick={() => setView('privacy')} 
            className="text-xs text-slate-500 hover:text-brand-accent transition-colors font-light tracking-wider uppercase"
          >
            Politica de Confidențialitate (GDPR)
          </button>
        </div>
        <div className="text-[10px] text-slate-600 font-light tracking-widest uppercase">
          CPR Media
        </div>
      </div>
    </div>
  </footer>
);

// --- Page: TermsPage --- //
const TermsPage = ({ setView }: { setView: (view: string) => void }) => (
  <div className="min-h-screen text-slate-300 font-sans">
    <Header setView={setView} currentView="terms" />
    <main className="py-24 px-4 md:px-8 reveal">
      <div className="max-w-4xl mx-auto prose prose-invert prose-slate reveal">
        <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mb-12 tracking-tight">Termeni și Condiții</h1>
        
        <div className="space-y-8 text-slate-400 font-light leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introducere</h2>
            <p>Bun venit pe website-ul CPR Media. Prin accesarea și utilizarea acestui site, sunteți de acord să respectați și să fiți legat de următorii termeni și condiții de utilizare, care, împreună cu politica noastră de confidențialitate, guvernează relația CPR Media cu dumneavoastră în legătură cu acest website.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Definiții</h2>
            <p>Termenul 'CPR Media', 'noi' sau 'agenția' se referă la proprietarul website-ului, CPR Media. Termenul 'dumneavoastră' se referă la utilizatorul sau vizitatorul website-ului nostru.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Utilizarea Website-ului</h2>
            <p>Conținutul paginilor acestui website este pentru informarea dumneavoastră generală și utilizare personală. Acesta se poate modifica fără notificare prealabilă. Utilizarea oricărei informații sau materiale de pe acest website se face pe propriul risc, pentru care nu vom fi răspunzători.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Proprietate Intelectuală</h2>
            <p>Acest website conține materiale care sunt deținute de sau licențiate către noi. Aceste materiale includ, dar nu se limitează la, designul, layout-ul, aspectul, grafica și conținutul textual. Reproducerea este interzisă în conformitate cu legislația privind drepturile de autor.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Servicii</h2>
            <p>CPR Media oferă servicii de marketing digital, automatizări AI, design grafic și producție video. Detaliile specifice ale fiecărui serviciu și obligațiile contractuale vor fi stabilite prin contracte individuale semnate între agenție și client.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Limitarea Răspunderii</h2>
            <p>În nicio circumstanță CPR Media nu va fi răspunzătoare pentru orice pierdere sau daună, inclusiv, fără limitare, pierderi indirecte sau subsecvente, rezultate din utilizarea acestui website.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Legea Aplicabilă</h2>
            <p>Utilizarea acestui website și orice litigiu care decurge din utilizarea acestuia sunt supuse legilor din România.</p>
          </section>
        </div>
      </div>
    </main>
    <Footer setView={setView} />
  </div>
);

// --- Page: PrivacyPage --- //
const PrivacyPage = ({ setView }: { setView: (view: string) => void }) => (
  <div className="min-h-screen text-slate-300 font-sans">
    <Header setView={setView} currentView="privacy" />
    <main className="py-24 px-4 md:px-8 reveal">
      <div className="max-w-4xl mx-auto prose prose-invert prose-slate reveal">
        <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mb-12 tracking-tight">Politica de Confidențialitate (GDPR)</h1>
        
        <div className="space-y-8 text-slate-400 font-light leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Informații Generale</h2>
            <p>CPR Media se angajează să protejeze confidențialitatea datelor dumneavoastră cu caracter personal. Această politică explică modul în care colectăm, utilizăm și protejăm informațiile dumneavoastră în conformitate cu Regulamentul General privind Protecția Datelor (GDPR).</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Date Colectate</h2>
            <p>Putem colecta următoarele date prin intermediul formularelor de contact:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nume și prenume</li>
              <li>Adresă de email</li>
              <li>Număr de telefon</li>
              <li>Informații despre proiectul dumneavoastră</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Scopul Colectării</h2>
            <p>Datele sunt colectate exclusiv pentru:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>A răspunde solicitărilor dumneavoastră de contact</li>
              <li>A furniza informații despre serviciile noastre</li>
              <li>A iniția colaborări comerciale</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Durata Stocării</h2>
            <p>Vom păstra datele dumneavoastră cu caracter personal doar atât timp cât este necesar pentru scopurile menționate mai sus sau conform cerințelor legale.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Drepturile Dumneavoastră</h2>
            <p>Conform GDPR, aveți următoarele drepturi:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Dreptul de acces la date</li>
              <li>Dreptul la rectificare</li>
              <li>Dreptul la ștergere ("dreptul de a fi uitat")</li>
              <li>Dreptul la restricționarea prelucrării</li>
              <li>Dreptul la portabilitatea datelor</li>
              <li>Dreptul de a vă opune prelucrării</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Securitatea Datelor</h2>
            <p>Implementăm măsuri tehnice și organizatorice adecvate pentru a asigura un nivel de securitate corespunzător riscului, protejând datele împotriva accesului neautorizat, pierderii sau distrugerii.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Contact</h2>
            <p>Pentru orice întrebări legate de protecția datelor, ne puteți contacta la adresa de email: contact@cprmedia.ro.</p>
          </section>
        </div>
      </div>
    </main>
    <Footer setView={setView} />
  </div>
);

// --- Page: HomePage --- //
const HomePage = ({ setView }: { setView: (view: string) => void }) => (
  <>
    <Header setView={setView} currentView="home" />
    <main>
      <Hero />
      <AgencyPresentation />
      <BrandPhilosophy />
      <AIAutomation />
      <Contact />
    </main>
    <Footer setView={setView} />
  </>
);

// --- Page: AdsManagerPage --- //
const AdsManagerPage = ({ setView }: { setView: (view: string) => void }) => (
  <div className="min-h-screen text-slate-300 font-sans">
    <Header setView={setView} currentView="ads" />
    <main>
      <section className="relative text-center px-4 py-24 sm:py-32 overflow-hidden">
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

      <section className="section-spacing px-4 md:px-8 reveal">
        <div className="max-w-7xl mx-auto space-y-24">
          {/* Meta & Google Ads */}
          <div className="grid md:grid-cols-2 gap-12 items-stretch reveal">
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
          </div>

          {/* TikTok Ads */}
          <div className="grid md:grid-cols-2 gap-12 items-stretch reveal">
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
          </div>
        </div>
      </section>

      <section className="section-spacing px-4 md:px-8 bg-white/5 reveal">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Procesul Nostru</h2>
            <p className="text-slate-500 font-light tracking-wide">Claritate și eficiență în fiecare etapă.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 reveal-stagger">
            {[
              { icon: <BrainCircuit size={32} />, step: "1. Strategie", desc: "Analizăm piața și obiectivele pentru a crea un plan de acciune." },
              { icon: <Zap size={32} />, step: "2. Implementare", desc: "Lansăm campaniile și monitorizăm performanța inițială." },
              { icon: <Filter size={32} />, step: "3. Optimizare", desc: "Ajustăm constant campaniile pentru a îmbunătăți rezultatele." }
            ].map((item, i) => (
              <div 
                key={i}
                className="glass-panel p-10 rounded-3xl text-center group hover:-translate-y-2 transition-all duration-300 reveal"
              >
                <div className="mb-6 p-4 w-fit mx-auto rounded-2xl bg-white/5 text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{item.step}</h3>
                <p className="text-slate-400 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer setView={setView} />
  </div>
);

// --- Page: SocialMediaPage --- //
const SocialMediaPage = ({ setView }: { setView: (view: string) => void }) => (
  <div className="min-h-screen text-slate-300 font-sans">
    <Header setView={setView} currentView="social" />
    <main>
      <section className="relative text-center px-4 py-24 sm:py-32 overflow-hidden">
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

      <section className="section-spacing px-4 md:px-8 reveal">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="grid md:grid-cols-2 gap-12 items-stretch reveal">
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
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-stretch reveal">
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
          </div>
        </div>
      </section>
    </main>
    <Footer setView={setView} />
  </div>
);

// --- Page: WebsitePage --- //
const WebsitePage = ({ setView }: { setView: (view: string) => void }) => (
  <div className="min-h-screen text-slate-300 font-sans">
    <Header setView={setView} currentView="website" />
    <main>
      <section className="relative text-center px-4 py-24 sm:py-32 overflow-hidden">
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

      <section className="section-spacing px-4 md:px-8 reveal">
        <div className="max-w-7xl mx-auto space-y-24">
          {/* Custom Design & UI/UX */}
          <div className="grid md:grid-cols-2 gap-12 items-stretch reveal">
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
          </div>

          {/* Performance & Speed */}
          <div className="grid md:grid-cols-2 gap-12 items-stretch reveal">
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
          </div>

          {/* Responsive & Mobile First */}
          <div className="grid md:grid-cols-2 gap-12 items-stretch reveal">
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
          </div>
        </div>
      </section>
    </main>
    <Footer setView={setView} />
  </div>
);

// --- Main App Component --- //
export default function App() {
  const [view, setView] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  useScrollReveal(view);

  const renderView = () => {
    switch (view) {
      case 'ads':
        return <AdsManagerPage setView={setView} />;
      case 'social':
        return <SocialMediaPage setView={setView} />;
      case 'website':
        return <WebsitePage setView={setView} />;
      case 'terms':
        return <TermsPage setView={setView} />;
      case 'privacy':
        return <PrivacyPage setView={setView} />;
      case 'home':
      default:
        return <HomePage setView={setView} />;
    }
  }

  return (
    <div className="min-h-screen text-slate-300 font-sans selection:bg-brand-accent/30 selection:text-white relative">
      <Background />
      <div className="relative z-10">
        {renderView()}
      </div>
    </div>
  );
}
