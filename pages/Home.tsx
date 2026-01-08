import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Activity, Cpu, Shield, Zap } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-lux-bg">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-lux-bg via-lux-bg/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-lux-accent animate-pulse"></span>
            <span className="text-xs font-mono text-lux-accent tracking-widest uppercase">Operational Intelligence</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-heading font-bold text-white mb-6 tracking-tight leading-none uppercase">
            Precision <span className="text-transparent bg-clip-text bg-gradient-to-r from-lux-accent to-white">Control</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-400 font-sans max-w-3xl mx-auto font-light leading-relaxed">
            Advanced telemetry and command systems for high-stakes environments. 
            We build the nervous systems for machines that move fast.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink to="/contact" className="px-8 py-4 bg-lux-accent text-black font-heading font-bold text-lg rounded hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2">
              Start Project <ArrowRight className="w-5 h-5" />
            </NavLink>
            <NavLink to="/about" className="px-8 py-4 bg-transparent border border-white/20 text-white font-heading font-bold text-lg rounded hover:bg-white/10 transition-colors duration-300">
              Our Technology
            </NavLink>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-24 bg-lux-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { icon: Activity, title: 'Real-time Telemetry', desc: 'Sub-millisecond data transmission for instant decision making.' },
                    { icon: Shield, title: 'Encrypted Comms', desc: 'Military-grade encryption protocols ensuring data integrity.' },
                    { icon: Cpu, title: 'Edge Processing', desc: 'On-device computation to reduce latency and bandwidth usage.' }
                ].map((feature, idx) => (
                    <div key={idx} className="p-8 bg-lux-card border border-white/5 hover:border-lux-accent/50 transition-colors rounded-xl group">
                        <feature.icon className="w-12 h-12 text-gray-500 group-hover:text-lux-accent transition-colors mb-6" />
                        <h3 className="text-2xl font-heading font-bold text-white mb-3">{feature.title}</h3>
                        <p className="text-gray-400 font-sans leading-relaxed">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* Industry Preview */}
      <div className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">SECTORS</h2>
                    <div className="h-1 w-20 bg-lux-accent"></div>
                </div>
                <NavLink to="/motorsports" className="hidden md:flex text-lux-accent font-heading font-medium items-center gap-2 hover:text-white transition-colors">
                    View All Industries <ArrowRight className="w-4 h-4" />
                </NavLink>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <NavLink to="/motorsports" className="group relative h-96 overflow-hidden rounded-xl border border-white/10">
                    <img src="https://picsum.photos/800/600?random=1" alt="Motorsports" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8">
                        <h3 className="text-3xl font-heading font-bold text-white mb-2 group-hover:text-lux-accent transition-colors">MOTORSPORTS</h3>
                        <p className="text-gray-300 font-sans text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">Track-side analytics and vehicle health monitoring.</p>
                    </div>
                </NavLink>
                <div className="grid grid-rows-2 gap-4 h-96">
                    <NavLink to="/drones" className="group relative overflow-hidden rounded-xl border border-white/10">
                        <img src="https://picsum.photos/800/600?random=2" alt="Drones" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6">
                            <h3 className="text-2xl font-heading font-bold text-white mb-1 group-hover:text-lux-accent transition-colors">AERIAL / DRONES</h3>
                        </div>
                    </NavLink>
                    <NavLink to="/residential" className="group relative overflow-hidden rounded-xl border border-white/10">
                        <img src="https://picsum.photos/800/600?random=3" alt="Residential" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6">
                            <h3 className="text-2xl font-heading font-bold text-white mb-1 group-hover:text-lux-accent transition-colors">RESIDENTIAL SYSTEMS</h3>
                        </div>
                    </NavLink>
                </div>
            </div>
            
             <div className="mt-8 md:hidden text-center">
                <NavLink to="/motorsports" className="inline-flex text-lux-accent font-heading font-medium items-center gap-2 hover:text-white transition-colors">
                    View All Industries <ArrowRight className="w-4 h-4" />
                </NavLink>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;