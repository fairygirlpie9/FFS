import React from 'react';
import { BlogPost } from '../types';

const posts: BlogPost[] = [
  {
    id: 1,
    title: "Optimizing Latency in 5G Mesh Networks",
    excerpt: "How we reduced packet loss by 40% in high-interference urban environments using custom FPGA switching.",
    date: "OCT 12, 2024",
    category: "ENGINEERING",
    image: "https://picsum.photos/600/400?random=10"
  },
  {
    id: 2,
    title: "The Future of Autonomous Pit Stops",
    excerpt: "Exploring the robotics required to service a race car in under 2 seconds without human intervention.",
    date: "SEP 28, 2024",
    category: "MOTORSPORTS",
    image: "https://picsum.photos/600/400?random=11"
  },
  {
    id: 3,
    title: "Security Audits for Residential IoT",
    excerpt: "Why the standard smart fridge is a backdoor into your network, and how we lock it down.",
    date: "SEP 15, 2024",
    category: "SECURITY",
    image: "https://picsum.photos/600/400?random=12"
  }
];

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-lux-bg pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-heading font-bold text-white uppercase mb-4">Insights</h1>
          <p className="text-gray-400 font-sans max-w-2xl mx-auto">Technical deep dives, case studies, and industry forecasts from the Lux Ops engineering team.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-lux-card border border-white/5 rounded-xl overflow-hidden hover:border-lux-accent/30 transition-colors group cursor-pointer">
              <div className="aspect-video w-full overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-lux-accent">{post.category}</span>
                  <span className="text-xs font-sans text-gray-500">{post.date}</span>
                </div>
                <h2 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-lux-accent transition-colors">{post.title}</h2>
                <p className="text-gray-400 text-sm font-sans line-clamp-3">{post.excerpt}</p>
                <div className="mt-4 pt-4 border-t border-white/5">
                  <span className="text-sm font-medium text-white group-hover:underline">Read Article &rarr;</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;