import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail, GraduationCap } from "lucide-react";
import { navLinks, universityInfo } from "../data/universityData";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#0d3318] text-white text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6">
            <a href={`tel:${universityInfo.phone}`} className="flex items-center gap-1 hover:text-yellow-300 transition-colors">
              <Phone size={13} /> {universityInfo.phone}
            </a>
            <a href={`mailto:${universityInfo.email}`} className="flex items-center gap-1 hover:text-yellow-300 transition-colors">
              <Mail size={13} /> {universityInfo.email}
            </a>
          </div>
          <div className="flex gap-4 text-xs">
            <a href="#" className="hover:text-yellow-300 transition-colors">Student Portal</a>
            <span className="opacity-40">|</span>
            <a href="#" className="hover:text-yellow-300 transition-colors">Faculty Login</a>
            <span className="opacity-40">|</span>
            <a href="#" className="hover:text-yellow-300 transition-colors">HEC</a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg"
            : "bg-white shadow-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-[#1a5c2a] rounded-full flex items-center justify-center group-hover:bg-[#0d3318] transition-colors">
                <GraduationCap size={24} className="text-white" />
              </div>
              <div>
                <div className="font-bold text-xl text-[#1a5c2a] leading-tight" style={{ fontFamily: "Playfair Display, serif" }}>
                  NUML
                </div>
                <div className="text-xs text-gray-500 leading-tight">National University of<br />Modern Languages</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1" ref={dropdownRef}>
              {navLinks.map((link) => (
                <div key={link.label} className="relative group">
                  {link.dropdown ? (
                    <>
                      <button
                        className={`flex items-center gap-1 px-4 py-2 rounded font-medium text-sm transition-all ${
                          isActive(link.path)
                            ? "text-[#1a5c2a] bg-green-50"
                            : "text-gray-700 hover:text-[#1a5c2a] hover:bg-green-50"
                        }`}
                        onMouseEnter={() => setActiveDropdown(link.label)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {link.label}
                        <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                      </button>
                      {/* Dropdown */}
                      <div
                        className="dropdown-menu absolute top-full left-0 mt-1 bg-white shadow-xl rounded-lg w-56 py-2 border border-gray-100 z-50 hidden group-hover:block"
                        onMouseEnter={() => setActiveDropdown(link.label)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            to={item.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-[#1a5c2a] transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className={`px-4 py-2 rounded font-medium text-sm transition-all ${
                        isActive(link.path)
                          ? "text-[#1a5c2a] bg-green-50"
                          : "text-gray-700 hover:text-[#1a5c2a] hover:bg-green-50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link to="/admissions" className="ml-3 btn-primary text-sm py-2 px-5 rounded">
                Apply Now
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden p-2 rounded text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-gray-100 ${
            mobileOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() =>
                        setMobileExpanded(mobileExpanded === link.label ? null : link.label)
                      }
                      className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-[#1a5c2a] rounded font-medium"
                    >
                      {link.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          mobileExpanded === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileExpanded === link.label && (
                      <div className="ml-4 mt-1 space-y-1">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            to={item.path}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-[#1a5c2a] hover:bg-green-50 rounded"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className="block px-3 py-2 text-gray-700 hover:bg-green-50 hover:text-[#1a5c2a] rounded font-medium"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-2 pb-3">
              <Link to="/admissions" className="btn-primary w-full text-center block">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
