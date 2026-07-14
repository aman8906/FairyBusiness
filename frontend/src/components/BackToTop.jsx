import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 250);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!showButton) return null;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Back to Top"
      className="fixed bottom-5 right-5 z-[9999] flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#062c54] shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-orange-500 hover:text-white"
    >
      <ArrowUp size={23} strokeWidth={2.3} />
    </button>
  );
};

export default BackToTop;