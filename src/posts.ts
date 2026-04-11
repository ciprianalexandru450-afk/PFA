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
    id: 'viitorul-marketingului-digital-2026',
    title: 'Viitorul Marketingului Digital în 2026: Automatizare și AI',
    excerpt: 'Cum transformă inteligența artificială modul în care brandurile interacționează cu clienții și ce strategii vor domina piața în următorul an.',
    content: `
      <p>Marketingul digital trece printr-o transformare radicală. În 2026, nu mai este vorba doar despre a fi prezent online, ci despre cât de inteligent poți folosi datele pentru a crea experiențe personalizate la scară largă.</p>
      
      <h2>1. Personalizarea Hyper-Individualizată</h2>
      <p>Datorită algoritmilor avansați de AI, brandurile pot acum să anticipeze nevoile consumatorilor înainte ca aceștia să le exprime. Mesajele generice sunt înlocuite de conținut generat dinamic pentru fiecare utilizator în parte.</p>
      
      <h2>2. Automatizarea Proceselor Creative</h2>
      <p>De la generarea de imagini pentru Ads până la scrierea de copy-uri optimizate pentru conversie, AI-ul devine un co-pilot esențial pentru orice echipă de marketing performantă.</p>
      
      <h2>3. Căutarea Vizuală și Vocală</h2>
      <p>Optimizarea pentru SEO nu se mai limitează la cuvinte cheie scrise. Strategiile moderne includ acum optimizarea pentru interfața vocală și recunoașterea imaginilor.</p>
      
      <p>La CPRise, integrăm aceste tehnologii în fiecare campanie pentru a ne asigura că partenerii noștri rămân cu un pas înaintea competiției.</p>
    `,
    date: '10 Aprilie 2026',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    category: 'Tehnologie',
    readTime: '5 min'
  },
  {
    id: 'optimizare-seo-pentru-e-commerce',
    title: 'Ghid Complet: Optimizare SEO pentru Magazine Online',
    excerpt: 'Descoperă cele mai eficiente tehnici de SEO tehnic și de conținut pentru a crește traficul organic și rata de conversie a magazinului tău.',
    content: `
      <p>SEO pentru e-commerce este o disciplină complexă care necesită o atenție deosebită la detalii. Nu este suficient să ai produse bune; trebuie să te asiguri că Google înțelege structura site-ului tău.</p>
      
      <h2>Arhitectura Site-ului</h2>
      <p>O structură logică a categoriilor și o ierarhie clară ajută atât utilizatorii, cât și roboții de căutare să navigheze eficient.</p>
      
      <h2>Viteza de Încărcare (Core Web Vitals)</h2>
      <p>Fiecare secundă de întârziere poate costa conversii. Optimizarea imaginilor și utilizarea unui cod curat sunt priorități absolute.</p>
      
      <h2>Conținutul de Calitate</h2>
      <p>Descrierile de produse unice și blogul integrat oferă valoare adăugată și ajută la poziționarea pe cuvinte cheie long-tail.</p>
    `,
    date: '5 Aprilie 2026',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    category: 'SEO',
    readTime: '7 min'
  },
  {
    id: 'strategii-ads-buget-mic',
    title: 'Cum să scalezi campaniile de Ads cu un buget redus',
    excerpt: 'Nu ai nevoie de bugete de mii de euro pentru a vedea rezultate. Învață cum să optimizezi campaniile de Meta și TikTok pentru un ROAS maxim.',
    content: `
      <p>Multe afaceri mici se tem de publicitatea plătită din cauza costurilor. Totuși, secretul nu stă în mărimea bugetului, ci în precizia targetării și calitatea creativelor.</p>
      
      <h2>Targetarea pe Interese Specifice</h2>
      <p>În loc să încerci să ajungi la toată lumea, concentrează-te pe o nișă foarte bine definită.</p>
      
      <h2>Testarea A/B Continuă</h2>
      <p>Rulează mai multe variante de anunțuri cu bugete mici pentru a identifica rapid ce rezonează cu audiența ta.</p>
      
      <h2>Focus pe Video Nativ</h2>
      <p>Pe platforme precum TikTok, conținutul care nu arată a reclamă are cele mai mari șanse de succes.</p>
    `,
    date: '28 Martie 2026',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800',
    category: 'Ads',
    readTime: '4 min'
  }
];
