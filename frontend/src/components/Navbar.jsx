import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  BriefcaseBusiness,
  ChevronDown,
  GraduationCap,
  Handshake,
  Hotel,
  Laptop,
  Menu,
  Phone,
  UserCheck,
  UsersRound,
  X,
} from "lucide-react";

import logo from "../assets/logo.png";
// Add a real team / office / hospitality-staff photo here (place the file in src/assets)
import teamPhoto from "../assets/team-photo.jpg";

const serviceLinks = [
  {
    name: "All Services",
    path: "/services",
    icon: BriefcaseBusiness,
  },
  {
    name: "HR Consulting",
    path: "/services?service=HR%20Consulting",
    match: "HR Consulting",
    icon: UserCheck,
  },
  {
    name: "Recruitment Services",
    path: "/services?service=Recruitment%20Services",
    match: "Recruitment Services",
    icon: UsersRound,
  },
  {
    name: "IT Recruitment",
    path: "/services?service=IT%20Recruitment",
    match: "IT Recruitment",
    icon: Laptop,
  },
  {
    name: "Non-IT Recruitment",
    path: "/services?service=Non-IT%20Recruitment",
    match: "Non-IT Recruitment",
    icon: Handshake,
  },
  {
    name: "Hospitality Staffing",
    path: "/services?service=Hospitality%20Staffing",
    match: "Hospitality Staffing",
    icon: Hotel,
  },
  {
    name: "Outsourcing Solutions",
    path: "/services?service=Outsourcing%20Solutions",
    match: "Outsourcing Solutions",
    icon: BriefcaseBusiness,
  },
  {
    name: "Campus Hiring",
    path: "/services?service=Campus%20Hiring%20%26%20Placement",
    match: "Campus Hiring & Placement",
    icon: GraduationCap,
  },
];

const navigationLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Career", path: "/career" },
  { name: "Contact", path: "/contact" },
];

// Framer Motion variants
const dropdownVariants = {
  hidden: { opacity: 0, y: -10, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.98,
    transition: { duration: 0.15, ease: "easeIn" },
  },
};

const drawerVariants = {
  hidden: { x: "100%" },
  visible: { x: 0, transition: { duration: 0.32, ease: [0.16, 1, 0.3, 1] } },
  exit: { x: "100%", transition: { duration: 0.25, ease: "easeIn" } },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const mobileListVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.045, delayChildren: 0.08 } },
};

const mobileItemVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] },
  },
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const servicesRef = useRef(null);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname === path;
  };

  const currentService = new URLSearchParams(location.search).get("service");
  const isServicesActive = location.pathname.startsWith("/services");

  const isServiceLinkActive = (link) => {
    if (link.path === "/services") {
      return location.pathname === "/services" && !currentService;
    }
    return location.pathname === "/services" && currentService === link.match;
  };

  const navLinkClass = (path) =>
    `group relative py-2 font-medium transition-colors duration-300 ${
      isActive(path) ? "text-orange-600" : "text-slate-700 hover:text-orange-600"
    }`;

  const underlineClass = (path) =>
    `absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-orange-500 transition-all duration-300 ${
      isActive(path) ? "w-full" : "w-0 group-hover:w-full"
    }`;

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-5 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex min-w-0 shrink-0 items-center gap-3"
          aria-label="FBS Management Consultancy home"
        >
          <motion.img
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.2 }}
            src={logo}
            alt="FBS Management Consultancy"
            className="h-11 w-auto max-w-[130px] object-contain sm:h-12 lg:h-14"
          />

          <div className="hidden xl:block">
            <p className="text-sm font-bold leading-tight text-[#062c54]">
              FBS Management
            </p>
            <p className="text-xs font-medium text-orange-500">Consultancy</p>
          </div>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          <Link to="/" className={navLinkClass("/")}>
            Home
            <span className={underlineClass("/")} />
          </Link>

          <Link to="/about" className={navLinkClass("/about")}>
            About
            <span className={underlineClass("/about")} />
          </Link>

          {/* Services Dropdown */}
          <div className="relative" ref={servicesRef}>
            <button
              type="button"
              onClick={() => setServicesOpen((previous) => !previous)}
              className={`flex items-center gap-1.5 py-2 font-medium transition-colors duration-300 ${
                isServicesActive ? "text-orange-600" : "text-slate-700 hover:text-orange-600"
              }`}
              aria-expanded={servicesOpen}
              aria-haspopup="menu"
            >
              Services
              <motion.span
                animate={{ rotate: servicesOpen ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                className="flex"
              >
                <ChevronDown size={17} />
              </motion.span>
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  role="menu"
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute left-1/2 top-full mt-3 w-[680px] -translate-x-1/2 overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl"
                >
                  <div className="grid grid-cols-[1.4fr_1fr] gap-3">
                    <div className="grid grid-cols-2 gap-2">
                      {serviceLinks.map(({ name, path, icon: Icon, ...link }, index) => {
                        const active = isServiceLinkActive({ path, ...link });
                        return (
                          <motion.div
                            key={path}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, delay: index * 0.03 }}
                          >
                            <Link
                              to={path}
                              role="menuitem"
                              onClick={() => setServicesOpen(false)}
                              className={`group flex items-center gap-3 rounded-xl px-4 py-3 transition-colors ${
                                active
                                  ? "bg-orange-50 text-orange-600"
                                  : "text-slate-700 hover:bg-orange-50 hover:text-orange-600"
                              }`}
                            >
                              <div
                                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                                  active
                                    ? "bg-orange-500 text-white"
                                    : "bg-slate-100 text-[#062c54] group-hover:bg-orange-500 group-hover:text-white"
                                }`}
                              >
                                <Icon size={20} />
                              </div>
                              <span className="text-sm font-semibold">{name}</span>
                            </Link>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Photo + CTA panel */}
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src={teamPhoto}
                        alt="FBS Management Consultancy team"
                        className="h-full w-full object-cover"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#062c54] via-[#062c54]/70 to-transparent" />

                      <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                        <p className="text-sm font-semibold">
                          Need customized manpower support?
                        </p>
                        <Link
                          to="/contact"
                          onClick={() => setServicesOpen(false)}
                          className="mt-2 inline-flex items-center text-sm font-semibold text-orange-300 hover:text-orange-200"
                        >
                          Share your hiring requirement →
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/career" className={navLinkClass("/career")}>
            Career
            <span className={underlineClass("/career")} />
          </Link>

          <Link to="/contact" className={navLinkClass("/contact")}>
            Contact
            <span className={underlineClass("/contact")} />
          </Link>

          <a
            href="tel:+918890628049"
            className="flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-[#062c54] transition-colors hover:text-orange-600"
          >
            <Phone size={17} />
            +91 88906 28049
          </a>

          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/contact"
              className="inline-flex whitespace-nowrap rounded-full bg-orange-500 px-5 py-2.5 font-semibold text-white shadow-md transition-colors duration-300 hover:bg-orange-600 hover:shadow-lg"
            >
              Hire Talent
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-[#062c54] transition-colors hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600 lg:hidden"
          onClick={() => setOpen((previous) => !previous)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="flex"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Backdrop + Drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            <motion.aside
              id="mobile-navigation"
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed right-0 top-0 z-50 h-dvh w-[88%] max-w-sm bg-white shadow-2xl lg:hidden"
              aria-hidden={!open}
            >
              <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                <Link to="/" onClick={() => setOpen(false)} className="flex min-w-0 items-center gap-3">
                  <img
                    src={logo}
                    alt="FBS Management Consultancy"
                    className="h-11 w-auto max-w-[120px] object-contain"
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-[#062c54]">FBS Management</p>
                    <p className="text-xs font-medium text-orange-500">Consultancy</p>
                  </div>
                </Link>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close navigation menu"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:bg-orange-50 hover:text-orange-600"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="h-[calc(100dvh-77px)] overflow-y-auto px-5 py-5">
                <motion.div
                  variants={mobileListVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col gap-1"
                >
                  {navigationLinks.slice(0, 2).map((link) => (
                    <motion.div key={link.path} variants={mobileItemVariants}>
                      <Link
                        to={link.path}
                        onClick={() => setOpen(false)}
                        className={`block rounded-xl px-3 py-3 font-medium transition ${
                          isActive(link.path)
                            ? "bg-orange-50 text-orange-600"
                            : "text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}

                  {/* Mobile Services */}
                  <motion.button
                    variants={mobileItemVariants}
                    type="button"
                    onClick={() => setMobileServicesOpen((previous) => !previous)}
                    className={`flex items-center justify-between rounded-xl px-3 py-3 text-left font-medium transition ${
                      isServicesActive
                        ? "bg-orange-50 text-orange-600"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                    aria-expanded={mobileServicesOpen}
                  >
                    Services
                    <motion.span
                      animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex"
                    >
                      <ChevronDown size={18} />
                    </motion.span>
                  </motion.button>

                  <AnimatePresence initial={false}>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="mb-2 ml-3 mt-1 flex flex-col gap-1 border-l-2 border-orange-100 pl-3">
                          {serviceLinks.map(({ name, path, icon: Icon, ...link }) => {
                            const active = isServiceLinkActive({ path, ...link });
                            return (
                              <Link
                                key={path}
                                to={path}
                                onClick={() => setOpen(false)}
                                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition ${
                                  active
                                    ? "bg-orange-50 font-semibold text-orange-600"
                                    : "text-slate-600 hover:bg-slate-50 hover:text-orange-600"
                                }`}
                              >
                                <Icon size={17} />
                                {name}
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {navigationLinks.slice(2).map((link) => (
                    <motion.div key={link.path} variants={mobileItemVariants}>
                      <Link
                        to={link.path}
                        onClick={() => setOpen(false)}
                        className={`block rounded-xl px-3 py-3 font-medium transition ${
                          isActive(link.path)
                            ? "bg-orange-50 text-orange-600"
                            : "text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}

                  <motion.a
                    variants={mobileItemVariants}
                    href="tel:+918890628049"
                    className="mt-3 flex items-center gap-3 rounded-xl bg-slate-100 px-4 py-3 font-semibold text-[#062c54] transition hover:bg-orange-50 hover:text-orange-600"
                  >
                    <Phone size={19} />
                    +91 88906 28049
                  </motion.a>

                  <motion.div variants={mobileItemVariants}>
                    <Link
                      to="/contact"
                      onClick={() => setOpen(false)}
                      className="mt-3 block rounded-full bg-orange-500 px-5 py-3 text-center font-semibold text-white shadow-md transition hover:bg-orange-600"
                    >
                      Hire Talent
                    </Link>
                  </motion.div>

                  <motion.div variants={mobileItemVariants}>
                    <Link
                      to="/career"
                      onClick={() => setOpen(false)}
                      className="mt-2 block rounded-full border border-[#062c54] px-5 py-3 text-center font-semibold text-[#062c54] transition hover:bg-[#062c54] hover:text-white"
                    >
                      Apply for Jobs
                    </Link>
                  </motion.div>

                  {/* Photo card */}
                  <motion.div
                    variants={mobileItemVariants}
                    className="relative mt-6 overflow-hidden rounded-2xl"
                  >
                    <img
                      src={teamPhoto}
                      alt="FBS Management Consultancy team"
                      className="h-32 w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#062c54] via-[#062c54]/80 to-[#062c54]/20" />
                    <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                      <p className="text-sm font-semibold text-orange-300">
                        FBS Management Consultancy
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-200">
                        HR Consulting, Recruitment, IT Hiring, Non-IT Hiring, Hospitality Staffing and Outsourcing.
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;