import { PawPrint } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-bold-blue text-swiss-coffee py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <PawPrint className="h-8 w-8 text-athenian-blue" />
              <span className="text-2xl font-bold text-swiss-coffee tracking-tight">Bark Chic</span>
            </Link>
            <p className="text-swiss-coffee/80 max-w-sm">
              Where luxury meets wagging tails. The ultimate boutique hotel and spa experience for your beloved canine companion.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-athenian-blue">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-swiss-coffee/80 hover:text-athenian-blue transition-colors">Home</Link></li>
              <li><Link to="/amenities" className="text-swiss-coffee/80 hover:text-athenian-blue transition-colors">Amenities</Link></li>
              <li><Link to="/book" className="text-swiss-coffee/80 hover:text-athenian-blue transition-colors">Book a Stay</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-athenian-blue">Contact</h3>
            <ul className="space-y-2 text-swiss-coffee/80">
              <li>333 woof ave</li>
              <li>Ocean Ridge, FL 11111</li>
              <li>(111) 111-1111</li>
              <li>hello@barkchic.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-swiss-coffee/20 mt-12 pt-8 text-center text-swiss-coffee/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Bark Chic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
