import { motion } from "framer-motion";
import { Code2, LineChart, Sparkles } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Shopify Development",
    description:
      "Custom Shopify solutions tailored to your unique business needs with a focus on performance and user experience.",
  },
  {
    icon: LineChart,
    title: "CRO Optimization",
    description:
      "Data-driven conversion rate optimization strategies to maximize your e-commerce revenue and customer engagement.",
  },
  {
    icon: Sparkles,
    title: "AI Integration",
    description:
      "Cutting-edge AI solutions for automation, personalization, and enhanced customer experiences.",
  },
];

export const Services = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-accent/10 text-accent rounded-full">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Expertise That Drives Growth
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-8 rounded-2xl bg-secondary border border-border/5 hover:border-accent/20 transition-colors"
            >
              <service.icon className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};