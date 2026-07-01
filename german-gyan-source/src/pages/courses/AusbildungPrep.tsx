import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  CheckCircle2, 
  HelpCircle, 
  Briefcase, 
  Award, 
  ShieldCheck, 
  Users, 
  Phone,
  Mail,
  GraduationCap,
  Sparkles,
  BookOpen,
  MessageSquare,
  FileText
} from "lucide-react";
import PageMeta from "@/components/PageMeta";
import otherHero from "@assets/other hero.png";

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

export default function AusbildungPrep() {
  const professions = [
    { title: "Nursing Ausbildung", icon: "🏥" },
    { title: "Dental Assistant (ZFA)", icon: "🦷" },
    { title: "Medical Assistant (MFA)", icon: "🏥" },
    { title: "IT Specialist", icon: "💻" },
    { title: "Mechatronics Technician", icon: "⚙" },
    { title: "Automotive Mechatronics", icon: "🚗" },
    { title: "Hotel & Hospitality", icon: "🏨" },
    { title: "Logistics & Warehouse", icon: "📦" },
    { title: "Industrial Mechanic", icon: "🏭" },
    { title: "Aircraft Mechanic", icon: "✈️" },
    { title: "Baker & Pastry Chef", icon: "🥐" },
    { title: "Electronics Technician", icon: "⚡" }
  ];

  const modules = [
    {
      title: "Professional Self-Introduction (Selbstvorstellung)",
      desc: "One of the most important parts of every Ausbildung interview. Learn how to confidently introduce your background, language level, chosen profession, why Germany, and future goals in natural German."
    },
    {
      title: "Most Frequently Asked Interview Questions",
      desc: "Practice answering real questions: 'Why an Ausbildung in Germany?', 'Why this company?', 'What do you know about our organization?', 'What are your strengths & weaknesses?', and relocate queries."
    },
    {
      title: "Profession-Specific Vocabulary & Scenarios",
      desc: "Learn industry-specific terms and scenarios for Healthcare/Nursing, IT/Tech, Hospitality, and Engineering. Practice safety instructions, terminology, and workplace collaboration."
    },
    {
      title: "German Speaking Practice",
      desc: "Improve fluency with daily conversation, pronunciation corrections, key professional expressions, and formal workplace communications so you sound natural and confident."
    },
    {
      title: "Mock Interviews & Feedback Rounds",
      desc: "Experience realistic simulated interviews simulating the HR, Speaking, and Technical Rounds under real conditions, followed by a personalized performance improvement plan."
    },
    {
      title: "Workplace Culture & Etiquette Training",
      desc: "Understand what German employers expect regarding punctuality, professional ethics, teamwork, discipline, and respectful communication to increase your success probability."
    }
  ];

  return (
    <>
      <PageMeta
        title="Ausbildung Interview Preparation Program | German Gyan"
        description="Prepare with confidence for your Ausbildung interview in Germany. Mock interviews, Selbstvorstellung practice, and profession-specific vocabulary."
        keywords="Ausbildung interview preparation, vocational training Germany, Nursing Ausbildung interview, mechatronics Ausbildung, Selbstvorstellung practice"
      />
      <div className="min-h-screen bg-background font-sans pt-16">
        
        {/* Hero Section */}
        <section className="relative h-[450px] flex items-center overflow-hidden bg-black">
          <div className="absolute inset-0 z-0">
            <img
              src={otherHero}
              alt="Ausbildung Interview Preparation"
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
                <span className="text-white/60">Ausbildung Interview Prep</span>
              </div>
              <Badge variant="secondary" className="px-4 py-1 text-sm bg-primary/15 text-primary border-none hover:bg-primary/25">
                Professional Paid Service
              </Badge>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Ausbildung Interview <br />
                <span className="text-primary font-bold">Preparation Program</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl">
                Prepare with Confidence for Your Ausbildung Interview in Germany. Professional Interview Training for Students Applying for Ausbildung Programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button size="lg" className="rounded-full px-8 bg-[#FFC700] hover:bg-[#E6B200] text-black border-none font-bold animate-pulse" asChild>
                  <Link href="/contact">Book Prep Session</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 text-white border-white/35 hover:bg-white/10" asChild>
                  <a href="#about-program">Program Details ↓</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Introduction Section */}
        <section id="about-program" className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-7 space-y-6">
                <h2 className="text-3xl font-serif font-bold text-foreground">Prove That You Are the Right Candidate</h2>
                <p className="text-muted-foreground text-lg leading-relaxed font-semibold">
                  Getting shortlisted for an Ausbildung (Vocational Training) program in Germany is a significant achievement—but the interview is where you prove that you are the right candidate.
                </p>
                <p className="text-muted-foreground text-base leading-relaxed">
                  German employers look beyond qualifications. They assess your German language skills, confidence, communication, motivation, professionalism, and understanding of the chosen profession.
                </p>
                <p className="text-muted-foreground text-base leading-relaxed">
                  At <strong>German Gyan</strong>, we offer a Professional Ausbildung Interview Preparation Program, specially designed to help students confidently clear interviews for German companies, hospitals, hotels, IT firms, engineering companies, and vocational training institutions.
                </p>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Our training is practical, personalized, and based on real interview patterns followed by German employers.
                </p>
              </div>
              
              <div className="md:col-span-5 bg-[#102c3d]/5 rounded-3xl p-8 border border-[#102c3d]/10 space-y-6">
                <h3 className="text-xl font-bold text-foreground border-b pb-3 border-[#102c3d]/10">Program Details</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between border-b pb-2 border-[#102c3d]/5">
                    <span className="text-muted-foreground">Service Type</span>
                    <span className="font-semibold text-foreground">Premium Paid Service</span>
                  </div>
                  <div className="flex justify-between border-b pb-2 border-[#102c3d]/5">
                    <span className="text-muted-foreground">Mode</span>
                    <span className="font-semibold text-foreground">Online & Offline</span>
                  </div>
                  <div className="flex justify-between border-b pb-2 border-[#102c3d]/5">
                    <span className="text-muted-foreground">Target Country</span>
                    <span className="font-semibold text-foreground">Germany</span>
                  </div>
                  <div className="flex justify-between border-b pb-2 border-[#102c3d]/5">
                    <span className="text-muted-foreground">Format</span>
                    <span className="font-semibold text-foreground">1-on-1 Sessions</span>
                  </div>
                  <div className="flex justify-between pb-1">
                    <span className="text-muted-foreground">Coverage</span>
                    <span className="font-semibold text-foreground text-right">All Ausbildung Professions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20 bg-muted/30 px-4 border-t border-b border-border/20">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold">Why Choose German Gyan for Ausbildung Prep?</h2>
              <p className="text-muted-foreground mt-2">
                Every Ausbildung interview is different depending on the profession, but employers commonly evaluate:
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "German Communication Skills",
                "Confidence & Presentation",
                "Clear Pronunciation",
                "Professional Workplace Behavior",
                "Genuine Motivation & Focus",
                "Clear Short/Long Term Career Goals",
                "Deep Knowledge of the Chosen Profession",
                "German Cultural Understanding",
                "Problem-Solving & Adaptation Skills"
              ].map((item, idx) => (
                <div key={idx} className="bg-card p-6 rounded-2xl border border-border/40 shadow-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Professions Covered */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold">Who Can Join?</h2>
              <p className="text-muted-foreground mt-2">This program is ideal for students applying for various Ausbildung professions including:</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {professions.map((prof, i) => (
                <div key={i} className="bg-card p-5 rounded-2xl border border-border/50 shadow-sm flex flex-col items-center justify-center text-center space-y-2 hover:border-primary/50 transition-all">
                  <span className="text-3xl">{prof.icon}</span>
                  <span className="text-sm font-bold text-foreground leading-tight">{prof.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You Will Learn Modules */}
        <section className="py-20 bg-muted/40 px-4 border-t border-b border-border/20">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold">What You Will Learn</h2>
              <p className="text-muted-foreground mt-2">Structured curriculum to help you stand out to German recruiters.</p>
            </div>
            <div className="space-y-6">
              {modules.map((m, i) => (
                <div key={i} className="bg-card p-6 rounded-2xl border border-border/50 shadow-sm flex flex-col md:flex-row gap-4 hover:border-primary/45 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">{m.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
                  </div>
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
                  Who can join this program?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm pb-4">
                  Anyone preparing for an Ausbildung interview with a German employer or vocational training institute.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-2" className="border border-border/60 rounded-xl px-4 bg-card">
                <AccordionTrigger className="text-left font-bold text-base hover:no-underline py-4 text-foreground">
                  Is this program suitable for Nursing Ausbildung?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm pb-4">
                  Yes. We provide customized, profession-specific vocabulary and roleplay interview prep for Nursing, IT, Mechatronics, and other programs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-3" className="border border-border/60 rounded-xl px-4 bg-card">
                <AccordionTrigger className="text-left font-bold text-base hover:no-underline py-4 text-foreground">
                  Do you provide mock interviews?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm pb-4">
                  Yes, live mock interviews with personalized feedback, speaking round assessments, and HR checks are a core part of the training.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-4" className="border border-border/60 rounded-xl px-4 bg-card">
                <AccordionTrigger className="text-left font-bold text-base hover:no-underline py-4 text-foreground">
                  Is the training available online?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm pb-4">
                  Yes. It is available in both online and offline modes at our center in Delhi.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-5" className="border border-border/60 rounded-xl px-4 bg-card">
                <AccordionTrigger className="text-left font-bold text-base hover:no-underline py-4 text-foreground">
                  Will you prepare me in German?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm pb-4">
                  Yes, preparation is primarily in German to test and build your fluency, with English explanations and grammar notes provided whenever required.
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
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">Secure Your Ausbildung Opportunity</h2>
            <p className="text-secondary-foreground/80 text-base max-w-2xl mx-auto">
              Our job interview preparation program equips you with the practical skills, mock interview experience, and personalized coaching needed to perform confidently in front of recruiters.
            </p>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 max-w-xl mx-auto text-left space-y-4">
              <div className="flex items-center gap-2 text-white font-bold text-base"><Award className="w-5 h-5 text-primary" /> Professional Paid Service</div>
              <p className="text-xs text-secondary-foreground/75 leading-relaxed">
                The Ausbildung Interview Preparation Program is a premium paid service. Custom training is structured based on your selected Ausbildung field and language level.
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
