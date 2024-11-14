import { CreditCard, DollarSign, Shield, Wallet } from 'lucide-react';
import { FeatureLayout } from '../../components/features/FeatureLayout';

const featureData = {
  title: 'Flexible Payment Options',
  description: 'Handle task-based payments, contracted projects, and task credits with secure Stripe integration.',
  icon: CreditCard,
  benefits: [
    {
      icon: DollarSign,
      title: 'Multiple Payment Methods',
      description: 'Support for credit cards, bank transfers, and digital wallets.',
    },
    {
      icon: Shield,
      title: 'Secure Transactions',
      description: 'Enterprise-grade security with end-to-end encryption.',
    },
    {
      icon: Wallet,
      title: 'Automated Billing',
      description: 'Set up recurring payments and automated invoicing.',
    },
  ],
  details: [
    {
      title: 'Global Coverage',
      description: 'Accept payments from anywhere in the world with multi-currency support.',
    },
    {
      title: 'Instant Transfers',
      description: 'Quick and reliable payment processing with real-time notifications.',
    },
    {
      title: 'Detailed Reports',
      description: 'Comprehensive financial reporting and transaction history.',
    },
    {
      title: 'Cost-Effective',
      description: 'Competitive transaction fees and transparent pricing.',
    },
  ],
};

export function PaymentsFeature() {
  return <FeatureLayout feature={featureData} currentPath="/features/payments" />;
}