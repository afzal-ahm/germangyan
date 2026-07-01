import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Play, Maximize2 } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import otherHero from "@assets/other hero.png";

// Import Priority Group (Achievements, Awards, Events)
import certificate1 from "@assets/certificate-1.jpeg";
import studentCert1 from "@assets/student certificate distribution - 1.jpeg";
import studentCert2 from "@assets/student certificate distribution - 2.jpeg";
import studentCert3 from "@assets/student certificate distribution - 3.jpeg";
import studentCert4 from "@assets/student certificate distribution - 4.jpeg";
import studentCert5 from "@assets/student certificate distribution - 5.jpeg";
import studentCert7 from "@assets/student certificate distribution - 7.jpeg";
import studentCert8 from "@assets/student certificate distribution - 8.jpeg";
import studentCert9 from "@assets/student certificate distribution - 9.jpeg";
import studentCert10 from "@assets/student certificate distribution - 10.jpeg";
import speakerAward from "@assets/Speaker Appreciation Award.jpeg";
import digitalAward from "@assets/digital women award.jpeg";
import aaftEvent from "@assets/at AAFT event.jpeg";
import aaftInterview from "@assets/giving interview at AAFT.jpeg";
import kirtiKulhar from "@assets/with actress Kirti Kulhar.jpeg";
import germanGyan from "@assets/german-gyan.jpeg";
import germanGyan2 from "@assets/german-gyan-2.jpeg";

// Import Regular Group (Centres, Classes, Speaking)
import nidhi from "@assets/nidhi.jpeg";
import nidhi1 from "@assets/nidhi-1.jpeg";
import nidhi1Copy from "@assets/nidhi-1 copy.jpeg";
import nidhi2 from "@assets/nidhi-2.jpeg";
import nidhi3 from "@assets/nidhi-3.jpeg";
import nidhi3Copy from "@assets/nidhi-3 copy.jpeg";
import nidhi4 from "@assets/nidhi-4.jpeg";
import nidhi4Copy from "@assets/nidhi-4 copy.jpeg";
import nidhi5 from "@assets/nidhi-5.jpeg";
import nidhi5Copy from "@assets/nidhi-5 copy.jpeg";
import nidhi6 from "@assets/nidhi-6.jpeg";
import nidhi7 from "@assets/nidhi-7.jpeg";
import office1 from "@assets/office-1.jpeg";
import office2 from "@assets/office-2.jpeg";
import office3 from "@assets/office-3.jpeg";
import office4 from "@assets/office-4.jpeg";
import office5 from "@assets/office-5.jpeg";
import office6 from "@assets/office-6.jpeg";
import office7 from "@assets/office-7.jpeg";
import office8 from "@assets/office-8.jpeg";
import office9 from "@assets/office-9.jpeg";
import office10 from "@assets/office-10.jpeg";
import office11 from "@assets/office-11.jpeg";
import office12 from "@assets/office-12.jpeg";
import office13 from "@assets/office-13.jpeg";
import office14 from "@assets/office-14.jpeg";
import office15 from "@assets/office-15.jpeg";
import speaking1 from "@assets/speaking-1.jpeg";
import speaking2 from "@assets/speaking-2.jpeg";
import speaking3 from "@assets/speaking-3.jpeg";
import erPhoto from "@assets/er.jpg";

// Import New Classroom Photos & Videos
import class1 from "@assets/class - 1.jpeg";
import class2 from "@assets/class - 2.jpeg";
import class3 from "@assets/class - 3.jpeg";
import class4 from "@assets/class - 4.jpeg";
import class5 from "@assets/class - 5.jpeg";
import class6 from "@assets/class - 6.jpeg";
import class7 from "@assets/class - 7.jpeg";
import class8 from "@assets/class - 8.jpeg";
import class9 from "@assets/class - 9.jpeg";
import class11 from "@assets/class - 11.jpeg";
import class12 from "@assets/class - 12.jpeg";
import class13 from "@assets/class - 13.jpeg";
import class14 from "@assets/class - 14.jpeg";
import class10Video from "@assets/class - 10.mp4";

// Import Ambassador & Diplomat Assets
import ackermannPhoto from "@assets/with Philipp Ackermann.jpeg";
import sainsburyPhoto from "@assets/with Toby Sainsbury.jpeg";
import ackermannVideo from "@assets/Philipp Ackermann talking.mp4";

// Import New Celebrity & Founder Photos
import kanganaPhoto from "@assets/meet with Kangana Ranaut.jpeg";
import nidhiLogoPhoto from "@assets/nidhi with german gyan logo.jpeg";
import nidhiFlagPhoto from "@assets/nidhi with indian flag.jpeg";

// Import Local Videos
import studentVideo from "@assets/student.mp4";
import teachingVideo from "@assets/teaching-german-to-student.mp4";

interface PhotoItem {
  id: number;
  url: string;
  thumbnail: string;
  title: string;
  description: string;
  category: "Achievements" | "Awards" | "Events" | "Classroom & Office";
}

interface VideoItem {
  id: string;
  youtubeId?: string;
  url: string;
  type: "local" | "youtube" | "youtube-short" | "playlist";
  title: string;
  description: string;
  duration: string;
  level: string;
  aspect: "video" | "short";
  thumbnail?: string;
}

