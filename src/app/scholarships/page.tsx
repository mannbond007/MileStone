import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { scholarshipCategories } from "@/constants/home-data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Scholarships",
  description: "Explore 16+ scholarship categories including MBBS, B.Tech, Law, Nursing, and more at Milestone Scholarship Program.",
};

export default function ScholarshipsPage() {
  return (
    <div className="pt-24">
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-muted/30 dark:bg-navy/20" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <SectionHeader
              badge="All Scholarships"
              title="Find Your Perfect Scholarship"
              subtitle="Browse through our comprehensive range of scholarships covering medical, engineering, arts, commerce, law, and more."
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {scholarshipCategories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <ScrollReveal key={cat.id} delay={i * 0.04}>
                  <div
                    id={cat.id}
                    className="group bg-card rounded-2xl border border-border/50 p-6 transition-all hover:shadow-card-hover hover:border-accent/20 h-full flex flex-col"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl mb-4" style={{ backgroundColor: `${cat.color}15` }}>
                      <Icon className="h-6 w-6" style={{ color: cat.color }} />
                    </div>
                    <h3 className="font-heading font-extrabold tracking-tight text-primary dark:text-white text-lg mb-2">{cat.title}</h3>
                    <p className="text-base text-muted-foreground leading-loose mb-4 flex-1">{cat.description}</p>
                    <div className="space-y-2 pt-4 border-t border-border/50">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Scholarship</span>
                        <span className="font-semibold text-accent">{cat.amount}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Eligibility</span>
                        <span className="text-foreground text-xs text-right max-w-[60%]">{cat.eligibility}</span>
                      </div>
                    </div>
                    <Link href="/sign-up" className="mt-4">
                      <Button size="sm" className="w-full gradient-gold text-white rounded-xl shadow-gold hover:opacity-90 group/btn">
                        Apply Now
                        <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
