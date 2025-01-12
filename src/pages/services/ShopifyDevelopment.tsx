import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ShoppingCart } from "lucide-react";
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
    name: "Standard Development",
    price: "Starting from $2k",
    description: "4-5 weeks. Perfect for small to medium-sized businesses looking to establish their Shopify presence.",
    features: [
      "Premium Theme Setup & Customization",
      "Product Setup & Configuration",
      "Payment Gateway Integration",
      "Basic SEO Setup",
      "Basic Training Session",
      "30 Days Support"
    ]
  },
  {
    name: "Premium Development",
    price: "Starting from $5k",
    description: "6-8 weeks. Ideal for growing businesses needing custom functionality and advanced features.",
    features: [
      "Everything in Standard Development",
      "Custom Functionality Development",
      "Advanced Apps Integration",
      "Performance Optimization",
      "Advanced SEO Setup",
      "60 Days Support"
    ],
    highlight: true
  },
  {
    name: "Enterprise Development",
    price: "Starting from $7.5k",
    description: "8-12 weeks. Comprehensive development solution for large stores with complex requirements.",
    features: [
      "Everything in Premium Development",
      "Custom Development",
      "Advanced Integrations",
      "Multi-currency Setup",
      "Enterprise Security Features",
      "90 Days Priority Support"
    ]
  }
];

const ShopifyDevelopment = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-secondary"
    >
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
                <Link to="/contact" className="inline-flex items-center">
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
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg shadow-xl flex items-center justify-center">
                <ShoppingCart className="w-24 h-24 text-primary/40" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comprehensive Shopify Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver end-to-end Shopify development services to help your business thrive in the digital marketplace.
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
        title="Shopify Development Packages"
        description="Select the development package that best fits your business needs"
        tiers={pricingTiers}
      />

      <Footer />
    </motion.div>
  );
};

export default ShopifyDevelopment;