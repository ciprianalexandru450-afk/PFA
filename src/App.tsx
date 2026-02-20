/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import React, { useState, useEffect } from 'react';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdsManagerPage from './pages/AdsManager.tsx';

export default function App() {
  // Simple routing based on URL hash
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (route) {
      case '#/ads-manager':
        return <AdsManagerPage />;
      default:
        return (
          <>
            <Header />
            <main>
              <Hero />
              <Services />
              <Contact />
            </main>
            <Footer />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200">
      {renderPage()}
    </div>
  );
}
}
