"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="relative w-12 h-12">
              <Image
                src="/images/Forge Logo.jpg"
                alt="FORGE Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-primary">FORGE</span>
              <span className="text-xs text-muted-foreground hidden sm:block">Curriculum</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-foreground/80 hover:text-primary font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-foreground/80 hover:text-primary font-medium transition-colors">
              About
            </Link>
            <div className="h-6 w-px bg-border" />
            <Link href="/grade-9" className="text-foreground/80 hover:text-accent font-medium transition-colors">
              Grade 9
            </Link>
            <Link href="/grade-10" className="text-foreground/80 hover:text-accent font-medium transition-colors">
              Grade 10
            </Link>
            <Link href="/grade-11" className="text-foreground/80 hover:text-accent font-medium transition-colors">
              Grade 11
            </Link>
            <Link href="/grade-12" className="text-foreground/80 hover:text-accent font-medium transition-colors">
              Grade 12
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground/80 hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-foreground/80 hover:text-primary font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-foreground/80 hover:text-primary font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <div className="h-px bg-border my-2" />
              <Link
                href="/grade-9"
                className="text-foreground/80 hover:text-accent font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Grade 9
              </Link>
              <Link
                href="/grade-10"
                className="text-foreground/80 hover:text-accent font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Grade 10
              </Link>
              <Link
                href="/grade-11"
                className="text-foreground/80 hover:text-accent font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Grade 11
              </Link>
              <Link
                href="/grade-12"
                className="text-foreground/80 hover:text-accent font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Grade 12
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
