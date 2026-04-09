import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { PawPrint, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { auth, isFirebaseConfigured } from '../lib/firebase';
import { signOut } from 'firebase/auth';

export default function Navbar() {
  const { currentUser } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    if (isFirebaseConfigured && auth) {
      await signOut(auth);
    }
  };

  return (
    <nav className="bg-cream border-b border-gold/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <PawPrint className="h-8 w-8 text-gold group-hover:text-brown transition-colors" />
              <span className="font-serif text-2xl font-bold text-brown-dark tracking-tight">Bark Chic</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-brown hover:text-gold transition-colors font-medium">Home</Link>
            <a href="/#amenities" className="text-brown hover:text-gold transition-colors font-medium">Amenities</a>
            
            {currentUser ? (
              <>
                <Link to="/dashboard" className="text-brown hover:text-gold transition-colors font-medium">Dashboard</Link>
                <Link to="/book" className="text-brown hover:text-gold transition-colors font-medium">Book Stay</Link>
                <button 
                  onClick={handleLogout}
                  className="px-4 py-2 border border-brown text-brown hover:bg-brown hover:text-cream transition-colors rounded-md font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-brown hover:text-gold transition-colors font-medium">Log In</Link>
                <Link 
                  to="/login?signup=true" 
                  className="px-5 py-2.5 bg-gold text-white hover:bg-brown transition-colors rounded-md font-medium shadow-sm"
                >
                  Create Account
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brown hover:text-gold"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-cream border-b border-gold/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-brown hover:text-gold font-medium">Home</Link>
            <a href="/#amenities" className="block px-3 py-2 text-brown hover:text-gold font-medium">Amenities</a>
            
            {currentUser ? (
              <>
                <Link to="/dashboard" className="block px-3 py-2 text-brown hover:text-gold font-medium">Dashboard</Link>
                <Link to="/book" className="block px-3 py-2 text-brown hover:text-gold font-medium">Book Stay</Link>
                <button 
                  onClick={handleLogout}
                  className="block w-full text-left px-3 py-2 text-brown hover:text-gold font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="block px-3 py-2 text-brown hover:text-gold font-medium">Log In</Link>
                <Link to="/login?signup=true" className="block px-3 py-2 text-gold font-medium">Create Account</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
