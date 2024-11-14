import { FileText, FolderOpen, Search, History } from 'lucide-react';
import { Link } from 'react-router-dom';

export function DocumentsFeature() {
  return (
    <div className="bg-white pt-24 sm:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mx-auto max-w-2xl lg:text-center">
          <div className="flex justify-center">
            <FileText className="h-12 w-12 text-indigo-600" />
          </div>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Document Management
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Organize and version control all your project documents, from simple files to complex CAD models.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <FolderOpen className="h-5 w-5 flex-none text-indigo-600" />
                Smart Organization
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">Automatically organize documents using AI-powered categorization.</p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <Search className="h-5 w-5 flex-none text-indigo-600" />
                Advanced Search
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">Find any document instantly with our powerful search capabilities.</p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <History className="h-5 w-5 flex-none text-indigo-600" />
                Version Control
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">Track changes and maintain document history with ease.</p>
              </dd>
            </div>
          </dl>
        </div>

        {/* Demo Section */}
        <div className="mt-16 sm:mt-24">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl rounded-3xl sm:px-24 xl:py-32">
            <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Experience Better Document Management
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
              Try our document management system and see how it can transform your workflow.
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
              Why Choose Our Document Management?
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {[
                {
                  title: "Centralized Storage",
                  description: "Keep all your project documents in one secure location."
                },
                {
                  title: "Easy Collaboration",
                  description: "Share and collaborate on documents with team members."
                },
                {
                  title: "Version History",
                  description: "Track changes and maintain document history."
                },
                {
                  title: "Secure Access",
                  description: "Control who can view and edit your documents."
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
                Ready to organize your documents?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
                Get started with our document management system and take control of your project files.
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