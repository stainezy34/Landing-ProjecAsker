import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    id: 'tier-starter',
    href: '#',
    priceMonthly: '$15',
    description: 'Perfect for individuals and small teams.',
    features: [
      'Up to 5 team members',
      'Basic AI categorization',
      '5GB document storage',
      'Task-based payments',
      'Email support',
      'Basic analytics',
    ],
    featured: false,
  },
  {
    name: 'Professional',
    id: 'tier-professional',
    href: '#',
    priceMonthly: '$49',
    description: 'Ideal for growing teams with advanced needs.',
    features: [
      'Up to 20 team members',
      'Advanced AI categorization',
      '50GB document storage',
      'Task & contract payments',
      'Priority support',
      'Advanced analytics',
      'Custom integrations',
      'Team training',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    priceMonthly: '$99',
    description: 'For large organizations with complex requirements.',
    features: [
      'Unlimited team members',
      'Custom AI models',
      'Unlimited storage',
      'Complete payment suite',
      '24/7 support',
      'Custom analytics',
      'API access',
      'Dedicated account manager',
    ],
    featured: false,
  },
];

export function Pricing() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose the right plan for your team
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          All plans include our core AI features and secure payment processing. Start with a 14-day free trial.
        </p>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {plans.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={`
                flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10
                ${tier.featured ? 'lg:z-10 lg:rounded-b-none' : ''}
                ${tierIdx === 0 ? 'lg:rounded-r-none' : ''}
                ${tierIdx === 2 ? 'lg:rounded-l-none' : ''}
              `}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className={`text-lg font-semibold leading-8 ${tier.featured ? 'text-indigo-600' : 'text-gray-900'}`}>
                    {tier.name}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.priceMonthly}</span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-indigo-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={`
                  mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                  ${
                    tier.featured
                      ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-600'
                      : 'bg-white text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300'
                  }
                `}
              >
                Get started today
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}