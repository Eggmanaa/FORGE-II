import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Brain, Cross, Users } from "lucide-react";
import { getLessonsByGrade, grades, virtueGuide } from "@/lib/lessons";

const aims = [
  { verb: "Know", text: "themselves truthfully, as God sees them" },
  { verb: "Order", text: "their passions toward the good" },
  { verb: "Love", text: "others with charity and justice" },
  { verb: "Lead", text: "with courage as servant-leaders" },
];

const pillars = [
  {
    icon: Cross,
    title: "Catholic Anthropology",
    text: "The Church's vision of the human person and the virtue tradition of Aristotle, St. Thomas Aquinas, and the Catechism.",
  },
  {
    icon: Brain,
    title: "Affective Neuroscience",
    text: "How the passions work in the body and brain, so students can govern them rather than be governed by them.",
  },
  {
    icon: Users,
    title: "Attachment & Relationship",
    text: "How the relationships that shape us also form our character, and how grace heals and restores.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-white">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="container relative mx-auto grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="eyebrow text-white/75">Bishop García Diego High School · Grades 9 to 12</p>
            <h1 className="mt-5 text-5xl font-bold leading-[1.05] md:text-7xl">
              Forging character.
              <br />
              <span className="italic text-white/90">Forming virtue.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl">
              FORGE is a Christ-centered character, virtue, and leadership formation curriculum that walks every
              Cardinal through eight sessions over four years.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/grade-9"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-7 py-4 font-label text-sm font-bold text-primary shadow-lg transition-transform hover:-translate-y-0.5"
              >
                Explore the Curriculum <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-lg border border-white/50 px-7 py-4 font-label text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                About FORGE
              </Link>
            </div>
          </div>
          <div className="relative mx-auto hidden w-full max-w-sm lg:block">
            <div className="absolute inset-6 rounded-full bg-white/10 blur-3xl" />
            <div className="relative rounded-[2rem] bg-white p-12 shadow-2xl">
              <div className="relative mx-auto aspect-[425/535] w-full">
                <Image src="/images/forge-emblem.png" alt="FORGE emblem" fill className="object-contain" priority />
              </div>
              <p className="mt-6 text-center font-serif text-4xl font-bold tracking-[0.2em] text-foreground">FORGE</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote + aim */}
      <section className="container mx-auto py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-primary">Our Mission</p>
          <blockquote className="mt-6 font-serif text-3xl font-medium italic leading-snug md:text-4xl">
            “A virtue is an habitual and firm disposition to do the good.”
          </blockquote>
          <p className="mt-4 font-label text-sm font-semibold text-muted-foreground">Catechism of the Catholic Church, 1803</p>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-foreground/80">
            Grounded in the Catholic vision of integral formation, FORGE forms the whole person, mind, heart, and
            spirit, so that students grow into the kind of people who live out the Gospel through mature character and
            lasting virtue.
          </p>
        </div>
        <div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aims.map((a) => (
            <div key={a.verb} className="rounded-2xl border border-border p-6 transition-colors hover:border-primary">
              <p className="font-serif text-3xl font-bold text-primary">{a.verb}</p>
              <p className="mt-2 leading-relaxed text-foreground/75">{a.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Four-year journey */}
      <section className="bg-muted/60 py-20 md:py-28">
        <div className="container mx-auto">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-primary">The Four-Year Journey</p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">Eight sessions. One formation.</h2>
            <p className="mt-4 text-lg text-foreground/75">
              Each year builds on the last, from knowing the heart to the mature character of a Christian leader.
            </p>
          </div>
          <div className="relative mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div aria-hidden className="absolute left-0 right-0 top-[3.25rem] hidden h-px bg-gray-brand lg:block" />
            {grades.map((g) => {
              const ls = getLessonsByGrade(g.grade);
              const virtues = Array.from(new Set(ls.flatMap((l) => l.virtues)));
              return (
                <Link
                  key={g.grade}
                  href={`/grade-${g.grade}`}
                  className="group relative flex flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary font-serif text-2xl font-bold text-white ring-8 ring-muted/60">
                    {g.grade}
                  </span>
                  <p className="eyebrow mt-6 text-muted-foreground">Grade {g.grade}</p>
                  <h3 className="mt-1 text-2xl font-bold group-hover:text-primary">{g.theme}</h3>
                  <ul className="mt-4 space-y-1.5 text-sm text-foreground/75">
                    {ls.map((l) => (
                      <li key={l.id} className="flex gap-2">
                        <BookOpen className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                        {l.title}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {virtues.map((v) => (
                      <span key={v} className="rounded-full bg-primary/[0.07] px-2.5 py-0.5 font-label text-[11px] font-semibold text-primary">
                        {v}
                      </span>
                    ))}
                  </div>
                  <span className="mt-auto flex items-center gap-1 pt-6 font-label text-sm font-semibold text-primary">
                    View sessions <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Virtues */}
      <section className="container mx-auto py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <p className="eyebrow text-primary">The Virtues We Forge</p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">Habits of the heart, built to last.</h2>
            <p className="mt-5 text-lg leading-relaxed text-foreground/75">
              Every FORGE session names the virtues it forms. Students learn the four cardinal virtues, the three
              theological virtues, and the foundational habits of self-knowledge and humility that make growth
              possible.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {virtueGuide
              .filter((v) => v.name !== "Self-Mastery")
              .map((v) => (
                <div key={v.name} className="bg-white p-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-xl font-bold">{v.name}</h3>
                    <span className="eyebrow text-[10px] text-primary">{v.kind}</span>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-foreground/70">{v.definition}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-t border-border bg-muted/60 py-20">
        <div className="container mx-auto">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-primary">Foundations</p>
            <h2 className="mt-4 text-4xl font-bold">Faith and reason, working together</h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-2xl bg-white p-7 shadow-sm">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                  <p.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-bold">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-foreground/75">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
