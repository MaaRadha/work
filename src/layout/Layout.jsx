import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-[#EBEBEB] flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow container w-full mx-auto max-w-7xl my-6 font-redhat">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
