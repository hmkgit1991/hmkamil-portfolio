import { useState, type FormEvent } from "react";
import { Check, Copy, Mail } from "lucide-react";
import { toast } from "sonner";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const STORAGE_KEY = "kamil-portfolio-notes";

type Note = {
  name: string;
  email: string;
  company: string;
  message: string;
  at: string;
};

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  function copyEmail() {
    void navigator.clipboard.writeText(site.email).then(() => {
      setCopied(true);
      toast.success("Email copied");
      window.setTimeout(() => setCopied(false), 1600);
    });
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Name, email, and a note are required.");
      return;
    }

    const note: Note = { ...form, at: new Date().toISOString() };
    try {
      const existing = JSON.parse(
        localStorage.getItem(STORAGE_KEY) ?? "[]",
      ) as Note[];
      localStorage.setItem(STORAGE_KEY, JSON.stringify([note, ...existing].slice(0, 20)));
    } catch {
      /* ignore quota */
    }

    const subject = encodeURIComponent(
      `Note from ${form.name}${form.company ? ` · ${form.company}` : ""}`,
    );
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}${form.company ? `\n${form.company}` : ""}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
    toast.success("Opening your mail app.");
  }

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
            05 — Contact
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            Write. I read it.
          </h2>
          <p className="mt-4 max-w-md text-muted">
            Dhaka-based. Immediate. On-site and hybrid first. Remote when the
            work and the pay are real.
          </p>

          <dl className="mt-10 space-y-5">
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-subtle">
                Email
              </dt>
              <dd className="mt-1 flex flex-wrap items-center gap-2">
                <a
                  href={`mailto:${site.email}`}
                  className="text-fg transition-colors hover:text-accent"
                >
                  {site.email}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex size-11 items-center justify-center rounded-md text-muted transition-colors hover:text-fg"
                  aria-label="Copy email"
                >
                  {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                </button>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-subtle">
                Phone
              </dt>
              <dd className="mt-1">
                <a href={site.phoneHref} className="text-fg hover:text-accent">
                  {site.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-subtle">
                LinkedIn
              </dt>
              <dd className="mt-1">
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-fg hover:text-accent"
                >
                  {site.linkedinHandle}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-xl bg-surface p-5 shadow-border sm:p-8"
        >
          {sent ? (
            <div className="flex min-h-72 flex-col justify-center">
              <p className="font-display text-3xl text-fg">Noted.</p>
              <p className="mt-3 max-w-sm text-muted">
                If your mail app did not open, send directly to {site.email}.
              </p>
              <Button
                type="button"
                variant="secondary"
                className="mt-8 w-fit"
                onClick={() => setSent(false)}
              >
                Write another
              </Button>
            </div>
          ) : (
            <div className="grid gap-5">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  name="company"
                  autoComplete="organization"
                  value={form.company}
                  onChange={(e) =>
                    setForm({ ...form, company: e.target.value })
                  }
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Note</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full sm:w-fit">
                <Mail className="size-4" />
                Send a note
              </Button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
