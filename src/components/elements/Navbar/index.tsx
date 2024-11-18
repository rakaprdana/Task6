const Navbar = () => {
  return (
    <>
      <nav className="absolute flex items-center justify-between text-white w-full px-12 py-4 opacity-60">
        <h1>raka@example.com</h1>
        <div className="space-x-8">
          <a href="https://www.linkedin.com/in/rakaprdana/">LinkedIn</a>
          <a href="">Instagram</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
