import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone } from 'lucide-react';
import staff from '@/data/staff.json';

export default function StaffPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-accent text-accent-foreground py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Meet Our Staff</h1>
            <p className="text-lg text-accent-foreground/90">
              Dedicated educators committed to academic excellence and student development.
            </p>
          </div>
        </section>

        {/* Staff Directory */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {staff.staff.map((member) => (
                <Card key={member.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  {member.image && member.image !== '/images/staff-placeholder.jpg' && (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-auto object-cover"
                      style={{ maxHeight: '500px', objectPosition: 'top center' }}
                    />
                  )}
                  <CardHeader
                    className={
                      member.image !== '/images/staff-placeholder.jpg' ? '' : 'bg-primary/5'
                    }
                  >
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription className="text-primary font-semibold">
                      {member.position}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {member.bio}
                    </p>
                    <div className="space-y-2 border-t pt-4">
                      <div className="flex gap-2 items-center text-sm">
                        <Mail size={16} className="text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{member.email}</span>
                      </div>
                      <div className="flex gap-2 items-center text-sm">
                        <Phone size={16} className="text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{member.phone}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Department Info */}
        <section className="bg-muted/30 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Our Departments</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Academic Affairs',
                  description:
                    'Oversees curriculum development, teaching standards, and student academic performance.',
                },
                {
                  name: 'Student Affairs',
                  description:
                    'Manages student welfare, discipline, co-curricular activities, and pastoral care.',
                },
                {
                  name: 'Administration',
                  description:
                    'Handles school operations, finance, facilities, and human resources.',
                },
              ].map((dept, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle className="text-lg">{dept.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{dept.description}</p>
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
