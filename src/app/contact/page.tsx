"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const contactInfo = [
  { icon: Mail, label: "Email", value: "info@milestonescholarship.in", href: "mailto:info@milestonescholarship.in" },
  { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: MapPin, label: "Office Address", value: "Connaught Place, New Delhi, India 110001", href: "#" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-24 relative overflow-hidden">
      {/* Background Gradients for Premium Feel */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-gold/10 dark:bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header Section */}
      <section className="py-12 md:py-20 relative z-10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-6">
              <MessageCircle className="h-4 w-4" />
              <span className="text-sm font-semibold tracking-wide">24/7 Student Support</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-foreground mb-6">
              Need Help With Your <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-500">Scholarship Journey?</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Our team is here to guide you through applications, eligibility, scholarships, and career support. We're dedicated to your success.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="pb-20 md:pb-32 relative z-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            
            {/* LEFT: Premium Contact Card */}
            <ScrollReveal>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-gold/30 to-blue-500/20 rounded-3xl blur-xl opacity-50 dark:opacity-30 pointer-events-none" />
                <div className="relative bg-white/80 dark:bg-navy/80 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
                  
                  <h3 className="text-2xl font-heading font-bold mb-8 text-foreground">
                    Get in Touch
                  </h3>

                  <div className="space-y-8">
                    {contactInfo.map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <a key={i} href={item.href} className="flex items-start gap-5 group">
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/10 shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
                            <Icon className="h-6 w-6 text-gold" />
                          </div>
                          <div className="pt-1">
                            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">{item.label}</p>
                            <p className="text-lg font-medium text-foreground group-hover:text-gold transition-colors">{item.value}</p>
                          </div>
                        </a>
                      );
                    })}
                  </div>

                  {/* Trust Signals */}
                  <div className="mt-12 pt-10 border-t border-black/5 dark:border-white/10 grid sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-foreground font-semibold">
                        <Clock className="h-5 w-5 text-blue-500" />
                        Quick Response
                      </div>
                      <p className="text-sm text-muted-foreground">Typically replies within 2-4 hours</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-foreground font-semibold">
                        <ShieldCheck className="h-5 w-5 text-green-500" />
                        Trusted Support
                      </div>
                      <p className="text-sm text-muted-foreground">Dedicated guidance for students</p>
                    </div>
                  </div>

                </div>
              </div>
            </ScrollReveal>

            {/* RIGHT: Modern Contact Form */}
            <ScrollReveal delay={0.1}>
              <div className="bg-card rounded-3xl border border-border/50 p-8 md:p-12 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-3xl rounded-full pointer-events-none" />
                
                {submitted ? (
                  <div className="text-center py-20 relative z-10">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10 mx-auto mb-6">
                      <Send className="h-8 w-8 text-green-500" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Message Sent Successfully!</h3>
                    <p className="text-muted-foreground">Thank you for reaching out. Our support team will get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                    className="space-y-6 relative z-10"
                  >
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2.5">
                        <Label htmlFor="name" className="text-sm font-semibold text-foreground/80">Full Name</Label>
                        <Input id="name" placeholder="John Doe" required className="rounded-xl h-12 bg-muted/50 border-transparent focus-visible:bg-transparent focus-visible:ring-gold focus-visible:ring-offset-0" />
                      </div>
                      <div className="space-y-2.5">
                        <Label htmlFor="email" className="text-sm font-semibold text-foreground/80">Email Address</Label>
                        <Input id="email" type="email" placeholder="john@example.com" required className="rounded-xl h-12 bg-muted/50 border-transparent focus-visible:bg-transparent focus-visible:ring-gold focus-visible:ring-offset-0" />
                      </div>
                    </div>
                    
                    <div className="space-y-2.5">
                      <Label htmlFor="subject" className="text-sm font-semibold text-foreground/80">Subject</Label>
                      <Input id="subject" placeholder="How can we help you?" required className="rounded-xl h-12 bg-muted/50 border-transparent focus-visible:bg-transparent focus-visible:ring-gold focus-visible:ring-offset-0" />
                    </div>
                    
                    <div className="space-y-2.5">
                      <Label htmlFor="message" className="text-sm font-semibold text-foreground/80">Message</Label>
                      <Textarea id="message" placeholder="Please describe your query in detail..." rows={6} required className="rounded-xl resize-none bg-muted/50 border-transparent focus-visible:bg-transparent focus-visible:ring-gold focus-visible:ring-offset-0 pt-4" />
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full gradient-gold text-white font-semibold rounded-xl h-12 text-base shadow-gold hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200 mt-2"
                      id="contact-submit-btn"
                    >
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                )}
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>
    </div>
  );
}
