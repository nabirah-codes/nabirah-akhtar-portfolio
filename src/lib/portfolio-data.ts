import portfolioImg from "@/assets/project-portfolio.jpg";
import managementImg from "@/assets/project-management.jpg";
import webappImg from "@/assets/project-webapp.jpg";

export const PROFILE = {
  name: "Nabirah Akhtar",
  photo: "https://i.postimg.cc/hjLK3XK2/my-photo-PROF.jpg",
  email: "nabirahakhtar@gmail.com",
  phone: "+92 306 3666274",
  phoneHref: "tel:+923063666274",
  location: "Lahore, Pakistan",
  // Placeholder — replace with the real LinkedIn profile URL before publishing.
  linkedin: "https://www.linkedin.com/in/nabirah-akhtar-b506aa448",
  github: "https://github.com/nabirah-codes",
};

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
] as const;

export const SKILL_GROUPS = [
  {
    title: "Programming Languages",
    level: "Core programming",
    items: ["C++", "Python", "JavaScript"],
  },
  {
    title: "Frontend Development",
    level: "Hands-on",
    items: ["React.js", "HTML5", "CSS3", "Responsive Web Design"],
  },
  {
    title: "Developer Tools",
    level: "Everyday workflow",
    items: ["Git", "GitHub", "VS Code", "Framer AI"],
  },
  {
    title: "Office & Productivity",
    level: "Certified",
    items: ["MS Word", "MS Excel", "MS PowerPoint", "Office Management"],
  },
] as const;

export const SOFT_SKILLS = [
  "Technical Problem Solving",
  "Algorithmic Logic",
  "AI Tools Integration",
  "Communication",
  "Workflow Management",
];

export const PROJECTS = [
  {
    number: "01",
    title: "Personal Portfolio Website",
    category: "Personal Project",
    tech: ["React.js", "Framer", "HTML5", "CSS3"],
    description:
      "A modern, responsive personal portfolio designed to showcase my professional identity, technical skills, services, and development journey through an elegant user interface.",
    image: portfolioImg,
    alt: "Illustrative mockup of a portfolio website on a laptop and phone",
  },
  {
    number: "02",
    title: "Student & Office Management System",
    category: "Academic Project",
    tech: ["C++", "MS Office Suite"],
    description:
      "An academic software project focused on understanding student record organization, administrative management, and programming-based solutions for everyday tasks.",
    image: managementImg,
    alt: "Illustrative mockup of a student records management dashboard",
  },
  {
    number: "03",
    title: "Interactive Web Application",
    category: "Learning Project",
    tech: ["Python", "JavaScript"],
    description:
      "A programming-focused learning project exploring application logic, dynamic interactions, problem-solving, and the development of intuitive digital experiences.",
    image: webappImg,
    alt: "Illustrative mockup of a coding workspace next to an app interface",
  },
] as const;
