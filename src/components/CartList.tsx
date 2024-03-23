import { useEffect, useState } from "react";
import feather from "feather-icons";

interface ProductData {
  id: number;
  name: string;
  img: string;
  price: number;
  desc: string;
}

const CartList = () => {
  const [storedProducts, setStoredProducts] = useState<ProductData[]>([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products") || "[]");
    setStoredProducts(storedProducts);
  }, []);

  useEffect(() => {
    feather.replace();
  });

  const removeProduct = (index: number) => {
    const updatedProducts = [...storedProducts];
    updatedProducts.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setStoredProducts(updatedProducts);
  };

  return (
    <>
      {storedProducts.map((product: ProductData, index: number) => (
        <div key={index} className="cart-item">
          <img src={`/img/menu/${product.img}`} alt={product.name} />
          <div className="item-detail">
            <h3>{product.name}</h3>
            <div className="item-price">IDR {product.price}</div>
          </div>
          <i
            data-feather="trash-2"
            className="remove-item"
            onClick={() => removeProduct(index)}
          ></i>
        </div>
      ))}
    </>
  );
};

export default CartList;
