import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Tag } from 'lucide-react';
import { AnimatedCoffee } from '../../components/AnimatedCoffee';

const availableTags = [
  {
    category: 'Development',
    tags: [
      'Frontend Development',
      'Backend Development',
      'Mobile Development',
      'DevOps',
      'Full Stack',
      'UI/UX Design',
      'Game Development',
    ]
  },
  {
    category: 'Project Management',
    tags: [
      'Agile',
      'Scrum Master',
      'Product Owner',
      'Traditional PM',
      'Program Management',
      'Risk Management',
      'Resource Planning',
    ]
  },
  {
    category: 'Design',
    tags: [
      'Graphic Design',
      'UX Research',
      'UI Design',
      'Motion Design',
      'Brand Design',
      'Product Design',
      'Design Systems',
    ]
  },
  {
    category: 'Marketing',
    tags: [
      'Digital Marketing',
      'Content Strategy',
      'SEO',
      'Social Media',
      'Email Marketing',
      'Growth Hacking',
      'Analytics',
    ]
  },
  {
    category: 'Business',
    tags: [
      'Business Analysis',
      'Strategy',
      'Consulting',
      'Sales',
      'Operations',
      'Finance',
      'Leadership',
    ]
  }
];

export function TagSelection() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const navigate = useNavigate();
  const maxTags = 7;

  const handleTagSelect = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else if (selectedTags.length < maxTags) {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleSubmit = () => {
    // Here you would typically save the tags to the user's profile
    // For now, we'll just navigate to the dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <AnimatedCoffee className="h-12 w-12" />
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
            Select Your Expertise
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Choose up to {maxTags} categories that best describe your skills and qualifications
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <Tag className="h-5 w-5 text-primary" />
            <span className="text-sm text-gray-500">
              {selectedTags.length} of {maxTags} tags selected
            </span>
          </div>
        </div>

        <div className="space-y-8">
          {availableTags.map((category) => (
            <div key={category.category} className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.tags.map((tag) => {
                  const isSelected = selectedTags.includes(tag);
                  return (
                    <button
                      key={tag}
                      onClick={() => handleTagSelect(tag)}
                      disabled={!isSelected && selectedTags.length >= maxTags}
                      className={`
                        inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium
                        transition-all duration-200 group relative
                        ${isSelected
                          ? 'bg-primary text-white hover:opacity-90'
                          : selectedTags.length >= maxTags
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }
                      `}
                    >
                      {tag}
                      {isSelected && (
                        <Check className="ml-1.5 h-4 w-4 text-white animate-scale-in" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <button
            onClick={handleSubmit}
            disabled={selectedTags.length === 0}
            className={`
              px-6 py-2 rounded-lg text-white font-medium
              transition-all duration-200
              ${selectedTags.length > 0
                ? 'bg-primary hover:opacity-90'
                : 'bg-gray-300 cursor-not-allowed'
              }
            `}
          >
            Continue to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}