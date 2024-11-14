import { MessageSquare, Users, Heart, Trophy } from 'lucide-react';

const discussions = [
  {
    id: 1,
    title: 'Best practices for managing remote teams',
    author: 'Sarah Wilson',
    replies: 23,
    likes: 45,
    category: 'Team Management',
    lastActivity: '3h ago',
  },
  {
    id: 2,
    title: 'How to improve project documentation',
    author: 'John Davis',
    replies: 15,
    likes: 32,
    category: 'Documentation',
    lastActivity: '5h ago',
  },
  {
    id: 3,
    title: 'Tips for effective sprint planning',
    author: 'Emily Chen',
    replies: 18,
    likes: 27,
    category: 'Agile',
    lastActivity: '1d ago',
  },
];

export function CommunitySection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Community</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Join the discussion
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Connect with other project managers, share experiences, and learn from the community.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-gray-900/5">
              <div className="flex items-center gap-x-3">
                <Users className="h-6 w-6 text-indigo-600" />
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Active Members</h3>
              </div>
              <p className="mt-2 text-2xl font-semibold text-gray-900">5,234</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-gray-900/5">
              <div className="flex items-center gap-x-3">
                <MessageSquare className="h-6 w-6 text-indigo-600" />
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Discussions</h3>
              </div>
              <p className="mt-2 text-2xl font-semibold text-gray-900">1,423</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-gray-900/5">
              <div className="flex items-center gap-x-3">
                <Heart className="h-6 w-6 text-indigo-600" />
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Solutions</h3>
              </div>
              <p className="mt-2 text-2xl font-semibold text-gray-900">892</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-gray-900/5">
              <div className="flex items-center gap-x-3">
                <Trophy className="h-6 w-6 text-indigo-600" />
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Expert Users</h3>
              </div>
              <p className="mt-2 text-2xl font-semibold text-gray-900">156</p>
            </div>
          </div>

          <div className="mt-12">
            <div className="rounded-lg bg-white shadow ring-1 ring-gray-900/5">
              <div className="p-6">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Recent Discussions</h3>
                <div className="mt-6 divide-y divide-gray-100">
                  {discussions.map((discussion) => (
                    <div key={discussion.id} className="py-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-sm font-semibold leading-6 text-gray-900">
                            <a href="#" className="hover:text-indigo-600">
                              {discussion.title}
                            </a>
                          </h4>
                          <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                            <p>By {discussion.author}</p>
                            <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
                              <circle cx={1} cy={1} r={1} />
                            </svg>
                            <p>{discussion.category}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-x-4 text-xs leading-5 text-gray-500">
                          <div className="flex items-center gap-x-1">
                            <MessageSquare className="h-4 w-4" />
                            {discussion.replies}
                          </div>
                          <div className="flex items-center gap-x-1">
                            <Heart className="h-4 w-4" />
                            {discussion.likes}
                          </div>
                          <p>{discussion.lastActivity}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Start a new discussion
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}