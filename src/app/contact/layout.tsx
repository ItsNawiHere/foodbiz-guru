import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us — Get in Touch',
  description:
    'Have a question about our food business guides or consulting services? Get in touch with FoodBiz Guru. We respond within 24-48 hours.',
  openGraph: {
    title: 'Contact Us — FoodBiz Guru',
    description:
      'Have a question? Want to collaborate? Get in touch with FoodBiz Guru.',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
