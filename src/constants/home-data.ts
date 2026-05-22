import {
  GraduationCap,
  Stethoscope,
  Cpu,
  Briefcase,
  BookOpen,
  FileText,
  FlaskConical,
  HeartPulse,
  Pill,
  Leaf,
  Monitor,
  Calculator,
  Palette,
  Scale,
  Mic,
  Atom,
  type LucideIcon,
  Trophy,
  Users,
  Building,
  TrendingUp,
  Banknote,
  UserCheck,
  Target,
  Clock,
  Award,
  Rocket,
  Shield,
  Star,
  CheckCircle,
} from "lucide-react";

/* ========================================
   SCHOLARSHIP CATEGORIES
   ======================================== */
export interface ScholarshipCategory {
  id: string;
  title: string;
  description: string;
  amount: string;
  eligibility: string;
  icon: LucideIcon;
  color: string;
}

export const scholarshipCategories: ScholarshipCategory[] = [
  {
    id: "mbbs",
    title: "MBBS",
    description: "Full scholarship support for aspiring medical professionals pursuing MBBS.",
    amount: "Up to ₹5,00,000",
    eligibility: "NEET qualified, 60%+ in 12th",
    icon: Stethoscope,
    color: "#EF4444",
  },
  {
    id: "bams",
    title: "BAMS",
    description: "Ayurvedic medicine scholarship for students passionate about traditional healing.",
    amount: "Up to ₹3,00,000",
    eligibility: "NEET qualified, 55%+ in 12th",
    icon: HeartPulse,
    color: "#10B981",
  },
  {
    id: "btech",
    title: "B.Tech",
    description: "Engineering excellence scholarship for future tech innovators and builders.",
    amount: "Up to ₹4,00,000",
    eligibility: "JEE qualified or 70%+ in 12th PCM",
    icon: Cpu,
    color: "#3B82F6",
  },
  {
    id: "bba",
    title: "BBA",
    description: "Business administration scholarship for budding entrepreneurs and managers.",
    amount: "Up to ₹2,00,000",
    eligibility: "60%+ in 12th",
    icon: Briefcase,
    color: "#8B5CF6",
  },
  {
    id: "ba",
    title: "BA",
    description: "Arts & humanities scholarship for creative minds and critical thinkers.",
    amount: "Up to ₹1,50,000",
    eligibility: "55%+ in 12th",
    icon: BookOpen,
    color: "#F59E0B",
  },
  {
    id: "bsc",
    title: "B.Sc",
    description: "Science scholarship for students exploring the frontiers of scientific knowledge.",
    amount: "Up to ₹2,00,000",
    eligibility: "60%+ in 12th Science",
    icon: FlaskConical,
    color: "#06B6D4",
  },
  {
    id: "neet",
    title: "NEET Coaching",
    description: "Premium coaching scholarship for NEET aspirants from underprivileged backgrounds.",
    amount: "Up to ₹2,50,000",
    eligibility: "Class 11/12 Science student",
    icon: Atom,
    color: "#EC4899",
  },
  {
    id: "iit-jee",
    title: "IIT-JEE Coaching",
    description: "Elite coaching scholarship to help students crack JEE and enter top IITs.",
    amount: "Up to ₹3,00,000",
    eligibility: "Class 11/12 PCM student",
    icon: Rocket,
    color: "#F97316",
  },
  {
    id: "nursing",
    title: "Nursing",
    description: "Healthcare scholarship for students pursuing nursing and patient care careers.",
    amount: "Up to ₹2,00,000",
    eligibility: "55%+ in 12th Science",
    icon: HeartPulse,
    color: "#14B8A6",
  },
  {
    id: "pharmacy",
    title: "Pharmacy",
    description: "Pharmaceutical sciences scholarship for future pharmacists and researchers.",
    amount: "Up to ₹2,50,000",
    eligibility: "60%+ in 12th PCB",
    icon: Pill,
    color: "#6366F1",
  },
  {
    id: "agriculture",
    title: "Agriculture",
    description: "Agricultural sciences scholarship for students committed to food security.",
    amount: "Up to ₹2,00,000",
    eligibility: "55%+ in 12th",
    icon: Leaf,
    color: "#22C55E",
  },
  {
    id: "bca",
    title: "BCA",
    description: "Computer applications scholarship for aspiring software developers.",
    amount: "Up to ₹2,00,000",
    eligibility: "60%+ in 12th with Maths",
    icon: Monitor,
    color: "#0EA5E9",
  },
  {
    id: "bcom",
    title: "B.Com",
    description: "Commerce scholarship for students building careers in finance and accounting.",
    amount: "Up to ₹1,50,000",
    eligibility: "55%+ in 12th Commerce",
    icon: Calculator,
    color: "#A855F7",
  },
  {
    id: "design",
    title: "Design",
    description: "Creative design scholarship for students in UI/UX, fashion, and graphic design.",
    amount: "Up to ₹2,00,000",
    eligibility: "Portfolio + 55%+ in 12th",
    icon: Palette,
    color: "#E11D48",
  },
  {
    id: "law",
    title: "Law",
    description: "Legal studies scholarship for future advocates and justice seekers.",
    amount: "Up to ₹3,00,000",
    eligibility: "CLAT qualified or 60%+ in 12th",
    icon: Scale,
    color: "#D97706",
  },
  {
    id: "journalism",
    title: "Journalism",
    description: "Media & communication scholarship for aspiring journalists and storytellers.",
    amount: "Up to ₹1,50,000",
    eligibility: "55%+ in 12th",
    icon: Mic,
    color: "#7C3AED",
  },
];

