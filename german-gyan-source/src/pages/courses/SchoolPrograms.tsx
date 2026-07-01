import CoursePage from "@/components/CoursePage";
import PageMeta from "@/components/PageMeta";

export default function SchoolPrograms() {
  return (
    <>
      <PageMeta
        title="School German Programs | CBSE ICSE German Coaching | German Gyan"
        description="Board-aligned German coaching for Class 5 Onwards students (CBSE/ICSE/State). Improve grades, build real fluency, and prepare for Class 10 and 12 board exams."
        keywords="school German programs India, CBSE German coaching, ICSE German classes, Class 10 German, Class 12 German board exam"
      />
      <CoursePage
      image="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop&q=80"
      level="School"
      title="School German Programs"
      price=""
      tagline="Board-aligned German coaching for Class 5 Onwards students. CBSE, ICSE, and State Board coverage with proper grammar and real speaking practice."
      duration="Academic Year / Semester"
      about={[
        "German is offered as a second language in CBSE, ICSE, and many state board schools across India. But most school students don't get the dedicated guidance they need to truly understand the language — and many graduate Class 12 with German on their marksheet but minimal ability to use it.",
        "At German Gyan, we take a different approach. Our school programmes teach German properly — with grammar explanations that stick, vocabulary that's learned in context, and speaking practice that builds real confidence. Students who go through our programme not only score better in school exams, but also develop a genuine interest in the language.",
      ]}
      curriculum={[
        { title: "CBSE/ICSE/State Board German Syllabus", desc: "Full alignment with your school's prescribed German curriculum" },
        { title: "Grammar Made Simple", desc: "Complex German grammar explained accessibly for school-age learners" },
        { title: "Vocabulary in Context", desc: "Learn and remember words through stories, situations, and usage" },
        { title: "Reading Comprehension", desc: "Practice passages aligned with board exam question patterns" },
        { title: "Writing Skills", desc: "Essays, letter writing, and short compositions in German" },
        { title: "Speaking & Conversation", desc: "Real German conversation practice beyond textbook dialogues" },
        { title: "Listening Practice", desc: "Train your ear for German through age-appropriate audio content" },
        { title: "Board Exam Preparation", desc: "Targeted preparation for Class 10 and Class 12 German papers" },
      ]}
      inclusions={[
        "Board-aligned syllabus coverage",
        "Age-appropriate teaching materials",
        "Regular chapter tests and assessments",
        "Board exam mock papers and practice",
        "Speaking practice sessions",
        "Homework support and doubt clearing",
        "Parent progress reports",
        "Certificate of participation",
      ]}
      perfectFor={[
        "Class 5 Onwards students with German as a second language.",
        "Students who find school German classes insufficient or poorly taught.",
        "Class 10 and Class 12 board exam candidates wanting to score 90+.",
        "Students interested in pursuing German at a higher level after Class 12.",
      ]}
      notFor={[
        "Students looking for university-level German — consider our A1–C2 courses.",
        "Students who want to learn German as a hobby without board exam requirements.",
      ]}
      testimonials={[
        { quote: "My daughter was struggling with Class 10 German. Three months at German Gyan and she scored 96/100 in her board exam. The grammar explanations were exactly what she needed.", name: "Sunita Mehta", role: "Parent of Class 10 student" },
        { quote: "I used to dread German class in school. German Gyan made it interesting and actually fun. I scored 94 in my Class 12 board and now I want to continue to B1.", name: "Ritika Singh", role: "Class 12 student, Delhi" },
      ]}
      ctaTitle="Give your child a head start in German."
    />
    </>
  );
}
