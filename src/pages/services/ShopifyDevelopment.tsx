import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Pricing } from "@/components/Pricing";

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
      "Basic Training Session"
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
      "60 Days Support"
    ],
    highlight: true
  },
  {
    name: "Enterprise Development",
    price: "Starting from $7.5k",
    description: "8-12 weeks. Comprehensive development solution for large stores with complex requirements.",
    features: [
      "Dedicated Project Manager",
      "Custom Development",
      "Advanced Integrations",
      "Multi-currency Setup",
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
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Shopify Development Services</h1>
          <p className="text-lg text-gray-600 mb-8">
            We specialize in creating custom Shopify solutions that drive growth and enhance your e-commerce presence. Our expert team delivers tailored development services to meet your unique business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Why Choose Our Shopify Development Services?</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-3 text-primary">•</span>
                <span>Expert Shopify developers with years of experience</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-primary">•</span>
                <span>Custom solutions tailored to your business needs</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-primary">•</span>
                <span>Focus on performance and user experience</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-primary">•</span>
                <span>Ongoing support and maintenance</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Our Development Process</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-3 text-primary">1.</span>
                <span>Discovery and Requirements Analysis</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-primary">2.</span>
                <span>Design and Development Planning</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-primary">3.</span>
                <span>Implementation and Testing</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-primary">4.</span>
                <span>Launch and Post-launch Support</span>
              </li>
            </ul>
          </div>
        </div>

        <Pricing 
          title="Shopify Development Packages"
          description="Choose the package that best fits your business needs and goals"
          tiers={pricingTiers}
        />
      </div>
      <Footer />
    </motion.div>
  );
};

export default ShopifyDevelopment;