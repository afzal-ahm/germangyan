import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, Mail, MapPin, MessageCircle, CheckCircle2, AlertCircle } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import { FORMSPREE_ENDPOINT } from "@/config";

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const isConfigured = FORMSPREE_ENDPOINT && FORMSPREE_ENDPOINT !== "YOUR_FORMSPREE_ENDPOINT_HERE";

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSending(true);

    if (!isConfigured) {
      setSending(false);
      setError("Form email is not configured yet. Please set up Formspree in src/config.ts.");
      return;
    }

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSent(true);
      } else {
        const json = await res.json().catch(() => ({}));
        setError((json as { error?: string }).error ?? "Submission failed. Please try again or WhatsApp us.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="min-h-screen bg-background font-sans pt-20">
      <PageMeta
        title="Contact Germangyan | Book a Free Demo Class"
        description="Get in touch with German Gyan — call or WhatsApp +91-96434-30783, email contact@germangyan.com, or fill in our inquiry form to book a free demo class."
        keywords="contact German Gyan, German course enquiry, German class fees, book German demo class, German Gyan WhatsApp, German language admission"
      />
      {/* Hero */}
      <section className="py-16 bg-muted/30 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Contact <span className="text-primary">German Gyan</span>
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} className="text-xl text-muted-foreground">
            Have a question or ready to enroll? We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-bold">Get in Touch</h2>
            {[
              { icon: Phone, label: "Phone / WhatsApp", value: "+91-96434-30783", href: "tel:+919643430783" },
              { icon: Mail, label: "Email", value: "contact@germangyan.com", href: "mailto:contact@germangyan.com" },
              { icon: MapPin, label: "Location", value: "11 Hargobind Enclave, Near Karkardooma Metro Station, opposite Metro Pillar 118, Delhi-110092 (Online Accross India)", href: "https://maps.app.goo.gl/wqTDkYfAw4SUX1YG9" },
            ].map(({ icon: Icon, label, value, href }, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Card className="border-border/50">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wide font-bold">{label}</div>
                      <a href={href} className="font-medium hover:text-primary transition-colors">{value}</a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <Button className="w-full rounded-full" asChild>
                <a href="https://wa.me/919643430783" target="_blank" rel="noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp to Book
                </a>
              </Button>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="p-4 bg-muted/50 rounded-xl">
              <h4 className="font-bold mb-2">Office Hours</h4>
              <p className="text-sm text-muted-foreground">Monday – Saturday: 9:00 AM – 8:00 PM IST</p>
              <p className="text-sm text-muted-foreground">Sunday: 10:00 AM – 5:00 PM IST</p>
            </motion.div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="border-border/50 shadow-lg h-full">
              <CardContent className="p-8 md:p-10">
                {sent ? (
                  <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                    <CheckCircle2 className="w-16 h-16 text-primary mb-4" />
                    <h3 className="text-2xl font-bold font-serif mb-2">Inquiry Sent!</h3>
                    <p className="text-muted-foreground">Thank you! We'll get back to you within 24 hours on WhatsApp or email.</p>
                    <Button className="mt-8 rounded-full" onClick={() => setSent(false)}>Send Another</Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-3xl font-serif font-bold mb-8">Send an Inquiry</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Full Name <span className="text-red-500">*</span></label>
                          <Input required name="full_name" placeholder="Your name" className="bg-muted/50 border-transparent focus-visible:bg-background" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Phone / WhatsApp <span className="text-red-500">*</span></label>
                          <Input required name="phone" placeholder="+91" className="bg-muted/50 border-transparent focus-visible:bg-background" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email Address <span className="text-red-500">*</span></label>
                        <Input required name="email" type="email" placeholder="you@example.com" className="bg-muted/50 border-transparent focus-visible:bg-background" />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Current German Level</label>
                          <select name="current_level" className="flex h-10 w-full rounded-md border border-transparent bg-muted/50 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                            <option value="none">None / Absolute Beginner</option>
                            <option value="a1">A1 Completed</option>
                            <option value="a2">A2 Completed</option>
                            <option value="b1">B1 Completed</option>
                            <option value="b2">B2 Completed</option>
                            <option value="c1">C1 Completed</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Course Interest</label>
                          <select name="course_interest" className="flex h-10 w-full rounded-md border border-transparent bg-muted/50 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                            <option value="a1">A1 Level</option>
                            <option value="a2">A2 Level</option>
                            <option value="b1">B1 Level</option>
                            <option value="b2">B2 Level</option>
                            <option value="c1">C1 Level</option>
                            <option value="c2">C2 Level</option>
                            <option value="crash">Crash Course</option>
                            <option value="exam">Exam Preparation</option>
                            <option value="speaking">Speaking Practice</option>
                            <option value="corporate">Corporate Training</option>
                            <option value="counseling">General Counseling</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Preferred Mode</label>
                          <select name="preferred_mode" className="flex h-10 w-full rounded-md border border-transparent bg-muted/50 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                            <option value="online">Online</option>
                            <option value="offline">Offline (In-Person)</option>
                            <option value="both">Flexible / Not Sure</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Preferred Timing</label>
                          <select name="preferred_timing" className="flex h-10 w-full rounded-md border border-transparent bg-muted/50 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                            <option value="morning">Morning</option>
                            <option value="afternoon">Afternoon</option>
                            <option value="evening">Evening</option>
                            <option value="weekend">Weekend Batches</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Additional Message</label>
                        <Textarea
                          name="message"
                          placeholder="Tell us about your goals (e.g., studying in Germany, job seeker) or ask any specific questions..."
                          className="min-h-[120px] bg-muted/50 border-transparent focus-visible:bg-background"
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full md:w-auto rounded-full px-8" disabled={sending}>
                        {sending ? "Sending Inquiry..." : "Submit Inquiry"}
                      </Button>

                      {error && (
                        <div className="flex items-start gap-2 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
                          <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                          <span>{error}</span>
                        </div>
                      )}

                      {!isConfigured && (
                        <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-xs leading-relaxed">
                          <strong>Setup needed:</strong> Open <code className="bg-amber-100 px-1 rounded">src/config.ts</code> and paste your Formspree endpoint to start receiving form submissions by email.
                          Get a free endpoint at <a href="https://formspree.io" target="_blank" rel="noreferrer" className="underline">formspree.io</a>.
                        </div>
                      )}
                    </form>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold mb-8 text-center">Quick Questions</h2>
          <Accordion type="single" collapsible className="w-full bg-background rounded-xl p-4 shadow-sm border border-border/50">
            {[
              { q: "How fast will I hear back?", a: "We typically respond to all inquiries within 24 hours during business days via WhatsApp or email." },
              { q: "Can I pay in installments?", a: "Yes, we offer flexible payment plans for our comprehensive bundle courses. Please mention your request in the message box." },
              { q: "Do I need to buy textbooks?", a: "We provide our own custom study materials and worksheets. However, standard reference books for Goethe exam preparation are recommended and we will guide you on which ones to get." },
              { q: "Are classes online or offline?", a: "Both! We offer online classes for students across India and offline classes at our centre. You can also switch between modes as needed." },
              { q: "Is there a free trial class?", a: "Yes! We offer a free demo class so you can experience our teaching style before enrolling. Book through the contact form or WhatsApp." },
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b-0">
                <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
