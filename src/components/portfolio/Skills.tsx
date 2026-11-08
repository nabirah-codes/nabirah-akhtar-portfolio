import { Code2, LayoutTemplate, Sparkles, Wrench, FileSpreadsheet } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SKILL_GROUPS, SOFT_SKILLS } from "@/lib/portfolio-data";

const ICONS = [Code2, LayoutTemplate, Wrench, FileSpreadsheet];

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="03 — Toolkit"
          title="Technical Skills & Expertise"
          subtitle="The languages, frameworks and tools I use to turn ideas into working, well-structured solutions."
        />

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {SKILL_GROUPS.map((group, gi) => {
            const Icon = ICONS[gi];
            return (
              <Reveal key={group.title} delay={gi * 90}>
                <article className="card-surface hover-lift group flex h-full flex-col p-7">
                  <div className="flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="rounded-full border border-border px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-wider text-muted-foreground">
                      {group.level}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-foreground">{group.title}</h3>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item, i) => (
                      <Reveal
                        as="li"
                        key={item}
                        delay={gi * 90 + 200 + i * 70}
                        className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                      >
                        {item}
                      </Reveal>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-8">
          <div className="relative overflow-hidden rounded-3xl bg-navy p-8 text-navy-foreground sm:p-10">
            <div className="bg-gradient-accent pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-30 blur-3xl" />
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-cyan" />
                <h3 className="text-lg font-semibold">Core strengths</h3>
              </div>
              <ul className="flex flex-wrap gap-2.5">
                {SOFT_SKILLS.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-navy-foreground/15 bg-navy-foreground/5 px-4 py-2 text-sm font-medium transition-colors hover:border-cyan/60 hover:text-cyan"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
