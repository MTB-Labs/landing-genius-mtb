import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const posts = [
  {
    title: "Maximizing E-commerce Conversion Rates",
    excerpt:
      "Learn the proven strategies to optimize your online store and increase sales.",
    category: "CRO",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  },
  {
    title: "AI Automation for E-commerce",
    excerpt:
      "Discover how AI can streamline your operations and enhance customer experience.",
    category: "AI",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
  },
  {
    title: "Building High-Converting Shopify Stores",
    excerpt:
      "Expert tips for creating Shopify stores that drive sales and engagement.",
    category: "Development",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  },
];

export const Blog = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Latest Insights
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Expert Knowledge Base
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest trends and strategies in CRO, development,
            and AI
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-sm font-medium bg-white rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <Button variant="link" className="p-0 h-auto font-medium">
                Read More <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};