/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200">
      <Header />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
