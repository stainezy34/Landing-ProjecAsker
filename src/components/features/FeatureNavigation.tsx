import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const features = [
  { path: '/features/ai-categorization', name: 'AI Task Categorization' },
  { path: '/features/payments', name: 'Flexible Payment Options' },
  { path: '/features/collaboration', name: 'Team Collaboration' },
  { path: '/features/documents', name: 'Document Management' },
  { path: '/features/security', name: 'Secure Platform' },
  { path: '/features/updates', name: 'Real-time Updates' },
  { path: '/features/analytics', name: 'Advanced Analytics' },
  { path: '/features/accessibility', name: 'Global Accessibility' },
];

interface FeatureNavigationProps {
  currentPath: string;
}

export function FeatureNavigation({ currentPath }: FeatureNavigationProps) {
  const navigate = useNavigate();
  const currentIndex = features.findIndex(f => f.path === currentPath);
  const prevFeature = currentIndex > 0 ? features[currentIndex - 1] : null;
  const nextFeature = currentIndex < features.length - 1 ? features[currentIndex + 1] : null;

  const handleViewAll = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/#features');
    window.scrollTo(0, document.getElementById('features')?.offsetTop || 0);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
      {/* Feature List */}
      <div className="mt-8 hidden lg:block">
        <div className="grid grid-cols-4 gap-4">
          {features.map((feature) => (
            <Link
              key={feature.path}
              to={feature.path}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentPath === feature.path
                  ? 'bg-primary text-white'
                  : 'text-gray-600 hover:text-primary hover:bg-gray-50'
              }`}
            >
              {feature.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="mt-10 flex items-center justify-between border-t border-gray-200 pt-10">
        <div className="flex-1">
          {prevFeature && (
            <Link
              to={prevFeature.path}
              className="group inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
              onClick={() => window.scrollTo(0, 0)}
            >
              <ArrowLeft className="mr-3 h-5 w-5 text-primary group-hover:text-primary/80" />
              {prevFeature.name}
            </Link>
          )}
        </div>

        <div className="flex-shrink-0 mx-4">
          <button
            onClick={handleViewAll}
            className="text-sm font-medium text-gray-500 hover:text-primary"
          >
            View All Features
          </button>
        </div>

        <div className="flex-1 text-right">
          {nextFeature && (
            <Link
              to={nextFeature.path}
              className="group inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
              onClick={() => window.scrollTo(0, 0)}
            >
              {nextFeature.name}
              <ArrowRight className="ml-3 h-5 w-5 text-primary group-hover:text-primary/80" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}