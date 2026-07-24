import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Clock3,
  FileText,
  GraduationCap,
  Hotel,
  Laptop,
  LoaderCircle,
  Mail,
  MapPin,
  Phone,
  RefreshCw,
  Search,
  Send,
  Sparkles,
  UploadCloud,
  UserRound,
  UsersRound,
  X,
} from "lucide-react";

import api from "../api/axios";

const MAX_RESUME_SIZE_MB = 5;
const EMAIL_ADDRESS = "fairybusinessservices@outlook.com";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  position: "",
  message: "",
};

const jobCategories = [
  {
    icon: Laptop,
    title: "IT Opportunities",
    description:
      "Web development, software development, IT project roles, data, cloud, DevOps, testing, cybersecurity and project management roles.",
  },
  {
    icon: Building2,
    title: "Non-IT Opportunities",
    description:
      "Sales, marketing, finance, HR, administration, healthcare, retail, manufacturing and logistics roles.",
  },
  {
    icon: Hotel,
    title: "Hospitality Opportunities",
    description:
      "Front office, guest relations, housekeeping, food and beverage, kitchen, maintenance and management roles.",
  },
  {
    icon: GraduationCap,
    title: "Campus Placement",
    description:
      "Entry-level opportunities and placement support for students, fresh graduates and technical institute candidates.",
  },
];

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
          className="fixed left-1/2 top-6 z-[100] w-[92%] max-w-md -translate-x-1/2"
        >
          <div
            className={`flex items-start gap-3 rounded-2xl border bg-white/95 p-4 shadow-2xl backdrop-blur ${
              toast.type === "success"
                ? "border-green-200"
                : "border-red-200"
            }`}
          >
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                toast.type === "success"
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {toast.type === "success" ? (
                <CheckCircle2 size={21} />
              ) : (
                <AlertCircle size={21} />
              )}
            </div>

            <div className="flex-1">
              <p className="font-semibold text-slate-800">{toast.title}</p>

              <p className="mt-1 text-sm leading-5 text-slate-500">
                {toast.message}
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Dismiss notification"
              className="rounded-md p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            >
              <X size={18} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Career = () => {
  const [jobs, setJobs] = useState([]);
  const [jobsLoading, setJobsLoading] = useState(true);
  const [jobsError, setJobsError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [form, setForm] = useState(initialForm);
  const [resume, setResume] = useState(null);
  const [resumeError, setResumeError] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const fileInputRef = useRef(null);

  const closeToast = useCallback(() => {
    setToast(null);
  }, []);

  const fetchJobs = useCallback(async () => {
    try {
      setJobsLoading(true);
      setJobsError(false);

      const response = await api.get("/jobs");

      const jobsData = Array.isArray(response.data)
        ? response.data
        : response.data?.data;

      setJobs(Array.isArray(jobsData) ? jobsData : []);
    } catch (error) {
      console.error("Unable to fetch jobs:", error);
      setJobsError(true);
    } finally {
      setJobsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));
  };

  const handleResumeChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      setResume(null);
      setResumeError("");
      return;
    }

    const validMimeTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    const validExtensions = [".pdf", ".doc", ".docx"];
    const extension = file.name
      .slice(file.name.lastIndexOf("."))
      .toLowerCase();

    const validFile =
      validMimeTypes.includes(file.type) ||
      validExtensions.includes(extension);

    if (!validFile) {
      setResumeError("Please upload your resume in PDF, DOC or DOCX format.");
      setResume(null);
      event.target.value = "";
      return;
    }

    if (file.size > MAX_RESUME_SIZE_MB * 1024 * 1024) {
      setResumeError(
        `Resume file size must be less than ${MAX_RESUME_SIZE_MB} MB.`,
      );
      setResume(null);
      event.target.value = "";
      return;
    }

    setResumeError("");
    setResume(file);
  };

  const removeResume = () => {
    setResume(null);
    setResumeError("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const scrollToForm = (position = "") => {
    setForm((previousForm) => ({
      ...previousForm,
      position,
    }));

    window.setTimeout(() => {
      document.getElementById("apply-form")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const handleApply = async (event) => {
    event.preventDefault();

    if (loading) return;

    if (!resume) {
      setResumeError("Please attach your resume before submitting.");
      return;
    }

    const payload = new FormData();

    payload.append("name", form.name.trim());
    payload.append("email", form.email.trim().toLowerCase());
    payload.append("phone", form.phone.trim());
    payload.append("position", form.position.trim());
    payload.append("message", form.message.trim());
    payload.append("resume", resume);

    try {
      setLoading(true);
      setToast(null);

      const response = await api.post("/applications", payload);

      setToast({
        type: "success",
        title: "Application submitted",
        message:
          response.data?.message ||
          "Thank you for applying. Our recruitment team will review your profile and contact you if your experience matches an available opportunity.",
      });

      setForm(initialForm);
      setResume(null);
      setResumeError("");

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error("Application submission failed:", error);

      // A timed-out request usually means the server took too long to
      // respond (slow connection, large resume upload, or the backend
      // being unreachable) rather than a problem with the form itself.
      const isTimeout =
        error.code === "ECONNABORTED" ||
        /timeout/i.test(error.message || "");

      setToast({
        type: "error",
        title: isTimeout
          ? "Request timed out"
          : "Application not submitted",
        message: isTimeout
          ? "This is taking longer than expected. Please check your internet connection and try again — if the problem continues, contact us directly so we don't miss your application."
          : error.response?.data?.message ||
            "We could not submit your application. Please check your details and try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const filteredJobs = jobs.filter((job) => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) return true;

    return [
      job.title,
      job.location,
      job.experience,
      job.type,
      job.department,
    ]
      .filter(Boolean)
      .some((value) => value.toLowerCase().includes(query));
  });

  return (
    <main className="overflow-hidden bg-slate-50 text-slate-900">
      <Toast toast={toast} onClose={closeToast} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#062c54] text-white">
        <motion.img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&q=80&auto=format&fit=crop"
          alt="Professionals exploring career and recruitment opportunities"
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 12, ease: "easeOut" }}
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-[#062c54]/95 via-slate-950/90 to-orange-950/70" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 text-center md:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-orange-200 backdrop-blur">
            <Sparkles size={18} />
            Connecting Talent with Opportunity
          </span>

          <h1 className="mx-auto mt-6 max-w-5xl text-4xl font-extrabold leading-tight md:text-6xl">
            Find the right opportunity for your career
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
            Explore IT, IT project, software development, non-IT, hospitality,
            corporate training and entry-level career opportunities through
            Fairy Business Services&apos; recruitment network across India.
          </p>

          <div className="mt-6 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-[#062c54] shadow-lg">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              Currently Accepting Applications
            </span>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => scrollToForm("General Application")}
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-orange-600"
            >
              Submit Your Resume
              <ArrowRight size={18} />
            </button>

            <a
              href="#openings"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur transition hover:bg-white hover:text-[#062c54]"
            >
              View Current Openings
            </a>
          </div>
        </div>
      </section>

      {/* Career categories */}
      <section className="relative z-10 mx-auto -mt-8 max-w-7xl px-5">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {jobCategories.map(
            ({ icon: Icon, title, description }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                  <Icon size={28} />
                </div>

                <h2 className="mt-5 text-xl font-bold text-[#062c54]">
                  {title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {description}
                </p>
              </motion.article>
            ),
          )}
        </div>
      </section>

      {/* Openings and application form */}
      <section
        id="openings"
        className="scroll-mt-24 mx-auto max-w-7xl px-5 py-24"
      >
        <div className="mb-12 text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-orange-500">
            Career Opportunities
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-[#062c54] md:text-5xl">
            Current job openings
          </h2>

          <p className="mx-auto mt-4 max-w-3xl leading-7 text-slate-600">
            Browse active opportunities or submit a general application so our
            recruitment team can consider your profile for suitable roles.
          </p>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Job listings */}
          <div>
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-2xl font-bold text-[#062c54]">
                  Available Positions
                </h3>

                {!jobsLoading && !jobsError && (
                  <p className="mt-1 text-sm text-slate-500">
                    {filteredJobs.length}{" "}
                    {filteredJobs.length === 1 ? "opening" : "openings"} found
                  </p>
                )}
              </div>

              <div className="relative w-full sm:max-w-xs">
                <Search
                  size={19}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="search"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search jobs or location"
                  aria-label="Search job openings"
                  className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-11 pr-4 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                />
              </div>
            </div>

            {jobsLoading ? (
              <div className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-white p-7 text-slate-500 shadow-sm">
                <LoaderCircle
                  size={22}
                  className="animate-spin text-orange-500"
                />
                Loading current job openings...
              </div>
            ) : jobsError ? (
              <div className="rounded-3xl border border-red-100 bg-white p-7 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
                  <AlertCircle size={24} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#062c54]">
                  Unable to load openings
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Current job openings could not be loaded. Check your internet
                  connection or try again.
                </p>

                <button
                  type="button"
                  onClick={fetchJobs}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#062c54] px-5 py-2.5 font-semibold text-white transition hover:bg-orange-500"
                >
                  <RefreshCw size={17} />
                  Try Again
                </button>
              </div>
            ) : jobs.length === 0 ? (
              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <BriefcaseBusiness size={38} className="text-orange-500" />

                <h3 className="mt-5 text-2xl font-bold text-[#062c54]">
                  No current openings
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  There are no active job listings right now. Submit your resume
                  as a general application and our team can review it for future
                  opportunities.
                </p>

                <button
                  type="button"
                  onClick={() => scrollToForm("General Application")}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 font-semibold text-white transition hover:bg-orange-600"
                >
                  Submit Resume
                  <ArrowRight size={17} />
                </button>
              </div>
            ) : filteredJobs.length === 0 ? (
              <div className="rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-sm">
                <Search size={38} className="mx-auto text-orange-500" />

                <h3 className="mt-4 text-xl font-bold text-[#062c54]">
                  No matching jobs found
                </h3>

                <p className="mt-2 text-slate-600">
                  Try searching with a different job title, skill or location.
                </p>

                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  className="mt-4 font-semibold text-orange-600 hover:text-orange-700"
                >
                  Clear Search
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                {filteredJobs.map((job, index) => (
                  <motion.article
                    key={job._id || `${job.title}-${index}`}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45 }}
                    className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <span className="absolute bottom-0 left-0 top-0 w-1.5 bg-orange-500" />

                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-[#062c54]">
                          {job.title || "Available Position"}
                        </h3>

                        {job.department && (
                          <p className="mt-1 text-sm font-medium text-orange-600">
                            {job.department}
                          </p>
                        )}

                        {job.description && (
                          <p className="mt-3 line-clamp-3 leading-7 text-slate-600">
                            {job.description}
                          </p>
                        )}
                      </div>

                      <span className="whitespace-nowrap rounded-full bg-green-100 px-3 py-1.5 text-xs font-semibold text-green-700">
                        Open
                      </span>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {job.location && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1.5 text-xs font-medium text-orange-700">
                          <MapPin size={14} />
                          {job.location}
                        </span>
                      )}

                      {job.experience && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700">
                          <UserRound size={14} />
                          {job.experience}
                        </span>
                      )}

                      {job.type && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700">
                          <Clock3 size={14} />
                          {job.type}
                        </span>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        scrollToForm(job.title || "General Application")
                      }
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#062c54] px-5 py-2.5 font-semibold text-white transition hover:bg-orange-500"
                    >
                      Apply Now
                      <ArrowRight size={17} />
                    </button>
                  </motion.article>
                ))}
              </div>
            )}
          </div>

          {/* Application form */}
          <motion.form
            id="apply-form"
            onSubmit={handleApply}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="scroll-mt-24 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl sm:p-8 lg:sticky lg:top-24"
          >
            <div className="mb-7">
              <p className="font-semibold uppercase tracking-[0.18em] text-orange-500">
                Submit Your Profile
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#062c54]">
                Apply for an opportunity
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Complete the application form and upload your latest resume.
                Shortlisted candidates will be contacted by the recruitment
                team.
              </p>
            </div>

            <div className="grid gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Full Name
                </label>

                <div className="relative">
                  <UserRound
                    size={19}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

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
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 py-3.5 pl-11 pr-4 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Email Address
                  </label>

                  <div className="relative">
                    <Mail
                      size={18}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      type="email"
                      autoComplete="email"
                      maxLength={120}
                      placeholder="Your email"
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 py-3.5 pl-11 pr-4 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Phone Number
                  </label>

                  <div className="relative">
                    <Phone
                      size={18}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      pattern="[+]?[0-9\s\-]{10,16}"
                      title="Enter a valid phone number"
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 py-3.5 pl-11 pr-4 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="position"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Position Applied For
                </label>

                <div className="relative">
                  <BriefcaseBusiness
                    size={19}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="position"
                    name="position"
                    value={form.position}
                    onChange={handleChange}
                    required
                    minLength={2}
                    maxLength={100}
                    placeholder="Example: Web Developer"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 py-3.5 pl-11 pr-4 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="resume"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Resume
                </label>

                {!resume ? (
                  <label
                    htmlFor="resume"
                    className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 px-5 py-8 text-center transition hover:border-orange-400 hover:bg-orange-50"
                  >
                    <UploadCloud size={36} className="text-orange-500" />

                    <span className="mt-3 font-semibold text-[#062c54]">
                      Click to upload your resume
                    </span>

                    <span className="mt-1 text-xs text-slate-500">
                      PDF, DOC or DOCX • Maximum {MAX_RESUME_SIZE_MB} MB
                    </span>
                  </label>
                ) : (
                  <div className="flex items-center gap-3 rounded-2xl border border-green-200 bg-green-50 p-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                      <FileText size={22} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-slate-800">
                        {resume.name}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        {(resume.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={removeResume}
                      aria-label="Remove uploaded resume"
                      className="rounded-lg p-2 text-slate-400 transition hover:bg-white hover:text-red-600"
                    >
                      <X size={19} />
                    </button>
                  </div>
                )}

                <input
                  ref={fileInputRef}
                  id="resume"
                  type="file"
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  onChange={handleResumeChange}
                  className="hidden"
                />

                {resumeError && (
                  <p className="mt-2 flex items-center gap-2 text-sm text-red-600">
                    <AlertCircle size={16} />
                    {resumeError}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Additional Information
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  maxLength={1000}
                  placeholder="Mention your skills, experience, preferred location, notice period or any other relevant information"
                  rows={5}
                  className="w-full resize-none rounded-xl border border-slate-300 bg-slate-50 px-4 py-3.5 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                />

                <p className="mt-2 text-right text-xs text-slate-400">
                  {form.message.length}/1000
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 font-semibold text-white shadow-lg transition hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-200 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <LoaderCircle size={20} className="animate-spin" />
                    Submitting Application...
                  </>
                ) : (
                  <>
                    Submit Application
                    <Send size={19} />
                  </>
                )}
              </button>

              <p className="text-center text-xs leading-5 text-slate-500">
                By submitting this application, you confirm that the information
                provided is accurate and may be shared with suitable employers
                for recruitment purposes.
              </p>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Campus hiring */}
      <section className="bg-[#062c54] py-20 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">
          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-orange-300">
              Campus Hiring & Placement Support
            </p>

            <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">
              Career opportunities for students and fresh graduates
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              Fairy Business Services collaborates with colleges, universities
              and technical institutes across India to support campus
              recruitment and placement opportunities.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Campus recruitment drives",
                "Graduate job opportunities",
                "Student profile screening",
                "Interview coordination",
                "Employer connections",
                "Placement assistance",
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
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-xl">
            <div className="group h-56 w-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=1000&q=80&auto=format&fit=crop"
                alt="Candidate celebrating a successful job offer"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#062c54] to-transparent" />
            </div>

            <div className="bg-white/10 p-8 backdrop-blur">
              <GraduationCap size={44} className="text-orange-300" />

              <h3 className="mt-5 text-2xl font-bold sm:text-3xl">
                Register for future opportunities
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                Students and fresh graduates can submit a general application.
                Our recruitment team may contact suitable candidates when
                matching opportunities become available.
              </p>

              <button
                type="button"
                onClick={() => scrollToForm("Campus Placement")}
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 font-semibold text-white transition hover:bg-orange-600"
              >
                Register Your Profile
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="bg-orange-500 py-14 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 px-5 text-center lg:flex-row lg:text-left">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-100">
              Recruitment Support
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Need assistance with your application?
            </h2>

            <p className="mt-3 text-orange-50">
              Contact Fairy Business Services for recruitment and career
              support.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+918890628049"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-orange-600 transition hover:bg-slate-100"
            >
              <Phone size={18} />
              +91 88906 28049
            </a>

            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              className="inline-flex items-center gap-2 rounded-full border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-orange-600"
            >
              <Mail size={18} />
              Email Our Team
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Career;