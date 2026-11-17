"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const mainLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

const gradeLinks = [9, 10, 11, 12].map((g) => ({ href: `/grade-${g}`, label: `Grade ${g}`, short: `${g}` }));

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.replace(/\/$/, "") === href;

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75">
      <div className="h-1 bg-primary" />
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative h-10 w-8 md:h-12 md:w-10">
              <Image src="/images/forge-emblem.png" alt="" fill className="object-contain" priority />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-serif text-2xl font-bold tracking-wide text-foreground transition-colors group-hover:text-primary">
                FORGE
              </span>
              <span className="eyebrow mt-1 hidden text-[10px] text-muted-foreground sm:block">
                Character &amp; Virtue Formation
              </span>
            </div>
          </Link>

          {/* Desktop */}
          <div className="hidden items-center gap-8 md:flex">
            {mainLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "font-label text-sm font-semibold transition-colors hover:text-primary",
                  isActive(l.href) ? "text-primary" : "text-foreground/70",
                )}
              >
                {l.label}
              </Link>
            ))}
            <div className="flex items-center gap-1 rounded-full border border-border bg-muted p-1">
              <span className="eyebrow pl-3 pr-1 text-[10px] text-muted-foreground">Grade</span>
              {gradeLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-label={l.label}
                  className={cn(
                    "flex h-8 min-w-8 items-center justify-center rounded-full px-2.5 font-label text-sm font-semibold transition-colors",
                    isActive(l.href)
                      ? "bg-primary text-white shadow-sm"
                      : "text-foreground/70 hover:bg-white hover:text-primary",
                  )}
                >
                  {l.short}
                </Link>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="rounded-md p-2 text-foreground/80 hover:bg-muted hover:text-primary md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-border py-4 md:hidden">
            <div className="flex flex-col gap-1">
              {mainLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "rounded-md px-3 py-2.5 font-label font-semibold",
                    isActive(l.href) ? "bg-primary/5 text-primary" : "text-foreground/80",
                  )}
                >
                  {l.label}
                </Link>
              ))}
              <div className="eyebrow mt-3 px-3 pb-2 text-muted-foreground">Curriculum</div>
              <div className="grid grid-cols-4 gap-2 px-3">
                {gradeLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={cn(
                      "rounded-lg border py-3 text-center font-label text-sm font-semibold",
                      isActive(l.href)
                        ? "border-primary bg-primary text-white"
                        : "border-border text-foreground/80",
                    )}
                  >
                    {l.short}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
