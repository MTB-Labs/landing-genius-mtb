import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NewBlogPost from "./pages/NewBlogPost";
import Tools from "./pages/Tools";
import Contact from "./pages/Contact";
import CroCalculator from "./pages/CroCalculator";
import WhatsappGenerator from "./pages/WhatsappGenerator";
import RoiCalculator from "./pages/RoiCalculator";
import ImageResizer from "./pages/ImageResizer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ColorPalette from "./pages/ColorPalette";
import ShopifyDevelopment from "./pages/services/ShopifyDevelopment";
import CroOptimization from "./pages/services/CroOptimization";
import AiIntegration from "./pages/services/AiIntegration";
import CustomDevelopment from "./pages/services/CustomDevelopment";
import WooCommerceToShopify from "./pages/services/WooCommerceToShopify";
import UiUxDesign from "./pages/services/UiUxDesign";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/blog/new" element={<NewBlogPost />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tools/cro-calculator" element={<CroCalculator />} />
          <Route path="/tools/whatsapp-generator" element={<WhatsappGenerator />} />
          <Route path="/tools/roi-calculator" element={<RoiCalculator />} />
          <Route path="/tools/image-resizer" element={<ImageResizer />} />
          <Route path="/tools/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/tools/color-palette" element={<ColorPalette />} />
          <Route path="/services/shopify-development" element={<ShopifyDevelopment />} />
          <Route path="/services/cro-optimization" element={<CroOptimization />} />
          <Route path="/services/ai-integration" element={<AiIntegration />} />
          <Route path="/services/custom-development" element={<CustomDevelopment />} />
          <Route path="/services/woocommerce-to-shopify" element={<WooCommerceToShopify />} />
          <Route path="/services/ui-ux-design" element={<UiUxDesign />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;