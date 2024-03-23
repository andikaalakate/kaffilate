import ModalProduct from "@/components/ModalProduct";
import { useEffect } from "react";

interface Product {
  id: number;
  name: string;
  img: string;
  price: number;
  desc: string;
}

interface ProductProps {
  product: Product[];
  productSelected: (product: Product, e: React.MouseEvent) => void;
  selectedProduct: Product;
  setSelectedProduct: (product: Product) => void;
  totalPrice: number;
}

const Product: React.FC<ProductProps> = ({
  product,
  productSelected,
  selectedProduct,
  setSelectedProduct,
  totalPrice,
}) => {

  const handleItemDetail = (productId: number, e: React.MouseEvent) => {
    e.preventDefault();
    const selected = product.find(
      (product: Product) => product.id === productId
    );
    if (selected) {
      setSelectedProduct(selected);
    }
  };
  
  const rupiahConvert = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  useEffect(() => {
    console.log(totalPrice);
  }, [totalPrice]);

  return (
    <>
      <section className="products" id="products">
        <h2>
          <span>Product Unggulan</span> Kami
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima nisi
          distinctio deleniti tenetur! Vero perferendis id quos dicta voluptate
          ut!
        </p>

        <div className="row">
          {product.map((item, index) => (
            <div className="product-card" key={index}>
              <div className="product-icons">
                <a
                  href="#"
                  className="shopping-btn"
                  onClick={(e) => {
                    productSelected(item, e);
                  }}
                >
                  <i data-feather="shopping-cart"></i>
                </a>
                <a
                  href="#"
                  className="item-detail-button"
                  onClick={(e) => handleItemDetail(item.id, e)}
                >
                  <i data-feather="eye"></i>
                </a>
              </div>

              <div className="product-image">
                <img src={`/img/menu/${item.img}`} alt={item.name} />
              </div>

              <div className="product-content">
                <h3>{item.name}</h3>
                <div className="product-stars">
                  <i data-feather="star" className="star-full"></i>
                  <i data-feather="star"></i>
                  <i data-feather="star"></i>
                  <i data-feather="star"></i>
                  <i data-feather="star"></i>
                </div>
                <div className="product-price">
                  {rupiahConvert(item.price)} <span>IDR 55K</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ModalProduct product={selectedProduct} />
    </>
  );
};

export default Product;
