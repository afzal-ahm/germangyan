import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  CheckCircle2, 
  MessageSquare, 
  HelpCircle, 
  Briefcase, 
  ShieldCheck, 
  Video, 
  Sparkles, 
  FileText, 
  MapPin, 
  Award, 
  Users, 
  Phone,
  Mail,
  GraduationCap
} from "lucide-react";
import PageMeta from "@/components/PageMeta";
import otherHero from "@assets/other hero.png";

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

export default function InterviewPrep() {
  const topicsIndia = [
    "HR Interview Questions",
    "German Language Demonstration Round",
    "Teaching Demonstration",
    "Classroom Introduction",
    "Professional Communication",
    "Resume-Based Questions",
    "Salary Discussions & Perks",
    "Confidence Building"
  ];

  const topicsGermany = [
    "German Self Introduction (Selbstvorstellung)",
    "Professional Business Communication",
    "Company Research & Preparation",
    "German Workplace Culture & Values",
    "Behavioural & Competency Questions",
    "Motivation Questions (Warum Deutschland?)",
    "Strengths & Weaknesses Profiling",
    "Career Goals & Professional Etiquette",
    "Salary Discussion & Interview Closing"
  ];

  const modules = [
    {
      title: "Professional Self Introduction",
      desc: "Learn how to confidently introduce yourself in German and English, creating a strong first impression from the very beginning of your interview."
    },
    {
      title: "Frequently Asked Interview Questions",
      desc: "Practice structured answers for critical questions: 'Tell me about yourself', 'Why should we hire you?', 'What are your strengths & weaknesses?', 'Why Germany?', and more."
    },
    {
      title: "German Communication Practice",
      desc: "Improve fluency through professional conversations, workplace-specific vocabulary, formal telephone communication, business communication, and email etiquette."
    },
    {
      title: "Mock Interviews & Simulations",
      desc: "Experience real-world simulations including HR, German Speaking, and Technical Rounds with detailed constructive feedback, performance analysis, and improvement tips."
    },
    {
      title: "Body Language & Confidence Building",
      desc: "Master key physical presence skills: maintaining proper eye contact, professional sitting posture, hand gestures, voice modulation, and positive body language."
    },
    {
      title: "Salary Negotiation & Onboarding",
      desc: "Understand how to confidently discuss salary expectations, professional negotiation techniques, employee benefits, and joining formalities."
    }
  ];

  return (
    <>
      <PageMeta
        title="German Job Interview Preparation Program | German Gyan"
        description="Crack German job interviews in India & Germany with confidence. Professional mock interviews, self-introduction training, and communication practice."
        keywords="German interview preparation, Selbstvorstellung practice, mock interview German, German job trainer, crack Germany interview"
      />
      <div className="min-h-screen bg-background font-sans pt-16">
        
        {/* Hero Section */}
        <section className="relative h-[450px] flex items-center overflow-hidden bg-black">
          <div className="absolute inset-0 z-0">
            <img
              src={otherHero}
              alt="German Job Interview Preparation"
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
                <span className="text-white/60">Interview Preparation</span>
              </div>
              <Badge variant="secondary" className="px-4 py-1 text-sm bg-primary/15 text-primary border-none hover:bg-primary/25">
                Professional Paid Service
              </Badge>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                German Job Interview <br />
                <span className="text-primary font-bold">Preparation Program</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl">
                Crack German Job Interviews with Confidence – For India & Germany. Professional Interview Training for German Language Learners.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button size="lg" className="rounded-full px-8 bg-[#FFC700] hover:bg-[#E6B200] text-black border-none font-bold animate-pulse" asChild>
                  <Link href="/contact">Book Preparation Session</Link>
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
                <h2 className="text-3xl font-serif font-bold text-foreground">Getting Shortlisted is Only Step One</h2>
                <p className="text-muted-foreground text-lg leading-relaxed font-semibold">
                  Getting shortlisted is only the first step. The real challenge begins during the interview.
                </p>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Whether you're applying for a German Language Trainer position in India, a customer support role, an MNC, an IT company, a healthcare organization, an Ausbildung, or a job in Germany, your interview performance plays a crucial role in securing the opportunity.
                </p>
                <p className="text-muted-foreground text-base leading-relaxed">
                  At <strong>German Gyan</strong>, we offer a Professional German Job Interview Preparation Program designed to help candidates confidently face interviews in both India and Germany.
                </p>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Our interview preparation is practical, personalized, and based on real interview experiences, helping candidates communicate confidently in both German and English, depending on the employer's requirements.
                </p>
              </div>
              
              <div className="md:col-span-5 bg-[#102c3d]/5 rounded-3xl p-8 border border-[#102c3d]/10 space-y-6">
                <h3 className="text-xl font-bold text-foreground border-b pb-3 border-[#102c3d]/10">Program Overview</h3>
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
                    <span className="text-muted-foreground">Target Location</span>
                    <span className="font-semibold text-foreground">India & Germany</span>
                  </div>
                  <div className="flex justify-between border-b pb-2 border-[#102c3d]/5">
                    <span className="text-muted-foreground">Format</span>
                    <span className="font-semibold text-foreground">1-on-1 Sessions</span>
                  </div>
                  <div className="flex justify-between pb-1">
                    <span className="text-muted-foreground">Includes</span>
                    <span className="font-semibold text-foreground text-right">Mock Rounds & Feedback</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* India vs Germany Prep Blocks */}
        <section className="py-20 bg-muted/30 px-4 border-t border-b border-border/20">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 gap-10">
              
              <div className="bg-card p-8 rounded-3xl border border-border/50 shadow-sm space-y-6">
                <h3 className="text-2xl font-bold text-foreground border-b pb-3 border-border/50">Interview Prep for India</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  If you're applying for German language jobs within India (institutes, schools, corporate training, MNCs, BPOs), we prepare you extensively for:
                </p>
                <div className="grid grid-cols-1 gap-2.5">
                  {topicsIndia.map((topic, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card p-8 rounded-3xl border border-border/50 shadow-sm space-y-6">
                <h3 className="text-2xl font-bold text-foreground border-b pb-3 border-border/50">Interview Prep for Germany</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Applying for jobs in Germany requires a different professional approach. We prepare you according to German recruitment etiquette:
                </p>
                <div className="grid grid-cols-1 gap-2.5">
                  {topicsGermany.map((topic, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Modules Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold">What You Will Learn</h2>
              <p className="text-muted-foreground mt-2">Comprehensive curriculum focused on making you interview-ready.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {modules.map((m, i) => (
                <Card key={i} className="border-border/50 hover:border-primary/50 shadow-sm">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="font-bold text-lg text-foreground">{m.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Personalization Section */}
        <section className="py-20 bg-secondary text-secondary-foreground px-4">
          <div className="container mx-auto max-w-4xl text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">Personalized One-to-One Sessions</h2>
            <p className="text-secondary-foreground/80 max-w-3xl mx-auto text-base leading-relaxed">
              Every candidate has a different background. We structure your preparation on a one-to-one basis customized around your profile, target industry (Healthcare, IT, Hospitality, Finance, Engineering, Logistics, or Teaching), language level, and job role.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-left text-white/95 pt-4">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center font-bold text-sm">Target Company Profile</div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center font-bold text-sm">German Language level</div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center font-bold text-sm">Mock Demonstration</div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center font-bold text-sm">Detailed Feedback</div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20 px-4 border-t border-b border-border/20 bg-muted/10">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold">Why Candidates Choose This Program</h2>
              <p className="text-muted-foreground mt-2 font-medium">Practical experience, industry expectations, and confidence-oriented coaching.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Interview Preparation for both India & Germany",
                "German & English Communication Practice",
                "Dedicated HR Round & Technical Guidance",
                "Rigorous Live Mock Interviews",
                "Resume-Based Question Profiling",
                "Salary Negotiation Techniques",
                "Confidence Building & Posture Training",
                "Personalized One-to-One Mentor Sessions",
                "Detailed Performance Feedback & Analysis"
              ].map((item, idx) => (
                <div key={idx} className="bg-card p-5 rounded-xl border border-border/40 flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm font-medium">{item}</span>
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
                  Anyone preparing for a German language-related interview, a job in India (MNCs, support, teaching), or employment opportunities in Germany.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-2" className="border border-border/60 rounded-xl px-4 bg-card">
                <AccordionTrigger className="text-left font-bold text-base hover:no-underline py-4 text-foreground">
                  Is this program suitable for freshers?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm pb-4">
                  Yes. We customize the interview rounds and self-introduction structures for both fresh graduates and experienced professionals.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-3" className="border border-border/60 rounded-xl px-4 bg-card">
                <AccordionTrigger className="text-left font-bold text-base hover:no-underline py-4 text-foreground">
                  Will there be mock interviews?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm pb-4">
                  Yes, the program includes live mock interviews simulating HR rounds, technical components, and German speaking sessions with feedback logs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-4" className="border border-border/60 rounded-xl px-4 bg-card">
                <AccordionTrigger className="text-left font-bold text-base hover:no-underline py-4 text-foreground">
                  Is preparation available online or offline?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm pb-4">
                  It is available via online one-to-one calls as well as offline sessions at our Preet Vihar center in Delhi.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-5" className="border border-border/60 rounded-xl px-4 bg-card">
                <AccordionTrigger className="text-left font-bold text-base hover:no-underline py-4 text-foreground">
                  Will it help me improve my spoken German?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm pb-4">
                  Yes, the sessions target professional vocabulary, pronunciation correction, workplace conversation norms, and confidence boosting.
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
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">Build Confidence. Succeed in Your Interview</h2>
            <p className="text-secondary-foreground/80 text-base max-w-2xl mx-auto">
              Our job interview preparation program equips you with the practical skills, mock interview experience, and personalized coaching needed to perform confidently in front of recruiters.
            </p>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 max-w-xl mx-auto text-left space-y-4">
              <div className="flex items-center gap-2 text-white font-bold text-base"><Award className="w-5 h-5 text-primary" /> Professional Paid Service</div>
              <p className="text-xs text-secondary-foreground/75 leading-relaxed">
                This is a premium paid service. Training is customized based on your profile, target role, and interview rounds. Fees vary depending on session count.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-semibold text-white/90">
                <div className="flex items-center gap-1.5"><Phone className="w-4 h-4 text-primary" /> +91 96434 30783</div>
                <div className="flex items-center gap-1.5"><Mail className="w-4 h-4 text-primary" /> germangyan04@gmail.com</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
              <Button size="lg" className="rounded-full px-8 bg-[#FFC700] hover:bg-[#E6B200] text-black font-bold border-none" asChild>
                <a href="https://wa.me/919643430783" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> WhatsApp to Get Started
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
