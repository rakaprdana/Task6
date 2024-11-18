import Button from "../components/elements/Button";
import Profile from "../components/layout/profile";
import SkillSect from "../components/layout/skillsect";

const LandingPage = () => {
  return (
    <>
      <div className="flex flex-col items-center py-16">
        <Profile />
        <p className="text-5xl text-center w-4/6 px-32">
          Building digital products, brands, and experience.
        </p>
        <Button label="Contact Me" />
      </div>
      <SkillSect />
    </>
  );
};

export default LandingPage;
