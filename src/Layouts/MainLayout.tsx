import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { navigation } from "../Data";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer/Footer";
const MainLayout = () => {
  return (
    <div>
      <Navbar navigation={navigation} />
      <Outlet />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default MainLayout;
