import raw from "./content.json";

export interface Project {
  title: string; category: string; description: string; technologies: string[];
  image: string; github: string; live: string;
  role?: string; outcome?: string; figma?: string;
}

export interface Content {
  profile: {
    name: string; role: string; tagline: string; about1: string; about2: string;
    email: string; github: string; linkedin: string; location: string;
    resume: string; availability: string; photo: string;
  };
  services: { title: string; description: string }[];
  projects: Project[];
  experience: { role: string; company: string; year: string; type: string; description: string }[];
  skills: { title: string; skills: string[] }[];
  learning: { title: string; description: string }[];
  certificates: { title: string; file: string }[];
  testimonials: { quote: string; name: string; role: string }[];
}

export const content = raw as Content;
