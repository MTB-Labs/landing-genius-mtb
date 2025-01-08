import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section className="py-24 bg-secondary" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-accent/10 text-accent rounded-full">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Transform Your Business?
          </h2>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-6 py-4 rounded-lg bg-white border border-border focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
            />
            <textarea
              placeholder="Tell us about your project"
              rows={4}
              className="w-full px-6 py-4 rounded-lg bg-white border border-border focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-medium transition-colors hover:bg-primary/90"
            >
              Let's Talk
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};