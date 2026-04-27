import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, GraduationCap, Globe, Share2, ExternalLink } from "lucide-react";
import { universityInfo } from "../data/universityData";

const SocialIcon = ({ icon: Icon }) => (
  <a href="#" className="w-8 h-8 bg-[#1a5c2a] hover:bg-[#c9a227] rounded-full flex items-center justify-center transition-colors">
    <Icon size={14} />
  </a>
);

export default function Footer() {
  return (
    <footer className="bg-[#0d3318] text-white">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 bg-[#c9a227] rounded-full flex items-center justify-center">
              <GraduationCap size={22} className="text-white" />
            </div>
            <div>
              <div className="font-bold text-lg leading-tight" style={{ fontFamily: "Playfair Display, serif" }}>NUML</div>
              <div className="text-xs text-green-300 leading-tight">National University of Modern Languages</div>
            </div>
          </div>
          <p className="text-green-300 text-sm leading-relaxed mb-5">
            Excellence in education, research, and language sciences since 1970. Empowering Pakistan's future leaders.
          </p>
          <div className="flex gap-3">
            {[Globe, Share2, ExternalLink, Globe, Share2].map((Icon, i) => (
              <a key={i} href="#" className="w-8 h-8 bg-[#1a5c2a] hover:bg-[#c9a227] rounded-full flex items-center justify-center transition-colors">
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-[#c9a227] mb-5">Quick Links</h4>
          <ul className="space-y-2.5">
            {[
              { label: "About NUML", path: "/about" },
              { label: "Admissions", path: "/admissions" },
              { label: "Departments", path: "/departments" },
              { label: "Research", path: "#" },
              { label: "Student Services", path: "#" },
              { label: "Alumni Network", path: "#" },
              { label: "Career Portal", path: "#" },
            ].map((link) => (
              <li key={link.label}>
                <Link to={link.path} className="text-green-300 hover:text-white text-sm transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-[#c9a227] rounded-full group-hover:w-2.5 transition-all" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-[#c9a227] mb-5">Programs</h4>
          <ul className="space-y-2.5">
            {["BS English", "BS Computer Science", "MBA", "BS Chinese", "BS Arabic", "MS Data Science", "PhD Programs"].map((prog) => (
              <li key={prog}>
                <Link to="/departments" className="text-green-300 hover:text-white text-sm transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-[#c9a227] rounded-full group-hover:w-2.5 transition-all" />
                  {prog}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-[#c9a227] mb-5">Contact Us</h4>
          <div className="space-y-4">
            <div className="flex gap-3">
              <MapPin size={16} className="text-[#c9a227] mt-0.5 shrink-0" />
              <span className="text-green-300 text-sm leading-relaxed">{universityInfo.address}</span>
            </div>
            <div className="flex gap-3">
              <Phone size={16} className="text-[#c9a227] shrink-0" />
              <a href={`tel:${universityInfo.phone}`} className="text-green-300 hover:text-white text-sm transition-colors">
                {universityInfo.phone}
              </a>
            </div>
            <div className="flex gap-3">
              <Mail size={16} className="text-[#c9a227] shrink-0" />
              <a href={`mailto:${universityInfo.email}`} className="text-green-300 hover:text-white text-sm transition-colors">
                {universityInfo.email}
              </a>
            </div>
          </div>
          <div className="mt-6">
            <h5 className="text-sm font-semibold mb-2">Newsletter</h5>
            <div className="flex">
              <input type="email" placeholder="Your email" className="flex-1 bg-[#1a5c2a] text-white placeholder-green-400 text-sm px-3 py-2 rounded-l outline-none border border-[#2d8048]" />
              <button className="bg-[#c9a227] hover:bg-[#a8871e] px-3 py-2 rounded-r text-sm font-medium transition-colors">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#1a5c2a]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-green-400 text-xs">© 2024 National University of Modern Languages. All rights reserved.</p>
          <div className="flex gap-4 text-xs text-green-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
