export const universityInfo = {
  name: "National University of Modern Languages",
  shortName: "NUML",
  tagline: "Excellence in Education Since 1970",
  address: "H-9, Islamabad Road, Lahore Campus, Punjab 54000",
  phone: "+92-42-99261155",
  email: "info@numl.edu.pk",
  website: "www.numl.edu.pk",
  founded: "1970",
  students: "50,000+",
  faculty: "2,000+",
  programs: "150+",
  campuses: "10+",
};

export const navLinks = [
  { label: "Home", path: "/" },
  {
    label: "About",
    path: "/about",
    dropdown: [
      { label: "Vice Chancellor's Message", path: "/about" },
      { label: "History & Mission", path: "/about#history" },
      { label: "Administration", path: "/about#admin" },
      { label: "Accreditation", path: "/about#accreditation" },
    ],
  },
  {
    label: "Academics",
    path: "/departments",
    dropdown: [
      { label: "All Departments", path: "/departments" },
      { label: "Faculty of Languages", path: "/departments#languages" },
      { label: "Faculty of Sciences", path: "/departments#sciences" },
      { label: "Faculty of Management", path: "/departments#management" },
      { label: "Faculty of IT", path: "/departments#it" },
    ],
  },
  { label: "Admissions", path: "/admissions" },
  { label: "Contact", path: "/contact" },
];

export const heroSlides = [
  {
    id: 1,
    title: "Shape Your Future at NUML",
    subtitle: "Pakistan's Leading University for Languages, Sciences & Technology",
    bg: "linear-gradient(135deg, #0d3318 0%, #1a5c2a 60%, #2d8048 100%)",
    cta: "Explore Programs",
    ctaLink: "/admissions",
    badge: "Ranked #1 in Language Education",
  },
  {
    id: 2,
    title: "World-Class Research & Innovation",
    subtitle: "Join a community of scholars pushing boundaries across disciplines",
    bg: "linear-gradient(135deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%)",
    cta: "Research Centers",
    ctaLink: "/departments",
    badge: "100+ Research Publications Yearly",
  },
  {
    id: 3,
    title: "Admissions Open 2024–25",
    subtitle: "Apply now for undergraduate, graduate and doctoral programs",
    bg: "linear-gradient(135deg, #7b1a1a 0%, #a32020 60%, #c9a227 100%)",
    cta: "Apply Now",
    ctaLink: "/admissions",
    badge: "Merit & Need-Based Scholarships",
  },
];

export const departments = [
  {
    id: 1,
    name: "Faculty of Languages",
    icon: "🌐",
    description: "Study 40+ world languages including English, Arabic, Chinese, French, German, and more.",
    programs: ["BA English", "MA Arabic", "BS Chinese", "French Diploma"],
    color: "#1a5c2a",
  },
  {
    id: 2,
    name: "Faculty of Computer Science & IT",
    icon: "💻",
    description: "Cutting-edge programs in software engineering, AI, data science, and cybersecurity.",
    programs: ["BS Computer Science", "BS Software Engineering", "MS Data Science", "MS Cybersecurity"],
    color: "#1565c0",
  },
  {
    id: 3,
    name: "Faculty of Management Sciences",
    icon: "📊",
    description: "Business education rooted in Pakistani context with global best practices.",
    programs: ["BBA", "MBA", "MS Finance", "Executive MBA"],
    color: "#6a1b9a",
  },
  {
    id: 4,
    name: "Faculty of Education",
    icon: "🎓",
    description: "Training the next generation of educators with modern pedagogical methods.",
    programs: ["B.Ed", "M.Ed", "MS Education", "PhD Education"],
    color: "#c9a227",
  },
  {
    id: 5,
    name: "Faculty of Social Sciences",
    icon: "🏛️",
    description: "Interdisciplinary programs in psychology, sociology, and public administration.",
    programs: ["BS Psychology", "BS Sociology", "MS Public Admin", "BS Anthropology"],
    color: "#d84315",
  },
  {
    id: 6,
    name: "Faculty of Engineering",
    icon: "⚙️",
    description: "Engineering programs in civil, electrical, mechanical and biomedical engineering.",
    programs: ["BE Civil", "BE Electrical", "BE Mechanical", "BE Biomedical"],
    color: "#37474f",
  },
];

