import { HeroSection } from "@/components/home/hero-section";
import { ScholarshipCategories } from "@/components/home/scholarship-categories";
import { StatisticsSection } from "@/components/home/statistics-section";
import { FeaturedCourses } from "@/components/home/featured-courses";
import { BenefitsSection } from "@/components/home/benefits-section";
import { TestProcess } from "@/components/home/test-process";
import { SuccessStories } from "@/components/home/success-stories";
import { MentorshipSection } from "@/components/home/mentorship-section";
import { FAQPreview } from "@/components/home/faq-preview";
import { BlogPreview } from "@/components/home/blog-preview";
import { CTASection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ScholarshipCategories />
      <StatisticsSection />
      <FeaturedCourses />
      <BenefitsSection />
      <TestProcess />
      <SuccessStories />
      <MentorshipSection />
      <FAQPreview />
      <BlogPreview />
      <CTASection />
    </>
  );
}
