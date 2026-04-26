import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Users, Award } from 'lucide-react';
import programs from '@/data/programs.json';

export default function ProgramsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-secondary text-secondary-foreground py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Our Programs</h1>
            <p className="text-lg text-secondary-foreground/90">
              Comprehensive educational programs designed to develop well-rounded and academically excellent students.
            </p>
          </div>
        </section>

        {/* Academic Programs */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programs.programs.slice(0, 2).map((program, i) => (
                <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader className="bg-primary text-primary-foreground">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>{program.name}</CardTitle>
                        <CardDescription className="text-primary-foreground/80">{program.grade}</CardDescription>
                      </div>
                      <BookOpen size={28} />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground mb-4">{program.description}</p>
                    <div>
                      <p className="font-semibold text-sm mb-3">Subjects Offered:</p>
                      <div className="flex flex-wrap gap-2">
                        {program.subjects?.map((subject, j) => (
                          <span
                            key={j}
                            className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Special Programs */}
        <section className="bg-muted/30 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Special Programs & Clubs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programs.programs.slice(2).map((program, i) => (
                <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
                  {program.image && (
                    <img
                      src={program.image}
                      alt={program.name}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>{program.name}</CardTitle>
                      </div>
                      {i === 0 ? <Award size={28} className="text-primary" /> : <Users size={28} className="text-primary" />}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{program.description}</p>
                    <div>
                      <p className="font-semibold text-sm mb-3">
                        {i === 0 ? 'Key Focus Areas:' : 'Activities:'}
                      </p>
                      <ul className="space-y-2">
                        {(program.highlights || program.activities)?.map((item, j) => (
                          <li key={j} className="flex gap-2 text-sm">
                            <span className="text-accent font-bold">→</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum Highlights */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Our Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Rigorous Academics',
                  description:
                    'We maintain high academic standards with excellent teaching methodologies and regular assessment to ensure students master core concepts.',
                },
                {
                  title: 'Practical Learning',
                  description:
                    'Students engage in hands-on experiments in modern laboratories and participate in project-based learning for real-world application.',
                },
                {
                  title: 'Character Development',
                  description:
                    'Beyond academics, we instill values of integrity, respect, responsibility, and empathy through various programs and activities.',
                },
              ].map((item, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
