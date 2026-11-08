import { Code2, GraduationCap, Lightbulb } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const HIGHLIGHTS = [
  {
    Icon: GraduationCap,
    title: "Computer Science Student",
    text: "BSCS at Superior University, Lahore.",
  },
  {
    Icon: Code2,
    title: "Frontend Developer",
    text: "React.js, HTML5, CSS3 and responsive UI.",
  },
  {
    Icon: Lightbulb,
    title: "Digital Solutions Enthusiast",
    text: "Practical tools, AI workflows and productivity.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="01 — Introduction" title="About Me" />

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <Reveal className="space-y-5 text-base leading-[1.85] text-muted-foreground md:text-lg">
            <p>
              I am a Computer Science student at{" "}
              <strong className="font-semibold text-foreground">Superior University, Lahore</strong>
              , driven by a strong passion for technology, software development, and modern
              problem-solving.
            </p>
            <p>
              My technical toolkit includes hands-on experience with{" "}
              <strong className="font-semibold text-foreground">React.js, C++, and Python</strong>,
              alongside certified expertise in MS Office Suite and administrative workflow
              management.
            </p>
            <p>
              I enjoy bridging the gap between clean frontend user experiences, core programming
              logic, and practical digital tools. I am particularly interested in modern web
              development, exploring AI tools to streamline workflows, and building intuitive
              digital solutions that solve real-world problems.
            </p>
            <p>
              My ambition is to become a successful{" "}
              <strong className="font-semibold text-foreground">
                Full-Stack Software Engineer / Frontend Specialist
              </strong>
              , creating impactful and scalable applications using modern web technologies.
            </p>
          </Reveal>

          <div className="grid gap-4 self-start">
            {HIGHLIGHTS.map(({ Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 100}>
                <div className="card-surface hover-lift flex items-center gap-5 p-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">{title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
