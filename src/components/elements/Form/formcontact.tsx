import Button from "../Button";
import Input from "../Input";

const FormContact = () => {
  const handleSubmit = () => {};
  return (
    <>
      <form
        action=""
        className="border border-red-600 flex flex-col items-center justify-center w-1/2"
      >
        <Input type="name" />
        <Input type="email" />
        <Input type="text" />
        <Button onClick={handleSubmit} label="Send message" />
      </form>
    </>
  );
};

export default FormContact;
