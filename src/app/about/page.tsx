import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { Shield, Eye, Heart, Target, Users, Award, Compass, Lightbulb, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "About Program",
  description: "Learn about the Milestone Scholarship Program — our mission, vision, and commitment to empowering students across India.",
};

const values = [
  { icon: Shield, title: "Trust & Transparency", description: "Every scholarship decision is made with complete transparency and fairness." },
  { icon: Eye, title: "Equal Opportunity", description: "We believe every student deserves access to quality education regardless of background." },
  { icon: Heart, title: "Student-First", description: "Our programs are designed with students at the center of every decision." },
  { icon: Target, title: "Excellence", description: "We set high standards and help students achieve academic and professional excellence." },
  { icon: Users, title: "Community", description: "Building a nationwide community of scholars who support and uplift each other." },
  { icon: Award, title: "Impact", description: "Measuring success by the real-world impact we create in students' lives." },
];

const milestones = [
  { year: "2018", title: "Foundation Year", description: "Milestone Scholarship Program was established with a vision to democratize education." },
  { year: "2019", title: "First Cohort", description: "500+ students received scholarships in our inaugural year across 5 states." },
  { year: "2020", title: "Digital Expansion", description: "Launched online scholarship tests and digital application portal." },
  { year: "2021", title: "National Reach", description: "Expanded operations to 15+ states with 2,000+ scholars." },
  { year: "2023", title: "Mentorship Launch", description: "Introduced mentorship programs with 100+ industry professionals." },
  { year: "2025", title: "15,000+ Scholars", description: "Crossed the milestone of supporting 15,000+ students nationwide." },
];

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-muted/30 dark:bg-navy/20" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <SectionHeader
              badge="About Us"
              title="Building India's Most Trusted Scholarship Ecosystem"
              subtitle="Since 2018, we've been committed to breaking financial barriers in education and empowering the next generation of leaders, doctors, engineers, and changemakers."
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="bg-card rounded-2xl border border-border/50 p-8 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10">
                    <Compass className="h-5 w-5 text-gold" />
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-gold/10 text-gold border border-gold/20">Our Mission</span>
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Empowering Dreams Beyond Financial Limits</h3>
                <div className="text-muted-foreground leading-relaxed space-y-4 text-sm">
                  <p>
                    Our mission is to identify, support, and empower deserving and talented students from every background — whether they belong to rural areas, towns, or cities, and whether they are financially weak or financially stable but in need of proper guidance, mentorship, and opportunities.
                  </p>
                  <p>
                    Through the Milestone Scholarship Program, we aim to provide scholarships, rewards, mentorship, career counseling, academic support, skill development, and opportunity-driven initiatives that help students move confidently toward their goals.
                  </p>
                  <p>
                    Our mission is not only to reduce financial barriers in education, but also to bridge the gap between students and the right direction, awareness, mentorship, and opportunities required for success.
                  </p>
                  <p>
                    We strive to create an ecosystem where every student receives equal encouragement, recognition, and support based on talent, dedication, and potential.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="bg-card rounded-2xl border border-border/50 p-8 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10">
                    <Lightbulb className="h-5 w-5 text-gold" />
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-gold/10 text-gold border border-gold/20">Our Vision</span>
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">A Future Where Talent Wins Over Privilege</h3>
                <div className="text-muted-foreground leading-relaxed space-y-4 text-sm">
                  <p>
                    Our vision is to build a future where every student — whether from a village, town, or city — gets equal access to quality education, guidance, mentorship, and opportunities needed to achieve their dreams.
                  </p>
                  <p>
                    Milestone Scholarship Program is not limited only to financially weak students. While we strongly support students from rural, underserved, and economically challenged backgrounds, we also believe that many talented students, regardless of their financial condition, need the right mentorship, direction, motivation, and opportunities to unlock their true potential.
                  </p>
                  <p>
                    Through scholarships, rewards, educational support, mentorship, career guidance, and opportunity-based initiatives, we aim to empower all deserving and talented students without discrimination. Our goal is to ensure that no student is held back due to lack of financial support, proper guidance, awareness, or opportunity.
                  </p>
                  <p>
                    We envision creating future doctors, professionals, innovators, leaders, and responsible citizens whose success is defined by talent, hard work, determination, and the opportunities they receive — not by their background, location, or financial status.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why We Started */}
      <section className="py-16 md:py-20 bg-muted/20 dark:bg-navy/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader badge="Our Origin" title="Why We Started" />
            <div className="bg-card rounded-2xl border border-border/50 p-8 md:p-10 shadow-sm mt-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-8 -mr-8 opacity-[0.03] dark:opacity-[0.02] pointer-events-none">
                <BookOpen className="h-64 w-64 text-foreground" />
              </div>
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10">
                  <BookOpen className="h-6 w-6 text-gold" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground">The Origin Story</h3>
              </div>
              <div className="space-y-6 text-muted-foreground leading-relaxed relative z-10">
                <p>
                  The idea behind the Milestone Scholarship Program was not created overnight — it was built through years of real experiences, observations, and interactions with students from different backgrounds.
                </p>
                <p>
                  Being associated with the medical field and career counseling for many years, we had the opportunity to visit numerous schools, towns, and communities. During this journey, we met countless students who were exceptionally talented, hardworking, and full of potential. However, many of them lacked either financial support, proper guidance, mentorship, or awareness about the opportunities available to them.
                </p>
                <p>
                  We realized that while many scholarship programs exist, a large number of deserving students never even reach the stage where they can apply for them.
                </p>
                <p className="font-medium text-foreground border-l-4 border-gold pl-4 italic">
                  Milestone Scholarship Program is not just about financial aid — it is about guidance, mentorship, opportunity, and creating a pathway for students who need someone to believe in their potential.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader badge="Our Values" title="What We Stand For" />
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="bg-card rounded-2xl border border-border/50 p-6 transition-all hover:shadow-card-hover hover:border-gold/20">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 mb-4">
                      <Icon className="h-6 w-6 text-gold" />
                    </div>
                    <h3 className="font-heading font-semibold text-foreground text-lg mb-2">{val.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{val.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader badge="Our Journey" title="Milestones Along The Way" />
          </ScrollReveal>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
            <div className="space-y-8">
              {milestones.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="relative pl-12">
                    <div className="absolute left-2 top-1.5 h-5 w-5 rounded-full bg-gold flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-white" />
                    </div>
                    <span className="text-xs font-semibold text-gold uppercase tracking-wider">{item.year}</span>
                    <h3 className="font-heading font-semibold text-foreground text-lg mt-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-1">{item.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
