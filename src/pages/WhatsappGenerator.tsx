import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Navigation } from "@/components/Navigation";

const WhatsappGenerator = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    phoneNumber: "",
    message: "",
    email: "",
  });

  const generateWhatsAppLink = () => {
    const cleanPhoneNumber = formData.phoneNumber.replace(/\D/g, "");
    const encodedMessage = encodeURIComponent(formData.message);
    return `https://wa.me/${cleanPhoneNumber}?text=${encodedMessage}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.phoneNumber || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    if (!formData.email) {
      toast({
        title: "Email required",
        description: "Please enter your email to generate the link",
        variant: "destructive",
      });
      return;
    }

    const whatsappLink = generateWhatsAppLink();
    
    // Copy to clipboard
    navigator.clipboard.writeText(whatsappLink);
    
    toast({
      title: "WhatsApp Link Generated!",
      description: "The link has been copied to your clipboard",
    });

    // Open WhatsApp in a new tab
    window.open(whatsappLink, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-secondary py-24"
    >
      <Navigation />
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full">
              WhatsApp Link Generator
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Create Custom WhatsApp Links
            </h1>
            <p className="text-muted-foreground">
              Generate links that open WhatsApp with a pre-filled message
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-sm">
            <div>
              <label className="block text-sm font-medium mb-2">Phone Number (with country code)</label>
              <Input
                type="tel"
                placeholder="e.g. +1234567890"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <Textarea
                placeholder="Enter your pre-filled message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
              Generate WhatsApp Link
            </Button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default WhatsappGenerator;