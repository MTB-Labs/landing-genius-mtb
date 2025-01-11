import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

const NewBlogPost = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    image: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPost = {
      id: crypto.randomUUID(),
      ...formData,
      createdAt: new Date().toISOString(),
    };
    blogPosts.push(newPost);
    toast({
      title: "Success",
      description: "Blog post created successfully!",
    });
    navigate("/blog");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-secondary"
    >
      <Navigation />
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Create New Blog Post</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2">Title</label>
              <Input
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label className="block mb-2">Excerpt</label>
              <Textarea
                value={formData.excerpt}
                onChange={(e) =>
                  setFormData({ ...formData, excerpt: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label className="block mb-2">Content</label>
              <Textarea
                value={formData.content}
                onChange={(e) =>
                  setFormData({ ...formData, content: e.target.value })
                }
                required
                className="min-h-[200px]"
              />
            </div>
            <div>
              <label className="block mb-2">Category</label>
              <Input
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label className="block mb-2">Image URL</label>
              <Input
                value={formData.image}
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.value })
                }
                required
                type="url"
              />
            </div>
            <Button type="submit">Create Post</Button>
          </form>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default NewBlogPost;