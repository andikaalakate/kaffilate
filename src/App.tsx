import Navbar from "@components/Navbar";
import Home from "@sections/Home";
import "@assets/css/main.css";
import About from "@sections/About";
import Menu from "@sections/Menu";
import Contact from "@sections/Contact";
import Footer from "@sections/Footer";
import { useEffect, useState } from "react";
import feather from "feather-icons";
import Product from "@/sections/Product";
import data from "@/data/data.json";

interface ProductData {
  id: number;
  name: string;
  img: string;
  price: number;
  desc: string;
}

const App = () => {
  const productData = data.products;

  const [selectedProduct, setSelectedProduct] = useState<ProductData>({
    id: 0,
    name: "",
    img: "",
    price: 0,
    desc: "",
  });

  const [totalPrice, setTotalPrice] = useState<number>(0);

  const productSelected = (product: ProductData, e: React.MouseEvent) => {
    e.preventDefault();

    const storedProducts = JSON.parse(localStorage.getItem("products") || "[]");

    if (storedProducts) {
      const updatedProducts = [...storedProducts, product];
      localStorage.setItem("products", JSON.stringify(updatedProducts));
    }

    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price);
  };

  
  useEffect(() => {
    feather.replace();
  });
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Product
        product={productData}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        productSelected={productSelected}
        totalPrice={totalPrice}
      />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
