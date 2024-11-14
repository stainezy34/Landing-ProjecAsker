import { Newspaper, Award, TrendingUp } from 'lucide-react';

const pressReleases = [
  {
    id: 1,
    title: 'ProjecAsker Raises $50M Series B to Transform Project Management',
    date: 'March 15, 2024',
    description: 'Funding will accelerate AI development and global expansion.',
    link: '#',
  },
  {
    id: 2,
    title: 'New AI-Powered Features Launch to Streamline Project Organization',
    date: 'February 28, 2024',
    description: 'Revolutionary updates make project management more efficient than ever.',
    link: '#',
  },
  {
    id: 3,
    title: 'ProjecAsker Named Leader in Project Management Solutions',
    date: 'January 10, 2024',
    description: 'Industry recognition for innovative approach to project management.',
    link: '#',
  },
];

const awards = [
  {
    title: 'Best Project Management Solution',
    organization: 'Tech Excellence Awards',
    year: '2024',
  },
  {
    title: 'Most Innovative AI Implementation',
    organization: 'AI Breakthrough Awards',
    year: '2023',
  },
  {
    title: 'Best Workplace for Innovation',
    organization: 'Workplace Awards',
    year: '2023',
  },
];

const metrics = [
  { id: 1, stat: '500K+', emphasis: 'Active Users', rest: 'across the globe' },
  { id: 2, stat: '98%', emphasis: 'Customer Satisfaction', rest: 'rating' },
  { id: 3, stat: '10M+', emphasis: 'Projects Completed', rest: 'using our platform' },
];

export function Press() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Press & Media
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Latest news, press releases, and media resources about ProjecAsker.
          </p>
        </div>

        {/* Press Releases */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="flex items-center gap-x-3 mb-8">
            <Newspaper className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Latest News
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-8">
            {pressReleases.map((release) => (
              <div
                key={release.id}
                className="relative rounded-2xl border border-gray-200 bg-white p-8 hover:shadow-lg transition-shadow"
              >
                <time dateTime={release.date} className="text-sm text-gray-500">
                  {release.date}
                </time>
                <h4 className="mt-2 text-xl font-semibold text-gray-900">
                  {release.title}
                </h4>
                <p className="mt-4 text-base text-gray-600">{release.description}</p>
                <a
                  href={release.link}
                  className="mt-6 inline-flex items-center text-sm font-medium text-primary hover:opacity-80"
                >
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Awards Section */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="flex items-center gap-x-3 mb-8">
            <Award className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Awards & Recognition
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {awards.map((award, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white p-8 text-center"
              >
                <h4 className="text-lg font-semibold text-gray-900">{award.title}</h4>
                <p className="mt-2 text-sm text-gray-600">{award.organization}</p>
                <p className="mt-1 text-sm font-medium text-primary">{award.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics Section */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="flex items-center gap-x-3 mb-8">
            <TrendingUp className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              By the Numbers
            </h3>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.id} className="text-center">
                <dt className="text-4xl font-bold tracking-tight text-primary">
                  {metric.stat}
                </dt>
                <dd className="mt-4">
                  <span className="font-semibold text-gray-900">{metric.emphasis}</span>{' '}
                  <span className="text-gray-600">{metric.rest}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Media Contact */}
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl bg-gradient-primary sm:mt-20 lg:mt-24">
          <div className="p-8 sm:p-16 text-center">
            <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Media Contact
            </h3>
            <p className="mt-6 text-lg leading-8 text-white/90">
              For press inquiries, please contact our media relations team.
            </p>
            <a
              href="mailto:press@projecasker.com"
              className="mt-8 inline-block rounded-md bg-white px-6 py-3 text-base font-semibold text-primary shadow-sm hover:bg-gray-50 transition-colors"
            >
              Contact Press Team
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}