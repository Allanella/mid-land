import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, FileText, Users, Calendar } from 'lucide-react';

export default function AdmissionsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-accent text-accent-foreground py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Admissions</h1>
            <p className="text-lg text-accent-foreground/90">
              Join Midland High School and embark on a journey of academic excellence.
            </p>
          </div>
        </section>

        {/* Admission Process */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Admission Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: 1,
                  title: 'Submit Application',
                  description: 'Complete the online registration form with your personal details.',
                  icon: FileText,
                },
                {
                  step: 2,
                  title: 'Application Review',
                  description: 'We review your application and assess your academic background.',
                  icon: Users,
                },
                {
                  step: 3,
                  title: 'Assessment',
                  description: 'Sit for placement tests in core subjects (if required).',
                  icon: CheckCircle,
                },
                {
                  step: 4,
                  title: 'Admission',
                  description: 'Receive admission letter and complete enrollment procedures.',
                  icon: Calendar,
                },
              ].map((item) => (
                <Card key={item.step} className="relative">
                  <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <CardHeader>
                    <item.icon className="w-8 h-8 text-primary mb-2" />
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* School Requirements */}
        <section className="bg-muted/30 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">School Requirements</h2>

            {/* Registration Requirements */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6">1. REGISTRATION</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Academic Documents</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex gap-3">
                      <CheckCircle size={20} className="text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">PLE results / recommendation for S.1</p>
                        <p className="text-xs text-muted-foreground">LIN Identification Number</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle size={20} className="text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">UCE results / recommendation for S.5</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle size={20} className="text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Report card from previous school</p>
                        <p className="text-xs text-muted-foreground">For S.2, S.3, S.4 and S.6</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Personal Documents</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex gap-3">
                      <CheckCircle size={20} className="text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Four current coloured passport photos</p>
                        <p className="text-xs text-muted-foreground">
                          2 for student, 2 for parent/guardian
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle size={20} className="text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Parent's/guardian's National ID</p>
                        <p className="text-xs text-muted-foreground">Copy required</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle size={20} className="text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Signed school rules and regulations</p>
                        <p className="text-xs text-muted-foreground">Required document</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Scholastic Materials */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6">
                2. SCHOLASTIC MATERIALS / ACADEMIC MATERIALS
              </h3>
              <Card>
                <CardContent className="pt-6">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <li className="flex gap-2">
                      <CheckCircle size={20} className="text-primary shrink-0 mt-0.5" />
                      <span>Dissecting kit for biology "A" level students</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle size={20} className="text-primary shrink-0 mt-0.5" />
                      <span>School bag, Lab coat</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle size={20} className="text-primary shrink-0 mt-0.5" />
                      <span>A mathematical set, scientific calculator</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle size={20} className="text-primary shrink-0 mt-0.5" />
                      <span>Art book and coloured pencil</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle size={20} className="text-primary shrink-0 mt-0.5" />
                      <span>Recommended text book from Headteacher's office</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Spiritual Requirements */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6">3. SPIRITUAL</h3>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <CheckCircle size={20} className="text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">
                        Every student is required to have a Bible
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* School Uniforms */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6">4. SCHOOL UNIFORMS</h3>
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-medium mb-2">Available at school:</p>
                      <ul className="space-y-1 ml-6">
                        <li>• Blouse, pair of trousers/skirt, T-shirt and one sweater</li>
                        <li>• Sabbath wear: black trouser/skirt, white shirts and a tie</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium mb-2">Shoes requirements:</p>
                      <ul className="space-y-1 ml-6">
                        <li>• Girls: Low heeled black shoes and white socks</li>
                        <li>• Boys: Black leather shoes and black socks</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Boarders Requirements */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6">5. FOR BOARDERS ONLY</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Bedding & Storage</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <div className="flex gap-2">
                      <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                      <span>Strong lockable suitcase or metallic box</span>
                    </div>
                    <div className="flex gap-2">
                      <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                      <span>Mattress, blanket, pillow</span>
                    </div>
                    <div className="flex gap-2">
                      <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                      <span>2 pairs of bed sheets</span>
                    </div>
                    <div className="flex gap-2">
                      <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                      <span>Rectangular mosquito net</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Casual Wear & Personal Items</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <div className="flex gap-2">
                      <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                      <span>2 black Carribean skirts/pair of trousers</span>
                    </div>
                    <div className="flex gap-2">
                      <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                      <span>Blue T-shirts for boys, Red plain T-shirts for girls</span>
                    </div>
                    <div className="flex gap-2">
                      <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                      <span>Jerry can or pail, basin and open shoes</span>
                    </div>
                    <div className="flex gap-2">
                      <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                      <span>Big size black shoe polish and canvas shoes</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Essential Items</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <div className="flex gap-2">
                      <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                      <span>Cup, plate, spoon, fork</span>
                    </div>
                    <div className="flex gap-2">
                      <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                      <span>Electrical flat iron (3 plugged)</span>
                    </div>
                    <div className="flex gap-2">
                      <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                      <span>3 bars of washing soap, 2 tablets of bathing soap</span>
                    </div>
                    <div className="flex gap-2">
                      <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                      <span>Towel</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Cleaning & Additional Items</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <div className="flex gap-2">
                      <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                      <span>Hard broom and soft broom (All)</span>
                    </div>
                    <div className="flex gap-2">
                      <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                      <span>Scrubbing brush (S.1 – S.4)</span>
                    </div>
                    <div className="flex gap-2">
                      <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                      <span>Squeezer (S.5 – S.6)</span>
                    </div>
                    <div className="flex gap-2">
                      <CheckCircle size={16} className="text-primary shrink-0 mt-0.5" />
                      <span>10 big size tissue papers Comfort/Nice (All)</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Additional Requirements & Fees</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium mb-2">Additional Items:</p>
                      <ul className="space-y-1 ml-6">
                        <li>• 750ml Jik</li>
                        <li>• A ream of printing papers (Rwenzori) S.1 – S.4</li>
                        <li>• A ream of Ruled papers S.5 – S.6</li>
                        <li>• 3 kgs of Sugar (All)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium mb-2">Additional Fees:</p>
                      <ul className="space-y-1 ml-6">
                        <li>• 50,000/= for Physical Education Attire</li>
                        <li>• 12,000/= Labeling uniforms</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Fees Structure */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6">6. FEES STRUCTURE</h3>
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4">BOARDING</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>S.1, S.2, S.3</span>
                          <span className="font-medium">750,000/=</span>
                        </div>
                        <div className="flex justify-between">
                          <span>S.4, S.5 & S.6</span>
                          <span className="font-medium">800,000/=</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">DAY</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>S.1, S.2, S.3</span>
                          <span className="font-medium">350,000/=</span>
                        </div>
                        <div className="flex justify-between">
                          <span>S.4, S.6</span>
                          <span className="font-medium">400,000/=</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>NEW ENTRANTS ONLY</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Admission</span>
                      <span className="font-medium">50,000/=</span>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Uniform</p>
                      <div className="ml-6 space-y-1">
                        <div className="flex justify-between">
                          <span>Boarders</span>
                          <span className="font-medium">285,000/=</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Day Scholars</span>
                          <span className="font-medium">185,000/=</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          (Classroom uniforms, Sabbathwear, House Tshirt, Sch-Tshirt and a sweater)
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span>Medical Fee</span>
                      <span className="font-medium">50,000/=</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Development Fee (Paid once by New students)</span>
                      <span className="font-medium">100,000/=</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Hymn Book</span>
                      <span className="font-medium">20,000/=</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Hair Shaving (Per Term)</span>
                      <span className="font-medium">5,000/=</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Identity Card</span>
                      <span className="font-medium">10,000/=</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Church fee</span>
                      <span className="font-medium">10,000/=</span>
                    </div>
                    <div className="mt-4 p-3 bg-muted rounded-lg">
                      <p className="font-medium text-sm">
                        All fees MUST be paid using a student's PAY CODE from the bursar's Office.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Key Information */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Important Information</h2>
            <div className="bg-muted/30 p-6 rounded-lg">
              <p className="text-center text-lg font-medium mb-4">MOBISA PETER</p>
              <p className="text-center text-sm text-muted-foreground">HEADTEACHER</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
            <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Start your application journey today. Fill out our online registration form and take
              the first step towards joining Midland High School.
            </p>
            <Link href="/register">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Register Now
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
