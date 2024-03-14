import Navbar from '@components/Navbar';
import Home from "@sections/Home";
import "@assets/css/main.css";
import About from "@sections/About";
import Menu from "@sections/Menu";
import Contact from "@sections/Contact";
import Footer from "@sections/Footer";
import { useEffect } from "react";
import feather from "feather-icons";
import Product from '@/sections/Product';

const App = () => {
  useEffect(() => {
    feather.replace();
  });
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Product />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
