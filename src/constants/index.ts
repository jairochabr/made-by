import { acme, apex, celestia, echo, pulse, quantum } from "@/assets";
import { Instagram, LinkedIn, Pinterest, Tiktok, X, Youtube } from "@/components/icons";

export const NAVIGATION = [
  { title: "About", url: "#about" },
  { title: "Features", url: "#features" },
  { title: "Customers", url: "#customers" },
  { title: "Updates", url: "#updates" },
  { title: "Help", url: "#help" },
];

export const PARTNERS = [
  { src: acme, alt: "Acme Corp Logo" },
  { src: quantum, alt: "Quantum Logo" },
  { src: echo, alt: "Echo Valley Logo" },
  { src: celestia, alt: "Celestia Logo" },
  { src: pulse, alt: "Pulse Logo" },
  { src: apex, alt: "Apex Logo" },
];

export const FEATURES = [
  {
    id: "0",
    title: "Integration ecosystem",
    description:
      "Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.",
  },
  {
    id: "1",
    title: "Goal setting and tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    id: "2",
    title: "Secure data encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

export const QUESTIONS = [
  {
    id: "0",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers. For enterprise customers, we also offer invoice-based payments with NET 30 terms. All transactions are processed securely through our payment gateway.",
  },
  {
    id: "1",
    question: "How does the pricing work for teams?",
    answer:
      "Our team pricing is based on a per-user, per-month model with significant volume discounts. Teams of 5-10 members receive a 10% discount, 11-25 members get 15% off, and 25+ team members qualify for 20% off. All team plans include advanced collaboration features, priority support, and custom onboarding. Contact our sales team for a detailed quote.",
  },
  {
    id: "2",
    question: "What kind of support do you provide?",
    answer:
      "We offer multiple support channels to ensure you get help when you need it. This includes 24/7 email support, live chat during business hours, comprehensive documentation, video tutorials, and a community forum. Enterprise customers receive dedicated support with guaranteed response times and a designated account manager.",
  },
  {
    id: "3",
    question: "Do you offer a free trial?",
    answer:
      "Yes, we offer a 14-day free trial on all our plans with full access to all features. No credit card is required to start your trial. You can upgrade to a paid plan at any time during or after your trial period. If you need more time to evaluate the platform, our sales team can arrange an extended trial period.",
  },
];

export const SOCIALS = [
  { href: "#", icon: X, label: "X" },
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: Pinterest, label: "Pinterest" },
  { href: "#", icon: LinkedIn, label: "LinkedIn" },
  { href: "#", icon: Tiktok, label: "TikTok" },
  { href: "#", icon: Youtube, label: "YouTube" },
];
