import { useSearchParams } from "react-router-dom";
import { ContactHeader } from "./contact/ContactHeader";
import { ContactForm } from "./contact/ContactForm";
import { getTitleByService } from "./contact/types";

export const Contact = () => {
  const [searchParams] = useSearchParams();
  const serviceFromUrl = searchParams.get("service");
  const title = getTitleByService(serviceFromUrl || "");

  return (
    <section className="py-24 bg-secondary" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ContactHeader title={title} />
            <ContactForm initialService={serviceFromUrl || undefined} />
          </div>
        </div>
      </div>
    </section>
  );
};