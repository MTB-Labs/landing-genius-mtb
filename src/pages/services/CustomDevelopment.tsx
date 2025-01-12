import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Pricing } from "@/components/Pricing";

const features = [
  "Custom E-commerce Solutions",
  "API Development & Integration",
  "Payment Gateway Integration",
  "Third-party Service Integration",
  "Custom Plugin Development",
  "Performance Optimization",
  "Security Implementation",
  "Scalable Architecture Design",
];

const pricingTiers = [
  {
    name: "Starter",
    price: "$5,999",
    description: "Basic custom development solutions",
    features: [
      "Requirements Analysis",
      "Custom Development",
      "Basic Integration",
      "Testing & QA",
      "Basic Documentation",
      "30 Days Support"
    ]
  },
  {
    name: "Professional",
    price: "$9,999",
    description: "Advanced development for complex needs",
    features: [
      "Everything in Starter",
      "Advanced Integration",
      "API Development",
      "Performance Optimization",
      "Detailed Documentation",
      "90 Days Support"
    ],
    highlight: true
  },
  {
    name: "Enterprise",
    price: "POA",
    description: "Full-scale custom development solutions",
    features: [
      "Everything in Professional",
      "Enterprise Architecture",
      "Scalability Planning",
      "Security Hardening",
      "Complete Documentation",
      "Ongoing Support"
    ]
  }
];

const CustomDevelopment = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-secondary"
    >
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
                Custom Development Services
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Bespoke e-commerce solutions and integrations built to scale with your business needs.
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
                alt="Custom Development"
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
              Custom Development Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We create tailored solutions that perfectly match your business requirements and goals.
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
        title="Custom Development Pricing"
        description="Select the development package that suits your needs"
        tiers={pricingTiers}
      />

      <Footer />
    </motion.div>
  );
};

export default CustomDevelopment;
