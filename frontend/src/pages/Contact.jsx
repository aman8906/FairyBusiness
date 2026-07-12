import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  UserRound,
  UsersRound,
  X,
} from "lucide-react";

import api from "../api/axios";

const COMPANY_NAME = "FBS Management Consultancy";
const PHONE_NUMBER = "+91 88906 28049";
const PHONE_LINK = "tel:+918890628049";
const EMAIL_ADDRESS = "info@fairybusinessservice.com";
const OFFICE_ADDRESS = "Pratap Nagar, Jaipur, Rajasthan – 302033";

const MAP_LINK =
  "https://www.google.com/maps/search/?api=1&query=Pratap+Nagar+Jaipur+Rajasthan+302033";

const contactCards = [
  {
    title: "Office Email",
    value: EMAIL_ADDRESS,
    href: `mailto:${EMAIL_ADDRESS}`,
    icon: Mail,
  },
  {
    title: "Office Phone",
    value: PHONE_NUMBER,
    href: PHONE_LINK,
    icon: Phone,
  },
  {
    title: "Office Location",
    value: OFFICE_ADDRESS,
    href: MAP_LINK,
    icon: MapPin,
    external: true,
  },
];

const services = [
  "HR Consulting",
  "Permanent Staffing",
  "Executive Search",
  "Bulk Hiring",
  "Campus Hiring & Placement",
  "IT Recruitment",
  "Non-IT Recruitment",
  "Hospitality Staffing",
  "Contract Staffing",
  "Payroll Management",
  "Third-Party Payroll",
  "Facility Management Staffing",
  "Workforce Management",
  "Compliance Support",
  "Other Requirement",
];

