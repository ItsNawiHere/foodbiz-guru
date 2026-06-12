// Site-wide constants for FoodBiz Guru

export const SITE_CONFIG = {
  name: "FoodBiz Guru",
  tagline: "Your Guide to Food Business Success in India",
  description:
    "Helping food entrepreneurs build, launch, and scale successful food businesses in India through practical guides, expert consulting, and industry resources.",
  url: "https://foodbizguru.com",
  email: "hello@foodbizguru.com",
  phone: "+91 99999 99999",
  whatsapp: "919999999999",
  whatsappMessage:
    "Hi! I'm interested in learning more about your food business guides and consulting services.",
  social: {
    instagram: "#",
    linkedin: "#",
    youtube: "#",
    twitter: "#",
  },
  ga4Id: "G-XXXXXXXXXX", // TODO: Replace with actual GA4 Measurement ID
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Resources", href: "/resources" },
  { label: "Blog", href: "/blog" },
  { label: "Consulting", href: "/consulting" },
  { label: "Contact", href: "/contact" },
];

export const PRODUCTS = [
  {
    id: "food-startup-blueprint",
    title: "Food Startup Blueprint",
    subtitle: "Complete Business Plan Guide",
    description:
      "A step-by-step guide to planning, launching, and scaling your food startup in India. Covers business model, market analysis, funding, and operations.",
    price: 499,
    originalPrice: 999,
    currency: "INR",
    category: "Business",
    features: [
      "Business model canvas template",
      "Market research framework",
      "Financial projections spreadsheet",
      "Step-by-step launch checklist",
      "Funding & investor pitch guide",
    ],
    badge: "Bestseller",
    icon: "🚀",
  },
  {
    id: "fssai-licensing-guide",
    title: "FSSAI Licensing Guide",
    subtitle: "Complete Regulatory Handbook",
    description:
      "Everything you need to know about FSSAI registration, licensing, and compliance. Includes application walkthroughs, document checklists, and renewal procedures.",
    price: 399,
    originalPrice: 799,
    currency: "INR",
    category: "Regulatory",
    features: [
      "FSSAI registration vs. license comparison",
      "Step-by-step application guide",
      "Document checklist & templates",
      "Compliance requirements matrix",
      "Renewal & modification procedures",
    ],
    badge: "Popular",
    icon: "📋",
  },
  {
    id: "food-product-formulation",
    title: "Food Product Formulation Guide",
    subtitle: "R&D to Market-Ready Products",
    description:
      "Learn how to develop food products from concept to shelf. Covers ingredient selection, formulation basics, shelf-life testing, and nutritional labelling.",
    price: 599,
    originalPrice: 1199,
    currency: "INR",
    category: "Product Development",
    features: [
      "Formulation development process",
      "Ingredient sourcing strategies",
      "Shelf-life testing protocols",
      "Nutritional analysis guide",
      "Product costing framework",
    ],
    badge: "New",
    icon: "🧪",
  },
  {
    id: "food-manufacturing-setup",
    title: "Food Manufacturing Setup Guide",
    subtitle: "Factory to Production Line",
    description:
      "Complete guide to setting up a food manufacturing unit in India. From facility design to equipment selection, hygiene standards, and quality control systems.",
    price: 499,
    originalPrice: 999,
    currency: "INR",
    category: "Manufacturing",
    features: [
      "Facility layout & design templates",
      "Equipment selection checklist",
      "GMP & hygiene standards",
      "Quality control SOPs",
      "Production workflow optimization",
    ],
    badge: null,
    icon: "🏭",
  },
  {
    id: "packaging-labelling-guide",
    title: "Packaging & Labelling Guide",
    subtitle: "Compliance & Brand Design",
    description:
      "Master food packaging regulations, label design requirements, and material selection. Includes FSSAI labelling norms, barcode setup, and packaging cost optimization.",
    price: 349,
    originalPrice: 699,
    currency: "INR",
    category: "Packaging",
    features: [
      "FSSAI labelling regulations",
      "Packaging material selection guide",
      "Label design requirements & templates",
      "Barcode & batch coding setup",
      "Sustainable packaging options",
    ],
    badge: null,
    icon: "📦",
  },
  {
    id: "export-documentation-guide",
    title: "Export Documentation Guide",
    subtitle: "Go Global with Indian Food",
    description:
      "Navigate the export process for food products from India. Covers APEDA registration, export documentation, international compliance, and market entry strategies.",
    price: 449,
    originalPrice: 899,
    currency: "INR",
    category: "Export",
    features: [
      "APEDA registration process",
      "Export documentation checklist",
      "International food safety standards",
      "Country-specific compliance guide",
      "Market entry strategy framework",
    ],
    badge: null,
    icon: "🌍",
  },
];

