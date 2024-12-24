const Footer = () => {
  return (
    <div className="w-full backdrop-blur-lg bg-transparent my-20 ">
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