/* ========================================
   STATISTICS
   ======================================== */
export interface Statistic {
  label: string;
  value: number;
  suffix: string;
  icon: LucideIcon;
}

export const statistics: Statistic[] = [
  { label: "Students Supported", value: 15000, suffix: "+", icon: Users },
  { label: "Scholarships Awarded", value: 5200, suffix: "+", icon: Trophy },
  { label: "Partner Institutions", value: 1750, suffix: "+", icon: Building },
  { label: "Success Rate", value: 96, suffix: "%", icon: TrendingUp },
];

/* ========================================
   FEATURED COURSES
   ======================================== */
export interface FeaturedCourse {
  id: string;
  title: string;
  duration: string;
  scholarshipAmount: string;
  description: string;
  icon: LucideIcon;
}

export const featuredCourses: FeaturedCourse[] = [
  {
    id: "mbbs",
    title: "MBBS",
    duration: "5.5 Years",
    scholarshipAmount: "Up to ₹5,00,000",
    description: "Become a certified medical doctor with full financial support throughout your journey.",
    icon: Stethoscope,
  },
  {
    id: "btech",
    title: "B.Tech Engineering",
    duration: "4 Years",
    scholarshipAmount: "Up to ₹4,00,000",
    description: "Master cutting-edge technology and engineering with industry-aligned curriculum.",
    icon: Cpu,
  },
  {
    id: "law",
    title: "BA LLB / LLB",
    duration: "5 / 3 Years",
    scholarshipAmount: "Up to ₹3,00,000",
    description: "Build a career in law with access to top legal institutions and mentorship.",
    icon: Scale,
  },
  {
    id: "nursing",
    title: "B.Sc Nursing",
    duration: "4 Years",
    scholarshipAmount: "Up to ₹2,00,000",
    description: "Join the healthcare frontlines with comprehensive nursing education support.",
    icon: HeartPulse,
  },
  {
    id: "pharmacy",
    title: "B.Pharm",
    duration: "4 Years",
    scholarshipAmount: "Up to ₹2,50,000",
    description: "Explore pharmaceutical sciences with hands-on lab experience and mentorship.",
    icon: Pill,
  },
  {
    id: "bba",
    title: "BBA",
    duration: "3 Years",
    scholarshipAmount: "Up to ₹2,00,000",
    description: "Develop business acumen and leadership skills for the corporate world.",
    icon: Briefcase,
  },
];

/* ========================================
   BENEFITS
   ======================================== */
