import type { ContactEntry } from "@/data/types";
import { Mail, Linkedin, GraduationCap, Github, Globe } from "lucide-react";

type ContactSectionProps = {
  data: ContactEntry[];
};

export function ContactSection({ data }: ContactSectionProps) {
  const getIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "email":
        return <Mail size={20} />;
      case "linkedin":
        return <Linkedin size={20} />;
      case "google scholar":
        return <GraduationCap size={20} />;
      case "github":
        return <Github size={20} />;
      default:
        return <Globe size={20} />;
    }
  };

  return (
    <div className="h-full">
      <h3 className="heading-section-sm">Contact Me</h3>
      <div className="mt-4 space-y-2">
        {data.map((entry) => (
          <a
            key={entry.value}
            href={entry.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-600 transition-colors hover:text-black"
          >
            <span className="shrink-0">{getIcon(entry.type)}</span>
            <span className="text-lg">{entry.value}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
