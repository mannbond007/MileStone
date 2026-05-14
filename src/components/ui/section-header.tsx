"use client";

import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  badge,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {badge && (
        <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gold/10 text-gold border border-gold/20">
          {badge}
        </span>
      )}
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed mx-auto text-pretty">
          {subtitle}
        </p>
      )}
      {/* Decorative gold line */}
      <div
        className={cn(
          "mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-gold to-gold-light",
          align === "center" && "mx-auto"
        )}
      />
    </div>
  );
}
