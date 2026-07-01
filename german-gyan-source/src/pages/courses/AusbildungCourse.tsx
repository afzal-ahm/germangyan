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
  Activity, 
  Cpu, 
  Building, 
  Settings, 
  ShieldCheck, 
  Phone, 
  Plane,
  ChevronRight
} from "lucide-react";
import PageMeta from "@/components/PageMeta";
import otherHero from "@assets/other hero.png";

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

export default function AusbildungCourse() {
  return (
    <>
      <PageMeta
        title="German Language Course for Ausbildung in Germany | German Gyan"
        description="Prepare for your Ausbildung in Germany with specialized German language training. Healthcare, IT, Hospitality & Engineering specific vocabulary, flexible batches, and travel support with Sky Journey."
        keywords="Ausbildung Germany, learn German for Ausbildung, nursing Ausbildung German, technical German course, travel support Sky Journey, vocational training Germany"
      />
      <div className="min-h-screen bg-background font-sans pt-16">
        
        {/* Hero Section */}
        <section className="relative h-[450px] flex items-center overflow-hidden bg-black">
          <div className="absolute inset-0 z-0">
            <img
              src={otherHero}
              alt="Ausbildung in Germany"
              className="w-full h-full object-cover opacity-60 object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          </div>

          <div className="container mx-auto px-6 relative z-10 text-white max-w-6xl">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl space-y-6">
              <div className="flex items-center gap-2 text-sm font-medium text-primary">
                <Link href="/" className="cursor-pointer hover:underline">Home</Link>
                <span className="text-white/40">/</span>
                <Link href="/courses" className="cursor-pointer hover:underline">Courses</Link>
                <span className="text-white/40">/</span>
                <span className="text-white/60">Ausbildung German</span>
              </div>
              <Badge variant="secondary" className="px-4 py-1 text-sm bg-primary/10 text-primary border-none hover:bg-primary/20">
                Vocational Training Prep
              </Badge>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                German Language Course for <br />
                <span className="text-primary font-bold">Ausbildung in Germany</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl">
                Learn German with Confidence. Prepare for Your Ausbildung. Begin Your Journey with German Gyan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button size="lg" className="rounded-full px-8 bg-[#FFC700] hover:bg-[#E6B200] text-black border-none font-bold" asChild>
                  <Link href="/contact">Book Free Demo</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 text-white border-white/30 hover:bg-white/10" asChild>
                  <a href="#why-learn">Learn More ↓</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Introduction Section */}
        <section id="why-learn" className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-7 space-y-6">
                <h2 className="text-3xl font-serif font-bold text-foreground">Prepare for Your Future in Germany</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Germany is one of the world's leading destinations for vocational education through the Ausbildung program. Whether you dream of becoming a nurse, IT specialist, engineer, hotel professional, or technician, learning the German language is one of the most important steps toward success.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  At <strong>German Gyan</strong>, we specialize exclusively in German language training and have successfully trained 10,000+ students through our structured A1 to C2 German courses. Our Ausbildung-focused German programs are designed to help students build the language skills required for everyday communication, classroom learning, workplace interactions, and German language certification exams.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Once you complete your German language training, if you require assistance with passport guidance, visa documentation, travel arrangements, or flight bookings, you can connect with our trusted travel partner <strong>Sky Journey</strong> for complete travel support.
                </p>
              </div>
              <div className="md:col-span-5 bg-[#102c3d]/5 rounded-3xl p-8 border border-[#102c3d]/10 space-y-6">
                <h3 className="text-xl font-bold text-foreground border-b pb-3 border-[#102c3d]/10">Why Learn German for Ausbildung?</h3>
                <ul className="space-y-3">
                  {[
                    "Understand classroom instruction",
                    "Communicate effectively with trainers and colleagues",
                    "Interact confidently with customers and patients",
                    "Complete assignments and documentation",
                    "Adapt smoothly to life in Germany",
                    "Improve your career opportunities",
                    "Perform better in German language certification exams"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground italic border-t pt-3 border-[#102c3d]/10">
                  At German Gyan, we ensure that students develop practical communication skills while mastering German grammar and vocabulary.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule Timings Cards */}
        <section className="py-16 bg-muted/30 px-4 border-t border-border/20">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-serif font-bold text-center mb-10">Flexible Course Schedule</h2>
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
                  <div className="font-semibold text-sm text-foreground">10:00 AM – 6:00 PM</div>
                  <div className="text-[10px] text-muted-foreground mt-1">Delhi | Noida</div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-2xl border border-border/50 shadow-sm flex flex-col items-center text-center space-y-3 hover:border-primary/45 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-bold mb-1">Online Timings</div>
                  <div className="font-semibold text-sm text-foreground">6:00 AM – 12:00 Midnight</div>
                  <div className="text-[10px] text-muted-foreground mt-1">Live Interactive</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Curriculum Inclusions */}
        <section className="py-20 bg-secondary text-secondary-foreground px-4">
          <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-white">Our Ausbildung Program Includes</h3>
              <ul className="space-y-4">
                {[
                  "German Language Levels A1 to B2 (with higher levels available up to C2)",
                  "Profession-specific vocabulary",
                  "Daily communication practice",
                  "Grammar from beginner to advanced",
                  "Reading, Listening, Speaking & Writing modules",
                  "Pronunciation training",
                  "Mock examinations",
                  "Exam-oriented preparation",
                  "Individual feedback sessions"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-secondary-foreground/90">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm text-secondary-foreground/75 italic">
                Every course follows international CEFR standards and is designed to build confidence in real-life communication.
              </p>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-serif font-bold mb-6 text-white flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-green-400" />
                  What Makes German Gyan Different?
                </h3>
                <div className="space-y-4 text-sm text-secondary-foreground/80">
                  <div>
                    <strong className="text-white block">✅ Profession-Specific German Training</strong>
                    We don't just teach the language—we teach the German you need for your chosen profession.
                  </div>
                  <div>
                    <strong className="text-white block">✅ Grammar-Focused Learning</strong>
                    From A1 to B2, every grammar topic is taught systematically to ensure long-term understanding rather than memorization.
                  </div>
                  <div>
                    <strong className="text-white block">✅ Four Essential Language Skills</strong>
                    Every course develops Reading 📖, Listening 🎧, Speaking 🗣, and Writing ✍ modules according to CEFR standards.
                  </div>
                  <div>
                    <strong className="text-white block">✅ Excellent Exam Results</strong>
                    Our teaching methodology focuses on concept clarity, regular practice, mock examinations, and continuous improvement.
                  </div>
                  <div>
                    <strong className="text-white block">✅ Personalized Learning Options</strong>
                    Choose from regular batches, customized timings, one-to-one classes, or fast track programs.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Profession Specific Custom Modules */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Profession-Specific German Language Training</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Every profession uses different vocabulary and communication styles. We customize learning materials according to your chosen Ausbildung field.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Healthcare Card */}
              <Card className="border-border/50 hover:border-primary/50 transition-colors shadow-sm">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-rose-500/10 flex items-center justify-center">
                      <Activity className="w-6 h-6 text-rose-500" />
                    </div>
                    <h3 className="text-xl font-bold">🏥 Healthcare & Nursing</h3>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Ideal for careers in:</span>
                    <ul className="list-disc pl-5 mt-1.5 space-y-1">
                      <li>Nursing (Pflegefachmann/-frau)</li>
                      <li>Medical Assistant (MFA)</li>
                      <li>Dental Assistant (ZFA)</li>
                      <li>Physiotherapist</li>
                      <li>Dental / Surgical / Anesthesia Technical Assistant</li>
                    </ul>
                  </div>
                  <p className="text-sm text-muted-foreground pt-2 border-t border-border/50">
                    Students learn patient communication, hospital vocabulary, healthcare terminology, medical conversations, and workplace communication.
                  </p>
                </CardContent>
              </Card>

              {/* IT & Tech Card */}
              <Card className="border-border/50 hover:border-primary/50 transition-colors shadow-sm">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <Cpu className="w-6 h-6 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-bold">💻 IT & Technology</h3>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Perfect for interests in:</span>
                    <ul className="list-disc pl-5 mt-1.5 space-y-1">
                      <li>IT Specialist (Fachinformatiker)</li>
                      <li>Mechatronics Technician</li>
                      <li>Electronics Technician</li>
                      <li>Automotive Mechatronics Technician</li>
                    </ul>
                  </div>
                  <p className="text-sm text-muted-foreground pt-2 border-t border-border/50">
                    Training includes technical German, workplace communication, documentation, troubleshooting vocabulary, and professional conversations.
                  </p>
                </CardContent>
              </Card>

              {/* Hospitality & Business */}
              <Card className="border-border/50 hover:border-primary/50 transition-colors shadow-sm">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                      <Building className="w-6 h-6 text-amber-500" />
                    </div>
                    <h3 className="text-xl font-bold">🏨 Hospitality, Business & Logistics</h3>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Suitable for pursuing:</span>
                    <ul className="list-disc pl-5 mt-1.5 space-y-1">
                      <li>Hotel & Hospitality Management</li>
                      <li>Logistics & Warehouse Management</li>
                      <li>Bank Clerk</li>
                      <li>E-Commerce Clerk</li>
                    </ul>
                  </div>
                  <p className="text-sm text-muted-foreground pt-2 border-t border-border/50">
                    Students develop customer service communication, business vocabulary, office German, email writing, and professional speaking skills.
                  </p>
                </CardContent>
              </Card>

              {/* Engineering */}
              <Card className="border-border/50 hover:border-primary/50 transition-colors shadow-sm">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                      <Settings className="w-6 h-6 text-emerald-500" />
                    </div>
                    <h3 className="text-xl font-bold">⚙ Engineering & Manufacturing</h3>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Designed for:</span>
                    <ul className="list-disc pl-5 mt-1.5 space-y-1">
                      <li>Industrial Mechanic</li>
                      <li>Aircraft Mechanic</li>
                      <li>Baker</li>
                      <li>Pastry Chef</li>
                    </ul>
                  </div>
                  <p className="text-sm text-muted-foreground pt-2 border-t border-border/50">
                    Students learn technical vocabulary, machinery terminology, safety instructions, workplace communication, and practical German used in industrial environments.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Sky Journey Travel Section */}
        <section className="py-20 bg-muted/40 px-4 border-t border-b border-border/20">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-card rounded-3xl border border-primary/20 shadow-xl overflow-hidden grid md:grid-cols-12 items-stretch">
              <div className="md:col-span-5 bg-primary/5 p-8 flex flex-col justify-center items-center text-center border-b md:border-b-0 md:border-r border-border/40">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Plane className="w-10 h-10 text-primary animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Sky Journey</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold mt-1">Our Trusted Travel Partner</p>
              </div>
              <div className="md:col-span-7 p-8 space-y-6">
                <h4 className="text-xl font-bold text-foreground">Journey Beyond Language with Sky Journey</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Once you've completed your German language training, you may need assistance with travel-related formalities before leaving for Germany. Sky Journey assists students with:
                </p>
                <div className="grid grid-cols-2 gap-3 text-sm font-medium">
                  <div className="flex items-center gap-2">✅ Passport Guidance</div>
                  <div className="flex items-center gap-2">✅ Visa Documentation Support</div>
                  <div className="flex items-center gap-2">✅ Flight Booking Assistance</div>
                  <div className="flex items-center gap-2">✅ Travel Planning</div>
                  <div className="flex items-center gap-2 col-span-2">✅ Pre-Departure Guidance</div>
                </div>
                <div className="pt-4 border-t border-border/40 flex flex-wrap gap-4 items-center">
                  <Button className="rounded-full bg-emerald-600 hover:bg-emerald-700 text-white border-none px-6" asChild>
                    <a href="https://wa.me/919193117056" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                      <Phone className="w-4 h-4" /> WhatsApp Sky Journey
                    </a>
                  </Button>
                  <span className="text-xs text-muted-foreground font-semibold">+91 91931 17056</span>
                </div>
                <p className="text-[10px] text-muted-foreground/80 leading-normal italic">
                  Please Note: German Gyan specializes exclusively in German language training. Travel and documentation-related assistance is provided separately by Sky Journey.
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
                  Do I need German for Ausbildung?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm pb-4">
                  Yes. Most Ausbildung programs require German language proficiency, commonly at the B1 or B2 level depending on the profession and employer.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-2" className="border border-border/60 rounded-xl px-4 bg-card">
                <AccordionTrigger className="text-left font-bold text-base hover:no-underline py-4 text-foreground">
                  Which German level should I complete?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm pb-4">
                  The required level varies by profession. Most students begin with A1 and continue to B1 or B2 based on their Ausbildung requirements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-3" className="border border-border/60 rounded-xl px-4 bg-card">
                <AccordionTrigger className="text-left font-bold text-base hover:no-underline py-4 text-foreground">
                  Do you teach profession-specific vocabulary?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm pb-4">
                  Yes. We customize vocabulary, speaking practice, reading materials, and workplace communication according to your chosen field (Healthcare, IT, Hospitality, or Engineering).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-4" className="border border-border/60 rounded-xl px-4 bg-card">
                <AccordionTrigger className="text-left font-bold text-base hover:no-underline py-4 text-foreground">
                  Do you prepare students for German language exams?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm pb-4">
                  Yes. We provide comprehensive preparation for Goethe, TELC, TestDaF, and ÖSD examinations with regular mock tests and exam-focused practice.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-5" className="border border-border/60 rounded-xl px-4 bg-card">
                <AccordionTrigger className="text-left font-bold text-base hover:no-underline py-4 text-foreground">
                  Can I join online from anywhere?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm pb-4">
                  Absolutely. Our live online classes are available worldwide with flexible timings from 6:00 AM to 12:00 Midnight (Monday to Friday).
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
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">Ready to Begin Your Ausbildung Journey?</h2>
            <p className="text-secondary-foreground/80 text-base max-w-2xl mx-auto">
              Whether your goal is to work in Healthcare, IT, Engineering, Hospitality, Business, or Manufacturing, German Gyan will help you build the strong German language foundation needed for success.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto text-sm text-left text-white/90 font-medium py-6 border-t border-b border-white/10">
              <div>🎓 A1 to C2 Courses</div>
              <div>👨‍🎓 10,000+ Trained</div>
              <div>🏆 Excellent Exam Results</div>
              <div>🏫 Online & Offline</div>
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
