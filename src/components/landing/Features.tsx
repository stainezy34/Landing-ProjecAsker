import { Brain, CreditCard, Users, FileText, Shield, Zap, BarChart, Globe } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const features = [
  {
    name: 'AI Task Categorization',
    description: 'Automatically categorize and organize tasks using advanced AI technology that learns from your project patterns.',
    icon: Brain,
    gradient: 'from-blue-500 to-indigo-500',
    href: '/features/ai-categorization'
  },
  {
    name: 'Flexible Payment Options',
    description: 'Handle task-based payments, contracted projects, and task credits with secure Stripe integration.',
    icon: CreditCard,
    gradient: 'from-purple-500 to-pink-500',
    href: '/features/payments'
  },
  {
    name: 'Team Collaboration',
    description: 'Work seamlessly with team members, assign roles, and track progress in real-time.',
    icon: Users,
    gradient: 'from-green-500 to-emerald-500',
    href: '/features/collaboration'
  },
  {
    name: 'Document Management',
    description: 'Organize and version control all your project documents, from simple files to complex CAD models.',
    icon: FileText,
    gradient: 'from-orange-500 to-amber-500',
    href: '/features/documents'
  },
  {
    name: 'Secure Platform',
    description: 'Enterprise-grade security protecting your project data and financial transactions.',
    icon: Shield,
    gradient: 'from-red-500 to-rose-500',
    href: '/features/security'
  },
  {
    name: 'Real-time Updates',
    description: 'Stay informed with instant notifications about project changes and updates.',
    icon: Zap,
    gradient: 'from-yellow-500 to-orange-500',
    href: '/features/updates'
  },
  {
    name: 'Advanced Analytics',
    description: 'Gain insights with comprehensive project analytics and customizable reports.',
    icon: BarChart,
    gradient: 'from-teal-500 to-cyan-500',
    href: '/features/analytics'
  },
  {
    name: 'Global Accessibility',
    description: 'Access your projects from anywhere with our cloud-based platform.',
    icon: Globe,
    gradient: 'from-indigo-500 to-violet-500',
    href: '/features/accessibility'
  },
];

export function Features() {
  const navigate = useNavigate();

  const handleLearnMore = (href: string) => {
    navigate(href);
    window.scrollTo(0, 0);
  };

  return (
    <section id="features" className="relative bg-white py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="w-[800px] h-[800px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Powerful Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent sm:text-4xl">
            Everything you need for successful project management
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our platform combines AI technology with robust project management tools to help teams & individuals work 100% more efficient.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.name}
                  className="relative group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative p-8">
                    <dt className="flex flex-col items-center text-center gap-y-4">
                      <div className={`
                        rounded-xl bg-gradient-to-r ${feature.gradient} p-3 text-white shadow-lg
                        transform transition-transform duration-300 group-hover:scale-110
                      `}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="text-lg font-semibold text-gray-900">{feature.name}</div>
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                      <p className="flex-auto text-center">{feature.description}</p>
                      <div className="mt-6 text-center">
                        <button
                          onClick={() => handleLearnMore(feature.href)}
                          className="inline-flex items-center text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500 transition-all duration-200"
                        >
                          Learn more 
                          <span aria-hidden="true" className="ml-1 transform group-hover:translate-x-1 transition-transform duration-200">
                            →
                          </span>
                        </button>
                      </div>
                    </dd>
                  </div>

                  {/* Decorative corner gradients */}
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 h-20 w-20 bg-gradient-to-bl from-indigo-600/10 to-purple-600/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 -mb-4 -ml-4 h-20 w-20 bg-gradient-to-tr from-indigo-600/10 to-purple-600/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}