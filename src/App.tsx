import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import "boxicons/css/boxicons.min.css";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Router>
        <div className="bg-stone-900 text-gray-200 font-Poppins">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