export interface Benefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const benefits: Benefit[] = [
  {
    title: "Financial Support",
    description: "Scholarship assistance, tuition fee support, fee waivers, educational rewards, and academic benefit programs for deserving students.",
    icon: Banknote,
  },
  {
    title: "Mentorship & Guidance",
    description: "Personalized mentorship, academic guidance, and career support from experienced educators and professionals.",
    icon: UserCheck,
  },
  {
    title: "Career & Admission Support",
    description: "Career counseling, college selection guidance, admission assistance, resume support, and future career planning.",
    icon: Target,
  },
  {
    title: "Competitive Exam Support",
    description: "Study resources, mock tests, mentorship, preparation guidance, and academic support for NEET, JEE, CUET, CLAT, SSC & other exams.",
    icon: FileText,
  },
  {
    title: "Skill Development Programs",
    description: "Workshops, training sessions, personality development, communication skills, and industry-oriented learning opportunities.",
    icon: Award,
  },
  {
    title: "Internship & Professional Exposure",
    description: "Internship opportunities, training programs, certification support, project guidance, and industry exposure initiatives.",
    icon: Briefcase,
  },
  {
    title: "Placement & Future Opportunities",
    description: "Career opportunity support, professional networking, placement assistance, and higher education guidance.",
    icon: Rocket,
  },
  {
    title: "Student Support Ecosystem",
    description: "A complete support platform focused on education, mentorship, growth, opportunities, and student success.",
    icon: Shield,
  },
];

/* ========================================
   SCHOLARSHIP PROCESS STEPS
   ======================================== */
export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const scholarshipProcessSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Register Online",
    description: "Create your account, complete the application form, and register for the scholarship program.",
    icon: Users,
  },
  {
    step: 2,
    title: "Take the Scholarship Test",
    description: "Appear for the online/offline scholarship assessment test based on your selected course or category.\nThe selection process may include Phase 1 and Phase 2 evaluations.",
    icon: FileText,
  },
  {
    step: 3,
    title: "Get Your Results",
    description: "Receive your scholarship test score, merit ranking, and eligibility status.",
    icon: Trophy,
  },
  {
    step: 4,
    title: "Choose Your Institution",
    description: "Select from listed partner universities, colleges, coaching institutes, or educational institutions participating in the program.",
    icon: Building,
  },
  {
    step: 5,
    title: "Complete Admission Process",
    description: "Eligible students may receive tuition fee concessions, scholarship-linked admission benefits, cashback support, fee waivers, or educational rewards based on merit rank, institution policy, and scholarship category.\nSome institutions may provide direct fee reductions during admission, while in certain cases scholarship/reward benefits may be processed after admission as per applicable terms and timelines.",
    icon: CheckCircle,
  },
  {
    step: 6,
    title: "Receive Scholarship Benefits",
    description: "Selected students may receive scholarship support, educational rewards, cashback assistance, fee concessions, mentorship, or institutional benefits and begin their academic journey with continued guidance and support.",
    icon: GraduationCap,
  },
];

/* ========================================
   SUCCESS STORIES
   ======================================== */
export interface SuccessStory {
  id: string;
  name: string;
  course: string;
  scholarship: string;
  quote: string;
  year: string;
  college: string;
}

export const successStories: SuccessStory[] = [
  {
    id: "1",
    name: "Priya Sharma",
    course: "MBBS",
    scholarship: "₹5,00,000",
    quote: "Milestone Scholarship turned my dream of becoming a doctor into reality. Without this support, medical education would have remained just a dream.",
    year: "2024",
    college: "AIIMS New Delhi",
  },
  {
    id: "2",
    name: "Rahul Kumar",
    course: "B.Tech CSE",
    scholarship: "₹4,00,000",
    quote: "Coming from a small village, I never imagined studying at a top engineering college. Milestone made it possible with their generous scholarship.",
    year: "2024",
    college: "IIT Bombay",
  },
  {
    id: "3",
    name: "Ananya Patel",
    course: "BA LLB",
    scholarship: "₹3,00,000",
    quote: "The mentorship and financial support from Milestone helped me secure admission at one of India's best law schools. Forever grateful!",
    year: "2023",
    college: "NLU Delhi",
  },
  {
    id: "4",
    name: "Vikash Yadav",
    course: "B.Sc Nursing",
    scholarship: "₹2,00,000",
    quote: "My family couldn't afford nursing education. Milestone not only funded my studies but also provided career guidance that changed my life.",
    year: "2023",
    college: "JIPMER Puducherry",
  },
];

/* ========================================
   FAQs
   ======================================== */
