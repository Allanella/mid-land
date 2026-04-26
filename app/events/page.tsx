import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, MapPin } from 'lucide-react';
import events from '@/data/events.json';

export default function EventsPage() {
  const sortedEvents = [...events.events].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const categories = Array.from(new Set(events.events.map((e) => e.category)));

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-secondary text-secondary-foreground py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">School Events</h1>
            <p className="text-lg text-secondary-foreground/90">
              Upcoming events and activities at Midland High School.
            </p>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <span
                    key={category}
                    className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sortedEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                  <div className="bg-accent/10 border-l-4 border-accent p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                        {event.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{event.title}</h3>
                  </div>

                  <CardContent className="pt-6 flex-1 flex flex-col">
                    <div className="space-y-3 flex-1">
                      <div className="flex gap-3 items-start">
                        <Calendar size={20} className="text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">
                            {new Date(event.date).toLocaleDateString('en-US', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-3 items-center">
                        <Clock size={20} className="text-primary flex-shrink-0" />
                        <p className="text-sm">{event.time}</p>
                      </div>

                      <div className="flex gap-3 items-start">
                        <MapPin size={20} className="text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-sm">{event.location}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm mt-4 pt-4 border-t">
                      {event.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Event Info Section */}
        <section className="bg-muted/30 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Academic Events</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>
                    <strong>Examinations:</strong> All major examinations follow the school calendar and national exam schedules.
                  </p>
                  <p>
                    <strong>Prize Giving:</strong> Annual event celebrating academic and co-curricular achievements.
                  </p>
                  <p>
                    <strong>Graduation:</strong> Formal ceremony for Form 4 leavers.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Co-curricular Events</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>
                    <strong>Sports Days:</strong> Inter-house and inter-form competitions.
                  </p>
                  <p>
                    <strong>Cultural Events:</strong> Talent shows, drama productions, and music performances.
                  </p>
                  <p>
                    <strong>Fairs & Exhibitions:</strong> Science fairs, career expos, and subject exhibitions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