export const CONSULTING_SERVICES = [
  {
    id: "startup-consultation",
    title: "Startup Consultation",
    description:
      "Get expert guidance on launching your food business from scratch. We help you with business planning, market analysis, and go-to-market strategy.",
    icon: "Rocket",
    features: [
      "Business model validation",
      "Market opportunity analysis",
      "Revenue model planning",
      "Go-to-market strategy",
      "Competitive positioning",
    ],
    duration: "60-minute session",
  },
  {
    id: "product-formulation",
    title: "Product Formulation Support",
    description:
      "Technical support for developing food products. From ingredient selection to shelf-life optimization and nutritional profiling.",
    icon: "FlaskConical",
    features: [
      "Recipe development guidance",
      "Ingredient sourcing support",
      "Shelf-life optimization",
      "Nutritional profiling",
      "Cost optimization",
    ],
    duration: "90-minute session",
  },
  {
    id: "regulatory-guidance",
    title: "Regulatory Guidance",
    description:
      "Navigate FSSAI licensing, food safety compliance, and regulatory requirements with confidence. Stay compliant and avoid penalties.",
    icon: "Shield",
    features: [
      "FSSAI license application support",
      "Food safety compliance audit",
      "Labelling review & correction",
      "Import/Export regulatory guidance",
      "FSMS implementation support",
    ],
    duration: "60-minute session",
  },
  {
    id: "manufacturing-setup",
    title: "Manufacturing Setup Guidance",
    description:
      "End-to-end support for setting up your food manufacturing unit. From facility planning to equipment procurement and quality systems.",
    icon: "Factory",
    features: [
      "Facility layout planning",
      "Equipment selection advice",
      "GMP implementation",
      "Quality system setup",
      "Vendor & supplier guidance",
    ],
    duration: "90-minute session",
  },
];

export const FREE_RESOURCES = [
  {
    id: "food-business-starter-checklist",
    title: "Food Business Starter Checklist",
    description:
      "A comprehensive checklist covering everything you need to start a food business in India — from idea validation to your first sale.",
    category: "Checklist",
    icon: "✅",
    downloadCount: "2,500+",
  },
  {
    id: "fssai-document-checklist",
    title: "FSSAI Document Checklist",
    description:
      "Complete list of documents required for FSSAI registration and licensing. Never miss a document again.",
    category: "Checklist",
    icon: "📄",
    downloadCount: "3,200+",
  },
  {
    id: "food-labelling-template",
    title: "Food Label Design Template",
    description:
      "Ready-to-use food label template that complies with FSSAI regulations. Just fill in your product details.",
    category: "Template",
    icon: "🏷️",
    downloadCount: "1,800+",
  },
  {
    id: "product-costing-calculator",
    title: "Product Costing Calculator",
    description:
      "Excel template to calculate your food product costs accurately. Includes raw material, packaging, overhead, and margin calculations.",
    category: "Template",
    icon: "📊",
    downloadCount: "2,100+",
  },
  {
    id: "food-business-glossary",
    title: "Food Industry Glossary",
    description:
      "150+ essential food industry terms explained in simple language. Perfect for beginners entering the food business space.",
    category: "Guide",
    icon: "📚",
    downloadCount: "1,500+",
  },
  {
    id: "gmp-checklist",
    title: "GMP Compliance Checklist",
    description:
      "Good Manufacturing Practices checklist for food production facilities. Ensure your factory meets quality and safety standards.",
    category: "Checklist",
    icon: "🔍",
    downloadCount: "1,900+",
  },
];

export const BLOG_CATEGORIES = [
  { label: "All", slug: "all" },
  { label: "Food Business", slug: "food-business" },
  { label: "FSSAI", slug: "fssai" },
  { label: "Product Development", slug: "product-development" },
  { label: "Manufacturing", slug: "manufacturing" },
  { label: "Food Safety", slug: "food-safety" },
  { label: "Packaging", slug: "packaging" },
  { label: "Career Guidance", slug: "career-guidance" },
];

export const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    role: "Founder, OrganicBites",
    quote:
      "The Food Startup Blueprint gave me a clear roadmap. I went from confused to confident in just a week. My organic snacks brand launched 3 months ahead of schedule!",
    rating: 5,
    avatar: "PS",
  },
  {
    name: "Rajesh Kumar",
    role: "Food Technologist",
    quote:
      "The FSSAI Guide saved me hours of research. Everything is explained so clearly. I got my license approved in the first attempt — something I couldn't do in 3 previous tries.",
    rating: 5,
    avatar: "RK",
  },
  {
    name: "Anita Desai",
    role: "Home Baker turned Entrepreneur",
    quote:
      "From my kitchen to a small factory — the Manufacturing Setup Guide was my companion throughout. The consulting session helped me avoid costly mistakes.",
    rating: 5,
    avatar: "AD",
  },
  {
    name: "Vikram Singh",
    role: "CEO, SpiceTrail Exports",
    quote:
      "The Export Documentation Guide made international trade feel simple. We successfully exported our first consignment to the UAE within 4 months of following the guide.",
    rating: 5,
    avatar: "VS",
  },
  {
    name: "Meera Patel",
    role: "Food Science Student",
    quote:
      "As a student, the free resources and blog posts have been invaluable. I feel so much more prepared for my career in the food industry. Highly recommend FoodBiz Guru!",
    rating: 5,
    avatar: "MP",
  },
];

export const ROADMAP_STEPS = [
  {
    step: 1,
    title: "Ideation & Research",
    description:
      "Validate your food business idea with market research and feasibility analysis.",
    icon: "Lightbulb",
  },
  {
    step: 2,
    title: "Product Development",
    description:
      "Develop your recipe, formulation, and get your product shelf-life tested.",
    icon: "FlaskConical",
  },
  {
    step: 3,
    title: "Licensing & Compliance",
    description:
      "Obtain FSSAI license, trademark registration, and necessary certifications.",
    icon: "Shield",
  },
  {
    step: 4,
    title: "Manufacturing Setup",
    description:
      "Set up your production facility with proper equipment and quality systems.",
    icon: "Factory",
  },
  {
    step: 5,
    title: "Launch & Scale",
    description:
      "Launch your brand, build distribution channels, and scale your food business.",
    icon: "TrendingUp",
  },
];
