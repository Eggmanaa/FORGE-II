import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg text-primary mb-4">FORGE Curriculum</h3>
            <p className="text-foreground/70 text-sm">
              Forging Emotional Resilience and Relational Clarity through Christ-centered 
              Social Emotional Learning.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-foreground/70 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-foreground/70 hover:text-accent transition-colors">
                  About FORGE
                </Link>
              </li>
              <li>
                <Link href="/grade-9" className="text-foreground/70 hover:text-accent transition-colors">
                  Grade 9 Curriculum
                </Link>
              </li>
              <li>
                <Link href="/grade-10" className="text-foreground/70 hover:text-accent transition-colors">
                  Grade 10 Curriculum
                </Link>
              </li>
              <li>
                <Link href="/grade-11" className="text-foreground/70 hover:text-accent transition-colors">
                  Grade 11 Curriculum
                </Link>
              </li>
              <li>
                <Link href="/grade-12" className="text-foreground/70 hover:text-accent transition-colors">
                  Grade 12 Curriculum
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg text-primary mb-4">Standards</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>• CASEL Five Core Competencies</li>
              <li>• Catholic Social Teaching</li>
              <li>• NSBECS Standards</li>
              <li>• WCEA & WASC Accreditation</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-foreground/60">
          <p>© {new Date().getFullYear()} FORGE Curriculum - Bishop Diego High School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
