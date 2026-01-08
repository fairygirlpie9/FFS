import React from 'react';
import { EmbedProps } from '../types';

const EmbedSection: React.FC<EmbedProps> = ({ title, description, placeholderUrl }) => {
  return (
    <div className="w-full bg-lux-card border border-white/10 rounded-xl overflow-hidden shadow-2xl">
      <div className="p-6 md:p-8 border-b border-white/5">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
          <span className="text-lux-accent">LIVE</span> DEMO
        </h2>
        <p className="text-gray-400 font-sans max-w-2xl">{description}</p>
      </div>
      <div className="relative w-full aspect-video bg-black/50 group">
        {/* In a real scenario, this iframe would point to the provided Netlify URL */}
        {/* Since URLs are not provided, we simulate the embed */}
        <div className="absolute inset-0 flex items-center justify-center flex-col p-12 text-center">
            <div className="w-full h-full border-2 border-dashed border-white/20 rounded-lg flex items-center justify-center bg-white/5">
                <div className="text-center">
                    <p className="text-lux-accent font-heading text-xl mb-2">Embed Container</p>
                    <p className="text-gray-500 font-sans text-sm">{title} Demo</p>
                    <p className="text-gray-600 font-sans text-xs mt-4 font-mono">{placeholderUrl || "Waiting for Netlify Embed URL..."}</p>
                </div>
            </div>
        </div>
      </div>
      <div className="bg-white/5 p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs text-green-500 font-mono uppercase tracking-widest">System Online</span>
        </div>
        <span className="text-xs text-gray-500 font-mono">v2.4.0-stable</span>
      </div>
    </div>
  );
};

export default EmbedSection;