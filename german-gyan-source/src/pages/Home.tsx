import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Users, BookOpen, Award, Star, ChevronLeft, ChevronRight, Phone } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import FAQSection from "@/components/FAQSection";

// Import Hero Photos
import banner1 from "@assets/banner 1.png";
import banner2 from "@assets/banner 2.png";
import banner3 from "@assets/banner 3.png";
import banner4 from "@assets/baner 4.png";

// Import Client/Partner Logos
import gujindiaLogo from "@assets/client logo/GujindiaLogo.png";
import skPng from "@assets/client logo/SK-PNG.avif";
import screenshot1 from "@assets/client logo/Screenshot 2026-07-01 at 13.22.56.png";
import screenshot2 from "@assets/client logo/Screenshot 2026-07-01 at 13.24.07.png";
import screenshot3 from "@assets/client logo/Screenshot 2026-07-01 at 13.25.01.png";
import screenshot4 from "@assets/client logo/Screenshot 2026-07-01 at 13.27.55.png";
import screenshot5 from "@assets/client logo/Screenshot 2026-07-01 at 13.28.41.png";
import screenshot6 from "@assets/client logo/Screenshot 2026-07-01 at 13.29.31.png";
import screenshot7 from "@assets/client logo/Screenshot 2026-07-01 at 13.34.51.png";
import whatsappImg from "@assets/client logo/WhatsApp Image 2026-07-01 at 12.34.05.jpeg";
import eurizone from "@assets/client logo/eurizone.png";
import fhmInternational from "@assets/client logo/fhm-international.svg";
import logo1 from "@assets/client logo/logo-1.png";
import logo from "@assets/client logo/logo.png";
import logo03 from "@assets/client logo/logo_03.png";
import magicBillion from "@assets/client logo/magic_billion.png";
import ethosLogo from "@assets/client logo/ETHOS-FINAL-LOGO2.webp";

