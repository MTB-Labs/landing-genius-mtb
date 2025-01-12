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
      logo: "/lovable-uploads/335efb77-5260-4b38-9f00-b36dcd993f21.png",
      delay: 0
    },
    { 
      name: "Shopify Partners",
      logo: "/lovable-uploads/52aaafcc-2a3d-42bb-a2dc-f7809274497a.png",
      delay: 0.1
    },
    { 
      name: "Intelligems",
      logo: "/lovable-uploads/b7b4166e-1c17-4a7d-85d1-1f2df2e07d5b.png",
      delay: 0.2
    },
    { 
      name: "GoHighLevel",
      logo: "/lovable-uploads/c899dd16-ee5e-44d5-91e4-b3aa41c874b9.png",
      delay: 0.3
    },
    { 
      name: "BuyWithPrime",
      logo: "/lovable-uploads/ac46031e-fbb6-42f4-ba64-40d231d38ff3.png",
      delay: 0.4
    },
    { 
      name: "Rebuy",
      logo: "/lovable-uploads/1b31756b-4175-4b8a-bbdc-6b9ce3574019.png",
      delay: 0.5
    },
    {
      name: "Vapi",
      logo: "/lovable-uploads/32727b2e-4068-468d-99fe-87cffd2eef1d.png",
      delay: 0.6
    },
    {
      name: "Yotpo",
      logo: "/lovable-uploads/f3cf6534-77f5-4dce-9807-ee908ac073e2.png",
      delay: 0.7
    }
  ];

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
                  <div className="w-auto h-[75px] flex items-center justify-center">
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
