export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  category: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'povestea-cprise-parteneriat-succes',
    title: 'Nu suntem o agenție. Suntem CPRise – Povestea din spatele parteneriatului tău pentru succes.',
    excerpt: 'Descoperă filozofia din spatele CPRise: de ce am ales să fim un hub de performanță și cum oferim calitate premium la prețuri corecte.',
    content: `
      <p>Să fim sinceri: lumea nu mai are nevoie de încă o „agenție”. Termenul a devenit sinonim cu facturi umflate și o barieră rece între prestator și client. CPRise s-a născut dintr-o filozofie total opusă. Noi nu ne considerăm o agenție, ci un hub de performanță dedicat celor care vor să crească inteligent.</p>
      
      <h2 class="text-2xl font-bold text-white mt-12 mb-6">Ce înseamnă, de fapt, CPRise?</h2>
      <p>Numele nostru reprezintă ADN-ul muncii noastre:</p>
      
      <div class="my-8 p-8 border border-brand-accent/20 bg-brand-accent/5 rounded-3xl space-y-4">
        <p><strong class="text-brand-accent">C (Collaborative):</strong> Lucrăm cot la cot cu tine. Suntem echipa ta extinsă.</p>
        <p><strong class="text-brand-accent">P (Performance):</strong> Tot ce facem se măsoară în rezultate reale, nu în promisiuni.</p>
        <p><strong class="text-brand-accent">Rise:</strong> Este obiectivul nostru final. Vrem să vedem afacerea ta cum se ridică.</p>
      </div>
      
      <h2 class="text-2xl font-bold text-white mt-12 mb-6">De ce să plătești „numele” unei agenții, când poți plăti rezultatele?</h2>
      <p>La CPRise, am eliminat costurile inutile de structură pe care agențiile mari le pasează clienților.</p>
      
      <div class="my-12 py-8 border-y border-white/10">
        <p class="text-2xl md:text-3xl font-bold text-brand-accent leading-tight">
          IMPORTANT: Oferim aceeași calitate profesională la prețuri mult sub media pieței și a concurenței.
        </p>
      </div>
      
      <p>Am optimizat totul pentru eficiență: tu primești consultanță premium la un preț care îți permite să mai și investești în afacerea ta, nu doar în facturile noastre.</p>
      
      <div class="flex justify-center mt-16">
        <button id="cta-blog-contact" class="bg-brand-accent text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-brand-accent/90 transition-all duration-300 shadow-xl shadow-brand-accent/20 transform hover:scale-105">
          Vreau oferta CPRise
        </button>
      </div>
    `,
    date: '11 Aprilie 2026',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
    category: 'Brand Story',
    readTime: '3 min'
  }
];
