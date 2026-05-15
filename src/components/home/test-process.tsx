"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { testProcessSteps } from "@/constants/home-data";

export function TestProcess() {
  return (
    <section className="py-20 md:py-28 relative" id="test-process">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            badge="How It Works"
            title={<>Scholarship Test <span className="text-accent">Process</span></>}
            subtitle="A simple 4-step process to secure your scholarship and begin your academic journey."
          />
        </ScrollReveal>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />
          <div className="space-y-8 md:space-y-12">
            {testProcessSteps.map((step, i) => {
              const Icon = step.icon;
              const isEven = i % 2 === 0;
              return (
                <ScrollReveal key={i} delay={i * 0.15} direction={isEven ? "left" : "right"}>
                  <div className={`relative flex items-start gap-6 md:gap-0 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className={`flex-1 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                      <div className="bg-card rounded-2xl border border-border/50 p-5 md:p-6 shadow-premium hover:shadow-card-hover transition-shadow">
                        <span className="text-xs font-semibold text-accent uppercase tracking-wider">Step {step.step}</span>
                        <h3 className="font-heading font-extrabold tracking-tight text-primary dark:text-white text-lg mb-2 mt-2">{step.title}</h3>
                        <p className="text-base text-muted-foreground leading-loose">{step.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 flex h-7 w-7 items-center justify-center rounded-full bg-accent shadow-gold z-10">
                      <Icon className="h-3.5 w-3.5 text-white" />
                    </div>
                    <div className="hidden md:block flex-1" />
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
