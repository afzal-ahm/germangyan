import CoursePage from "@/components/CoursePage";
import PageMeta from "@/components/PageMeta";

export default function C2Course() {
  return (
    <>
      <PageMeta
        title="C2 German Course | Mastery Level German | German Gyan"
        description="Achieve near-native mastery of German with German Gyan's C2 course. The highest proficiency level, ideal for translators, diplomats, and academic researchers."
        keywords="C2 German course, mastery German, German proficiency, Goethe C2, German mastery level, German language expert India"
      />
      <CoursePage
      image="\assets\nidhi-jain.webp"
      level="C2"
      title="C2 Level German Course"
      price="₹45,000"
      tagline="Achieve near-native mastery of German. The highest proficiency level — ideal for translators, diplomats, researchers, and the truly dedicated."
      certificate="Goethe-Zertifikat C2"
      duration="5 Months"
      about={[
        "C2 is not just a language level — it is a demonstration of mastery. At this level, you can express yourself spontaneously, very fluently, and precisely, differentiating finer shades of meaning even in the most complex situations.",
        "Our C2 programme is the most rigorous course we offer. It involves intensive literary analysis, advanced academic writing, media criticism, and high-speed conversation practice that challenges even near-native speakers.",
      ]}
      curriculum={[
        { title: "Literary & Cultural Analysis", desc: "Engage critically with German literature, film, and culture" },
        { title: "Legal, Academic & Medical Registers", desc: "Specialised German for high-stakes professional fields" },
        { title: "Creative & Advanced Academic Writing", desc: "Produce nuanced, original German texts with stylistic control" },
        { title: "Advanced Idioms & Colloquial Expressions", desc: "Sound genuinely natural, not just grammatically correct" },
        { title: "Spontaneous High-Speed Conversation", desc: "Understand and respond at native speaker pace" },
        { title: "Media Criticism & Commentary", desc: "Analyse German media, form and articulate opinions precisely" },
        { title: "Cross-Cultural Communication", desc: "Navigate cultural nuances in German-speaking environments" },
        { title: "Goethe C2 Exam Mastery", desc: "Comprehensive preparation for the highest CEFR certification" },
      ]}
      inclusions={[
        "Intensive classes 4/week (2 hours each)",
        "Curated authentic German texts and media",
        "Literary discussion seminars",
        "Full C2 mock exams (4 skills, timed)",
        "Personalised writing portfolio with feedback",
        "Advanced speech and pronunciation refinement",
        "Cultural immersion materials",
        "German Gyan certificate + Goethe C2 exam guidance",
      ]}
      perfectFor={[
        "You've completed C1 and want to achieve the pinnacle of German proficiency.",
        "You work as a translator, interpreter, or in a field requiring native-level German.",
        "You're pursuing a research degree at a German university.",
        "You're preparing for the Goethe C2 Großes Deutsches Sprachdiplom (GDS).",
      ]}
      notFor={[
        "You haven't completed C1 or equivalent training yet.",
        "You're looking for professional fluency — C1 will serve your needs.",
      ]}
      timeline={[
        { time: "Month 1–2", title: "Advanced Mastery", desc: "Literary analysis, complex writing, academic register" },
        { time: "Month 3", title: "Specialised German", desc: "Legal, medical, and cultural registers" },
        { time: "Month 4", title: "Media & Culture", desc: "Criticism, commentary, cross-cultural communication" },
        { time: "Month 5", title: "Exam Preparation", desc: "Full C2 GDS mock tests, timed writing and speaking" },
      ]}
      testimonials={[
        { quote: "Completing C2 at German Gyan is one of the most demanding academic experiences I've had outside a university classroom. The literary analysis sessions and timed essay practice were exactly what I needed.", name: "Arjun Krishnaswamy", role: "C2 Graduate, now working in Hamburg" },
        { quote: "The C1 course was excellent, but C2 operates on a completely different level. The feedback on my writing was extraordinarily detailed. I now write German texts professionally.", name: "Kavya Reddy", role: "C2 Graduate, German Literature Researcher" },
      ]}
      ctaTitle="Achieve German mastery at the highest level."
    />
    </>
  );
}
