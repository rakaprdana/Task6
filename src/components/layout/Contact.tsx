import FormContact from "../../components/elements/Form/formcontact";
import ImageCard from "../elements/Card/image";

const Contact = () => {
  return (
    <>
      <div className="flex items-center justify-between mx-16 mt-8">
        <ImageCard />
        <FormContact />
      </div>
    </>
  );
};

export default Contact;
