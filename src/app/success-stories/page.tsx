import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { successStories } from "@/constants/home-data";
import { Quote, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Success Stories",
  description: "Read real stories from Milestone scholars who transformed their lives through our scholarship program.",
};

export default function SuccessStoriesPage() {
  return (
    <div className="pt-24">
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-muted/30 dark:bg-navy/20" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <SectionHeader
              badge="Success Stories"
              title="Lives Transformed Through Education"
              subtitle="Meet the students who turned their dreams into reality with Milestone Scholarship support."
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6">
            {successStories.map((story, i) => (
              <ScrollReveal key={story.id} delay={i * 0.1}>
                <div className="bg-card rounded-2xl border border-border/50 p-6 transition-all hover:shadow-card-hover h-full flex flex-col">
                  <Quote className="h-8 w-8 text-accent/30 mb-4" />
                  <p className="text-base text-muted-foreground leading-loose mb-6 italic flex-1">
                    &ldquo;{story.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                      <GraduationCap className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="font-heading font-semibold text-foreground">{story.name}</p>
                      <p className="text-xs text-muted-foreground">{story.course} — {story.college}</p>
                    </div>
                    <div className="text-right">
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
    </div>
  );
}
