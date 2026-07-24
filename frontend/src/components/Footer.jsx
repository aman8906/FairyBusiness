import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUp,
  BriefcaseBusiness,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";

import logo from "../assets/logo.png";

const services = [
  { label: "All Services", to: "/services" },
  { label: "HR Consulting", to: "/services?service=HR%20Consulting" },
  { label: "IT Recruitment", to: "/services?service=IT%20Recruitment" },
  { label: "IT Project Handling", to: "/services?service=IT%20Project%20Handling" },
  { label: "Software Developer", to: "/services?service=Software%20Developer" },
  { label: "Corporate Training", to: "/services?service=Corporate%20Training" },
  { label: "Hospitality Staffing", to: "/services?service=Hospitality%20Staffing" },
  { label: "NLP, POSH & TTT", to: "/services?service=Corporate%20Training" },
];

const companyLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Career", to: "/career" },
  { label: "Contact Us", to: "/contact" },
];

const hiringLinks = [
  { label: "Campus Hiring", to: "/services?service=Campus%20Hiring" },
  { label: "Placement Support", to: "/services?service=Placement%20Support" },
  { label: "Permanent Staffing", to: "/services?service=Permanent%20Staffing" },
  { label: "Executive Search", to: "/services?service=Executive%20Search" },
  { label: "Bulk Hiring", to: "/services?service=Bulk%20Hiring" },
  { label: "Contract Staffing", to: "/services?service=Contract%20Staffing" },
];

// Education, career and banking support — kept in sync with the
// Services page and the navbar's add-on services list.
const educationCareerLinks = [
  { label: "Admission Counselling", to: "/services?service=UG%2FPG%20Admission%20Counselling" },
  { label: "Internship Programs", to: "/services?service=Internship%20Programs" },
  { label: "Resume Writing & Building", to: "/services?service=Resume%20Writing%20%26%20Building" },
  { label: "Career Counselling", to: "/services?service=Career%20Counselling" },
  { label: "NGO Project Help", to: "/services?service=NGO%20Project%20Help" },
  { label: "Abroad Study Help", to: "/services?service=Abroad%20Study%20Help" },
  { label: "Banking Products & Placement", to: "/services?service=Banking%20Products%20%26%20Placement" },
  { label: "CRM & Client Support", to: "/services?service=CRM%20%26%20Client%20Support" },
];

