import { motion } from "framer-motion";
import { Services as ServicesSection } from "@/components/Services";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-secondary"
    >
      <Navigation />
      <ServicesSection />
      <Footer />
    </motion.div>
  );
};

export default Services;