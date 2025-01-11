import { motion } from "framer-motion";
import { Code2, LineChart, Sparkles, ShoppingCart, BarChart3, Zap } from "lucide-react";

const services = [
  {
    icon: ShoppingCart,
    title: "Shopify Development",
    description:
      "Custom Shopify solutions tailored to your unique business needs with a focus on performance and user experience.",
  },
  {
    icon: BarChart3,
    title: "CRO Optimization",
    description:
      "Data-driven conversion rate optimization strategies to maximize your e-commerce revenue and customer engagement.",
  },
  {
    icon: Zap,
    title: "AI Integration",
    description:
      "Cutting-edge AI solutions for automation, personalization, and enhanced customer experiences.",
  },
  {
    icon: Code2,
    title: "Custom Development",
    description:
      "Bespoke e-commerce solutions and integrations built to scale with your business needs.",
  },
  {
    icon: LineChart,
    title: "Analytics & Tracking",
    description:
      "Advanced analytics setup and tracking implementation to make data-driven decisions.",
  },
  {
    icon: Sparkles,
    title: "UI/UX Design",
    description:
      "Beautiful, conversion-focused designs that enhance user experience and drive sales.",
  },
];

export const Services = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive E-commerce Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer end-to-end services to help your e-commerce business thrive in the digital landscape.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-gray-100 hover:border-primary/20 transition-colors shadow-sm hover:shadow-md"
            >
              <service.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};