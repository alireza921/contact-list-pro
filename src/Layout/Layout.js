import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import styels from './style.module.css'
const Layout = ({ children }) => {
  return (
   <div className={styels.layout} >

      <Header />
      {children}
      <Footer />
   </div> 

  );
};

export default Layout;
