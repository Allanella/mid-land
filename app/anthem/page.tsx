import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Music, Heart, BookOpen, Users } from 'lucide-react';

export default function AnthemPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Music className="w-16 h-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">School Anthem</h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              The anthem of Midland High School embodies our values, aspirations, and commitment to excellence in education and character development.
            </p>
          </div>
        </section>

        {/* Anthem Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-12">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-primary">Midland High School Anthem</CardTitle>
                <CardDescription>
                  Sung with pride at every school assembly and important occasion
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-6 text-lg leading-relaxed">
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <p className="font-semibold mb-4">Verse 1</p>
                    <p className="italic">
                      Midland High, our alma mater dear,<br/>
                      Standing tall with values clear.<br/>
                      Building brains with character strong,<br/>
                      Where we truly belong.
                    </p>
                  </div>

                  <div className="bg-muted/30 p-6 rounded-lg">
                    <p className="font-semibold mb-4">Chorus</p>
                    <p className="italic font-bold text-primary">
                      Oh Midland High, we sing your praise,<br/>
                      Guiding us through all our days.<br/>
                      Excellence in all we do,<br/>
                      Faithful, loyal, brave and true.
                    </p>
                  </div>

                  <div className="bg-muted/30 p-6 rounded-lg">
                    <p className="font-semibold mb-4">Verse 2</p>
                    <p className="italic">
                      Teachers guide with wisdom's light,<br/>
                      Students shine with knowledge bright.<br/>
                      Unity and friendship strong,<br/>
                      Together we belong.
                    </p>
                  </div>

                  <div className="bg-muted/30 p-6 rounded-lg">
                    <p className="font-semibold mb-4">Verse 3</p>
                    <p className="italic">
                      From Luweero to nations far,<br/>
                      Midland's shining like a star.<br/>
                      Service, leadership, and grace,<br/>
                      Making the world a better place.
                    </p>
                  </div>

                  <div className="bg-muted/30 p-6 rounded-lg">
                    <p className="font-semibold mb-4">Final Chorus</p>
                    <p className="italic font-bold text-primary">
                      Oh Midland High, we sing your praise,<br/>
                      Guiding us through all our days.<br/>
                      Excellence in all we do,<br/>
                      Faithful, loyal, brave and true.<br/>
                      <br/>
                      <span className="text-xl">Midland High Forever!</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Anthem Meaning and Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Heart className="text-primary" size={24} />
                    <CardTitle className="text-lg">Our Values</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                    <div>
                      <p className="font-medium text-sm">Building Brains With Character</p>
                      <p className="text-xs text-muted-foreground">Academic excellence combined with moral development</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                    <div>
                      <p className="font-medium text-sm">Unity and Friendship</p>
                      <p className="text-xs text-muted-foreground">Fostering strong community bonds</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                    <div>
                      <p className="font-medium text-sm">Service and Leadership</p>
                      <p className="text-xs text-muted-foreground">Preparing students to serve their communities</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <BookOpen className="text-primary" size={24} />
                    <CardTitle className="text-lg">When We Sing</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                    <div>
                      <p className="font-medium text-sm">School Assemblies</p>
                      <p className="text-xs text-muted-foreground">Every Monday and Friday morning</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                    <div>
                      <p className="font-medium text-sm">Special Occasions</p>
                      <p className="text-xs text-muted-foreground">Graduation ceremonies and prize-giving events</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                    <div>
                      <p className="font-medium text-sm">Sports Events</p>
                      <p className="text-xs text-muted-foreground">Inter-school competitions and tournaments</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* School Spirit Section */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Users className="text-primary" size={24} />
                  <CardTitle className="text-lg">School Spirit</CardTitle>
                </div>
                <CardDescription>
                  The anthem represents our collective identity and aspirations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    The Midland High School anthem is more than just a song – it's a declaration of our commitment to excellence, 
                    unity, and service. Every student and staff member is encouraged to learn the anthem and sing it with pride, 
                    as it represents the shared values and dreams that unite our school community.
                  </p>
                  <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <p className="font-semibold text-primary mb-2">Remember:</p>
                    <p className="text-sm text-muted-foreground">
                      "Building Brains With Character" is not just our motto – it's the foundation upon which 
                      Midland High School stands, and the principle that guides everything we do.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
