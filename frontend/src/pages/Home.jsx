import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronDown,
  Clock3,
  GraduationCap,
  Handshake,
  Headphones,
  Hotel,
  IndianRupee,
  Laptop,
  MapPinned,
  Network,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  UserCheck,
  Users,
  UsersRound,
} from "lucide-react";

const services = [
  {
    icon: BriefcaseBusiness,
    title: "HR Consulting",
    description:
      "HR policies, organizational structure, performance management, employee engagement and workforce strategy.",
    points: [
      "HR policy development",
      "Performance management",
      "Employee engagement",
    ],
  },
  {
    icon: Search,
    title: "Recruitment Services",
    description:
      "End-to-end recruitment support for permanent staffing, executive search, bulk hiring and lateral recruitment.",
    points: [
      "Permanent staffing",
      "Executive search",
      "Bulk and lateral hiring",
    ],
  },
  {
    icon: Laptop,
    title: "IT Recruitment",
    description:
      "Specialized hiring for software development, cloud, DevOps, data, cybersecurity, testing and project management roles.",
    points: [
      "Software and web developers",
      "Cloud and DevOps engineers",
      "QA, data and cybersecurity",
    ],
  },
  {
    icon: UsersRound,
    title: "Non-IT Recruitment",
    description:
      "Qualified talent sourcing for sales, finance, HR, manufacturing, healthcare, retail and supply chain roles.",
    points: [
      "Sales and marketing",
      "Accounts and finance",
      "HR and administration",
    ],
  },
  {
    icon: Hotel,
    title: "Hospitality Staffing",
    description:
      "Skilled staffing and operational support for hotels, resorts, restaurants, cafés, clubs and guest houses.",
    points: [
      "Front office and guest relations",
      "Housekeeping and F&B staff",
      "Chefs, managers and supervisors",
    ],
  },
  {
    icon: Handshake,
    title: "Outsourcing Solutions",
    description:
      "Flexible workforce management through contract staffing, payroll, facility staffing and compliance support.",
    points: [
      "Contract staffing",
      "Third-party payroll",
      "Workforce management",
    ],
  },
];

