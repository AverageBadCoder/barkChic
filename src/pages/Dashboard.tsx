import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { collection, query, where, onSnapshot, orderBy } from 'firebase/firestore';
import { db, isFirebaseConfigured } from '../lib/firebase';
import { useAuth } from '../contexts/AuthContext';
import { Plus, Calendar, Edit, Clock } from 'lucide-react';

interface Dog {
  id: string;
  name: string;
  breed: string;
  age: number;
  photoUrl?: string;
}

interface Booking {
  id: string;
  dogName: string;
  checkinDate: string;
  checkoutDate?: string;
  notes?: string;
  status: string;
}

const WOLF_PHOTO_URL = 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=900&q=80';

export default function Dashboard() {
  const { currentUser, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [dogs, setDogs] = useState<Dog[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (authLoading) return;
    if (!currentUser) { navigate('/login'); return; }
    if (!isFirebaseConfigured) {
      setError('Firebase is not configured.');
      setLoading(false);
      return;
    }

    // onSnapshot fires instantly from the local IndexedDB cache on repeat visits.
    // Both listeners run in parallel; the first result clears the spinner.
    let settled = false;
    const settle = () => { if (!settled) { settled = true; setLoading(false); } };

    const unsubDogs = onSnapshot(
      query(collection(db, 'dogs'), where('ownerId', '==', currentUser.uid)),
      (snap) => {
        const nextDogs = snap.docs.map((d) => ({ id: d.id, ...d.data() } as Dog));
        setDogs(nextDogs);
        localStorage.setItem(`dogs_cache_${currentUser.uid}`, JSON.stringify(nextDogs));
        settle();
      },
      (err) => { setError('Failed to load dogs: ' + err.message); settle(); }
    );

    const unsubBookings = onSnapshot(
      query(collection(db, 'bookings'), where('ownerId', '==', currentUser.uid), orderBy('checkinDate', 'asc')),
      (snap) => { setBookings(snap.docs.map((d) => ({ id: d.id, ...d.data() } as Booking))); settle(); },
      (err) => { console.error('Bookings error:', err); settle(); }
    );

    return () => { unsubDogs(); unsubBookings(); };
  }, [authLoading, currentUser, navigate]);

  if (authLoading || (!currentUser && !authLoading)) return null;

  return (
    <div className="min-h-screen bg-cream py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h1 className="text-4xl font-serif text-brown-dark mb-2">Welcome Back</h1>
            <p className="text-brown/80">Manage your dogs and upcoming stays.</p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-4">
            <Link to="/book" className="flex items-center gap-2 px-5 py-2.5 bg-gold text-white hover:bg-gold-light hover:text-brown-dark transition-colors rounded-md font-medium shadow-sm">
              <Calendar className="w-5 h-5" />
              Book Stay
            </Link>
            <Link to="/dog/new" className="flex items-center gap-2 px-5 py-2.5 border border-brown text-brown hover:bg-brown hover:text-cream transition-colors rounded-md font-medium shadow-sm">
              <Plus className="w-5 h-5" />
              Add Dog
            </Link>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-md mb-8 border border-red-200">{error}</div>
        )}

        {/* Dogs */}
        <div className="bg-white rounded-2xl shadow-sm border border-gold/10 p-8">
          <h2 className="text-2xl font-serif text-brown-dark mb-6">Your Dogs</h2>
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((n) => (
                <div key={n} className="border border-gold/20 rounded-xl overflow-hidden animate-pulse">
                  <div className="h-48 bg-cream/80" />
                  <div className="p-5 space-y-2">
                    <div className="h-5 bg-cream rounded w-1/2" />
                    <div className="h-4 bg-cream rounded w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          ) : dogs.length === 0 ? (
            <div className="text-center py-12 bg-cream/50 rounded-xl border border-dashed border-gold/30">
              <p className="text-brown/70 mb-4">You haven't added any dogs yet.</p>
              <Link to="/dog/new" className="inline-flex items-center gap-2 px-4 py-2 bg-gold text-white hover:bg-brown transition-colors rounded-md font-medium">
                <Plus className="w-4 h-4" />
                Add Your First Dog
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dogs.map((dog) => (
                <div key={dog.id} className="border border-gold/20 rounded-xl overflow-hidden hover:shadow-md transition-shadow group">
                  <div className="h-48 bg-cream relative">
                    <img loading="lazy" src={WOLF_PHOTO_URL} alt={dog.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5 bg-white">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-serif font-semibold text-brown-dark">{dog.name}</h3>
                      <Link to={`/dog/${dog.id}`} className="text-gold hover:text-brown transition-colors">
                        <Edit className="w-5 h-5" />
                      </Link>
                    </div>
                    <p className="text-brown/70 text-sm">{dog.breed} • {dog.age} years old</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Appointments */}
        <div className="bg-white rounded-2xl shadow-sm border border-gold/10 p-8 mt-8">
          <h2 className="text-2xl font-serif text-brown-dark mb-6">Your Appointments</h2>
          {loading ? (
            <div className="space-y-3">
              {[1, 2].map((n) => <div key={n} className="h-16 bg-cream rounded-xl animate-pulse" />)}
            </div>
          ) : bookings.length === 0 ? (
            <div className="text-center py-10 bg-cream/50 rounded-xl border border-dashed border-gold/30">
              <p className="text-brown/70 mb-4">No upcoming appointments.</p>
              <Link to="/book" className="inline-flex items-center gap-2 px-4 py-2 bg-gold text-white hover:bg-brown transition-colors rounded-md font-medium">
                <Calendar className="w-4 h-4" />
                Book a Stay
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {bookings.map((b) => (
                <div key={b.id} className="flex items-center justify-between p-4 border border-gold/20 rounded-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-semibold text-brown-dark">{b.dogName}</p>
                      <p className="text-sm text-brown/70">
                        Check-in: {new Date(b.checkinDate).toLocaleDateString()}
                        {b.checkoutDate && ` → Check-out: ${new Date(b.checkoutDate).toLocaleDateString()}`}
                      </p>
                      {b.notes && <p className="text-xs text-brown/50 mt-0.5">{b.notes}</p>}
                    </div>
                  </div>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full capitalize ${
                    b.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                    b.status === 'cancelled' ? 'bg-red-100 text-red-700' :
                    'bg-gold/10 text-gold'
                  }`}>{b.status}</span>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
