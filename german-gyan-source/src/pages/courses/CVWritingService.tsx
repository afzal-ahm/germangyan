import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  CheckCircle2, 
  FileText, 
  UserCheck, 
  Briefcase, 
  ShieldCheck, 
  Layers, 
  Award, 
  PenTool, 
  MessageSquare,
  Phone,
  Mail,
  ChevronRight
} from "lucide-react";
import PageMeta from "@/components/PageMeta";
import otherHero from "@assets/other hero.png";

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

export default function CVWritingService() {
  const steps = [
    {
      num: "1",
      title: "Share Profile Details",
      desc: "Share your existing resume (if available), educational qualifications, work experience, key skills, certifications, German language level, and target job positions."
    },
    {
      num: "2",
      title: "Profile Analysis",
      desc: "Our experts carefully analyze your profile, background, and specific career objectives to determine the best structure and keyword optimization strategy."
    },
    {
      num: "3",
      title: "Professional Preparation",
      desc: "We rewrite, format, and prepare your customized German CV (Lebenslauf) and Cover Letter (Anschreiben) from scratch according to strict German recruitment standards."
    },
    {
      num: "4",
      title: "Quality Review & Delivery",
      desc: "After a detailed quality check, your final application documents are delivered in a print-ready professional PDF and fully editable Word formats."
    }
  ];

  return (
    <>
      <PageMeta
        title="German CV & Cover Letter Writing Service | German Gyan"
        description="Get a professional German CV (Lebenslauf) and Cover Letter (Anschreiben) written according to German hiring and ATS standards. Premium paid service."
        keywords="German CV writing, Lebenslauf writing service, German cover letter, Anschreiben service, ATS resume Germany, job application Germany"
      />
      <div className="min-h-screen bg-background font-sans pt-16">
        
        {/* Hero Section */}
        <section className="relative h-[450px] flex items-center overflow-hidden bg-black">
          <div className="absolute inset-0 z-0">
            <img
              src={otherHero}
              alt="German CV & Cover Letter Writing"
              className="w-full h-full object-cover opacity-60 object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />
          </div>

          <div className="container mx-auto px-6 relative z-10 text-white max-w-6xl">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl space-y-6">
              <div className="flex items-center gap-2 text-sm font-medium text-primary">
                <Link href="/" className="cursor-pointer hover:underline">Home</Link>
                <span className="text-white/40">/</span>
                <Link href="/courses" className="cursor-pointer hover:underline">Courses</Link>
                <span className="text-white/40">/</span>
                <span className="text-white/60">CV Writing Service</span>
              </div>
              <Badge variant="secondary" className="px-4 py-1 text-sm bg-primary/15 text-primary border-none hover:bg-primary/25">
                Paid Professional Service
              </Badge>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                German CV & Cover Letter <br />
                <span className="text-primary font-bold">Writing Service</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl">
                Professional German Resume (Lebenslauf) & Cover Letter (Anschreiben) Preparation According to German Hiring Standards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button size="lg" className="rounded-full px-8 bg-[#FFC700] hover:bg-[#E6B200] text-black border-none font-bold animate-bounce" asChild>
                  <a href="https://wa.me/919643430783" target="_blank" rel="noreferrer" className="flex items-center gap-2">Contact Our Team</a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 text-white border-white/35 hover:bg-white/10" asChild>
                  <a href="#about-service">Service Details ↓</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Introduction Section */}
        <section id="about-service" className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-7 space-y-6">
                <h2 className="text-3xl font-serif font-bold text-foreground">Create a Powerful First Impression</h2>
                <p className="text-muted-foreground text-lg leading-relaxed font-semibold">
                  A professionally written German CV (Lebenslauf) and Cover Letter (Anschreiben) can significantly increase your chances of getting shortlisted by German employers.
                </p>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Unlike standard resumes, German companies follow specific application standards and expect professionally structured documents that highlight your qualifications, skills, and experience in a clear and organized manner.
                </p>
                <p className="text-muted-foreground text-base leading-relaxed">
                  At <strong>German Gyan</strong>, we provide a <strong>premium paid service</strong> for creating customized German CVs and Cover Letters that are prepared according to <strong>German recruitment standards</strong> and tailored specifically to your career goals.
                </p>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Whether you are applying for jobs, internships, Ausbildung, apprenticeships, working student positions, or professional opportunities in Germany, our experts help you create application documents that leave a lasting impression.
                </p>
              </div>
              
              <div className="md:col-span-5 bg-[#102c3d]/5 rounded-3xl p-8 border border-[#102c3d]/10 space-y-6">
                <h3 className="text-xl font-bold text-foreground border-b pb-3 border-[#102c3d]/10">Professional Paid Service</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our German CV & Cover Letter Writing Service is a paid professional service designed to help candidates present themselves confidently to German employers.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed font-semibold">
                  Every application is individually prepared based on your education, work experience, skills, career objectives, and the position you are applying for.
                </p>
                <p className="text-xs text-primary font-bold italic bg-primary/5 p-3 rounded-xl border border-primary/10">
                  No templates. No copy-paste. Every document is professionally customized.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose German Gyan */}
        <section className="py-20 bg-muted/30 px-4 border-t border-border/20">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold">Why Choose German Gyan?</h2>
              <p className="text-muted-foreground mt-2">
                Preparing a German application requires much more than translating an English resume.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Systematic understanding of German recruitment standards",
                "Precise German CV formatting & layout expectations",
                "Use of formal business German language registers",
                "ATS-friendly and recruiter-compatible resume structures",
                "Keyword optimization tailored to your industry",
                "Comprehensive profile reviews before writing documents",
                "Fast turnaround times and active communication",
                "Custom writing for freshers, professionals, & students",
                "Delivery in print-ready PDF and editable Word formats"
              ].map((item, idx) => (
                <div key={idx} className="bg-card p-6 rounded-2xl border border-border/40 shadow-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Offerings */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold">What's Included in the Service?</h2>
              <p className="text-muted-foreground mt-2">Professional application components designed to maximize impact.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              
              <Card className="border-border/50 hover:border-primary/50 shadow-sm">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Professional German CV (Lebenslauf)</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We create modern, ATS-friendly, and professionally formatted German resumes that systematically cover:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-muted-foreground">
                    <div>• Personal Information</div>
                    <div>• Professional Profile</div>
                    <div>• Educational Details</div>
                    <div>• Work Experience</div>
                    <div>• German Language Skills</div>
                    <div>• Technical Skills</div>
                    <div>• Certifications & Projects</div>
                    <div>• Computer & IT Skills</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:border-primary/50 shadow-sm">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <PenTool className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">German Cover Letter (Anschreiben)</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A Cover Letter is your opportunity to introduce yourself and explain why you're the ideal candidate. Each letter is individually written based on:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-muted-foreground">
                    <div>• Educational Background</div>
                    <div>• Professional Experience</div>
                    <div>• Targeted Job Position</div>
                    <div>• Specific Skills & Goals</div>
                    <div>• Target Company Values</div>
                    <div>• Language Level Requirements</div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>

        {/* ATS Section */}
        <section className="py-20 bg-secondary text-secondary-foreground px-4">
          <div className="container mx-auto max-w-5xl text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">ATS-Friendly Resume Writing</h2>
            <p className="text-secondary-foreground/80 max-w-3xl mx-auto text-base leading-relaxed">
              Many companies in Germany use <strong>Applicant Tracking Systems (ATS)</strong> to filter applications before they reach recruiters. Our documents are carefully structured, keyword optimized, recruiter friendly, easy to read, and modern in design to pass ATS checkmarks effortlessly.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left text-white/95 pt-6">
              <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
                <h4 className="font-bold">✅ ATS Compatible</h4>
              </div>
              <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
                <h4 className="font-bold">✅ Keyword Optimized</h4>
              </div>
              <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
                <h4 className="font-bold">✅ Easy to Read</h4>
              </div>
              <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
                <h4 className="font-bold">✅ Recruiter Friendly</h4>
              </div>
            </div>
          </div>
        </section>

        {/* Suitable For */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-serif font-bold mb-6">Suitable For Opportunities</h3>
                <ul className="space-y-3">
                  {["Full-Time Jobs", "Part-Time Jobs", "Ausbildung Programs", "Internships", "Working Student Positions", "Graduate Programs"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold mb-6">Suitable For Candidates</h3>
                <div className="grid grid-cols-2 gap-3 text-sm text-muted-foreground font-medium">
                  <div>• Fresh Graduates</div>
                  <div>• Experienced Professionals</div>
                  <div>• Engineers</div>
                  <div>• Healthcare Professionals</div>
                  <div>• IT Professionals</div>
                  <div>• Hospitality Professionals</div>
                  <div>• Business Professionals</div>
                  <div>• German Learners</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20 bg-muted/30 px-4 border-t border-b border-border/20">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-serif font-bold text-center mb-12">Our Writing Process</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((s, idx) => (
                <div key={idx} className="bg-card p-6 rounded-2xl border border-border/50 shadow-sm flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-serif font-extrabold text-primary text-lg">
                    {s.num}
                  </div>
                  <h4 className="font-bold text-base text-foreground">Step {s.num}: {s.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-serif font-bold text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="faq-1" className="border border-border/60 rounded-xl px-4 bg-card">
                <AccordionTrigger className="text-left font-bold text-base hover:no-underline py-4 text-foreground">
                  Is this a free service?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm pb-4">
                  No. This is a professional paid service offered by German Gyan. Every CV and Cover Letter is written from scratch and customized specifically for each candidate's career goals.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-2" className="border border-border/60 rounded-xl px-4 bg-card">
                <AccordionTrigger className="text-left font-bold text-base hover:no-underline py-4 text-foreground">
                  Will my CV be written according to German standards?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm pb-4">
                  Yes. Every CV follows professional German formatting, layout norms, and recruitment guidelines.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-3" className="border border-border/60 rounded-xl px-4 bg-card">
                <AccordionTrigger className="text-left font-bold text-base hover:no-underline py-4 text-foreground">
                  Is the Cover Letter personalized?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm pb-4">
                  Absolutely. We never use generic templates. Every Cover Letter is written exclusively for your profile and the specific position you are applying for.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-4" className="border border-border/60 rounded-xl px-4 bg-card">
                <AccordionTrigger className="text-left font-bold text-base hover:no-underline py-4 text-foreground">
                  Can freshers apply?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm pb-4">
                  Yes. We prepare professional application documents for both fresh graduates starting their career and highly experienced professionals.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-5" className="border border-border/60 rounded-xl px-4 bg-card">
                <AccordionTrigger className="text-left font-bold text-base hover:no-underline py-4 text-foreground">
                  Can you update my existing resume?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm pb-4">
                  Yes. We can redesign, rewrite, optimize, and convert your existing resume into a professional German-standard CV.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-6" className="border border-border/60 rounded-xl px-4 bg-card">
                <AccordionTrigger className="text-left font-bold text-base hover:no-underline py-4 text-foreground">
                  Will my documents be ATS-friendly?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm pb-4">
                  Yes. Our documents are created using ATS-compatible formatting, keyword optimization, and recruiter-friendly layouts.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* German Flag Divider */}
        <div className="w-full h-[5px] flex">
          <div className="flex-1 bg-black" />
          <div className="flex-1 bg-[#E30613]" />
          <div className="flex-1 bg-[#FFED00]" />
        </div>

        {/* CTA */}
        <section className="py-20 bg-secondary text-secondary-foreground text-center px-4">
          <div className="container mx-auto max-w-3xl space-y-8">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">Start Your German Career with Confidence</h2>
            <p className="text-secondary-foreground/80 text-base max-w-2xl mx-auto">
              Our experts help you present your qualifications professionally through customized German CV and Cover Letter writing services that meet modern recruitment standards.
            </p>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 max-w-xl mx-auto text-left space-y-4">
              <div className="flex items-center gap-2 text-white font-bold text-base"><Award className="w-5 h-5 text-primary" /> Professional Paid Service</div>
              <p className="text-xs text-secondary-foreground/75 leading-relaxed">
                Service charges vary depending on your profile, experience level, and specific requirements. Contact our team to receive pricing and discuss your requirements.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-semibold text-white/90">
                <div className="flex items-center gap-1.5"><Phone className="w-4 h-4 text-primary" /> +91 96434 30783</div>
                <div className="flex items-center gap-1.5"><Mail className="w-4 h-4 text-primary" /> germangyan04@gmail.com</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
              <Button size="lg" className="rounded-full px-8 bg-[#FFC700] hover:bg-[#E6B200] text-black font-bold border-none" asChild>
                <a href="https://wa.me/919643430783" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> WhatsApp to Discuss
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 border-white/20 text-white hover:bg-white/10" asChild>
                <Link href="/courses">View All Courses</Link>
              </Button>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
