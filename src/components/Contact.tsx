/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function Contact() {
  return (
    <section id="contact" className="px-4 py-16 md:px-8 md:py-24 bg-slate-800 border-t border-slate-700">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-serif">Lucrează cu noi</h2>
        <p className="mt-4 text-lg text-slate-400">Completează formularul de mai jos și te vom contacta în cel mai scurt timp.</p>
        <form className="mt-8 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300">Nume</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-md shadow-sm focus:outline-none focus:ring-sky-400 focus:border-sky-400" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300">Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-md shadow-sm focus:outline-none focus:ring-sky-400 focus:border-sky-400" />
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="message" className="block text-sm font-medium text-slate-300">Mesaj</label>
            <textarea id="message" name="message" rows={4} className="mt-1 block w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-md shadow-sm focus:outline-none focus:ring-sky-400 focus:border-sky-400"></textarea>
          </div>
          <div className="mt-6 text-center">
            <button type="submit" className="bg-sky-400 text-slate-900 px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
              Trimite Mesajul
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
