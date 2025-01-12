import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { useSearchParams } from "react-router-dom";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const services = [
  { value: "shopify-development", label: "Shopify Development" },
  { value: "woocommerce-to-shopify", label: "WooCommerce to Shopify Migration" },
  { value: "cro-optimization", label: "CRO Optimization" },
  { value: "custom-development", label: "Custom Development" },
  { value: "ai-integration", label: "AI Integration" },
  { value: "ui-ux-design", label: "UI/UX Design" },
];

const getTitleByService = (service: string) => {
  switch (service) {
    case "shopify-development":
      return "Ready for Custom Shopify Development?";
    case "woocommerce-to-shopify":
      return "Ready to Migrate to Shopify?";
    case "cro-optimization":
      return "Ready for a Free CRO Audit?";
    case "custom-development":
      return "Ready for Custom Development?";
    case "ai-integration":
      return "Ready to Integrate AI Solutions?";
    case "ui-ux-design":
      return "Ready to Transform Your Design?";
    default:
      return "Ready for a Free Consultation?";
  }
};

export const Contact = () => {
  const [searchParams] = useSearchParams();
  const serviceFromUrl = searchParams.get("service");

  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    websiteUrl: '',
    goals: '',
    service: serviceFromUrl || 'cro-optimization',
    phoneNumber: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhoneChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      phoneNumber: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.businessName || !formData.email || !formData.websiteUrl) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    // URL validation
    try {
      new URL(formData.websiteUrl);
    } catch {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid website URL.",
        variant: "destructive"
      });
      return;
    }

    // Success toast
    toast({
      title: "Request Submitted!",
      description: "We'll get back to you within 24 hours with your consultation.",
    });

    // Reset form
    setFormData({
      businessName: '',
      email: '',
      websiteUrl: '',
      goals: '',
      service: serviceFromUrl || 'cro-optimization',
      phoneNumber: ''
    });
  };

  return (
    <section className="py-24 bg-secondary" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <span className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full">
                Get Started
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {getTitleByService(formData.service)}
              </h2>
              <p className="text-muted-foreground mb-8">
                Let us analyze your requirements and provide actionable solutions to
                help your business grow.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <MessageSquare className="w-12 h-12 text-primary" />
                <div>
                  <h3 className="font-semibold mb-1">Need immediate help?</h3>
                  <p className="text-muted-foreground">
                    Chat with us on WhatsApp for quick assistance
                  </p>
                </div>
              </div>
            </div>
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleInputChange}
                placeholder="Business Name"
                className="w-full px-6 py-4 rounded-lg bg-white border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                className="w-full px-6 py-4 rounded-lg bg-white border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                required
              />
              <div className="phone-input-container">
                <PhoneInput
                  country={'us'}
                  value={formData.phoneNumber}
                  onChange={handlePhoneChange}
                  containerClass="w-full"
                  inputClass="w-full px-6 py-4 rounded-lg bg-white border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  buttonClass="!border-border !bg-white hover:!bg-gray-50"
                />
              </div>
              <input
                type="url"
                name="websiteUrl"
                value={formData.websiteUrl}
                onChange={handleInputChange}
                placeholder="Website URL"
                className="w-full px-6 py-4 rounded-lg bg-white border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                required
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                className="w-full px-6 py-4 rounded-lg bg-white border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                required
              >
                {services.map((service) => (
                  <option key={service.value} value={service.value}>
                    {service.label}
                  </option>
                ))}
              </select>
              <textarea
                name="goals"
                value={formData.goals}
                onChange={handleInputChange}
                placeholder="What are your main goals?"
                rows={4}
                className="w-full px-6 py-4 rounded-lg bg-white border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-medium transition-colors hover:bg-primary/90"
              >
                Request Free Consultation
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};