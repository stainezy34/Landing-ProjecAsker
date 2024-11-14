import { DollarSign, Clock, Laptop, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const benefits = [
  {
    name: 'Competitive Salary',
    description: 'Industry-leading compensation packages with equity options.',
    icon: DollarSign,
  },
  {
    name: 'Flexible Hours',
    description: "Work when you're most productive with flexible scheduling.",
    icon: Clock,
  },
  {
    name: 'Remote First',
    description: 'Work from anywhere in the world with our remote-first culture.',
    icon: Laptop,
  },
  {
    name: 'Health & Wellness',
    description: 'Comprehensive health coverage and wellness programs.',
    icon: Heart,
  },
];

const openings = [
  {
    id: 1,
    role: 'Senior Frontend Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    id: 2,
    role: 'Product Manager',
    department: 'Product',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    id: 3,
    role: 'UX Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    id: 4,
    role: 'Technical Writer',
    department: 'Documentation',
    location: 'Remote',
    type: 'Contract',
  },
];

export function Careers() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Join Our Team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Help us revolutionize project management and build the future of work.
          </p>
        </div>

        {/* Benefits */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-12 text-center">
            Why Work With Us
          </h3>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.name} className="flex flex-col items-center text-center">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/5">
                      <Icon className="h-8 w-8 text-primary" aria-hidden="true" />
                    </div>
                    {benefit.name}
                  </dt>
                  <dd className="mt-1 text-base leading-7 text-gray-600">
                    {benefit.description}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>

        {/* Open Positions */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-12 text-center">
            Open Positions
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {openings.map((job) => (
              <div
                key={job.id}
                className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between"
              >
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{job.role}</h4>
                  <div className="mt-2 flex items-center gap-x-6">
                    <p className="text-sm text-gray-500">{job.department}</p>
                    <p className="text-sm text-gray-500">{job.location}</p>
                    <p className="text-sm text-gray-500">{job.type}</p>
                  </div>
                </div>
                <Link
                  to={`/careers/${job.id}`}
                  className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-80 transition-opacity"
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl bg-gradient-primary sm:mt-20 lg:mt-24">
          <div className="p-8 sm:p-16 text-center">
            <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Don't see the right role?
            </h3>
            <p className="mt-6 text-lg leading-8 text-white/90">
              We're always looking for talented individuals to join our team.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-primary shadow-sm hover:bg-gray-50 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}