export const newsEvents = [
  {
    id: 1,
    type: "News",
    date: "April 20, 2024",
    title: "NUML Signs MoU with Beijing Language University for Student Exchange",
    excerpt: "A landmark agreement to facilitate academic cooperation, faculty exchange, and joint research programs between both institutions.",
    category: "International Relations",
    image: null,
  },
  {
    id: 2,
    type: "Event",
    date: "May 5, 2024",
    title: "Annual Research Conference 2024 — Call for Papers",
    excerpt: "Submit your research abstracts by April 30. Conference theme: Language, Technology & Society in the 21st Century.",
    category: "Research",
    image: null,
  },
  {
    id: 3,
    type: "News",
    date: "April 15, 2024",
    title: "NUML Launches New BS Artificial Intelligence Program",
    excerpt: "The new 4-year program will prepare students for careers in machine learning, neural networks, and AI ethics.",
    category: "Academics",
    image: null,
  },
  {
    id: 4,
    type: "Event",
    date: "May 12, 2024",
    title: "Spring Convocation Ceremony 2024",
    excerpt: "Join us as we celebrate the graduating class of 2024. Over 3,000 students to receive degrees across all faculties.",
    category: "Ceremony",
    image: null,
  },
  {
    id: 5,
    type: "News",
    date: "April 8, 2024",
    title: "NUML Lahore Campus Wins National Green University Award",
    excerpt: "Recognition for sustainable campus practices, solar energy initiatives, and tree plantation drives across the Lahore campus.",
    category: "Achievement",
    image: null,
  },
  {
    id: 6,
    type: "Event",
    date: "April 28, 2024",
    title: "International Language Week — Cultural Performances & Competitions",
    excerpt: "Celebrate linguistic diversity with debates, poetry, drama, and competitions in 20 world languages.",
    category: "Cultural",
    image: null,
  },
];

export const admissionSteps = [
  { step: "01", title: "Check Eligibility", desc: "Review program requirements, minimum marks, and entry test criteria." },
  { step: "02", title: "Online Application", desc: "Fill out the online admission form with your academic and personal details." },
  { step: "03", title: "Entry Test / Interview", desc: "Appear for the NUML entry test or HEC-NAT / SAT as applicable." },
  { step: "04", title: "Merit List", desc: "Check the published merit list and await your provisional offer letter." },
  { step: "05", title: "Fee Submission", desc: "Pay the admission fee and submit required documents to complete enrollment." },
];

export const stats = [
  { label: "Students Enrolled", value: "50,000+", icon: "👨‍🎓" },
  { label: "Faculty Members", value: "2,000+", icon: "👩‍🏫" },
  { label: "Programs Offered", value: "150+", icon: "📚" },
  { label: "Campus Locations", value: "10+", icon: "🏛️" },
  { label: "Languages Taught", value: "40+", icon: "🌐" },
  { label: "Years of Excellence", value: "54+", icon: "🏆" },
];

export const testimonials = [
  {
    name: "Sara Malik",
    degree: "MS Chinese, 2023",
    text: "NUML gave me not just language skills but the confidence to work in international diplomacy. The faculty is world-class.",
  },
  {
    name: "Ahmed Raza",
    degree: "BS Computer Science, 2022",
    text: "The industry partnerships and research opportunities at NUML prepared me for a career at a top tech firm in Islamabad.",
  },
  {
    name: "Fatima Qureshi",
    degree: "MBA, 2023",
    text: "The campus environment and diverse student community made my two years at NUML the most enriching of my life.",
  },
];
