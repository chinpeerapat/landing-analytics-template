import { Button } from "@/components/ui/button"; // Fixed import path
import { ArrowRight, CheckCircle2, BarChart2, Zap, Shield } from "lucide-react";
import React, { memo } from "react";
import type { SVGProps } from "react";

// Updated FeatureCardProps with correct Icon typing for LucideReact icons
interface FeatureCardProps {
  Icon: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<SVGProps<SVGSVGElement>> &
      React.RefAttributes<SVGSVGElement>
  >;
  title: string;
  description: string;
}

// FeatureCard Component
const FeatureCard = memo(({ Icon, title, description }: FeatureCardProps) => (
  <div
    className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
    data-plausible-event="feature-view"
    data-feature={title}
  >
    <Icon className="h-8 w-8 text-blue-600 mb-4" />
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
));
FeatureCard.displayName = "FeatureCard";

// Define PricingCardProps type
interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean;
}

// PricingCard Component
const PricingCard = memo(
  ({
    name,
    price,
    description,
    features,
    highlight = false,
  }: PricingCardProps) => (
    <div
      className={`flex flex-col justify-between p-8 bg-white rounded-lg shadow-sm border ${
        highlight
          ? "ring-2 ring-blue-600 border-blue-600"
          : "border-gray-200 hover:shadow-md"
      } transition-shadow`}
      data-plausible-event="pricing-view"
      data-plan={name}
    >
      <div>
        <h3 className="text-2xl font-semibold text-gray-900">{name}</h3>
        <p className="mt-3 text-base text-gray-600">{description}</p>
        <p className="mt-6">
          <span className="text-4xl font-bold text-gray-900">{price}</span>
          {price !== "Custom" && (
            <span className="text-lg text-gray-600">/month</span>
          )}
        </p>
        <ul className="mt-6 space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-base">
              <CheckCircle2 className="h-5 w-5 text-blue-600 mr-3" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <Button
          className={`w-full py-3 text-base ${
            highlight ? "bg-blue-600 text-white" : ""
          }`}
          data-plausible-event="pricing-cta-click"
          data-plan={name}
          aria-label={`Get started with the ${name} plan`}
        >
          Get Started
        </Button>
      </div>
    </div>
  )
);
PricingCard.displayName = "PricingCard";

export default function Home() {
  const features = [
    {
      Icon: BarChart2,
      title: "Advanced Analytics",
      description:
        "Get deep insights into your business performance with real-time analytics and reporting.",
    },
    {
      Icon: Zap,
      title: "Lightning Fast",
      description:
        "Experience blazing-fast performance with our optimized infrastructure.",
    },
    {
      Icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-grade security to keep your data safe and compliant with regulations.",
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for small businesses",
      features: ["5 Team Members", "Basic Analytics", "24/7 Support"],
    },
    {
      name: "Professional",
      price: "$99",
      description: "For growing businesses",
      features: [
        "Unlimited Team Members",
        "Advanced Analytics",
        "Priority Support",
        "Custom Integrations",
      ],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Everything in Pro",
        "Dedicated Account Manager",
        "Custom Development",
        "SLA Guarantee",
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight max-w-3xl mx-auto">
            Transform Your Business with{" "}
            <span className="text-blue-600">AI-Powered</span> Solutions
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Leverage cutting-edge artificial intelligence to streamline your
            operations, boost productivity, and drive growth for your business.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="default"
              className="text-base"
              data-plausible-event="hero-cta-click"
              aria-label="Get Started with AI-Powered Solutions"
            >
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="default"
              variant="outline"
              className="text-base"
              data-plausible-event="demo-click"
              aria-label="Book a Demo"
            >
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 lg:py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Features that set us apart
            </h2>
            <p className="mt-3 text-base text-gray-600 max-w-3xl mx-auto">
              Everything you need to take your business to the next level
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 lg:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Simple, transparent pricing
          </h2>
          <p className="mt-3 text-base text-gray-600">
            No hidden fees. No surprises. Choose the plan that works for you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-20 bg-blue-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to transform your business?
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-6">
            Join thousands of businesses already using our platform to grow and
            succeed.
          </p>
          <Button
            size="default"
            variant="secondary"
            className="text-base"
            data-plausible-event="footer-cta-click"
            aria-label="Get Started Now"
          >
            Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </>
  );
}
