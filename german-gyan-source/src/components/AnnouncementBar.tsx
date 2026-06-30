import { useState } from "react";
import { Link } from "wouter";
import { X } from "lucide-react";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="bg-primary text-primary-foreground text-center text-sm py-2 px-4 relative">
      <span>
        🎉 New batch starting soon! Book a{" "}
        <Link href="/contact" className="underline font-semibold hover:no-underline">
          Free Demo Class
        </Link>{" "}
        today.
      </span>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 opacity-80 hover:opacity-100"
        aria-label="Close"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
