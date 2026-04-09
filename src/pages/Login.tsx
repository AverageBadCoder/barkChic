import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, isFirebaseConfigured } from '../lib/firebase';
import { PawPrint } from 'lucide-react';

function getAuthErrorMessage(error: unknown, isRegistering: boolean) {
  const code = typeof error === 'object' && error !== null && 'code' in error
    ? String((error as { code?: string }).code)
    : '';

  switch (code) {
    case 'auth/operation-not-allowed':
      return 'Email/password sign-in is disabled in Firebase. Enable Email/Password in Firebase Console > Authentication > Sign-in method.';
    case 'auth/invalid-credential':
      return 'The email or password is incorrect.';
    case 'auth/user-not-found':
      return 'No account was found for that email address.';
    case 'auth/wrong-password':
      return 'The email or password is incorrect.';
    case 'auth/email-already-in-use':
      return 'That email address is already registered.';
    case 'auth/weak-password':
      return 'Use a stronger password with at least 6 characters.';
    default:
      return isRegistering ? 'Failed to create account.' : 'Failed to log in.';
  }
}

export default function Login() {
  const [searchParams] = useSearchParams();
  const isSignup = searchParams.get('signup') === 'true';
  
  const [isRegistering, setIsRegistering] = useState(isSignup);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!isFirebaseConfigured) {
      setError('Firebase is not configured. Please add your config to src/lib/firebase.ts');
      return;
    }

    setLoading(true);
    try {
      if (isRegistering) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      navigate('/dashboard');
    } catch (err) {
      setError(getAuthErrorMessage(err, isRegistering));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-cream px-4 py-12">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border border-gold/10">
        <div className="text-center mb-8">
          <PawPrint className="h-12 w-12 text-gold mx-auto mb-4" />
          <h2 className="text-3xl font-serif text-brown-dark">
            {isRegistering ? 'Create Account' : 'Welcome Back'}
          </h2>
          <p className="text-brown/70 mt-2">
            {isRegistering ? 'Join the Bark Chic family' : 'Log in to manage your bookings'}
          </p>
        </div>

        {!isFirebaseConfigured && (
          <div className="bg-red-50 text-red-600 p-4 rounded-md mb-6 text-sm border border-red-200">
            <strong>Setup Required:</strong> Firebase is not configured. Authentication will not work until you add your Firebase config to <code>src/lib/firebase.ts</code>.
          </div>
        )}

        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-md mb-6 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-brown-dark mb-1">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gold/30 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
              placeholder="you@example.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-brown-dark mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gold/30 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gold text-white hover:bg-brown transition-colors rounded-md font-medium shadow-md disabled:opacity-70"
          >
            {loading ? 'Please wait...' : (isRegistering ? 'Sign Up' : 'Log In')}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsRegistering(!isRegistering)}
            className="text-brown hover:text-gold text-sm font-medium transition-colors"
          >
            {isRegistering 
              ? 'Already have an account? Log in' 
              : "Don't have an account? Sign up"}
          </button>
        </div>
      </div>
    </div>
  );
}
