import { Link } from "react-router-dom";
import { Home, Tools, BookOpen, MessageSquare } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-xl">MTB Labs</Link>
          <div className="flex space-x-8">
            <Link to="/" className="flex items-center space-x-2 text-gray-600 hover:text-primary">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link to="/tools" className="flex items-center space-x-2 text-gray-600 hover:text-primary">
              <Tools className="w-4 h-4" />
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
          </div>
        </div>
      </div>
    </nav>
  );
};