import CoursePage from "@/components/CoursePage";
import PageMeta from "@/components/PageMeta";

export default function CrashCourses() {
  return (
    <>
      <PageMeta
        title="German Crash Courses | Fast-Track German | German Gyan"
        description="Intensive German crash courses for rapid progress. Ideal for urgent Goethe exam deadlines, visa requirements, or fast-track learning goals. Available for all CEFR levels."
        keywords="German crash course India, intensive German course, fast track German, urgent Goethe exam prep, German language short course"
      />
      <CoursePage
      image="\assets\nidhi-jain.webp"
      level="Intensive"
      title="German Crash Courses"
      price=""
      tagline="Fast-track your German in weeks, not months. Intensive daily sessions for learners with urgent deadlines."
      duration="4–6 Weeks"
      about={[
        "German Crash Courses are designed for learners who need to make rapid progress in a short time. These intensive programmes compress a full level's content into 4–6 weeks of daily or near-daily sessions.",
        "Whether you have an upcoming Goethe exam, a visa deadline, a job interview, or simply want to progress fast, the crash course format delivers results under time pressure.",
      ]}
      curriculum={[
        { title: "Intensive Grammar Drilling", desc: "Cover an entire level's grammar in concentrated daily sessions" },
        { title: "Vocabulary Blitz", desc: "High-frequency vocabulary acquisition through spaced repetition" },
        { title: "Speaking from Day One", desc: "No silent period — conversation practice begins immediately" },
        { title: "Reading & Listening Sprint", desc: "Rapid comprehension building with authentic German materials" },
        { title: "Writing Essentials", desc: "Fast-track writing skills for exam and practical use" },
        { title: "Grammar Problem Areas", desc: "Identify and fix your specific weak spots quickly" },
        { title: "Daily Progress Review", desc: "Track and reinforce what you've learned each day" },
        { title: "Exam Strategy Sessions", desc: "Time management, question technique, and exam mindset" },
      ]}
      inclusions={[
        "Daily intensive sessions (2–3 hours/day)",
        "Crash course study pack",
        "Daily vocabulary and grammar exercises",
        "Speaking practice in every session",
        "Mini progress tests every week",
        "Writing feedback on key assignments",
        "WhatsApp support between sessions",
        "Crash course completion certificate",
      ]}
      perfectFor={[
        "You have a Goethe exam date within 4–6 weeks.",
        "You have an urgent visa or work permit language requirement.",
        "You want to reach a functional level quickly before relocating to Germany.",
        "You learn best through immersive, high-intensity study.",
      ]}
      notFor={[
        "You prefer a relaxed, low-pressure learning pace — our regular courses suit you better.",
        "You have no prior German knowledge and want to reach B2+ — a crash course is not a substitute for structured long-term learning.",
      ]}
      testimonials={[
        { quote: "I had 5 weeks before my Goethe A2 exam and was completely unprepared. The crash course was intensive but exactly what I needed. Passed with a good grade.", name: "Harsh Sharma", role: "Crash Course Student, cleared Goethe A2" },
        { quote: "The daily sessions were demanding but the progress I made in 4 weeks was incredible. I felt like I had learned more than in 3 months at my previous institute.", name: "Priyanka Joshi", role: "Crash Course Student" },
      ]}
      ctaTitle="Fast-track your German — start now."
    />
    </>
  );
}
