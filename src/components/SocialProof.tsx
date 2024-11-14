import { useState, useEffect } from 'react';
import { Users, TrendingUp, Award, Globe } from 'lucide-react';

const stats = [
  { icon: Users, value: '10,234', label: 'Active Users', trend: '+12% this month' },
  { icon: TrendingUp, value: '2.4M', label: 'Tasks Completed', trend: '+8% this week' },
  { icon: Award, value: '98%', label: 'Success Rate', trend: '+5% this quarter' },
  { icon: Globe, value: '120+', label: 'Countries', trend: 'Growing daily' },
];

export function SocialProof() {
  const [counters, setCounters] = useState(stats.map(stat => ({ 
    ...stat, 
    current: 0,
    target: parseInt(stat.value.replace(/[^0-9]/g, ''))
  })));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters(current => 
        current.map(counter => ({
          ...counter,
          current: Math.min(
            counter.current + Math.ceil(counter.target / 100),
            counter.target
          )
        }))
      );
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative isolate -mt-12 pt-24 sm:pt-32">
      {/* Gradient Background */}
      <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl">
        <div
          className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-primary to-secondary"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {counters.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-900/5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="absolute right-0 top-0 -ml-4 -mt-4 h-[120px] w-[120px] rotate-45 bg-gradient-to-r from-primary/10 to-secondary/10 blur-2xl" />
                  
                  <div className="relative">
                    <div className="flex items-center gap-4">
                      <Icon className="h-6 w-6 text-primary" />
                      <dt className="text-sm font-medium text-gray-600">{stat.label}</dt>
                    </div>
                    <dd className="mt-4">
                      <span className="text-4xl font-bold tracking-tight text-gray-900">
                        {stat.current.toLocaleString()}
                        {stat.value.includes('+') ? '+' : ''}
                      </span>
                      <span className="ml-2 text-sm font-medium text-primary">
                        {stat.trend}
                      </span>
                    </dd>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}