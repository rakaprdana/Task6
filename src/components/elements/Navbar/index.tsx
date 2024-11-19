const Navbar = () => {
  return (
    <>
      <nav className="absolute flex items-center justify-between text-white text-sm w-full px-12 py-4 opacity-60">
        <div className="flex items-center space-x-4">
          <i className="bx bx-envelope" />
          <h1>raka.pradana1103@gmail.com</h1>
        </div>
        <div className="flex space-x-8">
          <a
            href="https://www.linkedin.com/in/rakaprdana/"
            className="flex items-center space-x-4 hover:text-stone-600 duration-700"
          >
            <i className="bx bxl-linkedin" />
            <p>LinkedIn</p>
          </a>
          <a
            href="https://www.instagram.com/rakapradna_"
            className="flex items-center space-x-4 hover:text-stone-600 duration-700"
          >
            <i className="bx bxl-instagram" />
            <p>Instagram</p>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
