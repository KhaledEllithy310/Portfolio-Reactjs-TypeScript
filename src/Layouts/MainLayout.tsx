import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { navigation } from "../Data";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";
const MainLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.pathname);

  useEffect(() => {
    // Redirect to home when the "/" path is accessed
    if (location.pathname === "/") {
      navigate("/home");
      console.log("ddd");
    }
  }, [location.pathname, navigate]);
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
