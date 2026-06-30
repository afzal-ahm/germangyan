import CoursePage from "@/components/CoursePage";
import PageMeta from "@/components/PageMeta";

export default function ExamPreparation() {
  return (
    <>
      <PageMeta
        title="German Exam Preparation Sessions | Goethe, TELC, ÖSD & TestDaF | German Gyan"
        description="Prepare for Germany's most recognized German language exams. Expert coaching covering all 4 modules (Reading, Writing, Speaking, Listening) for Goethe-Zertifikat, TELC, ÖSD, and TestDaF."
        keywords="German exam preparation, Goethe Zertifikat prep, TELC German exam, ÖSD German, TestDaF preparation, German 4 modules training"
      />
      <CoursePage
        image="/assets/nidhi-jain.webp"
        level="Exam Focused"
        title="German Exam Preparation Sessions"
        price="Covers all 4 modules (Reading, Writing, Speaking, Listening)"
        tagline="Comprehensive exam preparation programs designed to help you confidently clear the world's most recognized German language proficiency examinations."
        duration="4–8 Weeks"
        about={[
          "At German Gyan, we offer comprehensive exam preparation programs designed to help students confidently clear the world's most recognized German language proficiency examinations. Whether you're applying for higher education, employment, permanent residency, or career opportunities in Germany, our expert trainers provide structured preparation to maximize your success.",
          "Our preparation program covers the complete exam format, time-management strategies, mock examinations, and personalized feedback to ensure you are fully prepared on exam day."
        ]}
        timeline={[
          {
            time: "GOETHE",
            title: "Goethe-Zertifikat",
            desc: "Internationally recognized examinations from A1 to C2. Focuses on Goethe-specific structures and scoring."
          },
          {
            time: "TELC",
            title: "TELC German",
            desc: "Master the TELC exams through focused preparation and complete familiarity with the official structure."
          },
          {
            time: "ÖSD",
            title: "ÖSD German",
            desc: "Accepted by universities, employers, and immigration authorities across Austria and Europe."
          },
          {
            time: "TESTDAF",
            title: "TestDaF",
            desc: "For students planning to study at German universities, focusing on academic German and university-level proficiency."
          }
        ]}
        curriculum={[
          {
            title: "📖 Reading (Lesen)",
            desc: "Develop the ability to understand texts quickly and accurately. Covers reading comprehension techniques, academic & everyday texts, vocabulary building, time management strategies, and practice with previous exam questions."
          },
          {
            title: "✍️ Writing (Schreiben)",
            desc: "Learn to write confidently and according to official examination standards. Covers formal & informal emails, essays and reports, structured writing techniques, grammar accuracy, and personalized instructor feedback."
          },
          {
            title: "🎤 Speaking (Sprechen)",
            desc: "Improve fluency, pronunciation, and confidence through interactive speaking sessions. Covers self-introduction, picture description, discussion practice, presentation techniques, and mock speaking interviews."
          },
          {
            title: "🎧 Listening (Hören)",
            desc: "Enhance your listening skills using authentic German audio resources. Covers conversations, announcements, interviews, academic lectures, note-taking techniques, and listening comprehension practice."
          }
        ]}
        inclusions={[
          "Complete understanding of official exam patterns",
          "Module-wise preparation for Reading, Writing, Speaking & Listening",
          "Grammar revision and advanced language structures",
          "Vocabulary enhancement",
          "Exam strategies and scoring techniques",
          "Time management during examinations",
          "Common mistakes and how to avoid them",
          "Real exam simulations",
          "Individual performance analysis",
          "Confidence-building sessions"
        ]}
        perfectFor={[
          "Students preparing for Goethe examinations",
          "Candidates appearing for TELC certification",
          "Learners planning to take the ÖSD examination",
          "Students preparing for TestDaF for university admission",
          "Professionals applying for jobs in Germany",
          "Individuals planning higher education or immigration",
          "Anyone looking to improve exam performance and achieve higher scores"
        ]}
        notFor={[
          "Complete beginners who have not studied the relevant CEFR level yet — we recommend completing the level course first.",
          "Learners looking for general conversational learning rather than exam-specific training."
        ]}
        testimonials={[
          {
            quote: "I failed my B1 Goethe on the first attempt elsewhere. Joined German Gyan's exam prep and passed second time with a B grade. The mock exams under real time conditions made all the difference.",
            name: "Tanvi Singh",
            role: "Cleared Goethe B1 on second attempt"
          },
          {
            quote: "My A2 exam was 5 weeks away and I felt completely unprepared for the writing component. The feedback from German Gyan's preparation course turned my worst skill into my highest-scoring section.",
            name: "Rohan Mehta",
            role: "Goethe A2 — top score in writing component"
          }
        ]}
        ctaTitle="Ready to Achieve Your Target Score? Start now."
      />
    </>
  );
}
