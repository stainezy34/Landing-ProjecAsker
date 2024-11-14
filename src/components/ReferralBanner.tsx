import { Gift, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ReferralBanner() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl rounded-3xl bg-gradient-primary p-8 text-center sm:p-12">
          <div className="mx-auto flex max-w-xl items-center justify-center space-x-4">
            <Gift className="h-8 w-8 text-white animate-bounce" />
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Invite friends & earn free months
            </h2>
          </div>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-white/90">
            Get 1 month free for every friend who joins. They get 2 months free too!
          </p>
          <div className="mt-8 flex items-center justify-center gap-x-6">
            <Link
              to="/register"
              className="rounded-full bg-white px-6 py-3 text-base font-semibold text-primary shadow-sm hover:bg-gray-100 transition-colors flex items-center gap-2 group"
            >
              Start Inviting
              <ArrowRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <p className="mt-4 text-sm text-white/80">
            No limit on referrals. The more friends join, the more free months you get!
          </p>
        </div>
      </div>
    </div>
  );
}