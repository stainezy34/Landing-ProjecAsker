import { Book, Search, BookOpen, Code } from 'lucide-react';

const sections = [
  {
    title: 'Getting Started',
    description: 'Learn the basics of ProjecAsker and get up and running quickly.',
    icon: Book,
    href: '#',
  },
  {
    title: 'API Reference',
    description: 'Detailed documentation of our REST API endpoints and usage.',
    icon: Code,
    href: '#',
  },
  {
    title: 'Guides',
    description: 'Step-by-step tutorials and best practices for common scenarios.',
    icon: BookOpen,
    href: '#',
  },
];

export function Documentation() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Documentation</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Learn how to use ProjecAsker
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Everything you need to know about using and integrating with ProjecAsker
          </p>
        </div>

        {/* Search Bar */}
        <div className="mx-auto mt-8 max-w-xl">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full rounded-md border-0 py-3 pl-10 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              placeholder="Search documentation..."
            />
          </div>
        </div>

        {/* Documentation Sections */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <div
                  key={section.title}
                  className="flex flex-col items-start"
                >
                  <div className="rounded-lg bg-primary/5 p-2 ring-1 ring-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <dt className="mt-4 font-semibold text-gray-900">{section.title}</dt>
                  <dd className="mt-2 leading-7 text-gray-600">{section.description}</dd>
                  <a
                    href={section.href}
                    className="mt-4 text-sm font-medium text-primary hover:text-primary/80"
                  >
                    Learn more →
                  </a>
                </div>
              );
            })}
          </dl>
        </div>

        {/* Quick Links */}
        <div className="mt-16 sm:mt-24">
          <div className="rounded-lg bg-white p-8 shadow-sm ring-1 ring-gray-900/5">
            <h3 className="text-base font-semibold leading-7 text-gray-900">Quick Links</h3>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
              {[
                'Installation',
                'Authentication',
                'Webhooks',
                'SDKs',
                'Error Codes',
                'Rate Limits',
                'Changelog',
                'FAQs',
              ].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="rounded-md bg-primary/5 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}