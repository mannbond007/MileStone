"use client";

import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";
import { blogPreviews } from "@/constants/home-data";
import { formatDate } from "@/lib/utils";

export function BlogPreview() {
  return (
    <section className="py-20 md:py-28 relative" id="blog-preview">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            badge="Latest Updates"
            title="From Our Blog"
            subtitle="Stay informed with the latest scholarship news, tips, and career guidance."
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {blogPreviews.map((post, i) => (
            <ScrollReveal key={post.id} delay={i * 0.1}>
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <div className="bg-card rounded-2xl border border-border/50 overflow-hidden transition-all hover:shadow-card-hover hover:border-gold/20 h-full flex flex-col">
                  {/* Gradient placeholder for cover image */}
                  <div className="h-40 bg-gradient-to-br from-navy to-navy-light relative overflow-hidden">
                    <div className="absolute inset-0 bg-gold/5 group-hover:bg-gold/10 transition-colors" />
                    <div className="absolute bottom-3 left-3">
                      <Badge variant="secondary" className="text-xs bg-white/10 text-white border-0 backdrop-blur-sm">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-heading font-semibold text-foreground text-base mb-2 group-hover:text-gold transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t border-border/50">
                      <span>{formatDate(post.date)}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={0.2}>
          <div className="mt-12 text-center">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-light transition-colors group">
              Read All Posts
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
