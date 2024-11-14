import { Coffee } from 'lucide-react';
import { useColor } from '../contexts/ColorContext';

interface AnimatedCoffeeProps {
  className?: string;
}

export function AnimatedCoffee({ className = "h-8 w-8" }: AnimatedCoffeeProps) {
  const { primaryColor } = useColor();

  return (
    <Coffee 
      className={`${className} transition-transform duration-300 ease-in-out group-hover:rotate-12 group-hover:scale-110 hover:animate-[wiggle_1s_ease-in-out_infinite]`}
      style={{ color: primaryColor }}
    />
  );
}