// Master Photos List
const masterPhotos: PhotoItem[] = [
  // --- PRIORITY GROUP (Achievements, Awards, Events) ---
  {
    id: 203,
    url: kanganaPhoto,
    thumbnail: kanganaPhoto,
    title: "With Actress Kangana Ranaut",
    description: "Nidhi Jain meeting with Bollywood actress Kangana Ranaut.",
    category: "Achievements"
  },
  {
    id: 201,
    url: ackermannPhoto,
    thumbnail: ackermannPhoto,
    title: "Meeting German Ambassador Dr. Philipp Ackermann",
    description: "The German Ambassador Dr. Philipp Ackermann met him for one case as German Translator and gifted him my own translated book in German.",
    category: "Achievements"
  },
  {
    id: 202,
    url: sainsburyPhoto,
    thumbnail: sainsburyPhoto,
    title: "Meeting British Representative Toby Sainsbury",
    description: "Discussing education pathways, trade policy, and language translations with Toby Sainsbury.",
    category: "Achievements"
  },
  {
    id: 99,
    url: erPhoto,
    thumbnail: erPhoto,
    title: "German Gyan Sessions",
    description: "Expert foreign language coaching and Goethe exam preparation with Nidhi Jain.",
    category: "Events"
  },
  {
    id: 1,
    url: studentCert1,
    thumbnail: studentCert1,
    title: "Certificate Distribution",
    description: "Nidhi Jain presenting course completion certificate to a successful student.",
    category: "Achievements"
  },
  {
    id: 2,
    url: studentCert2,
    thumbnail: studentCert2,
    title: "Goethe Exam Achiever",
    description: "Celebrating excellent results and certificate distribution.",
    category: "Achievements"
  },
  {
    id: 3,
    url: studentCert3,
    thumbnail: studentCert3,
    title: "Batch Graduation",
    description: "Proud student receiving their German language proficiency certificate.",
    category: "Achievements"
  },
  {
    id: 4,
    url: studentCert4,
    thumbnail: studentCert4,
    title: "A2 Level Graduate",
    description: "Student celebrating their language learning milestone.",
    category: "Achievements"
  },
  {
    id: 5,
    url: studentCert5,
    thumbnail: studentCert5,
    title: "Fluency Certified",
    description: "Honoring dedication and hard work in mastering German.",
    category: "Achievements"
  },
  {
    id: 6,
    url: studentCert7,
    thumbnail: studentCert7,
    title: "Certificate Ceremony",
    description: "Students successfully graduating to higher CEFR levels.",
    category: "Achievements"
  },
  {
    id: 7,
    url: studentCert8,
    thumbnail: studentCert8,
    title: "Goethe Zertifikat Success",
    description: "Another student clears their official certification with flying colors.",
    category: "Achievements"
  },
  {
    id: 8,
    url: studentCert9,
    thumbnail: studentCert9,
    title: "Successful Learner",
    description: "German Gyan student holding their official level certificate.",
    category: "Achievements"
  },
  {
    id: 9,
    url: studentCert10,
    thumbnail: studentCert10,
    title: "Language Proficiency Award",
    description: "A proud moment celebrating language learning success.",
    category: "Achievements"
  },
  {
    id: 10,
    url: certificate1,
    thumbnail: certificate1,
    title: "Goethe Zertifikat B1",
    description: "Official German language certificate achieved by our student.",
    category: "Achievements"
  },
  {
    id: 11,
    url: speakerAward,
    thumbnail: speakerAward,
    title: "Speaker Appreciation Award",
    description: "Nidhi Jain receiving the Speaker Appreciation Award for her educational contributions.",
    category: "Awards"
  },
  {
    id: 12,
    url: digitalAward,
    thumbnail: digitalAward,
    title: "Digital Women Award",
    description: "Nidhi Jain honored at the Digital Women Awards for leadership in education.",
    category: "Awards"
  },
  {
    id: 13,
    url: aaftEvent,
    thumbnail: aaftEvent,
    title: "AAFT University Event",
    description: "Nidhi Jain invited as a guest speaker at the prestigious AAFT event.",
    category: "Events"
  },
  {
    id: 14,
    url: aaftInterview,
    thumbnail: aaftInterview,
    title: "Media Interview at AAFT",
    description: "Nidhi Jain giving an interview sharing insights on foreign language education.",
    category: "Events"
  },
  {
    id: 15,
    url: kirtiKulhar,
    thumbnail: kirtiKulhar,
    title: "With Actress Kirti Kulhari",
    description: "Nidhi Jain with popular Bollywood actress Kirti Kulhari at an event.",
    category: "Events"
  },
  {
    id: 16,
    url: germanGyan,
    thumbnail: germanGyan,
    title: "German Gyan Batch Celebration",
    description: "Group photo of students celebrating their successful course completion.",
    category: "Events"
  },
  {
    id: 17,
    url: germanGyan2,
    thumbnail: germanGyan2,
    title: "German Gyan Family",
    description: "Graduates and students celebrating together at our Delhi centre.",
    category: "Events"
  },

  // --- REGULAR GROUP (Classroom & Office) ---
  {
    id: 18,
    url: nidhi,
    thumbnail: nidhi,
    title: "Nidhi Jain",
    description: "Founder & Lead Instructor at German Gyan.",
    category: "Classroom & Office"
  },
  {
    id: 19,
    url: nidhi1,
    thumbnail: nidhi1,
    title: "Interactive Classroom Teaching",
    description: "Nidhi Jain conducting a live session with students.",
    category: "Classroom & Office"
  },
  {
    id: 20,
    url: nidhi1Copy,
    thumbnail: nidhi1Copy,
    title: "Concept-Based Teaching",
    description: "Simplifying German grammar rules for Indian students.",
    category: "Classroom & Office"
  },
  {
    id: 21,
    url: nidhi2,
    thumbnail: nidhi2,
    title: "Grammar Deep-Dive",
    description: "Explaining sentence structures and cases on the board.",
    category: "Classroom & Office"
  },
  {
    id: 22,
    url: nidhi3,
    thumbnail: nidhi3,
    title: "Personalized Counseling",
    description: "Guiding students on study and career prospects in Germany.",
    category: "Classroom & Office"
  },
  {
    id: 23,
    url: nidhi3Copy,
    thumbnail: nidhi3Copy,
    title: "Career Guidance Session",
    description: "Explaining the Goethe exam modules and scoring system.",
    category: "Classroom & Office"
  },
  {
    id: 24,
    url: nidhi4,
    thumbnail: nidhi4,
    title: "Goethe Exam Preparation",
    description: "Conducting mock speaking practice sessions.",
    category: "Classroom & Office"
  },
  {
    id: 25,
    url: nidhi4Copy,
    thumbnail: nidhi4Copy,
    title: "Exam Tips & Strategies",
    description: "Discussing reading and writing section strategies.",
    category: "Classroom & Office"
  },
  {
    id: 26,
    url: nidhi5,
    thumbnail: nidhi5,
    title: "Doubt Clearing Session",
    description: "Addressing individual student queries during the class.",
    category: "Classroom & Office"
  },
  {
    id: 27,
    url: nidhi5Copy,
    thumbnail: nidhi5Copy,
    title: "One-on-One Interaction",
    description: "Providing personalized feedback on pronunciation.",
    category: "Classroom & Office"
  },
  {
    id: 28,
    url: nidhi6,
    thumbnail: nidhi6,
    title: "Active Speaking Session",
    description: "Interactive German conversation practice in class.",
    category: "Classroom & Office"
  },
  {
    id: 29,
    url: nidhi7,
    thumbnail: nidhi7,
    title: "Vocabulary Building",
    description: "Teaching daily-use German vocabulary and phrases.",
    category: "Classroom & Office"
  },
  {
    id: 30,
    url: office1,
    thumbnail: office1,
    title: "Delhi Centre Classroom",
    description: "A look inside our main classroom and learning area.",
    category: "Classroom & Office"
  },
  {
    id: 31,
    url: office2,
    thumbnail: office2,
    title: "Spacious Learning Environment",
    description: "Classrooms designed for comfortable and focused language learning.",
    category: "Classroom & Office"
  },
  {
    id: 32,
    url: office3,
    thumbnail: office3,
    title: "Delhi Classroom Setup",
    description: "Equipped with interactive smartboard and multimedia systems.",
    category: "Classroom & Office"
  },
  {
    id: 33,
    url: office4,
    thumbnail: office4,
    title: "Bright & Modern Classroom",
    description: "Air-conditioned classrooms with comfortable seating.",
    category: "Classroom & Office"
  },
  {
    id: 34,
    url: office5,
    thumbnail: office5,
    title: "Noida Extension Centre",
    description: "Classroom view of our Greater Noida West study centre.",
    category: "Classroom & Office"
  },
  {
    id: 35,
    url: office6,
    thumbnail: office6,
    title: "Classroom Study Session",
    description: "Providing a great study atmosphere for offline batches.",
    category: "Classroom & Office"
  },
  {
    id: 36,
    url: office7,
    thumbnail: office7,
    title: "Multimedia Board",
    description: "Utilizing modern tools to make learning interactive and fun.",
    category: "Classroom & Office"
  },
  {
    id: 37,
    url: office8,
    thumbnail: office8,
    title: "Delhi Centre Infrastructure",
    description: "Clean, comfortable, and professional learning spaces.",
    category: "Classroom & Office"
  },
  {
    id: 38,
    url: office9,
    thumbnail: office9,
    title: "Classroom Study Desk",
    description: "Organized seating designed for collaborative group work.",
    category: "Classroom & Office"
  },
  {
    id: 39,
    url: office10,
    thumbnail: office10,
    title: "Interactive Classroom",
    description: "Setting up group activities and interactive board games.",
    category: "Classroom & Office"
  },
  {
    id: 40,
    url: office11,
    thumbnail: office11,
    title: "Batch Seating View",
    description: "Comfortable layout ensuring every student gets Nidhi's attention.",
    category: "Classroom & Office"
  },
  {
    id: 41,
    url: office12,
    thumbnail: office12,
    title: "Noida Extension Classrooms",
    description: "Modern desks and chairs at our Greater Noida West location.",
    category: "Classroom & Office"
  },
  {
    id: 42,
    url: office13,
    thumbnail: office13,
    title: "Study & Discussion Corner",
    description: "Corner space designed for self-study and peer discussions.",
    category: "Classroom & Office"
  },
  {
    id: 43,
    url: office14,
    thumbnail: office14,
    title: "Listening Corner Setup",
    description: "Equipped with audio systems for official Goethe listening practice.",
    category: "Classroom & Office"
  },
  {
    id: 44,
    url: office15,
    thumbnail: office15,
    title: "Delhi Preet Vihar Reception",
    description: "The welcoming lobby and reception area at our Delhi centre.",
    category: "Classroom & Office"
  },
  {
    id: 45,
    url: speaking1,
    thumbnail: speaking1,
    title: "German Speaking Practice",
    description: "Active conversational German practice with fellow learners.",
    category: "Classroom & Office"
  },
  {
    id: 46,
    url: speaking2,
    thumbnail: speaking2,
    title: "Oral Fluency Sessions",
    description: "Practicing everyday dialogues and situational speaking.",
    category: "Classroom & Office"
  },
  {
    id: 47,
    url: speaking3,
    thumbnail: speaking3,
    title: "German Pronunciation Drills",
    description: "Focusing on correct intonation, umlauts, and sentence rhythm.",
    category: "Classroom & Office"
  },
  {
    id: 151,
    url: class1,
    thumbnail: class1,
    title: "Offline Batch Class",
    description: "Students participating in collaborative learning in our Preet Vihar classroom.",
    category: "Classroom & Office"
  },
  {
    id: 152,
    url: class2,
    thumbnail: class2,
    title: "Classroom Interactive Session",
    description: "Students learning and practicing German dialogues under Nidhi's guidance.",
    category: "Classroom & Office"
  },
  {
    id: 153,
    url: class3,
    thumbnail: class3,
    title: "German Learning Activity",
    description: "Highly engaged batch practicing writing and interactive grammar exercises.",
    category: "Classroom & Office"
  },
  {
    id: 154,
    url: class4,
    thumbnail: class4,
    title: "Offline Batch Learning",
    description: "Our Preet Vihar class engaged in understanding advanced sentence structures.",
    category: "Classroom & Office"
  },
  {
    id: 155,
    url: class5,
    thumbnail: class5,
    title: "Collaborative Study Session",
    description: "Students discussing exercises during an offline class.",
    category: "Classroom & Office"
  },
  {
    id: 156,
    url: class6,
    thumbnail: class6,
    title: "Classroom Group Activity",
    description: "Batch participating in team speaking exercises in our Delhi branch.",
    category: "Classroom & Office"
  },
  {
    id: 157,
    url: class7,
    thumbnail: class7,
    title: "Live Offline Class",
    description: "Live offline German class focused on core language skills.",
    category: "Classroom & Office"
  },
  {
    id: 158,
    url: class8,
    thumbnail: class8,
    title: "Delhi Branch Batch",
    description: "A class session going on in our modern Preet Vihar learning space.",
    category: "Classroom & Office"
  },
  {
    id: 159,
    url: class9,
    thumbnail: class9,
    title: "Active Learning Session",
    description: "Students working on writing modules with individualized attention.",
    category: "Classroom & Office"
  },
  {
    id: 161,
    url: class11,
    thumbnail: class11,
    title: "Classroom Interaction",
    description: "Interactive batch session focusing on German speaking and pronunciation.",
    category: "Classroom & Office"
  },
  {
    id: 162,
    url: class12,
    thumbnail: class12,
    title: "Offline Batch Practice",
    description: "A class focusing on exam formats and modules.",
    category: "Classroom & Office"
  },
  {
    id: 163,
    url: class13,
    thumbnail: class13,
    title: "Study Group at German Gyan",
    description: "Collaborative study session at our Preet Vihar centre.",
    category: "Classroom & Office"
  },
  {
    id: 164,
    url: class14,
    thumbnail: class14,
    title: "Interactive Classroom Study",
    description: "Offline class session with interactive boards and modern learning tools.",
    category: "Classroom & Office"
  },
  {
    id: 204,
    url: nidhiLogoPhoto,
    thumbnail: nidhiLogoPhoto,
    title: "Nidhi Jain at German Gyan",
    description: "Founder Nidhi Jain in front of the German Gyan official logo.",
    category: "Classroom & Office"
  },
  {
    id: 205,
    url: nidhiFlagPhoto,
    thumbnail: nidhiFlagPhoto,
    title: "Nidhi Jain with Indian Flag",
    description: "Posing proudly with the national flag at our Delhi branch center.",
    category: "Classroom & Office"
  }
];

