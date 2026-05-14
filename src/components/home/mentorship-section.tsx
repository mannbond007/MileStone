"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { mentors } from "@/constants/home-data";
import { UserCheck } from "lucide-react";

export function MentorshipSection() {
  return (
    <section className="py-20 md:py-28 relative" id="mentorship">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            badge="Mentorship"
            title="Learn From The Best"
            subtitle="Connect with experienced mentors who guide you through your academic and professional journey."
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {mentors.map((mentor, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="group bg-card rounded-2xl border border-border/50 p-6 text-center transition-all hover:shadow-card-hover hover:border-gold/20">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                  <UserCheck className="h-7 w-7 text-gold" />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-lg">{mentor.name}</h3>
                <p className="text-sm text-gold font-medium mt-1">{mentor.specialization}</p>
                <p className="text-xs text-muted-foreground mt-1">{mentor.experience} experience</p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-3">{mentor.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
