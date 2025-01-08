import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-24 bg-secondary" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <span className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full">
                Get Started
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready for a Free CRO Audit?
              </h2>
              <p className="text-muted-foreground mb-8">
                Let us analyze your website and provide actionable insights to
                increase your conversion rates.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <MessageSquare className="w-12 h-12 text-primary" />
                <div>
                  <h3 className="font-semibold mb-1">Need immediate help?</h3>
                  <p className="text-muted-foreground">
                    Chat with us on WhatsApp for quick assistance
                  </p>
                </div>
              </div>
            </div>
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <input
                type="text"
                placeholder="Business Name"
                className="w-full px-6 py-4 rounded-lg bg-white border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-6 py-4 rounded-lg bg-white border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <input
                type="url"
                placeholder="Website URL"
                className="w-full px-6 py-4 rounded-lg bg-white border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <textarea
                placeholder="What are your main goals?"
                rows={4}
                className="w-full px-6 py-4 rounded-lg bg-white border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-medium transition-colors hover:bg-primary/90"
              >
                Request Free Audit
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};