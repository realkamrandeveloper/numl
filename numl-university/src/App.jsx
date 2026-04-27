import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Admissions from "./pages/Admissions";
import Departments from "./pages/Departments";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={
            <div className="min-h-screen flex items-center justify-center text-center py-20 px-6">
              <div>
                <div className="text-9xl font-bold text-green-100" style={{fontFamily:"Playfair Display,serif"}}>404</div>
                <h2 className="text-2xl font-bold text-[#1a5c2a] mt-4 mb-3" style={{fontFamily:"Playfair Display,serif"}}>Page Not Found</h2>
                <p className="text-gray-500 mb-6">The page you're looking for doesn't exist.</p>
                <a href="/" className="btn-primary">Go to Home</a>
              </div>
            </div>
          } />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
