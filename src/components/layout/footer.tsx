import Link from "next/link";
import Image from "next/image";
import { GraduationCap, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { footerLinks } from "@/constants/navigation";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="relative bg-navy text-white/80" id="footer">
      {/* Top gradient line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center" id="nav-logo">
            <div
              className="
      flex items-center rounded-[15px]
      border border-black/5 dark:border-white/10
      bg-white/80 dark:bg-[#111111]/80
      backdrop-blur-md
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
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              Empowering dreams beyond financial limits. India&apos;s premier scholarship
              ecosystem for underprivileged students pursuing higher education.
            </p>
            {/* Contact Info */}
            <div className="space-y-2.5 text-sm">
              <div className="flex items-center gap-2.5 text-white/50">
                <Mail className="h-4 w-4 text-accent" />
                <span>info@milestonescholarship.in</span>
              </div>
              <div className="flex items-center gap-2.5 text-white/50">
                <Phone className="h-4 w-4 text-accent" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2.5 text-white/50">
                <MapPin className="h-4 w-4 text-accent" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-extrabold tracking-tight text-white text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-accent transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Scholarships */}
          <div>
            <h3 className="font-heading font-extrabold tracking-tight text-white text-sm uppercase tracking-wider mb-5">
              Scholarships
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.scholarships.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-accent transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources + Newsletter */}
          <div>
            <h3 className="font-heading font-extrabold tracking-tight text-white text-sm uppercase tracking-wider mb-5">
              Resources
            </h3>
            <ul className="space-y-2.5 mb-8">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-accent transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div>
              <h4 className="font-heading font-extrabold tracking-tight text-white text-xs uppercase tracking-wider mb-3">
                Newsletter
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-accent/50 transition-colors"
                  id="newsletter-email"
                />
                <button
                  className="px-3 py-2 rounded-lg gradient-gold text-white text-sm font-semibold shadow-gold hover:opacity-90 transition-opacity"
                  id="newsletter-submit"
                >
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <Separator className="my-10 bg-white/10" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Milestone Scholarship Program. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
            <Link href="/refund" className="hover:text-accent transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
