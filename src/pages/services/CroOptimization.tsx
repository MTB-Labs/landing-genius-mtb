import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const CroOptimization = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-secondary"
    >
      <Navigation />
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-8">CRO Optimization</h1>
        <p className="text-lg text-gray-600 mb-4">
          Our CRO Optimization services are designed to enhance your website's performance and increase conversion rates.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Comprehensive website analysis</li>
          <li>Data-driven recommendations</li>
          <li>A/B testing and experimentation</li>
          <li>User experience improvements</li>
          <li>Ongoing support and optimization</li>
        </ul>
        <p className="text-lg text-gray-600">
          Contact us today to learn how we can help you maximize your online potential!
        </p>
      </div>
      <Footer />
    </motion.div>
  );
};

export default CroOptimization;
