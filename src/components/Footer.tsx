import Image from "next/image";
import Link from "next/link";
import { grades } from "@/lib/lessons";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white">
                <div className="relative h-10 w-8">
                  <Image src="/images/forge-emblem.png" alt="" fill className="object-contain" />
                </div>
              </div>
              <span className="font-serif text-2xl font-bold tracking-wide">FORGE</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Forging character, virtue, and Christ-centered leadership in every Cardinal, grades 9 through 12.
            </p>
            <p className="mt-4 font-serif text-lg italic text-white">Be the Difference.</p>
          </div>
          <div>
            <h3 className="eyebrow mb-4 font-label text-white/60">Curriculum</h3>
            <ul className="space-y-2 text-sm">
              {grades.map((g) => (
                <li key={g.grade}>
                  <Link href={`/grade-${g.grade}`} className="text-white/80 transition-colors hover:text-white">
                    Grade {g.grade} <span className="text-white/50">· {g.theme}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/about" className="text-white/80 transition-colors hover:text-white">
                  About FORGE
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="eyebrow mb-4 font-label text-white/60">Grounded In</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>The Cardinal &amp; Theological Virtues</li>
              <li>Catholic Social Teaching</li>
              <li>NSBECS Standards</li>
              <li>WCEA &amp; WASC Accreditation</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-white/15 pt-6 text-xs text-white/50 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} FORGE Curriculum · Bishop García Diego High School</p>
          <p>4000 La Colina Rd, Santa Barbara, CA 93110</p>
        </div>
      </div>
    </footer>
  );
}
