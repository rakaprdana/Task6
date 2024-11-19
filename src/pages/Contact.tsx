import Button from "../components/elements/Button";
import { useNavigate } from "react-router-dom";
import FormContact from "../components/elements/Form/formcontact";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button onClick={() => navigate("/")} label="Home" />
      <div className="border border-yellow-400 flex items-center justify-center space-x-56">
        <h1>Send me message if you interest</h1>
        <FormContact />
      </div>
    </>
  );
};

export default Contact;
