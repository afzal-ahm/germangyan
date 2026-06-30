import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, BookOpen, Monitor, Award } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

interface TimelineItem {
  time: string;
  title: string;
  desc: string;
}

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

interface NextCourse {
  label: string;
  href: string;
}

interface CoursePageProps {
  level: string;
  title: string;
  price: string;
  tagline: string;
  about: string[];
  curriculum: { title: string; desc: string }[];
  inclusions: string[];
  perfectFor: string[];
  notFor: string[];
  timeline?: TimelineItem[];
  testimonials?: Testimonial[];
  nextCourse?: NextCourse;
  ctaTitle: string;
  mode?: string;
  certificate?: string;
  duration?: string;
  image?: string;
}

export default function CoursePage({
  level,
  title,
  price,
  tagline,
  about,
  curriculum,
  inclusions,
  perfectFor,
  notFor,
  timeline,
  testimonials,
  nextCourse,
  ctaTitle,
  mode = "Online & Offline",
  certificate,
  duration,
  image,
}: CoursePageProps) {
  return (
    <div className="min-h-screen bg-background font-sans pt-20">
      {/* Hero */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6">
            <Badge variant="secondary" className="px-4 py-1 text-sm bg-primary/10 text-primary hover:bg-primary/20">
              {level}
            </Badge>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
              {title} <br />
              <span className="text-primary">{price}</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground">{tagline}</motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Monitor className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Mode</div>
                  <div className="font-medium">{mode}</div>
                </div>
              </div>
              {certificate && (
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Certificate</div>
                    <div className="font-medium">{certificate}</div>
                  </div>
                </div>
              )}
              {duration && (
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Duration</div>
                    <div className="font-medium">{duration}</div>
                  </div>
                </div>
              )}
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button size="lg" className="rounded-full px-8" asChild>
                <Link href="/contact">Enroll Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
                <Link href="/contact">Book Free Demo</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-primary/10 flex items-center justify-center">
              {image ? (
                <img src={image} alt={title} className="object-cover w-full h-full" />
              ) : (
                <div className="flex flex-col items-center justify-center gap-4 p-8 text-center">
                  <span className="text-7xl font-serif font-bold text-primary/20">{level}</span>
                  <p className="text-muted-foreground text-lg font-medium">{title}</p>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 bg-muted/30 px-4">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-3xl font-serif font-bold">About the {level} Course</h2>
          <div className="text-lg text-muted-foreground space-y-4 text-left md:text-center">
            {about.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">What You'll Learn</h2>
            <p className="text-muted-foreground text-lg">A structured curriculum designed for real results.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {curriculum.map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Card className="h-full border-border/50 hover:border-primary/50 transition-colors shadow-sm">
                  <CardContent className="p-6 flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                      <BookOpen className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusions + Perfect For */}
      <section className="py-20 bg-secondary text-secondary-foreground px-4">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-8">What's Included</h3>
            <ul className="space-y-4">
              {inclusions.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-secondary-foreground/90">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-400" />
                Perfect for you if...
              </h3>
              <ul className="space-y-3">
                {perfectFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-secondary-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {notFor.length > 0 && (
              <div>
                <h3 className="text-2xl font-serif font-bold mb-6 flex items-center gap-2 text-secondary-foreground/60">
                  <XCircle className="w-6 h-6" />
                  You might want a different level if...
                </h3>
                <ul className="space-y-3 text-secondary-foreground/60">
                  {notFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary-foreground/40 mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Timeline */}
      {timeline && (
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center">Course Timeline</h2>
            <div className="relative border-l-2 border-primary/30 ml-4 md:ml-0 md:border-l-0">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-primary/20 -z-10 -translate-y-1/2 rounded-full" />
              <div className="flex flex-col md:flex-row justify-between relative gap-8 md:gap-4 pl-8 md:pl-0">
                {timeline.map((item, i) => (
                  <div key={i} className="flex flex-col md:items-center relative bg-background md:p-4 z-10 w-full md:w-1/4">
                    <div className="absolute -left-[45px] top-1 md:static w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold mb-4 shadow-md text-sm">
                      {i + 1}
                    </div>
                    <div className="font-bold text-primary mb-1 text-sm tracking-wide uppercase">{item.time}</div>
                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground md:text-center">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {testimonials && (
        <section className="py-20 bg-muted/30 px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-serif font-bold mb-12 text-center">Student Success</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((t, i) => (
                <Card key={i} className="border-none shadow-md">
                  <CardContent className="p-8">
                    <div className="text-4xl text-primary font-serif leading-none mb-4">"</div>
                    <p className="text-lg italic mb-6">{t.quote}</p>
                    <div className="font-bold">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next Course */}
      {nextCourse && (
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <Card className="border-primary/20 bg-primary/5 shadow-none">
              <CardContent className="p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-left">
                  <h4 className="font-bold text-xl mb-1">Ready to go further?</h4>
                  <p className="text-muted-foreground">Explore the next level on your German journey.</p>
                </div>
                <Button asChild>
                  <Link href={nextCourse.href}>{nextCourse.label} →</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-secondary text-secondary-foreground text-center px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">{ctaTitle}</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link href="/contact">Enroll Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 border-secondary-foreground/20 hover:bg-secondary-foreground hover:text-secondary"
              asChild
            >
              <Link href="/courses">View All Courses</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
