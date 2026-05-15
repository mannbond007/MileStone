"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, GraduationCap, Users, Trophy, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/animated-counter";

const floatingCards = [
  { amount: "₹5L", label: "MBBS", delay: 0, x: "10%", y: "20%" },
  { amount: "₹4L", label: "B.Tech", delay: 1, x: "75%", y: "15%" },
  { amount: "₹3L", label: "Law", delay: 2, x: "85%", y: "60%" },
  { amount: "₹2L", label: "Nursing", delay: 0.5, x: "5%", y: "65%" },
];

const stats = [
  { icon: Users, value: 15000, suffix: "+", label: "Students" },
  { icon: Trophy, value: 5200, suffix: "+", label: "Scholarships" },
  { icon: Building, value: 350, suffix: "+", label: "Colleges" },
  { icon: GraduationCap, value: 94, suffix: "%", label: "Success Rate" },
];

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      id="hero"
    >
      {/* Background */}
      <div className="absolute inset-0 gradient-hero dark:gradient-hero opacity-100 dark:opacity-100" />
      <div className="absolute inset-0 gradient-hero-light dark:hidden" />
      <div className="absolute inset-0 bg-grid" />

      {/* Radial glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/3 blur-[120px]" />

      {/* Floating Scholarship Cards */}
      {floatingCards.map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: card.delay + 0.8, duration: 0.5 }}
          className="absolute hidden lg:block"
          style={{ left: card.x, top: card.y }}
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
            className="glass rounded-2xl px-4 py-3 shadow-premium"
          >
            <div className="text-lg font-heading font-bold text-accent">{card.amount}</div>
            <div className="text-xs text-muted-foreground">{card.label}</div>
          </motion.div>
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center py-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-accent/10 text-accent border border-accent/20 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" />
            India&apos;s Premier Scholarship Platform
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-primary dark:text-white text-balance"
        >
          Empowering Dreams
          <br />
          <span className="text-accent">Beyond Financial Limits</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-muted-foreground dark:text-white/60 max-w-2xl mx-auto leading-relaxed text-pretty"
        >
          Scholarships up to ₹5,00,000 for MBBS, B.Tech, Law, Nursing & more.
          Transforming the future of 15,000+ students across India.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/sign-up">
            <Button
              size="lg"
              className="gradient-gold text-white font-semibold rounded-xl px-8 h-12 shadow-gold hover:opacity-90 transition-all text-base group"
              id="hero-apply-btn"
            >
              Apply Now
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="/scholarships">
            <Button
              size="lg"
              variant="outline"
              className="rounded-xl px-8 h-12 text-base border-border/50 hover:bg-muted/50 dark:border-white/10 dark:hover:bg-white/5"
              id="hero-explore-btn"
            >
              Explore Scholarships
            </Button>
          </Link>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-16 md:mt-20 glass rounded-2xl p-6 md:p-8 shadow-premium max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Icon className="h-5 w-5 text-accent mr-2" />
                    <span className="text-2xl md:text-3xl font-heading font-extrabold tracking-tight text-primary dark:text-white">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground dark:text-white/50 font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
