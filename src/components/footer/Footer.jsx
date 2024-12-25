const Footer = () => {
  return (
    <div className="w-full text-gray-700 my-4 border-t-4 max-w-7xl mx-auto container">
      <footer className="pt-10 py-5">
        <div className=" text-center">
          <span className="font-bold"> &copy; Rohit kumar Amdahl, </span>
          <span>{new Date().getFullYear()} </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
