'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { FieldGroup, FieldLabel, FieldSet, FieldLegend } from '@/components/ui/field';
import { CheckCircle, AlertCircle } from 'lucide-react';

const TUITION_FEES = {
  local: {
    currency: 'UGX',
    s1: 350000,
    s2: 350000,
    s3: 350000,
    s4: 400000,
    s5: 400000,
    s6: 400000,
  },
  international: {
    currency: 'USD',
    s1: 150,
    s2: 150,
    s3: 150,
    s4: 175,
    s5: 175,
    s6: 175,
  },
};

const ADDITIONAL_FEES = {
  admission: 50000,
  uniform_boarders: 285000,
  uniform_day: 185000,
  medical: 50000,
  development: 100000,
  hymn_book: 20000,
  hair_shaving: 5000,
  identity_card: 10000,
  church_fee: 10000,
  pe_attire: 50000,
  labeling: 12000,
};

export default function RegisterPage() {
  const [studentType, setStudentType] = useState<'local' | 'international'>('local');
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    currentClass: 's1',
    address: '',
    dateOfBirth: '',
    previousSchool: '',
    pleResults: '',
    uceResults: '',
    reportCard: '',
    parentNationalId: '',
    studentType: 'boarding',
    hasBible: false,
    agreedToRules: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!form.firstName || !form.lastName || !form.email || !form.phone) {
      setError('Please fill in all required student fields');
      return;
    }
    if (!form.parentName || !form.parentEmail) {
      setError('Please fill in all required parent/guardian fields');
      return;
    }
    if (!form.agreedToRules) {
      setError('You must agree to the school rules and regulations');
      return;
    }

    // Class-specific validation
    if (form.currentClass === 's1' && !form.pleResults) {
      setError('PLE results are required for S.1 admission');
      return;
    }
    if (form.currentClass === 's5' && !form.uceResults) {
      setError('UCE results are required for S.5 admission');
      return;
    }
    if (['s2', 's3', 's4', 's6'].includes(form.currentClass) && !form.reportCard) {
      setError('Report card from previous school is required for transfer students');
      return;
    }

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          studentType,
          tuitionFee:
            studentType === 'local'
              ? TUITION_FEES.local[form.currentClass as keyof typeof TUITION_FEES.local]
              : TUITION_FEES.international[
                  form.currentClass as keyof typeof TUITION_FEES.international
                ],
          currency: studentType === 'local' ? 'UGX' : 'USD',
        }),
      });

      if (!response.ok) throw new Error('Registration failed');
      setSubmitted(true);
      setForm({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        parentName: '',
        parentEmail: '',
        parentPhone: '',
        currentClass: 's1',
        address: '',
        dateOfBirth: '',
        previousSchool: '',
        pleResults: '',
        uceResults: '',
        reportCard: '',
        parentNationalId: '',
        studentType: 'boarding',
        hasBible: false,
        agreedToRules: false,
      });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError('Failed to submit registration. Please try again.');
    }
  };

  const fees = studentType === 'local' ? TUITION_FEES.local : TUITION_FEES.international;
  const currentFee = fees[form.currentClass as keyof typeof fees];
  const isBoarding = form.studentType === 'boarding';

  // Calculate total fees for new students
  const calculateTotalFees = () => {
    let total = typeof currentFee === 'number' ? currentFee : 0;
    total += ADDITIONAL_FEES.admission;
    total += ADDITIONAL_FEES.medical;
    total += ADDITIONAL_FEES.development;
    total += ADDITIONAL_FEES.hymn_book;
    total += ADDITIONAL_FEES.hair_shaving;
    total += ADDITIONAL_FEES.identity_card;
    total += ADDITIONAL_FEES.church_fee;
    total += ADDITIONAL_FEES.pe_attire;
    total += ADDITIONAL_FEES.labeling;
    total += isBoarding ? ADDITIONAL_FEES.uniform_boarders : ADDITIONAL_FEES.uniform_day;

    return total;
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Online Registration</h1>
            <p className="text-lg text-muted-foreground">
              Join Midland High School. Fill out the form below to apply for admission.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Form */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Student Application</CardTitle>
                <CardDescription>Please provide accurate information</CardDescription>
              </CardHeader>
              <CardContent>
                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold text-green-900">Registration Successful!</p>
                      <p className="text-sm text-green-800">
                        Thank you for registering. We will contact you shortly with next steps.
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

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Student Type Selection */}
                  <FieldSet>
                    <FieldLegend>Student Type</FieldLegend>
                    <FieldGroup>
                      <div className="space-y-3">
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="studentType"
                            value="local"
                            checked={studentType === 'local'}
                            onChange={(e) => setStudentType('local')}
                            className="w-4 h-4"
                          />
                          <span className="text-sm font-medium">National</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="studentType"
                            value="international"
                            checked={studentType === 'international'}
                            onChange={(e) => setStudentType('international')}
                            className="w-4 h-4"
                          />
                          <span className="text-sm font-medium">International Student</span>
                        </label>
                      </div>
                    </FieldGroup>
                  </FieldSet>

                  {/* Student Information */}
                  <div className="border-t pt-6">
                    <h3 className="font-semibold mb-4">Student Information</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FieldGroup>
                        <FieldLabel>First Name *</FieldLabel>
                        <Input
                          type="text"
                          name="firstName"
                          value={form.firstName}
                          onChange={handleInputChange}
                          placeholder="John"
                          required
                        />
                      </FieldGroup>
                      <FieldGroup>
                        <FieldLabel>Last Name *</FieldLabel>
                        <Input
                          type="text"
                          name="lastName"
                          value={form.lastName}
                          onChange={handleInputChange}
                          placeholder="Doe"
                          required
                        />
                      </FieldGroup>
                      <FieldGroup>
                        <FieldLabel>Date of Birth</FieldLabel>
                        <Input
                          type="date"
                          name="dateOfBirth"
                          value={form.dateOfBirth}
                          onChange={handleInputChange}
                        />
                      </FieldGroup>
                      <FieldGroup>
                        <FieldLabel>Current Class *</FieldLabel>
                        <select
                          name="currentClass"
                          value={form.currentClass}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-input rounded-md text-sm"
                        >
                          <option value="s1">S.1</option>
                          <option value="s2">S.2</option>
                          <option value="s3">S.3</option>
                          <option value="s4">S.4</option>
                          <option value="s5">S.5</option>
                          <option value="s6">S.6</option>
                        </select>
                      </FieldGroup>
                      <FieldGroup className="sm:col-span-2">
                        <FieldLabel>Email *</FieldLabel>
                        <Input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          required
                        />
                      </FieldGroup>
                      <FieldGroup className="sm:col-span-2">
                        <FieldLabel>Phone Number *</FieldLabel>
                        <Input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleInputChange}
                          placeholder="+256712345678"
                          required
                        />
                      </FieldGroup>
                      <FieldGroup className="sm:col-span-2">
                        <FieldLabel>Residential Address</FieldLabel>
                        <Input
                          type="text"
                          name="address"
                          value={form.address}
                          onChange={handleInputChange}
                          placeholder="123 Main St, City"
                        />
                      </FieldGroup>
                    </div>
                  </div>

                  {/* Parent/Guardian Information */}
                  <div className="border-t pt-6">
                    <h3 className="font-semibold mb-4">Parent/Guardian Information</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FieldGroup className="sm:col-span-2">
                        <FieldLabel>Parent/Guardian Name *</FieldLabel>
                        <Input
                          type="text"
                          name="parentName"
                          value={form.parentName}
                          onChange={handleInputChange}
                          placeholder="Jane Doe"
                          required
                        />
                      </FieldGroup>
                      <FieldGroup>
                        <FieldLabel>Email *</FieldLabel>
                        <Input
                          type="email"
                          name="parentEmail"
                          value={form.parentEmail}
                          onChange={handleInputChange}
                          placeholder="jane@example.com"
                          required
                        />
                      </FieldGroup>
                      <FieldGroup>
                        <FieldLabel>Phone Number</FieldLabel>
                        <Input
                          type="tel"
                          name="parentPhone"
                          value={form.parentPhone}
                          onChange={handleInputChange}
                          placeholder="+256712345678"
                        />
                      </FieldGroup>
                      <FieldGroup className="sm:col-span-2">
                        <FieldLabel>Parent/Guardian National ID *</FieldLabel>
                        <Input
                          type="text"
                          name="parentNationalId"
                          value={form.parentNationalId}
                          onChange={handleInputChange}
                          placeholder="CMXXXXXXXXXX"
                          required
                        />
                      </FieldGroup>
                    </div>
                  </div>

                  {/* Academic Information */}
                  <div className="border-t pt-6">
                    <h3 className="font-semibold mb-4">Academic Information</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FieldGroup className="sm:col-span-2">
                        <FieldLabel>Previous School</FieldLabel>
                        <Input
                          type="text"
                          name="previousSchool"
                          value={form.previousSchool}
                          onChange={handleInputChange}
                          placeholder="Name of previous school"
                        />
                      </FieldGroup>
                      {(form.currentClass === 's1' || form.currentClass === 's5') && (
                        <>
                          <FieldGroup className="sm:col-span-2">
                            <FieldLabel>
                              {form.currentClass === 's1' ? 'PLE Results *' : 'UCE Results *'}
                            </FieldLabel>
                            <Input
                              type="text"
                              name={form.currentClass === 's1' ? 'pleResults' : 'uceResults'}
                              value={form.currentClass === 's1' ? form.pleResults : form.uceResults}
                              onChange={handleInputChange}
                              placeholder={
                                form.currentClass === 's1'
                                  ? 'PLE results/grades'
                                  : 'UCE results/grades'
                              }
                              required={form.currentClass === 's1' || form.currentClass === 's5'}
                            />
                          </FieldGroup>
                        </>
                      )}
                      {['s2', 's3', 's4', 's6'].includes(form.currentClass) && (
                        <FieldGroup className="sm:col-span-2">
                          <FieldLabel>Report Card from Previous School *</FieldLabel>
                          <Input
                            type="text"
                            name="reportCard"
                            value={form.reportCard}
                            onChange={handleInputChange}
                            placeholder="Latest report card details"
                            required
                          />
                        </FieldGroup>
                      )}
                    </div>
                  </div>

                  {/* Boarding/Day Status */}
                  <div className="border-t pt-6">
                    <h3 className="font-semibold mb-4">Student Status</h3>
                    <FieldGroup>
                      <div className="space-y-3">
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="studentType"
                            value="boarding"
                            checked={form.studentType === 'boarding'}
                            onChange={(e) =>
                              setForm((prev) => ({ ...prev, studentType: 'boarding' }))
                            }
                            className="w-4 h-4"
                          />
                          <span className="text-sm font-medium">Boarding Student</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="studentType"
                            value="day"
                            checked={form.studentType === 'day'}
                            onChange={(e) => setForm((prev) => ({ ...prev, studentType: 'day' }))}
                            className="w-4 h-4"
                          />
                          <span className="text-sm font-medium">Day Scholar</span>
                        </label>
                      </div>
                    </FieldGroup>
                  </div>

                  {/* Requirements Confirmation */}
                  <div className="border-t pt-6">
                    <h3 className="font-semibold mb-4">Requirements Confirmation</h3>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="hasBible"
                          checked={form.hasBible}
                          onChange={(e) =>
                            setForm((prev) => ({ ...prev, hasBible: e.target.checked }))
                          }
                          className="w-4 h-4"
                        />
                        <span className="text-sm">
                          I confirm that I have a Bible (spiritual requirement)
                        </span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="agreedToRules"
                          checked={form.agreedToRules}
                          onChange={(e) =>
                            setForm((prev) => ({ ...prev, agreedToRules: e.target.checked }))
                          }
                          className="w-4 h-4"
                        />
                        <span className="text-sm">
                          I agree to abide by the school rules and regulations *
                        </span>
                      </label>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-11"
                  >
                    Complete Registration
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Fee Summary Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-20">
                <CardHeader>
                  <CardTitle>Tuition Fees</CardTitle>
                  <CardDescription>Annual fees per student</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Student Type</p>
                    <p className="font-semibold text-lg">
                      {studentType === 'local' ? 'National' : 'International'}
                    </p>
                  </div>

                  <div className="border-t pt-4 space-y-2">
                    <p className="text-sm text-muted-foreground">Current Selection</p>
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <p className="text-sm font-medium">{form.currentClass.toUpperCase()}</p>
                      <p className="text-2xl font-bold text-primary mt-2">
                        {fees.currency}{' '}
                        {typeof currentFee === 'number' ? currentFee.toLocaleString() : currentFee}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {form.studentType === 'boarding' ? 'Boarding' : 'Day Scholar'}
                      </p>
                    </div>
                  </div>

                  <div className="border-t pt-4 space-y-2">
                    <p className="text-sm font-semibold mb-3">Fee Schedule</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>S.1:</span>
                        <span className="font-medium">
                          {fees.currency} {fees.s1.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>S.2:</span>
                        <span className="font-medium">
                          {fees.currency} {fees.s2.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>S.3:</span>
                        <span className="font-medium">
                          {fees.currency} {fees.s3.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>S.4:</span>
                        <span className="font-medium">
                          {fees.currency} {fees.s4.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>S.5:</span>
                        <span className="font-medium">
                          {fees.currency} {fees.s5.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>S.6:</span>
                        <span className="font-medium">
                          {fees.currency} {fees.s6.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4 space-y-2">
                    <p className="text-sm font-semibold mb-3">Additional Fees (New Students)</p>
                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span>Admission:</span>
                        <span>UGX {ADDITIONAL_FEES.admission.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>
                          Uniform ({form.studentType === 'boarding' ? 'Boarder' : 'Day'}):
                        </span>
                        <span>
                          UGX{' '}
                          {(form.studentType === 'boarding'
                            ? ADDITIONAL_FEES.uniform_boarders
                            : ADDITIONAL_FEES.uniform_day
                          ).toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Medical Fee:</span>
                        <span>UGX {ADDITIONAL_FEES.medical.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Development Fee:</span>
                        <span>UGX {ADDITIONAL_FEES.development.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <p className="text-sm font-semibold mb-2">Estimated Total (New Student)</p>
                      <p className="text-xl font-bold text-primary">
                        UGX {calculateTotalFees().toLocaleString()}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Including tuition and additional fees
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-200 text-xs text-blue-800">
                    <p className="font-semibold mb-1">Payment Terms</p>
                    <p>
                      Fees can be paid in installments. Contact the accounting office for payment
                      plans.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
