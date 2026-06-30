import CoursePage from "@/components/CoursePage";
import PageMeta from "@/components/PageMeta";

export default function A1Course() {
  return (
    <>
      <PageMeta
        title="A1 Level German Course for Absolute Beginners | German Gyan"
        description="Start learning German from scratch with German Gyan's A1 course. Master pronunciation, basic grammar, and everyday vocabulary. Goethe A1 exam preparation included."
        keywords="A1 German course, beginner German classes, learn German from scratch, A1 German online, A1 German India, German for beginners"
      />
      <CoursePage
      image="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=600&fit=crop&q=80"
      level="A1"
      title="A1 Level German Course"
      price="₹17,000"
      tagline="Start your German journey from absolute zero. Build a solid foundation in pronunciation, grammar, and everyday communication."
      certificate="Goethe-Zertifikat A1"
      duration="3 Months"
      about={[
        "The A1 course is designed for complete beginners with no prior knowledge of German. You'll learn the German alphabet, master pronunciation, and build the foundation of grammar and vocabulary you need to hold your first conversations.",
        "By the end of this course, you'll be able to introduce yourself, discuss familiar topics, fill in simple forms, and understand basic German in everyday situations. It's the first step on the full A1–C2 pathway to German fluency.",
      ]}
      curriculum={[
        { title: "German Alphabet & Pronunciation", desc: "Master every sound, letter combination, and the rules of German phonetics" },
        { title: "First Conversations in German", desc: "Greetings, introductions, and basic social phrases for real situations" },
        { title: "Numbers, Dates & Time", desc: "Count, tell the time, state dates and ages fluently" },
        { title: "Basic Grammar Structures", desc: "Sentence construction, noun genders, articles, and verb conjugation" },
        { title: "Family & Personal Information", desc: "Talk about yourself, your family, and your background" },
        { title: "Everyday Vocabulary", desc: "Shopping, food, transport, home, and daily routine vocabulary" },
        { title: "Reading & Listening", desc: "Understand simple written and spoken German in familiar contexts" },
        { title: "A1 Exam Preparation", desc: "Full preparation for the Goethe-Zertifikat A1 examination" },
      ]}
      inclusions={[
        "3x weekly classes (1.5 hours each)",
        "Custom study materials and worksheets",
        "Vocabulary flashcard sets",
        "Weekly writing assignments",
        "Pronunciation drilling sessions",
        "Mock A1 exam with feedback",
        "WhatsApp doubt-clearing support",
        "Course completion certificate",
      ]}
      perfectFor={[
        "Complete beginners with no prior German knowledge.",
        "Students looking to study or work in Germany.",
        "Professionals who need A1 for a visa or job requirement.",
        "Anyone who has always wanted to learn German and doesn't know where to start.",
      ]}
      notFor={[
        "You already have some A1 knowledge — consider A2 instead.",
        "You are looking for a crash course — our crash course option may suit better.",
      ]}
      timeline={[
        { time: "Week 1–3", title: "Foundations", desc: "Alphabet, pronunciation, numbers, and greetings" },
        { time: "Week 4–6", title: "Grammar Basics", desc: "Articles, nouns, verbs, and simple sentences" },
        { time: "Week 7–9", title: "Conversations", desc: "Daily situations, family, shopping, and travel" },
        { time: "Week 10–12", title: "Exam Prep", desc: "Goethe A1 mock tests and full review" },
      ]}
      testimonials={[
        { quote: "I had zero German knowledge before joining. After 3 months at German Gyan, I cleared my Goethe A1 with a distinction. The pronunciation sessions were especially helpful.", name: "Priya Sharma", role: "A1 Student, Delhi" },
        { quote: "The way Nidhi ma'am explains German grammar by comparing it to Hindi sentence structures made everything click. I never expected to enjoy learning German this much.", name: "Rahul Verma", role: "A1 Student, Pune" },
      ]}
      nextCourse={{ label: "Explore A2 Course", href: "/courses/a2-level-german-course" }}
      ctaTitle="Begin your German journey at A1."
    />
    </>
  );
}
