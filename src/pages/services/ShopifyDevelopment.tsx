import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Pricing } from "@/components/Pricing";

const features = [
  "Custom Theme Development",
  "Third-party App Integration",
  "Payment Gateway Setup",
  "Performance Optimization",
  "Mobile-First Design",
  "SEO Implementation",
  "Security Features",
  "Analytics Integration",
];

const pricingTiers = [
  {
    name: "Hourly Rate / Retainer",
    price: "$50 per hour",
    description: "Need us to implement a new application or build a custom app, we got you.",
    features: [
      "Let's scope out what you need and create a plan of action",
      "Minimum 20 hour engagement",
      "Reviews App Integration (Okendo, Yotpo)",
      "Team Training",
      "Ongoing Support Available"
    ]
  },
  {
    name: "Premium Migration",
    price: "Starting from $5k",
    description: "6-8 weeks. Ideal for growing businesses needing custom functionality and advanced integrations during migration.",
    features: [
      "Everything in Standard Migration",
      "Custom Functionality",
      "Advanced Apps Integration",
      "Klaviyo Email Setup",
      "60 Days Support"
    ],
    highlight: true
  },
  {
    name: "Enterprise Migration",
    price: "Starting from $7.5k",
    description: "8-12 weeks. Comprehensive migration solution for large stores with complex requirements and custom integrations.",
    features: [
      "Dedicated Project Manager",
      "Custom Development",
      "Advanced Integrations",
      "Full Data Migration",
      "90 Days Priority Support"
    ]
  }
];

const ShopifyDevelopment = () => {
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
                Shopify Development Services
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Custom Shopify solutions tailored to your unique business needs with a focus on performance and user experience.
              </p>
              <Button asChild size="lg">
                <Link 
                  to="/contact?service=shopify-development" 
                  className="inline-flex items-center"
                >
                  Free Consultation
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
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Shopify Development"
                className="rounded-lg shadow-xl aspect-video object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Development Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a proven development process that ensures your store's functionality and performance meet the highest standards.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        title="Development Packages"
        description="Choose the right development package that best fits your business needs"
        tiers={pricingTiers}
        service="shopify-development"
      />

      <Footer />
    </div>
  );
};

export default ShopifyDevelopment;