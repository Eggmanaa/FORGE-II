import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
            <div className="mb-12 relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src="/images/Forge Logo.jpg"
                alt="FORGE Curriculum Logo"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/grade-9">
                <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                  Explore Curriculum
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-primary mb-8">Our Mission</h2>
            <p className="text-lg text-center text-foreground/80 mb-12 leading-relaxed">
              FORGE is a comprehensive Social Emotional Learning (SEL) and leadership formation curriculum 
              delivered to all students in grades 9-12. Integrating affective neuroscience, attachment theory, 
              and Christian Theology, FORGE fosters emotional resilience, relational intelligence, and 
              Christ-centered leadership.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-2 border-primary/20">
                <h3 className="text-xl font-semibold text-primary mb-3">Program Aim</h3>
                <p className="text-foreground/80">
                  Help students <span className="font-semibold text-accent">feel deeply</span>, <span className="font-semibold text-accent">think critically</span>, 
                  <span className="font-semibold text-accent"> relate compassionately</span>, and <span className="font-semibold text-accent">lead courageously</span>, 
                  empowering them to live out the Gospel through emotional maturity and personal virtue.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-2 border-primary/20">
                <h3 className="text-xl font-semibold text-primary mb-3">Delivery Model</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li>• <span className="font-medium">Target:</span> All students (Grades 9-12)</li>
                  <li>• <span className="font-medium">Format:</span> Two 45-minute modules per grade level</li>
                  <li>• <span className="font-medium">Setting:</span> Theology class periods</li>
                  <li>• <span className="font-medium">Approach:</span> Interactive, experiential learning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grade Levels Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">Curriculum by Grade</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[9, 10, 11, 12].map((grade) => (
              <Link key={grade} href={`/grade-${grade}`}>
                <div className="group bg-card hover:bg-accent/10 p-8 rounded-lg shadow-lg border-2 border-border hover:border-accent transition-all duration-300 cursor-pointer transform hover:scale-105">
                  <div className="text-6xl font-bold text-accent mb-4 group-hover:text-primary transition-colors">
                    {grade}
                  </div>
                  <h3 className="text-2xl font-semibold text-primary mb-2">Grade {grade}</h3>
                  <p className="text-foreground/70">
                    {grade === 9 && "Emotional Awareness & Understanding"}
                    {grade === 10 && "Managing Anxiety & Building Empathy"}
                    {grade === 11 && "Navigating Differences & Temperaments"}
                    {grade === 12 && "Character Development & Integration"}
                  </p>
                  <div className="mt-4 text-secondary font-medium group-hover:text-primary transition-colors">
                    View Lessons →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Frameworks Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">Standards & Frameworks</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl text-white">★</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">CASEL Framework</h3>
              <p className="text-foreground/70 text-sm">
                Aligned with all five core competencies: Self-Awareness, Self-Management, Social Awareness, 
                Relationship Skills, and Responsible Decision-Making
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl text-white">✝</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Catholic Social Teaching</h3>
              <p className="text-foreground/70 text-sm">
                Integrates CST themes throughout, grounded in the Catholic vision of integral formation 
                of the whole person—mind, heart, and spirit
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl text-white">🧠</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Research-Based</h3>
              <p className="text-foreground/70 text-sm">
                Built on affective neuroscience, attachment theory, and proven psychological frameworks 
                for emotional and relational development
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
