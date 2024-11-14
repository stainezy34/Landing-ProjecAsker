import { createContext, useContext, useState, ReactNode } from 'react';

interface ColorContextType {
  primaryColor: string;
  secondaryColor: string;
  setPrimaryColor: (color: string) => void;
  setSecondaryColor: (color: string) => void;
}

const ColorContext = createContext<ColorContextType | undefined>(undefined);

const defaultPrimary = '#4f46e5'; // indigo-600
const defaultSecondary = '#9333ea'; // purple-600

export function ColorProvider({ children }: { children: ReactNode }) {
  const [primaryColor, setPrimaryColor] = useState(defaultPrimary);
  const [secondaryColor, setSecondaryColor] = useState(defaultSecondary);

  return (
    <ColorContext.Provider value={{
      primaryColor,
      secondaryColor,
      setPrimaryColor,
      setSecondaryColor
    }}>
      <style>
        {`
          :root {
            --color-primary: ${primaryColor};
            --color-secondary: ${secondaryColor};
            --color-primary-hover: ${primaryColor}CC;
            --color-secondary-hover: ${secondaryColor}CC;
          }
          
          /* Text colors */
          .text-primary { color: var(--color-primary) !important; }
          .text-secondary { color: var(--color-secondary) !important; }
          
          /* Background colors */
          .bg-primary { background-color: var(--color-primary) !important; }
          .bg-secondary { background-color: var(--color-secondary) !important; }
          
          /* Gradient backgrounds */
          .bg-gradient-primary {
            background: linear-gradient(to right, var(--color-primary), var(--color-secondary)) !important;
          }
          
          /* Border colors */
          .border-primary { border-color: var(--color-primary) !important; }
          .border-secondary { border-color: var(--color-secondary) !important; }
          
          /* Ring colors */
          .ring-primary { --tw-ring-color: var(--color-primary) !important; }
          .ring-secondary { --tw-ring-color: var(--color-secondary) !important; }
          
          /* Hover states */
          .hover\\:text-primary:hover { color: var(--color-primary) !important; }
          .hover\\:text-secondary:hover { color: var(--color-secondary) !important; }
          .hover\\:bg-primary:hover { background-color: var(--color-primary-hover) !important; }
          .hover\\:bg-secondary:hover { background-color: var(--color-secondary-hover) !important; }
          
          /* Focus states */
          .focus\\:ring-primary:focus { --tw-ring-color: var(--color-primary) !important; }
          .focus\\:ring-secondary:focus { --tw-ring-color: var(--color-secondary) !important; }
          
          /* Background opacity variants */
          .bg-primary\\/5 { background-color: ${primaryColor}0D !important; }
          .bg-primary\\/10 { background-color: ${primaryColor}1A !important; }
          .bg-secondary\\/5 { background-color: ${secondaryColor}0D !important; }
          .bg-secondary\\/10 { background-color: ${secondaryColor}1A !important; }
          
          /* Gradient text */
          .bg-gradient-text {
            background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          /* Replace all indigo-600 with primary color */
          .text-indigo-600 { color: var(--color-primary) !important; }
          .bg-indigo-600 { background-color: var(--color-primary) !important; }
          .hover\\:bg-indigo-600:hover { background-color: var(--color-primary) !important; }
          .hover\\:text-indigo-600:hover { color: var(--color-primary) !important; }
          .focus\\:ring-indigo-600:focus { --tw-ring-color: var(--color-primary) !important; }
          
          /* Replace all indigo-500 with primary hover color */
          .text-indigo-500 { color: var(--color-primary-hover) !important; }
          .bg-indigo-500 { background-color: var(--color-primary-hover) !important; }
          .hover\\:bg-indigo-500:hover { background-color: var(--color-primary-hover) !important; }
          .hover\\:text-indigo-500:hover { color: var(--color-primary-hover) !important; }
          
          /* Custom gradients */
          .custom-gradient {
            background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
          }
          
          /* Button styles */
          .btn-primary {
            background-color: var(--color-primary);
            color: white;
          }
          .btn-primary:hover {
            background-color: var(--color-primary-hover);
          }
          
          /* Gradient backgrounds with opacity */
          .gradient-bg-light {
            background: linear-gradient(135deg, 
              ${primaryColor}0D,
              ${secondaryColor}0D
            );
          }
          
          .gradient-bg-medium {
            background: linear-gradient(135deg,
              ${primaryColor}1A,
              ${secondaryColor}1A
            );
          }
        `}
      </style>
      {children}
    </ColorContext.Provider>
  );
}

export function useColor() {
  const context = useContext(ColorContext);
  if (context === undefined) {
    throw new Error('useColor must be used within a ColorProvider');
  }
  return context;
}