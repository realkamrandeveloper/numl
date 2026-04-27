import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "../data/universityData";

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = (index) => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrent(index);
    setTimeout(() => setTransitioning(false), 700);
  };

  const next = () => goTo((current + 1) % heroSlides.length);
  const prev = () => goTo((current - 1 + heroSlides.length) % heroSlides.length);

  useEffect(() => {
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [current]);

  const slide = heroSlides[current];

  return (
    <div className="relative overflow-hidden" style={{ height: "calc(100vh - 130px)", minHeight: 480, maxHeight: 700 }}>
      {/* Slides */}
      {heroSlides.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            background: s.bg,
            opacity: i === current ? 1 : 0,
            zIndex: i === current ? 1 : 0,
          }}
        >
          {/* Pattern overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            {/* Badge */}
            <div
              key={`badge-${current}`}
              className="inline-block bg-[#c9a227] text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-wide"
              style={{ animation: "fadeSlideUp 0.6s ease both" }}
            >
              ⭐ {slide.badge}
            </div>

            {/* Title */}
            <h1
              key={`title-${current}`}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight"
              style={{ fontFamily: "Playfair Display, serif", animation: "fadeSlideUp 0.7s ease 0.1s both" }}
            >
              {slide.title}
            </h1>

            {/* Subtitle */}
            <p
              key={`sub-${current}`}
              className="text-lg md:text-xl text-green-100 mb-8 leading-relaxed"
              style={{ animation: "fadeSlideUp 0.7s ease 0.2s both" }}
            >
              {slide.subtitle}
            </p>

            {/* CTAs */}
            <div
              key={`cta-${current}`}
              className="flex flex-wrap gap-4"
              style={{ animation: "fadeSlideUp 0.7s ease 0.3s both" }}
            >
              <Link to={slide.ctaLink} className="btn-gold text-sm">
                {slide.cta}
              </Link>
              <Link to="/about" className="border-2 border-white text-white px-6 py-3 rounded font-semibold text-sm hover:bg-white hover:text-[#1a5c2a] transition-all">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-black bg-opacity-30 backdrop-blur-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-3 flex gap-8">
          {[
            ["50,000+", "Students"],
            ["150+", "Programs"],
            ["40+", "Languages"],
            ["10+", "Campuses"],
          ].map(([val, label]) => (
            <div key={label} className="text-white text-center">
              <div className="text-xl font-bold text-[#c9a227]">{val}</div>
              <div className="text-xs text-gray-300">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full flex items-center justify-center text-white transition-all"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full flex items-center justify-center text-white transition-all"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-16 right-6 z-20 flex gap-2 md:bottom-20">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all ${
              i === current ? "w-6 h-2.5 bg-[#c9a227]" : "w-2.5 h-2.5 bg-white bg-opacity-60"
            }`}
          />
        ))}
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