const socials = [
  {
    label: "Facebook",
    href: "https://facebook.com/fairybusinessservice",
    icon: (
      <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z" />
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/fairybusinessservices",
    icon: (
      <path d="M12 2c2.7 0 3.1 0 4.1.1 1.1 0 1.8.2 2.4.5.7.2 1.2.6 1.7 1.1.5.5.9 1 1.1 1.7.3.6.5 1.3.5 2.4.1 1 .1 1.4.1 4.1s0 3.1-.1 4.1c0 1.1-.2 1.8-.5 2.4a4.9 4.9 0 0 1-2.8 2.8c-.6.3-1.3.5-2.4.5-1 .1-1.4.1-4.1.1s-3.1 0-4.1-.1c-1.1 0-1.8-.2-2.4-.5a4.9 4.9 0 0 1-2.8-2.8c-.3-.6-.5-1.3-.5-2.4C2 15.1 2 14.7 2 12s0-3.1.1-4.1c0-1.1.2-1.8.5-2.4.2-.7.6-1.2 1.1-1.7.5-.5 1-.9 1.7-1.1.6-.3 1.3-.5 2.4-.5C8.9 2 9.3 2 12 2Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Zm5.2-8.4a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z" />
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/fairybusinessservices",
    icon: (
      <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19H5V9h3ZM6.5 7.7A1.7 1.7 0 1 1 6.5 4.3a1.7 1.7 0 0 1 0 3.4ZM19 19h-3v-5.1c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V19h-3V9h2.9v1.3h.1c.4-.8 1.4-1.7 2.9-1.7 3.1 0 3.7 2 3.7 4.7Z" />
    ),
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  const [showTop, setShowTop] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3500);
  };

  return (
    <footer className="relative overflow-hidden bg-[#041f3b] text-white">
      {/* Animated glow orbs — "active" background */}
      <div className="pointer-events-none absolute -left-24 top-12 h-72 w-72 animate-pulse rounded-full bg-orange-500/10 blur-3xl [animation-duration:6s]" />
      <div className="pointer-events-none absolute -right-24 bottom-20 h-80 w-80 animate-pulse rounded-full bg-blue-500/10 blur-3xl [animation-duration:8s]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-amber-400/5 blur-3xl [animation-duration:10s]" />
      <div className="h-1 w-full animate-[gradient-x_4s_ease_infinite] bg-gradient-to-r from-orange-500 via-amber-400 to-blue-500 bg-[length:200%_auto]" />

      {/* Newsletter strip */}
      <div className="relative border-b border-white/10 bg-white/[0.04] backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-8 sm:px-6 md:flex-row lg:px-8">
          <div className="flex items-center gap-3 text-center md:text-left">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-500/20 text-orange-300">
              <Sparkles size={20} />
            </span>
            <div>
              <p className="text-base font-bold text-white">
                Stay ahead with hiring &amp; HR insights
              </p>
              <p className="text-sm text-slate-400">
                Subscribe for the latest openings and workforce trends.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubscribe}
            className="flex w-full max-w-md items-center gap-2 rounded-full border border-white/15 bg-white/10 p-1.5 pl-5 shadow-inner"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full bg-transparent text-sm text-white placeholder:text-slate-400 focus:outline-none"
            />
            <button
              type="submit"
              className="flex shrink-0 items-center gap-1.5 rounded-full bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:bg-orange-600 active:scale-95"
            >
              <Send size={15} />
              {subscribed ? "Subscribed!" : "Subscribe"}
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
          {/* Company Information */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link
              to="/"
              className="group inline-flex items-center gap-3"
              aria-label="Fairy Business Services home"
            >
              <div className="relative">
                <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-emerald-500" />
                </span>
                <img
                  src={logo}
                  alt="Fairy Business Services"
                  className="h-20 w-auto max-w-[220px] rounded-2xl bg-white p-3 object-contain shadow-xl ring-1 ring-white/20 transition duration-300 group-hover:scale-105 group-hover:ring-orange-400/50 sm:h-24"
                />
              </div>

              <div className="hidden sm:block">
                <p className="font-bold leading-tight text-white">
                  Fairy Business
                </p>
                <p className="text-sm font-medium text-orange-300">
                  Services
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-md leading-7 text-slate-300">
              Fairy Business Services provides HR consulting, recruitment,
              IT hiring, non-IT hiring, hospitality staffing, corporate
              training, campus placement, education &amp; career counselling
              and workforce outsourcing solutions across India. We also
              provide placement and jobs in the banking sector.
            </p>

            <div className="mt-5 inline-flex flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-orange-300">
              <BriefcaseBusiness size={17} />
              Recruitment • IT Projects • Corporate Training • Banking Placements
            </div>

            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${social.label} page`}
                  title={social.label}
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-slate-300 transition duration-300 hover:-translate-y-1.5 hover:border-orange-500 hover:bg-orange-500 hover:text-white hover:shadow-lg hover:shadow-orange-500/30"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  >
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-lg font-bold text-white">Our Services</h2>
            <div className="mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-orange-500 to-amber-400" />
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    to={service.to}
                    className="group inline-flex items-center text-sm leading-6 text-slate-300 transition-colors hover:text-orange-300"
                  >
                    <span className="mr-0 h-px w-0 bg-orange-400 transition-all duration-300 group-hover:mr-2 group-hover:w-3" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hiring Solutions */}
          <div>
            <h2 className="text-lg font-bold text-white">Hiring Solutions</h2>
            <div className="mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-orange-500 to-amber-400" />
            <ul className="mt-5 space-y-3">
              {hiringLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="group inline-flex items-center text-sm leading-6 text-slate-300 transition-colors hover:text-orange-300"
                  >
                    <span className="mr-0 h-px w-0 bg-orange-400 transition-all duration-300 group-hover:mr-2 group-hover:w-3" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Education, Career & Banking */}
          <div>
            <h2 className="text-lg font-bold text-white">
              Education &amp; Career
            </h2>
            <div className="mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-orange-500 to-amber-400" />
            <ul className="mt-5 space-y-3">
              {educationCareerLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="group inline-flex items-center text-sm leading-6 text-slate-300 transition-colors hover:text-orange-300"
                  >
                    <span className="mr-0 h-px w-0 bg-orange-400 transition-all duration-300 group-hover:mr-2 group-hover:w-3" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h2 className="text-lg font-bold text-white">Company</h2>
            <div className="mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-orange-500 to-amber-400" />
            <ul className="mt-5 space-y-3">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="group inline-flex items-center text-sm leading-6 text-slate-300 transition-colors hover:text-orange-300"
                  >
                    <span className="mr-0 h-px w-0 bg-orange-400 transition-all duration-300 group-hover:mr-2 group-hover:w-3" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition duration-300 hover:scale-105 hover:bg-orange-600"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 grid gap-5 rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 shadow-2xl backdrop-blur sm:grid-cols-2 lg:grid-cols-3">
          <a href="tel:+918890628049" className="group flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-white transition duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-orange-500/40">
              <Phone size={21} />
            </div>
            <div>
              <p className="text-sm text-slate-400">Call Our Team</p>
              <p className="mt-1 font-semibold text-white transition group-hover:text-orange-300">
                +91 88906 28049
              </p>
            </div>
          </a>

          <a
            href="mailto:fairybusinessservices@outlook.com"
            className="group flex items-start gap-4"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-white transition duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-orange-500/40">
              <Mail size={21} />
            </div>
            <div className="min-w-0">
              <p className="text-sm text-slate-400">Email Address</p>
              <p className="mt-1 break-all font-semibold text-white transition group-hover:text-orange-300">
                fairybusinessservices@outlook.com
              </p>
            </div>
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Pratap+Nagar+Jaipur+Rajasthan+302033"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-white transition duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-orange-500/40">
              <MapPin size={21} />
            </div>
            <div>
              <p className="text-sm text-slate-400">Office Location</p>
              <p className="mt-1 font-semibold leading-6 text-white transition group-hover:text-orange-300">
                Pratap Nagar, Jaipur, Rajasthan – 302033
              </p>
            </div>
          </a>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 bg-[#03182e]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-5 text-center text-sm text-slate-400 sm:px-6 md:flex-row md:text-left lg:px-8">
          <p>© {year} Fairy Business Services. All rights reserved.</p>

          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            <Link to="/privacy-policy" className="transition-colors hover:text-orange-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-orange-300">
              Terms & Conditions
            </Link>
            <Link to="/contact" className="transition-colors hover:text-orange-300">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Floating back-to-top button — "active" / live element */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg shadow-orange-500/40 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 ${
          showTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;