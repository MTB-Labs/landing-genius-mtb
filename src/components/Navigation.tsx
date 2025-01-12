import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Wrench, BookOpen, MessageSquare, Menu, X, Briefcase } from "lucide-react";
import { Button } from "./ui/button";

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
            <Link to="/services" className="flex items-center space-x-2 text-gray-600 hover:text-primary">
              <Briefcase className="w-4 h-4" />
              <span>Services</span>
            </Link>
            <Link to="/tools" className="flex items-center space-x-2 text-gray-600 hover:text-primary">
              <Wrench className="w-4 h-4" />
              <span>Tools</span>
            </Link>
            <Link to="/blog" className="flex items-center space-x-2 text-gray-600 hover:text-primary">
              <BookOpen className="w-4 h-4" />
              <span>Blog</span>
            </Link>
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
            <Link 
              to="/services" 
              className="flex items-center space-x-2 text-gray-600 hover:text-primary px-2 py-2 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              <Briefcase className="w-4 h-4" />
              <span>Services</span>
            </Link>
            <Link 
              to="/tools" 
              className="flex items-center space-x-2 text-gray-600 hover:text-primary px-2 py-2 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              <Wrench className="w-4 h-4" />
              <span>Tools</span>
            </Link>
            <Link 
              to="/blog" 
              className="flex items-center space-x-2 text-gray-600 hover:text-primary px-2 py-2 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              <BookOpen className="w-4 h-4" />
              <span>Blog</span>
            </Link>
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