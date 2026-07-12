import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  Eye,
  Globe2,
  Handshake,
  HeartHandshake,
  Lightbulb,
  MapPinned,
  ShieldCheck,
  Target,
  TrendingUp,
  UserCheck,
  UserRound,
  Users,
  UsersRound,
} from "lucide-react";

const stats = [
  {
    number: "25+",
    label: "Years of Expertise",
    icon: Award,
  },
  {
    number: "PAN India",
    label: "Recruitment Support",
    icon: MapPinned,
  },
  {
    number: "IT & Non-IT",
    label: "Hiring Expertise",
    icon: BriefcaseBusiness,
  },
  {
    number: "Flexible",
    label: "Staffing Solutions",
    icon: UsersRound,
  },
];

const companyHighlights = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower organizations by providing exceptional HR consulting, recruitment and outsourcing solutions that drive business growth and create long-term value.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become India’s most trusted HR consulting and recruitment partner by delivering quality, integrity and excellence in every engagement.",
  },
  {
    icon: Award,
    title: "Our Commitment",
    description:
      "To connect organizations with suitable talent through transparent communication, quality screening and reliable workforce support.",
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We maintain transparent communication, ethical recruitment practices and honest commitments in every engagement.",
  },
  {
    icon: UserCheck,
    title: "Quality",
    description:
      "We carefully evaluate candidates to ensure their experience, skills and expectations align with the employer’s requirements.",
  },
  {
    icon: Lightbulb,
    title: "Customized Solutions",
    description:
      "Every organization has different workforce needs, so we create flexible HR and staffing solutions around specific business goals.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description:
      "We work as a long-term HR partner rather than simply providing candidate profiles.",
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    description:
      "Our workforce solutions are designed to reduce hiring time, improve productivity and support sustainable growth.",
  },
  {
    icon: HeartHandshake,
    title: "Client Focus",
    description:
      "We place employer requirements, candidate experience and service quality at the centre of our recruitment process.",
  },
];

const expertise = [
  "HR policies and process development",
  "Organizational structure and HR strategy",
  "Permanent and contract staffing",
  "Executive search and lateral hiring",
  "Bulk hiring and campus recruitment",
  "IT and non-IT recruitment",
  "Hospitality staffing and operations support",
  "Payroll and workforce management",
];

const industries = [
  "Information Technology",
  "Hospitality",
  "Healthcare",
  "Retail & FMCG",
  "Manufacturing",
  "Engineering",
  "Sales & Marketing",
  "Accounts & Finance",
  "Logistics & Supply Chain",
  "HR & Administration",
];

const leadership = [
  {
    name: "Sandeep Sharma",
    role: "Founder",
    icon: UserRound,
    description:
      "Provides strategic direction and business leadership to FBS Management Consultancy.",
  },
  {
    name: "Hema Raman Sharma",
    role: "Chief Executive Officer",
    icon: BriefcaseBusiness,
    description:
      "Leads organizational operations, client partnerships and workforce solution delivery.",
  },
];

