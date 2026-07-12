import { Link } from "react-router-dom";
import { ShieldCheck, Mail, Phone } from "lucide-react";

const sections = [
  {
    title: "1. Information We Collect",
    body: "When you use our website, apply for a job, or submit an enquiry, we may collect your name, email address, phone number, resume/CV, and any details you provide in contact or application forms.",
  },
  {
    title: "2. How We Use Your Information",
    body: "We use the information you provide to respond to enquiries, process job applications, match candidates with employers, provide recruitment and HR consulting services, and communicate updates relevant to your enquiry or application.",
  },
  {
    title: "3. Sharing of Information",
    body: "For recruitment services, your resume and application details may be shared with prospective employer clients as part of the hiring process. We do not sell your personal information to third parties for marketing purposes.",
  },
  {
    title: "4. Data Storage & Security",
    body: "We take reasonable technical and organizational measures to protect the personal data you share with us from unauthorized access, alteration, or disclosure.",
  },
  {
    title: "5. Cookies",
    body: "Our website may use cookies to improve browsing experience and understand site usage. You can disable cookies through your browser settings at any time.",
  },
  {
    title: "6. Your Rights",
    body: "You may request access to, correction of, or deletion of your personal data held by us at any time by contacting us using the details below.",
  },
  {
    title: "7. Changes to This Policy",
    body: "We may update this Privacy Policy periodically. Continued use of our website after changes are posted constitutes acceptance of the revised policy.",
  },
];

const PrivacyPolicy = () => {
  return (
    <main className="bg-[#fffafa]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#062c54] to-[#124d73] px-5 py-20 text-white">
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-orange-300">
            <ShieldCheck size={17} />
            Legal
          </span>
          <h1 className="mt-6 text-4xl font-extrabold md:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-slate-300">
            Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-4xl px-5 py-16">
        <p className="leading-8 text-slate-600">
          FBS Management Consultancy ("we", "our", "us") is committed to protecting
          the privacy of visitors to our website, job applicants, and clients. This
          Privacy Policy explains how we collect, use, and safeguard your
          information.
        </p>

        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <div key={section.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-[#062c54]">{section.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{section.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-[#062c54] p-7 text-white">
          <h3 className="text-xl font-bold">Questions about this policy?</h3>
          <p className="mt-2 text-slate-300">
            Contact us and we'll be happy to help.
          </p>
          <div className="mt-5 flex flex-wrap gap-4">
            <a href="mailto:info@fairybusinessservice.com" className="flex items-center gap-2 text-orange-300 hover:text-orange-200">
              <Mail size={18} /> info@fairybusinessservice.com
            </a>
            <a href="tel:+918890628049" className="flex items-center gap-2 text-orange-300 hover:text-orange-200">
              <Phone size={18} /> +91 88906 28049
            </a>
          </div>
        </div>

        <p className="mt-10 text-center">
          <Link to="/contact" className="text-orange-500 font-semibold hover:text-orange-600">
            Back to Contact page →
          </Link>
        </p>
      </section>
    </main>
  );
};

export default PrivacyPolicy;