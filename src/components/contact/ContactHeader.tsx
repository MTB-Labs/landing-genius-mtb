import { MessageSquare } from "lucide-react";

interface ContactHeaderProps {
  title: string;
}

export const ContactHeader = ({ title }: ContactHeaderProps) => (
  <div>
    <span className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full">
      Get Started
    </span>
    <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
    <p className="text-muted-foreground mb-8">
      Let us analyze your requirements and provide actionable solutions to
      help your business grow.
    </p>
    <div className="flex items-center gap-4 mb-8">
      <MessageSquare className="w-12 h-12 text-primary" />
      <div>
        <h3 className="font-semibold mb-1">Need immediate help?</h3>
        <p className="text-muted-foreground">
          <a
            href="https://wa.me/51933038683?text=Hi!%20I'm%20interested%20in%20your%20services.%20Can%20you%20help%20me?"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Chat with us on WhatsApp for quick assistance
          </a>
        </p>
      </div>
    </div>
  </div>
);