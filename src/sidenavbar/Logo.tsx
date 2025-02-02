const Logo = ({ expanded }) => {
  return (
    <>
      <img
        src="https://img.logoipsum.com/249.svg"
        className={`overflow-hidden transition-all ${
          expanded ? "w-16" : "w-0"
        }`}
        alt="Your Company"
      />
    </>
  );
};

export default Logo;
