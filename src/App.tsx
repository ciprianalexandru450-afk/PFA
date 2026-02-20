/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdsManagerPage from './pages/AdsManager.tsx';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    if (currentPage === 'ads') {
      return <AdsManagerPage onNavigateHome={() => setCurrentPage('home')} />;
    }

    // Default is 'home'
    return (
      <>
        <Header onNavigateToAds={() => setCurrentPage('ads')} />
        <main>
          <Hero />
          <Services />
          <Contact />
        </main>
        <Footer />
      </>
    );
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200">
      {renderPage()}
    </div>
  );
}
}
