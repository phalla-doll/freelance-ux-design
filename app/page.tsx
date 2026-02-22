'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Check, Star, BookOpen, Users, TrendingUp, ArrowUpRight, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Image from 'next/image';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const drawLine = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.5, ease: "easeInOut" as const },
      opacity: { duration: 0.5 }
    }
  }
};

const testimonials = [
  {
    quote: "This guide completely changed how I approach client work. I went from charging $50/hr to project-based pricing starting at $5k.",
    author: "Sarah Jenkins",
    role: "Product Designer",
    company: "Freelance"
  },
  {
    quote: "The outreach templates alone are worth 10x the price. I closed my first enterprise client within two weeks of using them.",
    author: "Marcus Chen",
    role: "UX Lead",
    company: "Studio Alpha"
  },
  {
    quote: "Finally, a resource that talks about the BUSINESS side of design. Raunak demystifies the sales process beautifully.",
    author: "Elena Rodriguez",
    role: "Creative Director",
    company: "Design Co."
  },
  {
    quote: "I was stuck in a feast-or-famine cycle for years. The chapter on retainers helped me stabilize my income.",
    author: "David Kim",
    role: "UI Designer",
    company: "Freelance"
  },
  {
    quote: "Practical, actionable, and no-fluff. If you're serious about scaling your design business, you need this.",
    author: "Jessica Foster",
    role: "Brand Strategist",
    company: "Agency X"
  }
];

