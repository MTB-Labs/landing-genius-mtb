import { Link } from "react-router-dom";
import { Facebook, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted text-foreground py-16">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-5xl font-bold mb-6">Want to start a project?</h2>
            <Link 
              to="/contact" 
              className="inline-flex items-center text-2xl hover:text-primary transition-colors"
            >
              Let's talk 
              <span className="ml-4 w-8 h-8 rounded-full border border-primary flex items-center justify-center">
                →
              </span>
            </Link>
          </div>
          
          {/* Right Column */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">MTB Labs</h3>
            <p className="text-muted-foreground mb-8 max-w-lg">
              Elevating businesses with innovative digital solutions in the $1M-$20M ARR bracket. 
              Our expertise lies in Web Development, Conversion Rate Enhancement, and AI Integration.
            </p>
            
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-primary">eCommerce Services</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <Link to="/services/shopify-development" className="hover:text-primary transition-colors">
                    Shopify Development
                  </Link>
                </li>
                <li>
                  <Link to="/services/woocommerce-to-shopify" className="hover:text-primary transition-colors">
                    WooCommerce to Shopify Migration
                  </Link>
                </li>
                <li>
                  <Link to="/services/ai-integration" className="hover:text-primary transition-colors">
                    AI Integration
                  </Link>
                </li>
                <li>
                  <Link to="/services/cro-optimization" className="hover:text-primary transition-colors">
                    Conversion Rate Optimization
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-primary/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            Copyright © MTB Labs | Web Development & AI Integration Partner
          </p>
          <div className="flex space-x-4">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};