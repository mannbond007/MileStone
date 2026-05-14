import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Milestone Scholarship Program | Empowering Dreams Beyond Financial Limits",
    template: "%s | Milestone Scholarship Program",
  },
  description:
    "India's premier scholarship ecosystem empowering students from underprivileged backgrounds to pursue higher education in MBBS, B.Tech, Law, Nursing, and more.",
  keywords: [
    "scholarship",
    "education",
    "MBBS scholarship",
    "B.Tech scholarship",
    "NEET coaching",
    "IIT JEE coaching",
    "India scholarship",
    "financial aid",
    "student support",
  ],
  authors: [{ name: "Milestone Scholarship Program" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://milestonescholarship.in",
    siteName: "Milestone Scholarship Program",
    title: "Milestone Scholarship Program | Empowering Dreams Beyond Financial Limits",
    description:
      "India's premier scholarship ecosystem empowering students from underprivileged backgrounds to pursue higher education.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <ClerkProvider>
          <ThemeProvider defaultTheme="dark" storageKey="milestone-theme">
            <header className="hidden">
              <Show when="signed-out">
                <SignInButton />
                <SignUpButton />
              </Show>
              <Show when="signed-in">
                <UserButton />
              </Show>
            </header>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
