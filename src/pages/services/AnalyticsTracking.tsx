import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Pricing } from "@/components/Pricing";

const features = [
  "Google Analytics Setup",
  "Custom Event Tracking",
  "E-commerce Tracking",
  "Conversion Tracking",
  "User Journey Analysis",
  "Custom Dashboard Creation",
  "Data Visualization",
  "Performance Monitoring",
];

const pricingTiers = [
  {
    name: "Basic",
    price: "$999/mo",
    description: "Essential analytics tracking setup",
    features: [
      "Google Analytics Setup",
      "Basic Event Tracking",
      "Monthly Reports",
      "Basic Dashboard",
      "Data Collection",
      "Email Support"
    ]
  },
  {
    name: "Advanced",
    price: "$1,999/mo",
    description: "Comprehensive analytics solution",
    features: [
      "Everything in Basic",
      "Custom Event Tracking",
      "Weekly Reports",
      "Custom Dashboards",
      "Advanced Analysis",
      "Priority Support"
    ],
    highlight: true
  },
  {
    name: "Enterprise",
    price: "POA",
    description: "Enterprise-grade analytics solution",
    features: [
      "Everything in Advanced",
      "Custom Integration",
      "Real-time Reports",
      "Multiple Dashboards",
      "AI-Powered Analysis",
      "24/7 Support"
    ]
  }
];

const AnalyticsTracking = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <Navigation />
      
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Analytics & Tracking Services
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Advanced analytics setup and tracking implementation to make data-driven decisions.
              </p>
              <Button asChild size="lg">
                <Link to="/contact" className="inline-flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img
                src="/placeholder.svg"
                alt="Analytics & Tracking"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Analytics Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get deep insights into your business performance with our comprehensive analytics solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 rounded-lg bg-white shadow-sm"
              >
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Pricing
        title="Analytics & Tracking Pricing"
        description="Choose the analytics package that fits your needs"
        tiers={pricingTiers}
      />

      <Footer />
    </div>
  );
};

export default AnalyticsTracking;
