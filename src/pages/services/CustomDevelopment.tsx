import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Code2 } from "lucide-react";
import { Pricing } from "@/components/Pricing";

const features = [
  "Custom Feature Development",
  "Third-party Integrations",
  "API Development",
  "Performance Optimization",
  "Custom Theme Development",
  "Backend Development",
  "Database Design",
  "Security Implementation",
];

const pricingTiers = [
  {
    name: "Basic Development",
    price: "From $5,000",
    description: "For small to medium-sized development projects.",
    features: [
      "Custom Feature Development",
      "3rd Party Integrations",
      "Basic API Development",
      "Code Documentation",
      "30 Days Support"
    ]
  },
  {
    name: "Advanced Development",
    price: "From $10,000",
    description: "For complex development projects requiring extensive customization.",
    features: [
      "Full-stack Development",
      "Complex Integrations",
      "Advanced API Development",
      "Performance Optimization",
      "90 Days Support"
    ],
    highlight: true
  },
  {
    name: "Enterprise Development",
    price: "Custom",
    description: "For large-scale enterprise applications and systems.",
    features: [
      "Enterprise Architecture",
      "Microservices Development",
      "Custom Security Solutions",
      "Scalable Infrastructure",
      "1 Year Support & Maintenance"
    ]
  }
];

const CustomDevelopment = () => {
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
                Custom Development Services
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Bespoke e-commerce solutions and integrations built to scale with your business needs.
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
                <Code2 className="w-24 h-24 text-primary/40" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Development Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow industry best practices to deliver high-quality custom solutions for your business.
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
              Why Choose Our Custom Development?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              With years of experience in e-commerce development, we deliver scalable and maintainable solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4">Expert Development Team</h3>
              <p className="text-gray-600">
                Our experienced developers use the latest technologies and best practices.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4">Scalable Solutions</h3>
              <p className="text-gray-600">
                We build solutions that grow with your business and adapt to changing needs.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4">Ongoing Support</h3>
              <p className="text-gray-600">
                We provide continuous support and maintenance for your custom solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Pricing
        title="Development Packages"
        description="Choose the right development package for your business needs"
        tiers={pricingTiers}
        service="custom-development"
      />

      <Footer />
    </div>
  );
};

export default CustomDevelopment;