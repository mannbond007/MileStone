"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionHeader } from "@/components/ui/section-header";
import { scholarshipCategories } from "@/constants/home-data";

export function ScholarshipCategories() {
  return (
    <section className="py-20 md:py-28 relative" id="scholarship-categories">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            badge="Scholarship Programs"
            title={<>Explore Our <span className="text-accent">Scholarships</span></>}
            subtitle="Choose from 16+ scholarship categories across medical, engineering, law, arts, and more."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          {scholarshipCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <ScrollReveal key={cat.id} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative bg-card rounded-2xl border border-border/50 p-5 cursor-pointer overflow-hidden transition-shadow hover:shadow-card-hover"
                >
                  {/* Accent bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: cat.color }}
                  />

                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors"
                      style={{ backgroundColor: `${cat.color}15` }}
                    >
                      <Icon className="h-5 w-5" style={{ color: cat.color }} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading font-extrabold tracking-tight text-primary dark:text-white text-sm mb-1">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-3">
                        {cat.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-accent">{cat.amount}</span>
                        <ArrowRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 text-center">
            <Link
              href="/scholarships"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-light transition-colors group"
            >
              View All Scholarships
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
