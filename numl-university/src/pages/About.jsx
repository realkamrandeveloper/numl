import { Link } from "react-router-dom";
import { CheckCircle, Target, Eye, Heart } from "lucide-react";

export default function About() {
  return (
    <div>
      {/* Page Hero */}
      <div className="bg-gradient-to-r from-[#0d3318] to-[#1a5c2a] py-16 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-sm text-green-300 mb-2">
            <Link to="/" className="hover:text-white">Home</Link> / About
          </div>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "Playfair Display, serif" }}>About NUML</h1>
          <p className="text-green-200 mt-3 text-lg">Excellence in Education Since 1970</p>
        </div>
      </div>

      {/* VC Message */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="reveal">
            <div className="bg-[#1a5c2a] rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-y-8 translate-x-8" />
              <div className="w-20 h-20 bg-[#c9a227] rounded-full flex items-center justify-center text-3xl mb-5">👨‍💼</div>
              <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "Playfair Display, serif" }}>Prof. Dr. Muhammad Asif</h3>
              <p className="text-green-300 text-sm mb-5">Vice Chancellor, NUML</p>
              <blockquote className="text-green-100 leading-relaxed italic text-sm">
                "NUML continues to be a beacon of academic excellence in Pakistan. Our commitment to providing quality education in diverse fields — from modern languages to engineering and IT — reflects our vision of producing globally competent graduates who contribute to national and international development."
              </blockquote>
            </div>
          </div>
          <div className="reveal">
            <span className="text-[#c9a227] font-semibold text-sm uppercase tracking-widest">Our History</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a5c2a] mt-2 mb-5" style={{ fontFamily: "Playfair Display, serif" }}>
              54+ Years of Academic Excellence
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Established in 1970 as the Institute of Modern Languages, NUML received university status through a federal charter in 2000. Today, it stands as one of Pakistan's most respected federal universities, with campuses in Islamabad, Lahore, Karachi, Peshawar, Quetta, and other major cities.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              NUML has produced tens of thousands of graduates who now serve in diplomacy, academia, government, technology, and industry — both in Pakistan and internationally. Our alumni network spans over 40 countries.
            </p>
            <div className="space-y-3">
              {[
                "Chartered by the Federal Government of Pakistan",
                "Recognized by the Higher Education Commission (HEC)",
                "Member of the Association of Commonwealth Universities",
                "Collaborations with 60+ international universities",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckCircle size={16} className="text-[#1a5c2a] mt-0.5 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50" id="history">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a5c2a]" style={{ fontFamily: "Playfair Display, serif" }}>
              Mission, Vision & Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                color: "#1a5c2a",
                title: "Our Mission",
                text: "To provide high-quality, accessible education that equips students with the knowledge, skills, and values necessary to contribute meaningfully to society and excel in a competitive global environment.",
              },
              {
                icon: Eye,
                color: "#1565c0",
                title: "Our Vision",
                text: "To be recognized globally as a premier institution for modern languages, sciences, and technology — producing graduates who are linguistically proficient, technically skilled, and morally grounded.",
              },
              {
                icon: Heart,
                color: "#c9a227",
                title: "Our Values",
                text: "Academic integrity, respect for diversity, commitment to innovation, cultural sensitivity, national service, and unwavering dedication to the pursuit of knowledge.",
              },
            ].map(({ icon: Icon, color, title, text }, i) => (
              <div
                key={title}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 card-hover reveal"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: color + "15" }}
                >
                  <Icon size={22} style={{ color }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "Playfair Display, serif", color }}>
                  {title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white" id="admin">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <span className="text-[#c9a227] font-semibold text-sm uppercase tracking-widest">Leadership Team</span>
            <h2 className="text-3xl font-bold text-[#1a5c2a] mt-2" style={{ fontFamily: "Playfair Display, serif" }}>
              University Administration
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Prof. Dr. Muhammad Asif", title: "Vice Chancellor", emoji: "👨‍💼" },
              { name: "Brig. (R) Ejaz Ahmad", title: "Pro Vice Chancellor", emoji: "👨‍🎓" },
              { name: "Dr. Ayesha Rehman", title: "Registrar", emoji: "👩‍💼" },
              { name: "Dr. Hassan Tariq", title: "Dean, Faculty of Languages", emoji: "👨‍🏫" },
            ].map((person, i) => (
              <div
                key={person.name}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center card-hover reveal"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  {person.emoji}
                </div>
                <h4 className="font-bold text-gray-800 text-sm mb-1">{person.name}</h4>
                <p className="text-[#1a5c2a] text-xs font-medium">{person.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="py-16 bg-[#1a5c2a] text-white" id="accreditation">
        <div className="max-w-7xl mx-auto px-6 text-center reveal">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "Playfair Display, serif" }}>Accreditations & Affiliations</h2>
          <p className="text-green-200 mb-10 max-w-xl mx-auto">NUML is recognized and accredited by Pakistan's leading regulatory bodies and maintains international affiliations.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["HEC Pakistan", "PEC", "PMDC", "BASR", "PNC", "ACCA Pakistan", "CFA Institute", "ACU"].map((body) => (
              <div key={body} className="bg-white bg-opacity-10 hover:bg-opacity-20 transition-all rounded-lg px-5 py-3 text-sm font-semibold">
                {body}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
