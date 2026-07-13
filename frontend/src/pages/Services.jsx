import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Code2,
  FileCheck2,
  FolderKanban,
  GraduationCap,
  Handshake,
  Headphones,
  Hotel,
  Landmark,
  Laptop,
  Network,
  Presentation,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  UserCheck,
  UserPlus,
  Users,
  UsersRound,
  WalletCards,
} from "lucide-react";

const services = [
  {
    name: "HR Consulting",
    icon: BriefcaseBusiness,
    description:
      "Customized HR strategies, policies and processes designed to improve workforce productivity and organizational performance.",
    features: [
      "HR Policies & Process Development",
      "Organizational Structure",
      "Performance Management Systems",
      "Employee Engagement Solutions",
    ],
  },
  {
    name: "Permanent Staffing",
    icon: UserCheck,
    description:
      "End-to-end permanent recruitment services to help organizations hire suitable candidates for long-term roles.",
    features: [
      "Candidate Sourcing",
      "Profile Screening",
      "Interview Coordination",
      "Joining Assistance",
    ],
  },
  {
    name: "Executive Search",
    icon: Search,
    description:
      "Specialized recruitment support for leadership, management and business-critical positions.",
    features: [
      "Leadership Hiring",
      "Senior Management Search",
      "Confidential Recruitment",
      "Industry-Specific Sourcing",
    ],
  },
  {
    name: "Bulk Hiring",
    icon: UsersRound,
    description:
      "Scalable recruitment solutions for organizations requiring multiple candidates within a limited timeline.",
    features: [
      "High-Volume Recruitment",
      "Mass Screening",
      "Interview Management",
      "Quick Deployment",
    ],
  },
  {
    name: "IT Recruitment",
    icon: Laptop,
    description:
      "Specialized technical hiring for software, data, cloud, cybersecurity, DevOps and project management roles.",
    features: [
      "Software & Web Developers",
      "Cloud & DevOps Engineers",
      "QA & Test Engineers",
      "Data & Cybersecurity Professionals",
    ],
  },
  {
    name: "IT Project Handling",
    icon: FolderKanban,
    description:
      "Dedicated resource support for planning, staffing and executing IT projects from kickoff through delivery.",
    features: [
      "Project Resource Staffing",
      "Agile & Scrum Support",
      "Technical Team Augmentation",
      "End-to-End Project Coordination",
    ],
  },
  {
    name: "Software Developer",
    icon: Code2,
    description:
      "Skilled software developers across web, mobile, backend and full-stack technologies for in-house or project-based needs.",
    features: [
      "Web & Mobile Developers",
      "Full-Stack Engineers",
      "Backend & API Developers",
      "Technology-Specific Hiring",
    ],
  },
  {
    name: "Non-IT Recruitment",
    icon: Building2,
    description:
      "Qualified manpower sourcing across sales, finance, administration, healthcare, retail, manufacturing and logistics.",
    features: [
      "Sales & Marketing",
      "Accounts & Finance",
      "HR & Administration",
      "Retail, Healthcare & Logistics",
    ],
  },
  {
    name: "Corporate Training",
    icon: Presentation,
    description:
      "Customized corporate training programs designed around each client's needs — from soft skills to specialized workplace training.",
    features: [
      "Soft-Skills Training",
      "NLP (Neuro-Linguistic Programming)",
      "POSH Training",
      "TTT (Train the Trainer)",
    ],
  },
  {
    name: "Hospitality Staffing",
    icon: Hotel,
    description:
      "Skilled hospitality professionals for hotels, resorts, restaurants, cafés, clubs, hospitals and guest houses.",
    features: [
      "Front Office & Guest Relations",
      "Housekeeping & F&B Staff",
      "Chefs, Stewards & Waiters",
      "Supervisors & Managers",
    ],
  },
  {
    name: "Contract Staffing",
    icon: Handshake,
    description:
      "Flexible temporary and contract staffing solutions that help businesses manage changing workforce demands.",
    features: [
      "Temporary Staffing",
      "Contract Workforce",
      "Short-Term Deployment",
      "Flexible Staffing Models",
    ],
  },
  {
    name: "Payroll Management",
    icon: WalletCards,
    description:
      "Reliable payroll administration support designed to simplify salary processing and workforce management.",
    features: [
      "Salary Processing",
      "Payroll Records",
      "Employee Documentation",
      "Payroll Coordination",
    ],
  },
  {
    name: "Third-Party Payroll",
    icon: FileCheck2,
    description:
      "Comprehensive third-party payroll support for outsourced employees, contract teams and distributed workforces.",
    features: [
      "Employee Payroll Handling",
      "Documentation Support",
      "Attendance Coordination",
      "Compliance Assistance",
    ],
  },
  {
    name: "Campus Hiring",
    icon: GraduationCap,
    description:
      "Campus recruitment drives connecting colleges, universities and institutes with reputed employers.",
    features: [
      "Campus Recruitment Drives",
      "Graduate Hiring",
      "Student Screening",
      "Pre-Placement Talks",
    ],
  },
  {
    name: "Placement Support",
    icon: UserPlus,
    description:
      "End-to-end placement assistance helping candidates and institutes connect with the right opportunities.",
    features: [
      "Placement Coordination",
      "Candidate Guidance",
      "Employer Tie-Ups",
      "Interview Preparation Support",
    ],
  },
  {
    name: "Workforce Management",
    icon: Network,
    description:
      "End-to-end manpower planning, scheduling, monitoring and operational support for growing organizations.",
    features: [
      "Workforce Planning",
      "Shift Scheduling",
      "Attendance Monitoring",
      "Performance Tracking",
    ],
  },
];