const clientLogos = [
  gujindiaLogo,
  skPng,
  screenshot1,
  screenshot2,
  screenshot3,
  screenshot4,
  screenshot5,
  screenshot6,
  screenshot7,
  whatsappImg,
  eurizone,
  fhmInternational,
  logo1,
  logo,
  logo03,
  magicBillion,
  ethosLogo
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const carouselImages = [
  {
    url: banner1,
    title: "India's Premier German Language Institute",
    desc: "Achieve fluency and official certifications with expert trainers and structured learning."
  },
  {
    url: banner2,
    title: "Flexible Learning Formats",
    desc: "Learn German through interactive online classes 7 days a week, or offline at our Delhi & Noida centers."
  },
  {
    url: banner3,
    title: "Goethe Exam Success",
    desc: "100% focused preparation for Goethe, TELC, TestDaF & ÖSD exams with proven high pass rates."
  },
  {
    url: banner4,
    title: "Expert & Certified Trainers",
    desc: "Learn from passionate, certified trainers using practical and interactive teaching methods."
  }
];

const courses = [
  { level: "A1", title: "Beginner German", price: "₹17,000", href: "/courses/a1-level-german-course", desc: "Start from zero. Learn the alphabet, basic phrases, and foundational grammar." },
  { level: "A2", title: "Elementary German", price: "₹19,000", href: "/courses/a2-level-german-course", desc: "Hold simple conversations and navigate everyday German situations." },
  { level: "B1", title: "Intermediate German", price: "₹23,000", href: "/courses/b1-level-german-course", desc: "Express yourself on familiar topics and reach independent user status." },
  { level: "B2", title: "Upper-Intermediate", price: "₹28,000", href: "/courses/b2-level-german-course", desc: "Communicate fluently and understand complex texts with ease." },
  { level: "C1", title: "Advanced German", price: "₹35,000", href: "/courses/c1-level-german-course", desc: "Professional fluency for university, career, and high-level communication." },
  { level: "C2", title: "Mastery German", price: "₹45,000", href: "/courses/c2-level-german-course", desc: "Achieve near-native mastery — the highest CEFR level." },
  { level: "Ausbildung", title: "German for Ausbildung", price: "A1–B2 Prep", href: "/courses/german-for-ausbildung-in-germany", desc: "Specialized language training and travel support for vocational education in Germany." },
];

const specialCourses = [
  { title: "Brushup Course", desc: "Refresh previously learned concepts, improve fluency, and regain confidence.", href: "/courses/german-brushup-course" },
  { title: "Corporate Training", desc: "Custom German programmes for teams and organisations.", href: "/courses/corporate-training" },
  { title: "1-on-1 Sessions", desc: "Personalised learning at your own pace.", href: "/courses/one-to-one-german-sessions" },
  { title: "Exam Preparation", desc: "Coaching for Goethe-Zertifikat, TELC, TestDaF & ÖSD examinations.", href: "/courses/german-exam-preparation-sessions" },
  { title: "Speaking Practice", desc: "Build fluency through dedicated conversation sessions.", href: "/courses/german-speaking-practice-sessions" },
  { title: "School Programs", desc: "Board-aligned German coaching for Class 5 Onwards.", href: "/courses/school-german-programs" },
  { title: "German CV Writing", desc: "Professional Lebenslauf & Anschreiben preparation.", href: "/courses/german-cv-cover-letter-writing-service" },
  { title: "German Interview Prep", desc: "Mock interviews & negotiation coaching for India & Germany.", href: "/courses/german-job-interview-preparation-program" },
  { title: "Ausbildung Interview Prep", desc: "Mock interviews & technical German prep for Ausbildung in Germany.", href: "/courses/ausbildung-interview-preparation-program" },
];

const stats = [
  { value: "10k+", label: "Students Taught" },
  { value: "95%", label: "Exam Pass Rate", sublabel: "Excellent Results in Goethe, TELC, TestDaF & ÖSD Examinations" },
  { value: "A1–C2", label: "All CEFR Levels" },
  { value: "10+", label: "Years Experience" },
];

const whyChooseUs = [
  {
    emoji: "🇩🇪",
    title: "100% Dedicated to German Language Training",
    desc: "We specialize only in German, ensuring complete focus and expertise."
  },
  {
    emoji: "📚",
    title: "Learn Through 4 Teaching Modules",
    desc: "Choose the learning style that suits you: Hindi → German, English → German, Malayalam → German, or German → German."
  },
  {
    emoji: "💻",
    title: "Flexible Online Classes",
    desc: "Live classes available 7 days a week, from 6:00 AM to 12:00 Midnight, making learning convenient for students and working professionals."
  },
  {
    emoji: "🏫",
    title: "Interactive Offline Classes",
    desc: "Learn at our centers Monday to Friday, 10:00 AM – 6:00 PM, with personal attention in small batches."
  },
  {
    emoji: "🎯",
    title: "FREE Exam Preparation",
    desc: "Complete preparation for Goethe, TELC, TestDaF & ÖSD exams is included with every course."
  },
  {
    emoji: "👨‍🏫",
    title: "Experienced & Certified Trainers",
    desc: "Learn from passionate trainers with practical teaching methods."
  },
  {
    emoji: "👥",
    title: "Small Batch Size (4–8 Students)",
    desc: "Better interaction, personalized attention, and faster progress."
  },
  {
    emoji: "📝",
    title: "Regular Tests & Performance Tracking",
    desc: "Weekly assessments to monitor improvement."
  },
  {
    emoji: "📖",
    title: "Comprehensive Study Material",
    desc: "Notes, worksheets, vocabulary lists, grammar practice, and mock tests included."
  },
  {
    emoji: "🗣️",
    title: "Focus on Speaking & Pronunciation",
    desc: "Build confidence through conversation practice and pronunciation correction."
  },
  {
    emoji: "💬",
    title: "Lifetime Doubt Support",
    desc: "Get your questions answered even outside regular class hours."
  },
  {
    emoji: "🎥",
    title: "Recorded Sessions (Online)",
    desc: "Revise concepts anytime with access to recordings (where applicable)."
  },
  {
    emoji: "🌍",
    title: "Career & Germany Guidance",
    desc: "Guidance for higher studies, jobs, language certifications, and relocation to Germany."
  },
  {
    emoji: "🏆",
    title: "Excellent Exam Success Rate",
    desc: "Proven track record of helping students achieve outstanding results."
  },
  {
    emoji: "📱",
    title: "Digital Learning Support",
    desc: "Learn beyond the classroom through YouTube, social media, and additional online resources."
  },
  {
    emoji: "💼",
    title: "Affordable Fees with High-Quality Training",
    desc: "Premium learning experience at competitive pricing."
  },
  {
    emoji: "🤝",
    title: "Supportive Learning Environment",
    desc: "Friendly mentors who motivate and guide you throughout your German journey."
  },
  {
    emoji: "🚀",
    title: "From Beginner to Advanced (A1–B2)",
    desc: "Structured courses designed for steady and effective progress."
  },
  {
    emoji: "📍",
    title: "Online & Offline Learning Options",
    desc: "Study from anywhere or visit our classrooms at Preet Vihar and Greater Noida West."
  },
  {
    emoji: "⭐",
    title: "Trusted Since 2016",
    desc: "Years of experience helping thousands of learners achieve their German language goals."
  }
];

const testimonials = [
  {
    name: "Sreenesh Ep",
    role: "Verified Google Review",
    stars: 5,
    quote: "I really enjoyed learning German with German Gyan! The teacher explains everything slowly and clearly, and the classes are always fun. I improved a lot in speaking, listening, and forming sentences. I feel much more confident now. Thank you so much German Gyan! And a special thanks for our teacher FAZALU.",
    initials: "SE",
    avatarBg: "bg-blue-600/20 text-blue-400"
  },
  {
    name: "Yogita Yogita",
    role: "Verified Google Review",
    stars: 5,
    quote: "I had a great experience with German Gyan. The teaching style is clear, structured, and easy to follow, even for beginners. The trainers are supportive and focus on proper pronunciation, grammar, and real conversation skills, not just theory. Study material and practice sessions really help build confidence step by step. The environment is friendly, and doubts are always solved patiently. If someone is serious about learning German in a practical and effective way, German Gyan is a very good choice",
    initials: "YY",
    avatarBg: "bg-purple-600/20 text-purple-400"
  },
  {
    name: "Kanishka 14",
    role: "Verified Google Review",
    stars: 5,
    quote: "I had great experience teaching with German gyan and completed German with best speaking and writing methods. The teaching style is also very sorted. You can definitely go for it if you want to pursue German.",
    initials: "K",
    avatarBg: "bg-red-600/20 text-red-400"
  },
  {
    name: "Ajay Kumar",
    role: "Verified Google Review",
    stars: 5,
    quote: "I had a great experience learning German at German Gyan Institute. The teaching methods are clear and practical, especially for beginners. The instructors are very knowledgeable and patient, and they make grammar and vocabulary easy to understand. They also focus on speaking practice, which helped me build confidence quickly. The study materials and mock tests were very useful for exam preparation like A1, A2, and B1. The environment is friendly, the batches are flexible, and doubts are always cleared in class. If you're serious about learning German for study, job, or visa purposes, I highly recommend German Gyan Institute.",
    initials: "AK",
    avatarBg: "bg-emerald-600/20 text-emerald-400"
  },
  {
    name: "Amlesh Anand",
    role: "Verified Google Review",
    stars: 5,
    quote: "German Gyan Institute has truly exceeded my expectations in every way. The instructors are incredibly knowledgeable and passionate about teaching. Their dedication to student success is evident in every class. I was initially nervous about learning a new language, but the supportive environment at German Gyan made the process enjoyable and rewarding. Thanks to Ms. Nidhi Jain and Damini Murariya for making the class enjoyable. I highly recommend German Gyan to anyone looking to learn German. The quality of education and the supportive community are unmatched. Overall, German Gyan is an outstanding institute that truly cares about its students' success.",
    initials: "AA",
    avatarBg: "bg-amber-600/20 text-amber-400"
  },
  {
    name: "Girish",
    role: "Verified Google Review",
    stars: 5,
    quote: "The class was interactive, and I felt comfortable asking questions. I also liked the friendly and positive environment. It made learning more fun and less stressful. Overall, the lecture was very helpful for improving my German skills. Thank you for a great session!",
    initials: "G",
    avatarBg: "bg-pink-600/20 text-pink-400"
  },
  {
    name: "Shrestha Namdev",
    role: "Verified Google Review",
    stars: 5,
    quote: "I like this institution.I am doing B1 level course here. I liked the way of teaching very easy to understand and also friendly atmosphere. The course is also structured very well by the Nidhi Mam and Khushi Mam. It was not at all boring like other classes which had been before German Gyan Institute. I am glad that I joined this coaching got to know many things and also enjoyed. I would recommend others to join German Gyan as it's very much helpful. Vielen Dank!",
    initials: "SN",
    avatarBg: "bg-teal-600/20 text-teal-400"
  },
  {
    name: "Jayant Basetia",
    role: "Verified Google Review",
    stars: 5,
    quote: "It has been a wonderful experience learning German with German Gyan. The teachers are highly skilled, and their teaching methods are excellent. I completed my A1 and A2 levels here, and they prepared me thoroughly for my German exam",
    initials: "JB",
    avatarBg: "bg-indigo-600/20 text-indigo-400"
  },
  {
    name: "faizan parekh",
    role: "Verified Google Review",
    stars: 5,
    quote: "German A1 training was very good,very useful,elaborative and very much clear. Repeat explanation was done whenever asked for the same. Detailed Teaching. Mam's vocab as well as pronunciation is just perfect. Leant a lot. Thank you.",
    initials: "FP",
    avatarBg: "bg-orange-600/20 text-orange-400"
  },
  {
    name: "Hachina Begam",
    role: "Verified Google Review",
    stars: 5,
    quote: "Khushi mam was an excellent German A1 & A2 teacher. Her explanations of complex grammar rules and vocabulary are always clear and concise, which makes it easier for us. I appreciate how she incorporate interactive activities and discussions that keep us engaged and excited about learning. Her ability to adjust her teaching methods to accommodate different learning styles is impressive. It really helps everyone feel included.She create a welcoming environment where we feel comfortable asking questions and making mistakes. Her encouragement boosts our confidence. Thank you for being such an inspiring teacher! Highly recommended! 🙏",
    initials: "HB",
    avatarBg: "bg-cyan-600/20 text-cyan-400"
  },
  {
    name: "Aishwarya Nair",
    role: "C1 Graduate, now studying in Munich",
    stars: 5,
    quote: "The C1 course at German Gyan is genuinely challenging — which is exactly what I needed. Nidhi ma'am's feedback on my writing completely transformed my academic German.",
    initials: "AN",
    avatarBg: "bg-violet-600/20 text-violet-400"
  }
];

interface Testimonial {
  name: string;
  role: string;
  stars: number;
  quote: string;
  initials: string;
  avatarBg: string;
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 180;
  const isLong = testimonial.quote.length > maxLength;
  
  const displayText = isExpanded 
    ? testimonial.quote 
    : isLong 
      ? `${testimonial.quote.slice(0, maxLength)}...` 
      : testimonial.quote;

  return (
    <Card className="border-none shadow-md h-full bg-card hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
      {/* German Flag Strip at the Top of Card */}
      <div className="w-full h-[4px] flex absolute top-0 left-0 right-0">
        <div className="flex-1 bg-black" />
        <div className="flex-1 bg-[#E30613]" />
        <div className="flex-1 bg-[#FFED00]" />
      </div>
      
      <CardContent className="p-6 pt-8 flex flex-col h-full justify-between flex-1">
        <div>
          {/* Star Rating */}
          <div className="flex gap-1 mb-3">
            {Array.from({ length: testimonial.stars || 5 }).map((_, idx) => (
              <Star key={idx} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          
          <div className="text-muted-foreground text-sm leading-relaxed mb-6">
            "{displayText}"
            {isLong && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-primary font-bold hover:underline ml-1.5 focus:outline-none text-xs inline-block"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            )}
          </div>
        </div>
        
        {/* Student Info */}
        <div className="flex items-center gap-3 pt-4 border-t border-border/40 mt-auto">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 select-none ${testimonial.avatarBg}`}>
            {testimonial.initials}
          </div>
          <div>
            <div className="font-bold text-sm text-foreground">{testimonial.name}</div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mt-0.5">{testimonial.role}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play carousel every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

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
        <div className="w-full mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text and Actions */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="md:col-span-5 xl:col-span-4 text-left space-y-5 lg:space-y-6 xl:space-y-8"
            >
              <motion.div variants={fadeUp}>
                <span
                  className="inline-block px-5 py-2 rounded-full text-xs font-bold text-white uppercase tracking-wider"
                  style={{ backgroundColor: "#102c3d", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  Goethe Exam Preparation | German Gyan
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-4xl lg:text-[4rem] xl:text-[5rem] font-bold tracking-tight text-foreground leading-[1.1]"
              >
                Learn<br />
                <span className="block my-2 font-black">
                  G<span className="text-[#E30613]">e</span><span className="text-[#FFED00]">r</span>man
                </span>
                <span className="font-serif italic font-normal text-muted-foreground text-3xl lg:text-4xl xl:text-5xl block mt-3 lg:mt-4">
                  Online & Offline
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-sm lg:text-base xl:text-lg text-muted-foreground leading-relaxed max-w-xl"
              >
                From absolute beginner to advanced — personalised German classes online all over the world and offline classes in New Delhi. New batches start every week. Free demo available.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="rounded-full px-8 text-sm lg:text-md font-bold h-11 lg:h-12 xl:h-14 bg-[#FFC700] hover:bg-[#E6B200] text-black transition-colors border-none"
                  asChild
                >
                  <Link href="/contact">Book Free Demo</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 text-sm lg:text-md font-bold h-11 lg:h-12 xl:h-14 border-border hover:bg-muted transition-colors"
                  asChild
                >
                  <Link href="/courses">View Courses →</Link>
                </Button>
              </motion.div>

              {/* Hero Stats */}
              <motion.div
                variants={fadeUp}
                className="pt-5 lg:pt-6 xl:pt-8 border-t border-border/40 grid grid-cols-3 gap-4 xl:gap-6 max-w-md"
              >
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-primary">A1 to C2</div>
                  <div className="text-[9px] lg:text-[10px] uppercase tracking-wider text-muted-foreground font-bold mt-1">German Language Courses</div>
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-primary">10,000+</div>
                  <div className="text-[9px] lg:text-[10px] uppercase tracking-wider text-muted-foreground font-bold mt-1">Happy Learners</div>
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-primary">100%</div>
                  <div className="text-[9px] lg:text-[10px] uppercase tracking-wider text-muted-foreground font-bold mt-1">Dedicated</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Large Auto-playing Photo Carousel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-7 xl:col-span-8 flex justify-center items-center w-full"
            >
              <div className="relative w-full aspect-[3/2] max-w-full rounded-3xl overflow-hidden shadow-2xl border border-border/45 bg-muted/20 flex flex-col justify-end group">
                {/* Carousel Slides */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 z-0"
                  >
                    <img
                      src={carouselImages[currentSlide].url}
                      alt={carouselImages[currentSlide].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </motion.div>
                </AnimatePresence>

                {/* Caption Overlay */}
                <div className="relative z-10 p-4 md:p-8 text-white text-left space-y-1 md:space-y-2 pointer-events-none">
                  <motion.h3
                    key={`title-${currentSlide}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm sm:text-lg md:text-2xl font-bold text-[#FFC700]"
                  >
                    {carouselImages[currentSlide].title}
                  </motion.h3>
                  <motion.p
                    key={`desc-${currentSlide}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-[10px] sm:text-sm text-white/80 leading-relaxed"
                  >
                    {carouselImages[currentSlide].desc}
                  </motion.p>
                </div>

                {/* Dot Indicators */}
                <div className="absolute top-6 right-6 z-10 flex gap-2">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-[#FFC700] scale-125" : "bg-white/55 hover:bg-white"
                        }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Infinite Marquee / We Work With Section */}
      <section className="py-10 bg-[#f9fafb] border-y border-border/40 overflow-hidden relative">
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-infinite {
            display: flex;
            width: max-content;
            animation: marquee 35s linear infinite;
          }
          .animate-marquee-infinite:hover {
            animation-play-state: paused;
          }
        `}} />
        
        <div className="container mx-auto px-4 mb-6">
          <h3 className="text-center text-xs font-bold uppercase tracking-widest text-muted-foreground/80">
            We Work With
          </h3>
        </div>

        <div className="relative w-full overflow-hidden flex select-none">
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <div className="animate-marquee-infinite gap-6 flex">
            {clientLogos.map((logo, idx) => (
              <div key={`logo-1-${idx}`} className="bg-white p-3.5 px-6 rounded-xl border border-border/40 flex items-center justify-center min-w-[140px] md:min-w-[170px] h-16 md:h-20 shadow-sm shrink-0">
                <img
                  src={logo}
                  alt={`Partner Logo ${idx + 1}`}
                  className="max-w-full max-h-full object-contain filter grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
            {clientLogos.map((logo, idx) => (
              <div key={`logo-2-${idx}`} className="bg-white p-3.5 px-6 rounded-xl border border-border/40 flex items-center justify-center min-w-[140px] md:min-w-[170px] h-16 md:h-20 shadow-sm shrink-0">
                <img
                  src={logo}
                  alt={`Partner Logo Duplicate ${idx + 1}`}
                  className="max-w-full max-h-full object-contain filter grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
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
                {s.sublabel && (
                  <div className="text-[10px] sm:text-xs text-muted-foreground mt-1.5 max-w-[180px] mx-auto leading-normal">
                    {s.sublabel}
                  </div>
                )}
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
                        <span className={`font-bold font-serif text-primary ${course.level.length > 2 ? "text-xl sm:text-2xl" : "text-3xl"}`}>{course.level}</span>
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

      {/* German Flag Divider */}
      <div className="w-full h-[5px] flex">
        <div className="flex-1 bg-black" />
        <div className="flex-1 bg-[#E30613]" />
        <div className="flex-1 bg-[#FFED00]" />
      </div>

      {/* Why German Gyan */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Why Choose German Gyan?</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto font-medium">
              At German Gyan, we don't just teach German—we build confidence, communication skills, and exam success. 🇩🇪✨
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Card className="h-full border-border/50 hover:border-primary/50 hover:shadow-md transition-all duration-300 group bg-card/40 backdrop-blur-sm">
                  <CardContent className="p-6 flex gap-4">
                    <div className="text-3xl shrink-0 select-none">{item.emoji}</div>
                    <div className="space-y-1.5">
                      <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
            <h2 className="text-3xl md:text-5xl font-serif font-bold">What Our Students Say</h2>
            <p className="text-muted-foreground text-sm mt-2">Verified Google Reviews & Student Feedback</p>
          </motion.div>
          
          <div className="relative group px-4">
            {/* Left Arrow Button */}
            <button 
              onClick={() => {
                const container = document.getElementById("testimonials-carousel");
                if (container) {
                  const cardWidth = container.firstElementChild?.clientWidth || 300;
                  container.scrollBy({ left: -(cardWidth + 24), behavior: "smooth" });
                }
              }}
              className="absolute -left-2 md:-left-6 top-1/2 -translate-y-1/2 z-10 bg-background border border-border w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-muted hover:text-primary transition-all duration-200"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Scrollable Carousel Container */}
            <div 
              id="testimonials-carousel"
              className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 px-2 items-stretch"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {testimonials.map((t, i) => (
                <div 
                  key={i} 
                  className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start flex"
                >
                  <div className="w-full flex-1">
                    <TestimonialCard testimonial={t} />
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow Button */}
            <button 
              onClick={() => {
                const container = document.getElementById("testimonials-carousel");
                if (container) {
                  const cardWidth = container.firstElementChild?.clientWidth || 300;
                  container.scrollBy({ left: cardWidth + 24, behavior: "smooth" });
                }
              }}
              className="absolute -right-2 md:-right-6 top-1/2 -translate-y-1/2 z-10 bg-background border border-border w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-muted hover:text-primary transition-all duration-200"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <FAQSection page="home" />

      {/* German Flag Divider */}
      <div className="w-full h-[5px] flex">
        <div className="flex-1 bg-black" />
        <div className="flex-1 bg-[#E30613]" />
        <div className="flex-1 bg-[#FFED00]" />
      </div>

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
