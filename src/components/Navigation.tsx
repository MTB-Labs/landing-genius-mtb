import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Wrench, BookOpen, MessageSquare, Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-xl">MTB Labs</Link>
          
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