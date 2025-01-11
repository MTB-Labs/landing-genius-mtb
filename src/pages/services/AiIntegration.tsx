import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Pricing } from "@/components/Pricing";

const features = [
  "AI-Powered Product Recommendations",
  "Chatbot Integration",
  "Automated Customer Support",
  "Personalization Engines",
  "Predictive Analytics",
  "Natural Language Processing",
  "Machine Learning Models",
  "AI-Driven Marketing Automation",
];

const pricingTiers = [
  {
    name: "Basic AI",
    price: "$1,999/mo",
    description: "Essential AI integration for small businesses",
    features: [
      "Chatbot Integration",
      "Basic Automation",
      "Customer Support AI",
      "Monthly Updates",
      "Basic Analytics",
      "Email Support"
    ]
  },
  {
    name: "Advanced AI",
    price: "$3,999/mo",
    description: "Comprehensive AI solutions for growing businesses",
    features: [
      "Everything in Basic",
      "Custom AI Models",
      "Advanced Automation",
      "Weekly Updates",
      "Advanced Analytics",
      "Priority Support"
    ],
    highlight: true
  },
  {
    name: "Enterprise AI",
    price: "POA",
    description: "Custom AI solutions for enterprise needs",
    features: [
      "Everything in Advanced",
      "Custom Development",
      "Full Integration",
      "Daily Updates",
      "Real-time Analytics",
      "24/7 Support"
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
                  Get Started
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
              <img
                src="/placeholder.svg"
                alt="AI Integration"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              AI Integration Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transform your business with cutting-edge AI solutions that drive growth and efficiency.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      <Pricing
        title="AI Integration Pricing"
        description="Choose the AI solution that matches your business needs"
        tiers={pricingTiers}
      />

      <Footer />
    </div>
  );
};

export default AiIntegration;
