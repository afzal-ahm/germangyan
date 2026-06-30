import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@assets/GERMAN_LOGO_1780803337341.png";

// Spotify SVG Component
const SpotifyIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className || "w-5 h-5"}>
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.565.387-.86.207-2.377-1.454-5.37-1.783-8.893-.982-.336.075-.668-.135-.744-.47-.076-.336.135-.668.47-.743 3.856-.88 7.15-.51 9.82 1.13.296.18.387.563.207.858zm1.225-2.72c-.227.367-.707.487-1.074.26-2.72-1.672-6.87-2.157-10.075-1.183-.413.125-.85-.107-.975-.52-.125-.413.107-.85.52-.975 3.66-1.11 8.225-.573 11.344 1.344.367.227.487.707.26 1.074zm.107-2.846C14.636 8.817 9.217 8.638 6.07 9.593c-.48.146-.98-.125-1.127-.605-.146-.48.125-.98.605-1.127 3.62-1.1 9.6-0.897 13.48 1.41.433.258.577.82.32 1.253-.258.433-.82.577-1.253.32z"/>
  </svg>
);

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/instructor", label: "Instructor" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 w-full z-50 flex flex-col">
      {/* German Flag Top Strip */}
      <div className="w-full h-[5px] flex">
        <div className="flex-1 bg-black" />
        <div className="flex-1 bg-[#E30613]" />
        <div className="flex-1 bg-[#FFED00]" />
      </div>
      <nav className="w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img src={logo} alt="German Gyan" className="h-10 w-auto object-contain" />
        </Link>

        <div className="hidden md:flex items-center gap-8 font-medium text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors hover:text-primary ${
                location === link.href ? "text-primary font-semibold" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          {/* YouTube Podcast */}
          <a
            href="http://youtube.com/c/GermanGyan"
            target="_blank"
            rel="noreferrer"
            className="border border-red-500/30 hover:border-red-500 bg-red-500/5 hover:bg-red-500/10 text-red-600 dark:text-red-400 px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all duration-300 shadow-sm group hover:scale-105"
            title="Watch German Gyan YouTube Podcast"
          >
            <Youtube className="w-4 h-4 text-red-500 group-hover:animate-pulse" />
            <span>YT Podcast</span>
          </a>

          {/* Spotify Podcast */}
          <a
            href="https://open.spotify.com/show/2fxS8DOBaRhWyepyOYHl6b?si=Q7K7syabQemRvhQzVzgCQg"
            target="_blank"
            rel="noreferrer"
            className="border border-green-500/30 hover:border-green-500 bg-green-500/5 hover:bg-green-500/10 text-green-600 dark:text-green-400 px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all duration-300 shadow-sm group hover:scale-105"
            title="Listen to German Gyan Spotify Podcast"
          >
            <SpotifyIcon className="w-4 h-4 text-green-500 group-hover:animate-pulse" />
            <span>Spotify Podcast</span>
          </a>

          <div className="h-4 w-px bg-border mx-1" />

          <Button asChild className="rounded-full">
            <Link href="/contact">Book Free Demo</Link>
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border p-4 shadow-lg flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-lg py-2 border-b border-border/50 ${
                location === link.href ? "text-primary font-bold" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          {/* Mobile Highlights */}
          <div className="grid grid-cols-2 gap-3 mt-1">
            <a
              href="http://youtube.com/c/GermanGyan"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="border border-red-500/20 bg-red-500/5 text-red-600 dark:text-red-400 px-3 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
            >
              <Youtube className="w-4 h-4 text-red-500" />
              <span>YT Podcast</span>
            </a>
            <a
              href="https://open.spotify.com/show/2fxS8DOBaRhWyepyOYHl6b?si=Q7K7syabQemRvhQzVzgCQg"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="border border-green-500/20 bg-green-500/5 text-green-600 dark:text-green-400 px-3 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
            >
              <SpotifyIcon className="w-4 h-4 text-green-500" />
              <span>Spotify Podcast</span>
            </a>
          </div>

          <Button asChild className="rounded-full mt-2 w-full">
            <Link href="/contact" onClick={() => setOpen(false)}>Book Free Demo</Link>
          </Button>
        </div>
      )}
    </nav>
    </div>
  );
}
