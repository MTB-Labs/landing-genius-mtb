import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

export const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    toast({
      title: "Let's get started!",
      description: "Fill out the form below for your free CRO audit.",
    });
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden bg-secondary">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d')] bg-cover bg-center opacity-5" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex justify-center mb-8">
            <img
              src="/lovable-uploads/7537b699-7205-4677-8d03-4ef5a0b4b3b8.png"
              alt="MTB Labs"
              className="h-24 md:h-32"
            />
          </div>
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Development Studio
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Transform Your E-commerce
            <br />
            with AI-Powered Solutions
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            We specialize in Shopify development, CRO optimization, and AI
            integrations to help your business reach its full potential.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGetStarted}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-medium transition-colors hover:bg-primary/90"
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};