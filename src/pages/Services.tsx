import { motion } from "framer-motion";
import { Services as ServicesSection } from "@/components/Services";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-secondary"
    >
      <ServicesSection />
    </motion.div>
  );
};

export default Services;