const whyChooseUs = [
  "25+ years of industry expertise",
  "Experienced recruitment professionals",
  "IT and non-IT hiring expertise",
  "Hospitality staffing support",
  "Fast candidate deployment",
  "Quality candidate screening",
  "PAN India recruitment support",
  "Customized HR solutions",
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const Toast = ({ toast, onClose }) => {
  useEffect(() => {
    if (!toast) return undefined;

    const timer = window.setTimeout(() => {
      onClose();
    }, 5000);

    return () => window.clearTimeout(timer);
  }, [toast, onClose]);

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          role="status"
          aria-live="polite"
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="fixed left-1/2 top-6 z-[100] w-[92%] max-w-sm -translate-x-1/2"
        >
          <div
            className={`flex items-start gap-3 rounded-2xl border bg-white/95 p-4 shadow-2xl backdrop-blur ${
              toast.type === "success"
                ? "border-green-200"
                : "border-red-200"
            }`}
          >
            <div
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                toast.type === "success"
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {toast.type === "success" ? (
                <CheckCircle2 size={20} />
              ) : (
                <AlertCircle size={20} />
              )}
            </div>

            <div className="flex-1">
              <p className="font-semibold text-slate-800">{toast.title}</p>

              <p className="mt-0.5 text-sm leading-5 text-slate-500">
                {toast.message}
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Dismiss notification"
              className="rounded-md p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
            >
              <X size={18} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const closeToast = useCallback(() => {
    setToast(null);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));
  };

  const submitContact = async (event) => {
    event.preventDefault();

    if (loading) return;

    const payload = {
      name: form.name.trim(),
      email: form.email.trim().toLowerCase(),
      phone: form.phone.trim(),
      service: form.service,
      message: form.message.trim(),
    };

    try {
      setLoading(true);
      setToast(null);

      const response = await api.post("/contact", payload);

      setToast({
        type: "success",
        title: "Enquiry sent successfully",
        message:
          response.data?.message ||
          "Thank you for contacting us. Our team will respond as soon as possible.",
      });

      setForm(initialForm);
    } catch (error) {
      console.error("Contact form submission failed:", error);

      setToast({
        type: "error",
        title: "Unable to send enquiry",
        message:
          error.response?.data?.message ||
          error.message ||
          "Your enquiry could not be submitted. Please try again or contact us by phone.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="overflow-hidden bg-[#fffafa]">
      <Toast toast={toast} onClose={closeToast} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#fff8f4] via-white to-[#f8f6ff] px-5 py-20 md:py-28">
        <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-purple-200/40 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-7xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-orange-600 shadow-sm">
            <Sparkles size={17} />
            Connecting Talent with Opportunity
          </span>

          <h1 className="mx-auto mt-6 max-w-5xl text-4xl font-extrabold leading-tight text-[#062c54] md:text-6xl">
            Fairy Business Services Management Consultancy
          </h1>

          <p className="mx-auto mt-5 max-w-4xl text-base leading-8 text-slate-600 md:text-lg">
            Your trusted HR partner for recruitment, staffing, workforce
            management and outsourcing solutions across India.
          </p>

          <div className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Clock3,
                title: "25+ Years",
                description: "Industry expertise",
              },
              {
                icon: UsersRound,
                title: "PAN India",
                description: "Recruitment support",
              },
              {
                icon: BriefcaseBusiness,
                title: "IT & Non-IT",
                description: "Specialized hiring",
              },
              {
                icon: ShieldCheck,
                title: "Dedicated",
                description: "Client support",
              },
            ].map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-orange-100 bg-white/85 p-5 shadow-sm backdrop-blur"
              >
                <Icon className="mx-auto text-orange-500" size={27} />

                <h2 className="mt-3 font-bold text-[#062c54]">{title}</h2>

                <p className="mt-1 text-sm text-slate-500">{description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact cards */}
      <section className="relative z-10 mx-auto -mt-6 max-w-7xl px-5">
        <div className="grid gap-6 md:grid-cols-3">
          {contactCards.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.title}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
                whileHover={{ y: -7 }}
                className="group rounded-2xl border border-orange-200 bg-white px-6 py-7 text-center shadow-sm transition-shadow hover:shadow-xl"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 transition-colors group-hover:bg-orange-500 group-hover:text-white">
                  <Icon size={28} />
                </div>

                <h2 className="mt-4 text-xl font-bold text-[#062c54]">
                  {item.title}
                </h2>

                <p className="mt-1 break-words text-sm leading-6 text-slate-600">
                  {item.value}
                </p>
              </motion.a>
            );
          })}
        </div>
      </section>

      {/* Why choose FBS */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75 }}
          >
            <p className="font-semibold uppercase tracking-[0.2em] text-orange-500">
              Why choose FBS?
            </p>

            <h2 className="mt-3 text-4xl font-extrabold text-[#062c54] md:text-5xl">
              Reliable talent and workforce solutions for modern organizations
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              FBS Management Consultancy is backed by more than 25 years of
              expertise across diverse business segments. We deliver customized
              HR consulting, recruitment, hospitality staffing and outsourcing
              solutions that help organizations build productive,
              high-performing teams.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {whyChooseUs.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-sm"
                >
                  <CheckCircle2
                    size={21}
                    className="shrink-0 text-orange-500"
                  />

                  <span className="font-medium text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75 }}
            className="rounded-[2rem] bg-gradient-to-br from-[#062c54] to-[#124d73] p-8 text-white shadow-2xl"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500">
                  <UserRound size={24} />
                </div>

                <p className="mt-5 text-sm text-slate-300">Founder</p>

                <h3 className="mt-1 text-xl font-bold">Sandeep Sharma</h3>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500">
                  <BriefcaseBusiness size={24} />
                </div>

                <p className="mt-5 text-sm text-slate-300">
                  Chief Executive Officer
                </p>

                <h3 className="mt-1 text-xl font-bold">
                  Hema Raman Sharma
                </h3>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-white/15 bg-white/10 p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-orange-300">
                Our mission
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Connecting Talent with Opportunity.
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                To empower organizations through exceptional HR consulting,
                recruitment and outsourcing solutions that improve workforce
                performance, support business growth and create long-term value.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact form */}
      <section className="bg-[#4f813f] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-semibold uppercase tracking-[0.2em] text-orange-300">
              Contact our team
            </p>

            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              Let&apos;s discuss your workforce requirements
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-white/80">
              Whether you need one specialist, a complete team, hospitality
              professionals or campus hiring support, our team is ready to help.
            </p>

            <div className="mt-9 border-b border-white/40 pb-4">
              <h3 className="text-xl font-semibold">Main Office</h3>
            </div>

            <div className="mt-6 space-y-5">
              <a
                href={PHONE_LINK}
                className="flex items-center gap-3 transition hover:text-orange-300"
              >
                <Phone size={21} className="text-orange-300" />
                {PHONE_NUMBER}
              </a>

              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="flex items-center gap-3 break-all transition hover:text-orange-300"
              >
                <Mail size={21} className="shrink-0 text-orange-300" />
                {EMAIL_ADDRESS}
              </a>

              <a
                href={MAP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 transition hover:text-orange-300"
              >
                <MapPin
                  size={21}
                  className="mt-0.5 shrink-0 text-orange-300"
                />
                {OFFICE_ADDRESS}
              </a>
            </div>

            <div className="mt-10 rounded-2xl bg-white/10 p-6 backdrop-blur">
              <Building2 size={30} className="text-orange-300" />

              <h3 className="mt-4 text-2xl font-bold">{COMPANY_NAME}</h3>

              <p className="mt-3 leading-7 text-white/80">
                HR Consulting | Recruitment | IT Hiring | Non-IT Hiring |
                Hospitality Staffing | Outsourcing
              </p>
            </div>
          </motion.div>

          <motion.form
            onSubmit={submitContact}
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="rounded-[2rem] bg-white p-6 text-slate-800 shadow-2xl sm:p-8"
          >
            <div className="mb-7">
              <p className="font-semibold text-orange-500">
                Send an enquiry
              </p>

              <h3 className="mt-1 text-3xl font-bold text-[#062c54]">
                How can we help you?
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Complete the form and share your hiring, staffing, placement or
                HR consulting requirements.
              </p>
            </div>

            <div className="grid gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  minLength={2}
                  maxLength={80}
                  autoComplete="name"
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3.5 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    pattern="[+]?[0-9\s-]{10,16}"
                    title="Enter a valid phone number"
                    placeholder="+91 98765 43210"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3.5 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    type="email"
                    autoComplete="email"
                    maxLength={120}
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3.5 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-semibold"
                >
                  Required Service
                </label>

                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3.5 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                >
                  <option value="">Select a service</option>

                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold"
                >
                  Requirements
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  minLength={10}
                  maxLength={1500}
                  placeholder="Describe the role, number of employees, location, experience level or HR support you require"
                  rows={6}
                  className="w-full resize-none rounded-xl border border-slate-300 bg-slate-50 px-4 py-3.5 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                />

                <p className="mt-2 text-right text-xs text-slate-400">
                  {form.message.length}/1500
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 font-semibold text-white shadow-lg transition hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-200 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                    Sending enquiry...
                  </>
                ) : (
                  <>
                    Send Enquiry
                    <Send size={19} />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Google Map */}
      <section className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
        >
          <div className="px-5 py-12 text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-orange-500">
              Visit our office
            </p>

            <h2 className="mt-3 text-4xl font-bold text-[#062c54]">
              Find Us on Google Maps
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              {OFFICE_ADDRESS}
            </p>
          </div>

          <iframe
            title="FBS Management Consultancy office location"
            src="https://www.google.com/maps?q=Pratap%20Nagar%20Jaipur%20Rajasthan%20302033&z=14&output=embed"
            width="100%"
            height="420"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full border-0"
            allowFullScreen
          />
        </motion.div>
      </section>

      {/* WhatsApp */}
      <a
        href="https://wa.me/918890628049?text=Hello%20FBS%20Management%20Consultancy,%20I%20would%20like%20to%20know%20more%20about%20your%20HR,%20recruitment%20and%20staffing%20services."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with FBS Management Consultancy on WhatsApp"
        title="Chat on WhatsApp"
        className="fixed bottom-5 left-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition hover:scale-110 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-200"
      >
        <MessageCircle size={26} />
      </a>

      {/* Call */}
      <a
        href={PHONE_LINK}
        aria-label="Call FBS Management Consultancy"
        title={`Call ${PHONE_NUMBER}`}
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#062c54] text-white shadow-2xl transition hover:scale-110 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-blue-200"
      >
        <Phone size={23} />
      </a>
    </main>
  );
};

export default Contact;