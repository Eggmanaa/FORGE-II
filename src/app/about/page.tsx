import Link from "next/link";
import { ArrowRight, Brain, CalendarDays, Clock, Cross, GraduationCap, MessagesSquare, Users } from "lucide-react";

export const metadata = { title: "About | FORGE" };

const delivery = [
  { icon: GraduationCap, label: "Who", value: "Every student, grades 9 to 12" },
  { icon: CalendarDays, label: "How often", value: "Two sessions per grade, each year" },
  { icon: Clock, label: "Length", value: "45 minutes, in Theology class" },
  {
    icon: MessagesSquare,
    label: "Format",
    value: "Small-group discussion, video, role-play, and embodied practices of self-mastery",
  },
];

const standards = [
  {
    title: "The Virtue Tradition",
    text: "Each session is anchored in one or more of the cardinal virtues (prudence, justice, fortitude, temperance), the theological virtues (faith, hope, charity), or the foundational habits of self-knowledge and humility.",
  },
  {
    title: "NSBECS",
    text: "Supports the National Standards and Benchmarks for Effective Catholic Schools by integrating Catholic Social Teaching and providing developmentally appropriate character formation.",
  },
  {
    title: "WCEA & WASC Accreditation",
    text: "Contributes to accreditation by delivering a standards-aligned character formation curriculum within core Theology classes, embedding Catholic identity, and cultivating a trauma-informed school culture.",
  },
];

const foundations = [
  {
    icon: Cross,
    title: "Catholic Anthropology & Virtue",
    text: "The human person as created in God's image, called to grow in virtue and holiness. Drawn from Scripture, St. Thomas Aquinas, and the Catechism.",
  },
  {
    icon: Brain,
    title: "Affective Neuroscience",
    text: "How the passions arise in the body and brain, and how reason and will can rightly order them.",
  },
  {
    icon: Users,
    title: "Attachment Theory",
    text: "How our earliest relationships shape character, and how healthy relationships help form and heal it.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <header className="bg-primary text-white">
        <div className="container mx-auto max-w-4xl py-16 md:py-24">
          <p className="eyebrow text-white/75">About the Program</p>
          <h1 className="mt-4 text-5xl font-bold md:text-6xl">About FORGE</h1>
          <p className="mt-6 text-xl leading-relaxed text-white/85">
            FORGE is a character, virtue, and leadership formation curriculum delivered to every student at Bishop
            Diego. Developed and led by the school's Personal Counselor and Dean of Students, it unites the Catholic
            virtue tradition with insights from neuroscience and attachment research to form Christ-centered leaders.
          </p>
        </div>
      </header>

      <div className="container mx-auto max-w-4xl space-y-20 py-16 md:py-24">
        <section>
          <p className="eyebrow text-primary">Mission</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Forming the whole person</h2>
          <p className="mt-5 text-lg leading-relaxed text-foreground/80">
            Grounded in the Catholic vision of integral formation, FORGE is designed to form the whole person, mind,
            heart, and spirit. Students learn to know themselves truthfully, order their passions toward the good,
            love others with charity and justice, and lead with courage.
          </p>
        </section>

        <section>
          <p className="eyebrow text-primary">Delivery Model</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">How FORGE reaches every student</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {delivery.map((d) => (
              <div key={d.label} className="flex gap-4 rounded-2xl border border-border p-5">
                <d.icon className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                <div>
                  <p className="eyebrow text-[10px] text-muted-foreground">{d.label}</p>
                  <p className="mt-1 font-semibold leading-snug">{d.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="eyebrow text-primary">Foundations</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Three pillars</h2>
          <div className="mt-8 space-y-4">
            {foundations.map((f) => (
              <div key={f.title} className="flex gap-5 rounded-2xl bg-muted/60 p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                  <f.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-xl font-bold">{f.title}</h3>
                  <p className="mt-1 leading-relaxed text-foreground/75">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="eyebrow text-primary">Standards Alignment</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Rooted in Catholic education standards</h2>
          <div className="mt-8 divide-y divide-border border-y border-border">
            {standards.map((s) => (
              <div key={s.title} className="grid gap-2 py-6 md:grid-cols-[220px_1fr] md:gap-8">
                <h3 className="text-xl font-bold text-primary">{s.title}</h3>
                <p className="leading-relaxed text-foreground/80">{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-primary p-8 text-white md:p-12">
          <p className="eyebrow text-white/75">The Goal</p>
          <p className="mt-4 font-serif text-2xl italic leading-snug md:text-3xl">
            FORGE prepares students to become servant-leaders and virtuous disciples who live out the Gospel in a
            diverse world.
          </p>
          <Link
            href="/grade-9"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-label text-sm font-bold text-primary transition-transform hover:-translate-y-0.5"
          >
            Explore the Curriculum <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </div>
    </div>
  );
}
