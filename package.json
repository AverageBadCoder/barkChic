import { PawPrint } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brown-dark text-cream py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <PawPrint className="h-8 w-8 text-gold" />
              <span className="font-serif text-2xl font-bold text-cream tracking-tight">Bark Chic</span>
            </Link>
            <p className="text-cream/80 max-w-sm">
              Where luxury meets wagging tails. The ultimate boutique hotel and spa experience for your beloved canine companion.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-cream/80 hover:text-gold transition-colors">Home</Link></li>
              <li><a href="/#amenities" className="text-cream/80 hover:text-gold transition-colors">Amenities</a></li>
              <li><Link to="/login" className="text-cream/80 hover:text-gold transition-colors">Book a Stay</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-gold">Contact</h3>
            <ul className="space-y-2 text-cream/80">
              <li>123 Luxury Lane</li>
              <li>Beverly Hills, CA 90210</li>
              <li>(555) 123-BARK</li>
              <li>hello@barkchic.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-cream/20 mt-12 pt-8 text-center text-cream/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Bark Chic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
