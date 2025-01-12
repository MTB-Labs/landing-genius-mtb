import { Link } from "react-router-dom";
import { Facebook, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#1A1F2C] text-white py-16">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-5xl font-bold mb-6">Want to start a project?</h2>
            <Link 
              to="/contact" 
              className="inline-flex items-center text-2xl hover:text-[#9b87f5] transition-colors"
            >
              Let's talk 
              <span className="ml-4 w-8 h-8 rounded-full border border-[#9b87f5] flex items-center justify-center">
                →
              </span>
            </Link>
          </div>
          
          {/* Right Column */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">MTB Labs</h3>
            <p className="text-gray-300 mb-8 max-w-lg">
              Elevating businesses with innovative digital solutions in the $1M-$20M ARR bracket. 
              Our expertise lies in Web Development, Conversion Rate Enhancement, and AI Integration.
            </p>
            
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-[#D6BCFA]">eCommerce Services</h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <Link to="/services/shopify-development" className="hover:text-[#9b87f5] transition-colors">
                    Shopify Development
                  </Link>
                </li>
                <li>
                  <Link to="/services/ai-integration" className="hover:text-[#9b87f5] transition-colors">
                    AI Integration
                  </Link>
                </li>
                <li>
                  <Link to="/services/cro-optimization" className="hover:text-[#9b87f5] transition-colors">
                    Conversion Rate Optimization
                  </Link>
                </li>
                <li>
                  <Link to="/tools" className="hover:text-[#9b87f5] transition-colors">
                    Explore more tools with MTB Labs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-[#7E69AB] pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            Copyright © MTB Labs | Web Development & AI Integration Partner
          </p>
          <div className="flex space-x-4">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#9b87f5] transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#9b87f5] transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};