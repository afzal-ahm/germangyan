import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, "dist");

const baseHtml = readFileSync(join(distDir, "index.html"), "utf-8");

const pages = [
  {
    route: "/",
    title: "German Gyan | India's Premier German Language Institute",
    description: "Learn German from A1 to C2 with German Gyan — India's premier German language academy led by expert instructor Nidhi Jain. Online & offline classes, Goethe exam prep, and specialised programmes.",
    keywords: "German language course India, learn German online, Goethe exam preparation, A1 German course, German language institute, German Gyan, Nidhi Jain German teacher",
  },
  {
    route: "/about",
    title: "About German Gyan | Our Story & Mission",
    description: "Learn about German Gyan — founded by Nidhi Jain, an expert German language educator tailoring methods specifically for Indian learners. Our mission, story, and teaching philosophy.",
    keywords: "about German Gyan, Nidhi Jain German teacher, German language academy India, German institute story, German Gyan mission",
  },
  {
    route: "/courses",
    title: "All German Courses | German Gyan",
    description: "Explore all German courses at German Gyan — A1, A2, B1, B2, C1, C2 levels plus specialised programmes like crash courses, corporate training, one-to-one sessions and exam prep.",
    keywords: "German language courses India, A1 to C2 German, Goethe exam preparation, German crash course, corporate German training, German speaking practice",
  },
  {
    route: "/courses/a1-level-german-course",
    title: "A1 Level German Course for Absolute Beginners | German Gyan",
    description: "Start learning German from scratch with German Gyan's A1 course. Master pronunciation, basic grammar, and everyday vocabulary. Goethe A1 exam preparation included.",
    keywords: "A1 German course, beginner German classes, learn German from scratch, A1 German online, A1 German India, German for beginners",
  },
  {
    route: "/courses/a2-level-german-course",
    title: "A2 German Course | Elementary German | German Gyan",
    description: "Build on your A1 foundation with the A2 German course at German Gyan. Cover everyday conversations, simple grammar, and prepare for A2 certification exams.",
    keywords: "A2 German course, elementary German, A2 certification India, German language A2, A2 Goethe exam prep",
  },
  {
    route: "/courses/b1-level-german-course",
    title: "B1 German Course | Intermediate German | German Gyan",
    description: "Reach independent user status with German Gyan's B1 course. Express yourself on familiar topics, handle real-world situations, and prepare for Goethe B1 certification.",
    keywords: "B1 German course, intermediate German, Goethe B1 exam, TELC B1 India, German B1 certification, B1 German online",
  },
  {
    route: "/courses/b2-level-german-course",
    title: "B2 German Course | Upper-Intermediate German | German Gyan",
    description: "B2 is the gold standard for studying or working in Germany. Master complex communication, professional language, and prepare for Goethe B2 with German Gyan.",
    keywords: "B2 German course, upper intermediate German, Goethe B2 exam, German for study abroad, German visa language requirement, B2 German India",
  },
  {
    route: "/courses/c1-level-german-course",
    title: "C1 German Course | Advanced German | German Gyan",
    description: "Achieve advanced fluency in German with our C1 course. Perfect for professionals, academics, and students targeting German universities or high-skilled jobs in Germany.",
    keywords: "C1 German course, advanced German, Goethe C1, German for professionals, German for university, C1 German exam India",
  },
  {
    route: "/courses/c2-level-german-course",
    title: "C2 German Course | Mastery Level German | German Gyan",
    description: "Achieve near-native mastery of German with German Gyan's C2 course. The highest proficiency level, ideal for translators, diplomats, and academic researchers.",
    keywords: "C2 German course, mastery German, German proficiency, Goethe C2, German mastery level, German language expert India",
  },
  {
    route: "/courses/german-brushup-course",
    title: "German Brushup Course | Refresh Your German | German Gyan",
    description: "Refresh your German language skills, revise grammar, improve speaking fluency, and rebuild your confidence with our structured German Brushup Course.",
    keywords: "German brushup course, refresh German skills, revise German grammar, German speaking practice, German language refresher, German Gyan",
  },
  {
    route: "/courses/german-brush-up-classes",
    title: "German Brush-Up Classes | Refresh Your German | German Gyan",
    description: "Revive and refresh your German with German Gyan's brush-up classes. Targeted sessions for learners who've studied German before but need to fill gaps or rebuild confidence.",
    keywords: "German brush up classes, refresh German skills, revive German, German refresher course India, German gap filling",
  },
  {
    route: "/courses/one-to-one-german-sessions",
    title: "One-to-One German Sessions | Private German Tutor | German Gyan",
    description: "Fully personalised one-to-one German sessions at your own pace and schedule. Private German tuition from A1 to C2 with instant feedback and a custom study plan.",
    keywords: "one to one German sessions, private German tutor India, personalised German learning, German private classes, individual German lessons",
  },
  {
    route: "/courses/corporate-training",
    title: "Corporate German Language Training | German Gyan",
    description: "Custom German language programmes for teams and organisations. Business German, relocation training, and on-site or online delivery across India.",
    keywords: "corporate German training, German for business, German language for companies India, workplace German course, German B2B training",
  },
  {
    route: "/courses/school-german-programs",
    title: "School German Programs | CBSE ICSE German Coaching | German Gyan",
    description: "Board-aligned German coaching for Class 6–12 students (CBSE/ICSE/State). Improve grades, build real fluency, and prepare for Class 10 and 12 board exams.",
    keywords: "school German programs India, CBSE German coaching, ICSE German classes, Class 10 German, Class 12 German board exam",
  },
  {
    route: "/courses/german-speaking-practice-sessions",
    title: "German Speaking Practice Sessions | German Gyan",
    description: "Build confidence in spoken German with German Gyan's dedicated speaking practice sessions. Conversation-focused classes for all levels with real-life scenarios and pronunciation feedback.",
    keywords: "German speaking practice, German conversation classes India, spoken German fluency, German pronunciation, Goethe speaking exam prep",
  },
  {
    route: "/courses/german-exam-preparation-sessions",
    title: "German Exam Preparation | Goethe Zertifikat Coaching | German Gyan",
    description: "Crack your Goethe-Zertifikat or TELC German exam with targeted preparation at German Gyan. Mock tests, exam strategies, and expert coaching for all CEFR levels.",
    keywords: "Goethe exam preparation India, German certification coaching, TELC German exam, Goethe Zertifikat prep, German exam mock test",
  },
  {
    route: "/courses/german-teacher-training-program",
    title: "German Teacher Training Program | German Gyan",
    description: "Become a certified German language teacher with German Gyan's teacher training programme. Learn pedagogy, lesson planning, and effective teaching techniques for German.",
    keywords: "German teacher training, DaF certification India, German language teaching course, become German teacher, German pedagogy course",
  },
  {
    route: "/instructor",
    title: "Nidhi Jain — German Language Instructor | German Gyan",
    description: "Meet Nidhi Jain, founder and lead instructor at German Gyan. Expert German language educator with years of experience tailoring methods specifically for Indian learners.",
    keywords: "Nidhi Jain German teacher, German language instructor India, German Gyan founder, expert German educator",
  },
  {
    route: "/contact",
    title: "Contact German Gyan | Book a Free Demo Class Online & Offline",
    description: "Get in touch with German Gyan — call or WhatsApp +91-96434-30783, email hello@germangyan.in, or fill in our inquiry form to book a free demo class.",
    keywords: "contact German Gyan, German course enquiry, German class fees, book German demo class, German Gyan WhatsApp, German language admission",
  },
  {
    route: "/gallery",
    title: "Our Gallery | German Gyan",
    description: "Browse photos of our German classes, student celebrations, and video lessons. Get a glimpse of the learning experience at German Gyan.",
    keywords: "German Gyan gallery, German classes photos, study German videos, German language institute classroom, Goethe celebrations",
  },
];

