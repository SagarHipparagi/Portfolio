import { Github, Linkedin, Mail } from "lucide-react";

const SOCIAL_LINKS = [
  {
    icon: Github,
    href: "https://github.com/SagarHipparagi",
    label: "GitHub"
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/sagar-hipparagi-67a6a41b1/",
    label: "LinkedIn"
  },
  {
    icon: Mail,
    href: "mailto:sagarhipparagi9@gmail.com",
    label: "Email"
  }
];

export function Footer() {
  return (
    <footer className="mt-24 pb-12">
      <div className="flex gap-6 items-center">
        {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            aria-label={label}
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>
      <p className="mt-8 text-sm text-muted-foreground/60">
        © {new Date().getFullYear()} Sagar Hipparagi. All rights reserved.
      </p>
    </footer>
  );
}
