import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingContact = () => {
  const phoneNumber = "+918890628049";

  const whatsappLink =
    "https://wa.me/918890628049?text=Hello%20Fairy%20Business%20Services,%20I%20would%20like%20to%20know%20more%20about%20your%20services.";

  return (
    <>
      {/* WhatsApp */}
      <a
        id="chat-button-whatsapp"
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        title="Chat on WhatsApp"
        className="fixed bottom-5 left-5 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_28px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-110 hover:bg-[#20bd5a] focus:outline-none focus:ring-4 focus:ring-green-200"
      >
        <FaWhatsapp
          size={32}
          aria-hidden="true"
          className="pointer-events-none"
        />
      </a>

      {/* Call */}
      <a
        href={`tel:${phoneNumber}`}
        aria-label="Call Fairy Business Services"
        title="Call Now"
        className="fixed bottom-20 right-5 z-[9999] flex h-14 w-14 items-center justify-center rounded-xl bg-[#062c54] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-200"
      >
        <Phone
          size={24}
          strokeWidth={2.4}
          aria-hidden="true"
          className="pointer-events-none"
        />
      </a>
    </>
  );
};

export default FloatingContact;