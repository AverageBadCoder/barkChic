import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Booking() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  
  // Simple state for demonstration
  const [date, setDate] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!currentUser) {
    navigate('/login');
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-cream py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gold/10 p-8 text-center">
          <h1 className="text-4xl font-serif text-brown-dark mb-4">Book a Stay</h1>
          
          {submitted ? (
            <div className="py-12">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h2 className="text-2xl font-serif text-brown-dark mb-2">Request Received!</h2>
              <p className="text-brown/70 mb-8">Our concierge will contact you shortly to confirm your booking.</p>
              <button 
                onClick={() => navigate('/dashboard')}
                className="px-6 py-2 bg-gold text-white hover:bg-brown transition-colors rounded-md font-medium"
              >
                Return to Dashboard
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto text-left space-y-6 mt-8">
              <p className="text-brown/70 mb-6 text-center">Select your preferred dates. This is a Phase 2 feature preview.</p>
              
              <div>
                <label className="block text-sm font-medium text-brown-dark mb-1">Check-in Date</label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-2 border border-gold/30 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-brown-dark mb-1">Select Dog</label>
                <select className="w-full px-4 py-2 border border-gold/30 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all bg-white">
                  <option>Select a dog...</option>
                  <option>I will add my dog later</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gold text-white hover:bg-brown transition-colors rounded-md font-medium shadow-md"
              >
                Request Booking
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
