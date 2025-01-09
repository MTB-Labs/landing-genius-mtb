import { motion } from "framer-motion";
import { Blog as BlogSection } from "@/components/Blog";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Blog = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-secondary"
    >
      <Navigation />
      <BlogSection />
      <Footer />
    </motion.div>
  );
};

export default Blog;