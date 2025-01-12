import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const PrivacyPolicy = () => {
  const [companyName, setCompanyName] = useState("");
  const [website, setWebsite] = useState("");
  const [policy, setPolicy] = useState("");
  const { toast } = useToast();

  const generatePolicy = () => {
    if (!companyName || !website) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const generatedPolicy = `Privacy Policy for ${companyName}

Last updated: ${new Date().toLocaleDateString()}

This privacy policy describes how ${companyName} ("we", "us", or "our") collects, uses, and protects your personal information when you visit ${website} (the "Website").

1. Information We Collect
2. How We Use Your Information
3. Information Sharing
4. Your Rights
5. Security Measures
6. Updates to This Policy
7. Contact Information`;

    setPolicy(generatedPolicy);
    toast({
      title: "Privacy Policy Generated",
      description: "Your privacy policy has been generated successfully.",
    });
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-center mb-8">
        Privacy Policy Generator
      </h1>
      <Card className="max-w-2xl mx-auto p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Company Name</label>
            <Input
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Enter your company name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Website URL</label>
            <Input
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              placeholder="Enter your website URL"
            />
          </div>
          <Button onClick={generatePolicy} className="w-full">
            Generate Privacy Policy
          </Button>
          {policy && (
            <div className="mt-4">
              <label className="block text-sm font-medium mb-2">
                Generated Policy
              </label>
              <Textarea
                value={policy}
                readOnly
                className="h-[400px]"
              />
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default PrivacyPolicy;