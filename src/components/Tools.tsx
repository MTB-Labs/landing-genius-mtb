import { motion } from "framer-motion";
import { Calculator, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";

export const Tools = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Free Tools
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Boost Your Business Growth
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Use our free tools to calculate your potential ROI and streamline your
            communication
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-8 rounded-2xl bg-white border border-border/5 hover:border-primary/20 transition-colors"
          >
            <Calculator className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-xl font-semibold mb-4">CRO Calculator</h3>
            <p className="text-muted-foreground mb-6">
              Calculate your potential revenue growth with our CRO optimization
              calculator
            </p>
            <Button variant="outline">Try Calculator</Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-2xl bg-white border border-border/5 hover:border-primary/20 transition-colors"
          >
            <MessageSquare className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-xl font-semibold mb-4">
              WhatsApp Link Generator
            </h3>
            <p className="text-muted-foreground mb-6">
              Create custom WhatsApp chat links to engage with your customers
              instantly
            </p>
            <Button variant="outline">Generate Link</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};