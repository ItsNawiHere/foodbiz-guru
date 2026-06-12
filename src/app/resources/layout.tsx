import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Resources & Templates for Food Entrepreneurs',
  description:
    'Download free guides, checklists, and templates to kickstart your food business journey. FSSAI checklists, label templates, costing calculators, and more.',
  openGraph: {
    title: 'Free Resources & Templates — FoodBiz Guru',
    description:
      'Download free guides, checklists, and templates for food entrepreneurs in India.',
  },
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
