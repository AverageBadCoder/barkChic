import { Link } from 'react-router-dom';
import { Bed, Trees, Scissors, Bone, Camera, Stethoscope, Star } from 'lucide-react';

export default function Home() {
  const amenities = [
    { icon: Bed, title: "Luxury Suites", desc: "Plush bedding, climate control, and calming music." },
    { icon: Trees, title: "Play Areas", desc: "Spacious indoor and outdoor parks for socialization." },
    { icon: Scissors, title: "Spa & Grooming", desc: "Premium baths, haircuts, and paw-dicures." },
    { icon: Bone, title: "Gourmet Meals", desc: "Chef-prepared meals tailored to dietary needs." },
    { icon: Camera, title: "Daily Updates", desc: "Photo and video updates sent straight to your phone." },
    { icon: Stethoscope, title: "On-call Vet", desc: "24/7 veterinary support for peace of mind." },
  ];

  const testimonials = [
    { name: "Sarah & Bella", text: "Bark Chic is the only place I trust with Bella. The staff is incredible and the suites are gorgeous!", img: "https://picsum.photos/seed/testimonial1/150/150" },
    { name: "James & Max", text: "Max always comes home happy, exhausted, and smelling amazing after his spa day. Five stars.", img: "https://picsum.photos/seed/testimonial2/150/150" },
    { name: "Elena & Cooper", text: "The daily photo updates give me such peace of mind while I travel. A true luxury experience.", img: "https://picsum.photos/seed/testimonial3/150/150" },
  ];

  const gallery = [
    "https://picsum.photos/seed/dog1/600/600",
    "https://picsum.photos/seed/dog2/600/800",
    "https://picsum.photos/seed/dog3/800/600",
    "https://picsum.photos/seed/dog4/600/600",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="https://picsum.photos/seed/barkchic-hero/1920/1080" 
          alt="Luxury dog hotel" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-4xl px-4 flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-serif text-cream mb-6 drop-shadow-lg">
            Where Luxury Meets Wagging Tails
          </h1>
          <p className="text-xl md:text-2xl text-cream/90 mb-10 max-w-2xl drop-shadow-md">
            The ultimate boutique hotel and spa experience for your beloved canine companion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/book" 
              className="px-8 py-4 bg-gold text-white hover:bg-gold-light hover:text-brown-dark transition-colors rounded-md font-medium text-lg shadow-lg"
            >
              Book a Stay
            </Link>
            <Link 
              to="/login?signup=true" 
              className="px-8 py-4 bg-cream/10 backdrop-blur-sm border-2 border-cream text-cream hover:bg-cream hover:text-brown-dark transition-colors rounded-md font-medium text-lg shadow-lg"
            >
              Create Account
            </Link>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-brown-dark mb-4">World-Class Amenities</h2>
            <div className="w-24 h-1 bg-gold mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gold/10 hover:shadow-md transition-shadow group">
                <div className="w-14 h-14 bg-cream rounded-full flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
                  <item.icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-brown-dark mb-3">{item.title}</h3>
                <p className="text-brown/80 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-brown-dark mb-4">How It Works</h2>
            <div className="w-24 h-1 bg-gold mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="relative">
              <div className="w-20 h-20 bg-gold text-white rounded-full flex items-center justify-center text-3xl font-serif font-bold mx-auto mb-6 shadow-lg">1</div>
              <h3 className="text-2xl font-serif text-brown-dark mb-3">Create Account</h3>
              <p className="text-brown/80">Sign up in seconds to access our exclusive booking portal.</p>
            </div>
            <div className="relative">
              <div className="w-20 h-20 bg-gold text-white rounded-full flex items-center justify-center text-3xl font-serif font-bold mx-auto mb-6 shadow-lg">2</div>
              <h3 className="text-2xl font-serif text-brown-dark mb-3">Add Your Dog</h3>
              <p className="text-brown/80">Create a detailed profile with dietary and medical needs.</p>
            </div>
            <div className="relative">
              <div className="w-20 h-20 bg-gold text-white rounded-full flex items-center justify-center text-3xl font-serif font-bold mx-auto mb-6 shadow-lg">3</div>
              <h3 className="text-2xl font-serif text-brown-dark mb-3">Book Stay</h3>
              <p className="text-brown/80">Select dates, suites, and add-on spa services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-brown-dark mb-4">Happy Tails</h2>
            <div className="w-24 h-1 bg-gold mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gold/10">
                <div className="flex text-gold mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-brown/80 italic mb-8">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-gold/30" />
                  <span className="font-serif font-semibold text-brown-dark">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-brown-dark mb-4">The Bark Chic Experience</h2>
            <div className="w-24 h-1 bg-gold mx-auto" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((img, idx) => (
              <div key={idx} className={`rounded-xl overflow-hidden ${idx === 1 || idx === 2 ? 'md:row-span-2' : ''}`}>
                <img src={img} alt="Dog at Bark Chic" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-brown-dark text-center px-4">
        <h2 className="text-4xl md:text-5xl font-serif text-gold mb-6">Give your dog the vacation they deserve.</h2>
        <p className="text-cream/80 text-xl mb-10 max-w-2xl mx-auto">Join our exclusive community and experience the pinnacle of pet hospitality.</p>
        <Link 
          to="/login?signup=true" 
          className="inline-block px-10 py-4 bg-gold text-white hover:bg-gold-light hover:text-brown-dark transition-colors rounded-md font-medium text-lg shadow-lg"
        >
          Become a Member
        </Link>
      </section>
    </div>
  );
}