const recruitmentCategories = [
  {
    icon: Laptop,
    title: "IT Hiring",
    roles: [
      "Web Developers",
      "Software Developers",
      "Data Analysts",
      "Cloud Engineers",
      "DevOps Engineers",
      "QA/Test Engineers",
      "Cybersecurity Professionals",
      "Project Managers",
    ],
  },
  {
    icon: Building2,
    title: "Non-IT Hiring",
    roles: [
      "Sales & Marketing",
      "Accounts & Finance",
      "HR & Administration",
      "Manufacturing & Engineering",
      "Healthcare",
      "Retail & FMCG",
      "Logistics & Supply Chain",
      "Virtual Assistants",
    ],
  },
  {
    icon: Hotel,
    title: "Hospitality Staffing",
    roles: [
      "Front Office Executives",
      "Guest Relations Executives",
      "Housekeeping Staff",
      "Food & Beverage Staff",
      "Chefs & Kitchen Helpers",
      "Stewards & Waiters",
      "Maintenance Staff",
      "Supervisors & Managers",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    icon: Target,
    title: "Requirement Analysis",
    description:
      "We understand your business, workforce needs, role specifications, hiring timeline and budget.",
  },
  {
    number: "02",
    icon: Search,
    title: "Candidate Sourcing",
    description:
      "Our recruitment team identifies suitable candidates through databases, networks and targeted sourcing.",
  },
  {
    number: "03",
    icon: UserCheck,
    title: "Screening & Shortlisting",
    description:
      "Candidates are assessed for skills, experience, communication, availability and role suitability.",
  },
  {
    number: "04",
    icon: Handshake,
    title: "Interview & Deployment",
    description:
      "We coordinate interviews, documentation, selection, onboarding and workforce deployment.",
  },
];

const whyChooseUs = [
  {
    icon: Award,
    title: "25+ Years of Expertise",
    description:
      "Deep experience across HR consulting, recruitment, staffing and diverse business segments.",
  },
  {
    icon: Clock3,
    title: "Fast Turnaround",
    description:
      "Structured sourcing and screening processes help reduce hiring time.",
  },
  {
    icon: UserCheck,
    title: "Quality Screening",
    description:
      "Candidates are carefully evaluated before being recommended to employers.",
  },
  {
    icon: MapPinned,
    title: "PAN India Support",
    description:
      "Recruitment, campus hiring and staffing services across multiple locations in India.",
  },
  {
    icon: IndianRupee,
    title: "Cost-Effective Solutions",
    description:
      "Flexible workforce models designed around your operational requirements and budget.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Consistent communication and dedicated assistance throughout the hiring lifecycle.",
  },
];

const testimonials = [
  {
    review:
      "FBS Management Consultancy helped us identify suitable candidates quickly and handled the coordination professionally.",
    name: "Corporate Client",
    role: "HR Manager",
  },
  {
    review:
      "Their recruitment team understood our requirements and provided relevant candidate profiles within the expected timeline.",
    name: "Business Client",
    role: "Operations Head",
  },
  {
    review:
      "The team provided reliable staffing support and maintained transparent communication throughout the process.",
    name: "Hospitality Client",
    role: "General Manager",
  },
];

const faqs = [
  {
    question: "Which industries does FBS Management Consultancy serve?",
    answer:
      "We provide recruitment and workforce solutions across IT, hospitality, healthcare, retail, FMCG, manufacturing, engineering, logistics, finance, administration, sales and marketing.",
  },
  {
    question: "Do you provide both permanent and contract staffing?",
    answer:
      "Yes. We support permanent staffing, temporary staffing, contract staffing, third-party payroll and customized workforce outsourcing models.",
  },
  {
    question: "Can you support bulk hiring and PAN India recruitment?",
    answer:
      "Yes. We provide bulk hiring, lateral recruitment, campus recruitment and workforce deployment support across India.",
  },
  {
    question: "Do you provide campus hiring and placement support?",
    answer:
      "Yes. We collaborate with colleges, universities and technical institutes to organize campus recruitment and placement drives.",
  },
  {
    question: "Do you provide hospitality staffing?",
    answer:
      "Yes. We recruit front office professionals, housekeeping staff, chefs, F&B personnel, guest relations executives, maintenance staff, supervisors and managers.",
  },
];

const Home = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#fff8f4] via-white to-[#f5f8ff]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,146,60,0.20),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(6,44,84,0.16),transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-orange-600 shadow-sm">
              <Sparkles size={18} />
              Connecting Talent with Opportunity
            </p>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-[#062c54] md:text-6xl">
              Your Trusted HR Partner for{" "}
              <span className="text-orange-500">
                Talent & Workforce Solutions
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              FBS Management Consultancy provides HR consulting, recruitment,
              IT hiring, non-IT hiring, hospitality staffing, campus placement
              and outsourcing solutions across India.
            </p>

            <p className="mt-4 leading-7 text-slate-500">
              Backed by more than 25 years of expertise across diverse business
              segments, we help organizations hire the right talent, improve
              workforce productivity and focus on their core operations.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-orange-600"
              >
                Hire Talent
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/career"
                className="inline-flex items-center gap-2 rounded-full border border-[#062c54] px-7 py-3.5 font-semibold text-[#062c54] transition duration-300 hover:bg-[#062c54] hover:text-white"
              >
                Apply for Jobs
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-700">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="text-orange-500" size={19} />
                PAN India Recruitment
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2 className="text-orange-500" size={19} />
                Quality Candidate Screening
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2 className="text-orange-500" size={19} />
                Dedicated Client Support
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] bg-[#062c54] p-6 shadow-2xl sm:p-8">
              <div className="mb-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-300">
                  FBS Management Consultancy
                </p>

                <h2 className="mt-3 text-3xl font-bold text-white">
                  Comprehensive HR & Staffing Solutions
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: Award,
                    value: "25+",
                    label: "Years of Expertise",
                  },
                  {
                    icon: MapPinned,
                    value: "PAN India",
                    label: "Recruitment Support",
                  },
                  {
                    icon: UsersRound,
                    value: "IT & Non-IT",
                    label: "Hiring Expertise",
                  },
                  {
                    icon: ShieldCheck,
                    value: "Flexible",
                    label: "Staffing Models",
                  },
                ].map(({ icon: Icon, value, label }) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/10 p-5 text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/15"
                  >
                    <Icon className="text-orange-300" size={27} />

                    <h3 className="mt-4 text-xl font-bold">{value}</h3>

                    <p className="mt-1 text-sm leading-5 text-slate-300">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl bg-orange-500 p-5 text-white">
                <p className="text-sm font-medium text-orange-100">
                  Need qualified professionals?
                </p>

                <Link
                  to="/contact"
                  className="mt-2 inline-flex items-center gap-2 font-bold"
                >
                  Share your hiring requirement
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80&auto=format&fit=crop"
              alt="Professional recruitment and human resource consulting team"
              loading="lazy"
              className="h-[470px] w-full rounded-[2rem] object-cover shadow-xl"
            />

            <div className="absolute -bottom-8 right-4 max-w-xs rounded-2xl bg-orange-500 p-6 text-white shadow-xl sm:right-8">
              <Users size={34} />

              <h3 className="mt-4 text-2xl font-bold">
                People are the foundation of every successful business.
              </h3>
            </div>
          </div>

          <div className="pt-10 lg:pt-0">
            <p className="font-semibold uppercase tracking-[0.2em] text-orange-500">
              About FBS
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#062c54] md:text-5xl">
              Building high-performing teams for growing organizations
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              FBS Management Consultancy is an HR consulting, recruitment and
              outsourcing company committed to helping businesses build
              capable, productive and reliable teams.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Through a client-centric approach and deep industry expertise, we
              deliver customized manpower solutions that reduce hiring time,
              improve workforce performance and create long-term business value.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Customized manpower solutions",
                "Permanent and contract staffing",
                "Industry-specific recruitment",
                "Payroll and compliance support",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <CheckCircle2
                    size={21}
                    className="shrink-0 text-orange-500"
                  />
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-orange-600 transition hover:text-orange-700"
            >
              Learn more about FBS
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-orange-500">
              Our Services
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#062c54] md:text-5xl">
              End-to-end HR and workforce solutions
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              From workforce strategy and recruitment to payroll, hospitality
              staffing and outsourced manpower management.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(
              ({ icon: Icon, title, description, points }) => (
                <article
                  key={title}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 transition duration-300 group-hover:bg-orange-500 group-hover:text-white">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-[#062c54]">
                    {title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {description}
                  </p>

                  <ul className="mt-5 space-y-3">
                    {points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2 text-sm text-slate-600"
                      >
                        <CheckCircle2
                          size={17}
                          className="shrink-0 text-orange-500"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              ),
            )}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full bg-[#062c54] px-7 py-3.5 font-semibold text-white transition hover:bg-orange-500"
            >
              Explore All Services
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Recruitment Categories */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-12 text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-orange-500">
            Hiring Expertise
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-[#062c54] md:text-5xl">
            Talent solutions across key industries
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-7 text-slate-600">
            We source and screen professionals for technical, non-technical and
            hospitality roles at different experience levels.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {recruitmentCategories.map(({ icon: Icon, title, roles }) => (
            <article
              key={title}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="bg-gradient-to-r from-[#062c54] to-[#124d73] p-7 text-white">
                <Icon size={34} className="text-orange-300" />

                <h3 className="mt-4 text-2xl font-bold">{title}</h3>
              </div>

              <div className="grid gap-3 p-7 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {roles.map((role) => (
                  <div
                    key={role}
                    className="flex items-center gap-2 rounded-xl bg-slate-50 p-3 text-sm font-medium text-slate-700"
                  >
                    <CheckCircle2
                      size={17}
                      className="shrink-0 text-orange-500"
                    />
                    {role}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Campus Hiring */}
      <section className="bg-[#062c54] py-20 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">
          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-orange-300">
              Campus Hiring & Placement
            </p>

            <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">
              Connecting educational institutions with reputed employers
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              FBS Management Consultancy partners with colleges, universities
              and technical institutes across India to organize campus
              recruitment and placement drives.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              We help organizations access capable entry-level talent while
              supporting students in discovering meaningful career
              opportunities.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Campus recruitment drives",
                "College partnerships",
                "Graduate hiring",
                "Student screening",
                "Interview coordination",
                "Placement support",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 p-4"
                >
                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-orange-300"
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 font-semibold text-white transition hover:bg-orange-600"
            >
              Partner With Us
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="relative rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur">
            <GraduationCap size={52} className="text-orange-300" />

            <h3 className="mt-5 text-3xl font-bold">
              Campus Recruitment Support
            </h3>

            <p className="mt-4 leading-8 text-slate-300">
              Structured coordination between institutions, students and
              employers for efficient placement drives.
            </p>

            <div className="mt-7 space-y-4">
              {[
                {
                  icon: Network,
                  title: "Institution Collaboration",
                  text: "Partnerships with colleges and technical institutes.",
                },
                {
                  icon: Users,
                  title: "Talent Identification",
                  text: "Screening and shortlisting capable graduates.",
                },
                {
                  icon: Handshake,
                  title: "Employer Connection",
                  text: "Connecting students with suitable organizations.",
                },
              ].map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="flex gap-4 rounded-2xl bg-white/10 p-5"
                >
                  <Icon className="shrink-0 text-orange-300" size={26} />

                  <div>
                    <h4 className="font-bold">{title}</h4>
                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-12 text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-orange-500">
            Our Process
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-[#062c54] md:text-5xl">
            A structured approach to successful hiring
          </h2>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map(
            ({ number, icon: Icon, title, description }) => (
              <article
                key={number}
                className="relative rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <span className="absolute right-6 top-5 text-5xl font-extrabold text-slate-100">
                  {number}
                </span>

                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                  <Icon size={27} />
                </div>

                <h3 className="relative mt-5 text-xl font-bold text-[#062c54]">
                  {title}
                </h3>

                <p className="relative mt-3 leading-7 text-slate-600">
                  {description}
                </p>
              </article>
            ),
          )}
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-orange-500">
              Why Choose FBS
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#062c54] md:text-5xl">
              Reliable recruitment backed by experience
            </h2>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 transition group-hover:bg-orange-500 group-hover:text-white">
                  <Icon size={27} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#062c54]">
                  {title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-[2rem] bg-[#062c54] p-8 text-white shadow-xl md:p-10">
            <Target size={40} className="text-orange-300" />

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
              Our Mission
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Empowering businesses through exceptional workforce solutions
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              To empower organizations by providing exceptional HR consulting,
              recruitment and outsourcing solutions that drive business growth
              and create long-term value.
            </p>
          </article>

          <article className="rounded-[2rem] bg-orange-500 p-8 text-white shadow-xl md:p-10">
            <TrendingUp size={40} />

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-orange-100">
              Our Vision
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Becoming India&apos;s most trusted HR partner
            </h2>

            <p className="mt-5 leading-8 text-orange-50">
              To become India&apos;s most trusted HR consulting and recruitment
              partner by delivering quality, integrity and excellence in every
              engagement.
            </p>
          </article>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#062c54] py-20 text-white">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-orange-300">
              Client Experience
            </p>

            <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">
              Trusted workforce support
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map(({ review, name, role }) => (
              <article
                key={`${name}-${role}`}
                className="rounded-3xl border border-white/10 bg-white/10 p-7 backdrop-blur"
              >
                <div className="flex gap-1 text-orange-300">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={18} fill="currentColor" />
                  ))}
                </div>

                <p className="mt-5 leading-8 text-slate-300">
                  &ldquo;{review}&rdquo;
                </p>

                <div className="mt-6 border-t border-white/10 pt-5">
                  <h3 className="font-bold">{name}</h3>
                  <p className="mt-1 text-sm text-slate-400">{role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="mb-12 text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-orange-500">
              Frequently Asked Questions
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#062c54] md:text-5xl">
              How can we support your hiring needs?
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <article
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-5 p-6 text-left"
                  >
                    <span className="text-lg font-bold text-[#062c54]">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={21}
                      className={`shrink-0 text-orange-500 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden px-6">
                      <p className="pb-6 leading-7 text-slate-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-orange-100">
            Build Your Workforce
          </p>

          <h2 className="mx-auto mt-3 max-w-4xl text-3xl font-extrabold md:text-5xl">
            Let us connect your organization with the right people
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-orange-50">
            Share your recruitment, staffing, outsourcing or campus hiring
            requirements with our team.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-semibold text-orange-600 shadow-lg transition hover:-translate-y-1 hover:bg-slate-100"
            >
              Request Manpower
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/career"
              className="inline-flex items-center gap-2 rounded-full border border-white px-8 py-3.5 font-semibold text-white transition hover:bg-white hover:text-orange-600"
            >
              Explore Jobs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;