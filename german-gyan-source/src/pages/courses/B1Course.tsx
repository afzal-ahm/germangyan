import CoursePage from "@/components/CoursePage";
import PageMeta from "@/components/PageMeta";

export default function B1Course() {
  return (
    <>
      <PageMeta
        title="B1 German Course | Intermediate German | German Gyan"
        description="Reach independent user status with German Gyan's B1 course. Express yourself on familiar topics, handle real-world situations, and prepare for Goethe B1 certification."
        keywords="B1 German course, intermediate German, Goethe B1 exam, TELC B1 India, German B1 certification, B1 German online"
      />
      <CoursePage
      image="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&h=600&fit=crop&q=80"
      level="B1"
      title="B1 Level German Course"
      price="₹23,000"
      tagline="Reach independent user status. Express yourself on familiar topics, handle most situations in German-speaking countries, and prepare for Goethe B1."
      certificate="Goethe-Zertifikat B1"
      duration="3 Months"
      about={[
        "The B1 level is a major milestone where you become an independent user of the language. This course focuses on expanding your vocabulary significantly and mastering the advanced grammatical structures necessary for professional and academic contexts.",
        "By the end of this course, you will be able to understand the main points of clear standard input on familiar matters and produce simple connected text on topics which are familiar or of personal interest. A major step toward professional and academic German.",
      ]}
      curriculum={[
        { title: "Konjunktiv II & Subjunctive Mood", desc: "Express wishes, hypotheticals, and polite requests accurately" },
        { title: "Passive Voice", desc: "Understand and produce passive constructions used in formal German" },
        { title: "Complex Sentence Structures", desc: "Subordinate clauses, connectors, and relative clauses" },
        { title: "Advanced Vocabulary", desc: "Work, media, politics, and environment topic sets" },
        { title: "Debate & Opinion Expression", desc: "Structure arguments, agree, disagree, and justify in German" },
        { title: "Academic Writing Basics", desc: "Write structured texts, essays, and formal communications" },
        { title: "Media Comprehension", desc: "Understand news, podcasts, and authentic German audio" },
        { title: "Goethe B1 Exam Mastery", desc: "All four skills under real exam conditions with feedback" },
      ]}
      inclusions={[
        "3x weekly classes (2 hours each)",
        "Advanced grammar workbook",
        "Authentic German media practice sets",
        "Weekly essay writing with detailed feedback",
        "Mock Goethe B1 exams (full paper, all skills)",
        "Speaking practice sessions",
        "Job/university interview vocabulary module",
        "Certificate of completion + Goethe exam guidance",
      ]}
      perfectFor={[
        "You have a solid A2 foundation and want to achieve conversational fluency.",
        "You are preparing for university studies or jobs in Germany.",
        "You want to express opinions and engage in debates in German.",
        "You need Goethe B1 for a residence permit or Blue Card application.",
      ]}
      notFor={[
        "You still struggle with basic past tenses and prepositions — review A2 first.",
        "You want a faster path — consider our crash course option instead.",
      ]}
      timeline={[
        { time: "Week 1–3", title: "Advanced Grammar", desc: "Konjunktiv II, passive voice, complex sentences" },
        { time: "Week 4–6", title: "Structured Writing", desc: "Essay structure, formal register, connectors" },
        { time: "Week 7–9", title: "Media & Debate", desc: "Authentic listening, discussion, opinion expression" },
        { time: "Week 10–12", title: "Exam Mastery", desc: "Goethe B1 intensive prep and mock tests" },
      ]}
      testimonials={[
        { quote: "B1 is where things get serious, but the structured approach here made it manageable. The essay writing feedback was particularly helpful for my Goethe exam preparation.", name: "Siddharth Menon", role: "B1 Student" },
        { quote: "Thanks to this course, I felt confident enough to do my university interview entirely in German. The focus on real-world professional vocabulary is a game changer.", name: "Neha Gupta", role: "B1 Student" },
      ]}
      nextCourse={{ label: "Explore B2 Course", href: "/courses/b2-level-german-course" }}
      ctaTitle="Ready to achieve B1 proficiency?"
    />
    </>
  );
}
