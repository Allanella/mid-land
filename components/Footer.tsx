import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* School Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Midland High School</h3>
            <p className="text-sm text-primary-foreground/80">
              Building Brains With Character. Excellence in academic and holistic development in
              Luweero, Uganda.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:underline">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/register" className="hover:underline">
                  Register Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-sm">
              <div className="flex gap-2">
                <Phone size={16} className="flex-shrink-0 mt-0.5" />
                <span>+256 777 564424</span>
              </div>
              <div className="flex gap-2">
                <Phone size={16} className="flex-shrink-0 mt-0.5" />
                <span>+256 773 493759</span>
              </div>
              <div className="flex gap-2">
                <Phone size={16} className="flex-shrink-0 mt-0.5" />
                <span>+256 774 060480</span>
              </div>
              <div className="flex gap-2">
                <Mail size={16} className="flex-shrink-0 mt-0.5" />
                <span>midlandhighschluweero4@gmail.com</span>
              </div>
              <div className="flex gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>P.O. BOX 389, Luweero</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/30 pt-8">
          <p className="text-center text-sm text-primary-foreground/80">
            &copy; 2024 Midland High School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
