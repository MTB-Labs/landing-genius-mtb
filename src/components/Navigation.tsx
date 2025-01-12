import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, MessageSquare, Menu, X, Briefcase, ShoppingCart, ArrowRightLeft, LineChart, Code2, Sparkles, BarChart3 } from "lucide-react";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const services = [
  {
    title: "Shopify Development",
    description: "Custom Shopify solutions tailored to your unique business needs.",
    icon: ShoppingCart,
    href: "/services/shopify-development"
  },
  {
    title: "WooCommerce to Shopify",
    description: "Seamless migration service with zero data loss.",
    icon: ArrowRightLeft,
    href: "/services/woocommerce-to-shopify"
  },
  {
    title: "CRO Optimization",
    description: "Data-driven strategies to maximize your e-commerce revenue.",
    icon: BarChart3,
    href: "/services/cro-optimization"
  },
  {
    title: "Custom Development",
    description: "Bespoke e-commerce solutions built to scale.",
    icon: Code2,
    href: "/services/custom-development"
  },
  {
    title: "AI Integration",
    description: "Cutting-edge AI solutions for automation and personalization.",
    icon: LineChart,
    href: "/services/ai-integration"
  },
  {
    title: "UI/UX Design",
    description: "Beautiful, conversion-focused designs.",
    icon: Sparkles,
    href: "/services/ui-ux-design"
  }
];

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/7537b699-7205-4677-8d03-4ef5a0b4b3b8.png" 
              alt="MTB Labs" 
              className="h-8 w-auto"
            />
          </Link>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2 text-gray-600 hover:text-primary">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="flex items-center space-x-2 text-gray-600 hover:text-primary">
                    <Briefcase className="w-4 h-4" />
                    <span>Services</span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-4 p-6 w-[600px]">
                      {services.map((service) => (
                        <Link
                          key={service.title}
                          to={service.href}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted"
                        >
                          <service.icon className="w-5 h-5 text-primary mt-1" />
                          <div>
                            <div className="font-medium">{service.title}</div>
                            <p className="text-sm text-muted-foreground">
                              {service.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/contact" className="flex items-center space-x-2 text-gray-600 hover:text-primary">
              <MessageSquare className="w-4 h-4" />
              <span>Contact</span>
            </Link>
            <Button asChild variant="default" size="sm">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-gray-600 hover:text-primary px-2 py-2 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            
            <div className="space-y-2 pl-2">
              <div className="flex items-center space-x-2 text-gray-600 px-2 py-2">
                <Briefcase className="w-4 h-4" />
                <span className="font-medium">Services</span>
              </div>
              <div className="space-y-2 pl-6">
                {services.map((service) => (
                  <Link
                    key={service.title}
                    to={service.href}
                    className="flex items-center space-x-2 text-gray-600 hover:text-primary px-2 py-2 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <service.icon className="w-4 h-4" />
                    <span>{service.title}</span>
                  </Link>
                ))}
              </div>
            </div>

            <Link 
              to="/contact" 
              className="flex items-center space-x-2 text-gray-600 hover:text-primary px-2 py-2 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contact</span>
            </Link>
            <div className="pt-2 px-2">
              <Button asChild variant="default" className="w-full">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};