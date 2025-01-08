import { motion } from "framer-motion";
import { Blog as BlogSection } from "@/components/Blog";

const Blog = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-secondary"
    >
      <BlogSection />
    </motion.div>
  );
};

export default Blog;