import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Pricing } from "@/components/Pricing";

const features = [
  "Full Data Migration",
  "Product & Variant Transfer",
  "Customer Account Migration",
  "Order History Transfer",
  "SEO Data Migration",
  "301 Redirects Setup",
  "Theme Setup & Customization",
  "Post-Migration Testing",
];

const pricingTiers = [
  {
    name: "Basic Migration",
    price: "$999",
    description: "Perfect for small stores with basic needs",
    features: [
      "Up to 500 products",
      "Basic product data migration",
      "Customer data transfer",
      "Order history migration",
      "Basic 301 redirects",
      "Email support"
    ]
  },
  {
    name: "Professional",
    price: "$1,999",
    description: "Ideal for growing businesses",
    features: [
      "Up to 5000 products",
      "Full product data migration",
      "Customer & order history",
      "Complete SEO transfer",
      "Advanced 301 redirects",
      "Theme setup & customization",
      "Priority support"
    ],
    highlight: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale operations",
    features: [
      "Unlimited products",
      "Custom data migration",
      "Full historical data",
      "Advanced SEO optimization",
      "Custom integrations",
      "Theme development",
      "24/7 priority support"
    ]
  }
];

const WooCommerceToShopify = () => {
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
                WooCommerce to Shopify Migration Service
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Seamlessly migrate your WooCommerce store to Shopify with zero data loss and minimal downtime. Our expert team ensures a smooth transition while maintaining your SEO rankings and customer data.
              </p>
              <Button asChild size="lg">
                <Link to="/contact" className="inline-flex items-center">
                  Start Your Migration
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
                alt="WooCommerce to Shopify Migration"
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
              Our Migration Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a proven migration process to ensure your transition to Shopify is smooth and successful, with minimal impact on your business operations.
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
              Why Choose Our Migration Service?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our team has successfully migrated hundreds of stores from WooCommerce to Shopify, ensuring a seamless transition with no data loss.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4">Zero Data Loss</h3>
              <p className="text-gray-600">
                We ensure all your products, customers, and order history are transferred accurately to your new Shopify store.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4">Minimal Downtime</h3>
              <p className="text-gray-600">
                Our migration process is designed to keep your store operational throughout the transition period.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4">SEO Preserved</h3>
              <p className="text-gray-600">
                We implement proper 301 redirects and maintain your SEO data to preserve your search rankings.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Pricing
        title="Migration Service Pricing"
        description="Choose the migration package that best fits your store's needs"
        tiers={pricingTiers}
      />

      <Footer />
    </div>
  );
};

export default WooCommerceToShopify;