const additionalSolutions = [
  {
    icon: ShieldCheck,
    title: "Compliance Support",
    description:
      "Support for workforce documentation, statutory processes and employment-related compliance coordination.",
  },
  {
    icon: Landmark,
    title: "Facility Management Staffing",
    description:
      "Reliable manpower for facility operations, maintenance, security and support functions.",
  },
  {
    icon: Target,
    title: "Lateral Hiring",
    description:
      "Experienced professional recruitment for mid-level and senior positions across multiple industries.",
  },
  {
    icon: Headphones,
    title: "Dedicated Client Support",
    description:
      "Consistent communication and recruitment coordination throughout the complete hiring lifecycle.",
  },
];

const serviceProcess = [
  {
    step: "01",
    title: "Requirement Analysis",
    description:
      "We understand the role, skills, experience, location, budget and expected hiring timeline.",
  },
  {
    step: "02",
    title: "Talent Sourcing",
    description:
      "Our recruiters identify suitable candidates through databases, networks and targeted sourcing.",
  },
  {
    step: "03",
    title: "Candidate Screening",
    description:
      "Profiles are evaluated based on skills, experience, communication and suitability for the role.",
  },
  {
    step: "04",
    title: "Interview & Deployment",
    description:
      "We coordinate interviews, selection, documentation, onboarding and workforce deployment.",
  },
];

const workGallery = [
  {
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&q=80&auto=format&fit=crop",
    title: "IT Project & Software Development",
    tag: "Software Developer",
    description:
      "Cross-functional teams and dedicated developers staffed for your IT project timelines.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=900&q=80&auto=format&fit=crop",
    title: "Corporate Training",
    tag: "Soft-Skills · NLP · POSH · TTT",
    description:
      "Hands-on workshops built around your team's actual day-to-day challenges.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1656910962409-3963e280c7d2?w=900&q=80&auto=format&fit=crop",
    title: "Campus Hiring & Placement",
    tag: "Campus Hiring",
    description:
      "From campus drives to final placement — coordinated support for institutes and employers.",
  },
];

