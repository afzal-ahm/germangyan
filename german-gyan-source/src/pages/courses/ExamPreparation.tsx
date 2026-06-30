import CoursePage from "@/components/CoursePage";
import PageMeta from "@/components/PageMeta";

export default function ExamPreparation() {
  return (
    <>
      <PageMeta
        title="German Exam Preparation | Goethe Zertifikat Coaching | German Gyan"
        description="Crack your Goethe-Zertifikat or TELC German exam with targeted preparation at German Gyan. Mock tests, exam strategies, and expert coaching for all CEFR levels."
        keywords="Goethe exam preparation India, German certification coaching, TELC German exam, Goethe Zertifikat prep, German exam mock test"
      />
      <CoursePage
      image="\assets\nidhi-jain.webp"
      level="Exam Focused"
      title="German Exam Preparation Sessions"
      price="Includes 4 Full Papers"
      tagline="Targeted Goethe-Zertifikat preparation with mock tests, exam strategies, and component-specific coaching for all levels."
      duration="4–8 Weeks"
      about={[
        "The Goethe-Zertifikat is the gold standard German language certificate — recognised by universities, visa authorities, and employers worldwide. But passing it requires more than language skill. It requires exam technique: knowing how to read questions efficiently, how to structure written answers to match the marking rubric, and how to stay composed in the speaking component.",
        "Our exam preparation sessions are designed as a distinct, intensive programme separate from our regular courses. If you've already completed a CEFR level course (here or elsewhere), this is the targeted preparation that converts your language knowledge into exam performance.",
      ]}
      curriculum={[
        { title: "Goethe Exam Format Deep Dive", desc: "Understand every section, scoring rubric, and time allocation in detail" },
        { title: "Reading Comprehension Strategies", desc: "Efficient techniques to extract meaning quickly under exam pressure" },
        { title: "Listening Comprehension Practice", desc: "Authentic Goethe-style audio with targeted comprehension training" },
        { title: "Writing Component Mastery", desc: "Model answers, marking criteria, and timed writing practice per level" },
        { title: "Speaking Exam Simulation", desc: "Real exam-condition speaking practice with structured feedback" },
        { title: "Grammar Under Exam Conditions", desc: "High-frequency grammar points tested in Goethe exams by level" },
        { title: "Full Mock Exams (Timed)", desc: "Complete past-paper simulations under real exam time constraints" },
        { title: "Error Pattern Analysis", desc: "Track your most common mistakes and eliminate them before exam day" },
      ]}
      inclusions={[
        "Goethe exam prep for any level (A1 through C2)",
        "Past paper packs for all four skills",
        "3–4 full timed mock exams per course",
        "Individual performance reports after each mock",
        "Speaking simulation sessions with instructor feedback",
        "Writing samples graded to Goethe rubric standards",
        "Exam strategy sessions (time management, question approach)",
        "Post-exam consultation and next-level guidance",
      ]}
      perfectFor={[
        "You have a Goethe exam date within the next 4–8 weeks.",
        "You've completed a CEFR level course but feel unprepared for the actual exam.",
        "You failed a previous attempt and want a more structured retry strategy.",
        "You need the certification urgently for a visa, university, or job application.",
        "You want specific coaching on your weakest exam component.",
      ]}
      notFor={[
        "You haven't studied German at the relevant level yet — complete the level course first.",
        "You're looking for general language learning rather than exam-specific preparation.",
      ]}
      testimonials={[
        { quote: "I failed my B1 Goethe on the first attempt at a different institute's prep programme. Joined German Gyan's exam prep and passed second time with a B grade. The mock exams under real time conditions made all the difference — I knew exactly what to expect.", name: "Tanvi Singh", role: "Cleared Goethe B1 on second attempt" },
        { quote: "My A2 exam was 5 weeks away and I felt completely unprepared for the writing component. The session-by-session feedback from German Gyan's preparation course turned my worst skill into my highest-scoring section on exam day.", name: "Rohan Mehta", role: "Goethe A2 — top score in writing component" },
      ]}
      ctaTitle="Your Goethe exam. Passed. First time."
    />
    </>
  );
}
