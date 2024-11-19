import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../Button";
import Input from "../Input";

interface FormProps {
  name: string;
  email: string;
  message: string;
}

const FormContact = () => {
  const [formData, setFormData] = useState<FormProps>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-zinc-700 flex flex-col items-center justify-center w-1/2 px-20 py-8 rounded-lg"
    >
      <h1 className="text-3xl font-bold mb-8">
        Send me a message if you're interested
      </h1>
      <Input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your name"
        icon="bx bxs-user"
      />
      <Input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your email"
        icon="bx bxs-envelope"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="bg-stone-600 w-full pb-48 px-4 pt-4 rounded-lg"
        placeholder="Your message"
      />
      <Button type="submit" label="Send message" />
    </form>
  );
};

export default FormContact;
