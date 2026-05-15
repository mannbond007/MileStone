import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { featuredCourses, scholarshipCategories } from "@/constants/home-data";
import { Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Courses Covered",
  description: "Explore courses covered by the Milestone Scholarship Program including MBBS, B.Tech, Law, Nursing, Pharmacy, BBA, and more.",
};

export default function CoursesPage() {
  return (
    <div className="pt-24">
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-muted/30 dark:bg-navy/20" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <SectionHeader
              badge="Courses"
              title="Courses We Cover"
              subtitle="Our scholarship program supports students across a wide range of academic disciplines and professional courses."
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h3 className="font-heading text-2xl font-extrabold tracking-tight text-primary dark:text-white mb-8">Featured Courses</h3>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredCourses.map((course, i) => {
              const Icon = course.icon;
              return (
                <ScrollReveal key={course.id} delay={i * 0.08}>
                  <div className="bg-card rounded-2xl border border-border/50 p-6 transition-all hover:shadow-card-hover h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3.5 w-3.5" />
                        {course.duration}
                      </div>
                    </div>
                    <h3 className="font-heading font-extrabold tracking-tight text-primary dark:text-white text-lg mb-2">{course.title}</h3>
                    <p className="text-base text-muted-foreground leading-loose mb-4 flex-1">{course.description}</p>
                    <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                      <div>
                        <span className="text-xs text-muted-foreground">Scholarship</span>
                        <p className="text-sm font-semibold text-accent">{course.scholarshipAmount}</p>
                      </div>
                      <Link href="/sign-up">
                        <Button variant="ghost" size="sm" className="rounded-lg">
                          Apply <ArrowRight className="ml-1 h-3.5 w-3.5" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Supported Courses */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h3 className="font-heading text-2xl font-extrabold tracking-tight text-primary dark:text-white mb-8">All Supported Courses</h3>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {scholarshipCategories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <ScrollReveal key={cat.id} delay={i * 0.03}>
                  <Link href={`/scholarships#${cat.id}`} className="group">
                    <div className="bg-card rounded-xl border border-border/50 p-4 flex items-center gap-3 transition-all hover:shadow-card-hover hover:border-accent/20">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: `${cat.color}15` }}>
                        <Icon className="h-5 w-5" style={{ color: cat.color }} />
                      </div>
                      <div>
                        <h4 className="font-extrabold tracking-tight text-primary dark:text-white text-sm group-hover:text-accent transition-colors">{cat.title}</h4>
                        <p className="text-xs text-muted-foreground">{cat.amount}</p>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
