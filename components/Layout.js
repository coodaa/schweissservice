import Footer from "./Footer";
import Navbar from "./Navbar";
// import styles from "../styles/Home.module.scss";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
