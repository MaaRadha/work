import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-[#EBEBEB]">
      <Navbar />
      <main className="my-6 container mx-auto max-w-7xl font-redhat">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
