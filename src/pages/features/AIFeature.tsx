import { Brain, Sparkles, Zap, BarChart } from 'lucide-react';
import { FeatureLayout } from '../../components/features/FeatureLayout';

const featureData = {
  title: 'AI Task Categorization',
  description: 'Automatically categorize and organize tasks using advanced AI technology that learns from your project patterns.',
  icon: Brain,
  benefits: [
    {
      icon: Sparkles,
      title: 'Smart Categorization',
      description: 'AI-powered system that learns and adapts to your workflow.',
    },
    {
      icon: Zap,
      title: 'Instant Processing',
      description: 'Real-time task analysis and categorization.',
    },
    {
      icon: BarChart,
      title: 'Learning Patterns',
      description: 'Continuously improves categorization accuracy over time.',
    },
  ],
  details: [
    {
      title: 'Automated Organization',
      description: 'Save time with AI-powered task categorization and organization.',
    },
    {
      title: 'Pattern Recognition',
      description: "Smart system learns from your team's workflow patterns.",
    },
    {
      title: 'Custom Categories',
      description: 'Create and train custom categories for your specific needs.',
    },
    {
      title: 'Accuracy Improvement',
      description: 'System becomes more accurate as it learns from your feedback.',
    },
  ],
};

export function AIFeature() {
  return <FeatureLayout feature={featureData} currentPath="/features/ai-categorization" />;
}