import ModalProduct from "@/components/ModalProduct";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  img: string;
  price: number;
  desc: string;
}

const productData: Product[] = [
  {
    id: 1,
    name: "Kopi 1",
    img: "1.webp",
    price: 20000,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dolore temporibus reprehenderit voluptatibus. Voluptatem voluptatibus nam magni a tempora dolores.",
  },
  {
    id: 2,
    name: "Kopi 2",
    img: "2.webp",
    price: 40000,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tempore consequatur odit minima nisi. Nostrum vero necessitatibus animi unde architecto doloremque sunt ea. Molestias nihil maxime, molestiae culpa nam cupiditate!",
  },
  {
    id: 3,
    name: "Kopi 3",
    img: "3.webp",
    price: 60000,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos iure vero reiciendis magnam, non iste? Aliquam odit, magnam ab harum nobis excepturi odio expedita assumenda veritatis numquam quam ullam exercitationem quos magni beatae recusandae earum? At, ullam distinctio? Quidem enim magnam quia corrupti, quos totam temporibus odio eos laborum! Eius.",
  },
  {
    id: 4,
    name: "Kopi 4",
    img: "4.webp",
    price: 80000,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae deleniti dolore tempore vel ipsa eos!",
  },
  {
    id: 5,
    name: "Kopi 5",
    img: "5.webp",
    price: 100000,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, quasi?",
  },
];


const Product = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product>({
    id: 0,
    name: "",
    img: "",
    price: 0,
    desc: "",
  });

  const [totalPrice, setTotalPrice] = useState<number>(0);

  const productSelected = (product: Product, e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedProduct(product);
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price);
  };

  const handleItemDetail = (productId: number, e: React.MouseEvent) => {
    e.preventDefault();
    const selected = productData.find(
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
          {productData.map((item, index) => (
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
