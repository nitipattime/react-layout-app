import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="container">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
