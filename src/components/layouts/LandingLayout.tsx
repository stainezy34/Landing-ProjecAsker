import { Outlet } from 'react-router-dom';
import { LandingHeader, LandingFooter } from '../components/landing';

export function LandingLayout() {
  return (
    <div className="min-h-screen bg-white">
      <LandingHeader />
      <main>
        <Outlet />
      </main>
      <LandingFooter />
    </div>
  );
}