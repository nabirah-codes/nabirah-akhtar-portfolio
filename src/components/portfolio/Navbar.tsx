import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass-nav border-b border-border/70 shadow-soft" : "bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-4 sm:px-8"
      >
        <a
          href="#home"
          className="text-lg font-extrabold tracking-[0.12em] text-foreground"
          onClick={() => setOpen(false)}
        >
          NABIRAH<span className="text-primary">.</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? "page" : undefined}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  active === link.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {link.label}
                {active === link.id && (
                  <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-primary" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button asChild variant="hero" size="default" className="hidden px-5 sm:inline-flex">
            <a href="#contact">Hire Me</a>
          </Button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          "glass-nav overflow-hidden border-b border-border transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-[32rem] opacity-100" : "pointer-events-none max-h-0 opacity-0",
        )}
      >
        <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-5 pb-6 pt-2 sm:px-8">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className={cn(
                  "block rounded-xl px-4 py-3 text-base font-medium transition-colors",
                  active === link.id
                    ? "bg-accent text-accent-foreground"
                    : "text-foreground hover:bg-muted",
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <Button asChild variant="hero" size="xl" className="w-full">
              <a href="#contact" onClick={() => setOpen(false)}>
                Hire Me
              </a>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
