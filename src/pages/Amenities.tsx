import { Link } from 'react-router-dom';
import AmenitiesOverview from '../components/AmenitiesOverview';

const gallery = [
  'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1601758123927-1969f6f2b9ff?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=900&q=80',
];

export default function Amenities() {
  const base = import.meta.env.BASE_URL;

  return (
    <main>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-athenian-blue/20 via-transparent to-fresno/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-bold-blue mb-4">Amenities and Services</h1>
          <p className="font-accent text-2xl text-quincy-tan mb-8">Everything your dog needs for comfort, play, and premium care.</p>
          <Link
            to="/book"
            className="inline-block px-8 py-3 bg-fresno text-white hover:bg-bold-blue transition-colors rounded-full font-bold"
          >
            Request an Appointment
          </Link>
        </div>
      </section>

      <AmenitiesOverview />

      <section className="py-20 bg-swiss-coffee">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-bold-blue mb-3">Inside Bark Chic</h2>
            <p className="font-accent text-2xl text-quincy-tan">A bright, playful, and welcoming environment.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {gallery.map((img, idx) => (
              <div key={idx} className="rounded-[1.75rem] overflow-hidden border border-athenian-blue/20">
                <img loading="lazy" src={img} alt="Bark Chic amenities" className="w-full h-72 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-semibold text-brown mb-6">Inside Bark Chic</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <figure className="overflow-hidden rounded-2xl border border-gold/20 bg-white">
            <img
              src={`${base}images/amenities/indoor-playroom.jpg`}
              alt="Indoor dog social play area at Bark Chic"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </figure>

          <figure className="overflow-hidden rounded-2xl border border-gold/20 bg-white">
            <img
              src={`${base}images/amenities/lobby.jpg`}
              alt="Bark Chic reception and lobby area"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </figure>
        </div>
      </section>
    </main>
  );
}
