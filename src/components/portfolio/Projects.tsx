import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { PROJECTS } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="05 — Selected Work"
          title="Featured Projects"
          subtitle="Exploring ideas, building solutions, and turning code into meaningful digital experiences."
        />

        <div className="space-y-24 md:space-y-32">
          {PROJECTS.map((project, i) => {
            const imageRight = i % 2 === 1;
            return (
              <article
                key={project.number}
                className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14"
              >
                <Reveal
                  className={cn("lg:col-span-7", imageRight && "lg:order-2")}
                >
                  <figure className="group relative">
                    <div
                      className={cn(
                        "bg-gradient-accent absolute -inset-3 rounded-[2rem] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25",
                      )}
                    />
                    <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-lift">
                      <img
                        src={project.image}
                        alt={project.alt}
                        width={1440}
                        height={1088}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                      />
                    </div>
                    <figcaption className="glass absolute bottom-4 left-4 rounded-full px-3 py-1 text-xs font-medium text-muted-foreground shadow-soft">
                      Illustrative concept preview
                    </figcaption>
                  </figure>
                </Reveal>

                <Reveal
                  delay={120}
                  className={cn("lg:col-span-5", imageRight && "lg:order-1")}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-gradient font-mono text-5xl font-bold md:text-6xl">
                      {project.number}
                    </span>
                    <span className="h-px flex-1 bg-border" />
                    <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="mt-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-base leading-[1.8] text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-7">
                    <p className="eyebrow mb-3 text-muted-foreground">Built with</p>
                    <ul className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <li
                          key={t}
                          className="rounded-lg border border-border bg-card px-3 py-1.5 font-mono text-xs font-medium text-foreground shadow-soft"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
