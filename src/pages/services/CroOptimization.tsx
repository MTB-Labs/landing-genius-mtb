import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Pricing } from "@/components/Pricing";

const features = [
  "A/B Testing Implementation",
  "User Behavior Analysis",
  "Conversion Funnel Optimization",
  "Landing Page Optimization",
  "Cart Abandonment Recovery",
  "Personalization Strategies",
  "Analytics Integration",
  "Continuous Performance Monitoring",
];

const pricingTiers = [
  {
    name: "Starter",
    price: "$1,499/mo",
    description: "Essential CRO tools and strategies",
    features: [
      "A/B Testing Setup",
      "Basic Analytics Integration",
      "Monthly Reports",
      "2 Test Variations",
      "Basic Heat Mapping",
      "Email Support"
    ]
  },
  {
    name: "Professional",
    price: "$2,999/mo",
    description: "Advanced optimization for growing businesses",
    features: [
      "Everything in Starter",
      "Advanced Analytics",
      "Weekly Reports",
      "5 Test Variations",
      "Session Recordings",
      "Priority Support"
    ],
    highlight: true
  },
  {
    name: "Enterprise",
    price: "POA",
    description: "Custom solutions for large-scale operations",
    features: [
      "Everything in Professional",
      "Custom Integration",
      "Daily Reports",
      "Unlimited Tests",
      "AI-Powered Insights",
      "Dedicated Support"
    ]
  }
];

const CroOptimization = () => {
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
                CRO Optimization Services
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Data-driven conversion rate optimization strategies to maximize your e-commerce revenue and customer engagement.
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
                alt="CRO Optimization"
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
              Our CRO Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We help businesses optimize their conversion rates through data-driven strategies and continuous improvement.
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
        title="CRO Optimization Pricing"
        description="Select the plan that best fits your optimization needs"
        tiers={pricingTiers}
      />

      <Footer />
    </div>
  );
};

export default CroOptimization;
