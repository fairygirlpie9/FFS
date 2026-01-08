import React from 'react';
import EmbedSection from '../components/EmbedSection';

const Drones: React.FC = () => {
  return (
    <div className="min-h-screen bg-lux-bg pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
           <div className="flex items-center gap-4 mb-4">
             <div className="h-px bg-lux-accent w-12"></div>
             <span className="text-lux-accent font-mono uppercase tracking-widest text-sm">Industry Sector</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white uppercase mb-6">
            Drones / Aerial
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl font-sans font-light">
            Beyond line of sight (BVLOS) operations demand robust link stability and 
            latency-free video feeds. Our UAV stacks power inspection drones, 
            delivery prototypes, and aerial cinematography units.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-lux-card p-6 rounded-lg border border-white/5">
                <h3 className="text-white font-heading text-xl mb-2">Swarm Logic</h3>
                <p className="text-gray-500 text-sm">Coordinated flight patterns for multiple units operating on a single mesh network.</p>
            </div>
             <div className="bg-lux-card p-6 rounded-lg border border-white/5">
                <h3 className="text-white font-heading text-xl mb-2">LIDAR Integration</h3>
                <p className="text-gray-500 text-sm">Real-time point cloud generation and streaming to ground stations.</p>
            </div>
             <div className="bg-lux-card p-6 rounded-lg border border-white/5">
                <h3 className="text-white font-heading text-xl mb-2">Autonomy Level 4</h3>
                <p className="text-gray-500 text-sm">Obstacle avoidance and path replanning without operator intervention.</p>
            </div>
        </div>

        <EmbedSection 
          title="UAV Flight Stream" 
          description="Live low-latency FPV feed with superimposed telemetry HUD overlay."
           placeholderUrl="https://netlify-embed-drones-placeholder.com"
        />
      </div>
    </div>
  );
};

export default Drones;