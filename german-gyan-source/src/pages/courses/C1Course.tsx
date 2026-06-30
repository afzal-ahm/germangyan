import CoursePage from "@/components/CoursePage";
import PageMeta from "@/components/PageMeta";

export default function C1Course() {
  return (
    <>
      <PageMeta
        title="C1 German Course | Advanced German | German Gyan"
        description="Achieve advanced fluency in German with our C1 course. Perfect for professionals, academics, and students targeting German universities or high-skilled jobs in Germany."
        keywords="C1 German course, advanced German, Goethe C1, German for professionals, German for university, C1 German exam India"
      />
      <CoursePage
      image="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=800&h=600&fit=crop&q=80"
      level="C1"
      title="C1 Level German Course"
      price="₹35,000"
      tagline="C1 is where German truly becomes a professional tool. Stop translating in your head and start thinking directly in German."
      certificate="Goethe-Zertifikat C1"
      duration="4 Months"
      about={[
        "C1 is where German truly becomes a professional tool. At this level, you stop translating in your head and start thinking directly in German — a milestone that opens doors to German universities, multinational companies, and long-term career opportunities in German-speaking countries.",
        "Our C1 programme is rigorous, text-heavy, and deeply focused on exam performance. You will work with authentic German texts, real media, structured essays, and intensive speaking practice that mirrors the Goethe C1 exam format exactly.",
      ]}
      curriculum={[
        { title: "Complex Grammar & Style", desc: "Infinitive clauses, participle phrases, and stylistic variation" },
        { title: "Academic & Professional Writing", desc: "Long-form essays, analytical texts, and professional correspondence" },
        { title: "Authentic Media Comprehension", desc: "German news, films, podcasts, and academic lectures" },
        { title: "Debate & Argumentation", desc: "Chair discussions, present ideas, and negotiate in German" },
        { title: "Formal Register Mastery", desc: "Switch seamlessly between registers for different contexts" },
        { title: "Cultural & Societal Topics", desc: "Engage with contemporary German issues and discourse" },
        { title: "Goethe C1 Exam Preparation", desc: "Full mock exams for all four skills under timed conditions" },
        { title: "Professional Communication", desc: "Workplace presentations, reports, and German corporate culture" },
      ]}
      inclusions={[
        "4 intensive classes per week (2 hours each)",
        "Advanced study materials and authentic texts",
        "Weekly writing assignments with detailed feedback",
        "Mock Goethe C1 exams (all four skills, timed)",
        "Live debate and discussion sessions",
        "Media comprehension exercises",
        "One-on-one speaking evaluations",
        "Course completion certificate + Goethe C1 guidance",
      ]}
      perfectFor={[
        "You've completed B2 and want to reach professional-level fluency.",
        "You're applying to German universities or professional programmes.",
        "You're preparing for the Goethe C1 exam.",
        "You work with German-speaking clients and need high-level communication.",
      ]}
      notFor={[
        "You haven't completed B2 or equivalent training yet.",
        "You're still working on fluency at conversational B2 level.",
      ]}
      timeline={[
        { time: "Month 1", title: "Grammar Mastery", desc: "Complex structures, infinitive clauses, participle phrases" },
        { time: "Month 2", title: "Academic Skills", desc: "Reading, writing, formal register and essay structure" },
        { time: "Month 3", title: "Media & Debate", desc: "Authentic listening, debate sessions, professional presentation" },
        { time: "Month 4", title: "Exam Preparation", desc: "Full C1 mock tests, timed writing, speaking evaluation" },
      ]}
      testimonials={[
        { quote: "The C1 course at German Gyan is genuinely challenging — which is exactly what I needed. Nidhi ma'am's feedback on my writing completely transformed my academic German before my university application.", name: "Aishwarya Nair", role: "C1 Graduate, now studying in Munich" },
        { quote: "I cleared my Goethe C1 on the first attempt with a B grade. The mock exams gave me real exam conditions and the speaking sessions helped me stop overthinking before answering.", name: "Siddharth Menon", role: "C1 Student, IT professional" },
      ]}
      nextCourse={{ label: "Explore C2 Course", href: "/courses/c2-level-german-course" }}
      ctaTitle="Ready to reach advanced German fluency?"
    />
    </>
  );
}
