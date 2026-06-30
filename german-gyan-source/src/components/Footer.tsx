import { Link } from "wouter";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, Twitter, Linkedin } from "lucide-react";
import logo from "@assets/GERMAN_LOGO_1780803337341.png";

// Spotify SVG Component
const SpotifyIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className || "w-5 h-5"}>
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.565.387-.86.207-2.377-1.454-5.37-1.783-8.893-.982-.336.075-.668-.135-.744-.47-.076-.336.135-.668.47-.743 3.856-.88 7.15-.51 9.82 1.13.296.18.387.563.207.858zm1.225-2.72c-.227.367-.707.487-1.074.26-2.72-1.672-6.87-2.157-10.075-1.183-.413.125-.85-.107-.975-.52-.125-.413.107-.85.52-.975 3.66-1.11 8.225-.573 11.344 1.344.367.227.487.707.26 1.074zm.107-2.846C14.636 8.817 9.217 8.638 6.07 9.593c-.48.146-.98-.125-1.127-.605-.146-.48.125-.98.605-1.127 3.62-1.1 9.6-0.897 13.48 1.41.433.258.577.82.32 1.253-.258.433-.82.577-1.253.32z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1 space-y-4">
            <div className="mb-4">
              <img
                src={logo}
                alt="German Gyan"
                className="h-12 w-auto object-contain"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">
              Empowering Indian students and professionals to achieve German fluency for career growth and global education.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/courses", label: "Courses" },
                { href: "/instructor", label: "Instructor" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/80">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-white" />
                <span>+91-96434-30783</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-white" />
                <span>contact@germangyan.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-white mt-1 shrink-0" />
                <div className="flex flex-col gap-2.5 text-xs text-secondary-foreground/80">
                  <a href="https://maps.app.goo.gl/67qRoNxHkeGn1yET7" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors leading-relaxed">
                    <strong className="text-white block mb-0.5">Delhi Branch:</strong>
                    2, COMMERCIAL COMPLEX, 301, 3rd Floor, Savitri Sadan, Preet Vihar, Delhi, 110092
                  </a>
                  <a href="https://maps.app.goo.gl/rLbyhGrwsVuvRCYr6" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors leading-relaxed">
                    <strong className="text-white block mb-0.5">Noida Branch:</strong>
                    Royal Nest, Greater Noida W Rd, Tech Zone IV, Amrapali Dream Valley, Greater Noida, Ithaira, Uttar Pradesh 201318
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "https://www.instagram.com/germangyann", icon: Instagram },
                { href: "https://www.facebook.com/Germangyan1", icon: Facebook },
                { href: "http://youtube.com/c/GermanGyan", icon: Youtube },
                { href: "https://twitter.com/Germangyan04", icon: Twitter },
                { href: "https://www.linkedin.com/company/german-gyan", icon: Linkedin },
                { href: "https://open.spotify.com/show/2fxS8DOBaRhWyepyOYHl6b?si=Q7K7syabQemRvhQzVzgCQg", icon: SpotifyIcon },
              ].map(({ href, icon: Icon }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-sm text-secondary-foreground/60 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2025 German Gyan. All rights reserved.</p>
          <p>Crafted with ❤️ for German learners across India</p>
        </div>
      </div>
    </footer>
  );
}
