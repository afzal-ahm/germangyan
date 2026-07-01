import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  CheckCircle2, 
  Calendar, 
  Clock, 
  MapPin, 
  Globe, 
  BookOpen, 
  Award, 
  Briefcase, 
  Users, 
  GraduationCap, 
  ShieldCheck, 
  MessageSquare,
  FileCheck,
  FileText,
  UserCheck,
  Lightbulb,
  Phone
} from "lucide-react";
import PageMeta from "@/components/PageMeta";
import otherHero from "@assets/other hero.png";

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

export default function Internship() {
  const learningAreas = [
    {
      icon: Eye,
      title: "Classroom Observation",
      desc: "Observe live German language classes and understand teaching methodologies, student engagement techniques, classroom interaction, lesson planning, and time management."
    },
    {
      icon: GraduationCap,
      title: "Practical Teaching Experience",
      desc: "Interns gradually participate in classroom activities: assisting trainers, conducting practice sessions, explaining grammar concepts, leading vocabulary activities, and managing speaking/revision sessions."
    },
    {
      icon: BookOpen,
      title: "German Grammar Practice",
      desc: "Strengthen your own German language skills while teaching. Work extensively on grammar, sentence formation, vocabulary, pronunciation, reading, listening, speaking, and writing corrections."
    },
    {
      icon: UserCheck,
      title: "Student Support",
      desc: "Learn how to professionally assist students by solving academic doubts, guiding them during practice sessions, monitoring progress, providing feedback, and encouraging confidence."
    },
    {
      icon: FileText,
      title: "Study Material Development",
      desc: "Participate in creating worksheets, vocabulary lists, practice exercises, grammar notes, revision material, mock tests, and classroom activities."
    },
    {
      icon: Lightbulb,
      title: "Content Creation",
      desc: "Develop educational content: grammar notes, vocabulary resources, practice questions, presentations, social media educational content, and learning activities."
    },
    {
      icon: Briefcase,
      title: "Educational Operations",
      desc: "Understand how a professional language institute functions behind the scenes (course planning, batch scheduling, student management, academic coordination, attendance, and assessments)."
    },
    {
      icon: MessageSquare,
      title: "Communication Skills",
      desc: "Improve your professional communication, classroom confidence, public speaking, student interaction, presentation skills, and team collaboration."
    },
    {
      icon: ShieldCheck,
      title: "Professional Development",
      desc: "Develop essential workplace skills: time management, teamwork, professional ethics, leadership, responsibility, and organizational skills."
    }
  ];

  return (
    <>
      <PageMeta
        title="German Language Internship Program | German Gyan"
        description="Gain practical teaching experience with German Gyan's 3-month German Language Internship. B2 level requirement, hands-on teaching, and certificate & experience letter."
        keywords="German language internship, German teaching internship, learn teaching German, Delhi German internship, language experience letter"
      />
      <div className="min-h-screen bg-background font-sans pt-16">
        
        {/* Hero Section */}
        <section className="relative h-[450px] flex items-center overflow-hidden bg-black">
          <div className="absolute inset-0 z-0">
            <img
              src={otherHero}
              alt="German Language Internship"
              className="w-full h-full object-cover opacity-60 object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />
          </div>

          <div className="container mx-auto px-6 relative z-10 text-white max-w-6xl">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl space-y-6">
              <div className="flex items-center gap-2 text-sm font-medium text-primary">
                <Link href="/" className="cursor-pointer hover:underline">Home</Link>
                <span className="text-white/40">/</span>
                <span className="text-white/60">Internship Program</span>
              </div>
              <Badge variant="secondary" className="px-4 py-1 text-sm bg-primary/15 text-primary border-none hover:bg-primary/25">
                3-Month Professional Experience
              </Badge>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                German Language <br />
                <span className="text-primary font-bold">Internship Program</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl">
                Gain Practical Teaching Experience with German Gyan. Bridge the Gap Between Learning German and Building Your Professional Career.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button size="lg" className="rounded-full px-8 bg-[#FFC700] hover:bg-[#E6B200] text-black border-none font-bold animate-bounce" asChild>
                  <a href="https://wa.me/919643430783" target="_blank" rel="noreferrer" className="flex items-center gap-2">Apply Now</a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 text-white border-white/35 hover:bg-white/10" asChild>
                  <a href="#details">Program Details ↓</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Intro */}
        <section id="about" className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-7 space-y-6">
                <h2 className="text-3xl font-serif font-bold text-foreground">Gain Real-World Experience</h2>
                <p className="text-muted-foreground text-lg leading-relaxed font-semibold">
                  Have you completed B2 Level German and want to gain real-world experience before starting your career as a German language trainer?
                </p>
                <p className="text-muted-foreground text-base leading-relaxed">
                  The <strong>German Gyan 3-Month German Language Internship Program</strong> is designed for passionate German language learners who want to transform their language skills into practical teaching and professional experience.
                </p>
                <p className="text-muted-foreground text-base leading-relaxed">
                  This internship offers an opportunity to work alongside experienced German language trainers, participate in live classes, support students, create learning materials, and understand the complete functioning of a professional German language institute.
                </p>
                <p className="text-muted-foreground text-base leading-relaxed">
                  At German Gyan, we believe that practical experience is the key to becoming a confident and successful German language professional.
                </p>
              </div>

              <div id="details" className="md:col-span-5 bg-[#102c3d]/5 rounded-3xl p-8 border border-[#102c3d]/10 space-y-6">
                <h3 className="text-xl font-bold text-foreground border-b pb-3 border-[#102c3d]/10">Internship Overview</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between border-b pb-2 border-[#102c3d]/5">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-semibold text-foreground">3 Months</span>
                  </div>
                  <div className="flex justify-between border-b pb-2 border-[#102c3d]/5">
                    <span className="text-muted-foreground">Type</span>
                    <span className="font-semibold text-foreground">Non-Paid</span>
                  </div>
                  <div className="flex justify-between border-b pb-2 border-[#102c3d]/5">
                    <span className="text-muted-foreground">Working Days</span>
                    <span className="font-semibold text-foreground">Monday to Friday</span>
                  </div>
                  <div className="flex justify-between border-b pb-2 border-[#102c3d]/5">
                    <span className="text-muted-foreground">Hours</span>
                    <span className="font-semibold text-foreground">10:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b pb-2 border-[#102c3d]/5">
                    <span className="text-muted-foreground">Location</span>
                    <span className="font-semibold text-foreground flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-primary" /> Preet Vihar, Delhi</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Eligibility</span>
                    <span className="font-bold text-foreground">Min B2 Level German</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20 bg-muted/30 px-4 border-t border-border/20">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold">Why Join the German Gyan Internship Program?</h2>
              <p className="text-muted-foreground mt-2">
                Learning German is one achievement — applying it professionally is another.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Practical German Language Teaching Experience",
                "Live Classroom Exposure & Direct Feedback",
                "Mentorship from Experienced Native/Senior Trainers",
                "Real Student Doubt Solving & Support Interaction",
                "Study Material Development & Reviewing",
                "Content Creation & Social Media Educational Work",
                "Behind-the-Scenes Educational Operations",
                "Professional Workspace Skill Development",
                "Official Internship Completion Certificate & Experience Letter",
              ].map((item, idx) => (
                <div key={idx} className="bg-card p-6 rounded-2xl border border-border/40 shadow-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Will You Learn? Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold">What Will You Learn?</h2>
              <p className="text-muted-foreground mt-2">Hands-on experience in 9 key areas of language education.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {learningAreas.map((area, i) => {
                const IconComponent = area.icon;
                return (
                  <Card key={i} className="border-border/50 hover:border-primary/50 hover:shadow-md transition-all shadow-sm">
                    <CardContent className="p-6 space-y-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-bold text-lg text-foreground">{area.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{area.desc}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Certificate & Experience Letter */}
        <section className="py-20 bg-secondary text-secondary-foreground px-4">
          <div className="container mx-auto max-w-4xl text-center space-y-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">Internship Certificate & Experience Letter</h2>
            <p className="text-secondary-foreground/80 max-w-2xl mx-auto">
              By the end of the internship, participants will receive official credentials to validate their practical experience:
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left text-white/95">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg">Completion Certificate</h3>
                <p className="text-secondary-foreground/75 text-sm leading-relaxed">
                  The official <strong>German Gyan Internship Completion Certificate</strong> recognizes successful fulfillment of the internship program.
                </p>
              </div>

              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileCheck className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg">Professional Experience Letter</h3>
                <p className="text-secondary-foreground/75 text-sm leading-relaxed">
                  An official <strong>Experience Letter from German Gyan</strong>, certifying your 3 months of practical classroom, academic, and operational support.
                </p>
              </div>
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
                  Is this a paid internship?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm pb-4">
                  No. This is a non-paid professional internship designed specifically to provide practical learning, classroom exposure, and real teaching experience.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-2" className="border border-border/60 rounded-xl px-4 bg-card">
                <AccordionTrigger className="text-left font-bold text-base hover:no-underline py-4 text-foreground">
                  What is the duration of the internship?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm pb-4">
                  The internship lasts 3 months.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-3" className="border border-border/60 rounded-xl px-4 bg-card">
                <AccordionTrigger className="text-left font-bold text-base hover:no-underline py-4 text-foreground">
                  What are the working days and hours?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm pb-4">
                  Monday to Friday from 10:00 AM to 6:00 PM.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-4" className="border border-border/60 rounded-xl px-4 bg-card">
                <AccordionTrigger className="text-left font-bold text-base hover:no-underline py-4 text-foreground">
                  Where is the internship located?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm pb-4">
                  German Gyan, Preet Vihar, East Delhi.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-5" className="border border-border/60 rounded-xl px-4 bg-card">
                <AccordionTrigger className="text-left font-bold text-base hover:no-underline py-4 text-foreground">
                  Who is eligible to apply?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm pb-4">
                  Candidates who have successfully completed B2 Level German or above.
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
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">Build Your Future with German Gyan</h2>
            <p className="text-secondary-foreground/80 text-base max-w-2xl mx-auto">
              If you have completed B2 Level German and are eager to apply your knowledge in a professional environment, this program will help you develop the confidence, practical skills, and experience needed to begin your career.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
              <Button size="lg" className="rounded-full px-8 bg-[#FFC700] hover:bg-[#E6B200] text-black font-bold border-none" asChild>
                <a href="https://wa.me/919643430783" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> Apply Now via WhatsApp
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

// Simple Eye SVG replacement component
function Eye({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.43 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
