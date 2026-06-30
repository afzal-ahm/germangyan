import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Play, Maximize2 } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import galleryHero from "@assets/gallery-hero.png";

// Import real photos
import certificate1 from "@assets/certificate-1.jpeg";
import germanGyan2 from "@assets/german-gyan-2.jpeg";
import germanGyan from "@assets/german-gyan.jpeg";
import nidhi1 from "@assets/nidhi-1.jpeg";
import nidhi2 from "@assets/nidhi-2.jpeg";
import nidhi3 from "@assets/nidhi-3.jpeg";
import nidhi4 from "@assets/nidhi-4.jpeg";
import nidhi5 from "@assets/nidhi-5.jpeg";
import nidhi from "@assets/nidhi.jpeg";
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

// Photos Data
const photos = [
  {
    id: 1,
    url: office1,
    thumbnail: office1,
    title: "German Gyan Delhi Centre",
    description: "A look inside our main classroom and learning area.",
    category: "Centres"
  },
  {
    id: 2,
    url: nidhi1,
    thumbnail: nidhi1,
    title: "Live Classroom Lecture",
    description: "Nidhi Jain conducting an interactive session with students.",
    category: "Classes"
  },
  {
    id: 3,
    url: certificate1,
    thumbnail: certificate1,
    title: "Goethe Zertifikat Success",
    description: "Celebrating our students passing their Goethe certification exams.",
    category: "Achievements"
  },
  {
    id: 4,
    url: speaking1,
    thumbnail: speaking1,
    title: "Speaking Practice",
    description: "Active German conversation drills and pronunciation training.",
    category: "Classes"
  },
  {
    id: 5,
    url: office2,
    thumbnail: office2,
    title: "Delhi Centre Classroom",
    description: "Spacious classrooms designed for focused language learning.",
    category: "Centres"
  },
  {
    id: 6,
    url: nidhi2,
    thumbnail: nidhi2,
    title: "Grammar & Concept Session",
    description: "Breaking down complex German sentence structures.",
    category: "Classes"
  },
  {
    id: 7,
    url: speaking2,
    thumbnail: speaking2,
    title: "Interactive Speaking",
    description: "Students collaborating on conversational German exercises.",
    category: "Classes"
  },
  {
    id: 8,
    url: office3,
    thumbnail: office3,
    title: "Delhi Classroom Setup",
    description: "Our comfortable student seating and multimedia board setup.",
    category: "Centres"
  },
  {
    id: 9,
    url: germanGyan,
    thumbnail: germanGyan,
    title: "German Gyan Batch Celebration",
    description: "Celebrating batch completion and successful learning milestones.",
    category: "Events"
  },
  {
    id: 10,
    url: nidhi3,
    thumbnail: nidhi3,
    title: "Personalized Guidance",
    description: "One-on-one student counseling for higher education in Germany.",
    category: "Classes"
  },
  {
    id: 11,
    url: office4,
    thumbnail: office4,
    title: "Classroom Learning Space",
    description: "Well-equipped classrooms providing a great study atmosphere.",
    category: "Centres"
  },
  {
    id: 12,
    url: speaking3,
    thumbnail: speaking3,
    title: "Pronunciation Practice",
    description: "Dedicated drills to master German phonetics and accent.",
    category: "Classes"
  },
  {
    id: 13,
    url: office5,
    thumbnail: office5,
    title: "Noida Extension Centre",
    description: "Classroom view of our Greater Noida West study centre.",
    category: "Centres"
  },
  {
    id: 14,
    url: nidhi4,
    thumbnail: nidhi4,
    title: "Exam Preparation Workshop",
    description: "Goethe exam strategies and mock test discussion.",
    category: "Classes"
  },
  {
    id: 15,
    url: office6,
    thumbnail: office6,
    title: "Classroom Study Session",
    description: "Students working through vocabulary and reading exercises.",
    category: "Centres"
  },
  {
    id: 16,
    url: germanGyan2,
    thumbnail: germanGyan2,
    title: "Graduates and Achievers",
    description: "Our proud students holding their course completion certificates.",
    category: "Achievements"
  },
  {
    id: 17,
    url: office7,
    thumbnail: office7,
    title: "Multimedia Classroom",
    description: "Using interactive smartboards to enhance language learning.",
    category: "Centres"
  },
  {
    id: 18,
    url: nidhi5,
    thumbnail: nidhi5,
    title: "Doubt Clearing Session",
    description: "Nidhi Jain explaining grammar rules and addressing student queries.",
    category: "Classes"
  },
  {
    id: 19,
    url: office8,
    thumbnail: office8,
    title: "Delhi Centre Classrooms",
    description: "Comfortable, air-conditioned learning spaces for students.",
    category: "Centres"
  },
  {
    id: 20,
    url: office9,
    thumbnail: office9,
    title: "Student Learning Session",
    description: "Active class session focusing on German reading comprehension.",
    category: "Classes"
  },
  {
    id: 21,
    url: office10,
    thumbnail: office10,
    title: "Classroom Discussion",
    description: "Discussing German culture, lifestyle, and work opportunities.",
    category: "Classes"
  },
  {
    id: 22,
    url: office11,
    thumbnail: office11,
    title: "Evening Batch Study",
    description: "Our dedicated evening batch for working professionals.",
    category: "Classes"
  },
  {
    id: 23,
    url: office12,
    thumbnail: office12,
    title: "Noida Centre Study Space",
    description: "Modern classroom setup at our Greater Noida West location.",
    category: "Centres"
  },
  {
    id: 24,
    url: office13,
    thumbnail: office13,
    title: "Weekend Batch Class",
    description: "Weekend learning sessions designed for students and professionals.",
    category: "Classes"
  },
  {
    id: 25,
    url: office14,
    thumbnail: office14,
    title: "Listening Module Prep",
    description: "Students practicing Goethe listening exam audios.",
    category: "Classes"
  },
  {
    id: 26,
    url: office15,
    thumbnail: office15,
    title: "Delhi Centre Reception",
    description: "The welcoming lobby and reception area at our Delhi Preet Vihar centre.",
    category: "Centres"
  }
];

