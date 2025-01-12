import { motion } from "framer-motion";
import { toast } from "@/hooks/use-toast";
import { ArrowRight } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { year: '2019', revenue: 100000 },
  { year: '2020', revenue: 150000 },
  { year: '2021', revenue: 250000 },
  { year: '2022', revenue: 400000 },
  { year: '2023', revenue: 600000 },
  { year: '2024', revenue: 1000000 },
];

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
      logo: "/lovable-uploads/6274e0d8-d1bf-488a-8c01-68e6c57b1a8d.png",
      delay: 0
    },
    { 
      name: "Shopify Partners",
      logo: "/lovable-uploads/b574626d-8575-4d3d-9057-716110f67e27.png",
      delay: 0.1
    },
    { 
      name: "Intelligems",
      logo: "/lovable-uploads/17d93601-75cf-480f-a7b7-1e6ee3e51b5e.png",
      delay: 0.2
    },
    { 
      name: "GoHighLevel",
      logo: "/lovable-uploads/084c5fe2-c76e-47be-bbb0-8024b88b45ba.png",
      delay: 0.3
    },
    { 
      name: "BuyWithPrime",
      logo: "/lovable-uploads/594f6010-9b93-452c-8769-c5e5440a8ae9.png",
      delay: 0.4
    },
    { 
      name: "Rebuy",
      logo: "/lovable-uploads/135e00de-f5af-436a-8830-c783309fbb5c.png",
      delay: 0.5
    },
    {
      name: "Vapi",
      logo: "/lovable-uploads/d01101ff-1306-4b1e-b5ef-cf82a3b3d961.png",
      delay: 0.6
    },
    {
      name: "Yotpo",
      logo: "/lovable-uploads/d973cfef-5d43-47a7-9b36-7c9f94be423f.png",
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
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg shadow-xl p-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={data}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis 
                      tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
                    />
                    <Tooltip 
                      formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke="#B85C38" 
                      fill="#B85C38" 
                      fillOpacity={0.3}
                      name="Annual Revenue"
                    />
                  </AreaChart>
                </ResponsiveContainer>
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
                  <div className="w-auto h-12 flex items-center justify-center">
                    <img 
                      src={client.logo}
                      alt={client.name}
                      className="h-full w-auto object-contain filter hover:brightness-110 transition-all duration-300"
                    />
                  </div>
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