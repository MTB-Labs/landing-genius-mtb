import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "@/hooks/use-toast";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { FormData, services } from "./types";

interface ContactFormProps {
  initialService?: string;
  onServiceChange?: (service: string) => void;
}

export const ContactForm = ({ initialService, onServiceChange }: ContactFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    businessName: '',
    email: '',
    websiteUrl: '',
    goals: '',
    service: initialService || 'cro-optimization',
    phoneNumber: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'service' && onServiceChange) {
      onServiceChange(value);
    }
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
    if (!formData.fullName || !formData.businessName || !formData.email || !formData.websiteUrl) {
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
      fullName: '',
      businessName: '',
      email: '',
      websiteUrl: '',
      goals: '',
      service: initialService || 'cro-optimization',
      phoneNumber: ''
    });
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="space-y-6"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleInputChange}
        placeholder="Full Name"
        className="w-full px-6 py-4 rounded-lg bg-white border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
        required
      />
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
  );
};