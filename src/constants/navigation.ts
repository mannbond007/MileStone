import {
  GraduationCap,
  BookOpen,
  FileText,
  Calendar,
  HelpCircle,
  Trophy,
  Newspaper,
  Phone,
  Home,
  Info,
  type LucideIcon,
} from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
  icon?: LucideIcon;
}

export const mainNavLinks: NavLink[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: Info },
  { label: "Scholarships", href: "/scholarships", icon: GraduationCap },
  { label: "Courses", href: "/courses", icon: BookOpen },
  { label: "Scholarship Test", href: "/scholarship-test", icon: FileText },
  { label: "How to Apply", href: "/how-to-apply", icon: FileText },
  { label: "Important Dates", href: "/important-dates", icon: Calendar },
  { label: "FAQs", href: "/faqs", icon: HelpCircle },
  { label: "Success Stories", href: "/success-stories", icon: Trophy },
  { label: "Blog", href: "/blog", icon: Newspaper },
  { label: "Contact", href: "/contact", icon: Phone },
];

export const footerLinks = {
  quickLinks: [
    { label: "About Program", href: "/about" },
    { label: "How to Apply", href: "/how-to-apply" },
    { label: "Important Dates", href: "/important-dates" },
    { label: "FAQs", href: "/faqs" },
    { label: "Contact Us", href: "/contact" },
  ],
  scholarships: [
    { label: "MBBS Scholarship", href: "/scholarships#mbbs" },
    { label: "B.Tech Scholarship", href: "/scholarships#btech" },
    { label: "NEET Coaching", href: "/scholarships#neet" },
    { label: "IIT-JEE Coaching", href: "/scholarships#iit-jee" },
    { label: "Nursing Scholarship", href: "/scholarships#nursing" },
    { label: "All Scholarships", href: "/scholarships" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Success Stories", href: "/success-stories" },
    { label: "Scholarship Test", href: "/scholarship-test" },
    { label: "Courses Covered", href: "/courses" },
  ],
};
