"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { successStories } from "@/constants/home-data";
import { Quote, GraduationCap } from "lucide-react";

export function SuccessStories() {
  return (
    <section className="py-20 md:py-28 relative" id="success-stories-preview">
      <div className="absolute inset-0 bg-muted/30 dark:bg-navy/20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            badge="Success Stories"
            title={<>Students Who <span className="text-accent">Made It</span></>}
            subtitle="Real stories from real students whose lives were transformed through our scholarship program."
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {successStories.map((story, i) => (
            <ScrollReveal key={story.id} delay={i * 0.1}>
              <div className="bg-card rounded-2xl border border-border/50 p-6 transition-shadow hover:shadow-card-hover h-full">
                <Quote className="h-8 w-8 text-accent/30 mb-4" />
                <p className="text-base text-muted-foreground leading-loose mb-6 italic">
                  &ldquo;{story.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                    <GraduationCap className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground text-sm">{story.name}</p>
                    <p className="text-xs text-muted-foreground">{story.course} — {story.college} ({story.year})</p>
                  </div>
                  <div className="ml-auto text-right">
                    <p className="text-xs text-muted-foreground">Scholarship</p>
                    <p className="text-sm font-semibold text-accent">{story.scholarship}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
