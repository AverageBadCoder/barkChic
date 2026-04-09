import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc, setDoc, addDoc, collection } from 'firebase/firestore';
import { db, isFirebaseConfigured } from '../lib/firebase';
import { useAuth } from '../contexts/AuthContext';
import { ArrowLeft } from 'lucide-react';

export default function DogProfile() {
  const { id } = useParams();
  const isNew = id === 'new';
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    breed: '',
    age: '',
    weight: '',
    dietaryNeeds: '',
    medicalNotes: '',
    behaviorNotes: '',
  });

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
      return;
    }

    if (!isNew) {
      const fetchDog = async () => {
        if (!isFirebaseConfigured) {
          setError('Firebase is not configured. Cannot fetch dog details.');
          setLoading(false);
          return;
        }

        try {
          const docRef = doc(db, 'dogs', id!);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            // Ensure user owns this dog
            if (data.ownerId !== currentUser.uid) {
              navigate('/dashboard');
              return;
            }
            setFormData({
              name: data.name || '',
              breed: data.breed || '',
              age: data.age?.toString() || '',
              weight: data.weight?.toString() || '',
              dietaryNeeds: data.dietaryNeeds || '',
              medicalNotes: data.medicalNotes || '',
              behaviorNotes: data.behaviorNotes || '',
            });
          } else {
            navigate('/dashboard');
          }
        } catch (err: any) {
          setError('Failed to load dog profile. ' + err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchDog();
    }
  }, [id, isNew, currentUser, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!isFirebaseConfigured) {
      setError('Firebase is not configured. Cannot save dog profile. Please update src/lib/firebase.ts');
      return;
    }

    setSaving(true);
    try {
      const dogData = {
        ...formData,
        age: Number(formData.age),
        weight: Number(formData.weight),
        ownerId: currentUser!.uid,
        updatedAt: new Date().toISOString(),
      };

      if (isNew) {
        dogData.createdAt = new Date().toISOString();
        await addDoc(collection(db, 'dogs'), dogData);
      } else {
        await setDoc(doc(db, 'dogs', id!), dogData, { merge: true });
      }
      navigate('/dashboard');
    } catch (err: any) {
      setError('Failed to save profile. ' + err.message);
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-cream"><p className="text-brown">Loading...</p></div>;
  }

  return (
    <div className="min-h-screen bg-cream py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => navigate('/dashboard')}
          className="flex items-center gap-2 text-brown hover:text-gold transition-colors mb-8 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </button>

        <div className="bg-white rounded-2xl shadow-sm border border-gold/10 p-8">
          <h1 className="text-3xl font-serif text-brown-dark mb-2">
            {isNew ? 'Add a Dog' : 'Edit Profile'}
          </h1>
          <p className="text-brown/70 mb-8">Tell us about your furry friend so we can provide the best care.</p>

          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-md mb-8 border border-red-200">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-brown-dark mb-1">Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gold/30 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-brown-dark mb-1">Breed *</label>
                <input
                  type="text"
                  name="breed"
                  required
                  value={formData.breed}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gold/30 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-brown-dark mb-1">Age (years) *</label>
                <input
                  type="number"
                  name="age"
                  required
                  min="0"
                  step="0.1"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gold/30 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-brown-dark mb-1">Weight (lbs) *</label>
                <input
                  type="number"
                  name="weight"
                  required
                  min="0"
                  step="0.1"
                  value={formData.weight}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gold/30 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-brown-dark mb-1">Dietary Needs</label>
              <textarea
                name="dietaryNeeds"
                rows={3}
                value={formData.dietaryNeeds}
                onChange={handleChange}
                placeholder="Allergies, specific food brands, feeding schedule..."
                className="w-full px-4 py-2 border border-gold/30 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-brown-dark mb-1">Medical Notes</label>
              <textarea
                name="medicalNotes"
                rows={3}
                value={formData.medicalNotes}
                onChange={handleChange}
                placeholder="Medications, past surgeries, vet contact info..."
                className="w-full px-4 py-2 border border-gold/30 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-brown-dark mb-1">Behavior Notes</label>
              <textarea
                name="behaviorNotes"
                rows={3}
                value={formData.behaviorNotes}
                onChange={handleChange}
                placeholder="Gets along with other dogs? Fears? Favorite toys?"
                className="w-full px-4 py-2 border border-gold/30 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
              />
            </div>

            <div className="pt-4 flex justify-end gap-4">
              <button
                type="button"
                onClick={() => navigate('/dashboard')}
                className="px-6 py-2 border border-brown text-brown hover:bg-brown hover:text-cream transition-colors rounded-md font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving}
                className="px-6 py-2 bg-gold text-white hover:bg-brown transition-colors rounded-md font-medium shadow-md disabled:opacity-70"
              >
                {saving ? 'Saving...' : 'Save Profile'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
