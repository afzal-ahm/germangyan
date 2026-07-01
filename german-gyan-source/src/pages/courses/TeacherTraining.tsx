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
  Users, 
  Award, 
  BookOpen, 
  Star,
  FileCheck,
  Briefcase,
  Layers,
  Sparkles,
  Search,
  MessageSquare,
  BookMarked,
  Trophy,
  Phone
} from "lucide-react";
import PageMeta from "@/components/PageMeta";
import otherHero from "@assets/other hero.png";

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

export default function TeacherTraining() {
  const modules = [
    {
      num: "1",
      title: "How to Start a German Language Course",
      desc: "Learn how to confidently conduct classes for complete beginners (A1) up to upper-intermediate learners (B2). Covers first class planning, student engagement techniques, ice-breaking activities, lesson structures, and building student confidence."
    },
    {
      num: "2",
      title: "Goethe Examination Preparation",
      desc: "Master the strategies required to prepare students for German language certification examinations (A1–B2). Learn how to teach Reading, Listening, Writing, and Speaking effectively. Understand examination patterns, marking criteria, and common student mistakes."
    },
    {
      num: "3",
      title: "Professional Teaching Methodologies",
      desc: "Discover modern and effective teaching techniques that simplify German learning. Includes grammar simplification, vocabulary building techniques, concept-based teaching, interactive classroom activities, student-centered learning, and practical teaching demonstrations."
    },
    {
      num: "4",
      title: "Course Planning & Study Material Development",
      desc: "Learn how to professionally organize your course, select the right books, prepare worksheets, create practice material, design revision tests, plan homework, construct vocabulary lists, and leverage teaching resources."
    },
    {
      num: "5",
      title: "Student Guidance & Motivation",
      desc: "A successful trainer is also a mentor. Learn how to motivate students, monitor progress, build student confidence, handle weak learners, provide effective feedback, and guide students towards certification success."
    },
    {
      num: "6",
      title: "Creative & Innovative Teaching Techniques",
      desc: "Explore practical ways to make German learning enjoyable and engaging. Learn classroom activities, educational games, storytelling techniques, visual learning methods, digital teaching tools, memory techniques, and interactive learning strategies."
    },
    {
      num: "7",
      title: "Classroom Management",
      desc: "Develop the confidence to manage online and offline classrooms professionally. Covers time management, batch management, student participation, handling mixed-level batches, discipline management, problem solving, and building positive learning environments."
    },
    {
      num: "8",
      title: "Complete Course Management",
      desc: "Learn how to complete an entire German language course within the scheduled timeframe. Topics include weekly lesson planning, course scheduling, syllabus completion, revision planning, and managing Reading, Listening, Speaking, and Writing modules."
    },
    {
      num: "9",
      title: "Student Assessment & Performance Evaluation",
      desc: "Understand how to assess student performance professionally. Learn conducting assessments, mock tests, speaking evaluation, writing corrections, progress reports, and constructive feedback techniques."
    },
    {
      num: "10",
      title: "Build Your Personal Brand",
      desc: "Teaching is only the beginning. This module helps you build a successful career as a German language trainer, including personal branding, professional identity, building credibility, social media presence, student acquisition, marketing yourself, and starting your own German language academy."
    }
  ];

  return (
    <>
      <PageMeta
        title="German Teacher Training Program | German Gyan"
        description="Become a certified German language trainer with German Gyan's 10-day intensive Teacher Training Program. Learn lesson planning, exam preparation strategies, and get an internship."
        keywords="German teacher training, become German teacher, German language trainer course, Goethe exam preparation trainer, German pedagogy"
      />
      <div className="min-h-screen bg-background font-sans pt-16">
        
        {/* Hero Section */}
        <section className="relative h-[450px] flex items-center overflow-hidden bg-black">
          <div className="absolute inset-0 z-0">
            <img
              src={otherHero}
              alt="German Teacher Training"
              className="w-full h-full object-cover opacity-65 object-center"
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
                <span className="text-white/60">Teacher Training</span>
              </div>
              <Badge variant="secondary" className="px-4 py-1 text-sm bg-primary/15 text-primary border-none hover:bg-primary/25">
                10-Day Intensive Certification
              </Badge>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                German Teacher <br />
                <span className="text-primary font-bold">Training Program</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl">
                Become a Certified German Language Trainer with German Gyan. Transform Your German Language Skills into a Successful Teaching Career.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button size="lg" className="rounded-full px-8 bg-[#FFC700] hover:bg-[#E6B200] text-black border-none font-bold animate-pulse" asChild>
                  <Link href="/contact">Book Free Demo</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 text-white border-white/35 hover:bg-white/10" asChild>
                  <a href="#about-program">Course Modules ↓</a>
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
                <h2 className="text-3xl font-serif font-bold text-foreground">Transform Your German Skills</h2>
                <p className="text-muted-foreground text-lg leading-relaxed font-semibold">
                  Have you successfully completed B2 Level German and aspire to become a professional German language trainer?
                </p>
                <p className="text-muted-foreground text-base leading-relaxed">
                  The <strong>German Gyan Teacher Training Program</strong> is a specially designed <strong>10-day intensive certification program</strong> for German language learners who want to build a rewarding career as German language teachers. Developed by experienced educators with years of classroom expertise, this program bridges the gap between learning German and teaching it professionally.
                </p>
                <p className="text-muted-foreground text-base leading-relaxed">
                  At <strong>German Gyan</strong>, we don't just teach you the German language—we teach you <strong>how to teach German with confidence, clarity, and professionalism</strong>.
                </p>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Whether you dream of teaching online, conducting offline classes, joining reputed institutes, working with EdTech companies, or building your own German language academy, this program equips you with the practical knowledge, teaching methodologies, and confidence to begin your journey.
                </p>
              </div>
              
              <div className="md:col-span-5 bg-[#102c3d]/5 rounded-3xl p-8 border border-[#102c3d]/10 space-y-6">
                <h3 className="text-xl font-bold text-foreground border-b pb-3 border-[#102c3d]/10">Course Highlights</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between border-b pb-2 border-[#102c3d]/5">
                    <span className="text-muted-foreground">Eligibility</span>
                    <span className="font-semibold text-foreground">B2 Level or Above</span>
                  </div>
                  <div className="flex justify-between border-b pb-2 border-[#102c3d]/5">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-semibold text-foreground">10 Days Intensive</span>
                  </div>
                  <div className="flex justify-between border-b pb-2 border-[#102c3d]/5">
                    <span className="text-muted-foreground">Mode</span>
                    <span className="font-semibold text-foreground">Online</span>
                  </div>
                  <div className="flex justify-between border-b pb-2 border-[#102c3d]/5">
                    <span className="text-muted-foreground">Online Timings</span>
                    <span className="font-semibold text-foreground">6:00 AM – 12:00 Midnight</span>
                  </div>
                  <div className="flex justify-between border-b pb-2 border-[#102c3d]/5">
                    <span className="text-muted-foreground">Course Fee</span>
                    <span className="font-bold text-primary">₹15,000 Only</span>
                  </div>
                  <div className="flex justify-between border-b pb-2 border-[#102c3d]/5">
                    <span className="text-muted-foreground">Certification</span>
                    <span className="font-semibold text-foreground">German Gyan Certificate</span>
                  </div>
                  <div className="flex justify-between pb-1">
                    <span className="text-muted-foreground">Benefit</span>
                    <span className="font-semibold text-foreground">3-Month Internship Letter</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose German Gyan */}
        <section className="py-20 bg-muted/30 px-4 border-t border-border/20">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold">Why Choose German Gyan's Teacher Training Program?</h2>
              <p className="text-muted-foreground mt-2">
                Our program focuses on practical classroom experience rather than theory alone.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "10 Days of Intensive Professional Training",
                "Learn from Experienced German Language Trainers",
                "Practical Classroom-Based Learning",
                "Complete Teaching Methodology",
                "Goethe Examination Preparation Techniques",
                "Lesson Planning & Curriculum Design",
                "Classroom Management Skills",
                "Student Assessment & Feedback Strategies",
                "Personal Branding & Career Development",
                "Internship Opportunity & Certification"
              ].map((item, idx) => (
                <div key={idx} className="bg-card p-6 rounded-2xl border border-border/40 shadow-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trusted By 500+ Trainers */}
        <section className="py-20 bg-secondary text-secondary-foreground px-4">
          <div className="container mx-auto max-w-5xl text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">Trusted by 500+ German Language Trainers</h2>
            <p className="text-secondary-foreground/80 max-w-3xl mx-auto text-base leading-relaxed">
              German Gyan is proud to have successfully trained <strong>500+ German language trainers</strong>, many of whom are now working with reputed German language institutes, educational organizations, universities, schools, EdTech companies, corporate training organizations, and international language academies.
            </p>
            <p className="text-secondary-foreground/80 max-w-3xl mx-auto text-base leading-relaxed">
              Several outstanding trainees from our Teacher Training Program have also been selected to join the <strong>German Gyan faculty</strong>, where they continue our commitment to delivering high-quality German language education.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 max-w-4xl mx-auto text-left text-white/95">
              <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-xs text-secondary-foreground/70 uppercase font-bold">Certified Trainers</div>
              </div>
              <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
                <div className="text-3xl font-bold text-primary mb-1">100%</div>
                <div className="text-xs text-secondary-foreground/70 uppercase font-bold">Practical Focus</div>
              </div>
              <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
                <div className="text-3xl font-bold text-primary mb-1">3 Months</div>
                <div className="text-xs text-secondary-foreground/70 uppercase font-bold">Internship Offer</div>
              </div>
              <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
                <div className="text-3xl font-bold text-primary mb-1">Goethe</div>
                <div className="text-xs text-secondary-foreground/70 uppercase font-bold">Exam Strategies</div>
              </div>
            </div>
          </div>
        </section>

        {/* Modules Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold">What You Will Learn</h2>
              <p className="text-muted-foreground mt-2">Comprehensive curriculum divided into 10 key modules.</p>
            </div>
            
            <div className="space-y-6">
              {modules.map((m, i) => (
                <div key={i} className="bg-card p-6 rounded-2xl border border-border/50 shadow-sm flex flex-col md:flex-row gap-4 hover:border-primary/45 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-serif font-extrabold text-lg text-primary shrink-0">
                    {m.num}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">Module {m.num}: {m.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Practical Experience, Certification, Internship */}
        <section className="py-20 bg-muted/40 px-4 border-t border-b border-border/20">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 gap-10">
              
              <div className="bg-card p-8 rounded-3xl border border-border/50 shadow-sm space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <BookMarked className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Practical Teaching Experience</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  The program includes hands-on teaching practice through live teaching demonstrations, micro teaching sessions, mock classroom practice, lesson planning workshops, trainer mentoring, classroom simulations, performance feedback, and teaching evaluations.
                </p>
              </div>

              <div className="bg-card p-8 rounded-3xl border border-border/50 shadow-sm space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileCheck className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Certification & Internship</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Upon successful completion, participants receive the <strong>German Gyan Teacher Training Program Certificate</strong> recognizing successful completion of the training, along with a <strong>3-Month Internship Letter</strong> providing valuable practical teaching exposure.
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
                  Who is eligible for this program?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm pb-4">
                  Anyone who has successfully completed B2 Level German or above and wishes to become a professional German language trainer.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-2" className="border border-border/60 rounded-xl px-4 bg-card">
                <AccordionTrigger className="text-left font-bold text-base hover:no-underline py-4 text-foreground">
                  Is this a German language course?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm pb-4">
                  No. This is a Teacher Training Program designed specifically for learners who already possess strong German language proficiency (B2+) and want to become professional trainers.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-3" className="border border-border/60 rounded-xl px-4 bg-card">
                <AccordionTrigger className="text-left font-bold text-base hover:no-underline py-4 text-foreground">
                  Will I receive a certificate?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm pb-4">
                  Yes. Every participant receives the German Gyan Teacher Training Program Certificate after successful completion.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-4" className="border border-border/60 rounded-xl px-4 bg-card">
                <AccordionTrigger className="text-left font-bold text-base hover:no-underline py-4 text-foreground">
                  Is there any internship opportunity?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm pb-4">
                  Yes. Participants receive a 3-Month Internship Letter from German Gyan for practical teaching exposure.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-5" className="border border-border/60 rounded-xl px-4 bg-card">
                <AccordionTrigger className="text-left font-bold text-base hover:no-underline py-4 text-foreground">
                  Are online batches available?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm pb-4">
                  Yes. Live online batches are available between 6:00 AM and 12:00 Midnight.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-6" className="border border-border/60 rounded-xl px-4 bg-card">
                <AccordionTrigger className="text-left font-bold text-base hover:no-underline py-4 text-foreground">
                  What is the course fee?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm pb-4">
                  The complete Teacher Training Program costs ₹15,000 only.
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
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">Launch Your Teaching Career</h2>
            <p className="text-secondary-foreground/80 text-base max-w-2xl mx-auto">
              If you have completed B2 Level German and are passionate about teaching, the German Gyan Teacher Training Program provides the perfect platform to transform your language skills into a successful teaching career.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto text-sm text-left text-white/90 font-medium py-6 border-t border-b border-white/10">
              <div>🎓 B2 Level or Above</div>
              <div>👨‍🎓 500+ Trainers Trained</div>
              <div>⏱ 10 Days Intensive</div>
              <div>💼 3-Month Internship</div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
              <Button size="lg" className="rounded-full px-8 bg-[#FFC700] hover:bg-[#E6B200] text-black font-bold border-none" asChild>
                <Link href="/contact">Enroll Now</Link>
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
