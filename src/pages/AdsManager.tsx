/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { ArrowLeft, Target, TrendingUp, Filter, Zap, BrainCircuit, Goal } from 'lucide-react';

// Placeholder for navigation back to the main page.
// In a real app, this would use a router like React Router.
const goBack = () => (window.location.href = '/');

export default function AdsManagerPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans">
      <header className="p-4 sticky top-0 bg-slate-900/80 backdrop-blur-sm z-10">
        <button onClick={goBack} className="flex items-center space-x-2 text-slate-300 hover:text-sky-400 transition-colors">
          <ArrowLeft size={16} />
          <span>Înapoi la pagina principală</span>
        </button>
      </header>

      <main>
        {/* Hero Section */}
        <section className="text-center px-4 py-20 sm:py-28">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-sky-500">
            Management Anunțuri. Performanță Maximă.
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
            Transformăm bugetele de publicitate în rezultate măsurabile. Atinge-ți audiența ideală și domină piața cu strategii de ads create pentru a converti.
          </p>
        </section>

        {/* Platforms Section */}
        <section className="px-4 py-16 sm:py-20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <h2 className="text-3xl font-bold text-sky-400">Meta & Google Ads</h2>
              <p className="mt-2 text-slate-400">De la notorietate la conversie, acoperim cele mai importante platforme. Creăm campanii personalizate care aduc clienți, nu doar click-uri.</p>
              <div className="mt-6 space-y-4">
                <div className="flex items-start space-x-3">
                  <Target className="w-6 h-6 text-sky-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Targetare Avansată</h3>
                    <p className="text-sm text-slate-400">Identificăm și atragem exact publicul de care ai nevoie, de la date demografice la comportamente și interese specifice.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-6 h-6 text-sky-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Maximizare ROI</h3>
                    <p className="text-sm text-slate-400">Optimizăm fiecare aspect al campaniilor pentru a asigura cel mai bun randament al investiției tale.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-80 md:h-full w-full">
                <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1920&auto=format&fit=crop" alt="Professional team working on ads strategy" className="w-full h-full object-cover rounded-2xl"/>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="px-4 py-16 sm:py-20">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-serif">Procesul Nostru</h2>
            <p className="mt-2 text-slate-400">Claritate și eficiență în fiecare etapă.</p>
          </div>
          <div className="mt-12 max-w-5xl mx-auto grid sm:grid-cols-3 gap-8 text-center">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <BrainCircuit size={40} className="mx-auto text-sky-400" />
              <h3 className="mt-4 text-xl font-bold">1. Strategie</h3>
              <p className="mt-2 text-slate-400">Analizăm piața, competitorii și obiectivele tale pentru a crea un plan de acțiune personalizat.</p>
            </div>
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <Zap size={40} className="mx-auto text-sky-400" />
              <h3 className="mt-4 text-xl font-bold">2. Implementare</h3>
              <p className="mt-2 text-slate-400">Lansăm campaniile, de la setarea tehnică și crearea anunțurilor, la monitorizarea performanței inițiale.</p>
            </div>
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <Filter size={40} className="mx-auto text-sky-400" />
              <h3 className="mt-4 text-xl font-bold">3. Optimizare</h3>
              <p className="mt-2 text-slate-400">Analizăm datele în timp real și ajustăm constant campaniile pentru a îmbunătăți rezultatele și a reduce costurile.</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
