import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db, isFirebaseConfigured } from '../lib/firebase';
import { useAuth } from '../contexts/AuthContext';
import { Plus, Calendar, Edit } from 'lucide-react';

interface Dog {
  id: string;
  name: string;
  breed: string;
  age: number;
  photoUrl?: string;
}

export default function Dashboard() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [dogs, setDogs] = useState<Dog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
      return;
    }

    const fetchDogs = async () => {
      if (!isFirebaseConfigured) {
        setError('Firebase is not configured. Please add your config to src/lib/firebase.ts to view your dogs.');
        setLoading(false);
        return;
      }

      try {
        const q = query(collection(db, 'dogs'), where('ownerId', '==', currentUser.uid));
        const querySnapshot = await getDocs(q);
        const dogsData: Dog[] = [];
        querySnapshot.forEach((doc) => {
          dogsData.push({ id: doc.id, ...doc.data() } as Dog);
        });
        setDogs(dogsData);
      } catch (err: any) {
        console.error("Error fetching dogs:", err);
        setError('Failed to load your dogs. ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDogs();
  }, [currentUser, navigate]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-cream"><p className="text-brown">Loading...</p></div>;
  }

  return (
    <div className="min-h-screen bg-cream py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h1 className="text-4xl font-serif text-brown-dark mb-2">Welcome Back</h1>
            <p className="text-brown/80">Manage your dogs and upcoming stays.</p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-4">
            <Link 
              to="/book" 
              className="flex items-center gap-2 px-5 py-2.5 bg-gold text-white hover:bg-gold-light hover:text-brown-dark transition-colors rounded-md font-medium shadow-sm"
            >
              <Calendar className="w-5 h-5" />
              Book Stay
            </Link>
            <Link 
              to="/dog/new" 
              className="flex items-center gap-2 px-5 py-2.5 border border-brown text-brown hover:bg-brown hover:text-cream transition-colors rounded-md font-medium shadow-sm"
            >
              <Plus className="w-5 h-5" />
              Add Dog
            </Link>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-md mb-8 border border-red-200">
            {error}
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-sm border border-gold/10 p-8">
          <h2 className="text-2xl font-serif text-brown-dark mb-6">Your Dogs</h2>
          
          {dogs.length === 0 && !error ? (
            <div className="text-center py-12 bg-cream/50 rounded-xl border border-dashed border-gold/30">
              <p className="text-brown/70 mb-4">You haven't added any dogs yet.</p>
              <Link 
                to="/dog/new" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-gold text-white hover:bg-brown transition-colors rounded-md font-medium"
              >
                <Plus className="w-4 h-4" />
                Add Your First Dog
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dogs.map((dog) => (
                <div key={dog.id} className="border border-gold/20 rounded-xl overflow-hidden hover:shadow-md transition-shadow group">
                  <div className="h-48 bg-cream relative">
                    <img 
                      src={dog.photoUrl || `https://picsum.photos/seed/${dog.id}/400/300`} 
                      alt={dog.name} 
                      className="w-full h-full object-cover"
                    />
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
      </div>
    </div>
  );
}
