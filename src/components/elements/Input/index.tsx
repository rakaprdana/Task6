interface InputProps {
  type: string;
}

const Input = ({ type }: InputProps) => {
  return (
    <>
      <input type={type} className="text-black rounded-sm py-2 mb-4 w-2/3" />
    </>
  );
};

export default Input;
