import React from 'react';
import EmbedSection from '../components/EmbedSection';

const Motorsports: React.FC = () => {
  return (
    <div className="min-h-screen bg-lux-bg pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
             <div className="h-px bg-lux-accent w-12"></div>
             <span className="text-lux-accent font-mono uppercase tracking-widest text-sm">Industry Sector</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white uppercase mb-6">
            Motorsports
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl font-sans font-light">
            Seconds aren't just time; they are the difference between podium and obscurity. 
            Our telemetry stacks provide engineers and drivers with real-time actionable data 
            on tire degradation, fuel consumption, and suspension dynamics.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-lux-card p-6 rounded-lg border border-white/5">
                <h3 className="text-white font-heading text-xl mb-2">Predictive Lap Timing</h3>
                <p className="text-gray-500 text-sm">AI-driven models that update race strategy in real-time based on track evolution.</p>
            </div>
             <div className="bg-lux-card p-6 rounded-lg border border-white/5">
                <h3 className="text-white font-heading text-xl mb-2">Video Sync</h3>
                <p className="text-gray-500 text-sm">Frame-perfect synchronization of onboard video with telemetry logs.</p>
            </div>
             <div className="bg-lux-card p-6 rounded-lg border border-white/5">
                <h3 className="text-white font-heading text-xl mb-2">Pit Wall Hub</h3>
                <p className="text-gray-500 text-sm">Centralized command interface for race engineers to monitor fleet health.</p>
            </div>
        </div>

        {/* Live Demo Embed */}
        <EmbedSection 
          title="Motorsports Telemetry" 
          description="Interactive dashboard showing live vehicle metrics from our test track facility."
          placeholderUrl="https://netlify-embed-motorsports-placeholder.com"
        />
      </div>
    </div>
  );
};

export default Motorsports;