import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { AnimatedCoffee } from '../../components/AnimatedCoffee';

// ... rest of the imports

export function Login() {
  // ... existing state and handlers

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center group">
          <AnimatedCoffee className="h-12 w-12" />
        </div>
        {/* ... rest of the component */}
      </div>
    </div>
  );
}