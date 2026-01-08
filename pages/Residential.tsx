import React from 'react';
import EmbedSection from '../components/EmbedSection';

const Residential: React.FC = () => {
  return (
    <div className="min-h-screen bg-lux-bg pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
           <div className="flex items-center gap-4 mb-4">
             <div className="h-px bg-lux-accent w-12"></div>
             <span className="text-lux-accent font-mono uppercase tracking-widest text-sm">Smart Systems</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white uppercase mb-6">
            Residential
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl font-sans font-light">
            Bringing industrial-grade reliability to the smart home. 
            Lux Ops Residential integrates security, energy management, and automation 
            into a cohesive, secure local network.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-lux-card p-6 rounded-lg border border-white/5">
                <h3 className="text-white font-heading text-xl mb-2">Energy Optimization</h3>
                <p className="text-gray-500 text-sm">Machine learning algorithms that reduce consumption by adapting to usage patterns.</p>
            </div>
             <div className="bg-lux-card p-6 rounded-lg border border-white/5">
                <h3 className="text-white font-heading text-xl mb-2">Perimeter Defense</h3>
                <p className="text-gray-500 text-sm">AI-powered camera analysis distinguishing between residents, guests, and threats.</p>
            </div>
             <div className="bg-lux-card p-6 rounded-lg border border-white/5">
                <h3 className="text-white font-heading text-xl mb-2">Local-First Privacy</h3>
                <p className="text-gray-500 text-sm">All processing happens on-site. Your data never leaves your home unless you authorize it.</p>
            </div>
        </div>

        <EmbedSection 
          title="HomeOS Dashboard" 
          description="Interactive smart home panel controlling lighting, climate, and security zones."
           placeholderUrl="https://netlify-embed-residential-placeholder.com"
        />
      </div>
    </div>
  );
};

export default Residential;