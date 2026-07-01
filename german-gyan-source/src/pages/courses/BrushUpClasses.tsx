import CoursePage from "@/components/CoursePage";
import PageMeta from "@/components/PageMeta";

export default function BrushUpClasses() {
  return (
    <>
      <PageMeta
        title="German Brush-Up Classes | Refresh Your German | German Gyan"
        description="Revive and refresh your German with German Gyan's brush-up classes. Targeted sessions for learners who've studied German before but need to fill gaps or rebuild confidence."
        keywords="German brush up classes, refresh German skills, revive German, German refresher course India, German gap filling"
      />
      <CoursePage
      image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&q=80"
      level="Refresher"
      title="German Brush-Up Classes"
      price=""
      tagline="Revive and refresh your German. Targeted sessions to fill gaps, rebuild confidence, and get back on track."
      duration="Flexible — 4 to 8 weeks"
      about={[
        "German Brush-Up Classes are for learners who have studied German before but let it lapse, feel rusty, or find they have specific gaps. Rather than repeating an entire level from scratch, we identify exactly what you need and work on it.",
        "Whether you completed A2 three years ago and want to continue, or you finished B1 but feel shaky on grammar, the brush-up format is efficient, flexible, and highly personalised.",
      ]}
      curriculum={[
        { title: "Diagnostic Assessment", desc: "Identify your exact weak spots and knowledge gaps before classes begin" },
        { title: "Grammar Gap Filling", desc: "Target the specific areas where your knowledge is incomplete or rusty" },
        { title: "Vocabulary Revival", desc: "Reactivate dormant vocabulary through contextual practice" },
        { title: "Speaking Confidence Rebuilding", desc: "Structured conversation to remove hesitation and rebuild fluency" },
        { title: "Reading & Listening Refresh", desc: "Reconnect with authentic German materials at your level" },
        { title: "Writing Practice", desc: "Revive written German with guided exercises and feedback" },
        { title: "Pronunciation Polish", desc: "Fix pronunciation habits that have drifted over time" },
        { title: "Progress to Next Level", desc: "Prepare to continue your German journey at the appropriate CEFR level" },
      ]}
      inclusions={[
        "Pre-course diagnostic assessment",
        "Personalised study plan based on gaps",
        "Flexible class schedule (2–4x weekly)",
        "Custom materials targeting your weak areas",
        "Speaking practice sessions",
        "Writing feedback on assignments",
        "Guidance on the best next course to continue",
        "Certificate of participation",
      ]}
      perfectFor={[
        "You studied German before but haven't practised in months or years.",
        "You have specific grammar gaps you want to close before continuing.",
        "You want to regain confidence before joining a regular level course.",
        "You've moved back to India from Germany and want to maintain your skills.",
      ]}
      notFor={[
        "You've never studied German before — start with our A1 course.",
        "You need rapid exam preparation — our crash course or exam prep options are better suited.",
      ]}
      testimonials={[
        { quote: "I had done A2 three years ago and felt completely lost. German Gyan's brush-up programme brought me back up to speed in just 5 weeks. The diagnostic session at the start was incredibly useful.", name: "Amita Rao", role: "Brush-Up Student, rejoining B1 course" },
        { quote: "After two years in Germany, I came back to India and my German was getting rusty. The brush-up classes kept my skills sharp and actually helped me reach B2 level.", name: "Karan Malhotra", role: "Brush-Up Student, B2 level" },
      ]}
      ctaTitle="Refresh your German and get back on track."
    />
    </>
  );
}
