import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Target, Heart, Globe } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import FAQSection from "@/components/FAQSection";

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function About() {
  return (
    <div className="min-h-screen bg-background font-sans pt-20">
      <PageMeta
        title="About German Gyan | Our Story & Mission"
        description="Learn about German Gyan — founded by Nidhi Jain, an expert German language educator tailoring methods specifically for Indian learners. Our mission, story, and teaching philosophy."
        keywords="about German Gyan, Nidhi Jain German teacher, German language academy India, German institute story, German Gyan mission"
      />
      {/* Hero */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="text-4xl md:text-6xl font-serif font-bold mb-6">
            About <span className="text-primary">German Gyan</span>
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering Indian learners to break language barriers and unlock global opportunities in German-speaking countries.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-6">
            <h2 className="text-3xl font-serif font-bold">Our Story</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              German Gyan was founded by Nidhi Jain, an expert German language educator with years of experience specifically tailoring methods for Indian students. Nidhi transforms complex grammar into intuitive learning.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              As an expert German language educator, I built German Gyan on a simple premise: Indian learners need a different approach to mastering German. While standard textbooks assume a European linguistic background, I focus on bridging the gap between Indian thought processes and German sentence structures.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              The result is a learning methodology that is both rigorous and intuitive — one that has helped hundreds of Indian students and professionals achieve real German fluency and pass Goethe certifications with confidence.
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="relative rounded-2xl overflow-hidden aspect-square shadow-2xl">
              <img
                src="\assets\nidhi-jain.webp"
                alt="Nidhi Jain — Founder & Lead Instructor, German Gyan"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6">
                <div className="text-white font-bold text-lg">Nidhi Jain</div>
                <div className="text-white/80 text-sm">Founder & Lead Instructor</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-muted/30 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Mission & Values</h2>
            <p className="text-muted-foreground text-lg">Everything we do is guided by a commitment to genuine learning.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Mission", desc: "To make German language education accessible, effective, and specifically designed for Indian learners at every level." },
              { icon: Heart, title: "Our Approach", desc: "An approach designed specifically to make complex German concepts intuitive — bridging Indian thought processes with German structures." },
              { icon: Globe, title: "Our Impact", desc: "Empowering Indian students and professionals to achieve German fluency for career growth and global education opportunities." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Card className="h-full text-center border-border/50">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-3">{title}</h3>
                    <p className="text-muted-foreground">{desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Why We're Different</h2>
          </motion.div>
          <div className="space-y-4">
            {[
              "Tailored teaching methodology designed for Indian learners",
              "Expert instruction from a certified German language educator",
              "Comprehensive coverage from A1 beginner to C2 mastery",
              "Both online and offline class options across India",
              "Dedicated Goethe exam preparation with mock tests",
              "Small batch sizes ensuring personalised attention",
              "Focus on real-world communication, not just textbook grammar",
              "Flexible scheduling — morning, afternoon, evening, and weekend batches",
            ].map((point, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex items-center gap-3 p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span>{point}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection page="about" />

      {/* CTA */}
      <section className="py-20 bg-secondary text-secondary-foreground text-center px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Join the German Gyan family</h2>
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