const Services = () => {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <motion.img
          src="https://images.unsplash.com/photo-1571645163064-77faa9676a46?w=1600&q=80&auto=format&fit=crop"
          alt="Fairy Business Services recruitment and HR consulting team"
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 12, ease: "easeOut" }}
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-[#062c54]/95 via-slate-950/90 to-orange-950/75" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 text-center md:py-28">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-orange-200 backdrop-blur">
            <Sparkles size={18} />
            Complete Talent, Training & Workforce Solutions
          </p>

          <h1 className="mx-auto mt-6 max-w-5xl text-4xl font-extrabold leading-tight md:text-6xl">
            HR, Recruitment, Staffing, Training and Outsourcing Services
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
            Fairy Business Services provides customized workforce solutions
            across IT, non-IT, hospitality, corporate training, campus
            recruitment and outsourced staffing requirements throughout India.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-orange-600"
            >
              Share Hiring Requirement
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/career"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur transition hover:bg-white hover:text-[#062c54]"
            >
              Explore Jobs
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-orange-500">
              What We Offer
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#062c54] md:text-5xl">
              Customized workforce solutions for every business requirement
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              We help organizations build productive and high-performing teams
              through HR consulting, recruitment, IT project support, corporate
              training, contract staffing, payroll management, hospitality
              staffing and workforce outsourcing.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Our recruitment professionals focus on understanding each client&apos;s
              business requirements and delivering suitable talent through a
              transparent, structured and efficient hiring process.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "25+ years of industry expertise",
                "PAN India recruitment support",
                "IT and non-IT hiring",
                "Corporate & soft-skills training",
                "Flexible staffing models",
                "Quality candidate screening",
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

          <div className="relative">
            <div className="group h-[480px] w-full overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?w=1200&q=80&auto=format&fit=crop"
                alt="Professional HR consulting and recruitment meeting"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>

            <div className="absolute -bottom-7 left-5 right-5 rounded-2xl bg-[#062c54] p-6 text-white shadow-xl sm:left-10 sm:right-auto sm:max-w-sm">
              <Users size={34} className="text-orange-300" />

              <h3 className="mt-4 text-2xl font-bold">
                Connecting the right people with the right opportunities
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-orange-500">
              Our Core Services
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#062c54] md:text-5xl">
              End-to-end HR, training and staffing support
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Explore our specialized recruitment, IT project & developer
              staffing, corporate training, manpower management, outsourcing
              and consulting solutions.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(
              ({ name, icon: Icon, description, features }) => (
                <article
                  key={name}
                  className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 transition duration-300 group-hover:bg-orange-500 group-hover:text-white">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-[#062c54]">
                    {name}
                  </h3>

                  <p className="mt-3 flex-1 leading-7 text-slate-600">
                    {description}
                  </p>

                  <ul className="mt-5 space-y-3">
                    {features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm leading-6 text-slate-600"
                      >
                        <CheckCircle2
                          size={17}
                          className="mt-1 shrink-0 text-orange-500"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={`/contact?service=${encodeURIComponent(name)}`}
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-orange-600 transition-all hover:gap-3 hover:text-orange-700"
                  >
                    Enquire Now
                    <ArrowRight size={17} />
                  </Link>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Our Work in Action */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-orange-500">
            Our Work in Action
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-[#062c54] md:text-5xl">
            See how these services play out for clients
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            A closer look at IT project staffing, corporate training sessions
            and campus placement drives.
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

      {/* Additional Solutions */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-12 text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-orange-500">
            Additional Support
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-[#062c54] md:text-5xl">
            Supporting every stage of workforce management
          </h2>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {additionalSolutions.map(
            ({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#062c54] p-3 text-white">
                  <Icon size={25} />
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#062c54]">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {description}
                </p>
              </article>
            ),
          )}
        </div>
      </section>

      {/* Service Process */}
      <section className="bg-[#062c54] py-20 text-white">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-[0.2em] text-orange-300">
              Our Recruitment Process
            </p>

            <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">
              A structured approach to successful hiring
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              Our process is designed to reduce hiring time while improving
              candidate relevance and workforce quality.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            {serviceProcess.map(({ step, title, description }) => (
              <article
                key={step}
                className="relative rounded-3xl border border-white/10 bg-white/10 p-7 backdrop-blur"
              >
                <span className="text-4xl font-extrabold text-orange-300">
                  {step}
                </span>

                <h3 className="mt-5 text-xl font-bold">{title}</h3>

                <p className="mt-3 leading-7 text-slate-300">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Hospitality Highlight */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-orange-50 to-slate-50">
          <div className="grid items-center lg:grid-cols-2">
            <div className="group h-full min-h-[420px] w-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80&auto=format&fit=crop"
                alt="Hospitality staffing services for hotels and resorts"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>

            <div className="p-8 md:p-12">
              <p className="font-semibold uppercase tracking-[0.2em] text-orange-500">
                Hospitality Staffing
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-[#062c54] md:text-5xl">
                Skilled professionals for seamless hospitality operations
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                We provide staffing and operational manpower support for hotels,
                resorts, restaurants, cafés, clubs, hospitals and corporate
                guest houses.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Front Office Executives",
                  "Guest Relations Staff",
                  "Housekeeping Professionals",
                  "Food & Beverage Staff",
                  "Chefs & Kitchen Helpers",
                  "Stewards & Waiters",
                  "Security & Maintenance",
                  "Supervisors & Managers",
                ].map((role) => (
                  <div
                    key={role}
                    className="flex items-center gap-2 rounded-xl bg-white p-3 text-sm font-medium text-slate-700 shadow-sm"
                  >
                    <CheckCircle2
                      size={17}
                      className="shrink-0 text-orange-500"
                    />
                    {role}
                  </div>
                ))}
              </div>

              <Link
                to="/contact?service=Hospitality%20Staffing"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 font-semibold text-white transition hover:bg-orange-600"
              >
                Request Hospitality Staff
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-orange-100">
            Let&apos;s Work Together
          </p>

          <h2 className="mx-auto mt-3 max-w-4xl text-3xl font-extrabold md:text-5xl">
            Need the right people for your organization?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-orange-50">
            Share your hiring, staffing, training, outsourcing or campus
            recruitment requirements with our team.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-semibold text-orange-600 shadow-lg transition hover:-translate-y-1 hover:bg-slate-100"
            >
              Get Free Consultation
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/career"
              className="inline-flex items-center gap-2 rounded-full border border-white px-8 py-3.5 font-semibold text-white transition hover:bg-white hover:text-orange-600"
            >
              View Career Opportunities
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;