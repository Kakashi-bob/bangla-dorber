"use client";

import React, { useState } from "react";
import { BLOG_POSTS } from "../data/siteData";
import { FileTextIcon, ClockIcon, ChevronRightIcon, XIcon } from "./Icons";

export function BlogSection() {
  const [activeArticle, setActiveArticle] = useState<typeof BLOG_POSTS[0] | null>(null);

  return (
    <section id="blog" className="py-20 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/60 border border-red-800/40 text-red-400 text-xs font-bold uppercase tracking-wider">
            <FileTextIcon size={14} />
            <span>Market Insights & News</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Latest News & <span className="text-gradient-red">Articles</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Stay informed with Bangladesh import-export regulatory updates and culinary secrets from our kitchen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.id}
              className="glass-panel rounded-3xl overflow-hidden border border-white/10 hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col group"
            >
              <div className="relative h-48 overflow-hidden bg-zinc-950">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-md text-red-400 border border-red-500/30 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase">
                  {post.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs text-zinc-400 font-medium">
                    <span>{post.date}</span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <ClockIcon size={12} /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-base group-hover:text-red-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-zinc-400 text-xs line-clamp-3 leading-relaxed">
                    {post.snippet}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <button
                    onClick={() => setActiveArticle(post)}
                    className="text-xs font-bold text-red-400 hover:text-red-300 flex items-center gap-1"
                  >
                    <span>Read Full Article</span>
                    <ChevronRightIcon size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Article Reader Modal */}
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
            <div className="glass-panel-glow max-w-2xl w-full rounded-3xl p-6 md:p-8 space-y-6 relative border border-red-500/40">
              <div className="flex justify-between items-start border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase text-red-400">
                    {activeArticle.category} &bull; {activeArticle.date}
                  </span>
                  <h3 className="text-2xl font-black text-white mt-1">{activeArticle.title}</h3>
                </div>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="p-2 text-zinc-400 hover:text-white bg-zinc-900 rounded-full border border-white/10"
                >
                  <XIcon size={18} />
                </button>
              </div>

              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="w-full h-56 object-cover rounded-2xl border border-white/10"
              />

              <div className="space-y-3 text-xs text-zinc-300 leading-relaxed">
                <p>{activeArticle.snippet}</p>
                <p>
                  At BanglaDorber, we continuously monitor customs directives issued by Bangladesh Bank, NBR, and the Ministry of Commerce to safeguard our corporate clients against port delays and tariff adjustments.
                </p>
                <p>
                  For detailed regulatory briefing documents or custom trade advisory, contact our senior corporate trade desk in Gulshan-2, Dhaka.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setActiveArticle(null)}
                  className="bg-gradient-red text-white text-xs font-bold px-6 py-2.5 rounded-xl shadow-md"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
