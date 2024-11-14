import { BarChart, PieChart, LineChart, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AnalyticsFeature() {
  return (
    <div className="bg-white pt-24 sm:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mx-auto max-w-2xl lg:text-center">
          <div className="flex justify-center">
            <BarChart className="h-12 w-12 text-indigo-600" />
          </div>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Advanced Analytics
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Gain insights with comprehensive project analytics and customizable reports.
          </p>
        </div>

        {/* Rest of the component remains the same */}
        {/* ... */}
      </div>
    </div>
  );
}