export default function Page() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      let newItemsPerPage = 3;
      if (window.innerWidth < 640) {
        newItemsPerPage = 1;
      } else if (window.innerWidth < 1024) {
        newItemsPerPage = 2;
      }
      
      setItemsPerPage(newItemsPerPage);
      
      // Ensure we don't show empty space if resizing from mobile to desktop
      setCurrentTestimonialIndex(prev => {
        const maxIndex = testimonials.length - newItemsPerPage;
        return Math.min(prev, Math.max(0, maxIndex));
      });
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextTestimonial = () => {
    if (currentTestimonialIndex < testimonials.length - itemsPerPage) {
      setCurrentTestimonialIndex(prev => prev + 1);
    }
  };

  const prevTestimonial = () => {
    if (currentTestimonialIndex > 0) {
      setCurrentTestimonialIndex(prev => prev - 1);
    }
  };
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section - Matching the Screenshot */}
      <section className="relative h-screen w-full flex flex-col justify-between p-6 md:p-12 lg:p-16 max-w-[1600px] mx-auto">
        
        {/* Top Labels */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-between items-start text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/60 font-medium"
        >
          <span>Rise Higher</span>
          <span>With Your Business</span>
        </motion.div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center relative z-10">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-4xl"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-xl md:text-2xl font-light text-white/80 mb-4 md:mb-6 tracking-wide"
            >
              Freelance UX Design:
            </motion.h2>
            <motion.h1 
              variants={fadeInUp}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.95] tracking-tight mb-12"
            >
              How to Land Clients & <br className="hidden md:block" />
              Scale Your Business
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/90 font-light"
            >
              By Raunak Das
            </motion.p>
          </motion.div>
        </div>

        {/* Bottom Metadata */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-end justify-between"
        >
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
              <ArrowRight className="w-4 h-4" />
            </div>
            <div className="text-xs md:text-sm max-w-[200px]">
              <p className="uppercase tracking-wider text-white/50 mb-1 text-[10px]">A Step-by-Step Guide</p>
              <p className="font-light text-white/80 leading-snug">
                Starting a new new business? Find out where to begin and how to achieve success.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Abstract Graphics - Left Curve */}
        <div className="absolute left-0 top-1/3 w-32 h-64 md:w-48 md:h-96 pointer-events-none opacity-60">
           <svg viewBox="0 0 100 200" className="w-full h-full stroke-white fill-none stroke-[0.5px]">
             <motion.path 
               d="M 0,0 Q 50,100 0,200"
               initial="hidden"
               animate="visible"
               variants={drawLine}
             />
             <motion.path 
               d="M 0,100 L 40,100"
               initial="hidden"
               animate="visible"
               variants={drawLine}
             />
           </svg>
        </div>

        {/* Abstract Graphics - Right Cylinders */}
        <div className="absolute right-0 bottom-0 w-48 h-48 md:w-80 md:h-80 pointer-events-none opacity-60 translate-x-1/4 translate-y-1/4">
          <svg viewBox="0 0 200 200" className="w-full h-full stroke-white fill-none stroke-[0.5px]">
            {[0, 20, 40, 60, 80].map((offset, i) => (
              <motion.ellipse 
                key={i}
                cx="100" 
                cy={150 - offset} 
                rx="80" 
                ry="20"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 + (i * 0.1), ease: "easeInOut" }}
              />
            ))}
          </svg>
        </div>
      </section>

      {/* Expanded Context: Value Proposition */}
      <section className="py-24 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="font-display text-3xl md:text-4xl mb-6">Stop trading time for money. Start building an empire.</h3>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Most designers get stuck in the "freelancer trap"—chasing low-paying gigs, dealing with scope creep, and burning out. This guide isn't just about design; it's about the business of design.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-display mb-2">10k+</div>
                <div className="text-sm text-white/50 uppercase tracking-wider">Designers Helped</div>
              </div>
              <div>
                <div className="text-4xl font-display mb-2">$50M+</div>
                <div className="text-sm text-white/50 uppercase tracking-wider">Client Value Generated</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {[
              { icon: Users, title: "Client Acquisition", desc: "Systematic outreach strategies that actually work." },
              { icon: TrendingUp, title: "Pricing Psychology", desc: "How to charge 5x what you're charging now." },
              { icon: BookOpen, title: "Process Mastery", desc: "Streamline your workflow to deliver faster." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-6 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2">{item.title}</h4>
                  <p className="text-white/60">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter Breakdown */}
      <section className="py-24 px-6 md:px-12 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <h2 className="font-display text-4xl md:text-5xl">What's Inside</h2>
            <p className="text-white/50 mt-4 md:mt-0">200+ Pages of Actionable Tactics</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {[
              "01. The Mindset Shift",
              "02. Defining Your Niche",
              "03. Building a Portfolio",
              "04. The Outreach Engine",
              "05. Mastering Sales Calls",
              "06. Pricing Models",
              "07. Contracts & Legal",
              "08. Project Management",
              "09. Scaling to Agency"
            ].map((chapter, i) => (
              <div key={i} className="bg-black p-8 hover:bg-zinc-900 transition-colors group cursor-default">
                <div className="text-white/30 text-sm mb-4 group-hover:text-white/60 transition-colors">Chapter</div>
                <h4 className="text-xl font-medium">{chapter}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 md:px-12 border-t border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="font-display text-4xl md:text-5xl mb-4">Success Stories</h2>
              <p className="text-white/60">Hear from designers who scaled their business.</p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={prevTestimonial}
                disabled={currentTestimonialIndex === 0}
                className="p-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white cursor-pointer disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                disabled={currentTestimonialIndex >= testimonials.length - itemsPerPage}
                className="p-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white cursor-pointer disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${currentTestimonialIndex * (100 / testimonials.length)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ width: `${(testimonials.length / itemsPerPage) * 100}%` }}
            >
              {testimonials.map((testimonial, i) => (
                <div 
                  key={i} 
                  className="px-2 md:px-4"
                  style={{ width: `${100 / testimonials.length}%` }}
                >
                  <div className="h-full p-6 md:p-8 border border-white/10 rounded-2xl bg-white/5 flex flex-col justify-between hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 cursor-default">
                    <div>
                      <Quote className="w-6 h-6 md:w-8 md:h-8 text-white/20 mb-4 md:mb-6" />
                      <p className="text-base md:text-xl font-light leading-relaxed mb-6 md:mb-8">"{testimonial.quote}"</p>
                    </div>
                    <div>
                      <div className="font-medium text-white text-sm md:text-base">{testimonial.author}</div>
                      <div className="text-xs md:text-sm text-white/50">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3 aspect-[3/4] relative grayscale hover:grayscale-0 transition-all duration-700">
             <div className="absolute inset-0 bg-zinc-800 rounded-lg overflow-hidden">
                {/* Placeholder for Author Image */}
                <Image 
                  src="https://picsum.photos/400/600" 
                  alt="Raunak Das" 
                  fill 
                  className="object-cover"
                />
             </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="font-display text-4xl mb-6">Meet Raunak Das</h2>
            <p className="text-xl text-white/70 mb-6 leading-relaxed">
              "I spent 5 years struggling as a freelancer before I cracked the code. Now, I run a 7-figure design agency. I wrote this book to save you the 5 years of trial and error."
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 border border-white/20 rounded-full text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
                Read Full Bio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 skew-y-3 scale-110 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-display text-5xl md:text-7xl mb-8">Ready to Scale?</h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Join 10,000+ designers who have transformed their careers with this guide.
            Instant digital download.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="group relative px-8 py-4 bg-white text-black rounded-full text-lg font-medium overflow-hidden transition-transform hover:scale-105">
              <span className="relative z-10 flex items-center gap-2">
                Get the Guide for $49 <ArrowUpRight className="w-5 h-5" />
              </span>
            </button>
            <button className="px-8 py-4 text-white/70 hover:text-white transition-colors underline decoration-white/30 underline-offset-4">
              Download Free Chapter
            </button>
          </div>
          <p className="mt-8 text-sm text-white/40">30-Day Money Back Guarantee • Secure Payment</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 border-t border-white/10 text-center md:text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-white/40">
            © 2024 Raunak Das. All rights reserved.
          </div>
          <div className="flex gap-8 text-sm text-white/60">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
