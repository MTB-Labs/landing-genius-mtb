import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { Tools } from "@/components/Tools";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-secondary"
    >
      <Hero />
      <Services />
      <Stats />
      <Tools />
      <Blog />
      <Contact />
    </motion.div>
  );
};

export default Index;