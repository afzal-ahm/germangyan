import CoursePage from "@/components/CoursePage";
import PageMeta from "@/components/PageMeta";

export default function A2Course() {
  return (
    <>
      <PageMeta
        title="A2 German Course | Elementary German | German Gyan"
        description="Build on your A1 foundation with the A2 German course at German Gyan. Cover everyday conversations, simple grammar, and prepare for A2 certification exams."
        keywords="A2 German course, elementary German, A2 certification India, German language A2, A2 Goethe exam prep"
      />
      <CoursePage
      image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop&q=80"
      level="A2"
      title="A2 Level German Course"
      price="₹19,000"
      tagline="Build on your A1 foundation. Hold everyday conversations, talk about the past, and navigate life in German-speaking environments."
      certificate="Goethe-Zertifikat A2"
      duration="3 Months"
      about={[
        "The A2 course expands on your A1 foundation to help you communicate in a wider range of everyday situations. You'll learn to talk about the past, give directions, discuss plans, and handle common transactions in German.",
        "By the end of this course, you'll be able to understand frequently used expressions related to areas of most immediate relevance — personal and family information, shopping, local geography, and employment.",
      ]}
      curriculum={[
        { title: "Past Tense (Perfekt & Präteritum)", desc: "Talk about past events, tell stories, and describe experiences" },
        { title: "Dative & Accusative Cases", desc: "Master the four German cases with practical exercises" },
        { title: "Directions & Transport", desc: "Navigate cities, ask for and give directions fluently" },
        { title: "Daily Routines & Habits", desc: "Describe your day, your work, and your lifestyle" },
        { title: "Modal Verbs", desc: "Express ability, permission, obligation, and desire" },
        { title: "Shopping & Services", desc: "Handle transactions, make complaints, and ask for help" },
        { title: "Health & Body", desc: "Discuss health, illnesses, and medical situations" },
        { title: "A2 Exam Preparation", desc: "Full Goethe A2 mock exams and component coaching" },
      ]}
      inclusions={[
        "3x weekly classes (1.5 hours each)",
        "A2-level study materials and exercises",
        "Past tense drilling and grammar workbook",
        "Mock Goethe A2 exam with feedback",
        "Listening comprehension practice sets",
        "Writing feedback on assignments",
        "WhatsApp support between classes",
        "Certificate of course completion",
      ]}
      perfectFor={[
        "You've completed A1 and want to continue progressing.",
        "You need A2 certification for a visa or work permit.",
        "You want to communicate better during Germany travel.",
        "You're preparing for higher-level studies in Germany.",
      ]}
      notFor={[
        "You haven't completed A1 yet — start with our A1 course.",
        "You're already comfortable at A2 — consider jumping to B1.",
      ]}
      timeline={[
        { time: "Week 1–3", title: "Past Tense", desc: "Perfekt, Präteritum, and time expressions" },
        { time: "Week 4–6", title: "Cases & Cases", desc: "Dative, accusative, and prepositions" },
        { time: "Week 7–9", title: "Daily Life", desc: "Routines, health, shopping, and services" },
        { time: "Week 10–12", title: "Exam Ready", desc: "Goethe A2 mock exams and review" },
      ]}
      testimonials={[
        { quote: "After A1, I wasn't sure whether to continue. The A2 course at German Gyan made me fall in love with the language. The speaking sessions were particularly fun and useful.", name: "Sneha Kapoor", role: "A2 Student, Mumbai" },
        { quote: "I needed A2 for my Germany work visa. Cleared the Goethe A2 on first attempt thanks to the focused exam prep sessions. Couldn't have done it without this course.", name: "Vikram Nair", role: "A2 Graduate, Bangalore" },
      ]}
      nextCourse={{ label: "Explore B1 Course", href: "/courses/b1-level-german-course" }}
      ctaTitle="Build on your foundations at A2."
    />
    </>
  );
}
