import { motion } from "framer-motion";
import { Tools as ToolsSection } from "@/components/Tools";

const Tools = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-secondary"
    >
      <ToolsSection />
    </motion.div>
  );
};

export default Tools;