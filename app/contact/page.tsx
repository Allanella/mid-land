'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FieldGroup, FieldLabel } from '@/components/ui/field';
import { Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle, Car } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!form.name || !form.email || !form.subject || !form.message) {
      setError('Please fill in all required fields');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error('Failed to send message');
      setSubmitted(true);
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError('Failed to send message. Please try again.');
    }
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-secondary text-secondary-foreground py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-secondary-foreground/90">
              Get in touch with Midland High School - Luweero. We&apos;d love to hear from you.
            </p>
          </div>
        </section>

        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Phone className="text-primary" size={24} />
                      <CardTitle className="text-lg">Phone</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">+256 774 060480</p>
                    <p className="text-muted-foreground">+256 773 493759</p>
                    <p className="text-muted-foreground">+256 777 564424</p>
                    <p className="text-sm text-muted-foreground mt-2">Main Office</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Phone className="text-primary" size={24} />
                      <CardTitle className="text-lg">Phone</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">+256 774 060480</p>
                    <p className="text-sm text-muted-foreground mt-2">Main Office</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Mail className="text-primary" size={24} />
                      <CardTitle className="text-lg">Email</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">midlandhighschluweero4@gmail.com</p>
                    <p className="text-sm text-muted-foreground mt-2">General Inquiries</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin className="text-primary" size={24} />
                      <CardTitle className="text-lg">Location</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">P.O. BOX 389, Luweero</p>
                    <p className="text-sm text-muted-foreground mt-2">School Campus</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Clock className="text-primary" size={24} />
                      <CardTitle className="text-lg">Hours</CardTitle>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-2 text-sm">
                    <div>
                      <p className="font-medium">Sunday - Friday</p>
                      <p className="text-muted-foreground">8:00 AM - 5:00 PM</p>
                    </div>
                    <div>
                      <p className="font-medium">Saturday</p>
                      <p className="text-muted-foreground">Closed</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <CardDescription>We'll get back to you as soon as possible</CardDescription>
                </CardHeader>
                <CardContent>
                  {submitted && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex gap-3">
                      <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-semibold text-green-900">Message Sent!</p>
                        <p className="text-sm text-green-800">
                          Thank you for contacting us. We will respond shortly.
                        </p>
                      </div>
                    </div>
                  )}

                  {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3">
                      <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-semibold text-red-900">Error</p>
                        <p className="text-sm text-red-800">{error}</p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <FieldGroup>
                      <FieldLabel>Name *</FieldLabel>
                      <Input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        required
                      />
                    </FieldGroup>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FieldGroup>
                        <FieldLabel>Email *</FieldLabel>
                        <Input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          required
                        />
                      </FieldGroup>
                      <FieldGroup>
                        <FieldLabel>Phone</FieldLabel>
                        <Input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleInputChange}
                          placeholder="+254712345678"
                        />
                      </FieldGroup>
                    </div>

                    <FieldGroup>
                      <FieldLabel>Subject *</FieldLabel>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input rounded-md text-sm"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="Admissions">Admissions Inquiry</option>
                        <option value="Academic">Academic Inquiry</option>
                        <option value="General">General Inquiry</option>
                        <option value="Complaint">Complaint</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Other">Other</option>
                      </select>
                    </FieldGroup>

                    <FieldGroup>
                      <FieldLabel>Message *</FieldLabel>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleInputChange}
                        placeholder="Your message here..."
                        className="w-full px-3 py-2 border border-input rounded-md text-sm font-sans min-h-32"
                        required
                      />
                    </FieldGroup>

                    <Button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-11"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Google Map Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Find Us</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Visit our campus in Luweero District, Uganda
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Map */}
              <div className="lg:col-span-2">
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative w-full h-96 lg:h-[500px]">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.1234567890!2d32.4567890!3d0.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMDAnMDAuMCJTIDMywrDI3JzQwLjAiRQ!5e0!3m2!1sen!2sug!4v1234567890"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-lg"
                        title="Midland High School Location Map"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Location Details */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <p className="font-medium">Midland High School - Luweero</p>
                      <p className="text-muted-foreground">P.O. BOX 389</p>
                      <p className="text-muted-foreground">Luweero District</p>
                      <p className="text-muted-foreground">Uganda</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      Office Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Sunday - Friday</span>
                        <span className="font-medium">8:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span className="font-medium">Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Car className="w-5 h-5 text-primary" />
                      Getting Here
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <p className="text-muted-foreground">
                        <strong>By Public Transport:</strong> Take taxis from Kampala to Luweero
                        town, then local transport to the school.
                      </p>
                      <p className="text-muted-foreground">
                        <strong>By Private Vehicle:</strong> Located 65km north of Kampala on the
                        Kampala-Gulu highway.
                      </p>
                    </div>
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
