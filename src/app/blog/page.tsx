import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/blog';
import { BlogContent } from '@/components/blog/BlogContent';

export const metadata: Metadata = {
  title: 'Food Business Blog — Insights, Guides & Tips',
  description:
    'Read expert insights, practical guides, and tips to help you succeed in the food industry. From FSSAI licensing to food manufacturing and beyond.',
  openGraph: {
    title: 'Food Business Blog — FoodBiz Guru',
    description:
      'Expert insights, practical guides, and tips for food entrepreneurs in India.',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return <BlogContent posts={posts} />;
}
