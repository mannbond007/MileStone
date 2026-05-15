"use client";

import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  badge?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  lineColor?: "primary" | "gold";
}

export function SectionHeader({
  title,
  subtitle,
  badge,
  align = "center",
  className,
  titleClassName,
  lineColor = "primary",
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
        <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-accent/10 text-accent border border-accent/20">
          {badge}
        </span>
      )}
      <h2 className={cn("font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-primary dark:text-white text-balance", titleClassName)}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed mx-auto text-pretty">
          {subtitle}
        </p>
      )}
      {/* Decorative line */}
      <div
        className={cn(
          "mt-6 h-1.5 w-12 rounded-full",
          lineColor === "primary" ? "bg-primary" : "bg-accent",
          align === "center" && "mx-auto"
        )}
      />
    </div>
  );
}
