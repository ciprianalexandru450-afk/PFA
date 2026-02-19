/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { Annoyed, BarChart, Globe } from 'lucide-react';

const services = [
  {
    icon: <BarChart size={32} className="text-accent" />,
    title: 'Ads Manager',
    description: 'Optimizăm campaniile tale de publicitate pentru a atinge audiența potrivită și a maximiza ROI-ul.',
  },
  {
    icon: <Annoyed size={32} className="text-accent" />,
    title: 'Social Media',
    description: 'Creăm conținut relevant, gestionăm comunitățile online și creștem prezența brandului tău pe platformele sociale.',
  },
  {
    icon: <Globe size={32} className="text-accent" />,
    title: 'Creare Website',
    description: 'Dezvoltăm website-uri moderne, rapide și optimizate pentru mobil, care transformă vizitatorii în clienți.',
  },
];

export default function Services() {
  return (
    <section className="px-4 py-16 md:px-8 md:py-24 bg-slate-900">
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
}
