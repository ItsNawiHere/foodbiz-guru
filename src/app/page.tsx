import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { RoadmapSection } from '@/components/home/RoadmapSection';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { WhyChooseSection } from '@/components/home/WhyChooseSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { NewsletterSection } from '@/components/home/NewsletterSection';

export const metadata: Metadata = {
  title: 'FoodBiz Guru — Your Guide to Food Business Success in India',
  description:
    'Helping food entrepreneurs build, launch, and scale successful food businesses in India through practical guides, expert consulting, and industry resources.',
  keywords: [
    'food business India',
    'FSSAI license guide',
    'food startup India',
    'food entrepreneur',
    'food manufacturing setup',
    'food product development',
    'food industry guide',
    'food business consulting India',
  ],
  openGraph: {
    title: 'FoodBiz Guru — Your Guide to Food Business Success in India',
    description:
      'Helping food entrepreneurs build, launch, and scale successful food businesses in India through practical guides, expert consulting, and industry resources.',
    type: 'website',
    url: 'https://foodbizguru.com',
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <RoadmapSection />
      <FeaturedProducts />
      <WhyChooseSection />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  );
}