// Mixed Videos List (Local + YouTube)
const videos: VideoItem[] = [
  // --- Local Videos ---
  {
    id: "ackermann-video",
    url: ackermannVideo,
    type: "local",
    title: "German Ambassador Dr. Philipp Ackermann meeting",
    description: "The German Ambassador Dr. Philipp Ackermann met him for one case as German Translator and gifted him my own translated book in German.",
    duration: "0:15",
    level: "Ambassador Event",
    aspect: "video"
  },
  {
    id: "class-10-video",
    url: class10Video,
    type: "local",
    title: "Classroom Learning & Practice Session",
    description: "Students actively practicing speaking and learning German in our interactive class.",
    duration: "0:25",
    level: "Classroom Session",
    aspect: "video"
  },
  {
    id: "teaching-video",
    url: teachingVideo,
    type: "local",
    title: "Teaching German to Student",
    description: "A glimpse into our interactive, one-on-one German language coaching session.",
    duration: "0:25",
    level: "Classroom Session",
    aspect: "video"
  },
  {
    id: "student-video",
    url: studentVideo,
    type: "local",
    title: "Student Experience & Speaking",
    description: "Hear from our students as they practice speaking and share their learning journey.",
    duration: "0:06",
    level: "Student Testimonial",
    aspect: "video"
  },
  // --- YouTube Podcasts ---
  {
    id: "oSr5JFD9yc0",
    youtubeId: "oSr5JFD9yc0",
    url: "https://www.youtube.com/embed/oSr5JFD9yc0",
    type: "youtube",
    title: "German Gyan Podcast | Career & Opportunities in Germany",
    description: "An insightful podcast discussing career opportunities, job search, and language requirements in Germany.",
    duration: "Podcast",
    level: "YouTube Podcast",
    aspect: "video"
  },
  {
    id: "95ZIgRcu-dk",
    youtubeId: "95ZIgRcu-dk",
    url: "https://www.youtube.com/embed/95ZIgRcu-dk",
    type: "youtube",
    title: "German Gyan Podcast | Student Visa & Academic Pathways",
    description: "Detailed discussion on university admissions, student visas, and block account requirements for Germany.",
    duration: "Podcast",
    level: "YouTube Podcast",
    aspect: "video"
  },
  {
    id: "GqyKGu0Fzis",
    youtubeId: "GqyKGu0Fzis",
    url: "https://www.youtube.com/embed/GqyKGu0Fzis",
    type: "youtube",
    title: "German Gyan Podcast | Mastering German Language & Exams",
    description: "Tips and strategies to learn German faster, clear Goethe exams, and speak like a native.",
    duration: "Podcast",
    level: "YouTube Podcast",
    aspect: "video"
  },
  // --- YouTube Videos (Widescreen) ---
  {
    id: "y6B15eX8nuw",
    youtubeId: "y6B15eX8nuw",
    url: "https://www.youtube.com/embed/y6B15eX8nuw",
    type: "youtube",
    title: "German Vocabulary & Speaking",
    description: "Learn essential German vocabulary and improve your speaking skills with Nidhi Jain.",
    duration: "10:15",
    level: "Vocabulary",
    aspect: "video"
  },
  {
    id: "HZ_WEMZzIUk",
    youtubeId: "HZ_WEMZzIUk",
    url: "https://www.youtube.com/embed/HZ_WEMZzIUk",
    type: "youtube",
    title: "German Grammar Rules",
    description: "Mastering complex German grammar structures and sentence patterns made simple.",
    duration: "12:30",
    level: "Grammar",
    aspect: "video"
  },
  {
    id: "tRo0ej6S69c",
    youtubeId: "tRo0ej6S69c",
    url: "https://www.youtube.com/embed/tRo0ej6S69c",
    type: "youtube",
    title: "Goethe Exam Preparation",
    description: "Step-by-step tips and strategies to crack the Goethe-Zertifikat language exams.",
    duration: "14:45",
    level: "Exam Prep",
    aspect: "video"
  },
  {
    id: "hXi47e8xILI",
    youtubeId: "hXi47e8xILI",
    url: "https://www.youtube.com/embed/hXi47e8xILI",
    type: "youtube",
    title: "Learn German Fluently",
    description: "Conversational German tips to speak confidently and sound like a native speaker.",
    duration: "11:20",
    level: "Speaking Practice",
    aspect: "video"
  },
  {
    id: "tMQNiplNMJ4",
    youtubeId: "tMQNiplNMJ4",
    url: "https://www.youtube.com/embed/tMQNiplNMJ4",
    type: "youtube",
    title: "German Conversation Practice",
    description: "Interactive dialogue practice for everyday situations in Germany.",
    duration: "09:40",
    level: "Conversation",
    aspect: "video"
  },
  {
    id: "sKwGVTTnxUg",
    youtubeId: "sKwGVTTnxUg",
    url: "https://www.youtube.com/embed/sKwGVTTnxUg",
    type: "youtube",
    title: "Advanced German Grammar",
    description: "Detailed explanation of B1-B2 level grammar concepts and structures.",
    duration: "15:10",
    level: "Advanced Grammar",
    aspect: "video"
  },
  {
    id: "NXfxiGXdlKQ",
    youtubeId: "NXfxiGXdlKQ",
    url: "https://www.youtube.com/embed/NXfxiGXdlKQ",
    type: "youtube",
    title: "Pronunciation Masterclass",
    description: "Tips and tricks to speak German with perfect pronunciation and accent.",
    duration: "08:50",
    level: "Pronunciation",
    aspect: "video"
  },
  {
    id: "xWH7DF3wCww",
    youtubeId: "xWH7DF3wCww",
    url: "https://www.youtube.com/embed/xWH7DF3wCww",
    type: "youtube",
    title: "Study & Career in Germany",
    description: "Essential guide on how to prepare for study and work opportunities in Germany.",
    duration: "13:15",
    level: "Career Guide",
    aspect: "video"
  },
  // --- YouTube Playlists ---
  {
    id: "playlist-1",
    youtubeId: "PLhy2RAiqlwBHpaItzo3Gv7JzdCQAyU6I8",
    url: "https://www.youtube.com/embed/videoseries?list=PLhy2RAiqlwBHpaItzo3Gv7JzdCQAyU6I8",
    type: "playlist",
    title: "German Speaking & Vocabulary Lessons",
    description: "A curated playlist of German speaking practice sessions, pronunciation drills, and essential vocabulary.",
    duration: "Playlist",
    level: "YouTube Playlist",
    aspect: "video",
    thumbnail: "https://img.youtube.com/vi/7ep5UlGWgjI/hqdefault.jpg"
  },
  {
    id: "playlist-2",
    youtubeId: "PLhy2RAiqlwBG2D6hdoNp8NIv8gYa42p6V",
    url: "https://www.youtube.com/embed/videoseries?list=PLhy2RAiqlwBG2D6hdoNp8NIv8gYa42p6V",
    type: "playlist",
    title: "Complete German A1 Level Course",
    description: "Learn German from scratch. Step-by-step video lectures covering the entire A1 CEFR syllabus.",
    duration: "Playlist",
    level: "YouTube Playlist",
    aspect: "video",
    thumbnail: "https://img.youtube.com/vi/9_uMiG87LNY/hqdefault.jpg"
  },
  {
    id: "playlist-3",
    youtubeId: "PLhy2RAiqlwBEIwexnNGOONF180SW0_2yz",
    url: "https://www.youtube.com/embed/videoseries?list=PLhy2RAiqlwBEIwexnNGOONF180SW0_2yz",
    type: "playlist",
    title: "German A2 Level Lessons & Grammar",
    description: "Build on your foundation. Advanced grammar, sentence structures, and situational speaking practice.",
    duration: "Playlist",
    level: "YouTube Playlist",
    aspect: "video",
    thumbnail: "https://img.youtube.com/vi/uyBkq__3Zes/hqdefault.jpg"
  },
  {
    id: "playlist-4",
    youtubeId: "PLhy2RAiqlwBFiYs4xnbT6xz5oN3_nRMXk",
    url: "https://www.youtube.com/embed/videoseries?list=PLhy2RAiqlwBFiYs4xnbT6xz5oN3_nRMXk",
    type: "playlist",
    title: "German B1 Level Intermediate Course",
    description: "Reach independent user status. In-depth explanations of B1 level topics and conversational skills.",
    duration: "Playlist",
    level: "YouTube Playlist",
    aspect: "video",
    thumbnail: "https://img.youtube.com/vi/T_DbhFYxa80/hqdefault.jpg"
  },
  {
    id: "playlist-5",
    youtubeId: "PLhy2RAiqlwBE-cSiBokA88Jxm4GYlND-S",
    url: "https://www.youtube.com/embed/videoseries?list=PLhy2RAiqlwBE-cSiBokA88Jxm4GYlND-S",
    type: "playlist",
    title: "Goethe Exam Preparation & Mock Tests",
    description: "Tips, strategies, and mock paper solutions to help you clear the Goethe-Zertifikat exams.",
    duration: "Playlist",
    level: "YouTube Playlist",
    aspect: "video",
    thumbnail: "https://img.youtube.com/vi/abAS6FIwkn4/hqdefault.jpg"
  }
];

