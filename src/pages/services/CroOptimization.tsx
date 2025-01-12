import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, BarChart3 } from "lucide-react";
import { Pricing } from "@/components/Pricing";

const features = [
  "Comprehensive Website Analysis",
  "User Behavior Tracking",
  "A/B Testing Implementation",
  "Heatmap Analysis",
  "Conversion Funnel Optimization",
  "Mobile UX Optimization",
  "Page Speed Optimization",
  "Analytics Integration",
];

const pricingTiers = [
  {
    name: "Starter Package",
    price: "$1,500/mo",
    description: "Perfect for businesses starting their CRO journey with data-driven optimization.",
    features: [
      "1 A/B Test at a time",
      "Up to 2 pages optimization",
      "Basic Analytics Setup",
      "Heatmap & Session Recording",
      "User Behavior Tracking",
      "Monthly Performance Report",
      "Email Support",
      "Quarterly Strategy Session"
    ]
  },
  {
    name: "Growth Package",
    price: "$2,000/mo",
    description: "Ideal for growing businesses ready to accelerate their conversion optimization.",
    features: [
      "2 A/B Tests simultaneously",
      "Up to 3 pages optimization",
      "Advanced Analytics Integration",
      "Conversion Funnel Analysis",
      "Priority Email Support",
      "Monthly Strategy Sessions",
      "Basic Custom Development",
      "Weekly Performance Reports"
    ],
    highlight: true
  },
  {
    name: "Scale Package",
    price: "$3,000/mo",
    description: "Comprehensive solution for businesses seeking maximum conversion impact.",
    features: [
      "3 A/B Tests simultaneously",
      "Up to 4 pages optimization",
      "Custom Analytics Dashboard",
      "Advanced Custom Development",
      "Dedicated CRO Specialist",
      "Weekly Strategy Sessions",
      "Priority 24/5 Support",
      "Personalization Features"
    ]
  }
];

const CroOptimization = () => {
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
                CRO Optimization Services
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Data-driven conversion rate optimization strategies to maximize your e-commerce revenue and customer engagement.
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
                <BarChart3 className="w-24 h-24 text-primary/40" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our CRO Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a data-driven approach to optimize your conversion rates and improve user experience.
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
              Why Choose Our CRO Service?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              With years of experience in conversion optimization, we ensure measurable improvements in your conversion rates.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4">Data-Driven Approach</h3>
              <p className="text-gray-600">
                We use advanced analytics and testing tools to make informed optimization decisions.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4">Proven Results</h3>
              <p className="text-gray-600">
                Our optimization strategies have helped businesses achieve significant improvements in conversion rates.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4">Continuous Improvement</h3>
              <p className="text-gray-600">
                We continuously monitor and optimize your site's performance to ensure sustained growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Pricing
        title="CRO Service Packages"
        description="Choose the right CRO package for your business needs"
        tiers={pricingTiers}
        service="cro-optimization"
      />

      <Footer />
    </div>
  );
};

export default CroOptimization;