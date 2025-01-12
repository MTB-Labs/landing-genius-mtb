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
    name: "Basic Migration",
    price: "$999",
    description: "Perfect for small stores with basic needs",
    features: [
      "Up to 500 products",
      "Basic product data migration",
      "Customer data transfer",
      "Order history migration",
      "Basic 301 redirects",
      "14 days of email support"
    ]
  },
  {
    name: "Professional",
    price: "$1,999",
    description: "Ideal for growing businesses",
    features: [
      "Up to 5000 products",
      "Full product data migration",
      "Complete customer & order history",
      "Advanced SEO preservation",
      "Custom 301 redirects mapping",
      "Theme setup & customization",
      "30 days of priority support"
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
      "Full historical data transfer",
      "Advanced SEO optimization",
      "Custom integrations migration",
      "Premium theme customization",
      "90 days of dedicated support"
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
                Migrate from WooCommerce to Shopify with Confidence
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Experience a seamless transition to Shopify with our expert migration service. We handle everything from product data to customer information, ensuring zero data loss and minimal disruption to your business operations.
              </p>
              <Button asChild size="lg">
                <Link to="/contact" className="inline-flex items-center">
                  Start Your Migration Journey
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
              Comprehensive Migration Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our battle-tested migration process ensures a smooth transition to Shopify while maintaining your store's functionality, SEO rankings, and customer data integrity.
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
              With over 500+ successful migrations completed, our team has the expertise to handle your transition with precision and care.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4">Guaranteed Data Security</h3>
              <p className="text-gray-600">
                Your data is handled with the utmost care. We use secure protocols and maintain data integrity throughout the migration process.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4">Business Continuity</h3>
              <p className="text-gray-600">
                Our migration process is designed to minimize downtime. Your store remains operational while we prepare the new Shopify setup.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4">SEO Performance</h3>
              <p className="text-gray-600">
                We implement proper URL structures and redirects to maintain your search rankings and organic traffic during the transition.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Pricing
        title="Migration Service Packages"
        description="Choose the right migration package for your business size and needs"
        tiers={pricingTiers}
      />

      <Footer />
    </div>
  );
};

export default WooCommerceToShopify;