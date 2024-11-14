import { useState } from 'react';
import { Check, Palette } from 'lucide-react';
import { useColor } from '../contexts/ColorContext';

export function ColorPicker() {
  const [isOpen, setIsOpen] = useState(false);
  const { primaryColor, secondaryColor, setPrimaryColor, setSecondaryColor } = useColor();

  const presetColors = [
    { 
      name: 'Professional',
      primary: '#4f46e5', 
      secondary: '#9333ea'  // Indigo-Purple
    },
    { 
      name: 'Ocean',
      primary: '#2563eb', 
      secondary: '#0891b2'  // Blue-Cyan
    },
    { 
      name: 'Forest',
      primary: '#059669', 
      secondary: '#16a34a'  // Emerald-Green
    },
    { 
      name: 'Sunset',
      primary: '#dc2626', 
      secondary: '#ea580c'  // Red-Orange
    },
    { 
      name: 'Royal',
      primary: '#7c3aed', 
      secondary: '#6366f1'  // Violet-Indigo
    },
    { 
      name: 'Tropical',
      primary: '#0d9488', 
      secondary: '#84cc16'  // Teal-Lime
    },
    { 
      name: 'Berry',
      primary: '#be185d', 
      secondary: '#9d174d'  // Pink-Rose
    },
    { 
      name: 'Autumn',
      primary: '#b45309', 
      secondary: '#92400e'  // Amber-Brown
    },
    { 
      name: 'Lavender',
      primary: '#7e22ce', 
      secondary: '#a855f7'  // Purple-Fuchsia
    },
    { 
      name: 'Mint',
      primary: '#047857', 
      secondary: '#10b981'  // Green-Emerald
    },
    { 
      name: 'Cherry',
      primary: '#be123c', 
      secondary: '#e11d48'  // Rose-Red
    },
    { 
      name: 'Sky',
      primary: '#0284c7', 
      secondary: '#0ea5e9'  // Blue-Sky
    }
  ];

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 group flex items-center gap-2"
        title="Pick your mood"
      >
        <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors">Pick Your Mood</span>
        <div 
          className="w-3 h-3 rounded-full"
          style={{
            background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`
          }}
        />
      </button>

      {isOpen && (
        <div className="absolute bottom-full right-0 mb-4 p-4 bg-white rounded-lg shadow-xl w-72">
          <div className="flex items-center gap-2 mb-6">
            <Palette className="h-5 w-5 text-primary" />
            <h3 className="text-base font-medium text-gray-900">Pick Your Mood</h3>
          </div>
          
          <div className="grid grid-cols-3 gap-3">
            {presetColors.map((colors, index) => (
              <button
                key={index}
                onClick={() => {
                  setPrimaryColor(colors.primary);
                  setSecondaryColor(colors.secondary);
                }}
                className="group relative flex flex-col items-center"
              >
                <div 
                  className="w-full pt-[100%] rounded-full overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`
                  }}
                >
                  {primaryColor === colors.primary && secondaryColor === colors.secondary && (
                    <Check className="absolute inset-0 m-auto h-4 w-4 text-white" />
                  )}
                </div>
                <span className="mt-1 text-xs text-gray-600 group-hover:text-primary transition-colors duration-200">
                  {colors.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}