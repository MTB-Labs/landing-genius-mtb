import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Pricing } from "@/components/Pricing";

const features = [
  "Complete Store Data Migration",
  "Product & Collections Transfer",
  "Customer Account Migration",
  "Order History Import",
  "SEO URL Structure Preservation",
  "301 Redirects Implementation",
  "Theme Setup & Customization",
  "Post-Migration Testing & QA",
];

const pricingTiers = [
  {
    name: "Standard Migration",
    price: "Starting from $2k",
    description: "4-5 weeks. Perfect for small to medium-sized stores looking to migrate to Shopify with essential features and support.",
    features: [
      "Shopify Premium Theme Setup",
      "Customer and Product Data Migration",
      "Basic SEO Redirects",
      "Reviews App Integration",
      "Team Training"
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

// ... keep existing code (features and component structure remain the same)

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
                Seamlessly migrate your WooCommerce store to Shopify with our expert migration service. We ensure zero data loss and minimal downtime during the transition.
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
              We follow a proven migration process that ensures your store's data integrity and functionality are maintained throughout the transition.
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
              With years of experience in e-commerce migrations, we ensure a smooth transition to Shopify while maintaining your business continuity.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4">Expert Migration Team</h3>
              <p className="text-gray-600">
                Our experienced team has successfully migrated hundreds of stores from WooCommerce to Shopify.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
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
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4">Minimal Downtime</h3>
              <p className="text-gray-600">
                Our migration process is designed to keep your store operational throughout the transition period.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Pricing
        title="Migration Packages"
        description="Choose the right migration package for your business size and needs"
        tiers={pricingTiers}
        service="woocommerce-to-shopify"
      />

      <Footer />
    </div>
  );
};

export default WooCommerceToShopify;