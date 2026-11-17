import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Cross, Download, FileText, Headphones } from "lucide-react";
import { AudioPlayer } from "@/components/AudioPlayer";
import { getGradeInfo, getLessonsByGrade, grades, type Lesson } from "@/lib/lessons";
import { cn } from "@/lib/utils";

export function GradePage({ grade }: { grade: number }) {
  const info = getGradeInfo(grade);
  const lessons = getLessonsByGrade(grade);
  const idx = grades.findIndex((g) => g.grade === grade);
  const prev = grades[idx - 1];
  const next = grades[idx + 1];
  const virtues = Array.from(new Set(lessons.flatMap((l) => l.virtues)));

  return (
    <div>
      {/* Header */}
      <header className="relative overflow-hidden bg-primary text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-6 -top-10 select-none font-serif text-[16rem] font-bold leading-none text-white/[0.07] md:text-[22rem]"
        >
          {grade}
        </div>
        <div className="container relative mx-auto py-14 md:py-20">
          <div className="mb-8 flex flex-wrap gap-2">
            {grades.map((g) => (
              <Link
                key={g.grade}
                href={`/grade-${g.grade}`}
                className={cn(
                  "rounded-full border px-4 py-1.5 font-label text-xs font-semibold transition-colors",
                  g.grade === grade
                    ? "border-white bg-white text-primary"
                    : "border-white/40 text-white/85 hover:border-white hover:bg-white/10",
                )}
              >
                Grade {g.grade}
              </Link>
            ))}
          </div>
          <p className="eyebrow text-white/75">Grade {grade} · Two Sessions</p>
          <h1 className="mt-3 text-4xl font-bold md:text-6xl">{info?.theme}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">{info?.summary}</p>
          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span className="eyebrow mr-1 text-white/70">Virtues formed</span>
            {virtues.map((v) => (
              <span key={v} className="rounded-full bg-white/15 px-3 py-1 font-label text-xs font-semibold">
                {v}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Lessons */}
      <div className="bg-muted/50">
        <div className="container mx-auto max-w-5xl space-y-10 py-14 md:py-20">
          {lessons.map((lesson, i) => (
            <LessonCard key={lesson.id} lesson={lesson} index={i + 1} />
          ))}
        </div>
      </div>

      {/* Prev / next */}
      <div className="container mx-auto max-w-5xl py-12">
        <div className="grid gap-4 sm:grid-cols-2">
          {prev ? (
            <Link
              href={`/grade-${prev.grade}`}
              className="group rounded-2xl border border-border p-6 transition-colors hover:border-primary"
            >
              <span className="eyebrow flex items-center gap-2 text-muted-foreground">
                <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" /> Grade {prev.grade}
              </span>
              <span className="mt-2 block font-serif text-2xl font-semibold group-hover:text-primary">{prev.theme}</span>
            </Link>
          ) : (
            <Link
              href="/"
              className="group rounded-2xl border border-border p-6 transition-colors hover:border-primary"
            >
              <span className="eyebrow flex items-center gap-2 text-muted-foreground">
                <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" /> Home
              </span>
              <span className="mt-2 block font-serif text-2xl font-semibold group-hover:text-primary">Program Overview</span>
            </Link>
          )}
          {next && (
            <Link
              href={`/grade-${next.grade}`}
              className="group rounded-2xl border border-border p-6 text-right transition-colors hover:border-primary sm:col-start-2"
            >
              <span className="eyebrow flex items-center justify-end gap-2 text-muted-foreground">
                Grade {next.grade} <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="mt-2 block font-serif text-2xl font-semibold group-hover:text-primary">{next.theme}</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

function LessonCard({ lesson, index }: { lesson: Lesson; index: number }) {
  return (
    <article id={`session-${lesson.id}`} className="scroll-mt-28 overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
      <div className="grid md:grid-cols-[1fr_300px]">
        {/* Main */}
        <div className="p-6 md:p-10">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-label text-sm font-bold text-white">
              {lesson.id}
            </span>
            <span className="eyebrow text-primary">Session {index} of 2</span>
          </div>
          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">{lesson.title}</h2>
          <p className="mt-3 font-serif text-lg italic text-muted-foreground">{lesson.description}</p>

          <h3 className="eyebrow mt-8 font-label text-foreground/60">What students learn</h3>
          <ul className="mt-4 space-y-3">
            {lesson.keyPoints.map((point) => (
              <li key={point} className="flex gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                <span className="leading-relaxed text-foreground/85">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Side panel */}
        <aside className="space-y-6 border-t border-border bg-muted/60 p-6 md:border-l md:border-t-0 md:p-8">
          <div>
            <h3 className="eyebrow font-label text-foreground/60">Virtue Focus</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {lesson.virtues.map((v) => (
                <span
                  key={v}
                  className="rounded-full border border-primary/25 bg-white px-3 py-1 font-label text-sm font-semibold text-primary"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="eyebrow font-label text-foreground/60">Catholic Social Teaching</h3>
            <p className="mt-3 flex items-start gap-2 font-serif text-lg font-semibold leading-snug">
              <Cross className="mt-1 h-4 w-4 shrink-0 text-primary" />
              {lesson.cstLens}
            </p>
          </div>
        </aside>
      </div>

      {/* Materials */}
      <div className="border-t border-border p-6 md:px-10 md:py-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
          <div className="flex-1">
            <h3 className="eyebrow mb-3 flex items-center gap-2 font-label text-foreground/60">
              <Headphones className="h-3.5 w-3.5" /> Audio Lesson
            </h3>
            {lesson.audioFile ? (
              <AudioPlayer audioUrl={lesson.audioFile} title={lesson.title} />
            ) : (
              <p className="rounded-xl border border-dashed border-border p-4 text-sm text-muted-foreground">
                Audio coming soon
              </p>
            )}
          </div>
          <div className="flex flex-row gap-3 lg:flex-col lg:pt-7">
            <a
              href={lesson.pptxFile}
              download
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 font-label text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary/90"
            >
              <FileText className="h-4 w-4" /> Slides (.pptx)
            </a>
            {lesson.audioFile && (
              <a
                href={lesson.audioFile}
                download
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-foreground/20 bg-white px-5 py-3 font-label text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Download className="h-4 w-4" /> Audio (.mp3)
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
