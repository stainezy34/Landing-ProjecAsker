import { Shield, Lock, Eye, Key } from 'lucide-react';
import { Link } from 'react-router-dom';

export function SecurityFeature() {
  return (
    <div className="bg-white pt-24 sm:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mx-auto max-w-2xl lg:text-center">
          <div className="flex justify-center">
            <Shield className="h-12 w-12 text-indigo-600" />
          </div>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Enterprise-Grade Security
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Protect your project data and financial transactions with our comprehensive security features.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <Lock className="h-5 w-5 flex-none text-indigo-600" />
                End-to-End Encryption
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">All data is encrypted in transit and at rest.</p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <Eye className="h-5 w-5 flex-none text-indigo-600" />
                Access Control
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">Granular permissions and role-based access control.</p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <Key className="h-5 w-5 flex-none text-indigo-600" />
                Two-Factor Authentication
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">Additional layer of security for sensitive operations.</p>
              </dd>
            </div>
          </dl>
        </div>

        {/* Security Features Section */}
        <div className="mt-16 sm:mt-24">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl rounded-3xl sm:px-24 xl:py-32">
            <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Enterprise-Level Security Features
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
              Protect your data with our comprehensive security solutions.
            </p>
            <div className="mt-10 flex justify-center">
              <Link
                to="/register"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 sm:mt-24">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Benefits</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Our Security Solution?
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {[
                {
                  title: "Data Protection",
                  description: "Keep your sensitive project data safe with enterprise-grade encryption."
                },
                {
                  title: "Compliance",
                  description: "Meet industry standards and regulatory requirements."
                },
                {
                  title: "Access Management",
                  description: "Control who can access what with role-based permissions."
                },
                {
                  title: "Audit Trails",
                  description: "Track all system activities with detailed logs."
                }
              ].map((benefit) => (
                <div key={benefit.title} className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    {benefit.title}
                  </dt>
                  <dd className="mt-1 text-base leading-7 text-gray-600">
                    {benefit.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 sm:mt-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Ready to secure your project data?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
                Get started with our security features and protect your valuable project information.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  to="/register"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Start Free Trial
                </Link>
                <Link
                  to="/pricing"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  View pricing <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}