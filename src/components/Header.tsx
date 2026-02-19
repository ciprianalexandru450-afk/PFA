/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <header className="px-4 py-4 md:px-8 md:py-6 border-b border-slate-700 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h2 className="font-bold text-lg">DigitalBloom</h2>
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
              <div className="absolute top-full mt-2 w-48 bg-slate-800 border border-slate-700 rounded-md shadow-lg z-10 right-0">
                <a href="#services" onClick={() => setIsDropdownOpen(false)} className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 transition-colors">Ads Manager</a>
                <a href="#services" onClick={() => setIsDropdownOpen(false)} className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 transition-colors">Social Media</a>
                <a href="#services" onClick={() => setIsDropdownOpen(false)} className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 transition-colors">Creare Website</a>
              </div>
            )}
          </div>
          <a href="#contact" className="bg-sky-400 text-slate-900 px-4 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
