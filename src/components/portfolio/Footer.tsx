import { NAV_LINKS, PROFILE } from "@/lib/portfolio-data";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_2fr] md:items-start">
          <div>
            <p className="text-lg font-extrabold tracking-[0.14em]">
              NABIRAH AKHTAR<span className="text-cyan">.</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-navy-foreground/65">
              Building digital experiences with creativity and code.
            </p>
            <div className="mt-6 flex gap-2">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-foreground/15 transition-colors hover:border-cyan hover:text-cyan"
              >
                <GithubIcon className="h-[1.1rem] w-[1.1rem]" />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-foreground/15 transition-colors hover:border-cyan hover:text-cyan"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-4">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-sm text-navy-foreground/70 transition-colors hover:text-cyan"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-navy-foreground/10 pt-6 text-xs text-navy-foreground/55 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Nabirah Akhtar. All rights reserved.</p>
          <p>Lahore, Pakistan</p>
        </div>
      </div>
    </footer>
  );
}
