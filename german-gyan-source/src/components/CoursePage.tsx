import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, BookOpen, Monitor, Award, Calendar, Clock, MapPin, Globe } from "lucide-react";
import otherHero from "@assets/other hero.png";

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
    <div className="min-h-screen bg-background font-sans pt-16">
      {/* Hero Section */}
      <section className="relative h-[480px] flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img
            src={image || otherHero}
            alt={title}
            className="w-full h-full object-cover opacity-50 object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-white max-w-6xl">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl space-y-5">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-primary">
              <Link href="/" className="cursor-pointer hover:underline text-primary">Home</Link>
              <span className="text-white/40">/</span>
              <Link href="/courses" className="cursor-pointer hover:underline text-primary">Courses</Link>
              <span className="text-white/40">/</span>
              <span className="text-white/60">{title}</span>
            </div>

            <Badge variant="secondary" className="px-4 py-1 text-xs bg-primary/10 text-primary border-none hover:bg-primary/20">
              {level}
            </Badge>

            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              {title} <br />
              {price && price !== "Free" && <span className="text-primary font-bold">{price}</span>}
            </h1>

            <p className="text-base md:text-lg text-white/80 font-light leading-relaxed max-w-2xl">
              {tagline}
            </p>

            {/* Inclusions Row */}
            <div className="flex flex-wrap gap-6 text-sm py-2 border-t border-b border-white/10 my-2">
              <div className="flex items-center gap-2">
                <Monitor className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <div className="text-xs text-white/50 uppercase tracking-wider font-bold">Mode</div>
                  <div className="font-medium text-white">{mode}</div>
                </div>
              </div>
              {certificate && (
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <div className="text-xs text-white/50 uppercase tracking-wider font-bold">Certificate</div>
                    <div className="font-medium text-white">{certificate}</div>
                  </div>
                </div>
              )}
              {duration && (
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <div className="text-xs text-white/50 uppercase tracking-wider font-bold">Duration</div>
                    <div className="font-medium text-white">{duration}</div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button size="lg" className="rounded-full px-8 bg-[#FFC700] hover:bg-[#E6B200] text-black border-none font-bold shadow-lg" asChild>
                <Link href="/contact">Book Free Demo</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 text-white border-white/30 hover:bg-white/10 font-bold" asChild>
                <Link href="/contact">Enroll Now</Link>
              </Button>
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

      {/* Course Schedule */}
      <section className="py-16 bg-background px-4 border-t border-border/20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-serif font-bold text-center mb-10">Course Schedule</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card p-6 rounded-2xl border border-border/50 shadow-sm flex flex-col items-center text-center space-y-3 hover:border-primary/45 transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider font-bold mb-1">Schedule</div>
                <div className="font-semibold text-base text-foreground">Monday to Friday</div>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-2xl border border-border/50 shadow-sm flex flex-col items-center text-center space-y-3 hover:border-primary/45 transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider font-bold mb-1">Session Duration</div>
                <div className="font-semibold text-base text-foreground">1 Hour per Day</div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border/50 shadow-sm flex flex-col items-center text-center space-y-3 hover:border-primary/45 transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider font-bold mb-1">Offline Timings</div>
                <div className="font-semibold text-base text-foreground">10:00 AM – 6:00 PM</div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border/50 shadow-sm flex flex-col items-center text-center space-y-3 hover:border-primary/45 transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider font-bold mb-1">Online Timings</div>
                <div className="font-semibold text-base text-foreground">6:00 AM – 12:00 Midnight</div>
              </div>
            </div>
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

      {/* German Flag Divider */}
      <div className="w-full h-[5px] flex">
        <div className="flex-1 bg-black" />
        <div className="flex-1 bg-[#E30613]" />
        <div className="flex-1 bg-[#FFED00]" />
      </div>

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
