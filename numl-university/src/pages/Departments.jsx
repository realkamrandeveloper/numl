import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { DepartmentCard } from "../components/Cards";
import { departments } from "../data/universityData";

const ALL = "All";
const categories = [ALL, "Languages", "Technology", "Management", "Education", "Social Sciences", "Engineering"];

export default function Departments() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState(ALL);

  const filtered = departments.filter((d) => {
    const matchSearch =
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.description.toLowerCase().includes(search.toLowerCase());
    return matchSearch;
  });

  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-r from-[#0d3318] to-[#1a5c2a] py-16 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-sm text-green-300 mb-2">
            <Link to="/" className="hover:text-white">Home</Link> / Departments
          </div>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "Playfair Display, serif" }}>
            Faculties & Departments
          </h1>
          <p className="text-green-200 mt-3 text-lg">150+ programs across 6 major faculties</p>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="bg-white border-b border-gray-100 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-80">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search departments or programs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#1a5c2a] focus:ring-1 focus:ring-[#1a5c2a]"
            />
          </div>
          <div className="flex gap-2 flex-wrap justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeFilter === cat
                    ? "bg-[#1a5c2a] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-[#1a5c2a]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Departments Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-lg">No departments match your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((dept, i) => (
                <div key={dept.id} className="reveal" style={{ transitionDelay: `${i * 0.07}s` }}>
                  <DepartmentCard dept={dept} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Programs Table */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 reveal">
            <h2 className="text-3xl font-bold text-[#1a5c2a]" style={{ fontFamily: "Playfair Display, serif" }}>
              Programs at a Glance
            </h2>
          </div>
          <div className="overflow-x-auto reveal">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1a5c2a] text-white">
                  <th className="text-left px-5 py-3 rounded-tl-lg">Faculty</th>
                  <th className="text-left px-5 py-3">Undergraduate</th>
                  <th className="text-left px-5 py-3">Graduate</th>
                  <th className="text-left px-5 py-3 rounded-tr-lg">Duration</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { faculty: "Languages", ug: "BA, BS (40+ languages)", pg: "MA, MS, PhD", dur: "2–4 Years" },
                  { faculty: "Computer Science & IT", ug: "BS CS, BS SE", pg: "MS CS, MS DS, PhD", dur: "4 Years" },
                  { faculty: "Management Sciences", ug: "BBA", pg: "MBA, MS Finance, PhD", dur: "4 Years" },
                  { faculty: "Education", ug: "B.Ed", pg: "M.Ed, MS, PhD", dur: "2–4 Years" },
                  { faculty: "Social Sciences", ug: "BS Psychology, Sociology", pg: "MS, PhD", dur: "4 Years" },
                  { faculty: "Engineering", ug: "BE (Civil, Electrical, Mechanical)", pg: "MS, PhD", dur: "4 Years" },
                ].map((row, i) => (
                  <tr key={row.faculty} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3 font-semibold text-[#1a5c2a] border-b border-gray-100">{row.faculty}</td>
                    <td className="px-5 py-3 text-gray-600 border-b border-gray-100">{row.ug}</td>
                    <td className="px-5 py-3 text-gray-600 border-b border-gray-100">{row.pg}</td>
                    <td className="px-5 py-3 text-gray-600 border-b border-gray-100">{row.dur}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1a5c2a] text-white text-center">
        <div className="max-w-2xl mx-auto px-6 reveal">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
            Ready to Join a Faculty?
          </h2>
          <p className="text-green-200 mb-8">Apply now and take the first step towards your academic future at NUML.</p>
          <Link to="/admissions" className="btn-gold">Start Your Application</Link>
        </div>
      </section>
    </div>
  );
}
