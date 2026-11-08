import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, subtitle, align = "center" }: Props) {
  return (
    <Reveal
      className={cn(
        "mb-14 max-w-2xl md:mb-16",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
