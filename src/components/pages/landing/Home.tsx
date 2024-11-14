import { 
  Hero,
  Features,
  HowItWorks,
  Testimonials,
  BlogPosts,
  CommunitySection,
  Pricing 
} from '../../components/landing';
import { ReferralBanner } from '../../components/ReferralBanner';

export function Home() {
  return (
    <div className="relative isolate">
      <Hero />
      <Features />
      <HowItWorks />
      <ReferralBanner />
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="blog">
        <BlogPosts />
      </div>
      <div id="community">
        <CommunitySection />
      </div>
    </div>
  );
}