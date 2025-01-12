import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const RoiCalculator = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-secondary"
    >
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">ROI Calculator</h1>
        <p className="text-lg mb-4">Calculate your return on investment with our easy-to-use ROI calculator.</p>
        <form className="space-y-4">
          <div>
            <label htmlFor="investment" className="block text-sm font-medium">Initial Investment</label>
            <input type="number" id="investment" className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="Enter your investment amount" />
          </div>
          <div>
            <label htmlFor="return" className="block text-sm font-medium">Expected Return</label>
            <input type="number" id="return" className="mt-1 block w-full border border-gray-300 rounded-md p-2" placeholder="Enter your expected return amount" />
          </div>
          <button type="submit" className="w-full bg-primary text-white py-2 rounded-md">Calculate ROI</button>
        </form>
        <div className="mt-8">
          <h2 className="text-2xl font-bold">Results</h2>
          <p className="text-lg">Your ROI will be displayed here after calculation.</p>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default RoiCalculator;
