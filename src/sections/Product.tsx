import ModalProduct from "@/components/ModalProduct";

const Product = () => {
  const productData = [
    { id: 1, name: "Kopi 1", img: "/img/menu/1.webp", price: 20000 },
    { id: 2, name: "Kopi 2", img: "/img/menu/2.webp", price: 40000 },
    { id: 3, name: "Kopi 3", img: "/img/menu/3.webp", price: 60000 },
    { id: 4, name: "Kopi 4", img: "/img/menu/4.webp", price: 80000 },
    { id: 5, name: "Kopi 5", img: "/img/menu/5.webp", price: 100000 },
  ];
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
                <a href="#">
                  <i data-feather="shopping-cart"></i>
                </a>
                <a href="#" className="item-detail-button">
                  <i data-feather="eye"></i>
                </a>
              </div>

              <div className="product-image">
                <img src={item.img} alt={item.name} />
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
                  IDR 30K <span>IDR 55K</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ModalProduct />
    </>
  );
};

export default Product;
