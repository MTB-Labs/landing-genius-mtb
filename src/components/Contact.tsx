import { useSearchParams } from "react-router-dom";
import { ContactHeader } from "./contact/ContactHeader";
import { ContactForm } from "./contact/ContactForm";
import { getTitleByService } from "./contact/types";
import { useState } from "react";

export const Contact = () => {
  const [searchParams] = useSearchParams();
  const serviceFromUrl = searchParams.get("service");
  const [currentService, setCurrentService] = useState(serviceFromUrl || "");
  const title = getTitleByService(currentService);

  const handleServiceChange = (service: string) => {
    setCurrentService(service);
  };

  return (
    <section className="py-24 bg-secondary" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ContactHeader title={title} />
            <ContactForm 
              initialService={serviceFromUrl || undefined} 
              onServiceChange={handleServiceChange}
            />
          </div>
        </div>
      </div>
    </section>
  );
};