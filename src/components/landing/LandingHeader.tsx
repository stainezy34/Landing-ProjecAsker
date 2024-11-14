import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatedCoffee } from '../AnimatedCoffee';

const navigation = [
  { name: 'Features', href: '/#features' },
  { name: 'How It Works', href: '/#how-it-works' },
  { name: 'Testimonials', href: '/#testimonials' },
  { name: 'Pricing', href: '/#pricing' },
  { name: 'Blog', href: '/#blog' },
  { name: 'Community', href: '/#community' },
];

export function LandingHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith('/#')) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.querySelector(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(href);
      window.scrollTo(0, 0);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link 
            to="/" 
            className="-m-1.5 p-1.5 flex items-center gap-2 group"
            onClick={() => {
              window.scrollTo(0, 0);
              setMobileMenuOpen(false);
            }}
          >
            <AnimatedCoffee />
            <span className="text-xl font-bold text-gray-900">PROJECASKER</span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop auth buttons */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Link
            to="/login"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition-colors"
          >
            Log in
          </Link>
          <Link
            to="/register"
            className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white hover:opacity-80 transition-colors"
          >
            Get started
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-primary"
              >
                {item.name}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-2">
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-primary"
              >
                Log in
              </Link>
              <Link
                to="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-white bg-primary hover:opacity-80"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}