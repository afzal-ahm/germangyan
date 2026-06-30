import React, { useState } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { HelpCircle, ChevronRight } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: React.ReactNode;
  category: "general" | "academics" | "exams";
}

const allFAQs: FAQItem[] = [
  {
    id: 1,
    question: "What courses does German Gyan offer?",
    answer: (
      <p>
        German Gyan offers German language courses from A1 to C2 following the Common European Framework of Reference (CEFR). Every course is designed to build strong grammar, vocabulary, pronunciation, and communication skills while preparing students for internationally recognized German language examinations.
      </p>
    ),
    category: "academics"
  },
  {
    id: 2,
    question: "Where are German Gyan's offline centres?",
    answer: (
      <div className="space-y-2">
        <p>We have offline classrooms at:</p>
        <ul className="list-none space-y-1 pl-1">
          <li>📍 <strong>Preet Vihar, Delhi</strong></li>
          <li>📍 <strong>Greater Noida West</strong></li>
        </ul>
        <p className="mt-2 text-muted-foreground text-xs">
          Students from anywhere in India and across the world can also join our live online classes.
        </p>
      </div>
    ),
    category: "general"
  },
  {
    id: 3,
    question: "Do you offer online German classes?",
    answer: (
      <div className="space-y-3">
        <p>Yes. We conduct live interactive online German classes.</p>
        <div className="bg-muted/50 p-3 rounded-lg border border-border/50 text-xs">
          <div className="font-bold text-foreground mb-1">📅 Online Class Timings:</div>
          <p>🕕 6:00 AM – 12:00 Midnight (Monday to Friday)</p>
        </div>
        <p>Flexible batches are available for students, working professionals, homemakers, and school learners.</p>
      </div>
    ),
    category: "general"
  },
  {
    id: 4,
    question: "What are your offline class timings?",
    answer: (
      <div className="space-y-2">
        <p>Our offline classes run between:</p>
        <div className="bg-muted/50 p-3 rounded-lg border border-border/50 text-xs">
          <p>🕙 <strong>10:00 AM – 6:00 PM</strong> (Monday to Friday)</p>
        </div>
        <p>Different batches are available throughout the day.</p>
      </div>
    ),
    category: "general"
  },
  {
    id: 5,
    question: "Which German exams do you prepare students for?",
    answer: (
      <div className="space-y-2">
        <p>German Gyan specializes in preparing students for internationally recognized German language examinations, including:</p>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li><strong>Goethe-Zertifikat</strong></li>
          <li><strong>TELC</strong></li>
          <li><strong>TestDaF</strong></li>
          <li><strong>ÖSD</strong></li>
        </ul>
        <p className="pt-2">Our structured curriculum follows the official exam pattern with extensive practice for Reading, Listening, Writing, and Speaking.</p>
      </div>
    ),
    category: "exams"
  },
  {
    id: 6,
    question: "Why choose German Gyan?",
    answer: (
      <p>
        German Gyan is known for its excellent exam results, structured curriculum, experienced trainers, and student-focused teaching methodology. We believe in building a strong foundation in grammar, vocabulary, pronunciation, and communication rather than rote learning.
      </p>
    ),
    category: "general"
  },
  {
    id: 7,
    question: "Is German Gyan suitable for beginners?",
    answer: (
      <div className="space-y-2">
        <p>Absolutely.</p>
        <p>Our A1 German Course starts from the basics, including the German alphabet, pronunciation, vocabulary, sentence formation, and present tense grammar.</p>
        <p className="font-semibold text-primary">No prior knowledge of German is required.</p>
      </div>
    ),
    category: "academics"
  },
  {
    id: 8,
    question: "What skills are covered in every course?",
    answer: (
      <div className="space-y-2">
        <p>Every level focuses equally on all four language skills:</p>
        <div className="grid grid-cols-2 gap-2 text-xs md:text-sm">
          <div className="bg-muted/40 p-2 rounded border border-border/50">📖 <strong>Reading</strong></div>
          <div className="bg-muted/40 p-2 rounded border border-border/50">🎧 <strong>Listening</strong></div>
          <div className="bg-muted/40 p-2 rounded border border-border/50">🗣 <strong>Speaking</strong></div>
          <div className="bg-muted/40 p-2 rounded border border-border/50">✍ <strong>Writing</strong></div>
        </div>
        <p className="pt-2 text-muted-foreground text-xs">Students receive balanced practice in all modules according to their CEFR level.</p>
      </div>
    ),
    category: "academics"
  },
  {
    id: 9,
    question: "Will grammar be taught in detail?",
    answer: (
      <p>
        Yes. Grammar is one of our biggest strengths. Every level covers grammar systematically, starting from Present Tense in A1 and gradually progressing to advanced grammar concepts through C2.
      </p>
    ),
    category: "academics"
  },
  {
    id: 10,
    question: "Do you provide study material?",
    answer: (
      <div className="space-y-2">
        <p>Yes. Students receive:</p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm pl-2">
          <div className="flex items-center gap-1">✔️ Comprehensive Notes</div>
          <div className="flex items-center gap-1">✔️ Grammar Booklets</div>
          <div className="flex items-center gap-1">✔️ Vocabulary Lists</div>
          <div className="flex items-center gap-1">✔️ Worksheets</div>
          <div className="flex items-center gap-1">✔️ Practice Exercises</div>
          <div className="flex items-center gap-1">✔️ Assignments</div>
          <div className="flex items-center gap-1">✔️ Mock Papers</div>
          <div className="flex items-center gap-1">✔️ Exam Prep Material</div>
        </div>
      </div>
    ),
    category: "academics"
  },
  {
    id: 11,
    question: "How are classes conducted?",
    answer: (
      <div className="space-y-2">
        <p>Our classes are completely interactive and include:</p>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>Live teaching</li>
          <li>Speaking practice</li>
          <li>Grammar explanations</li>
          <li>Listening activities</li>
          <li>Reading exercises</li>
          <li>Writing corrections</li>
          <li>Regular assignments</li>
          <li>Doubt-solving sessions</li>
        </ul>
      </div>
    ),
    category: "academics"
  },
  {
    id: 12,
    question: "Do you provide mock exams?",
    answer: (
      <p>
        Yes. Regular mock tests are conducted according to the official examination pattern to help students gain confidence before appearing for their certification exam.
      </p>
    ),
    category: "exams"
  },
  {
    id: 13,
    question: "How many students are there in one batch?",
    answer: (
      <p>
        We maintain small batch sizes to ensure every student receives individual attention and enough speaking practice during class.
      </p>
    ),
    category: "academics"
  },
  {
    id: 14,
    question: "Do you provide pronunciation training?",
    answer: (
      <p>
        Yes. German pronunciation is taught from the very first class. Students learn pronunciation rules, umlauts, letter combinations, and correct sentence intonation.
      </p>
    ),
    category: "academics"
  },
  {
    id: 15,
    question: "Can working professionals join?",
    answer: (
      <p>
        Yes. With online classes available from 6:00 AM to 12:00 Midnight, working professionals can easily choose a convenient batch.
      </p>
    ),
    category: "general"
  },
  {
    id: 16,
    question: "Do you provide one-to-one German classes?",
    answer: (
      <p>
        Yes. Students who prefer personalized learning can opt for one-to-one training with flexible scheduling.
      </p>
    ),
    category: "academics"
  },
  {
    id: 17,
    question: "What teaching methodology do you follow?",
    answer: (
      <div className="space-y-2">
        <p>Our teaching approach focuses on:</p>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>Concept-based Grammar</li>
          <li>Vocabulary Building</li>
          <li>Practical Communication</li>
          <li>Pronunciation Improvement</li>
          <li>Continuous Practice</li>
          <li>Exam-Oriented Learning</li>
          <li>Interactive Activities</li>
          <li>Individual Feedback</li>
        </ul>
      </div>
    ),
    category: "academics"
  },
  {
    id: 18,
    question: "How do I know which level is right for me?",
    answer: (
      <p>
        If you are new to German, you should start with A1. If you have previous knowledge, our team will help assess your level and recommend the most suitable course.
      </p>
    ),
    category: "academics"
  },
  {
    id: 19,
    question: "What makes German Gyan different from other institutes?",
    answer: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
        <div className="flex items-start gap-2">✅ <span>Excellent Exam Results</span></div>
        <div className="flex items-start gap-2">✅ <span>Experienced Trainers</span></div>
        <div className="flex items-start gap-2">✅ <span>Small Batch Sizes</span></div>
        <div className="flex items-start gap-2">✅ <span>Personalized Attention</span></div>
        <div className="flex items-start gap-2">✅ <span>Structured Curriculum</span></div>
        <div className="flex items-start gap-2">✅ <span>Complete Grammar Coverage</span></div>
        <div className="flex items-start gap-2">✅ <span>Balanced Focus on 4 Skills</span></div>
        <div className="flex items-start gap-2">✅ <span>Regular Mock Tests</span></div>
        <div className="flex items-start gap-2">✅ <span>Live Interactive Classes</span></div>
        <div className="flex items-start gap-2">✅ <span>Continuous Doubt Support</span></div>
      </div>
    ),
    category: "general"
  },
  {
    id: 20,
    question: "How can I enroll?",
    answer: (
      <div className="space-y-3">
        <p>
          You can enroll by contacting our admissions team through WhatsApp, phone, email, or by visiting our centres in Preet Vihar, Delhi or Greater Noida West.
        </p>
        <div className="bg-primary/10 p-3 rounded-lg border border-primary/20 text-center">
          <p className="font-semibold text-foreground">💬 WhatsApp us at:</p>
          <a
            href="https://wa.me/919643430783"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-bold text-lg block mt-1"
          >
            +91-9643430783
          </a>
        </div>
      </div>
    ),
    category: "general"
  }
];

