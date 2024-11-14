import { CheckCircle, AlertCircle, Clock } from 'lucide-react';

const services = [
  {
    name: 'API',
    status: 'operational',
    uptime: '99.99%',
    lastIncident: 'No incidents reported',
  },
  {
    name: 'Web App',
    status: 'operational',
    uptime: '99.98%',
    lastIncident: 'No incidents reported',
  },
  {
    name: 'Database',
    status: 'operational',
    uptime: '99.99%',
    lastIncident: 'No incidents reported',
  },
  {
    name: 'Authentication',
    status: 'operational',
    uptime: '100%',
    lastIncident: 'No incidents reported',
  },
];

export function Status() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">System Status</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            All Systems Operational
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Current status of all ProjecAsker services
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.name}
                className="flex flex-col gap-y-4 border-l-4 border-green-500 bg-white p-6 shadow-sm"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <CheckCircle className="h-5 w-5 flex-none text-green-500" />
                  {service.name}
                </dt>
                <dd className="flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    <span className="font-medium">Status:</span> {service.status}
                  </p>
                  <p className="flex-auto">
                    <span className="font-medium">Uptime:</span> {service.uptime}
                  </p>
                  <p className="flex-auto">
                    <span className="font-medium">Last Incident:</span> {service.lastIncident}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-16 sm:mt-24">
          <div className="rounded-lg bg-white shadow-sm ring-1 ring-gray-900/5">
            <div className="p-6">
              <h3 className="text-base font-semibold leading-7 text-gray-900">Incident History</h3>
              <div className="mt-6 border-t border-gray-100">
                <div className="py-4 text-center text-sm text-gray-500">
                  No incidents reported in the last 90 days
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}