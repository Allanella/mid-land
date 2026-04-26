import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Lightbulb, Users, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">About Midland High School</h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl">
              Established with a mission to provide excellence in education, we nurture young minds
              to become leaders and responsible citizens.
            </p>
          </div>
        </section>

        {/* School Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Midland High School has been a beacon of academic excellence and character
                  development for over two decades. Founded on the principles of integrity,
                  excellence, and service, our institution has consistently produced graduates who
                  excel in their chosen fields.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our school maintains a commitment to providing a holistic education that develops
                  not just the intellect, but also the emotional, social, and physical well-being of
                  our students. We believe in nurturing not just scholars, but responsible and
                  compassionate global citizens.
                </p>
              </div>
              <img
                src="/images/school-gate.jpg"
                alt="School Campus"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Mission and Values */}
        <section className="bg-muted/30 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Award,
                  title: 'Excellence',
                  description:
                    'We strive for the highest standards in all we do, academically and personally.',
                },
                {
                  icon: Lightbulb,
                  title: 'Innovation',
                  description: 'We embrace creative thinking and modern approaches to education.',
                },
                {
                  icon: Users,
                  title: 'Community',
                  description: 'We foster a supportive environment where everyone belongs.',
                },
                {
                  icon: Heart,
                  title: 'Integrity',
                  description: 'We uphold honesty and strong moral principles in all our actions.',
                },
              ].map((value, i) => (
                <Card key={i} className="text-center">
                  <CardHeader>
                    <value.icon className="w-12 h-12 mx-auto mb-2 text-primary" />
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">School Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="overflow-hidden">
                <img
                  src="/images/head-teacher.jpg"
                  alt="Head Teacher"
                  className="w-full h-auto object-cover rounded-t-lg"
                  style={{ maxHeight: '500px', objectPosition: 'top center' }}
                />
                <CardHeader>
                  <CardTitle>Mr. Mobisa Peter</CardTitle>
                  <CardDescription>Head Teacher</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    With over 15 years of experience in educational leadership, Mr. Mobisa has been
                    at the helm of Midland High School since 2018. He is passionate about fostering
                    academic excellence and holistic development. His vision is to make Midland High
                    School a center of academic excellence and character formation in the region.
                  </p>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Our Educational Philosophy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      We believe in student-centered education that recognizes the uniqueness of
                      each learner. Our approach combines:
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li className="flex gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span>Strong academic foundation in core subjects</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span>Development of critical thinking and problem-solving skills</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span>Character development and ethical values</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span>Active participation in co-curricular activities</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Achievements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li className="flex gap-2">
                        <span className="text-primary font-bold">✓</span>
                        <span>Excellence in Uganda National Examinations (2024)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary font-bold">✓</span>
                        <span>Multiple A-grade students in national exams</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary font-bold">✓</span>
                        <span>State-of-the-art science and computer laboratories</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary font-bold">✓</span>
                        <span>Active sports and culture programs</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
