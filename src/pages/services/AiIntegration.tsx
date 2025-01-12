import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, LineChart } from "lucide-react";
import { Pricing } from "@/components/Pricing";

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

const pricingTiers = [
  {
    name: "Hourly Rate / Retainer",
    price: "$50 per hour",
    description: "Need us to implement AI solutions or integrate machine learning models, we got you.",
    features: [
      "Let's scope out what you need and create a plan of action",
      "Minimum 20 hour engagement",
      "AI Integration Setup",
      "Model Training Support",
      "Ongoing Support Available"
    ]
  },
  {
    name: "AI Starter Package",
    price: "Starting from $3k",
    description: "4-6 weeks. Ideal for businesses looking to implement basic AI functionality and automation.",
    features: [
      "Chatbot Implementation",
      "Basic Automation Setup",
      "Product Recommendations",
      "Performance Monitoring",
      "30 Days Support"
    ],
    highlight: true
  },
  {
    name: "AI Enterprise Package",
    price: "Starting from $6k",
    description: "8-12 weeks. Advanced AI integration for businesses requiring sophisticated machine learning solutions.",
    features: [
      "Custom AI Model Development",
      "Advanced Automation",
      "Predictive Analytics",
      "Integration with Existing Systems",
      "90 Days Priority Support"
    ]
  }
];

const AiIntegration = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <Navigation />
      
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
                Cutting-edge AI solutions for automation, personalization, and enhanced customer experiences.
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

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Our AI Integration?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              With expertise in AI and e-commerce, we deliver intelligent solutions that drive growth.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4">Cutting-edge Technology</h3>
              <p className="text-gray-600">
                We implement the latest AI technologies to give you a competitive edge.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4">Seamless Integration</h3>
              <p className="text-gray-600">
                Our AI solutions integrate smoothly with your existing e-commerce infrastructure.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4">Measurable Results</h3>
              <p className="text-gray-600">
                Our AI implementations deliver tangible improvements in efficiency and revenue.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Pricing
        title="AI Integration Packages"
        description="Choose the right AI integration package for your business needs"
        tiers={pricingTiers}
      />

      <Footer />
    </div>
  );
};

export default AiIntegration;