import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <Link href="/" className="inline-block mb-8">
          <Button variant="outline">← Back to Home</Button>
        </Link>

        <h1 className="text-5xl font-bold text-primary mb-8">About FORGE</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-3xl font-semibold text-accent mb-4">Program Overview</h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-4">
              <strong>FORGE</strong> is a comprehensive Social Emotional Learning (SEL) and leadership formation 
              curriculum delivered to all students in grades 9-12 at Bishop Diego High School. Developed and 
              facilitated by the school's Personal Counselor/Dean of Students, FORGE integrates affective 
              neuroscience, attachment theory, and Christian Theology to foster emotional resilience, 
              relational intelligence, and Christ-centered leadership.
            </p>
          </section>

          <section className="bg-card p-6 rounded-lg border border-border">
            <h2 className="text-3xl font-semibold text-accent mb-4">Mission & Standards Alignment</h2>
            <p className="text-foreground/80 mb-4">
              Grounded in the Catholic vision of integral formation, FORGE is designed to form the whole 
              person—mind, heart, and spirit. The curriculum directly supports key educational standards by 
              embedding theological principles and promoting measurable growth in students' affective and 
              interpersonal skills.
            </p>
            <div className="space-y-4 mt-6">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">CASEL's Five Core Competencies</h3>
                <p className="text-foreground/70">Each module supports development of:</p>
                <ul className="list-disc list-inside space-y-1 text-foreground/80 ml-4 mt-2">
                  <li>Self-Awareness</li>
                  <li>Self-Management</li>
                  <li>Social Awareness</li>
                  <li>Relationship Skills</li>
                  <li>Responsible Decision-Making</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">National Standards & Benchmarks</h3>
                <p className="text-foreground/80">
                  Integrates Catholic Social Teaching and provides developmentally appropriate character formation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">WCEA & WASC Accreditation</h3>
                <p className="text-foreground/80">
                  Contributes to accreditation by delivering a standards-aligned SEL curriculum integrated into 
                  core Theology classes, embedding Catholic identity, and cultivating a trauma-informed school environment.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-accent mb-4">Delivery Model</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border-2 border-primary/20 shadow-sm">
                <h4 className="font-semibold text-primary mb-2">Target Audience</h4>
                <p className="text-foreground/80">All students (Grades 9-12)</p>
              </div>
              <div className="bg-white p-4 rounded-lg border-2 border-primary/20 shadow-sm">
                <h4 className="font-semibold text-primary mb-2">Frequency</h4>
                <p className="text-foreground/80">Two 45-minute modules per grade level each academic year</p>
              </div>
              <div className="bg-white p-4 rounded-lg border-2 border-primary/20 shadow-sm">
                <h4 className="font-semibold text-primary mb-2">Setting</h4>
                <p className="text-foreground/80">Theology class periods</p>
              </div>
              <div className="bg-white p-4 rounded-lg border-2 border-primary/20 shadow-sm">
                <h4 className="font-semibold text-primary mb-2">Format</h4>
                <p className="text-foreground/80">Interactive lessons featuring small-group discussion, video clips, role-playing, and somatic-based SEL practices</p>
              </div>
            </div>
          </section>

          <section className="bg-card p-6 rounded-lg border border-border">
            <h2 className="text-3xl font-semibold text-accent mb-4">Theoretical Foundation</h2>
            <p className="text-foreground/80 mb-4">FORGE is built upon three pillars of research and practice:</p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-2xl mr-3">🧠</span>
                <div>
                  <h4 className="font-semibold text-primary">Affective Neuroscience</h4>
                  <p className="text-foreground/70">Understanding how emotions function in the brain and influence behavior</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">🤝</span>
                <div>
                  <h4 className="font-semibold text-primary">Attachment Theory</h4>
                  <p className="text-foreground/70">Exploring how relationships shape emotional development and resilience</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">✝️</span>
                <div>
                  <h4 className="font-semibold text-primary">Christian Theology</h4>
                  <p className="text-foreground/70">Grounding SEL in Catholic Social Teaching and Gospel values</p>
                </div>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-accent mb-4">Program Impact</h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-4">
              FORGE provides students with more than just emotional tools; it offers a theological and 
              psychological framework for understanding themselves and their role in the world. By developing 
              emotional literacy and self-regulation, the program enhances academic readiness and cultivates 
              a more empathetic, trauma-informed school climate.
            </p>
            <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
              <h3 className="text-xl font-semibold text-primary mb-2">Ultimate Goal</h3>
              <p className="text-foreground/80 italic">
                FORGE prepares students to become servant-leaders and emotionally intelligent disciples who 
                can live out the Gospel in a multicultural world.
              </p>
            </div>
          </section>

          <div className="pt-8 text-center">
            <Link href="/grade-9">
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                Explore the Curriculum
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
