import Button from "../components/elements/Button";
import Navbar from "../components/elements/Navbar";
import AboutSect from "../components/layout/aboutsect";
import CertiSect from "../components/layout/certisect";
import Contact from "../components/layout/contactsect";
import Profile from "../components/layout/profile";
import ProjectSect from "../components/layout/projectsect";
import SkillSect from "../components/layout/skillsect";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <section id="first" className="flex flex-col items-center py-28">
        <Profile />
        <p className="text-5xl text-center w-1/2 px-12">
          <Typewriter
            words={["Full Stack Software Developer", "Front end Developer"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={85}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
        <Button
          type="button"
          onClick={() => navigate("/contact")}
          label="Contact Me"
        />
      </section>
      <SkillSect />
      <AboutSect />
      <ProjectSect />
      <CertiSect />
      <Contact />
    </>
  );
};

export default LandingPage;
