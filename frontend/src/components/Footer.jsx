import { Link } from "react-router-dom";
import {
  BriefcaseBusiness,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import logo from "../assets/logo.png";

const services = [
  {
    label: "All Services",
    to: "/services",
  },
  {
    label: "HR Consulting",
    to: "/services?service=HR%20Consulting",
  },
  {
    label: "Recruitment Services",
    to: "/services?service=Recruitment%20Services",
  },
  {
    label: "IT Recruitment",
    to: "/services?service=IT%20Recruitment",
  },
  {
    label: "Non-IT Recruitment",
    to: "/services?service=Non-IT%20Recruitment",
  },
  {
    label: "Hospitality Staffing",
    to: "/services?service=Hospitality%20Staffing",
  },
  {
    label: "Outsourcing Solutions",
    to: "/services?service=Outsourcing%20Solutions",
  },
];

const companyLinks = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About Us",
    to: "/about",
  },
  {
    label: "Career",
    to: "/career",
  },
  {
    label: "Contact Us",
    to: "/contact",
  },
];

const hiringLinks = [
  {
    label: "Permanent Staffing",
    to: "/services?service=Permanent%20Staffing",
  },
  {
    label: "Executive Search",
    to: "/services?service=Executive%20Search",
  },
  {
    label: "Bulk Hiring",
    to: "/services?service=Bulk%20Hiring",
  },
  {
    label: "Contract Staffing",
    to: "/services?service=Contract%20Staffing",
  },
  {
    label: "Campus Hiring",
    to: "/services?service=Campus%20Hiring%20%26%20Placement",
  },
  {
    label: "Payroll Management",
    to: "/services?service=Payroll%20Management",
  },
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
    href: "https://instagram.com/fairybusinessservice",
    icon: (
      <path d="M12 2c2.7 0 3.1 0 4.1.1 1.1 0 1.8.2 2.4.5.7.2 1.2.6 1.7 1.1.5.5.9 1 1.1 1.7.3.6.5 1.3.5 2.4.1 1 .1 1.4.1 4.1s0 3.1-.1 4.1c0 1.1-.2 1.8-.5 2.4a4.9 4.9 0 0 1-2.8 2.8c-.6.3-1.3.5-2.4.5-1 .1-1.4.1-4.1.1s-3.1 0-4.1-.1c-1.1 0-1.8-.2-2.4-.5a4.9 4.9 0 0 1-2.8-2.8c-.3-.6-.5-1.3-.5-2.4C2 15.1 2 14.7 2 12s0-3.1.1-4.1c0-1.1.2-1.8.5-2.4.2-.7.6-1.2 1.1-1.7.5-.5 1-.9 1.7-1.1.6-.3 1.3-.5 2.4-.5C8.9 2 9.3 2 12 2Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Zm5.2-8.4a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z" />
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/fairybusinessservice",
    icon: (
      <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19H5V9h3ZM6.5 7.7A1.7 1.7 0 1 1 6.5 4.3a1.7 1.7 0 0 1 0 3.4ZM19 19h-3v-5.1c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V19h-3V9h2.9v1.3h.1c.4-.8 1.4-1.7 2.9-1.7 3.1 0 3.7 2 3.7 4.7Z" />
    ),
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#041f3b] text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Company Information */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link
              to="/"
              className="inline-flex items-center gap-3"
              aria-label="FBS Management Consultancy home"
            >
              <img
                src={logo}
                alt="FBS Management Consultancy"
                className="h-16 w-auto max-w-[150px] rounded-xl bg-white p-2 object-contain"
              />

              <div className="hidden sm:block">
                <p className="font-bold leading-tight text-white">
                  FBS Management
                </p>

                <p className="text-sm font-medium text-orange-300">
                  Consultancy
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-md leading-7 text-slate-300">
              FBS Management Consultancy provides HR consulting, recruitment,
              IT hiring, non-IT hiring, hospitality staffing, campus placement
              and workforce outsourcing solutions across India.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-orange-300">
              <BriefcaseBusiness size={17} />
              Connecting Talent with Opportunity
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
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
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

            <div className="mt-3 h-1 w-12 rounded-full bg-orange-500" />

            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    to={service.to}
                    className="text-sm leading-6 text-slate-300 transition-colors hover:text-orange-300"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hiring Solutions */}
          <div>
            <h2 className="text-lg font-bold text-white">
              Hiring Solutions
            </h2>

            <div className="mt-3 h-1 w-12 rounded-full bg-orange-500" />

            <ul className="mt-5 space-y-3">
              {hiringLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-sm leading-6 text-slate-300 transition-colors hover:text-orange-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h2 className="text-lg font-bold text-white">Company</h2>

            <div className="mt-3 h-1 w-12 rounded-full bg-orange-500" />

            <ul className="mt-5 space-y-3">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-sm leading-6 text-slate-300 transition-colors hover:text-orange-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="mt-6 inline-flex rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              Hire Talent
            </Link>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 grid gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 sm:grid-cols-2 lg:grid-cols-3">
          <a
            href="tel:+918890628049"
            className="group flex items-start gap-4"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-white">
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
            href="mailto:info@fairybusinessservice.com"
            className="group flex items-start gap-4"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-white">
              <Mail size={21} />
            </div>

            <div className="min-w-0">
              <p className="text-sm text-slate-400">Email Address</p>

              <p className="mt-1 break-all font-semibold text-white transition group-hover:text-orange-300">
                info@fairybusinessservice.com
              </p>
            </div>
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Pratap+Nagar+Jaipur+Rajasthan+302033"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-white">
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
          <p>
            © {year} FBS Management Consultancy. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            <Link
              to="/privacy-policy"
              className="transition-colors hover:text-orange-300"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="transition-colors hover:text-orange-300"
            >
              Terms & Conditions
            </Link>

            <Link
              to="/contact"
              className="transition-colors hover:text-orange-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;