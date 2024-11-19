import Button from "../components/elements/Button";
import Navbar from "../components/elements/Navbar";
import AboutSect from "../components/layout/aboutsect";
import Profile from "../components/layout/profile";
import ProjectSect from "../components/layout/projectsect";
import SkillSect from "../components/layout/skillsect";
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <section id="first" className="flex flex-col items-center py-16">
        <Profile />
        <p className="text-5xl text-center w-1/2 px-12">
          I'm fullstack software developer with React{" "}
        </p>
        <Button onClick={() => navigate("/contact")} label="Contact Me" />
      </section>
      <SkillSect />
      <AboutSect />
      <ProjectSect />
    </>
  );
};

export default LandingPage;
