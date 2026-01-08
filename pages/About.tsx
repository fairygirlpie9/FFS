import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-lux-bg pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
                 <div className="flex items-center gap-4 mb-4">
                    <div className="h-px bg-lux-accent w-12"></div>
                    <span className="text-lux-accent font-mono uppercase tracking-widest text-sm">Who We Are</span>
                </div>
                <h1 className="text-5xl font-heading font-bold text-white uppercase mb-6">Engineers of Speed</h1>
                <div className="space-y-6 text-gray-400 font-sans text-lg font-light">
                    <p>
                        Lux Ops Systems was founded on a simple premise: data is only as good as the speed at which it can be acted upon. 
                        In 2018, we started by building custom telemetry units for GT3 racing teams. Today, we power operations across 
                        three continents for logistics giants and defense contractors.
                    </p>
                    <p>
                        We reject the bloat of modern software. Our systems are built close to the metal, optimizing for milliseconds 
                        where others settle for seconds. We believe in brutal efficiency, clean code, and hardware that lasts.
                    </p>
                </div>
            </div>
            <div className="relative">
                <div className="absolute -inset-4 bg-lux-accent/20 rounded-full blur-3xl"></div>
                <img src="https://picsum.photos/800/800?grayscale" alt="Team working" className="relative rounded-xl border border-white/10 shadow-2xl" />
            </div>
        </div>

        <div className="border-t border-white/10 pt-16">
            <h2 className="text-3xl font-heading font-bold text-white mb-12 text-center uppercase">Our Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { name: 'Elena Kross', role: 'Chief Executive Officer', img: 'https://picsum.photos/300/300?random=20' },
                    { name: 'Marcus Chen', role: 'CTO / Lead Architect', img: 'https://picsum.photos/300/300?random=21' },
                    { name: 'Sarah Vance', role: 'Head of Operations', img: 'https://picsum.photos/300/300?random=22' }
                ].map((person, idx) => (
                    <div key={idx} className="text-center group">
                        <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-lux-accent transition-colors">
                            <img src={person.img} alt={person.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                        </div>
                        <h3 className="text-xl font-heading font-bold text-white">{person.name}</h3>
                        <p className="text-lux-accent font-mono text-sm uppercase tracking-wider">{person.role}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;