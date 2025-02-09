import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Pricing } from "@/components/Pricing";

const features = [
  "User Research & Analysis",
  "Wireframing & Prototyping",
  "Visual Design",
  "Interaction Design",
  "Usability Testing",
  "Responsive Design",
  "Design Systems",
  "Brand Integration",
];

const pricingTiers = [
  {
    name: "Essential Design",
    price: "From $3,000",
    description: "Perfect for startups and small businesses.",
    features: [
      "5 Key Pages Design",
      "Basic Design System",
      "Mobile Responsive",
      "2 Revision Rounds",
      "Basic Prototype"
    ]
  },
  {
    name: "Professional Design",
    price: "From $7,000",
    description: "Comprehensive design solution for growing businesses.",
    features: [
      "Full Website Design",
      "Complete Design System",
      "Interactive Prototypes",
      "Unlimited Revisions",
      "User Testing"
    ],
    highlight: true
  },
  {
    name: "Enterprise Design",
    price: "Custom",
    description: "Full-scale design transformation for large enterprises.",
    features: [
      "Multi-platform Design",
      "Advanced Design System",
      "Custom Components",
      "User Research & Testing",
      "Design Team Training"
    ]
  }
];

const UiUxDesign = () => {
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
                UI/UX Design Services
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Beautiful, conversion-focused designs that enhance user experience and drive sales.
              </p>
              <Button asChild size="lg">
                <Link to="/contact?service=ui-ux-design" className="inline-flex items-center">
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
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334"
                alt="UI/UX Design"
                className="rounded-lg shadow-xl aspect-video object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Design Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a user-centered design approach to create engaging and effective experiences.
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
              Why Choose Our UI/UX Design?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              With expertise in e-commerce design, we create experiences that convert visitors into customers.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4">User-Centered Design</h3>
              <p className="text-gray-600">
                We put your users first to create intuitive and engaging experiences.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4">Conversion-Focused</h3>
              <p className="text-gray-600">
                Our designs are optimized to drive conversions and increase sales.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4">Brand Consistency</h3>
              <p className="text-gray-600">
                We ensure your brand identity shines through every design element.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Pricing
        title="Design Packages"
        description="Choose the right design package for your business needs"
        tiers={pricingTiers}
        service="ui-ux-design"
      />

      <Footer />
    </div>
  );
};

export default UiUxDesign;
