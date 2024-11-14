import { Users, Share2, MessageSquare, Clock } from 'lucide-react';
import { FeatureLayout } from '../../components/features/FeatureLayout';

const featureData = {
  title: 'Team Collaboration',
  description: 'Work seamlessly with team members, assign roles, and track progress in real-time.',
  icon: Users,
  benefits: [
    {
      icon: Share2,
      title: 'Real-time Sharing',
      description: 'Share and collaborate on tasks and documents in real-time.',
    },
    {
      icon: MessageSquare,
      title: 'Team Communication',
      description: 'Built-in messaging and commenting system for seamless communication.',
    },
    {
      icon: Clock,
      title: 'Activity Tracking',
      description: 'Monitor team activity and track progress in real-time.',
    },
  ],
  details: [
    {
      title: 'Improved Communication',
      description: 'Keep everyone on the same page with real-time updates and notifications.',
    },
    {
      title: 'Enhanced Productivity',
      description: 'Streamline workflows and reduce time spent on coordination.',
    },
    {
      title: 'Better Organization',
      description: 'Keep all project-related communication in one place.',
    },
    {
      title: 'Team Engagement',
      description: 'Foster better team collaboration and engagement.',
    },
  ],
};

export function CollaborationFeature() {
  return <FeatureLayout feature={featureData} currentPath="/features/collaboration" />;
}