import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Preloader from "@/components/Preloader";

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}
import Home from "@/pages/Home";
import About from "@/pages/About";
import Courses from "@/pages/Courses";
import Instructor from "@/pages/Instructor";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";
import Internship from "@/pages/Internship";
import A1Course from "@/pages/courses/A1Course";
import A2Course from "@/pages/courses/A2Course";
import B1Course from "@/pages/courses/B1Course";
import B2Course from "@/pages/courses/B2Course";
import C1Course from "@/pages/courses/C1Course";
import C2Course from "@/pages/courses/C2Course";
import TeacherTraining from "@/pages/courses/TeacherTraining";
import BrushupCourse from "@/pages/courses/BrushupCourse";
import BrushUpClasses from "@/pages/courses/BrushUpClasses";
import OneToOne from "@/pages/courses/OneToOne";
import CorporateTraining from "@/pages/courses/CorporateTraining";
import SchoolPrograms from "@/pages/courses/SchoolPrograms";
import SpeakingPractice from "@/pages/courses/SpeakingPractice";
import ExamPreparation from "@/pages/courses/ExamPreparation";
import AusbildungCourse from "@/pages/courses/AusbildungCourse";
import CVWritingService from "@/pages/courses/CVWritingService";
import InterviewPrep from "@/pages/courses/InterviewPrep";
import AusbildungPrep from "@/pages/courses/AusbildungPrep";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/courses" component={Courses} />
      <Route path="/courses/a1-level-german-course" component={A1Course} />
      <Route path="/courses/a2-level-german-course" component={A2Course} />
      <Route path="/courses/b1-level-german-course" component={B1Course} />
      <Route path="/courses/b2-level-german-course" component={B2Course} />
      <Route path="/courses/c1-level-german-course" component={C1Course} />
      <Route path="/courses/c2-level-german-course" component={C2Course} />
      <Route path="/courses/german-teacher-training-program" component={TeacherTraining} />
      <Route path="/courses/german-brushup-course" component={BrushupCourse} />
      <Route path="/courses/german-brush-up-classes" component={BrushUpClasses} />
      <Route path="/courses/one-to-one-german-sessions" component={OneToOne} />
      <Route path="/courses/corporate-training" component={CorporateTraining} />
      <Route path="/courses/school-german-programs" component={SchoolPrograms} />
      <Route path="/courses/german-speaking-practice-sessions" component={SpeakingPractice} />
      <Route path="/courses/german-exam-preparation-sessions" component={ExamPreparation} />
      <Route path="/courses/german-for-ausbildung-in-germany" component={AusbildungCourse} />
      <Route path="/courses/german-cv-cover-letter-writing-service" component={CVWritingService} />
      <Route path="/courses/german-job-interview-preparation-program" component={InterviewPrep} />
      <Route path="/courses/ausbildung-interview-preparation-program" component={AusbildungPrep} />
      <Route path="/instructor" component={Instructor} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/contact" component={Contact} />
      <Route path="/internship" component={Internship} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <ScrollToTop />
          <div className="flex flex-col min-h-[100dvh]">
            <Navbar />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
          </div>
        </WouterRouter>
        <Preloader />
        <WhatsAppButton />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
