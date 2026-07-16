import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Code2,
  GraduationCap,
  Handshake,
  Headphones,
  Hotel,
  IndianRupee,
  Laptop,
  
  MapPinned,
  Network,
  Presentation,
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
    icon: Code2,
    title: "IT Project & Software Development",
    description:
      "Dedicated IT project handling and software developer staffing for web, mobile and full-stack technology needs.",
    points: [
      "IT project resource staffing",
      "Full-stack & backend developers",
      "Agile project coordination",
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
    icon: Presentation,
    title: "Corporate Training",
    description:
      "Customized corporate training programs designed around each client's needs, including soft skills and specialized workplace training.",
    points: [
      "Soft-skills training",
      "NLP, POSH & TTT programs",
      "Customized as per client need",
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
      "IT Project Managers",
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
  {
    icon: Presentation,
    title: "Corporate Training",
    roles: [
      "Soft-Skills Trainer",
      "NLP Trainer",
      "POSH Trainer",
      "TTT (Train the Trainer)",
      "Communication Skills",
      "Leadership Development",
      "Behavioral Training",
      "Customized Client Programs",
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
      "Fairy Business Services helped us identify suitable candidates quickly and handled the coordination professionally.",
    name: "Corporate Client",
  },
  {
    review:
      "Their recruitment team understood our requirements and provided relevant candidate profiles within the expected timeline.",
    name: "Business Client",
  },
  {
    review:
      "The team provided reliable hospitality staffing support and maintained transparent communication throughout the process.",
    name: "Hospitality Staffing Client",
  },
];

const faqs = [
  {
    question: "Which industries does Fairy Business Services serve?",
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
    question: "Do you handle IT projects and provide software developers?",
    answer:
      "Yes. We provide dedicated resource support for IT project handling along with skilled software developers across web, mobile, backend and full-stack technologies.",
  },
  {
    question: "Do you offer corporate training programs?",
    answer:
      "Yes. We offer corporate training including soft-skills training, NLP, POSH and TTT (Train the Trainer) programs, customized according to each client's needs.",
  },
  {
    question: "Do you provide hospitality staffing?",
    answer:
      "Yes. We recruit front office professionals, housekeeping staff, chefs, F&B personnel, guest relations executives, maintenance staff, supervisors and managers.",
  },
];

const workGallery = [
  {
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80&auto=format&fit=crop",
    title: "IT Project & Software Development",
    tag: "Software Developer",
    description:
      "Dedicated developers and project resources for your web, mobile and full-stack builds.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&q=80&auto=format&fit=crop",
    title: "Corporate Training",
    tag: "Soft-Skills · NLP · POSH · TTT",
    description:
      "Live, instructor-led training sessions customized around your team's goals.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1607013407627-6ee814329547?w=900&q=80&auto=format&fit=crop",
    title: "Campus Hiring & Placement",
    tag: "Campus Hiring",
    description:
      "Recruitment drives and placement support connecting institutes with employers.",
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
              Fairy Business Services provides HR consulting, recruitment, IT
              hiring, IT project handling, software developers, corporate
              training, hospitality staffing, campus hiring, placement support
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

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="group relative overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80&auto=format&fit=crop"
                alt="Fairy Business Services recruitment and HR consulting team at work"
                loading="lazy"
                className="h-[480px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 sm:h-[540px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#062c54] via-[#062c54]/35 to-transparent" />

              <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-[#062c54] shadow-lg backdrop-blur">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                </span>
                Actively Hiring Across India
              </div>

              <div className="absolute inset-x-6 bottom-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-300">
                  Fairy Business Services
                </p>
                <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  Comprehensive HR & Staffing Solutions
                </h2>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-8 -left-4 grid grid-cols-2 gap-3 sm:-left-8 sm:gap-4"
            >
              {[
                { icon: Award, value: "25+", label: "Years" },
                { icon: MapPinned, value: "PAN India", label: "Support" },
              ].map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-slate-100 bg-white p-4 shadow-xl transition duration-300 hover:-translate-y-1"
                >
                  <Icon className="text-orange-500" size={22} />
                  <h3 className="mt-2 text-lg font-bold text-[#062c54]">
                    {value}
                  </h3>
                  <p className="text-xs leading-4 text-slate-500">{label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -right-4 -top-6 hidden rounded-2xl bg-orange-500 p-4 text-white shadow-xl sm:-right-6 sm:block"
            >
              <p className="text-xs font-medium text-orange-100">
                Need qualified professionals?
              </p>
              <Link
                to="/contact"
                className="mt-1 inline-flex items-center gap-1.5 text-sm font-bold"
              >
                Share requirement
                <ArrowRight size={15} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <div className="group h-[470px] w-full overflow-hidden rounded-[2rem] shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80&auto=format&fit=crop"
                alt="Professional recruitment and human resource consulting team"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>

            <div className="absolute -bottom-8 right-4 max-w-xs rounded-2xl bg-orange-500 p-6 text-white shadow-xl sm:right-8">
              <Users size={34} />

              <h3 className="mt-4 text-2xl font-bold">
                People are the foundation of every successful business.
              </h3>
            </div>
          </div>

          <div className="pt-10 lg:pt-0">
            <p className="font-semibold uppercase tracking-[0.2em] text-orange-500">
              About Fairy Business Services
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#062c54] md:text-5xl">
              Building high-performing teams for growing organizations
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Fairy Business Services is an HR consulting, recruitment,
              corporate training and outsourcing company committed to helping
              businesses build capable, productive and reliable teams.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Through a client-centric approach and deep industry expertise, we
              deliver customized manpower and training solutions that reduce
              hiring time, improve workforce performance and create long-term
              business value.
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
              Learn more about Fairy Business Services
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
              From workforce strategy and recruitment to IT project staffing,
              corporate training, payroll, hospitality staffing and outsourced
              manpower management.
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

      {/* Work in Action Gallery */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-orange-500">
            Our Work in Action
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-[#062c54] md:text-5xl">
            Real teams, real training, real placements
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            A closer look at how we support IT projects, corporate training
            and campus placements for our clients.
          </p>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {workGallery.map(({ image, title, tag, description }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-3xl shadow-lg"
            >
              <div className="h-72 w-full overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#062c54] via-[#062c54]/40 to-transparent transition-opacity duration-300 group-hover:from-[#062c54]/95" />

              <span className="absolute left-5 top-5 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-orange-600 shadow-sm">
                {tag}
              </span>

              <div className="absolute inset-x-5 bottom-5 text-white">
                <h3 className="text-lg font-bold">{title}</h3>

                <p className="mt-2 max-h-0 overflow-hidden text-sm leading-6 text-slate-200 opacity-0 transition-all duration-300 group-hover:mt-2 group-hover:max-h-24 group-hover:opacity-100">
                  {description}
                </p>

                <Link
                  to="/contact"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-300 transition group-hover:text-orange-200"
                >
                  Enquire Now
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </article>
          ))}
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
            hospitality roles, and deliver customized corporate training at
            different experience levels.
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
              Campus Hiring & Placement Support
            </p>

            <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">
              Connecting educational institutions with reputed employers
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              Fairy Business Services partners with colleges, universities and
              technical institutes across India to organize campus recruitment
              and placement drives.
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

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-xl">
            <div className="group h-64 w-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1607013407627-6ee814329547?w=1000&q=80&auto=format&fit=crop"
                alt="Graduating students celebrating campus placement"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#062c54] to-transparent" />
            </div>

            <div className="bg-white/10 p-8 backdrop-blur">
              <GraduationCap size={44} className="text-orange-300" />

              <h3 className="mt-5 text-2xl font-bold sm:text-3xl">
                Campus Recruitment Support
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
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
              Why Choose Fairy Business Services
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
              recruitment, corporate training and outsourcing solutions that
              drive business growth and create long-term value.
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
            {testimonials.map(({ review, name }) => (
              <article
                key={name}
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
            Share your recruitment, staffing, training, outsourcing or campus
            hiring requirements with our team.
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