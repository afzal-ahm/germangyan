import { Link } from "wouter";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import logo from "@assets/GERMAN_LOGO_1780803337341.png";

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
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-white" />
                <span>Delhi, Noida</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {[
                { href: "https://instagram.com/Germangyan04", icon: Instagram },
                { href: "https://www.facebook.com/Germangyan1", icon: Facebook },
                { href: "https://www.youtube.com/c/GermanGyan", icon: Youtube },
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
