import CoursePage from "@/components/CoursePage";
import PageMeta from "@/components/PageMeta";

export default function OneToOne() {
  return (
    <>
      <PageMeta
        title="One-to-One German Sessions | Private German Tutor | German Gyan"
        description="Fully personalised one-to-one German sessions at your own pace and schedule. Private German tuition from A1 to C2 with instant feedback and a custom study plan."
        keywords="one to one German sessions, private German tutor India, personalised German learning, German private classes, individual German lessons"
      />
      <CoursePage
      image="\assets\nidhi-jain.webp"
      level="Personalised"
      title="One-to-One German Sessions"
      price=""
      tagline="Fully personalised German learning at your own pace, schedule, and focus. One student, one instructor, maximum impact."
      duration="Flexible"
      about={[
        "One-to-One German sessions are the most personalised learning format available at German Gyan. Everything — the pace, the focus areas, the schedule, and the teaching style — is built entirely around you.",
        "Whether you're a complete beginner, a professional with specific needs, or a student who simply learns better without a group, the 1-on-1 format delivers faster progress and deeper comprehension than any group setting.",
      ]}
      curriculum={[
        { title: "Personalised Curriculum", desc: "Your syllabus is built specifically for your goals and current level" },
        { title: "Focused Grammar Work", desc: "Target exactly the grammar topics you find difficult" },
        { title: "Flexible Scheduling", desc: "Book sessions at times that work for your schedule" },
        { title: "Speaking Practice", desc: "Every session has dedicated conversation time — no waiting for a group" },
        { title: "Professional German", desc: "Business vocabulary, workplace scenarios, and industry-specific language" },
        { title: "Exam Preparation", desc: "One-on-one Goethe exam coaching at any level" },
        { title: "Instant Feedback", desc: "Detailed, immediate correction and explanation in every session" },
        { title: "Progress at Your Own Pace", desc: "Move faster through easy topics, slower through difficult ones" },
      ]}
      inclusions={[
        "Fully private one-on-one sessions",
        "Personalised study plan and materials",
        "Flexible session scheduling",
        "Any level from A1 to C2",
        "Focus on your specific goals (exam, work, travel, etc.)",
        "Immediate, detailed feedback in every class",
        "WhatsApp support between sessions",
        "Regular progress assessments",
      ]}
      perfectFor={[
        "You prefer learning without the pressure of a group setting.",
        "You have a very specific focus — exam, business, pronunciation, or one skill area.",
        "You have an unusual or flexible schedule that doesn't fit regular batch timings.",
        "You want to progress faster than a standard group course allows.",
      ]}
      notFor={[
        "You enjoy peer interaction and group dynamics — our regular courses may suit you better.",
        "You're looking for the most cost-effective option — group courses offer better value.",
      ]}
      testimonials={[
        { quote: "I had a very specific need: professional German for my role at a German automotive company. The one-on-one sessions focused entirely on industry vocabulary and business communication. Exactly what I needed.", name: "Suresh Krishnan", role: "1-on-1 Student, automotive sector" },
        { quote: "I'm a slow learner in group settings. The one-on-one sessions at German Gyan let me go at my own pace and I cleared B1 in 5 months without the anxiety of keeping up with others.", name: "Deepika Nair", role: "1-on-1 Student, B1 level" },
      ]}
      ctaTitle="Start your personalised German journey today."
    />
    </>
  );
}
