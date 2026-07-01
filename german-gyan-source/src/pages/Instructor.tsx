import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Users, Star, CheckCircle2, BadgeCheck } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import instructorPhoto from "@assets/instructor.png";

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function Instructor() {
  const highlights = [
    "CEO & Founder of German Gyan",
    "10+ Years of German Language Teaching Experience",
    "Trained 10,000+ Students Worldwide",
    "Developed 500+ German Language Trainers",
    "Conducted Corporate German Language Training for Leading Organizations",
    "Worked on German Translation Assignments with the German Embassy",
    "Delivered German Language Training for organizations including TÜV Rheinland, GIFT City, Maruti Suzuki, IACE, and other reputed institutions",
    "Expert in A1–C2 German Language Training",
    "Specialist in Goethe, TELC, TestDaF & ÖSD Exam Preparation",
    "Conducts Online & Offline German Language Training",
    "Known for Excellent German Examination Results"
  ];

  return (
    <div className="min-h-screen bg-background font-sans pt-20">
      <PageMeta
        title="Nidhi Jain — German Language Instructor | German Gyan"
        description="Meet Nidhi Jain, founder and lead instructor at German Gyan. Expert German language educator with years of experience tailoring methods specifically for Indian learners."
        keywords="Nidhi Jain German teacher, German language instructor India, German Gyan founder, expert German educator"
      />
      {/* Hero */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="space-y-6">
            <div className="text-sm font-bold uppercase tracking-widest text-primary">Your Instructor</div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">Nidhi Jain</h1>
            <p className="text-lg md:text-xl text-muted-foreground font-semibold leading-normal">
              CEO & Founder, German Gyan | German Language Expert | Corporate Trainer | German Language Consultant
            </p>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                With over 10+ years of experience in German language education, Nidhi Jain is one of India's leading German language educators and the visionary behind German Gyan, a premier institute dedicated exclusively to German language training.
              </p>
              <p>
                Her mission has always been simple—to make learning German practical, structured, and result-oriented for students, professionals, and corporate organizations. Under her leadership, German Gyan has successfully trained 10,000+ students and developed 500+ German language trainers, many of whom are now working with reputed educational institutions, multinational companies, and EdTech organizations across India.
              </p>
              <p>
                Beyond classroom teaching, Nidhi has worked extensively with leading multinational companies, government initiatives, educational institutions, and international organizations, delivering corporate German language training, translation services, teacher training, and customized language solutions.
              </p>
              <p>
                Recognized for her practical teaching methodology and outstanding examination results, she has contributed to German language education through collaborations with organizations including the German Embassy (translation assignments), TÜV Rheinland (corporate German language training), GIFT City (Government of Gujarat initiative), Maruti Suzuki, IACE, and several other leading organizations.
              </p>
              <p>
                Her expertise covers every aspect of German language education—from A1 to C2 language training, Goethe, TELC, TestDaF, and ÖSD examination preparation, corporate training, teacher training, German interview preparation, CV & Cover Letter guidance, and career-focused German language coaching.
              </p>
              <p className="font-semibold text-foreground">
                Today, Nidhi continues to empower students, professionals, and organizations by helping them achieve their academic, professional, and international career goals through high-quality German language education.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button className="rounded-full px-8" asChild>
                <Link href="/contact">Book a Demo Class</Link>
              </Button>
              <Button variant="outline" className="rounded-full px-8" asChild>
                <Link href="/courses">View All Courses</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="h-full">
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl border border-border/40">
              <img
                src={instructorPhoto}
                alt="Nidhi Jain — German Language Instructor"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-6">
                <div className="text-white font-bold text-2xl flex items-center gap-1.5">
                  Nidhi Jain <BadgeCheck className="w-5.5 h-5.5 text-primary fill-primary stroke-background" />
                </div>
                <div className="text-white/80 text-sm mt-1">Founder & CEO, German Gyan</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-muted/30 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: "10k+", label: "Students Taught" },
              { icon: Award, value: "A1–C2", label: "All Levels" },
              { icon: BookOpen, value: "10+", label: "Years Experience" },
              { icon: Star, value: "95%", label: "Exam Pass Rate", sublabel: "Excellent Results in Goethe, TELC, TestDaF & ÖSD Examinations" },
            ].map(({ icon: Icon, value, label, sublabel }, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
                <Icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-3xl font-bold font-serif text-primary mb-1">{value}</div>
                <div className="text-sm text-muted-foreground">{label}</div>
                {sublabel && (
                  <div className="text-[10px] sm:text-xs text-muted-foreground mt-1.5 max-w-[180px] mx-auto leading-normal">
                    {sublabel}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Professional Highlights</h2>
          </motion.div>
          <div className="space-y-4">
            {highlights.map((point, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex items-center gap-3.5 p-4 rounded-xl border border-border/50 hover:border-primary/30 transition-all bg-card shadow-sm"
              >
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-muted-foreground">{point}</span>
              </motion.div>
            ))}
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
      <section className="py-20 bg-secondary text-secondary-foreground text-center px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 text-white">Learn directly from Nidhi Jain</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link href="/contact">Book Free Demo</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 border-secondary-foreground/20 hover:bg-secondary-foreground hover:text-secondary" asChild>
              <Link href="/courses">View All Courses</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
