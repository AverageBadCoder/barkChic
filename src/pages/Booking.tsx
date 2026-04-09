import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { collection, query, where, onSnapshot, addDoc } from 'firebase/firestore';
import { db, isFirebaseConfigured } from '../lib/firebase';

interface Dog { id: string; name: string; breed: string; }

export default function Booking() {
  const { currentUser, loading } = useAuth();
  const navigate = useNavigate();

  const [dogs, setDogs] = useState<Dog[]>([]);
  const [dogsLoading, setDogsLoading] = useState(true);
  const [checkinDate, setCheckinDate] = useState('');
  const [checkoutDate, setCheckoutDate] = useState('');
  const [selectedDogId, setSelectedDogId] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loadError, setLoadError] = useState('');

  useEffect(() => {
    if (!loading && !currentUser) navigate('/login');
  }, [loading, currentUser, navigate]);

  useEffect(() => {
    if (!currentUser || !isFirebaseConfigured) {
      setDogsLoading(false);
      return;
    }

    // Render from local save first so dropdown is usable immediately.
    const cacheKey = `dogs_cache_${currentUser.uid}`;
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      try {
        const parsed = JSON.parse(cached) as Dog[];
        if (Array.isArray(parsed)) {
          setDogs(parsed);
          setDogsLoading(false);
        }
      } catch {
        // Ignore malformed cache and continue with Firestore listener.
      }
    }

    const unsubscribe = onSnapshot(
      query(collection(db, 'dogs'), where('ownerId', '==', currentUser.uid)),
      (snap) => {
        const nextDogs = snap.docs.map((d) => ({ id: d.id, ...d.data() } as Dog));
        setDogs(nextDogs);
        setDogsLoading(false);
        localStorage.setItem(cacheKey, JSON.stringify(nextDogs));
      },
      (err) => {
        setLoadError('Could not refresh dogs list.');
        setDogsLoading(false);
        console.error('Dog list listener failed:', err);
      }
    );

    return () => unsubscribe();
  }, [currentUser]);

  if (loading || !currentUser) {
    return <div className="min-h-screen flex items-center justify-center bg-cream"><p className="text-brown">Loading...</p></div>;
  }

  const selectedDog = dogs.find((d) => d.id === selectedDogId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (isFirebaseConfigured && currentUser) {
      addDoc(collection(db, 'bookings'), {
        ownerId: currentUser.uid,
        dogId: selectedDogId || null,
        dogName: selectedDog?.name || 'TBD',
        checkinDate,
        checkoutDate: checkoutDate || null,
        notes: notes || null,
        status: 'pending',
        createdAt: new Date().toISOString(),
      }).catch((err) => console.error('Failed to save booking:', err));
    }
  };

  return (
    <div className="min-h-screen bg-cream py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gold/10 p-8 text-center">
          <h1 className="text-4xl font-serif text-brown-dark mb-4">Book a Stay</h1>

          {submitted ? (
            <div className="py-12">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              </div>
              <h2 className="text-2xl font-serif text-brown-dark mb-2">Request Received!</h2>
              <p className="text-brown/70 mb-8">Our concierge will contact you shortly to confirm your booking.</p>
              <button onClick={() => navigate('/dashboard')} className="px-6 py-2 bg-gold text-white hover:bg-brown transition-colors rounded-md font-medium">
                Return to Dashboard
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto text-left space-y-5 mt-8">
              <div>
                <label className="block text-sm font-medium text-brown-dark mb-1">Check-in Date *</label>
                <input type="date" required value={checkinDate}
                  onChange={(e) => setCheckinDate(e.target.value)}
                  className="w-full px-4 py-2 border border-gold/30 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all" />
              </div>

              <div>
                <label className="block text-sm font-medium text-brown-dark mb-1">Check-out Date</label>
                <input type="date" value={checkoutDate} min={checkinDate}
                  onChange={(e) => setCheckoutDate(e.target.value)}
                  className="w-full px-4 py-2 border border-gold/30 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all" />
              </div>

              <div>
                <label className="block text-sm font-medium text-brown-dark mb-1">Select Dog</label>
                <select value={selectedDogId} onChange={(e) => setSelectedDogId(e.target.value)}
                  className="w-full px-4 py-2 border border-gold/30 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all bg-white">
                  {dogsLoading ? (
                    <option>Loading your dogs...</option>
                  ) : (
                    <>
                      <option value="">Select a dog...</option>
                      {dogs.map((d) => <option key={d.id} value={d.id}>{d.name} ({d.breed})</option>)}
                      <option value="tbd">I will add my dog later</option>
                    </>
                  )}
                </select>
                {loadError && (
                  <p className="text-xs text-red-600 mt-1">{loadError}</p>
                )}
                {!dogsLoading && dogs.length === 0 && (
                  <p className="text-xs text-brown/60 mt-1">
                    No dogs added yet. <a href="#/dog/new" className="text-gold underline">Add a dog</a> first.
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-brown-dark mb-1">Special Requests</label>
                <textarea rows={3} value={notes} onChange={(e) => setNotes(e.target.value)}
                  placeholder="Dietary needs, medications, preferences..."
                  className="w-full px-4 py-2 border border-gold/30 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all" />
              </div>

              <button type="submit"
                className="w-full py-3 bg-gold text-white hover:bg-brown transition-colors rounded-md font-medium shadow-md">
                Request Booking
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
