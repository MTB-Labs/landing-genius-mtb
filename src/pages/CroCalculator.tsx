import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const CroCalculator = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    traffic: "",
    conversionRate: "",
    averageOrderValue: "",
    email: "",
  });

  const calculatePotentialRevenue = () => {
    const traffic = parseFloat(formData.traffic);
    const conversionRate = parseFloat(formData.conversionRate) / 100;
    const averageOrderValue = parseFloat(formData.averageOrderValue);
    
    const currentRevenue = traffic * conversionRate * averageOrderValue;
    const improvedRevenue = traffic * (conversionRate * 1.45) * averageOrderValue;
    
    return {
      current: currentRevenue,
      potential: improvedRevenue,
      difference: improvedRevenue - currentRevenue,
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email) {
      toast({
        title: "Email required",
        description: "Please enter your email to see the results",
        variant: "destructive",
      });
      return;
    }

    const results = calculatePotentialRevenue();
    
    toast({
      title: "Potential Revenue Growth",
      description: `With our CRO optimization, you could increase your revenue by $${results.difference.toFixed(2)}`,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-secondary py-24"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full">
              CRO Calculator
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Calculate Your Revenue Potential
            </h1>
            <p className="text-muted-foreground">
              See how much revenue you could generate with our CRO optimization services
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-sm">
            <div>
              <label className="block text-sm font-medium mb-2">Monthly Traffic</label>
              <Input
                type="number"
                placeholder="e.g. 10000"
                value={formData.traffic}
                onChange={(e) => setFormData({ ...formData, traffic: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Current Conversion Rate (%)</label>
              <Input
                type="number"
                step="0.01"
                placeholder="e.g. 2.5"
                value={formData.conversionRate}
                onChange={(e) => setFormData({ ...formData, conversionRate: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Average Order Value ($)</label>
              <Input
                type="number"
                step="0.01"
                placeholder="e.g. 75"
                value={formData.averageOrderValue}
                onChange={(e) => setFormData({ ...formData, averageOrderValue: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <Input
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Calculate Potential Revenue
            </Button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default CroCalculator;