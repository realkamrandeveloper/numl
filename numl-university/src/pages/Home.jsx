import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, BookOpen, Users, Award } from "lucide-react";
import HeroSlider from "../components/HeroSlider";
import { DepartmentCard, NewsCard, StatCard, SkeletonCard } from "../components/Cards";
import { departments, newsEvents, stats, testimonials } from "../data/universityData";

export default function Home() {
  const [newsLoading, setNewsLoading] = useState(true);
  const [testimonyIdx, setTestimonyIdx] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setNewsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setTestimonyIdx((i) => (i + 1) % testimonials.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      {/* Hero */}
      <HeroSlider />

      {/* About snapshot */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="reveal">
            <span className="text-[#c9a227] font-semibold text-sm uppercase tracking-widest">About NUML</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a5c2a] mt-2 mb-5" style={{ fontFamily: "Playfair Display, serif" }}>
              Pakistan's Premier Language & Sciences University
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Founded in 1970, the National University of Modern Languages (NUML) is a federal-chartered university with campuses across Pakistan. With over 50,000 students and 150+ programs, NUML stands as the national leader in language education, technology, and professional development.
            </p>
            <p className="text-gray-600 leading-relaxed mb-7">
              Our diverse community of scholars, researchers, and professionals share a common commitment to academic excellence, cultural understanding, and national progress.
            </p>
            <div className="flex flex-wrap gap-6 mb-8">
              {[
                { icon: BookOpen, label: "150+ Programs" },
                { icon: Users, label: "50,000+ Students" },
                { icon: Award, label: "HEC Ranked University" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-gray-700">
                  <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">
                    <Icon size={16} className="text-[#1a5c2a]" />
                  </div>
                  <span className="font-medium">{label}</span>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn-primary inline-flex items-center gap-2">
              Learn More About NUML <ArrowRight size={16} />
            </Link>
          </div>

          <div className="reveal grid grid-cols-2 gap-4">
            {[
              { label: "Vice Chancellor", text: "Prof. Dr. Muhammad Asif", color: "bg-[#1a5c2a]" },
              { label: "Established", text: "1970", color: "bg-[#c9a227]" },
              { label: "HEC Category", text: "W3 University", color: "bg-[#1565c0]" },
              { label: "Accreditation", text: "PEC, PMDC, HEC", color: "bg-[#6a1b9a]" },
            ].map((item) => (
              <div
                key={item.label}
                className={`${item.color} rounded-xl p-6 text-white card-hover`}
              >
                <div className="text-2xl font-bold mb-1" style={{ fontFamily: "Playfair Display, serif" }}>{item.text}</div>
                <div className="text-sm opacity-80">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-[#1a5c2a] py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 divide-x divide-green-700">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <span className="text-[#c9a227] font-semibold text-sm uppercase tracking-widest">Academic Excellence</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a5c2a] mt-2 mb-3" style={{ fontFamily: "Playfair Display, serif" }}>
              Faculties & Departments
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Explore our world-class academic programs across six major faculties, offering undergraduate, graduate, and doctoral degrees.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, i) => (
              <div key={dept.id} className="reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                <DepartmentCard dept={dept} />
              </div>
            ))}
          </div>
          <div className="text-center mt-10 reveal">
            <Link to="/departments" className="btn-primary inline-flex items-center gap-2">
              View All Departments <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div className="reveal">
              <span className="text-[#c9a227] font-semibold text-sm uppercase tracking-widest">Stay Updated</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a5c2a] mt-2" style={{ fontFamily: "Playfair Display, serif" }}>
                Latest News & Events
              </h2>
            </div>
            <Link to="#" className="text-[#1a5c2a] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all mt-4 md:mt-0 reveal">
              View All <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsLoading
              ? Array(6).fill(0).map((_, i) => <SkeletonCard key={i} />)
              : newsEvents.map((item, i) => (
                  <div key={item.id} className="reveal" style={{ transitionDelay: `${i * 0.07}s` }}>
                    <NewsCard item={item} />
                  </div>
                ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center reveal">
          <span className="text-[#c9a227] font-semibold text-sm uppercase tracking-widest">Student Voices</span>
          <h2 className="text-3xl font-bold text-[#1a5c2a] mt-2 mb-10" style={{ fontFamily: "Playfair Display, serif" }}>
            What Our Alumni Say
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 relative">
            <div className="flex justify-center mb-4">
              {[1,2,3,4,5].map((s) => <Star key={s} size={18} className="text-[#c9a227] fill-[#c9a227]" />)}
            </div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6 italic">
              "{testimonials[testimonyIdx].text}"
            </p>
            <div className="font-bold text-[#1a5c2a]">{testimonials[testimonyIdx].name}</div>
            <div className="text-sm text-gray-400">{testimonials[testimonyIdx].degree}</div>
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonyIdx(i)}
                  className={`rounded-full transition-all ${i === testimonyIdx ? "w-6 h-2.5 bg-[#1a5c2a]" : "w-2.5 h-2.5 bg-gray-300"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Admissions CTA */}
      <section className="py-20 bg-gradient-to-r from-[#0d3318] to-[#1a5c2a] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center reveal">
          <div className="inline-block bg-[#c9a227] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-5 tracking-wide">
            🎓 ADMISSIONS OPEN 2024–25
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-5" style={{ fontFamily: "Playfair Display, serif" }}>
            Begin Your Journey at NUML
          </h2>
          <p className="text-green-200 text-lg mb-9 max-w-xl mx-auto leading-relaxed">
            Applications are now open for undergraduate and graduate programs. Merit and need-based scholarships available.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/admissions" className="btn-gold">
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-[#1a5c2a] transition-all"
            >
              Contact Admissions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
