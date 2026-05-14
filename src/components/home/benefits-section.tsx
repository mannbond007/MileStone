"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { benefits } from "@/constants/home-data";

export function BenefitsSection() {
  return (
    <section className="py-20 md:py-28 relative" id="benefits">
      <div className="absolute inset-0 bg-muted/30 dark:bg-navy/20" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            badge="Why Choose Us"
            title="Scholarship Benefits"
            subtitle="More than just financial aid — we provide a complete support ecosystem for your academic journey."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="group relative bg-card rounded-2xl border border-border/50 p-6 transition-all hover:shadow-card-hover hover:border-gold/20">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 mb-4 group-hover:bg-gold/20 transition-colors">
                    <Icon className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground text-lg mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
