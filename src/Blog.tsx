import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import { Header, Footer, Background, useScrollReveal } from './App';
import { blogPosts, BlogPost } from './posts';

const BlogPage = ({ setView }: { setView: (view: string) => void }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  useScrollReveal('blog');

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToBlog = () => {
    setSelectedPost(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContentClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.id === 'cta-blog-contact') {
      setView('home');
      setTimeout(() => {
        const element = document.getElementById('contact');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <div className="min-h-screen text-slate-300 font-sans relative">
      <Background />
      <Header setView={setView} currentView="blog" />
      
      <main className="relative z-10 pt-32 pb-24">
        <AnimatePresence mode="wait">
          {!selectedPost ? (
            <motion.div
              key="blog-list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-7xl mx-auto px-4 md:px-8"
            >
              {/* Blog Header */}
              <div className="text-center mb-20 reveal">
                <h1 className="text-5xl md:text-7xl font-bold font-serif bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 tracking-tight mb-6">
                  Blog & Insights
                </h1>
                <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto">
                  Gânduri, strategii și noutăți din universul marketingului digital și al tehnologiei AI.
                </p>
              </div>

              {/* Blog Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handlePostClick(post)}
                    className="group cursor-pointer glass-panel rounded-3xl overflow-hidden border border-white/5 hover:border-brand-accent/30 transition-all duration-500"
                  >
                    <div className="aspect-video overflow-hidden relative">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-bold text-brand-accent uppercase tracking-widest">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-8 space-y-4">
                      <div className="flex items-center space-x-4 text-[10px] text-slate-500 uppercase tracking-widest">
                        <span className="flex items-center"><Calendar size={12} className="mr-1" /> {post.date}</span>
                        <span className="flex items-center"><Clock size={12} className="mr-1" /> {post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-brand-accent transition-colors duration-300 leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-sm text-slate-400 font-light line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="pt-4 flex items-center text-xs font-bold text-white group-hover:text-brand-accent transition-colors">
                        Citește Articolul <ArrowRight size={14} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="blog-post"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl mx-auto px-4 md:px-8"
            >
              {/* Back Button */}
              <button 
                onClick={handleBackToBlog}
                className="flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors mb-12 group"
              >
                <ArrowLeft size={16} className="mr-2 transform group-hover:-translate-x-1 transition-transform" /> Înapoi la Blog
              </button>

              {/* Post Content */}
              <article className="space-y-12">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 text-xs text-brand-accent font-bold uppercase tracking-widest">
                    <span>{selectedPost.category}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="text-slate-500 font-medium">{selectedPost.date}</span>
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold text-white font-serif leading-tight tracking-tight">
                    {selectedPost.title}
                  </h1>
                  <div className="flex items-center space-x-4 text-sm text-slate-400">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/5">
                      <span className="text-xs font-bold text-white">CP</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Echipa CPRise</p>
                      <p className="text-xs font-light">{selectedPost.readTime} de lectură</p>
                    </div>
                  </div>
                </div>

                <div className="aspect-video rounded-[2rem] overflow-hidden border border-white/10">
                  <img 
                    src={selectedPost.image} 
                    alt={selectedPost.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div 
                  className="prose prose-invert prose-slate max-w-none text-lg text-slate-400 font-light leading-relaxed space-y-8"
                  dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                  onClick={handleContentClick}
                />
              </article>

              {/* Newsletter / CTA */}
              <div className="mt-24 p-12 rounded-[2rem] border border-white/5 bg-white/5 backdrop-blur-sm text-center space-y-6">
                <h3 className="text-2xl font-bold text-white font-serif">Ți-a plăcut acest articol?</h3>
                <p className="text-slate-400 max-w-md mx-auto">Abonează-te pentru a primi cele mai noi strategii de marketing direct în inbox.</p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="Adresa ta de email" 
                    className="flex-1 bg-black/40 border border-white/10 rounded-xl px-6 py-3 text-sm focus:outline-none focus:border-brand-accent/50 transition-colors"
                  />
                  <button className="bg-brand-accent text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-brand-accent/90 transition-colors">
                    Abonează-te
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <Footer setView={setView} />
      </main>
    </div>
  );
};

export default BlogPage;
