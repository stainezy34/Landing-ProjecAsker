import { Users, Award, Globe, Rocket } from 'lucide-react';
import { AnimatedCoffee } from '../../components/AnimatedCoffee';

const stats = [
  { name: 'Founded', value: '2020' },
  { name: 'Employees', value: '150+' },
  { name: 'Countries', value: '30+' },
  { name: 'Customers', value: '10,000+' },
];

const values = [
  {
    name: 'Innovation',
    description: 'We push boundaries and embrace new technologies to solve complex problems.',
    icon: Rocket,
  },
  {
    name: 'Collaboration',
    description: 'We believe in the power of teamwork and open communication.',
    icon: Users,
  },
  {
    name: 'Excellence',
    description: 'We strive for excellence in everything we do.',
    icon: Award,
  },
  {
    name: 'Global Impact',
    description: 'We aim to make a positive impact on project management worldwide.',
    icon: Globe,
  },
];

export function About() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center mb-8">
            <AnimatedCoffee className="h-12 w-12" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            About ProjecAsker
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We're on a mission to revolutionize project management through AI-driven solutions and seamless collaboration tools.
          </p>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col items-center">
                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                <dd className="mt-1 text-3xl font-semibold tracking-tight text-primary">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Mission Statement */}
        <div className="mx-auto mt-16 max-w-2xl bg-gradient-primary rounded-3xl sm:mt-20 lg:mt-24">
          <div className="p-8 sm:p-16">
            <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Our Mission
            </h3>
            <p className="mt-6 text-lg leading-8 text-white/90">
              To empower teams worldwide with intelligent project management solutions that drive efficiency, foster collaboration, and deliver exceptional results.
            </p>
          </div>
        </div>

        {/* Company Values */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl text-center mb-12">
            Our Values
          </h3>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.name} className="flex flex-col items-center text-center">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/5">
                      <Icon className="h-8 w-8 text-primary" aria-hidden="true" />
                    </div>
                    {value.name}
                  </dt>
                  <dd className="mt-1 text-base leading-7 text-gray-600">
                    {value.description}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </div>
  );
}