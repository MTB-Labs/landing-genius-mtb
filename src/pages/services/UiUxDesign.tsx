import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Pricing } from "@/components/Pricing";

const features = [
  "User Interface Design",
  "User Experience Design",
  "Wireframing & Prototyping",
  "Mobile-First Design",
  "Responsive Design",
  "Design Systems",
  "Visual Design",
  "Usability Testing",
];

const pricingTiers = [
  {
    name: "Essential",
    price: "$3,999",
    description: "Perfect for small projects and startups",
    features: [
      "UI Design",
      "Wireframing",
      "Basic Prototyping",
      "2 Revisions",
      "Basic Style Guide",
      "14 Days Support"
    ]
  },
  {
    name: "Professional",
    price: "$7,999",
    description: "Comprehensive design solution",
    features: [
      "Everything in Essential",
      "UX Research",
      "Advanced Prototyping",
      "5 Revisions",
      "Complete Style Guide",
      "30 Days Support"
    ],
    highlight: true
  },
  {
    name: "Enterprise",
    price: "POA",
    description: "Custom design solutions for large projects",
    features: [
      "Everything in Professional",
      "Full UX Research",
      "Design System",
      "Unlimited Revisions",
      "Brand Guidelines",
      "90 Days Support"
    ]
  }
];

const UiUxDesign = () => {
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
                UI/UX Design Services
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Beautiful, conversion-focused designs that enhance user experience and drive sales.
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
                alt="UI/UX Design"
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
              Design Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We create intuitive and engaging user experiences that convert visitors into customers.
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
        title="UI/UX Design Pricing"
        description="Select the design package that matches your vision"
        tiers={pricingTiers}
      />

      <Footer />
    </div>
  );
};

export default UiUxDesign;
