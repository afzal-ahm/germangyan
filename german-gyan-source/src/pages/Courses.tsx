import { motion } from "framer-motion";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import FAQSection from "@/components/FAQSection";
import otherHero from "@assets/other hero.png";

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const levelCourses = [
  { level: "A1", title: "A1 Level German Course", price: "₹17,000", href: "/courses/a1-level-german-course", desc: "Start from absolute zero. Alphabet, pronunciation, basic grammar, and first conversations.", tag: "Beginner" },
  { level: "A2", title: "A2 Level German Course", price: "₹19,000", href: "/courses/a2-level-german-course", desc: "Build on A1 foundations. Everyday conversations, simple grammar, A2 exam preparation.", tag: "Elementary" },
  { level: "B1", title: "B1 Level German Course", price: "₹23,000", href: "/courses/b1-level-german-course", desc: "Achieve independent user status. Express yourself on familiar topics and prepare for Goethe B1.", tag: "Intermediate" },
  { level: "B2", title: "B2 Level German Course", price: "₹28,000", href: "/courses/b2-level-german-course", desc: "Professional fluency. Master complex communication for work and university in Germany.", tag: "Upper-Intermediate" },
  { level: "C1", title: "C1 Level German Course", price: "₹35,000", href: "/courses/c1-level-german-course", desc: "Advanced German for professionals, academics, and those targeting top German universities.", tag: "Advanced" },
  { level: "C2", title: "C2 Level German Course", price: "₹45,000", href: "/courses/c2-level-german-course", desc: "Achieve near-native mastery — the highest CEFR certification level.", tag: "Mastery" },
  { level: "Ausbildung", title: "German for Ausbildung in Germany", price: "A1–B2 Prep", href: "/courses/german-for-ausbildung-in-germany", desc: "Specialized language training and travel support for vocational education in Germany.", tag: "Ausbildung" },
];

const specialCourses = [
  { title: "Teacher Training Program", href: "/courses/german-teacher-training-program", desc: "Become a certified German language teacher. Learn pedagogy, lesson planning, and teaching techniques.", tag: "Professional" },
  { title: "Brushup Course", href: "/courses/german-brushup-course", desc: "Refresh previously learned concepts, improve fluency, and regain confidence before exams or relocation.", tag: "Refresher" },
  { title: "Brush-Up Classes", href: "/courses/german-brush-up-classes", desc: "Revive and refresh your existing German skills with targeted focused sessions.", tag: "Refresher" },
  { title: "1-on-1 German Sessions", href: "/courses/one-to-one-german-sessions", desc: "Fully personalised learning at your own pace, schedule, and focus areas.", tag: "Personalised" },
  { title: "Corporate Training", href: "/courses/corporate-training", desc: "Custom German programmes for teams and organisations. Business German delivery.", tag: "Business" },
  { title: "School German Programs", href: "/courses/school-german-programs", desc: "Board-aligned German coaching for Class 5 Onwards students. CBSE/ICSE/State Board.", tag: "School" },
  { title: "German CV & Cover Letter Writing", href: "/courses/german-cv-cover-letter-writing-service", desc: "Professional Lebenslauf & Anschreiben preparation tailored to modern German hiring standards.", tag: "CV Writing" },
  { title: "German Job Interview Preparation", href: "/courses/german-job-interview-preparation-program", desc: "Mock interviews, self-introduction, and negotiation training for India & Germany.", tag: "Interview Prep" },
  { title: "Ausbildung Interview Prep", href: "/courses/ausbildung-interview-preparation-program", desc: "Mock interviews, Selbstvorstellung, and technical vocab preparation for vocational programs in Germany.", tag: "Interview Prep" },
  { title: "Speaking Practice Sessions", href: "/courses/german-speaking-practice-sessions", desc: "Dedicated conversation practice to build genuine oral fluency. A2 level and above.", tag: "Speaking" },
  { title: "Exam Preparation", href: "/courses/german-exam-preparation-sessions", desc: "Coaching for Goethe-Zertifikat, TELC, TestDaF & ÖSD examinations with mock tests.", tag: "Exam" },
];

export default function Courses() {
  return (
    <div className="min-h-screen bg-background font-sans pt-16">
      <PageMeta
        title="All German Courses | German Gyan"
        description="Explore all German courses at German Gyan — A1, A2, B1, B2, C1, C2 levels plus specialised programmes like brushup course, corporate training, one-to-one sessions and exam prep."
        keywords="German language courses India, A1 to C2 German, Goethe exam preparation, German brushup course, corporate German training, German speaking practice"
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
              <span className="text-white/60">Courses</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              All <span className="text-primary font-bold">German Courses</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed">
              Explore all German courses at German Gyan — A1, A2, B1, B2, C1, C2 levels plus specialised programmes for speaking, exams, corporate, school, and teacher training.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CEFR Courses */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-2">CEFR Level Courses</h2>
            <p className="text-muted-foreground">The complete A1–C2 pathway from beginner to mastery.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {levelCourses.map((course, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Link href={course.href}>
                  <Card className="h-full border-border/50 hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <span className={`font-bold font-serif text-primary ${course.level.length > 2 ? "text-xl sm:text-2xl" : "text-4xl"}`}>{course.level}</span>
                        <Badge variant="secondary" className="bg-primary/10 text-primary">{course.tag}</Badge>
                      </div>
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{course.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{course.desc}</p>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-foreground">{course.price}</span>
                        <span className="flex items-center gap-1 text-primary text-sm font-semibold">
                          View Course <ChevronRight className="w-4 h-4" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Programmes */}
      <section className="py-20 bg-muted/30 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-2">Specialised Programmes</h2>
            <p className="text-muted-foreground">Beyond CEFR — tailored programmes for specific learning goals.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {specialCourses.map((course, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Link href={course.href}>
                  <Card className="h-full border-border/50 hover:border-primary/50 hover:shadow-md transition-all cursor-pointer group">
                    <CardContent className="p-6 flex gap-4 items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{course.title}</h3>
                          <Badge variant="secondary" className="text-xs">{course.tag}</Badge>
                        </div>
                        <p className="text-muted-foreground text-sm">{course.desc}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-1" />
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection page="courses" />

      {/* German Flag Divider */}
      <div className="w-full h-[5px] flex">
        <div className="flex-1 bg-black" />
        <div className="flex-1 bg-[#E30613]" />
        <div className="flex-1 bg-[#FFED00]" />
      </div>

      {/* CTA */}
      <section className="py-20 bg-secondary text-secondary-foreground text-center px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Not sure which course is right for you?</h2>
          <p className="text-secondary-foreground/70 text-lg mb-10">Book a free demo class and we'll help you pick the perfect starting point.</p>
          <Button size="lg" className="rounded-full px-10" asChild>
            <Link href="/contact">Book Free Demo</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
