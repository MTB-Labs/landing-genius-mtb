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

  const clients = [
    { name: "Shopify Plus", logo: "https://cdn.shopify.com/s/files/1/0070/7032/files/shopify-plus-logo.png" },
    { name: "BigCommerce", logo: "https://www.bigcommerce.com/assets/logos/bc-logo-dark.svg" },
    { name: "WooCommerce", logo: "https://woocommerce.com/wp-content/themes/woo/images/logo-woocommerce.svg" },
  ];

  const testimonial = {
    quote: "MTB Labs transformed our e-commerce performance with their AI solutions. Our conversion rate improved by 45% in just 3 months.",
    author: "Sarah Johnson",
    role: "E-commerce Director",
    company: "Fashion Retail Co."
  };

  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden bg-secondary">
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

          {/* Social Proof Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 pt-8 border-t border-gray-200"
          >
            {/* Testimonial */}
            <div className="mb-12">
              <p className="text-lg italic text-gray-600 mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold">{testimonial.author[0]}</span>
                </div>
                <div className="text-left">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>

            {/* Client Logos */}
            <div>
              <p className="text-sm text-gray-500 mb-6">Trusted by leading e-commerce platforms</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
                {clients.map((client) => (
                  <motion.img
                    key={client.name}
                    src={client.logo}
                    alt={client.name}
                    className="h-8 md:h-10 w-auto grayscale hover:grayscale-0 transition-all"
                    whileHover={{ scale: 1.05 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};