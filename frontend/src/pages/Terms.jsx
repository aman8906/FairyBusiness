import { Link } from "react-router-dom";
import { FileText, Mail, Phone } from "lucide-react";

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: "By accessing or using the FBS Management Consultancy website, you agree to be bound by these Terms & Conditions. If you do not agree, please discontinue use of the site.",
  },
  {
    title: "2. Our Services",
    body: "FBS Management Consultancy provides HR consulting, recruitment (IT and Non-IT), executive search, bulk and campus hiring, hospitality staffing, and workforce outsourcing services. Service availability may vary by location and client requirement.",
  },
  {
    title: "3. Job Applications & Candidate Information",
    body: "By submitting a resume or application through this website, you confirm the information provided is accurate. We may share your application details with prospective employer clients as part of the recruitment process.",
  },
  {
    title: "4. Client Engagements",
    body: "Recruitment and consulting engagements with employer clients are governed by separately agreed service terms, timelines, and fees, which take precedence over general website terms for that engagement.",
  },
  {
    title: "5. No Guarantee of Placement",
    body: "While we make reasonable efforts to match candidates with suitable roles, submission of an application or resume does not guarantee an interview, offer, or placement.",
  },
  {
    title: "6. Intellectual Property",
    body: "All content on this website, including text, logos, and graphics, is the property of FBS Management Consultancy and may not be reproduced without permission.",
  },
  {
    title: "7. Limitation of Liability",
    body: "FBS Management Consultancy is not liable for any indirect or consequential loss arising from use of this website or reliance on information provided through it.",
  },
  {
    title: "8. Changes to These Terms",
    body: "We may revise these Terms & Conditions at any time. Continued use of the website after changes are posted constitutes acceptance of the updated terms.",
  },
];

const Terms = () => {
  return (
    <main className="bg-[#fffafa]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#062c54] to-[#124d73] px-5 py-20 text-white">
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-orange-300">
            <FileText size={17} />
            Legal
          </span>
          <h1 className="mt-6 text-4xl font-extrabold md:text-5xl">Terms & Conditions</h1>
          <p className="mt-4 text-slate-300">
            Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-4xl px-5 py-16">
        <p className="leading-8 text-slate-600">
          These Terms & Conditions govern your use of the FBS Management
          Consultancy website and services. Please read them carefully before
          using our site or engaging our services.
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
          <h3 className="text-xl font-bold">Questions about these terms?</h3>
          <p className="mt-2 text-slate-300">
            Reach out and our team will clarify anything you need.
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

export default Terms;