import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PROFILE } from "@/lib/portfolio-data";
import { buildMailto, contactSchema, type ContactInput } from "@/lib/contact";
import { GithubIcon, LinkedinIcon } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const CONTACTS = [
  { Icon: Mail, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { Icon: Phone, label: "Phone", value: PROFILE.phone, href: PROFILE.phoneHref },
  { Icon: LinkedinIcon, label: "LinkedIn", value: "Nabirah Akhtar", href: PROFILE.linkedin, external: true },
  { Icon: GithubIcon, label: "GitHub", value: "nabirah-codes", href: PROFILE.github, external: true },
];

type Errors = Partial<Record<keyof ContactInput, string>>;

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const raw = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const result = contactSchema.safeParse(raw);
    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof ContactInput;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      setSent(false);
      return;
    }
    setErrors({});
    window.location.href = buildMailto(PROFILE.email, result.data);
    setSent(true);
    form.reset();
  }

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="07 — Contact"
          title="Let's Work Together"
          subtitle="Have a project in mind or an opportunity to discuss? I'd love to hear from you."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.35fr]">
          <Reveal>
            <div className="relative h-full overflow-hidden rounded-3xl bg-navy p-8 text-navy-foreground sm:p-10">
              <div className="bg-gradient-accent pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full opacity-30 blur-3xl" />
              <div className="relative">
                <h3 className="text-2xl font-bold">Get in touch</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-foreground/70">
                  Available for freelance projects, internships and collaborations.
                </p>

                <ul className="mt-9 space-y-3">
                  {CONTACTS.map(({ Icon, label, value, href, external }) => (
                    <li key={label}>
                      <a
                        href={href}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="group flex items-center gap-4 rounded-2xl border border-navy-foreground/10 bg-navy-foreground/5 p-4 transition-all duration-300 hover:border-cyan/50 hover:bg-navy-foreground/10"
                      >
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-foreground/10 text-cyan">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-xs uppercase tracking-wider text-navy-foreground/55">
                            {label}
                          </span>
                          <span className="block truncate font-medium transition-colors group-hover:text-cyan">
                            {value}
                          </span>
                        </span>
                      </a>
                    </li>
                  ))}
                  <li className="flex items-center gap-4 p-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-foreground/10 text-cyan">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-navy-foreground/55">
                        Location
                      </span>
                      <span className="block font-medium">{PROFILE.location}</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              noValidate
              onSubmit={onSubmit}
              className="card-surface h-full p-7 sm:p-10"
              aria-label="Contact form"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" name="name" error={errors.name}>
                  <Input id="name" name="name" autoComplete="name" placeholder="Your name" maxLength={100} />
                </Field>
                <Field label="Email Address" name="email" error={errors.email}>
                  <Input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" maxLength={255} />
                </Field>
              </div>
              <div className="mt-5">
                <Field label="Subject" name="subject" error={errors.subject}>
                  <Input id="subject" name="subject" placeholder="What's this about?" maxLength={150} />
                </Field>
              </div>
              <div className="mt-5">
                <Field label="Message" name="message" error={errors.message}>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell me about your project or opportunity…"
                    maxLength={2000}
                    className="resize-none"
                  />
                </Field>
              </div>

              <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <Button type="submit" variant="hero" size="xl" className="group w-full sm:w-auto">
                  Send Message
                  <Send className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
                {sent && (
                  <p role="status" className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Your email app opened with the message ready to send.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="text-sm font-semibold text-foreground">
        {label}
      </Label>
      <div className="[&_input]:h-12 [&_input]:rounded-xl [&_input]:bg-background [&_textarea]:rounded-xl [&_textarea]:bg-background [&_input]:px-4 [&_textarea]:px-4 [&_textarea]:py-3">
        {children}
      </div>
      {error && (
        <p className="text-xs font-medium text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
