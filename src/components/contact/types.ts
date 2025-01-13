export interface FormData {
  fullName: string;
  businessName: string;
  email: string;
  websiteUrl: string;
  goals: string;
  service: string;
  phoneNumber: string;
}

export interface Service {
  value: string;
  label: string;
}

export const services: Service[] = [
  { value: "shopify-development", label: "Shopify Development" },
  { value: "woocommerce-to-shopify", label: "WooCommerce to Shopify Migration" },
  { value: "cro-optimization", label: "CRO Optimization" },
  { value: "custom-development", label: "Custom Development" },
  { value: "ai-integration", label: "AI Integration" },
  { value: "ui-ux-design", label: "UI/UX Design" },
];

export const getTitleByService = (service: string) => {
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