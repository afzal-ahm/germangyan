import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Users, BookOpen, Award, Star, ChevronRight, Phone } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import FAQSection from "@/components/FAQSection";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const courses = [
  { level: "A1", title: "Beginner German", price: "₹17,000", href: "/courses/a1-level-german-course", desc: "Start from zero. Learn the alphabet, basic phrases, and foundational grammar." },
  { level: "A2", title: "Elementary German", price: "₹19,000", href: "/courses/a2-level-german-course", desc: "Hold simple conversations and navigate everyday German situations." },
  { level: "B1", title: "Intermediate German", price: "₹23,000", href: "/courses/b1-level-german-course", desc: "Express yourself on familiar topics and reach independent user status." },
  { level: "B2", title: "Upper-Intermediate", price: "₹28,000", href: "/courses/b2-level-german-course", desc: "Communicate fluently and understand complex texts with ease." },
  { level: "C1", title: "Advanced German", price: "₹35,000", href: "/courses/c1-level-german-course", desc: "Professional fluency for university, career, and high-level communication." },
  { level: "C2", title: "Mastery German", price: "₹45,000", href: "/courses/c2-level-german-course", desc: "Achieve near-native mastery — the highest CEFR level." },
];

const specialCourses = [
  { title: "Crash Courses", desc: "Intensive short-term programmes for rapid progress.", href: "/courses/german-crash-courses" },
  { title: "Corporate Training", desc: "Custom German programmes for teams and organisations.", href: "/courses/corporate-training" },
  { title: "1-on-1 Sessions", desc: "Personalised learning at your own pace.", href: "/courses/one-to-one-german-sessions" },
  { title: "Exam Preparation", desc: "Targeted Goethe exam coaching for all levels.", href: "/courses/german-exam-preparation-sessions" },
  { title: "Speaking Practice", desc: "Build fluency through dedicated conversation sessions.", href: "/courses/german-speaking-practice-sessions" },
  { title: "School Programs", desc: "Board-aligned German coaching for Class 6–12.", href: "/courses/school-german-programs" },
];

const stats = [
  { value: "500+", label: "Students Taught" },
  { value: "95%", label: "Exam Pass Rate" },
  { value: "A1–C2", label: "All CEFR Levels" },
  { value: "10+", label: "Years Experience" },
];

const testimonials = [
  { name: "Aishwarya Nair", role: "C1 Graduate, now studying in Munich", quote: "The C1 course at German Gyan is genuinely challenging — which is exactly what I needed. Nidhi ma'am's feedback on my writing completely transformed my academic German." },
  { name: "Meera Patel", role: "Speaking Practice student, works in a German MNC", quote: "I had completed B1 at another institute but couldn't hold a real conversation. Three months of speaking practice at German Gyan completely changed that." },
  { name: "Tanvi Singh", role: "Cleared Goethe B1 on second attempt", quote: "Failed my B1 Goethe on the first attempt elsewhere. Joined German Gyan's exam prep and passed second time with a B grade. The mock exams made all the difference." },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <PageMeta
        title="German Gyan | India's Premier German Language Institute"
        description="Learn German from A1 to C2 with German Gyan — India's premier German language academy led by expert instructor Nidhi Jain. Online & offline classes, Goethe exam prep, and specialised programmes."
        keywords="German language course India, learn German online, Goethe exam preparation, A1 German course, German language institute, German Gyan, Nidhi Jain German teacher"
      />
      {/* Hero */}
      <section className="pt-28 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 -z-10" />
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeUp}>
              <span
                className="inline-block mb-6 px-5 py-2 rounded-full text-sm font-semibold text-white tracking-wide"
                style={{ backgroundColor: "#102c3d" }}
              >
                India's Premier German Academy
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 leading-tight">
              Master German,<br />
              <span className="text-primary">Unlock the World</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              From absolute beginner to C2 mastery — expert-led German courses designed specifically for Indian learners. Online & offline.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full px-10 text-lg h-14" asChild>
                <Link href="/courses">Explore Courses</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-10 text-lg h-14" asChild>
                <Link href="/contact">Book Free Demo</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-muted/30 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center"
              >
                <div className="text-4xl font-bold font-serif text-primary mb-1">{s.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CEFR Courses */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">German Language Courses</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Structured courses from A1 to C2 — the complete CEFR pathway, taught by an expert educator.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Link href={course.href}>
                  <Card className="h-full border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-3xl font-bold font-serif text-primary">{course.level}</span>
                        <span className="font-bold text-foreground">{course.price}</span>
                      </div>
                      <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">{course.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{course.desc}</p>
                      <div className="flex items-center gap-1 text-primary text-sm font-semibold">
                        Learn more <ChevronRight className="w-4 h-4" />
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
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Specialised Programmes</h2>
            <p className="text-muted-foreground text-lg">Beyond CEFR levels — tailored options for every learning need.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialCourses.map((course, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Link href={course.href}>
                  <Card className="h-full hover:border-primary/50 hover:shadow-md transition-all cursor-pointer group border-border/50">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{course.title}</h3>
                      <p className="text-muted-foreground text-sm">{course.desc}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why German Gyan */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="space-y-6"
            >
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-serif font-bold">
                Why German Gyan?
              </motion.h2>
              <motion.p variants={fadeUp} className="text-muted-foreground text-lg">
                As an expert German language educator, I built German Gyan on a simple premise: Indian learners need a different approach to mastering German. While standard textbooks assume a European linguistic background, I focus on bridging the gap between Indian thought processes and German sentence structures.
              </motion.p>
              {[
                "Tailored teaching methods for Indian learners",
                "Experienced, certified German language instructor",
                "Both online and offline classes available",
                "Comprehensive Goethe exam preparation",
                "Small batch sizes for personalised attention",
                "Flexible timing — morning, evening, weekend",
              ].map((point, i) => (
                <motion.div key={i} variants={fadeUp} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span>{point}</span>
                </motion.div>
              ))}
              <motion.div variants={fadeUp}>
                <Button className="rounded-full px-8" asChild>
                  <Link href="/about">Our Story →</Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Users, label: "500+ Students", sub: "Across India" },
                { icon: Award, label: "Expert Instructor", sub: "Certified & Experienced" },
                { icon: BookOpen, label: "A1 to C2", sub: "Complete Pathway" },
                { icon: Star, label: "95% Pass Rate", sub: "Goethe Exams" },
              ].map(({ icon: Icon, label, sub }, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <Card className="text-center p-6">
                    <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="font-bold">{label}</div>
                    <div className="text-xs text-muted-foreground mt-1">{sub}</div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold">What Students Say</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Card className="border-none shadow-md h-full">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="text-4xl text-primary font-serif leading-none mb-4">"</div>
                    <p className="text-muted-foreground italic mb-6 flex-1">{t.quote}</p>
                    <div>
                      <div className="font-bold">{t.name}</div>
                      <div className="text-sm text-muted-foreground">{t.role}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection page="home" />

      {/* CTA */}
      <section className="py-20 bg-secondary text-secondary-foreground text-center px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            Ready to start your German journey?
          </h2>
          <p className="text-secondary-foreground/70 text-lg mb-10">
            Book a free demo class and see the German Gyan difference for yourself.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="rounded-full px-10" asChild>
              <Link href="/contact">Book Free Demo</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-10 border-secondary-foreground/20 hover:bg-secondary-foreground hover:text-secondary"
              asChild
            >
              <a href="tel:+919643430783">
                <Phone className="w-4 h-4 mr-2" /> Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
