import { FileText, LayoutGrid, MonitorSmartphone, Presentation, Table2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const SERVICES = [
  {
    Icon: LayoutGrid,
    title: "Frontend Web Development",
    text: "Building clean, dynamic, and modern single-page applications and web interfaces using React.js, HTML5, and CSS3.",
  },
  {
    Icon: MonitorSmartphone,
    title: "Responsive Website Design",
    text: "Designing mobile-friendly, fully responsive website layouts tailored for desktop, tablet, and mobile screens.",
  },
  {
    Icon: FileText,
    title: "Document Formatting & Management",
    text: "Structuring professional corporate documents, academic reports, and data sheets using advanced MS Word formatting techniques.",
  },
  {
    Icon: Presentation,
    title: "PowerPoint Presentation Design",
    text: "Creating visually compelling, structured, and high-impact pitch decks and academic presentations using MS PowerPoint.",
  },
  {
    Icon: Table2,
    title: "Office Workflow & Data Management",
    text: "Organizing spreadsheets, streamlining administrative tasks, and setting up efficient data entry workflows using MS Excel and office utilities.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-card py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="06 — Services"
          title="What I Can Do For You"
          subtitle="Focused, reliable help for web projects, documents, presentations and everyday office workflows."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {SERVICES.map(({ Icon, title, text }, i) => (
            <Reveal
              key={title}
              delay={(i % 3) * 90}
              className={i < 3 ? "lg:col-span-2" : "lg:col-span-3"}
            >
              <article className="card-surface hover-lift group relative h-full overflow-hidden bg-background p-8">
                <span className="absolute right-6 top-6 font-mono text-xs text-muted-foreground">
                  0{i + 1}
                </span>
                <span className="flex h-13 w-13 items-center justify-center rounded-2xl border border-border bg-card text-primary shadow-soft transition-all duration-300 group-hover:-rotate-6 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-7 text-lg font-bold text-foreground">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                <span className="bg-gradient-accent absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
