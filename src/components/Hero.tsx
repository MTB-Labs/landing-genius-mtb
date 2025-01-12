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
      name: "Klaviyo Partners",
      logo: "/logos/klaviyo.svg",
      delay: 0
    },
    { 
      name: "Shopify Partners",
      logo: "/logos/shopify.svg",
      delay: 0.1
    },
    { 
      name: "Intelligems",
      logo: "/logos/intelligems.svg",
      delay: 0.2
    },
    { 
      name: "GoHighLevel",
      logo: "/logos/gohighlevel.svg",
      delay: 0.3
    },
    { 
      name: "Vapi",
      logo: "/logos/vapi.svg",
      delay: 0.4
    },
    { 
      name: "BuyWithPrime",
      logo: "/logos/buywithprime.svg",
      delay: 0.5
    },
    { 
      name: "Rebuy",
      logo: "/logos/rebuy.svg",
      delay: 0.6
    },
    { 
      name: "Yotpo",
      logo: "/logos/yotpo.svg",
      delay: 0.7
    }
  ];

  // Duplicate the clients array for infinite scroll
  const scrollClients = [...clients, ...clients];

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
      <div className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-xl"
            >
              <span className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full">
                Development Studio
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="block">Transform Your</span>
                <span className="block text-primary">E-commerce Growth</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                We specialize in Shopify development, CRO optimization, and AI integrations 
                to help your business reach its full potential.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleGetStarted}
                className="inline-flex items-center px-8 py-3 text-base font-medium text-white bg-primary hover:bg-primary/90 rounded-md shadow-sm transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg shadow-xl flex items-center justify-center">
                <img
                  src="/lovable-uploads/7537b699-7205-4677-8d03-4ef5a0b4b3b8.png"
                  alt="MTB Labs"
                  className="h-32 md:h-48 object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Logo Marquee */}
      <div className="relative py-12">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-gray-500 mb-8">
            Trusted by leading e-commerce platforms
          </p>
          <div className="relative overflow-hidden">
            <div className="flex space-x-16 animate-marquee">
              {scrollClients.map((client, index) => (
                <motion.div
                  key={`${client.name}-${index}`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5,
                    delay: client.delay,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="flex flex-col items-center space-y-2"
                >
                  <img 
                    src={client.logo}
                    alt={client.name}
                    className="h-12 w-auto filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  <span className="text-sm text-gray-600">{client.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};