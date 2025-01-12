import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

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
        <h1 className="text-4xl font-bold mb-8">Shopify Development</h1>
        <p className="text-lg text-gray-600 mb-4">
          We offer comprehensive Shopify development services to help you build and scale your online store.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Custom Shopify Theme Development</li>
          <li>Shopify App Development</li>
          <li>Shopify Store Setup and Configuration</li>
          <li>Payment Gateway Integration</li>
          <li>Shopify SEO Optimization</li>
        </ul>
        <p className="text-lg text-gray-600">
          Contact us today to get started on your Shopify project!
        </p>
      </div>
      <Footer />
    </motion.div>
  );
};

export default ShopifyDevelopment;
