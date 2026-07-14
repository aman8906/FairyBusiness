import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  BriefcaseBusiness,
  ChevronDown,
  Code2,
  FolderKanban,
  GraduationCap,
  Hotel,
  Laptop,
  Menu,
  MessageCircle,
  Phone,
  Presentation,
  UserCheck,
  UserPlus,
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
    name: "IT Recruitment",
    path: "/services?service=IT%20Recruitment",
    match: "IT Recruitment",
    icon: Laptop,
  },
  {
    name: "IT Project Handling",
    path: "/services?service=IT%20Project%20Handling",
    match: "IT Project Handling",
    icon: FolderKanban,
  },
  {
    name: "Software Development",
    path: "/services?service=Software%20Development",
    match: "Software Development",
    icon: Code2,
  },
  {
    name: "Corporate Training",
    path: "/services?service=Corporate%20Training",
    match: "Corporate Training",
    icon: Presentation,
  },
  {
    name: "Hospitality Staffing",
    path: "/services?service=Hospitality%20Staffing",
    match: "Hospitality Staffing",
    icon: Hotel,
  },
  {
    name: "Campus Hiring",
    path: "/services?service=Campus%20Hiring",
    match: "Campus Hiring",
    icon: GraduationCap,
  },
  {
    name: "Placement Support",
    path: "/services?service=Placement%20Support",
    match: "Placement Support",
    icon: UserPlus,
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
    `group relative rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
      isActive(path)
        ? "bg-[#062c54] text-white shadow-md"
        : "text-slate-700 hover:bg-orange-50 hover:text-orange-600"
    }`;

  const underlineClass = () => "hidden";

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`sticky top-0 z-50 border-b border-white/70 bg-white/90 backdrop-blur-2xl transition-all duration-300 ${
        scrolled
          ? "shadow-[0_14px_40px_rgba(15,23,42,0.12)]"
          : "shadow-[0_6px_24px_rgba(15,23,42,0.06)]"
      }`}
    >
      <div className="h-1 w-full bg-gradient-to-r from-orange-500 via-amber-400 to-[#062c54]" />

      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="group flex min-w-0 shrink-0 items-center gap-3"
          aria-label="Fairy Business Services home"
        >
          <motion.div
            whileHover={{ scale: 1.035, y: -1 }}
            transition={{ duration: 0.22 }}
            className="relative flex items-center rounded-2xl bg-gradient-to-br from-white via-orange-50 to-white px-3 py-2 shadow-[0_8px_24px_rgba(249,115,22,0.14)] ring-1 ring-orange-100"
          >
            <span className="pointer-events-none absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-orange-400/30 to-blue-900/20 opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />
            <img
              src={logo}
              alt="Fairy Business Services"
              className="relative h-14 w-auto max-w-[180px] object-contain sm:h-16 lg:h-[72px] lg:max-w-[220px]"
            />
          </motion.div>

          <div className="hidden 2xl:block">
            <p className="text-base font-extrabold leading-tight tracking-tight text-[#062c54]">
              Fairy Business
            </p>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
              Services
            </p>
          </div>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-1 rounded-full border border-slate-200/80 bg-white/80 p-1.5 shadow-sm lg:flex">
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
              className={`flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                isServicesActive
                  ? "bg-[#062c54] text-white shadow-md"
                  : "text-slate-700 hover:bg-orange-50 hover:text-orange-600"
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
                  className="absolute left-1/2 top-full mt-4 w-[760px] -translate-x-1/2 overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/95 p-4 shadow-[0_24px_70px_rgba(15,23,42,0.18)] backdrop-blur-2xl"
                >
                  <div className="grid grid-cols-[1.4fr_1fr] gap-3">
                    <div className="grid grid-cols-2 gap-2">
                      {serviceLinks.map(
                        ({ name, path, icon: Icon, ...link }, index) => {
                          const active = isServiceLinkActive({ path, ...link });
                          return (
                            <motion.div
                              key={path}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                duration: 0.2,
                                delay: index * 0.03,
                              }}
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
                                <span className="text-sm font-semibold">
                                  {name}
                                </span>
                              </Link>
                            </motion.div>
                          );
                        },
                      )}
                    </div>

                    {/* Photo + CTA panel */}
                    <div className="group relative overflow-hidden rounded-xl">
                      <img
                        src={teamPhoto}
                        alt="Fairy Business Services team"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#062c54] via-[#062c54]/70 to-transparent" />

                      <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-[#062c54] shadow">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                        </span>
                        Actively Hiring
                      </div>

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
            className="hidden items-center gap-2 whitespace-nowrap rounded-full px-3 py-2 text-sm font-bold text-[#062c54] transition-all hover:bg-orange-50 hover:text-orange-600 xl:flex"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-600">
              <Phone size={16} />
            </span>
            +91 88906 28049
          </a>

          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-[#062c54] via-[#0b4c8c] to-[#1d72b8] px-6 py-3 text-sm font-bold text-white shadow-[0_14px_32px_rgba(6,44,84,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(6,44,84,0.36)]"
            >
              <BriefcaseBusiness size={17} />
              Get Free Consultation
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-100 bg-orange-50 text-[#062c54] shadow-sm transition-all hover:border-orange-300 hover:bg-orange-100 hover:text-orange-600 lg:hidden"
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
              className="fixed right-0 top-0 z-50 h-dvh w-[92%] max-w-md overflow-hidden bg-white shadow-[0_0_60px_rgba(15,23,42,0.25)] lg:hidden"
              aria-hidden={!open}
            >
              <div className="flex items-center justify-between border-b border-slate-200 bg-gradient-to-r from-orange-50 via-white to-blue-50 px-5 py-4">
                <Link
                  to="/"
                  onClick={() => setOpen(false)}
                  className="flex min-w-0 items-center gap-3"
                >
                  <img
                    src={logo}
                    alt="Fairy Business Services"
                    className="h-16 w-auto max-w-[190px] object-contain"
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-[#062c54]">
                      Fairy Business
                    </p>
                    <p className="text-xs font-medium text-orange-500">
                      Services
                    </p>
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

              <div className="h-[calc(100dvh-97px)] overflow-y-auto px-5 py-5">
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
                    onClick={() =>
                      setMobileServicesOpen((previous) => !previous)
                    }
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
                          {serviceLinks.map(
                            ({ name, path, icon: Icon, ...link }) => {
                              const active = isServiceLinkActive({
                                path,
                                ...link,
                              });
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
                            },
                          )}
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

                  {/* Call */}
                  <motion.a
                    variants={mobileItemVariants}
                    href="tel:+918890628049"
                    className="mt-4 flex items-center gap-4 rounded-2xl border border-orange-100 bg-gradient-to-r from-orange-50 to-white p-4 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white">
                      <Phone size={20} />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500">
                        Call Now
                      </p>

                      <p className="font-bold text-[#062c54]">
                        +91 88906 28049
                      </p>
                    </div>
                  </motion.a>

                  {/* WhatsApp */}
                  <motion.a
                    variants={mobileItemVariants}
                    href="https://wa.me/918890628049?text=Hello%20Fairy%20Business%20Services,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 flex items-center justify-center gap-3 rounded-2xl bg-green-500 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-600"
                  >
                    <MessageCircle size={20} />
                    Chat on WhatsApp
                  </motion.a>

                  {/* Consultation */}
                  <motion.div variants={mobileItemVariants}>
                    <Link
                      to="/contact"
                      onClick={() => setOpen(false)}
                      className="mt-3 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#062c54] to-[#0b4c8c] py-3 font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <BriefcaseBusiness size={18} />
                      Get Free Consultation
                    </Link>
                  </motion.div>

                  {/* Career */}
                  <motion.div variants={mobileItemVariants}>
                    <Link
                      to="/career"
                      onClick={() => setOpen(false)}
                      className="mt-3 flex items-center justify-center gap-2 rounded-2xl border-2 border-[#062c54] py-3 font-bold text-[#062c54] transition-all duration-300 hover:bg-[#062c54] hover:text-white"
                    >
                      <UserPlus size={18} />
                      Apply for Jobs
                    </Link>
                  </motion.div>

                  {/* Photo card */}
                  <motion.div
                    variants={mobileItemVariants}
                    className="group relative mt-6 overflow-hidden rounded-2xl"
                  >
                    <img
                      src={teamPhoto}
                      alt="Fairy Business Services team"
                      className="h-32 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#062c54] via-[#062c54]/80 to-[#062c54]/20" />
                    <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-[#062c54] shadow">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                      </span>
                      Actively Hiring
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                      <p className="text-sm font-semibold text-orange-300">
                        Fairy Business Services
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-200">
                        Recruitment, IT Project Handling, Software Development,
                        Corporate Training, Hospitality Staffing, Campus Hiring
                        and Placement Support—all under one trusted brand.
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