/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
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
}
