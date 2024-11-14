import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Coffee } from 'lucide-react';

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    alt: "Team collaboration"
  },
  {
    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2015&q=80",
    alt: "Project management dashboard"
  },
  {
    url: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    alt: "Team meeting"
  }
];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative isolate pt-14">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      
      <div className="py-24 sm:py-32 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Coffee className="h-12 w-12 text-indigo-600" />
              <div className="relative">
                <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-yellow-400 animate-pulse" />
                <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent sm:text-6xl">
                  Organize, Execute, and Achieve
                </h1>
              </div>
            </div>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Efficiently manage projects, streamline tasks, and enhance team collaboration with AI-driven organisation, 
              flexible payment solutions, and comprehensive project oversight.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:from-indigo-600 hover:to-purple-600 transition-all duration-200 transform hover:scale-105"
              >
                Try Free for 14 Days
              </a>
              <a 
                href="#how-it-works" 
                className="group text-sm font-semibold leading-6 text-gray-900 flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-50 transition-colors duration-200"
              >
                Learn how it works
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          </div>

          <div className="mt-16 flow-root sm:mt-24">
            <div className="relative rounded-2xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 transform hover:scale-[1.01] transition-transform duration-200">
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                {heroImages.map((image, index) => (
                  <img
                    key={index}
                    src={image.url}
                    alt={image.alt}
                    className={`
                      absolute inset-0 w-full h-full object-cover transition-opacity duration-1000
                      ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}
                    `}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 to-purple-500/5" />
                
                {/* Image Navigation Dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-white w-4' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}