import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Users, Star } from "lucide-react";
import PageMeta from "@/components/PageMeta";

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function Instructor() {
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
            <h1 className="text-4xl md:text-5xl font-serif font-bold">Nidhi Jain</h1>
            <p className="text-xl text-muted-foreground">Founder of German Gyan & Expert German Language Educator</p>
            <p className="text-muted-foreground leading-relaxed">
              Founder of German Gyan and an expert German language educator. With years of experience specifically tailoring methods for Indian students, Nidhi transforms complex grammar into intuitive learning.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              As an expert German language educator, I built German Gyan on a simple premise: Indian learners need a different approach to mastering German. While standard textbooks assume a European linguistic background, I focus on bridging the gap between Indian thought processes and German sentence structures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button className="rounded-full px-8" asChild>
                <Link href="/contact">Book a Demo Class</Link>
              </Button>
              <Button variant="outline" className="rounded-full px-8" asChild>
                <Link href="/courses">View All Courses</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-2xl">
              <img
                src="\assets\nidhi-jain.webp"
                alt="Nidhi Jain — German Language Instructor"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6">
                <div className="text-white font-bold text-xl">Nidhi Jain</div>
                <div className="text-white/80 text-sm mt-1">Certified German Trainer</div>
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
              { icon: Users, value: "500+", label: "Students Taught" },
              { icon: Award, value: "A1–C2", label: "All Levels" },
              { icon: BookOpen, value: "10+", label: "Years Teaching" },
              { icon: Star, value: "95%", label: "Exam Pass Rate" },
            ].map(({ icon: Icon, value, label }, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
                <Icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-3xl font-bold font-serif text-primary mb-1">{value}</div>
                <div className="text-sm text-muted-foreground">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Teaching Philosophy</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "India-First Approach", desc: "I understand that Indian learners approach language differently. My methodology accounts for the linguistic background most Indian students bring, making complex German grammar feel intuitive rather than foreign." },
              { title: "Exam-Focused Rigour", desc: "Every course is designed with the Goethe-Zertifikat in mind. You don't just learn German — you learn how to demonstrate German proficiency in an exam setting." },
              { title: "Real Communication", desc: "Grammar exists to serve communication. I focus on practical language you'll actually use — in conversations, in professional settings, and in German-speaking environments." },
              { title: "Consistent Feedback", desc: "Every student receives detailed, actionable feedback on their writing and speaking. Vague praise doesn't help you improve — specific, constructive critique does." },
            ].map((item, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Card className="h-full border-border/50">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary text-secondary-foreground text-center px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Learn directly from Nidhi Jain</h2>
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
