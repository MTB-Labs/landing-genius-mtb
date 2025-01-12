import { motion } from "framer-motion";
import { toast } from "@/hooks/use-toast";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
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
    { 
      name: "Shopify Plus", 
      logo: "/placeholder.svg" 
    },
    { 
      name: "BigCommerce", 
      logo: "/placeholder.svg"
    },
    { 
      name: "WooCommerce", 
      logo: "/placeholder.svg"
    },
  ];

  // Duplicate the clients array for infinite scroll
  const scrollClients = [...clients, ...clients];

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full">
                  Development Studio
                </span>
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Transform Your</span>
                  <span className="block text-primary">E-commerce Growth</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0">
                  We specialize in Shopify development, CRO optimization, and AI integrations 
                  to help your business reach its full potential.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleGetStarted}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 md:py-4 md:text-lg md:px-10"
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          </main>
        </div>
      </div>
      
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full bg-gradient-to-br from-primary/20 to-primary/5">
          <div className="h-full w-full flex items-center justify-center">
            <img
              src="/lovable-uploads/7537b699-7205-4677-8d03-4ef5a0b4b3b8.png"
              alt="MTB Labs"
              className="h-32 md:h-48 object-contain"
            />
          </div>
        </div>
      </div>
      
      {/* Logo Marquee */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 mb-8">
            Trusted by leading e-commerce platforms
          </p>
          <div className="relative overflow-hidden">
            <div className="flex space-x-16 animate-marquee">
              {scrollClients.map((client, index) => (
                <motion.img
                  key={`${client.name}-${index}`}
                  src={client.logo}
                  alt={client.name}
                  className="h-8 md:h-10 w-auto grayscale hover:grayscale-0 transition-all flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};