import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const ColorPalette = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-secondary"
    >
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Color Palette Generator</h1>
        <p className="mb-4">Generate beautiful color palettes for your projects.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-2xl font-semibold">Palette 1</h2>
            <div className="flex space-x-2">
              <div className="w-16 h-16 bg-red-500"></div>
              <div className="w-16 h-16 bg-green-500"></div>
              <div className="w-16 h-16 bg-blue-500"></div>
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-2xl font-semibold">Palette 2</h2>
            <div className="flex space-x-2">
              <div className="w-16 h-16 bg-yellow-500"></div>
              <div className="w-16 h-16 bg-purple-500"></div>
              <div className="w-16 h-16 bg-pink-500"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default ColorPalette;
