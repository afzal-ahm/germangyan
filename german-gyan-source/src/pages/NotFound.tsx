import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center px-4 pt-20">
      <div className="text-8xl font-bold font-serif text-primary mb-4">404</div>
      <h1 className="text-3xl font-bold font-serif mb-4">Page Not Found</h1>
      <p className="text-muted-foreground text-lg mb-8 max-w-md">
        The page you're looking for doesn't exist. Let's get you back on track.
      </p>
      <div className="flex gap-4">
        <Button className="rounded-full px-8" asChild>
          <Link href="/">Go Home</Link>
        </Button>
        <Button variant="outline" className="rounded-full px-8" asChild>
          <Link href="/courses">View Courses</Link>
        </Button>
      </div>
    </div>
  );
}
