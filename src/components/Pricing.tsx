import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean;
}

interface PricingProps {
  title: string;
  description: string;
  tiers: PricingTier[];
}

export const Pricing = ({ title, description, tiers }: PricingProps) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-2xl p-8 ${
                tier.highlight
                  ? "bg-primary text-white shadow-xl scale-105"
                  : "bg-white shadow-sm"
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <div className="mb-4">
                <span className={`text-4xl font-bold ${tier.highlight ? "text-white" : "text-primary"}`}>
                  {tier.price}
                </span>
              </div>
              <p className={`mb-6 ${tier.highlight ? "text-white/90" : "text-gray-600"}`}>
                {tier.description}
              </p>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-3">
                    <Check className={`h-5 w-5 ${tier.highlight ? "text-white" : "text-primary"}`} />
                    <span className={tier.highlight ? "text-white/90" : "text-gray-600"}>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="w-full"
                variant={tier.highlight ? "secondary" : "default"}
              >
                <Link to="/contact">Get Started</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};