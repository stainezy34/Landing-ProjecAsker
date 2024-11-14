import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedCoffee } from '../AnimatedCoffee';
import { ShareButton } from '../ShareButton';
import { SocialProof } from '../SocialProof';

// ... rest of the imports and heroImages array stays the same

export function Hero() {
  // ... existing state and useEffect

  return (
    <div className="relative isolate pt-14">
      {/* ... existing background gradient ... */}
      
      <div className="py-24 sm:py-32 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <AnimatedCoffee className="h-12 w-12" />
              <div className="relative">
                <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-yellow-400 animate-pulse" />
                <h1 className="text-4xl font-bold tracking-tight bg-gradient-text sm:text-6xl">
                  Organize, Execute, and Achieve
                </h1>
              </div>
            </div>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Efficiently manage projects, streamline tasks, and enhance team collaboration with AI-driven organisation, 
              flexible payment solutions, and comprehensive project oversight.
            </p>
            
            {/* Social Proof Pills */}
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <span className="inline-flex items-center rounded-full bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
                ⭐️ 4.9/5 from 1000+ reviews
              </span>
              <span className="inline-flex items-center rounded-full bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
                🚀 Used by 10,000+ teams
              </span>
              <span className="inline-flex items-center rounded-full bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
                🏆 #1 in Project Management
              </span>
            </div>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/register"
                className="rounded-full bg-gradient-primary px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-all duration-200 transform hover:scale-105 group"
              >
                Try Free for 14 Days
                <ArrowRight className="ml-2 inline-block h-4 w-4 transform transition-transform group-hover:translate-x-1" />
              </Link>
              <a 
                href="#how-it-works" 
                className="group text-sm font-semibold leading-6 text-gray-900 flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-50 transition-colors duration-200"
              >
                Learn how it works
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <ShareButton />
            </div>
          </div>

          {/* ... rest of the hero content ... */}
        </div>
      </div>

      {/* Add Social Proof Section */}
      <SocialProof />
    </div>
  );
}