import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Food Business Guides",
  description:
    "Browse our collection of practical, actionable guides designed to help you build, launch, and grow your food business in India. From FSSAI licensing to manufacturing setup.",
  openGraph: {
    title: "Premium Food Business Guides | FoodBiz Guru",
    description:
      "Practical guides for food entrepreneurs — FSSAI licensing, product formulation, manufacturing setup, packaging, and more.",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
