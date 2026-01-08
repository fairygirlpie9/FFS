import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => setSubmitted(true), 1000);
  };

  return (
    <div className="min-h-screen bg-lux-bg pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-heading font-bold text-white uppercase mb-4">Get In Touch</h1>
          <p className="text-gray-400 font-sans max-w-2xl mx-auto">Ready to upgrade your operational infrastructure? Let's talk.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-heading font-bold text-white mb-6">Headquarters</h3>
              <div className="flex items-start gap-4 text-gray-400 font-sans">
                <MapPin className="w-6 h-6 text-lux-accent shrink-0" />
                <p>101 Circuit Drive, Suite 500<br/>Austin, TX 78701<br/>United States</p>
              </div>
            </div>
            
            <div>
               <h3 className="text-2xl font-heading font-bold text-white mb-6">Direct Lines</h3>
               <div className="space-y-4">
                 <div className="flex items-center gap-4 text-gray-400 font-sans">
                    <Phone className="w-6 h-6 text-lux-accent shrink-0" />
                    <p>+1 (555) 012-3456</p>
                 </div>
                 <div className="flex items-center gap-4 text-gray-400 font-sans">
                    <Mail className="w-6 h-6 text-lux-accent shrink-0" />
                    <p>systems@luxops.com</p>
                 </div>
               </div>
            </div>

             <div className="p-6 bg-lux-card border border-white/5 rounded-xl">
                <h4 className="text-lux-accent font-mono text-sm uppercase mb-2">Support Status</h4>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-white font-sans text-sm">24/7 Operations Center Online</span>
                </div>
             </div>
          </div>

          {/* Form */}
          <div className="bg-lux-card p-8 rounded-xl border border-white/5 shadow-xl">
             {submitted ? (
                 <div className="h-full flex flex-col items-center justify-center text-center min-h-[400px]">
                     <div className="w-16 h-16 rounded-full bg-lux-accent/20 flex items-center justify-center mb-6">
                        <Mail className="w-8 h-8 text-lux-accent" />
                     </div>
                     <h3 className="text-2xl font-heading font-bold text-white mb-2">Message Sent</h3>
                     <p className="text-gray-400">Our operations team will review your inquiry and respond within 24 hours.</p>
                     <button onClick={() => setSubmitted(false)} className="mt-8 text-lux-accent hover:underline">Send another message</button>
                 </div>
             ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                        <input type="text" id="name" required className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-lux-accent focus:ring-1 focus:ring-lux-accent transition-colors" placeholder="John Doe" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Work Email</label>
                        <input type="email" id="email" required className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-lux-accent focus:ring-1 focus:ring-lux-accent transition-colors" placeholder="john@company.com" />
                    </div>
                    <div>
                        <label htmlFor="sector" className="block text-sm font-medium text-gray-400 mb-2">Sector</label>
                        <select id="sector" className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-lux-accent focus:ring-1 focus:ring-lux-accent transition-colors">
                            <option>Motorsports</option>
                            <option>Commercial Fleets</option>
                            <option>Drones / Aerial</option>
                            <option>Residential</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Project Details</label>
                        <textarea id="message" rows={4} required className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-lux-accent focus:ring-1 focus:ring-lux-accent transition-colors" placeholder="Tell us about your requirements..."></textarea>
                    </div>
                    <button type="submit" className="w-full bg-lux-accent text-black font-heading font-bold text-lg py-4 rounded hover:bg-white transition-colors duration-300 uppercase tracking-wide">
                        Initialize Contact
                    </button>
                </form>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;