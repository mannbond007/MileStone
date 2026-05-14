"use client";

import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { featuredCourses } from "@/constants/home-data";
import { motion } from "framer-motion";

export function FeaturedCourses() {
  return (
    <section className="py-20 md:py-28 relative" id="featured-courses">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            badge="Courses Covered"
            title="Courses We Support"
            subtitle="From medical sciences to engineering, we cover a wide range of academic disciplines."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {featuredCourses.map((course, i) => {
            const Icon = course.icon;
            return (
              <ScrollReveal key={course.id} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative bg-card rounded-2xl border border-border/50 p-6 overflow-hidden transition-shadow hover:shadow-card-hover"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10">
                        <Icon className="h-6 w-6 text-gold" />
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3.5 w-3.5" />
                        {course.duration}
                      </div>
                    </div>

                    <h3 className="font-heading font-semibold text-foreground text-lg mb-2">
                      {course.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {course.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <div>
                        <span className="text-xs text-muted-foreground">Scholarship</span>
                        <p className="text-sm font-semibold text-gold">{course.scholarshipAmount}</p>
                      </div>
                      <Link href={`/scholarships#${course.id}`}>
                        <Button variant="ghost" size="sm" className="rounded-lg group/btn">
                          Learn More
                          <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 text-center">
            <Link href="/courses">
              <Button
                variant="outline"
                size="lg"
                className="rounded-xl px-8"
                id="view-all-courses-btn"
              >
                View All Courses
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
