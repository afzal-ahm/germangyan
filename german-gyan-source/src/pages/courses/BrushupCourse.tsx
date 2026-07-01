import CoursePage from "@/components/CoursePage";
import PageMeta from "@/components/PageMeta";

export default function BrushupCourse() {
  return (
    <>
      <PageMeta
        title="German Brushup Course | Refresh Your German | German Gyan"
        description="Refresh your German language skills, revise grammar, improve speaking fluency, and rebuild your confidence with our structured German Brushup Course."
        keywords="German brushup course, refresh German skills, revise German grammar, German speaking practice, German language refresher, German Gyan"
      />
      <CoursePage
        image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&q=80"
        level="Refresher"
        title="German Brushup Course"
        price=""
        tagline="Refresh your German language skills, revise grammar, improve speaking fluency, and rebuild your confidence."
        duration="4–6 Weeks"
        about={[
          "Already learned German but feeling out of practice? Our German Brushup Course is specially designed for learners who want to revise previously learned concepts, improve fluency, and regain confidence before continuing to the next level, appearing for the Goethe exam, or relocating to Germany.",
          "Whether you've taken a long break, completed A1/B1/B2 in the past, or simply want to strengthen your language skills, this course provides a structured revision of grammar, vocabulary, speaking, listening, reading, and writing. Our experienced trainers focus on identifying learning gaps and helping you communicate naturally and confidently in real-life situations.",
          "Through interactive sessions, practical exercises, role plays, and personalized feedback, you'll rebuild your language foundation and become comfortable using German in everyday conversations, professional settings, and academic environments."
        ]}
        curriculum={[
          {
            title: "Comprehensive Grammar Revision",
            desc: "Refresh important grammar concepts from previous levels, review sentence structure and word order, practice articles, cases (Nominative, Accusative, Dative & Genitive), revise verb conjugations, tenses, modal verbs, prepositions, adjective endings, and connectors."
          },
          {
            title: "Vocabulary Enhancement",
            desc: "Expand your everyday and professional vocabulary, learn commonly used expressions and phrases, improve topic-based vocabulary for travel, work, education, and daily life, practice contextual word usage, and strengthen retention through revision exercises."
          },
          {
            title: "Speaking & Conversation Practice",
            desc: "Participate in guided conversations, improve fluency and pronunciation, build confidence in spontaneous speaking, practice real-life scenarios and role plays, and develop communication skills for interviews, travel, and workplace conversations."
          },
          {
            title: "Listening Skills Development",
            desc: "Understand native German speakers more effectively, practice with real-life audio conversations, improve comprehension of different accents and speaking speeds, and learn effective listening strategies."
          },
          {
            title: "Reading Comprehension",
            desc: "Read articles, dialogues, and short stories, improve understanding of written German, learn to identify important information quickly, and expand vocabulary through reading practice."
          },
          {
            title: "Writing Improvement",
            desc: "Write emails, messages, and short essays, practice sentence construction, improve grammar accuracy while writing, and learn professional and everyday writing formats."
          },
          {
            title: "Pronunciation & Accent Training",
            desc: "Correct common pronunciation mistakes, practice difficult German sounds, improve clarity and confidence while speaking, and develop a more natural speaking style."
          },
          {
            title: "Goethe Exam Readiness",
            desc: "Revise important topics frequently tested in Goethe exams, solve practice exercises, attempt mock activities, receive instructor feedback for improvement, and build confidence before the examination."
          }
        ]}
        inclusions={[
          "Structured revision of previously learned topics",
          "Interactive live classes",
          "Small batch sizes for personalized attention",
          "Experienced and certified German trainers",
          "Practical speaking sessions",
          "Real-life conversation practice",
          "Regular assessments and feedback",
          "Practice worksheets and revision material",
          "Flexible online and offline learning options",
          "Certificate of Course Completion"
        ]}
        perfectFor={[
          "Students who have taken a break from learning German",
          "Learners preparing for Goethe examinations",
          "Professionals relocating to Germany",
          "Individuals planning higher-level German courses",
          "Students wanting to improve fluency before interviews or university admissions",
          "Anyone looking to refresh their existing German knowledge"
        ]}
        notFor={[
          "Complete beginners with no prior German knowledge — our regular A1 course is recommended instead.",
          "Learners who want a fast-track full level certification without prior study."
        ]}
        testimonials={[
          {
            quote: "I had done A2 three years ago and felt completely lost. German Gyan's brushup course brought me back up to speed in just 5 weeks. The grammar revision was incredibly useful.",
            name: "Amita Rao",
            role: "Brushup Student, rejoining B1 course"
          },
          {
            quote: "After two years, my German was getting rusty. The brushup classes kept my skills sharp and actually helped me reach B2 level with confidence.",
            name: "Karan Malhotra",
            role: "Brushup Student, B2 level"
          }
        ]}
        ctaTitle="Refresh your German with confidence — start now."
      />
    </>
  );
}
