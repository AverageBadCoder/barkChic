import { Link } from 'react-router-dom';
import AmenitiesOverview from '../components/AmenitiesOverview';

export default function Home() {
  const gallery = [
    'https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1600804340584-c7db2eacf0bf?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=900&q=80',
  ];

  return (
    <div className="min-h-screen bg-swiss-coffee">
      <section className="relative min-h-[82vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-bold-blue/45 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1800&q=80" 
          alt="Luxury dog hotel" 
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-4xl px-4 flex flex-col items-center">
          <p className="font-accent text-3xl text-swiss-coffee/90 mb-3">Playful and modern luxury dog hotel and social club</p>
          <h1 className="text-5xl md:text-7xl font-bold text-swiss-coffee mb-6 drop-shadow-lg">
            Where Luxury Meets Wagging Tails
          </h1>
          <p className="text-xl md:text-2xl text-swiss-coffee/95 mb-10 max-w-2xl drop-shadow-md">
            The ultimate boutique hotel and spa experience for your beloved canine companion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/book" 
              className="px-8 py-4 bg-fresno text-white hover:bg-bold-blue transition-colors rounded-full font-bold text-lg shadow-lg"
            >
              Book a Stay
            </Link>
            <Link 
              to="/amenities" 
              className="px-8 py-4 bg-athenian-blue text-bold-blue hover:bg-swiss-coffee transition-colors rounded-full font-bold text-lg shadow-lg"
            >
              Explore Amenities
            </Link>
          </div>
        </div>
      </section>

      <AmenitiesOverview sectionId="amenities" />

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-bold-blue mb-4">The Bark Chic Experience</h2>
            <p className="font-accent text-2xl text-quincy-tan">Bright colors, dynamic moments, and expressive personalities.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((img, idx) => (
              <div key={idx} className={`rounded-[1.75rem] overflow-hidden border border-athenian-blue/25 ${idx === 1 || idx === 2 ? 'md:row-span-2' : ''}`}>
                <img loading="lazy" src={img} alt="Dog at Bark Chic" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-bold-blue text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-swiss-coffee mb-6">Give your dog the vacation they deserve.</h2>
        <p className="text-swiss-coffee/85 text-xl mb-10 max-w-2xl mx-auto">Join our exclusive community and experience the pinnacle of pet hospitality.</p>
        <Link 
          to="/login?signup=true" 
          className="inline-block px-10 py-4 bg-fresno text-white hover:bg-athenian-blue hover:text-bold-blue transition-colors rounded-full font-bold text-lg shadow-lg"
        >
          Become a Member
        </Link>
      </section>
    </div>
  );
}
