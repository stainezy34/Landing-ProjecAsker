import { Search, Book, MessageSquare, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: 'Getting Started',
    description: 'Learn the basics of ProjecAsker',
    icon: Book,
    articles: [
      'Quick Start Guide',
      'Setting Up Your Account',
      'Creating Your First Project',
    ],
  },
  {
    title: 'FAQ',
    description: 'Frequently asked questions',
    icon: MessageSquare,
    articles: [
      'Billing Questions',
      'Account Management',
      'Team Collaboration',
    ],
  },
  {
    title: 'Guides',
    description: 'In-depth tutorials and guides',
    icon: FileText,
    articles: [
      'Advanced Project Management',
      'Team Administration',
      'Integration Setup',
    ],
  },
];

export function HelpCenter() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Help Center</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Find answers to your questions and learn how to get the most out of ProjecAsker
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-xl">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full rounded-md border-0 py-3 pl-10 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              placeholder="Search help articles..."
            />
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.title} className="flex flex-col">
                  <div className="flex items-center gap-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                  </div>
                  <p className="mt-4 text-sm text-gray-600">{category.description}</p>
                  <ul className="mt-6 space-y-3">
                    {category.articles.map((article) => (
                      <li key={article}>
                        <Link
                          to="#"
                          className="text-sm text-gray-600 hover:text-primary"
                        >
                          {article}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl rounded-3xl bg-gradient-primary sm:mt-20 lg:mt-24">
          <div className="p-8 sm:p-16 text-center">
            <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Need More Help?
            </h3>
            <p className="mt-6 text-lg leading-8 text-white/90">
              Our support team is available 24/7 to assist you.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-block rounded-md bg-white px-6 py-3 text-base font-semibold text-primary shadow-sm hover:bg-gray-50 transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}