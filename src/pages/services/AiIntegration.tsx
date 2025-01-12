import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, LineChart, Bot, Phone, Brain, MessageSquare } from "lucide-react";

const features = [
  "AI-Powered Personalization",
  "Predictive Analytics",
  "Automated Customer Service",
  "Smart Inventory Management",
  "Dynamic Pricing",
  "Customer Behavior Analysis",
  "AI Marketing Automation",
  "Performance Monitoring",
];

const aiServices = [
  {
    name: "AI Agents",
    icon: Bot,
    description: "Custom AI agents that can handle complex tasks, make decisions, and interact with your systems.",
    features: [
      "Natural Language Understanding",
      "Task Automation",
      "System Integration",
      "Custom Knowledge Base",
      "24/7 Operation Capability"
    ],
    startingPrice: "From $5,000"
  },
  {
    name: "Intelligent Chatbots",
    icon: MessageSquare,
    description: "Advanced chatbots powered by large language models for superior customer service.",
    features: [
      "Multi-language Support",
      "Context Awareness",
      "Custom Training",
      "Analytics Dashboard",
      "Seamless Platform Integration"
    ],
    startingPrice: "From $2,500"
  },
  {
    name: "AI Voice Agents",
    icon: Phone,
    description: "Voice-enabled AI agents for automated calling and customer interaction.",
    features: [
      "Natural Voice Synthesis",
      "Speech Recognition",
      "Call Scheduling",
      "Custom Voice Training",
      "Call Analytics"
    ],
    startingPrice: "From $7,500"
  },
  {
    name: "Custom AI Solutions",
    icon: Brain,
    description: "Bespoke AI solutions tailored to your specific business needs.",
    features: [
      "Custom Model Development",
      "Data Pipeline Setup",
      "API Integration",
      "Performance Optimization",
      "Ongoing Support"
    ],
    startingPrice: "Custom Quote"
  }
];

const AiIntegration = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                AI Integration Services
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Transform your business with cutting-edge AI solutions for automation, personalization, and enhanced customer experiences.
              </p>
              <Button asChild size="lg">
                <Link to="/contact" className="inline-flex items-center">
                  Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg shadow-xl flex items-center justify-center">
                <LineChart className="w-24 h-24 text-primary/40" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our AI Integration Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We implement cutting-edge AI solutions to enhance your e-commerce operations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 rounded-lg bg-white shadow-sm"
              >
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our AI Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our range of specialized AI services to enhance your business capabilities
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <service.icon className="w-10 h-10 text-primary mr-4" />
                  <div>
                    <h3 className="text-2xl font-semibold">{service.name}</h3>
                    <p className="text-primary font-medium">{service.startingPrice}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full">
                  <Link to="/contact">Get Started</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AiIntegration;
