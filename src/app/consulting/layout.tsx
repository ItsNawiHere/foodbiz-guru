import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expert Food Business Consulting",
  description:
    "Get personalized guidance from a food industry expert. Consulting services for food startups, product formulation, FSSAI compliance, and manufacturing setup in India.",
  openGraph: {
    title: "Expert Food Business Consulting | FoodBiz Guru",
    description:
      "Personalized consulting for food entrepreneurs — startup guidance, product formulation, regulatory compliance, and manufacturing setup.",
  },
};

export default function ConsultingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
