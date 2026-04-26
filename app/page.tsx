'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowRight,
  BookOpen,
  Users,
  Trophy,
  Zap,
  Star,
  TrendingUp,
  Award,
  Calendar,
  Clock,
  ChevronRight,
  Sparkles,
  Target,
  Heart,
  Phone,
  Mail,
  FlaskRound,
  Music,
} from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [activeStat, setActiveStat] = useState(0);

  const stats = [
    { value: '98%', label: 'Pass Rate', icon: TrendingUp },
    { value: '1500+', label: 'Students', icon: Users },
    { value: '50+', label: 'Teachers', icon: BookOpen },
    { value: '25+', label: 'Clubs', icon: Award },
  ];

  const features = [
    {
      icon: Target,
      title: 'Academic Excellence',
      description: '98% pass rate in national examinations with top performers',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Dedicated teachers with proven track records',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Trophy,
      title: 'Leadership Programs',
      description: 'Pathfinders Club & multiple student organizations',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Zap,
      title: 'Modern Facilities',
      description: 'State-of-the-art labs, classrooms, and sports grounds',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const upcomingEvents = [
    { title: 'Science Fair', date: 'Dec 15', icon: FlaskRound },
    { title: 'Sports Day', date: 'Dec 20', icon: Trophy },
    { title: 'Cultural Festival', date: 'Jan 5', icon: Music },
  ];
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80">
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/20 rounded-full animate-pulse delay-75"></div>
            <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-accent/30 rounded-full animate-pulse delay-150"></div>
            <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-secondary/30 rounded-full animate-pulse delay-300"></div>
          </div>

          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: 'url(/images/staff-group.jpg)',
            }}
          ></div>

          <div className="max-w-7xl mx-auto text-center relative z-10 px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent-foreground">
                  Enrollment Now Open 2026
                </span>
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance bg-gradient-to-r from-primary-foreground to-accent-foreground bg-clip-text text-transparent animate-fade-in">
              Empowering Minds, Shaping Futures
            </h1>
            <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-12 text-balance max-w-4xl mx-auto leading-relaxed">
              Excellence in Academic and Holistic Development. Join Midland High School Luweero and
              unlock your potential in a nurturing environment.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link href="/register">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Register Now
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105"
                >
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center cursor-pointer group"
                  onMouseEnter={() => setActiveStat(index)}
                >
                  <div
                    className={`transition-all duration-300 ${activeStat === index ? 'scale-110' : 'scale-100'}`}
                  >
                    <stat.icon
                      className={`w-8 h-8 mx-auto mb-2 text-accent transition-all duration-300 ${activeStat === index ? 'text-accent-foreground' : ''}`}
                    />
                    <div className="text-3xl font-bold text-primary-foreground">{stat.value}</div>
                    <div className="text-sm text-primary-foreground/70">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronRight className="w-6 h-6 text-primary-foreground/60 rotate-90" />
          </div>
        </section>

        {/* Interactive Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Why Choose Midland High School - Luweero?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover what makes our school a beacon of excellence in education
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer bg-background"
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>

                  <CardHeader className="relative z-10 text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg font-semibold group-hover:text-accent transition-colors duration-300">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10 text-center">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/20 transition-colors duration-500 rounded-lg"></div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Programs with Modern Design */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-2">Online Registration</h1>
              <p className="text-lg text-muted-foreground">
                Join Midland High School - Luweero. Fill out the form below to apply for admission.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-background to-muted/20">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="/images/school-gate.jpg"
                    alt="School Campus"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      S.1 - S.6
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold group-hover:text-accent transition-colors duration-300">
                    Secondary Education
                  </CardTitle>
                  <CardDescription className="text-base">
                    Complete O'Level and A'Level Programs
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Comprehensive education with focus on academic excellence, character
                    development, and extensive extracurricular activities.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-muted-foreground">Top Rated</span>
                    </div>
                    <Link href="/programs">
                      <Button
                        variant="outline"
                        size="sm"
                        className="group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300"
                      >
                        Learn More
                        <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-background to-muted/20">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src="/images/pathfinders-club.jpg"
                    alt="Pathfinders Club"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{ maxHeight: '400px', objectPosition: 'top center' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      Leadership
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold group-hover:text-accent transition-colors duration-300">
                    Pathfinders Club
                  </CardTitle>
                  <CardDescription className="text-base">
                    Premier Youth Development Program
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Premier youth development program fostering leadership, teamwork, and social
                    responsibility through engaging activities.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <Heart className="w-4 h-4 text-red-500 fill-current" />
                      <span className="text-sm text-muted-foreground">Student Favorite</span>
                    </div>
                    <Link href="/programs">
                      <Button
                        variant="outline"
                        size="sm"
                        className="group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300"
                      >
                        Learn More
                        <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Stay updated with our latest school activities and celebrations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Science Fair',
                  date: 'Dec 15',
                  description: 'Annual science exhibition',
                  icon: FlaskRound,
                },
                {
                  title: 'Sports Day',
                  date: 'Dec 20',
                  description: 'Inter-house competitions',
                  icon: Trophy,
                },
                {
                  title: 'Cultural Festival',
                  date: 'Jan 5',
                  description: 'Celebrating diversity',
                  icon: Heart,
                },
              ].map((event, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 bg-background"
                >
                  <CardHeader className="text-center pb-4">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                      <event.icon className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-lg font-semibold">{event.title}</CardTitle>
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                    </div>
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Modern CTA Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent/80 to-primary"></div>
          <div className="absolute inset-0 bg-black/10"></div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-20 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 right-20 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-75"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Star className="w-4 h-4 text-yellow-300" />
                <span className="text-sm font-medium text-white">Limited Spaces Available</span>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Shape Your Future?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Take the first step towards academic excellence and personal growth. Join our
              community of learners and leaders.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/register">
                <Button
                  size="lg"
                  className="bg-white text-accent hover:bg-white/90 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  Register Now
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105"
                >
                  Schedule Visit
                </Button>
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Mon-Fri: 8AM-5PM</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+256 777 564424</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">midlandhighschluweero4@gmail.com</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
