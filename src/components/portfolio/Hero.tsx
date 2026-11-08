import { ArrowRight, Atom, Braces, Code2, MapPin, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PROFILE } from "@/lib/portfolio-data";
import { GithubIcon, LinkedinIcon } from "./icons";
import { cn } from "@/lib/utils";

const FLOATING = [
  { label: "React", Icon: Atom, pos: "left-[-6%] top-[12%]", delay: "0s" },
  { label: "Python", Icon: Terminal, pos: "right-[-8%] top-[22%]", delay: "1.2s" },
  { label: "C++", Icon: Braces, pos: "left-[-2%] bottom-[14%]", delay: "2.1s" },
  { label: "JavaScript", Icon: Code2, pos: "right-[-4%] bottom-[6%]", delay: "0.6s" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 md:pb-28">
      <div className="dot-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-soft">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
            </span>
            Open to freelance work & internships
          </div>

          <h1 className="animate-in fade-in slide-in-from-bottom-6 duration-700 mt-7 text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl xl:text-[4.25rem]">
            Hi, I'm <span className="text-gradient">Nabirah Akhtar</span>
          </h1>

          <p className="animate-in fade-in slide-in-from-bottom-6 duration-700 mt-6 text-base font-semibold text-foreground/80 sm:text-lg">
            Computer Science Student <span className="text-primary">|</span> Frontend Developer{" "}
            <span className="text-primary">|</span> Aspiring Software Engineer
          </p>

          <p className="animate-in fade-in slide-in-from-bottom-6 duration-1000 mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
            I build modern, responsive digital experiences by combining clean frontend design,
            strong programming fundamentals, and practical technology solutions.
          </p>

          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Button asChild variant="hero" size="xl" className="group w-full sm:w-auto">
              <a href="#projects">
                Explore My Work
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild variant="heroOutline" size="xl" className="w-full sm:w-auto">
              <a href="#contact">Let's Connect</a>
            </Button>
          </div>

          <div className="mt-10 flex items-center justify-center gap-5 lg:justify-start">
            <div className="flex items-center gap-2">
              <SocialLink href={PROFILE.github} label="GitHub">
                <GithubIcon className="h-5 w-5" />
              </SocialLink>
              <SocialLink href={PROFILE.linkedin} label="LinkedIn">
                <LinkedinIcon className="h-[1.1rem] w-[1.1rem]" />
              </SocialLink>
            </div>
            <span className="h-6 w-px bg-border" />
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              {PROFILE.location}
            </span>
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2">
          <div className="relative aspect-square w-72 sm:w-[22rem] lg:w-[25rem]">
            <div className="glow-pulse bg-gradient-accent absolute -inset-6 rounded-full opacity-60 blur-3xl" />
            <div className="profile-ring absolute -inset-[5px] rounded-full" />
            <div className="absolute inset-0 rounded-full bg-background p-2">
              <img
                src={PROFILE.photo}
                alt="Portrait of Nabirah Akhtar"
                width={600}
                height={800}
                fetchPriority="high"
                className="h-full w-full rounded-full object-cover object-[50%_0%]"
              />
            </div>

            {FLOATING.map(({ label, Icon, pos, delay }) => (
              <div
                key={label}
                className={cn(
                  "glass float-slow absolute hidden items-center gap-2 rounded-2xl px-3.5 py-2.5 text-sm font-semibold text-foreground shadow-lift sm:flex",
                  pos,
                )}
                style={{ animationDelay: delay }}
                aria-hidden="true"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent text-primary">
                  <Icon className="h-4 w-4" />
                </span>
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
    >
      {children}
    </a>
  );
}
