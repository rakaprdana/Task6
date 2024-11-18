import Navbar from "./components/elements/Navbar";
import LandingPage from "./pages/LandingPage";
import "boxicons/css/boxicons.min.css";

function App() {
  return (
    <>
      <div className="bg-stone-950 text-gray-200 font-Poppins">
        <Navbar />
        <LandingPage />
      </div>
    </>
  );
}

export default App;
