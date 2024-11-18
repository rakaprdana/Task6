interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  return (
    <>
      <button className="mt-8 p-4 rounded-sm bg-stone-800 hover:bg-stone-900 active:bg-stone-950 duration-700">
        {label}
      </button>
    </>
  );
};

export default Button;
