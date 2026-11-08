import { Award, Code2, FileSpreadsheet, GraduationCap, Terminal } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const CERTS = [
  { Icon: FileSpreadsheet, title: "Certified Expert in MS Office Suite & Office Management" },
  { Icon: Code2, title: "Frontend Web Development — React.js, HTML5, CSS3" },
  { Icon: Terminal, title: "Core Software Programming — C++ and Python" },
];

export function Education() {
  return (
    <section id="education" className="bg-card py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading eyebrow="02 — Academics" title="Education & Qualifications" />

        <ol className="relative space-y-8 border-l border-border pl-8 sm:pl-12">
          <Reveal as="li" className="relative">
            <TimelineDot>
              <GraduationCap className="h-4 w-4" />
            </TimelineDot>
            <div className="card-surface hover-lift p-7 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-full bg-accent px-3 py-1 font-mono text-xs font-medium text-accent-foreground">
                  2025 — 2029 · Expected
                </span>
                <span className="text-sm text-muted-foreground">Degree</span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-foreground sm:text-2xl">
                BS Computer Science (BSCS)
              </h3>
              <p className="mt-1.5 font-medium text-primary">Superior University, Lahore</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Building strong foundations in programming, algorithms, and software development.
              </p>
            </div>
          </Reveal>

          <Reveal as="li" className="relative" delay={100}>
            <TimelineDot>
              <Award className="h-4 w-4" />
            </TimelineDot>
            <div className="card-surface p-7 sm:p-8">
              <p className="text-sm text-muted-foreground">Certifications & Qualifications</p>
              <ul className="mt-5 grid gap-3">
                {CERTS.map(({ Icon, title }, i) => (
                  <li
                    key={title}
                    className="group flex items-center gap-4 rounded-xl border border-border bg-background p-4 transition-all duration-300 hover:border-primary/30 hover:bg-accent/60"
                  >
                    <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-card text-primary shadow-soft">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium text-foreground sm:text-base">
                      {title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </ol>
      </div>
    </section>
  );
}

function TimelineDot({ children }: { children: React.ReactNode }) {
  return (
    <span className="absolute -left-[3.05rem] top-7 hidden h-9 w-9 items-center justify-center rounded-full border-4 border-card bg-primary text-primary-foreground shadow-glow sm:flex">
      {children}
    </span>
  );
}