const About = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80&auto=format&fit=crop"
          alt="FBS Management Consultancy recruitment and HR consulting team"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-[#062c54]/95 via-slate-950/90 to-orange-950/75" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-28 lg:px-8">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-orange-200 backdrop-blur-md">
            <Users size={18} />
            Who We Are
          </p>

          <h1 className="max-w-5xl text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            About FBS Management Consultancy
          </h1>

          <p className="mt-6 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg">
            Fairy Business Services Management Consultancy is an HR consulting,
            recruitment and workforce outsourcing company backed by more than
            25 years of expertise across diverse business segments.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-300">
            We help organizations build productive and high-performing teams
            through customized manpower solutions across IT, non-IT,
            hospitality and other industries. Our client-focused approach helps
            businesses reduce hiring time, improve workforce productivity and
            focus on their core operations.
          </p>

          <div className="mt-12 grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map(({ number, label, icon: Icon }) => (
              <div
                key={label}
                className="rounded-3xl border border-white/10 bg-white/10 p-5 text-center shadow-lg backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/15"
              >
                <div className="mb-3 flex justify-center text-orange-300">
                  <Icon size={28} strokeWidth={1.8} />
                </div>

                <h2 className="text-xl font-bold sm:text-2xl">{number}</h2>

                <p className="mt-2 text-sm leading-5 text-slate-300">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-orange-600"
            >
              Discuss Your Hiring Needs
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur transition hover:bg-white hover:text-[#062c54]"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80&auto=format&fit=crop"
              alt="Professional HR consulting meeting"
              loading="lazy"
              className="h-[500px] w-full rounded-[2rem] object-cover shadow-2xl"
            />

            <div className="absolute -bottom-8 left-5 right-5 rounded-2xl bg-orange-500 p-6 text-white shadow-xl sm:left-auto sm:right-8 sm:max-w-sm">
              <Globe2 size={34} />

              <h2 className="mt-4 text-2xl font-bold">
                Connecting Talent with Opportunity
              </h2>

              <p className="mt-2 leading-6 text-orange-50">
                Delivering reliable recruitment and workforce support across
                India.
              </p>
            </div>
          </div>

          <div className="pt-10 lg:pt-0">
            <p className="font-semibold uppercase tracking-[0.2em] text-orange-500">
              About Our Company
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#062c54] sm:text-4xl md:text-5xl">
              Helping businesses build stronger and more capable teams
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              FBS Management Consultancy delivers end-to-end HR solutions for
              employers seeking qualified professionals, flexible staffing
              models and reliable workforce management support.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              From requirement analysis and candidate sourcing to screening,
              interview coordination, onboarding, payroll and compliance
              support, our team manages each stage of the recruitment process
              with professionalism and transparency.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Experienced recruitment professionals",
                "Fast turnaround time",
                "Quality candidate screening",
                "Industry-specific hiring expertise",
                "Customized HR solutions",
                "Dedicated client support",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-orange-500"
                  />

                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision and Commitment */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-orange-500">
              Our Purpose
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#062c54] sm:text-4xl md:text-5xl">
              Mission, vision and commitment
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-7 text-slate-600">
              Our purpose is to create meaningful value for employers,
              candidates and educational institutions through dependable HR
              and recruitment solutions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {companyHighlights.map(
              ({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 transition duration-300 group-hover:bg-orange-500 group-hover:text-white">
                    <Icon size={28} />
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-[#062c54]">
                    {title}
                  </h3>

                  <p className="leading-7 text-slate-600">{description}</p>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-[#062c54] p-8 text-white shadow-xl md:p-10">
            <p className="font-semibold uppercase tracking-[0.2em] text-orange-300">
              Our Expertise
            </p>

            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
              Complete HR, recruitment and outsourcing support
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              We provide flexible solutions for organizations requiring
              permanent employees, contract workers, outsourced teams,
              hospitality professionals or entry-level talent.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {expertise.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/10 p-4"
                >
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-orange-300"
                  />

                  <span className="text-sm leading-6 text-slate-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl md:p-10">
            <p className="font-semibold uppercase tracking-[0.2em] text-orange-500">
              Industries We Serve
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#062c54] md:text-4xl">
              Recruitment expertise across diverse sectors
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Our industry-focused approach helps us understand role-specific
              skills, business environments and workforce expectations.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {industries.map((industry) => (
                <div
                  key={industry}
                  className="flex items-center gap-3 rounded-xl bg-slate-50 p-4"
                >
                  <BriefcaseBusiness
                    size={19}
                    className="shrink-0 text-orange-500"
                  />

                  <span className="font-medium text-slate-700">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-orange-500">
              What Drives Us
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#062c54] sm:text-4xl md:text-5xl">
              Our Core Values
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-7 text-slate-600">
              These principles guide how we work with clients, candidates,
              educational institutions and workforce partners.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 transition duration-300 group-hover:bg-orange-500 group-hover:text-white">
                  <Icon size={28} />
                </div>

                <h3 className="mb-3 text-xl font-bold text-[#062c54]">
                  {title}
                </h3>

                <p className="leading-7 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-orange-500">
            Our Leadership
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-[#062c54] sm:text-4xl md:text-5xl">
            Guided by experience and commitment
          </h2>
        </div>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {leadership.map(
            ({ name, role, icon: Icon, description }) => (
              <article
                key={name}
                className="group rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#062c54] text-orange-300 transition group-hover:bg-orange-500 group-hover:text-white">
                  <Icon size={36} />
                </div>

                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-orange-500">
                  {role}
                </p>

                <h3 className="mt-2 text-2xl font-bold text-[#062c54]">
                  {name}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {description}
                </p>
              </article>
            ),
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-6 lg:px-8">
          <p className="font-semibold uppercase tracking-[0.2em] text-orange-100">
            Your Trusted HR Partner
          </p>

          <h2 className="mx-auto mt-3 max-w-4xl text-3xl font-extrabold sm:text-4xl md:text-5xl">
            Let&apos;s build a stronger workforce together
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-orange-50 sm:text-lg">
            Share your recruitment, staffing, payroll, outsourcing or campus
            hiring requirements with FBS Management Consultancy.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-semibold text-orange-600 shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-slate-100"
            >
              Get Free Consultation
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/career"
              className="inline-flex items-center gap-2 rounded-full border border-white px-8 py-3.5 font-semibold text-white transition hover:bg-white hover:text-orange-600"
            >
              Explore Career Opportunities
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;