import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getLessonsByGrade } from "@/lib/lessons";
import { Download } from "lucide-react";

export default function Grade12Page() {
  const lessons = getLessonsByGrade(12);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
          <Link href="/grade-11">
            <Button variant="outline">← Grade 11</Button>
          </Link>
          <Link href="/">
            <Button variant="outline">Home</Button>
          </Link>
        </div>

        <div className="mb-12">
          <h1 className="text-5xl font-bold text-primary mb-4">Grade 12 Curriculum</h1>
          <p className="text-2xl text-foreground/70">Character Development & Integration</p>
        </div>

        <div className="space-y-8">
          {lessons.map((lesson) => (
            <div
              key={lesson.id}
              className="bg-card border-2 border-border rounded-lg shadow-lg overflow-hidden hover:border-accent transition-colors"
            >
              <div className="bg-gradient-to-r from-primary to-accent p-6">
                <h2 className="text-3xl font-bold text-white mb-2">{lesson.title}</h2>
                <p className="text-white/90 text-lg">{lesson.description}</p>
              </div>
              
              <div className="p-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border-2 border-primary/20 shadow-sm">
                    <h3 className="font-semibold text-primary mb-2 flex items-center">
                      <span className="text-xl mr-2">🎯</span> CASEL Focus Areas
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {lesson.caselFocus.map((focus, idx) => (
                        <span
                          key={idx}
                          className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {focus}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-2 border-primary/20 shadow-sm">
                    <h3 className="font-semibold text-primary mb-2 flex items-center">
                      <span className="text-xl mr-2">✝️</span> Catholic Social Teaching Lens
                    </h3>
                    <p className="text-foreground/80">{lesson.cstLens}</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-primary mb-3 text-xl">Key Learning Points</h3>
                  <ul className="space-y-2">
                    {lesson.keyPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-secondary mr-2 mt-1">▸</span>
                        <span className="text-foreground/80">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border">
                  <h3 className="font-semibold text-primary mb-3 text-lg">Course Materials</h3>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={lesson.pptxFile}
                      download
                      className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
                    >
                      <Download className="w-5 h-5" />
                      Download PowerPoint
                    </a>
                    {lesson.audioFile && (
                      <a
                        href={lesson.audioFile}
                        download
                        className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors font-medium"
                      >
                        <Download className="w-5 h-5" />
                        Download Audio
                      </a>
                    )}
                    {!lesson.audioFile && (
                      <div className="inline-flex items-center gap-2 bg-muted text-muted-foreground px-6 py-3 rounded-lg font-medium">
                        Audio Coming Soon
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex justify-between">
          <Link href="/grade-11">
            <Button variant="outline">← Previous: Grade 11</Button>
          </Link>
          <Link href="/">
            <Button className="bg-primary hover:bg-primary/90">Back to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
