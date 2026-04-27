import { Link } from "react-router-dom";
import { CheckCircle, Calendar, FileText, DollarSign, AlertCircle } from "lucide-react";
import { admissionSteps } from "../data/universityData";

export default function Admissions() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-r from-[#7b1a1a] to-[#c9a227] py-16 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-sm text-yellow-200 mb-2">
            <Link to="/" className="hover:text-white">Home</Link> / Admissions
          </div>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "Playfair Display, serif" }}>
            Admissions 2024–25
          </h1>
          <p className="text-yellow-100 mt-3 text-lg">Applications are currently open. Apply before May 31, 2024.</p>
        </div>
      </div>

      {/* Alert Banner */}
      <div className="bg-yellow-50 border-b border-yellow-200">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-3 text-sm text-yellow-800">
          <AlertCircle size={16} className="shrink-0" />
          <span>
            <strong>Important:</strong> Last date to apply for Fall 2024 is <strong>May 31, 2024</strong>. Entry tests scheduled for <strong>June 10–15, 2024</strong>.
          </span>
        </div>
      </div>

      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14 reveal">
            <span className="text-[#c9a227] font-semibold text-sm uppercase tracking-widest">How to Apply</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a5c2a] mt-2" style={{ fontFamily: "Playfair Display, serif" }}>
              Admission Process
            </h2>
          </div>
          <div className="relative">
            {/* Line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-green-100 z-0" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
              {admissionSteps.map((step, i) => (
                <div
                  key={step.step}
                  className="text-center reveal"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-[#1a5c2a] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2 text-sm">{step.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12 reveal">
            <a href="#apply" className="btn-primary inline-block">Start Application</a>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            {
              icon: FileText,
              color: "#1a5c2a",
              title: "Required Documents",
              items: [
                "Matriculation / O-Level Certificate",
                "Intermediate / A-Level Certificate",
                "CNIC / B-Form Copy",
                "4 Recent Passport Photos",
                "Domicile Certificate",
                "Character Certificate",
                "HEC Equivalence (for foreign degrees)",
              ],
            },
            {
              icon: CheckCircle,
              color: "#1565c0",
              title: "Eligibility Criteria",
              items: [
                "Minimum 50% marks in intermediate",
                "Valid entry test score (NUML-NET / NTS)",
                "Age limit: 17–25 years (UG programs)",
                "16 Years education for postgraduate",
                "CGPA 2.5+ for graduate programs",
                "No 3rd division in any degree",
              ],
            },
            {
              icon: DollarSign,
              color: "#c9a227",
              title: "Fee Structure (Approx.)",
              items: [
                "UG Language Programs: PKR 25,000/sem",
                "BS Computer Science: PKR 45,000/sem",
                "BBA / MBA: PKR 55,000/sem",
                "BE Engineering: PKR 60,000/sem",
                "Need-based fee waiver available",
                "HEC & NUML scholarships available",
              ],
            },
          ].map(({ icon: Icon, color, title, items }, i) => (
            <div
              key={title}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-7 card-hover reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: color + "15" }}
              >
                <Icon size={20} style={{ color }} />
              </div>
              <h3 className="font-bold text-gray-800 mb-4 text-lg" style={{ fontFamily: "Playfair Display, serif" }}>
                {title}
              </h3>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle size={14} className="mt-0.5 shrink-0" style={{ color }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10 reveal">
            <span className="text-[#c9a227] font-semibold text-sm uppercase tracking-widest">Key Deadlines</span>
            <h2 className="text-3xl font-bold text-[#1a5c2a] mt-2" style={{ fontFamily: "Playfair Display, serif" }}>
              Important Dates — Fall 2024
            </h2>
          </div>
          <div className="space-y-3 reveal">
            {[
              { event: "Application Portal Opens", date: "March 1, 2024", status: "Completed" },
              { event: "Application Deadline", date: "May 31, 2024", status: "Upcoming" },
              { event: "Entry Test (NUML-NET)", date: "June 10–15, 2024", status: "Upcoming" },
              { event: "Merit List Publication", date: "June 25, 2024", status: "Upcoming" },
              { event: "Fee Submission Deadline", date: "July 5, 2024", status: "Upcoming" },
              { event: "Orientation Day", date: "July 15, 2024", status: "Upcoming" },
              { event: "Classes Begin", date: "July 22, 2024", status: "Upcoming" },
            ].map((row) => (
              <div
                key={row.event}
                className="flex flex-col sm:flex-row sm:items-center justify-between bg-gray-50 rounded-lg px-5 py-4 border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <Calendar size={16} className="text-[#1a5c2a] shrink-0" />
                  <span className="font-medium text-gray-800 text-sm">{row.event}</span>
                </div>
                <div className="flex items-center gap-4 mt-2 sm:mt-0 ml-7 sm:ml-0">
                  <span className="text-sm text-gray-500">{row.date}</span>
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      row.status === "Completed"
                        ? "bg-gray-200 text-gray-500"
                        : "bg-green-100 text-[#1a5c2a]"
                    }`}
                  >
                    {row.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Form CTA */}
      <section className="py-20 bg-[#1a5c2a] text-white" id="apply">
        <div className="max-w-2xl mx-auto px-6 text-center reveal">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
            Ready to Apply?
          </h2>
          <p className="text-green-200 mb-8">Complete your application online. It takes less than 20 minutes.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://admission.numl.edu.pk" target="_blank" rel="noreferrer" className="btn-gold">
              Apply Online →
            </a>
            <Link to="/contact" className="border-2 border-white text-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-[#1a5c2a] transition-all">
              Need Help? Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
