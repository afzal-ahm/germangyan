import CoursePage from "@/components/CoursePage";
import PageMeta from "@/components/PageMeta";

export default function SpeakingPractice() {
  return (
    <>
      <PageMeta
        title="German Speaking Practice Sessions | German Gyan"
        description="Build confidence in spoken German with German Gyan's dedicated speaking practice sessions. Conversation-focused classes for all levels with real-life scenarios and pronunciation feedback."
        keywords="German speaking practice, German conversation classes India, spoken German fluency, German pronunciation, Goethe speaking exam prep"
      />
      <CoursePage
      image="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=600&fit=crop&q=80"
      level="Speaking Focus"
      title="German Speaking Practice Sessions"
      price=""
      tagline="Build real spoken fluency through structured, guided conversation practice. For learners at A2 level and above."
      duration="Ongoing — monthly batches"
      about={[
        "Many German learners face the same paradox: they understand grammar rules, they've done vocabulary drills, they can read and write fairly well — but the moment they try to speak, everything freezes. Speaking Practice Sessions solve exactly that problem.",
        "These sessions are not a course — they are a dedicated speaking gym where you build oral fluency through consistent, guided practice without the stress of a high-stakes formal class. Think of it as a German speaking gym, where you build fluency through consistent, guided practice.",
      ]}
      curriculum={[
        { title: "Structured Conversation Topics", desc: "Weekly themes covering everyday, academic, and professional scenarios" },
        { title: "Pronunciation Correction & Drilling", desc: "Targeted work on sounds, stress, rhythm, and intonation" },
        { title: "Spontaneous Speech Practice", desc: "Respond to prompts without preparation time to build natural fluency" },
        { title: "Role-Play Scenarios", desc: "Job interviews, formal meetings, social conversations, service encounters" },
        { title: "Debate & Opinion Expression", desc: "Articulate and defend positions on current topics in German" },
        { title: "Story Retelling & Narration", desc: "Build coherence, sequencing, and vocabulary through narration exercises" },
        { title: "Error Analysis & Feedback", desc: "Detailed post-session breakdown of recurring grammar and pronunciation errors" },
        { title: "Vocabulary in Context", desc: "Learn and immediately use new words through speaking, not memorisation" },
      ]}
      inclusions={[
        "2–3 sessions per week (1.5 hours each)",
        "Structured weekly speaking topics",
        "Pronunciation drilling and correction",
        "Role-play and scenario practice",
        "Post-session detailed feedback report",
        "Vocabulary building through speaking",
        "Small group or one-on-one format",
        "Access to speaking resource library",
      ]}
      perfectFor={[
        "You've completed A2 or above but struggle to speak fluently.",
        "You freeze or hesitate when speaking German in real situations.",
        "You have an upcoming Goethe exam with a speaking component.",
        "You want to hold conversations with German colleagues or friends.",
        "You'd like to work on accent and pronunciation specifically.",
      ]}
      notFor={[
        "Complete beginners — you need at least A1/A2 grammar before speaking practice.",
        "Learners looking for a full grammar course — this is speaking-only.",
      ]}
      testimonials={[
        { quote: "I had completed B1 at another institute but couldn't hold a real conversation. Three months of speaking practice at German Gyan completely changed that. I can now chat naturally with my German colleagues without dreading it.", name: "Meera Patel", role: "Speaking Practice student, works in a German MNC" },
        { quote: "The role-play sessions specifically targeting Goethe B2 speaking components were exactly what I needed. My speaking score went from a C to an A in one attempt. The feedback was detailed and actionable every single time.", name: "Ankit Joshi", role: "Cleared Goethe B2 speaking with distinction" },
      ]}
      ctaTitle="Start speaking German with confidence."
    />
    </>
  );
}
