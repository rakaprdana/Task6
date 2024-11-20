import FormContact from "../elements/Form/formcontact";
import ImageCard from "../elements/Card/image";

const Contact = () => {
  return (
    <>
      <hr className="border border-stone-400 w-3/4" />
      <div className="flex items-center justify-between mx-16 mt-16">
        <ImageCard />
        <FormContact />
      </div>
    </>
  );
};

export default Contact;
