import { useParams } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-secondary"
    >
      <Navigation />
      <article className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
          <div className="relative h-[400px] mb-8 overflow-hidden rounded-lg">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="prose prose-lg max-w-none">
            {post.content}
          </div>
        </div>
      </article>
      <Footer />
    </motion.div>
  );
};

export default BlogPost;