import CoursePage from "@/components/CoursePage";
import PageMeta from "@/components/PageMeta";

export default function B2Course() {
  return (
    <>
      <PageMeta
        title="B2 German Course | Upper-Intermediate German | German Gyan"
        description="B2 is the gold standard for studying or working in Germany. Master complex communication, professional language, and prepare for Goethe B2 with German Gyan."
        keywords="B2 German course, upper intermediate German, Goethe B2 exam, German for study abroad, German visa language requirement, B2 German India"
      />
      <CoursePage
      image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80"
      level="B2"
      title="B2 Level German Course"
      price="₹28,000"
      tagline="B2 is the gold standard for studying or working in Germany. Master complex communication, professional language, and authentic German usage."
      certificate="Goethe-Zertifikat B2"
      duration="4 Months"
      about={[
        "B2 is the gold standard for studying or working in Germany. This intensive course polishes your language skills to a professional level, focusing on complex comprehension, nuanced expression, and authentic German usage.",
        "Achieve professional fluency. Master complex arguments, read authentic materials effortlessly, and fully prepare for university or career life in Germany. B2 opens the door to most German universities and professional roles.",
      ]}
      curriculum={[
        { title: "Advanced Grammar Structures", desc: "Master all tense forms, moods, and complex clause types" },
        { title: "Academic & Formal Writing", desc: "University-level written German — essays, reports, formal letters" },
        { title: "Complex Reading Comprehension", desc: "Authentic texts, newspapers, literature, and academic articles" },
        { title: "Debate & Discussion Skills", desc: "Argue fluently, persuasively, and with precision" },
        { title: "Professional Communication", desc: "Emails, reports, presentations, and workplace German" },
        { title: "German Idioms & Expressions", desc: "Sound natural and native, not translated" },
        { title: "Goethe B2 Exam Mastery", desc: "Full practice under timed exam conditions" },
        { title: "Career & University Application", desc: "Practical language for real goals in Germany" },
      ]}
      inclusions={[
        "Intensive weekly classes (3–4/week)",
        "Advanced study materials and authentic texts",
        "Mock Goethe B2 exams (all four components)",
        "Speaking practice sessions",
        "Writing feedback on every assignment",
        "Real-world case studies and simulations",
        "Job/university interview preparation",
        "Certificate of completion + Goethe exam guidance",
      ]}
      perfectFor={[
        "You have completed B1 and want to reach professional-level fluency.",
        "You are applying to a German university and need B2 admission.",
        "You want to work in Germany or in a German-speaking environment.",
        "You are preparing for the Goethe B2 exam.",
      ]}
      notFor={[
        "You haven't completed B1 yet — solidify your B1 foundation first.",
        "You only need conversational fluency without exam certification.",
      ]}
      timeline={[
        { time: "Month 1", title: "Complex Grammar", desc: "All cases, moods, advanced clause structures" },
        { time: "Month 2", title: "Academic Writing", desc: "University-level essays and formal communication" },
        { time: "Month 3", title: "Debate & Media", desc: "Authentic texts, discussions, and professional vocabulary" },
        { time: "Month 4", title: "Exam Readiness", desc: "Goethe B2 mock exams and performance review" },
      ]}
      testimonials={[
        { quote: "B2 was intense, but the structured curriculum made it achievable. I cleared Goethe B2 on my first attempt and was accepted into my German university. Best investment I made.", name: "Aryan Mehta", role: "B2 Graduate, now studying in Berlin" },
        { quote: "The writing feedback at this level is exceptional. My essays went from mediocre to genuinely good German. The speaking debate sessions were incredibly challenging — in the best way.", name: "Pooja Iyer", role: "B2 Student, IT Professional" },
      ]}
      nextCourse={{ label: "Explore C1 Course", href: "/courses/c1-level-german-course" }}
      ctaTitle="Achieve professional fluency at B2."
    />
    </>
  );
}
