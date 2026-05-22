"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, GraduationCap, Sun, Moon, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { useTheme } from "@/components/providers/theme-provider";
import { mainNavLinks } from "@/constants/navigation";
import { cn } from "@/lib/utils";
import { Show, UserButton, SignInButton, SignUpButton } from "@clerk/nextjs";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Only show top-level nav links in the main bar
  const topNavLinks = mainNavLinks.filter((link) =>
    [
      "/",
      "/about",
      "/vision-mission",
      "/scholarships",
      "/courses",
      "/scholarship-test",
      "/blog",
      "/contact",
    ].includes(link.href),
  );

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass shadow-premium py-2" : "bg-transparent py-4",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          className="flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center" id="nav-logo">
            <div
              className="
      flex items-center rounded-[15px]
      border border-black/5 dark:border-white/10
      bg-white/80 dark:bg-[#111111]/80
      backdrop-blur-lg
      px-2 py-2
      shadow-sm dark:shadow-[0_4px_20px_rgba(0,0,0,0.35)]
    "
            >
              {/* Professional Border Accent */}
              <div>
                <Image
                  src="/logo.png"
                  alt="Milestone Scholarship Program"
                  width={240}
                  height={70}
                  priority
                  className="h-11 w-auto object-contain"
                />
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {topNavLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  id={`nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                    isActive
                      ? "text-accent"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-6 rounded-full bg-accent"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className={cn(
                "relative inline-flex h-7 w-12 items-center rounded-[8px] transition-colors duration-300 focus:outline-none shadow-sm",
                resolvedTheme === "dark" ? "bg-zinc-700" : "bg-blue-400"
              )}
              id="theme-toggle"
              aria-label="Toggle theme"
            >
              <span className="sr-only">Toggle theme</span>
              <div
                className={cn(
                  "inline-flex h-5 w-5 transform items-center justify-center rounded-[6px] bg-white shadow-sm transition-transform duration-300",
                  resolvedTheme === "dark" ? "translate-x-6" : "translate-x-1"
                )}
              >
                {resolvedTheme === "dark" ? (
                  <Moon className="h-3 w-3 text-zinc-700" />
                ) : (
                  <Sun className="h-3 w-3 text-blue-400" />
                )}
              </div>
            </button>

            {/* Auth — Desktop */}
            <Show when="signed-out">
              <div className="hidden lg:block">
                <SignUpButton>
                  <Button
                    className="gradient-gold text-white font-semibold rounded-xl px-5 h-9 shadow-gold hover:opacity-90 transition-opacity"
                    id="nav-apply-btn"
                  >
                    Apply Now
                  </Button>
                </SignUpButton>
              </div>
              <div className="hidden lg:block">
                <SignInButton>
                  <Button
                    variant="ghost"
                    className="rounded-xl h-9 text-sm"
                    id="nav-login-btn"
                  >
                    Sign In
                  </Button>
                </SignInButton>
              </div>
            </Show>

            <Show when="signed-in">
              <Link href="/dashboard" className="hidden lg:block">
                <Button
                  variant="ghost"
                  className="rounded-xl h-9 text-sm"
                  id="nav-dashboard-btn"
                >
                  Dashboard
                </Button>
              </Link>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "h-8 w-8",
                  },
                }}
              />
            </Show>

            {/* Mobile Menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger
                className="lg:hidden inline-flex items-center justify-center rounded-xl h-9 w-9 hover:bg-muted/50 transition-colors"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] p-0">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between px-5 py-4 border-b border-border">
                    <Link href="/" onClick={() => setMobileOpen(false)}>
                      <div className="bg-white py-2 px-3 rounded-xl shadow-md border border-black/5 dark:border-white/10">
                        <Image
                          src="/logo.png"
                          alt="Milestone Scholarship Program"
                          width={220}
                          height={60}
                          className="h-10 w-auto object-contain"
                        />
                      </div>
                    </Link>
                  </div>

                  {/* Mobile Links */}
                  <div className="flex-1 overflow-y-auto py-4 px-3">
                    {mainNavLinks.map((link, i) => {
                      const isActive = pathname === link.href;
                      const Icon = link.icon;
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className={cn(
                            "flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors mb-0.5",
                            isActive
                              ? "bg-accent/10 text-accent"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                          )}
                        >
                          <div className="flex items-center gap-3">
                            {Icon && <Icon className="h-4 w-4" />}
                            {link.label}
                          </div>
                          <ChevronRight className="h-3.5 w-3.5 opacity-50" />
                        </Link>
                      );
                    })}
                  </div>

                  {/* Mobile Actions */}
                  <div className="border-t border-border px-4 py-4 space-y-2">
                    <Show when="signed-out">
                      <SignInButton>
                        <Button
                          variant="outline"
                          className="w-full rounded-xl"
                          id="mobile-signin-btn"
                        >
                          Sign In
                        </Button>
                      </SignInButton>
                      <SignUpButton>
                        <Button
                          className="w-full gradient-gold text-white rounded-xl shadow-gold"
                          id="mobile-apply-btn"
                        >
                          Apply Now
                        </Button>
                      </SignUpButton>
                    </Show>
                    <Show when="signed-in">
                      <Link
                        href="/dashboard"
                        onClick={() => setMobileOpen(false)}
                      >
                        <Button
                          variant="outline"
                          className="w-full rounded-xl"
                          id="mobile-dashboard-btn"
                        >
                          Dashboard
                        </Button>
                      </Link>
                      <div className="flex items-center justify-center pt-2">
                        <UserButton
                          appearance={{
                            elements: {
                              avatarBox: "h-8 w-8",
                            },
                          }}
                        />
                      </div>
                    </Show>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
