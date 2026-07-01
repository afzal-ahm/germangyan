import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle2, 
  Award, 
  BookOpen, 
  Users, 
  Building, 
  GraduationCap, 
  Globe, 
  Sparkles, 
  Compass, 
  CheckSquare,
  Milestone,
  Heart
} from "lucide-react";
import PageMeta from "@/components/PageMeta";
import otherHero from "@assets/other hero.png";
import banner2 from "@assets/banner 2.png";

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

export default function About() {
  const partners = [
    { name: "German Embassy", detail: "German Translation & Language Support" },
    { name: "TÜV Rheinland", detail: "Official German Language Training Partner" },
    { name: "GIFT City (Gujarat International Finance Tec-City)", detail: "German Language Training Programs" },
    { name: "Maruti Suzuki", detail: "Corporate German Language Training" },
    { name: "IACE", detail: "German Language Education & Training" },
    { name: "Corporate Training Programs", detail: "For leading organizations and educational institutions" }
  ];

  const methodology = [
    "Practical German Communication",
    "Strong Grammar Foundation",
    "Speaking Confidence",
    "Pronunciation Training",
    "Exam-Oriented Preparation",
    "Real-Life Conversation Practice",
    "Interactive Learning",
    "Individual Student Attention"
  ];

  const achievements = [
    "10+ Years of German Language Teaching Experience",
    "10,000+ Students Successfully Trained",
    "500+ German Language Trainers Developed",
    "Corporate Training for Leading Companies & Institutions",
    "German Courses from A1 to C2",
    "Online & Offline Learning Available",
    "Excellent Goethe, TELC, TestDaF & ÖSD Examination Results",
    "Customized Learning for Students & Working Professionals"
  ];

  const glancePoints = [
    "10+ Years of Excellence",
    "10,000+ Students Trained",
    "500+ German Trainers Certified",
    "A1–C2 German Courses",
    "Corporate German Language Training",
    "Official Training Partner for Leading Organizations",
    "German Embassy Translation Experience",
    "Online & Offline Classes",
    "Excellent Examination Results",
    "Personalized Learning Approach"
  ];

  return (
    <div className="min-h-screen bg-background font-sans pt-16">
      <PageMeta
        title="About German Gyan | One of India's Trusted German Language Institutes"
        description="Founded by Nidhi Jain, German Gyan has become a trusted name in German language education, helping thousands of students, professionals, and corporate employees achieve their goals."
        keywords="about German Gyan, Nidhi Jain German teacher, German language academy India, German institute story, German Embassy translation partner"
      />
      
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img
            src={otherHero}
            alt="German Gyan Classroom"
            className="w-full h-full object-cover opacity-60 object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-white max-w-6xl">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-2xl space-y-4">
            <div className="flex items-center gap-2 text-sm font-medium text-primary">
              <Link href="/" className="cursor-pointer hover:underline">Home</Link>
              <span className="text-white/40">/</span>
              <span className="text-white/60">About Us</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              About <span className="text-primary font-bold">German Gyan</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed">
              One of India's Trusted German Language Institutes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Intro */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 space-y-6">
              <h2 className="text-3xl font-serif font-bold text-foreground">Our Foundation</h2>
              <p className="text-muted-foreground text-lg leading-relaxed font-semibold">
                Founded by Nidhi Jain, German Gyan has become a trusted name in German language education, helping thousands of students, professionals, and corporate employees achieve their German language goals through structured, practical, and result-oriented learning.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                With 10+ years of experience in both online and offline German language training, German Gyan specializes exclusively in German language education from A1 to C2, following the Common European Framework of Reference (CEFR) and international examination standards.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                Today, German Gyan is recognized not only for quality teaching but also for its excellent German examination results, personalized learning approach, and industry-focused German language training.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="relative rounded-3xl overflow-hidden aspect-square shadow-xl border border-border/50">
                <img
                  src={banner2}
                  alt="Nidhi Jain — Founder & Lead Instructor, German Gyan"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                  <div className="text-white font-bold text-lg">Nidhi Jain</div>
                  <div className="text-primary text-sm font-semibold">CEO & Founder</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-20 bg-muted/30 px-4 border-t border-b border-border/20">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Mission & Values</h2>
            <p className="text-muted-foreground text-base">Everything we do is guided by a commitment to genuine learning.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Compass, 
                title: "Mission", 
                desc: (
                  <>
                    <p className="mb-2">To redefine German language learning in India by making it simple, structured, and truly accessible for every learner—regardless of background.</p>
                    <p>At German Gyan, our mission is to empower students with not just language skills, but real global confidence.</p>
                  </>
                )
              },
              { 
                icon: Heart, 
                title: "Our Approach", 
                desc: (
                  <>
                    <p className="mb-2">We believe language is best learned when it is understood, not memorized.</p>
                    <p>Our teaching methodology bridges the gap between Indian learning psychology and German linguistic structure, making complex grammar intuitive through real-life examples, practical application, and guided practice.</p>
                  </>
                )
              },
              { 
                icon: Globe, 
                title: "Our Impact", 
                desc: (
                  <>
                    <p className="mb-2">We are building more than students—we are building global-ready individuals.</p>
                    <p>From beginners to professionals, we have empowered learners to achieve German fluency for education, career growth, and migration opportunities, helping them confidently step into an international future.</p>
                  </>
                )
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <Card key={i} className="h-full text-center border-border/50 hover:border-primary/45 transition-colors shadow-sm bg-card">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl text-foreground">{title}</h3>
                  <div className="text-muted-foreground text-sm leading-relaxed text-left space-y-2">
                    {desc}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why German Gyan */}
      <section className="py-20 px-4 border-b border-border/20">
        <div className="container mx-auto max-w-5xl space-y-6">
          <h2 className="text-3xl font-serif font-bold text-center mb-4">Why German Gyan?</h2>
          <p className="text-muted-foreground text-center text-lg max-w-3xl mx-auto leading-relaxed">
            Over the years, German Gyan has successfully trained 10,000+ German language learners across India and internationally, preparing students for higher education, careers, professional growth, and internationally recognized German language certifications.
          </p>
          <p className="text-muted-foreground text-center text-base max-w-3xl mx-auto leading-relaxed">
            Our expertise extends beyond classroom learning. We have proudly collaborated with leading organizations, multinational companies, educational institutions, and government initiatives by providing professional German language training, corporate workshops, translation services, and customized language solutions.
          </p>
        </div>
      </section>

      {/* Industry Recognition & Clients */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold">Professional Experience & Industry Recognition</h2>
            <p className="text-muted-foreground mt-2">German Gyan has proudly worked with renowned organizations including:</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((p, idx) => (
              <Card key={idx} className="border-border/50 hover:border-primary/50 shadow-sm transition-colors">
                <CardContent className="p-6 space-y-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Building className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-bold text-base text-foreground">{p.name}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-10 italic max-w-3xl mx-auto leading-relaxed">
            Our experience working with globally recognized organizations reflects our commitment to delivering high-quality German language education and professional language solutions.
          </p>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-muted/30 px-4 border-t border-b border-border/20">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold">What Makes German Gyan Different?</h2>
            <p className="text-muted-foreground mt-2">
              Unlike traditional language institutes, German Gyan focuses on practical learning that helps students communicate confidently in real-life situations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-foreground">Our Practical Methodology</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {methodology.map((m, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4.5 h-4.5 text-primary shrink-0" />
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-3xl border border-border/50 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-foreground">Core Language Skills Taught</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Every course is designed to build all four language skills:
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm text-foreground font-semibold">
                <div className="bg-muted/40 p-3 rounded-xl border border-border/20 text-center">🎧 Listening (Hören)</div>
                <div className="bg-muted/40 p-3 rounded-xl border border-border/20 text-center">📖 Reading (Lesen)</div>
                <div className="bg-muted/40 p-3 rounded-xl border border-border/20 text-center">✍️ Writing (Schreiben)</div>
                <div className="bg-muted/40 p-3 rounded-xl border border-border/20 text-center">🎤 Speaking (Sprechen)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Our Achievements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((a, idx) => (
              <div key={idx} className="bg-card p-5 rounded-2xl border border-border/40 shadow-sm flex items-center gap-3.5 hover:border-primary/50 transition-colors">
                <Award className="w-6 h-6 text-primary shrink-0" />
                <span className="text-sm font-semibold text-muted-foreground">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Led By Nidhi Jain */}
      <section className="py-20 bg-secondary text-secondary-foreground px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-8 space-y-6">
              <h2 className="text-3xl font-serif font-bold text-white">Led by Nidhi Jain</h2>
              <p className="text-secondary-foreground/80 text-base leading-relaxed">
                As the CEO & Founder of German Gyan, Nidhi Jain has dedicated more than a decade to making German language learning practical, accessible, and result-oriented for Indian learners.
              </p>
              
              <div className="space-y-3">
                <h4 className="font-bold text-white text-lg">Her Expertise Spans:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-secondary-foreground/85">
                  <div>• German Language Education</div>
                  <div>• Corporate German Training</div>
                  <div>• Teacher Training Programs</div>
                  <div>• German Examination Preparation</div>
                  <div>• Translation Services</div>
                  <div>• Curriculum Development</div>
                  <div>• Professional Language Coaching</div>
                </div>
              </div>

              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-2 text-white">
                <h4 className="font-bold text-xs uppercase text-primary tracking-widest">Vision</h4>
                <p className="italic text-sm text-white/95 leading-relaxed">
                  "Learning a language should create opportunities, build confidence, and transform careers. My goal is to help every learner master German through practical, structured, and internationally recognized training."
                </p>
                <p className="text-xs text-white/60 text-right font-semibold">— Nidhi Jain, CEO & Founder, German Gyan</p>
              </div>
            </div>
            
            <div className="md:col-span-4 bg-white/5 p-6 rounded-3xl border border-white/10 space-y-4 text-white">
              <h3 className="font-serif font-bold text-xl border-b border-white/10 pb-2">German Gyan at a Glance</h3>
              <div className="space-y-2.5 text-xs text-secondary-foreground/90 font-medium">
                {glancePoints.map((gp, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{gp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* German Flag Divider */}
      <div className="w-full h-[5px] flex">
        <div className="flex-1 bg-black" />
        <div className="flex-1 bg-[#E30613]" />
        <div className="flex-1 bg-[#FFED00]" />
      </div>

      {/* CTA */}
      <section className="py-20 text-center px-4">
        <div className="container mx-auto max-w-3xl space-y-6">
          <h2 className="text-3xl font-serif font-bold">Join the German Gyan Family Today</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Book a free demo session to see our practical, concept-based teaching methodology firsthand.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link href="/contact">Book Free Demo</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
              <Link href="/courses">View All Courses</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
