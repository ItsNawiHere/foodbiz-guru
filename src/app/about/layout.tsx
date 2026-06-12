import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about FoodBiz Guru's mission to simplify food industry knowledge and empower food entrepreneurs across India. Discover our story, expertise, and commitment to your success.",
  openGraph: {
    title: "About FoodBiz Guru",
    description:
      "Simplifying food industry knowledge for entrepreneurs across India. Learn about our mission, background, and expertise.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