export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "Who is eligible for the Milestone Scholarship?",
    answer: "Students from economically weaker sections who have scored 55% or above in their last qualifying examination are eligible. Specific eligibility varies by scholarship category.",
  },
  {
    question: "How do I apply for the scholarship?",
    answer: "Register on our platform, fill out the application form with your academic details, upload required documents, and take the scholarship test. Our team will review your application within 7-10 working days.",
  },
  {
    question: "What documents are required?",
    answer: "You'll need your Aadhaar card, last exam marksheet, passport-size photograph, and any relevant certificates (caste certificate, income certificate, etc.).",
  },
  {
    question: "Is there a scholarship test?",
    answer: "Yes, all applicants must take an online scholarship assessment test. The test evaluates your aptitude and subject knowledge relevant to your chosen course.",
  },
  {
    question: "When will I receive the scholarship amount?",
    answer: "Approved scholarship amounts are disbursed directly to the institution or to the student's bank account within 30 days of final approval.",
  },
  {
    question: "Can I apply for multiple scholarships?",
    answer: "You can apply for one scholarship at a time. However, if your first application is not approved, you may apply for a different category in the next cycle.",
  },
];

/* ========================================
   BLOG PREVIEWS
   ======================================== */
export interface BlogPreview {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  readTime: string;
  category: string;
}

export const blogPreviews: BlogPreview[] = [
  {
    id: "1",
    title: "Top 10 Scholarships for Medical Students in 2025",
    excerpt: "Discover the most valuable scholarship opportunities available for aspiring medical professionals across India.",
    slug: "top-scholarships-medical-students-2025",
    date: "2025-04-15",
    readTime: "5 min read",
    category: "Scholarships",
  },
  {
    id: "2",
    title: "How to Crack Scholarship Tests: Expert Tips",
    excerpt: "Learn proven strategies and preparation techniques from scholarship test toppers and education experts.",
    slug: "crack-scholarship-tests-expert-tips",
    date: "2025-04-10",
    readTime: "7 min read",
    category: "Preparation",
  },
  {
    id: "3",
    title: "Career Guidance: Choosing the Right Course After 12th",
    excerpt: "A comprehensive guide to help students make informed decisions about their higher education path.",
    slug: "career-guidance-choosing-course-after-12th",
    date: "2025-04-05",
    readTime: "6 min read",
    category: "Career",
  },
];

/* ========================================
   MENTORSHIP
   ======================================== */
export interface Mentor {
  name: string;
  specialization: string;
  experience: string;
  description: string;
}

export const mentors: Mentor[] = [
  {
    name: "Dr. Arun Mehta",
    specialization: "Medical Sciences",
    experience: "20+ years",
    description: "Former AIIMS professor guiding MBBS aspirants toward successful medical careers.",
  },
  {
    name: "Prof. Sneha Iyer",
    specialization: "Engineering & Technology",
    experience: "15+ years",
    description: "IIT alumna mentoring B.Tech students in cutting-edge technology domains.",
  },
  {
    name: "Adv. Rajesh Nair",
    specialization: "Law & Legal Studies",
    experience: "18+ years",
    description: "Supreme Court advocate providing career guidance to aspiring lawyers.",
  },
];

/* ========================================
   IMPORTANT DATES
   ======================================== */
export interface ImportantDate {
  title: string;
  date: string;
  description: string;
  status: "upcoming" | "ongoing" | "completed";
  icon: LucideIcon;
}

export const importantDates: ImportantDate[] = [
  {
    title: "Registration Opens",
    date: "January 15, 2025",
    description: "Online registration portal opens for all scholarship categories.",
    status: "completed",
    icon: Users,
  },
  {
    title: "Application Deadline",
    date: "March 31, 2025",
    description: "Last date to submit completed applications with all documents.",
    status: "completed",
    icon: FileText,
  },
  {
    title: "Scholarship Test",
    date: "April 20, 2025",
    description: "Online scholarship assessment test for all registered candidates.",
    status: "completed",
    icon: BookOpen,
  },
  {
    title: "Results Announcement",
    date: "May 15, 2025",
    description: "Publication of scholarship test results and merit list.",
    status: "ongoing",
    icon: Trophy,
  },
  {
    title: "Counselling Begins",
    date: "June 1, 2025",
    description: "One-on-one counselling sessions for selected candidates.",
    status: "upcoming",
    icon: UserCheck,
  },
  {
    title: "Scholarship Disbursement",
    date: "July 15, 2025",
    description: "Scholarship amounts disbursed to approved candidates.",
    status: "upcoming",
    icon: Shield,
  },
];
