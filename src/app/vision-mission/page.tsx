import { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Rocket, Target } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

export const metadata: Metadata = {
  title: "Vision & Mission",
  description: "Discover the core vision and objectives of the Milestone Scholarship Program.",
};

export default function VisionMissionPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Header Section */}
      <section className="py-12 relative">
        <div className="absolute inset-0 bg-muted/30 dark:bg-navy/20 pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <SectionHeader
              badge="Our Core Purpose"
              title="Vision & Mission"
              subtitle="Empowering dreams beyond financial limits through structured mentorship, disciplined academic guidance, and equitable access to quality education."
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Split Layout Section */}
      <section className="py-10 md:py-16 relative overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-10">
            
            {/* Vision Card */}
            <ScrollReveal delay={0.1}>
              <div className="relative h-full rounded-3xl bg-card border border-accent/20 dark:border-accent/10 p-8 md:p-10 flex flex-col shadow-premium overflow-hidden">
                {/* Decorative glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute inset-0 bg-grid opacity-[0.03] dark:opacity-5 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center border border-accent/20 text-accent shadow-sm">
                      <Rocket className="h-7 w-7" />
                    </div>
                    <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-primary dark:text-white">
                      Our Vision
                    </h2>
                  </div>
                  
                  <p className="text-base md:text-lg text-muted-foreground dark:text-white/80 leading-relaxed font-medium mb-8 flex-1">
                    To create a focused and future-ready academic ecosystem where students receive the right guidance,
                    discipline, mentorship, and opportunities from an early stage to achieve their career goals successfully.
                  </p>
                  
                  <div className="pt-6 border-t border-border/50">
                    <p className="font-heading font-bold text-lg md:text-xl text-accent italic mb-2">
                      &ldquo;Focused Learning Today. Successful Career Tomorrow.&rdquo;
                    </p>
                    <p className="text-xs md:text-sm font-semibold text-primary dark:text-white uppercase tracking-wider">
                      Milestone Scholarship Program
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Mission / Objective Card */}
            <ScrollReveal delay={0.2}>
              <div className="relative h-full rounded-3xl bg-muted/20 dark:bg-white/[0.02] border border-primary/10 dark:border-white/10 p-8 md:p-10 flex flex-col shadow-premium overflow-hidden">
                {/* Decorative glow */}
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 text-primary dark:text-accent-light shadow-sm">
                      <Target className="h-7 w-7" />
                    </div>
                    <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-primary dark:text-white">
                      Program Objective
                    </h2>
                  </div>
                  
                  <div className="relative flex-1">
                    <span className="absolute -top-4 -left-2 text-primary/10 dark:text-white/5 font-serif text-6xl leading-none select-none">
                      &ldquo;
                    </span>
                    <p className="relative z-10 text-base md:text-lg text-muted-foreground dark:text-white/80 leading-relaxed font-medium pl-6 pt-2 text-pretty">
                      The program aims to help deserving students access quality preparation support, proper mentorship, disciplined academic guidance, and educational assistance so they can move toward their career goals with confidence and better opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>
    </div>
  );
}
