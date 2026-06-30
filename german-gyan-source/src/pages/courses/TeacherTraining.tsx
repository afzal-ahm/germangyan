import CoursePage from "@/components/CoursePage";
import PageMeta from "@/components/PageMeta";

export default function TeacherTraining() {
  return (
    <>
      <PageMeta
        title="German Teacher Training Program | German Gyan"
        description="Become a certified German language teacher with German Gyan's teacher training programme. Learn pedagogy, lesson planning, and effective teaching techniques for German."
        keywords="German teacher training, DaF certification India, German language teaching course, become German teacher, German pedagogy course"
      />
      <CoursePage
      image="\assets\nidhi-jain.webp"
      level="Professional Programme"
      title="German Teacher Training Program"
      price=""
      tagline="Turn your German language skills into a rewarding teaching career. Certification, methodology, and hands-on practice."
      certificate="Teacher Training Certificate"
      duration="3 Months"
      about={[
        "Turn your German language skills into a rewarding teaching career. This professional certification programme equips you with the methodology, practice, and credentials to teach German confidently — whether you want to teach independently, work with an institute, or support students in schools.",
        "The programme includes a 3-month internship letter valid in India and for visa purposes, making it a recognised credential for German language professionals.",
      ]}
      curriculum={[
        { title: "Teaching Methodology (DaF/DaZ)", desc: "Learn modern approaches to teaching German as a foreign language" },
        { title: "Lesson Planning & Curriculum Design", desc: "Build structured, engaging lesson plans from scratch" },
        { title: "Classroom Management Techniques", desc: "Handle mixed-level groups and maintain productive learning environments" },
        { title: "Grammar Explanation Methods", desc: "How to make complex grammar simple and memorable for students" },
        { title: "Assessment & Error Correction", desc: "Evaluate student progress and provide constructive feedback" },
        { title: "Teaching Materials & Resources", desc: "Create and curate effective teaching materials for all CEFR levels" },
        { title: "Pronunciation Coaching Techniques", desc: "Help students master German sounds through targeted exercises" },
        { title: "Mock Teaching Practice", desc: "Live practice sessions with real feedback from senior instructors" },
      ]}
      inclusions={[
        "Live expert-led training sessions",
        "3-month Internship Letter (valid in India and for visa purposes)",
        "Teacher Training Program Certification",
        "Access to German Gyan teaching resource library",
        "Mock teaching sessions with instructor feedback",
        "Post-training mentorship support",
        "Job placement assistance",
        "Curriculum and materials templates",
      ]}
      perfectFor={[
        "You have completed B2 or above and want to teach German professionally.",
        "You're looking for a recognised teaching credential for institute applications.",
        "You want to start your own German language tutoring practice.",
        "You're interested in teaching German at schools or language centres.",
      ]}
      notFor={[
        "You haven't completed at least B2 level — language proficiency is a prerequisite.",
        "You're looking for a German language course rather than a teaching programme.",
      ]}
      testimonials={[
        { quote: "The Teacher Training Program gave me everything I needed to start teaching independently. The mock teaching sessions were incredibly realistic and the feedback was detailed.", name: "Divya Sharma", role: "Now teaching German independently in Hyderabad" },
        { quote: "I completed B2 at German Gyan and immediately enrolled in the teacher training programme. Within two months of completing it, I had my first batch of A1 students.", name: "Rohan Bhatia", role: "German Language Teacher, Pune" },
      ]}
      ctaTitle="Become a certified German language teacher."
    />
    </>
  );
}
