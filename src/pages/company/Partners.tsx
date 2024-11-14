import { Handshake, Building2, ArrowRight, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const partnerTypes = [
  {
    title: 'Technology Partners',
    description: 'Integrate your solutions with our platform and reach new customers.',
    icon: Building2,
    benefits: [
      'Access to API and SDK documentation',
      'Technical support and resources',
      'Co-marketing opportunities',
      'Partner portal access',
    ],
  },
  {
    title: 'Solution Partners',
    description: 'Implement and customize ProjecAsker for your clients.',
    icon: Users,
    benefits: [
      'Implementation training',
      'Sales enablement resources',
      'Partner certification program',
      'Lead sharing opportunities',
    ],
  },
];

const featuredPartners = [
  {
    name: 'TechCorp Solutions',
    logo: 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80',
    type: 'Technology Partner',
  },
  {
    name: 'Global Systems Inc.',
    logo: 'https://images.unsplash.com/photo-1568952433726-3896e3881c65?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80',
    type: 'Solution Partner',
  },
  {
    name: 'Innovative Tech',
    logo: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80',
    type: 'Technology Partner',
  },
];

export function Partners() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center mb-8">
            <Handshake className="h-12 w-12 text-primary" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Partner with ProjecAsker
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Join our ecosystem of partners and help shape the future of project management
          </p>
        </div>

        {/* Partner Types */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {partnerTypes.map((type) => {
              const Icon = type.icon;
              return (
                <div
                  key={type.title}
                  className="relative rounded-2xl border border-gray-200 bg-white p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/5">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{type.title}</h3>
                  </div>
                  <p className="mt-4 text-gray-600">{type.description}</p>
                  <ul className="mt-8 space-y-3">
                    {type.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-x-3 text-gray-600">
                        <ArrowRight className="h-4 w-4 text-primary" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link
                      to="/contact"
                      className="inline-flex items-center text-sm font-semibold text-primary hover:opacity-80"
                    >
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Featured Partners */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 text-center mb-12">
            Featured Partners
          </h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPartners.map((partner) => (
              <div
                key={partner.name}
                className="flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-8 text-center"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <h4 className="mt-4 text-lg font-semibold text-gray-900">{partner.name}</h4>
                <p className="mt-1 text-sm text-gray-600">{partner.type}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl bg-gradient-primary sm:mt-20 lg:mt-24">
          <div className="p-8 sm:p-16 text-center">
            <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Ready to Partner?
            </h3>
            <p className="mt-6 text-lg leading-8 text-white/90">
              Join our partner program and let's grow together.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-primary shadow-sm hover:bg-gray-50 transition-colors"
              >
                Contact Partner Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}