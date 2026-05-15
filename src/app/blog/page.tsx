import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { blogPreviews } from "@/constants/home-data";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read the latest articles, scholarship tips, career guidance, and educational resources from Milestone Scholarship Program.",
};

export default function BlogPage() {
  return (
    <div className="pt-24">
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-muted/30 dark:bg-navy/20" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <SectionHeader
              badge="Blog"
              title="Latest From Our Blog"
              subtitle="Scholarship tips, career guidance, preparation strategies, and educational insights."
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPreviews.map((post, i) => (
              <ScrollReveal key={post.id} delay={i * 0.1}>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <div className="bg-card rounded-2xl border border-border/50 overflow-hidden transition-all hover:shadow-card-hover hover:border-accent/20 h-full flex flex-col">
                    <div className="h-44 bg-gradient-to-br from-navy to-navy-light relative overflow-hidden">
                      <div className="absolute inset-0 bg-accent/5 group-hover:bg-accent/10 transition-colors" />
                      <div className="absolute bottom-3 left-3">
                        <Badge variant="secondary" className="text-xs bg-white/10 text-white border-0 backdrop-blur-sm">
                          {post.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="font-heading font-extrabold tracking-tight text-primary dark:text-white text-base mb-2 group-hover:text-accent transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-base text-muted-foreground leading-loose line-clamp-3 mb-4 flex-1">
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
        </div>
      </section>
    </div>
  );
}
