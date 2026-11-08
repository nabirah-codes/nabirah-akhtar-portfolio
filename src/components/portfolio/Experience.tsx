import { Briefcase, CheckCircle2, Info } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const RESPONSIBILITIES = [
  "Designed and built modern, responsive web page components using React.js, HTML5, and CSS3.",
  "Utilized advanced MS Office tools to manage administrative records and prepare professional reports.",
  "Optimized data handling and documentation workflows.",
  "Managed codebase versions using Git.",
  "Maintained clean software structures and effective project documentation.",
];

export function Experience() {
  return (
    <section id="experience" className="bg-card py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading eyebrow="04 — Journey" title="Professional Experience" />

        <Reveal>
          <article className="card-surface hover-lift overflow-hidden">
            <div className="grid md:grid-cols-[16rem_1fr]">
              <aside className="flex flex-col gap-5 border-b border-border bg-background p-7 md:border-b-0 md:border-r sm:p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-glow">
                  <Briefcase className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-mono text-sm font-medium text-primary">2023 — Present</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Self-Employed / University Projects
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                    Freelance
                  </span>
                  <span className="rounded-full bg-cyan-soft px-3 py-1 text-xs font-semibold text-foreground">
                    Academic
                  </span>
                </div>
              </aside>

              <div className="p-7 sm:p-9">
                <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                  Frontend Developer & Admin Assistant
                </h3>
                <p className="mt-1.5 font-medium text-primary">Freelance / Academic Projects</p>

                <ul className="mt-7 space-y-4">
                  {RESPONSIBILITIES.map((item) => (
                    <li key={item} className="flex gap-3 text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-8 flex items-start gap-2.5 rounded-xl border border-border bg-background p-4 text-sm text-muted-foreground">
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  This experience comes from self-employed freelance work and university projects,
                  not formal corporate employment.
                </p>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
