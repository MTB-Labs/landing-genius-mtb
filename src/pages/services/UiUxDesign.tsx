import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Pricing } from "@/components/Pricing";

const features = [
  "User Research & Analysis",
  "Wireframing & Prototyping",
  "Visual Design",
  "Interaction Design",
  "Usability Testing",
  "Responsive Design",
  "Design Systems",
  "Brand Integration",
];

const pricingTiers = [
  {
    name: "Hourly Rate / Retainer",
    price: "$50 per hour",
    description: "Need us to design new features or improve existing ones, we got you.",
    features: [
      "Let's scope out what you need and create a plan of action",
      "Minimum 20 hour engagement",
      "UI/UX Design",
      "Prototyping",
      "Ongoing Support Available"
    ]
  },
  {
    name: "Premium Migration",
    price: "Starting from $5k",
    description: "6-8 weeks. Ideal for growing businesses needing custom functionality and advanced integrations during migration.",
    features: [
      "Everything in Standard Migration",
      "Custom Functionality",
      "Advanced Apps Integration",
      "Klaviyo Email Setup",
      "60 Days Support"
    ],
    highlight: true
  },
  {
    name: "Enterprise Migration",
    price: "Starting from $7.5k",
    description: "8-12 weeks. Comprehensive migration solution for large stores with complex requirements and custom integrations.",
    features: [
      "Dedicated Project Manager",
      "Custom Development",
      "Advanced Integrations",
      "Full Data Migration",
      "90 Days Priority Support"
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
                <Sparkles className="w-24 h-24 text-primary/40" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Design Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a user-centered design approach to create engaging and effective experiences.
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
              Why Choose Our UI/UX Design?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              With expertise in e-commerce design, we create experiences that convert visitors into customers.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4">User-Centered Design</h3>
              <p className="text-gray-600">
                We put your users first to create intuitive and engaging experiences.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4">Conversion-Focused</h3>
              <p className="text-gray-600">
                Our designs are optimized to drive conversions and increase sales.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4">Brand Consistency</h3>
              <p className="text-gray-600">
                We ensure your brand identity shines through every design element.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Pricing
        title="Design Packages"
        description="Choose the right design package for your business needs"
        tiers={pricingTiers}
      />

      <Footer />
    </div>
  );
};

export default UiUxDesign;