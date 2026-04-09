import { Bed, Trees, Scissors, Bone, Camera, Stethoscope } from 'lucide-react';

type AmenitiesOverviewProps = {
  sectionId?: string;
};

const amenities = [
  { icon: Bed, title: 'Luxury Suites', desc: 'Plush bedding, climate control, and calming music for restful stays.' },
  { icon: Trees, title: 'Play Areas', desc: 'Spacious indoor and outdoor parks designed for safe socialization.' },
  { icon: Scissors, title: 'Spa and Grooming', desc: 'Premium baths, styling, coat care, and paw-focused treatments.' },
  { icon: Bone, title: 'Gourmet Meals', desc: 'Chef-prepared meal plans tailored to each dog\'s dietary needs.' },
  { icon: Camera, title: 'Daily Updates', desc: 'Photo and video updates delivered so owners stay connected.' },
  { icon: Stethoscope, title: 'On-Call Vet', desc: '24/7 veterinary support available whenever extra care is needed.' },
];

const processSteps = [
  {
    title: 'Create Account',
    description: 'Sign up to access your dashboard, saved dogs, and booking requests.',
  },
  {
    title: 'Add Your Dog',
    description: 'Store profile details once so stays and care notes carry forward automatically.',
  },
  {
    title: 'Request Appointment',
    description: 'Select dates and care preferences. Your concierge confirms final details.',
  },
];

export default function AmenitiesOverview({ sectionId }: AmenitiesOverviewProps) {
  return (
    <>
      <section id={sectionId} className="py-20 bg-swiss-coffee">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-bold-blue mb-3">World-Class Amenities</h2>
            <p className="font-accent text-2xl text-quincy-tan">Luxury, play, and wellness in one place.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-[2rem] border border-athenian-blue/30 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-athenian-blue/15 rounded-full flex items-center justify-center mb-5">
                  <item.icon className="h-7 w-7 text-bold-blue" />
                </div>
                <h3 className="text-xl font-bold text-bold-blue mb-2">{item.title}</h3>
                <p className="text-temptation/90 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2.5rem] bg-swiss-coffee p-10 md:p-14 border border-quincy-tan/35">
            <h2 className="text-4xl md:text-5xl font-bold text-bold-blue mb-10">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div key={step.title}>
                  <div className="w-14 h-14 rounded-full bg-fresno text-white flex items-center justify-center text-xl font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-accent text-quincy-tan mb-2">{step.title}</h3>
                  <p className="text-temptation/90">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
