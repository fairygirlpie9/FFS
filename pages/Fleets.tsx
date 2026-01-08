import React from 'react';
import EmbedSection from '../components/EmbedSection';

const Fleets: React.FC = () => {
  return (
    <div className="min-h-screen bg-lux-bg pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
           <div className="flex items-center gap-4 mb-4">
             <div className="h-px bg-lux-accent w-12"></div>
             <span className="text-lux-accent font-mono uppercase tracking-widest text-sm">Industry Sector</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white uppercase mb-6">
            Commercial Fleets
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl font-sans font-light">
            Managing logistics at scale requires granular visibility. Lux Ops provides 
            unified tracking for global supply chains, monitoring asset condition, 
            route efficiency, and driver safety protocols.
          </p>
        </div>

         {/* Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-lux-card p-6 rounded-lg border border-white/5">
                <h3 className="text-white font-heading text-xl mb-2">Global Asset Tracking</h3>
                <p className="text-gray-500 text-sm">Satellite and cellular hybrid connectivity for 100% uptime visibility.</p>
            </div>
             <div className="bg-lux-card p-6 rounded-lg border border-white/5">
                <h3 className="text-white font-heading text-xl mb-2">Cold Chain Monitoring</h3>
                <p className="text-gray-500 text-sm">Temperature and humidity sensors with automated alert thresholds.</p>
            </div>
             <div className="bg-lux-card p-6 rounded-lg border border-white/5">
                <h3 className="text-white font-heading text-xl mb-2">Predictive Maintenance</h3>
                <p className="text-gray-500 text-sm">Identify vehicle faults before they result in costly downtime.</p>
            </div>
        </div>

        <EmbedSection 
          title="Fleet Command Center" 
          description="Global map view of active assets with drill-down capability for individual unit diagnostics."
           placeholderUrl="https://netlify-embed-fleets-placeholder.com"
        />
      </div>
    </div>
  );
};

export default Fleets;