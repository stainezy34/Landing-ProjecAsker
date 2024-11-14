import { Star } from 'lucide-react';

const testimonials = [
  {
    content: "ProjecAsker has transformed how our team manages projects. The AI categorization saves us hours of manual work every week.",
    author: "Sarah Wilson",
    role: "Project Manager",
    company: "TechCorp Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 5
  },
  {
    content: "The intuitive interface and powerful features have made project management a breeze. Our team's productivity has increased by 40%.",
    author: "Michael Chen",
    role: "Engineering Lead",
    company: "InnovateLabs",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 5
  },
  {
    content: "The AI-driven task categorization and resource management features are game-changers. Highly recommend for any growing team.",
    author: "Emily Rodriguez",
    role: "Product Owner",
    company: "DesignStudio",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent sm:text-4xl">
            Loved by teams worldwide
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            See what our customers have to say about their experience with ProjecAsker
          </p>
        </div>

        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="relative bg-white p-8 shadow-sm ring-1 ring-gray-900/5 rounded-2xl transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-5 w-5 text-yellow-400 fill-current" 
                    />
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-gray-900 text-lg leading-7 font-medium">
                  "{testimonial.content}"
                </blockquote>

                {/* Author Info */}
                <div className="mt-6 flex items-center gap-x-4">
                  <img
                    className="h-12 w-12 rounded-full bg-gray-50 object-cover"
                    src={testimonial.image}
                    alt={testimonial.author}
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 -mt-4 -mr-4 h-20 w-20 bg-gradient-to-bl from-indigo-600/10 to-purple-600/10 rounded-full blur-2xl opacity-50" />
                <div className="absolute bottom-0 left-0 -mb-4 -ml-4 h-20 w-20 bg-gradient-to-tr from-indigo-600/10 to-purple-600/10 rounded-full blur-2xl opacity-50" />
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <a
              href="/signup"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transform transition-all duration-200 hover:scale-105"
            >
              Start Your Free Trial
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}