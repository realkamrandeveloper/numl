import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function DepartmentCard({ dept }) {
  return (
    <div className="card-hover bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 group">
      <div
        className="h-2"
        style={{ background: dept.color }}
      />
      <div className="p-6">
        <div className="text-4xl mb-4">{dept.icon}</div>
        <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#1a5c2a] transition-colors" style={{ fontFamily: "Playfair Display, serif" }}>
          {dept.name}
        </h3>
        <p className="text-gray-500 text-sm mb-4 leading-relaxed">{dept.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {dept.programs.slice(0, 3).map((p) => (
            <span key={p} className="text-xs bg-green-50 text-[#1a5c2a] px-2 py-1 rounded-full font-medium">
              {p}
            </span>
          ))}
          {dept.programs.length > 3 && (
            <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full">
              +{dept.programs.length - 3} more
            </span>
          )}
        </div>
        <Link to="/departments" className="flex items-center gap-1 text-[#1a5c2a] text-sm font-semibold hover:gap-2 transition-all">
          Explore Programs <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}

export function NewsCard({ item }) {
  const typeColor = item.type === "Event" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-[#1a5c2a]";
  return (
    <div className="card-hover bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
      {/* Placeholder image */}
      <div className="h-40 bg-gradient-to-br from-green-800 to-green-600 flex items-center justify-center relative">
        <div className="text-6xl opacity-30">
          {item.category === "Research" ? "🔬" :
           item.category === "Cultural" ? "🎭" :
           item.category === "Ceremony" ? "🎓" :
           item.category === "Achievement" ? "🏆" :
           item.category === "International Relations" ? "🌍" : "📰"}
        </div>
        <div className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${typeColor}`}>
          {item.type}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-gray-400">{item.date}</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full" />
          <span className="text-xs text-[#c9a227] font-medium">{item.category}</span>
        </div>
        <h3 className="font-bold text-gray-800 mb-2 leading-snug flex-1 hover:text-[#1a5c2a] transition-colors" style={{ fontFamily: "Playfair Display, serif" }}>
          {item.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-4">{item.excerpt}</p>
        <button className="text-[#1a5c2a] text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all mt-auto">
          Read More <ArrowRight size={13} />
        </button>
      </div>
    </div>
  );
}

export function StatCard({ stat }) {
  return (
    <div className="text-center p-6">
      <div className="text-4xl mb-2">{stat.icon}</div>
      <div className="text-3xl font-bold text-white mb-1" style={{ fontFamily: "Playfair Display, serif" }}>
        {stat.value}
      </div>
      <div className="text-green-200 text-sm">{stat.label}</div>
    </div>
  );
}

export function SkeletonCard() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="skeleton h-40 w-full" />
      <div className="p-5 space-y-3">
        <div className="skeleton h-3 w-1/3 rounded" />
        <div className="skeleton h-5 w-full rounded" />
        <div className="skeleton h-4 w-5/6 rounded" />
        <div className="skeleton h-4 w-4/6 rounded" />
        <div className="skeleton h-3 w-1/4 rounded mt-4" />
      </div>
    </div>
  );
}
