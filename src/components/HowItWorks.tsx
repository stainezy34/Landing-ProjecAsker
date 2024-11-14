import { ClipboardList, Brain, Users, BarChart, FileCheck } from 'lucide-react';

const steps = [
  {
    title: 'Create Projects and Tasks',
    description: 'Start by creating a new project, adding tasks, and assigning team members. Get paid on completion.',
    icon: ClipboardList,
    color: 'from-blue-500 to-indigo-500',
  },
  {
    title: 'Organize with AI',
    description: 'Let AI automate task organization, suggesting categories and subcategories for faster setup.',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Assign Roles',
    description: 'Define team roles and permissions by their own 7 tags, making collaboration seamless and precise.',
    icon: Users,
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Track Progress',
    description: 'Monitor task completion, share documents, and maintain up-to-date records with your team.',
    icon: FileCheck,
    color: 'from-orange-500 to-amber-500',
  },
  {
    title: 'Analyze and Optimize',
    description: 'Use reporting tools to measure progress, productivity, and make data-driven decisions.',
    icon: BarChart,
    color: 'from-red-500 to-rose-500',
  },
];

export function HowItWorks() {
  return (
    <div id="how-it-works" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Get Started</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent sm:text-4xl">
            How It Works
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Follow these simple steps to streamline your project management workflow
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-5">
            {steps.map((step, index) => (
              <div 
                key={step.title} 
                className="relative group"
              >
                <dt className="flex flex-col items-center text-center gap-y-4">
                  <div className={`
                    rounded-xl bg-gradient-to-r ${step.color} p-3 text-white shadow-lg
                    transform transition-transform duration-200 group-hover:scale-110
                  `}>
                    <step.icon className="h-6 w-6" />
                  </div>
                  <div className="flex items-center gap-x-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-sm font-semibold text-white">
                      {index + 1}
                    </div>
                    <span className="text-lg font-semibold text-gray-900">{step.title}</span>
                  </div>
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto text-center">{step.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}