function injectMeta(html, { title, description, keywords, route }) {
  const canonicalUrl = `https://germangyan.com${route}`;
  return html
    .replace(
      /<title>.*?<\/title>/,
      `<title>${title}</title>`
    )
    .replace(
      /<meta name="description" content=".*?"\s*\/>/,
      `<meta name="description" content="${description}" />`
    )
    .replace(
      /<meta name="keywords" content=".*?"\s*\/>/,
      `<meta name="keywords" content="${keywords}" />`
    )
    .replace(
      /<meta property="og:title" content=".*?"\s*\/>/,
      `<meta property="og:title" content="${title}" />`
    )
    .replace(
      /<meta property="og:description" content=".*?"\s*\/>/,
      `<meta property="og:description" content="${description}" />`
    )
    .replace(
      /<meta name="twitter:title" content=".*?"\s*\/>/,
      `<meta name="twitter:title" content="${title}" />`
    )
    .replace(
      /<meta name="twitter:description" content=".*?"\s*\/>/,
      `<meta name="twitter:description" content="${description}" />`
    )
    .replace(
      /<\/head>/,
      `  <link rel="canonical" href="${canonicalUrl}" />\n  </head>`
    );
}

let count = 0;
for (const page of pages) {
  const html = injectMeta(baseHtml, page);
  if (page.route === "/") {
    writeFileSync(join(distDir, "index.html"), html, "utf-8");
  } else {
    const dir = join(distDir, page.route);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, "index.html"), html, "utf-8");
  }
  count++;
  console.log(`✓ ${page.route}`);
}

console.log(`\nDone! Generated ${count} static HTML pages with unique meta tags.`);