// Helper to filter FAQs for specific pages
const getFilteredFAQs = (page: "home" | "about" | "courses" | "contact"): FAQItem[] => {
  switch (page) {
    case "about":
      // Why choose, Beginners, Skills, Pronunciation, Different
      return allFAQs.filter((item) => [6, 7, 8, 14, 19].includes(item.id));
    case "courses":
      // Courses offer, Exams prep, Study material, How classes conducted, Mock exams, Batch size, 1-to-1, Which level
      return allFAQs.filter((item) => [1, 5, 10, 11, 12, 13, 16, 18].includes(item.id));
    case "contact":
      // Centres, Online classes, Offline timings, Working professionals, How enroll
      return allFAQs.filter((item) => [2, 3, 4, 15, 20].includes(item.id));
    case "home":
    default:
      return allFAQs;
  }
};

interface FAQSectionProps {
  page?: "home" | "about" | "courses" | "contact";
}

export default function FAQSection({ page = "home" }: FAQSectionProps) {
  const [activeCategory, setActiveCategory] = useState<"all" | "general" | "academics" | "exams">("all");
  const filteredFAQs = getFilteredFAQs(page);

  // For home page, we allow filtering by categories
  const displayedFAQs = page === "home"
    ? activeCategory === "all"
      ? filteredFAQs
      : filteredFAQs.filter(item => item.category === activeCategory)
    : filteredFAQs;

  return (
    <section className="py-20 px-6 bg-muted/20 border-t border-border/50">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider block mb-2">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Find answers to common questions about our German courses, batches, timings, and centers.
          </p>
        </div>

        {/* Category Filters (Only on Home Page) */}
        {page === "home" && (
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {[
              { id: "all", label: "Show All" },
              { id: "general", label: "General & Center Info" },
              { id: "academics", label: "Academics & Methods" },
              { id: "exams", label: "Exams & Certifications" }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground font-semibold shadow"
                    : "bg-background text-muted-foreground hover:text-foreground border border-border/50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        {/* Accordion List */}
        <div className="bg-card rounded-2xl border border-border/60 p-4 md:p-8 shadow-sm">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {displayedFAQs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={`faq-${faq.id}`}
                className="border border-border/40 rounded-xl px-4 md:px-6 py-1 bg-background/40 hover:bg-background/80 transition-colors data-[state=open]:border-primary/20 data-[state=open]:bg-background"
              >
                <AccordionTrigger className="text-base md:text-lg font-semibold text-left py-4 hover:no-underline hover:text-primary transition-colors text-foreground">
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-primary shrink-0 opacity-80" />
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pt-2 pb-5 border-t border-border/30 mt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