// Videos Data
const videos = [
  {
    id: "6Ka_3tZl6G4",
    title: "German for Beginners: Lesson 1 (Greetings & Basics)",
    description: "Learn how to greet people, introduce yourself, and master basic German phrases in this introductory lesson.",
    duration: "12:45",
    level: "Beginner (A1)"
  },
  {
    id: "s3cR14C929g",
    title: "How to Introduce Yourself in German (Sich vorstellen)",
    description: "Step-by-step guide to introducing yourself fluently for Goethe speaking exams and social conversations.",
    duration: "08:30",
    level: "Beginner (A1-A2)"
  },
  {
    id: "n8N9q-uV_2U",
    title: "Goethe A1 Speaking Exam: Full Walkthrough & Tips",
    description: "An in-depth breakdown of the Goethe A1 Speaking module, including common questions and perfect answers.",
    duration: "15:20",
    level: "Exam Prep"
  },
  {
    id: "u8-48gW2w7g",
    title: "Learn German Vocabulary: 100+ Everyday Essentials",
    description: "Expand your vocabulary rapidly with the most common and useful German words used in daily life.",
    duration: "25:10",
    level: "All Levels"
  },
  {
    id: "q3f_N7G23b4",
    title: "German Speaking Practice: Improve Fluency Fast",
    description: "Interactive exercises and pronunciation practice designed to boost your speaking confidence.",
    duration: "10:15",
    level: "Intermediate (B1)"
  },
  {
    id: "zL1aGZ2s7nI",
    title: "Mastering German Pronunciation & Umlauts",
    description: "Clear instructions on how to pronounce difficult German sounds, including Ä, Ö, Ü, and CH.",
    duration: "11:50",
    level: "All Levels"
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  // Lightbox navigation
  const handlePrevPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? photos.length - 1 : prev! - 1));
    }
  };

  const handleNextPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === photos.length - 1 ? 0 : prev! + 1));
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
  }, [lightboxIndex]);

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
            src={galleryHero}
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
          <div className="border-b border-border mb-10">
            <div className="flex gap-8">
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
            </div>
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === "photos" ? (
              <motion.div
                key="photos-grid"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="columns-1 sm:columns-2 md:columns-3 gap-6"
              >
                {photos.map((photo, index) => (
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
              </motion.div>
            ) : (
              <motion.div
                key="videos-grid"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {videos.map((video) => (
                  <div
                    key={video.id}
                    onClick={() => setActiveVideoId(video.id)}
                    className="group flex flex-col cursor-pointer overflow-hidden rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Video Thumbnail Wrapper */}
                    <div className="relative aspect-video bg-muted overflow-hidden">
                      <img
                        src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
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
                      {/* Duration Tag */}
                      <div className="absolute bottom-2 right-2 bg-black/75 text-white text-xs px-2 py-0.5 rounded font-mono">
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
          </AnimatePresence>
        </div>
      </section>

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
                src={photos[lightboxIndex].url}
                alt={photos[lightboxIndex].title}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="text-center mt-4 text-white max-w-xl px-4">
                <h4 className="text-xl font-bold text-primary">{photos[lightboxIndex].title}</h4>
                <p className="text-sm text-white/80 mt-1">{photos[lightboxIndex].description}</p>
                <span className="inline-block mt-2 text-xs text-white/50 bg-white/10 px-2 py-0.5 rounded-full">
                  {lightboxIndex + 1} / {photos.length}
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
            <div className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10 z-10" onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <button
                onClick={() => setActiveVideoId(null)}
                className="absolute top-4 right-4 text-white/75 hover:text-white bg-black/60 hover:bg-black/80 p-2 rounded-full transition-colors z-20"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>

              <iframe
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&rel=0`}
                title="German Gyan Gallery Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              ></iframe>
            </div>
            {/* Background Click to Close */}
            <div className="absolute inset-0" onClick={() => setActiveVideoId(null)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