// Helper to shuffle an array (Fisher-Yates)
const shuffleArray = <T,>(array: T[]): T[] => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<"photos" | "videos" | "podcasts" | "playlists">("photos");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const [displayPhotos, setDisplayPhotos] = useState<PhotoItem[]>(masterPhotos);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Prioritize and Shuffle Photos on Load
  useEffect(() => {
    // Group A (Priority): Achievements, Awards, Events
    const priorityPhotos = masterPhotos.filter(p =>
      p.category === "Achievements" || p.category === "Awards" || p.category === "Events"
    );
    // Group B (Regular): Classroom & Office
    const regularPhotos = masterPhotos.filter(p =>
      p.category === "Classroom & Office"
    );

    // Shuffle both groups
    const shuffledPriority = shuffleArray(priorityPhotos);
    const shuffledRegular = shuffleArray(regularPhotos);

    // Combine them with priority at the beginning
    setDisplayPhotos([...shuffledPriority, ...shuffledRegular]);
  }, []);

  const filteredPhotos = selectedCategory === "All"
    ? displayPhotos
    : displayPhotos.filter(p => p.category === selectedCategory);

  // Lightbox navigation
  const handlePrevPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? filteredPhotos.length - 1 : prev! - 1));
    }
  };

  const handleNextPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === filteredPhotos.length - 1 ? 0 : prev! + 1));
    }
  };

  // Keyboard controls for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "ArrowLeft") handlePrevPhoto();
      if (e.key === "ArrowRight") handleNextPhoto();
      if (e.key === "Escape") setLightboxIndex(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredPhotos]);

  return (
    <div className="min-h-screen bg-background font-sans pt-16">
      <PageMeta
        title="Our Gallery | German Gyan"
        description="Browse photos of our German classes, student celebrations, and video lessons. Get a glimpse of the learning experience at German Gyan."
        keywords="German Gyan gallery, German classes photos, study German videos, German language institute classroom, Goethe celebrations"
      />

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img
            src={otherHero}
            alt="German Gyan Classroom"
            className="w-full h-full object-cover opacity-60 object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-white max-w-6xl">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-2xl space-y-4">
            <div className="flex items-center gap-2 text-sm font-medium text-primary">
              <span className="cursor-pointer hover:underline">Home</span>
              <span className="text-white/40">/</span>
              <span className="text-white/60">Gallery</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Our <span className="text-primary font-bold">Gallery</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed">
              Photos from classes, student achievements, and video lessons — a glimpse inside German Gyan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Tabs Navigation */}
          <div className="border-b border-border mb-10 overflow-x-auto no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <style dangerouslySetInnerHTML={{ __html: `
              .no-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}} />
            <div className="flex gap-6 md:gap-8 pb-1 whitespace-nowrap min-w-max">
              <button
                onClick={() => setActiveTab("photos")}
                className={`flex items-center gap-2 pb-4 text-base md:text-lg font-medium transition-all relative ${
                  activeTab === "photos"
                    ? "text-primary font-bold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span>📸</span> Photos
                {activeTab === "photos" && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
              <button
                onClick={() => setActiveTab("videos")}
                className={`flex items-center gap-2 pb-4 text-base md:text-lg font-medium transition-all relative ${
                  activeTab === "videos"
                    ? "text-primary font-bold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span>🎬</span> Videos
                {activeTab === "videos" && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
              <button
                onClick={() => setActiveTab("podcasts")}
                className={`flex items-center gap-2 pb-4 text-base md:text-lg font-medium transition-all relative ${
                  activeTab === "podcasts"
                    ? "text-primary font-bold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span>🎙️</span> YouTube Podcasts
                {activeTab === "podcasts" && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
              <button
                onClick={() => setActiveTab("playlists")}
                className={`flex items-center gap-2 pb-4 text-base md:text-lg font-medium transition-all relative ${
                  activeTab === "playlists"
                    ? "text-primary font-bold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span>📺</span> YouTube Playlists
                {activeTab === "playlists" && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === "photos" && (
              <motion.div
                key="photos-grid-wrapper"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                {/* Category Sub-Filters */}
                <div className="flex flex-wrap gap-2 md:gap-3 mb-8 justify-center sm:justify-start">
                  {["All", "Achievements", "Awards", "Events", "Classroom & Office"].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border ${
                        selectedCategory === cat
                          ? "bg-primary text-primary-foreground border-primary shadow-sm"
                          : "bg-muted/40 hover:bg-muted text-muted-foreground border-border/50"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="columns-1 sm:columns-2 md:columns-3 gap-6">
                  {filteredPhotos.map((photo, index) => (
                    <div
                      key={photo.id}
                      onClick={() => setLightboxIndex(index)}
                      className="break-inside-avoid mb-6 group relative cursor-pointer overflow-hidden rounded-xl bg-muted border border-border/50 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <img
                        src={photo.thumbnail}
                        alt={photo.title}
                        className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 z-10 text-white">
                        <div className="self-end bg-primary/90 text-primary-foreground text-xs font-semibold px-2 py-1 rounded-full">
                          {photo.category}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg flex items-center gap-2">
                            {photo.title} <Maximize2 className="w-4 h-4 text-primary" />
                          </h3>
                          <p className="text-xs text-white/80 line-clamp-2 mt-1">{photo.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "videos" && (
              <motion.div
                key="videos-grid"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto"
              >
                {videos.filter(v => v.level !== "YouTube Podcast" && v.type !== "playlist").map((video) => (
                  <div
                    key={video.id}
                    onClick={() => {
                      setActiveVideoId(video.id);
                    }}
                    className="group flex flex-col cursor-pointer overflow-hidden rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Video Thumbnail Wrapper */}
                    <div className="relative bg-muted overflow-hidden aspect-video">
                      {video.type === "local" ? (
                        <video
                          src={video.url}
                          className="w-full h-full object-cover"
                          preload="metadata"
                          playsInline
                          muted
                        />
                      ) : video.thumbnail ? (
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <img
                          src={`https://img.youtube.com/vi/${video.youtubeId}/0.jpg`}
                          alt={video.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      )}
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-6 h-6 fill-current translate-x-[2px]" />
                        </div>
                      </div>

                      {/* Video Type Tag */}
                      <div className="absolute top-3 left-3 bg-black/75 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded tracking-wider z-10">
                        {video.type === "youtube" ? "YouTube" : "Video"}
                      </div>

                      {/* Duration Tag */}
                      <div className="absolute bottom-2 right-2 bg-black/75 text-white text-xs px-2 py-0.5 rounded font-mono z-10">
                        {video.duration}
                      </div>
                    </div>

                    {/* Video Info */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <div className="text-xs font-semibold text-primary uppercase tracking-wider">
                          {video.level}
                        </div>
                        <h3 className="font-bold text-lg text-foreground line-clamp-2 mt-1 leading-snug group-hover:text-primary transition-colors">
                          {video.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mt-2 leading-relaxed">
                          {video.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "podcasts" && (
              <motion.div
                key="podcasts-grid"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto"
              >
                {videos.filter(v => v.level === "YouTube Podcast").map((video) => (
                  <div
                    key={video.id}
                    onClick={() => {
                      setActiveVideoId(video.id);
                    }}
                    className="group flex flex-col cursor-pointer overflow-hidden rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Video Thumbnail Wrapper */}
                    <div className="relative bg-muted overflow-hidden aspect-video">
                      <img
                        src={`https://img.youtube.com/vi/${video.youtubeId}/0.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-6 h-6 fill-current translate-x-[2px]" />
                        </div>
                      </div>

                      {/* Video Type Tag */}
                      <div className="absolute top-3 left-3 bg-black/75 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded tracking-wider z-10">
                        YouTube
                      </div>

                      {/* Duration Tag */}
                      <div className="absolute bottom-2 right-2 bg-black/75 text-white text-xs px-2 py-0.5 rounded font-mono z-10">
                        {video.duration}
                      </div>
                    </div>

                    {/* Video Info */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <div className="text-xs font-semibold text-primary uppercase tracking-wider">
                          {video.level}
                        </div>
                        <h3 className="font-bold text-lg text-foreground line-clamp-2 mt-1 leading-snug group-hover:text-primary transition-colors">
                          {video.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mt-2 leading-relaxed">
                          {video.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "playlists" && (
              <motion.div
                key="playlists-grid"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto"
              >
                {videos.filter(v => v.type === "playlist").map((video) => (
                  <div
                    key={video.id}
                    onClick={() => {
                      setActiveVideoId(video.id);
                    }}
                    className="group flex flex-col cursor-pointer overflow-hidden rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Video Thumbnail Wrapper */}
                    <div className="relative bg-muted overflow-hidden aspect-video">
                      {video.thumbnail && (
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      )}
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-6 h-6 fill-current translate-x-[2px]" />
                        </div>
                      </div>

                      {/* Video Type Tag */}
                      <div className="absolute top-3 left-3 bg-black/75 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded tracking-wider z-10">
                        Playlist
                      </div>

                      {/* Duration Tag */}
                      <div className="absolute bottom-2 right-2 bg-black/75 text-white text-xs px-2 py-0.5 rounded font-mono z-10">
                        Playlist
                      </div>
                    </div>

                    {/* Video Info */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <div className="text-xs font-semibold text-primary uppercase tracking-wider">
                          {video.level}
                        </div>
                        <h3 className="font-bold text-lg text-foreground line-clamp-2 mt-1 leading-snug group-hover:text-primary transition-colors">
                          {video.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mt-2 leading-relaxed">
                          {video.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* German Flag Divider */}
      <div className="w-full h-[5px] flex">
        <div className="flex-1 bg-black" />
        <div className="flex-1 bg-[#E30613]" />
        <div className="flex-1 bg-[#FFED00]" />
      </div>

      {/* Photo Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 md:top-6 md:right-6 text-white/75 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrevPhoto}
              className="absolute left-4 md:left-6 text-white/75 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNextPhoto}
              className="absolute right-4 md:right-6 text-white/75 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredPhotos[lightboxIndex].url}
                alt={filteredPhotos[lightboxIndex].title}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="text-center mt-4 text-white max-w-xl px-4">
                <h4 className="text-xl font-bold text-primary">{filteredPhotos[lightboxIndex].title}</h4>
                <p className="text-sm text-white/80 mt-1">{filteredPhotos[lightboxIndex].description}</p>
                <span className="inline-block mt-2 text-xs text-white/50 bg-white/10 px-2 py-0.5 rounded-full">
                  {lightboxIndex + 1} / {filteredPhotos.length}
                </span>
              </div>
            </motion.div>

            {/* Background Click to Close */}
            <div className="absolute inset-0" onClick={() => setLightboxIndex(null)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Player Modal */}
      <AnimatePresence>
        {activeVideoId !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-8"
            onClick={() => setActiveVideoId(null)}
          >
            {(() => {
              const activeVideo = videos.find(v => v.id === activeVideoId);
              if (!activeVideo) return null;

              return (
                <div 
                  className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10 z-10" 
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setActiveVideoId(null)}
                    className="absolute top-4 right-4 text-white/75 hover:text-white bg-black/60 hover:bg-black/80 p-2 rounded-full transition-colors z-20"
                    aria-label="Close video"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  {activeVideo.type === "local" ? (
                    <video
                      src={activeVideo.url}
                      controls
                      autoPlay
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <iframe
                      src={activeVideo.url.includes("?") ? `${activeVideo.url}&autoplay=1&rel=0` : `${activeVideo.url}?autoplay=1&rel=0`}
                      title={activeVideo.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full border-0"
                    ></iframe>
                  )}
                </div>
              );
            })()}
            {/* Background Click to Close */}
            <div className="absolute inset-0" onClick={() => setActiveVideoId(null)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
