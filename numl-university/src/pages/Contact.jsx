import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { universityInfo } from "../data/universityData";

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Name is required";
  if (!form.email.trim()) errors.email = "Email is required";
  else if (!/\S+@\S+\.\S+/.test(form.email)) errors.email = "Invalid email address";
  if (!form.subject.trim()) errors.subject = "Subject is required";
  if (!form.message.trim()) errors.message = "Message is required";
  else if (form.message.trim().length < 20) errors.message = "Message must be at least 20 characters";
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", department: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const inputClass = (field) =>
    `w-full border rounded-lg px-4 py-3 text-sm focus:outline-none transition-all ${
      errors[field]
        ? "border-red-400 bg-red-50 focus:border-red-500"
        : "border-gray-200 focus:border-[#1a5c2a] focus:ring-1 focus:ring-[#1a5c2a]"
    }`;

  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-r from-[#0d3318] to-[#1a5c2a] py-16 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-sm text-green-300 mb-2">
            <Link to="/" className="hover:text-white">Home</Link> / Contact
          </div>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "Playfair Display, serif" }}>Contact Us</h1>
          <p className="text-green-200 mt-3 text-lg">We'd love to hear from you</p>
        </div>
      </div>

      {/* Contact info cards */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              icon: MapPin,
              color: "#1a5c2a",
              title: "Campus Address",
              content: universityInfo.address,
            },
            {
              icon: Phone,
              color: "#1565c0",
              title: "Phone Number",
              content: universityInfo.phone,
              sub: "Mon–Fri, 8am–5pm",
            },
            {
              icon: Mail,
              color: "#c9a227",
              title: "Email Address",
              content: universityInfo.email,
              sub: "We reply within 24 hours",
            },
            {
              icon: Clock,
              color: "#6a1b9a",
              title: "Office Hours",
              content: "Mon – Fri: 8:00 AM – 5:00 PM",
              sub: "Saturday: 9:00 AM – 1:00 PM",
            },
          ].map(({ icon: Icon, color, title, content, sub }, i) => (
            <div
              key={title}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 card-hover reveal text-center"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: color + "15" }}
              >
                <Icon size={20} style={{ color }} />
              </div>
              <h3 className="font-bold text-gray-800 text-sm mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">{content}</p>
              {sub && <p className="text-gray-400 text-xs mt-1">{sub}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="reveal">
            <h2 className="text-2xl font-bold text-[#1a5c2a] mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
              Send Us a Message
            </h2>
            <p className="text-gray-500 text-sm mb-7">Fill out the form and our team will get back to you shortly.</p>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <CheckCircle size={48} className="text-[#1a5c2a] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#1a5c2a] mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
                  Message Sent!
                </h3>
                <p className="text-gray-600 text-sm mb-5">
                  Thank you for contacting NUML. We'll respond to your inquiry within 1–2 business days.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "", department: "", message: "" }); }}
                  className="btn-primary text-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={inputClass("name")}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={inputClass("email")}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Phone Number</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+92-300-0000000"
                      className={inputClass("phone")}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">Department</label>
                    <select
                      name="department"
                      value={form.department}
                      onChange={handleChange}
                      className={inputClass("department")}
                    >
                      <option value="">Select department</option>
                      <option>Admissions Office</option>
                      <option>Faculty of Languages</option>
                      <option>Faculty of Computer Science</option>
                      <option>Faculty of Management</option>
                      <option>Registrar Office</option>
                      <option>Finance Department</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What is your inquiry about?"
                    className={inputClass("subject")}
                  />
                  {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Write your message here..."
                    className={inputClass("message") + " resize-none"}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Map */}
          <div className="reveal">
            <h2 className="text-2xl font-bold text-[#1a5c2a] mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
              Find Us on Map
            </h2>
            <p className="text-gray-500 text-sm mb-6">NUML Lahore Campus — H-9, Islamabad Road, Lahore</p>
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200" style={{ height: 420 }}>
              <iframe
                title="NUML Lahore Campus"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.!2d74.3436!3d31.4697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919047e6f86e5ff%3A0x4908d36e08e4c5f1!2sNational%20University%20of%20Modern%20Languages%20Lahore%20Campus!5e0!3m2!1sen!2s!4v1699000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            {/* Campuses */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              {[
                { city: "Islamabad (HQ)", address: "H-9, Islamabad" },
                { city: "Lahore", address: "Islamabad Road, Lahore" },
                { city: "Karachi", address: "Clifton Campus" },
                { city: "Peshawar", address: "Hayatabad Campus" },
              ].map((campus) => (
                <div key={campus.city} className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                  <div className="font-semibold text-[#1a5c2a] text-xs">{campus.city}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{campus.address}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
