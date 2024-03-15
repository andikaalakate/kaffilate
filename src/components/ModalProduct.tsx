import { useEffect } from "react";
import feather from "feather-icons";

interface Product {
  id: number;
  name: string;
  img: string;
  price: number;
  desc: string;
}

interface ModalProductProps {
  product: Product;
}

const ModalProduct = ({
  product: { id, name, img, price, desc },
}: ModalProductProps) => {
  const rupiahConvert = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  useEffect(() => {
    feather.replace();
    
    const itemDetailModal =
      document.querySelector<HTMLDivElement>("#item-detail-modal");
    const itemDetailButtons = document.querySelectorAll(".item-detail-button");
    const itemCloseButton = document.querySelector(".close-icon");

    const modalDisplay = () => {
      if (itemDetailModal) {
        itemDetailModal.style.display = "flex";
      }
    };

    const modalClose = () => {
      if (itemDetailModal) {
        itemDetailModal.style.display = "none";
      }
    };

    itemDetailButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        modalDisplay();
      });
    });

    itemCloseButton?.addEventListener("click", (e) => {
      e.preventDefault();
      modalClose();
    });

    window.onclick = (e) => {
      if (e.target === itemDetailModal) {
        modalClose();
      }
    };
  }, []);
  return (
    <>
      <div className="modal" id="item-detail-modal">
        <div className="modal-container">
          <a href="#" className="close-icon">
            <i data-feather="x"></i>
          </a>
          <div className="modal-content" key={id}>
            <img src={`/img/menu/${img}`} alt={name} />
            <div className="product-content">
              <h3>{name}</h3>
              <p>
                {desc}
              </p>
              <div className="product-stars">
                <i data-feather="star" className="star-full"></i>
                <i data-feather="star"></i>
                <i data-feather="star"></i>
                <i data-feather="star"></i>
                <i data-feather="star"></i>
              </div>
              <div className="product-price">
                {rupiahConvert(price)}
              </div>
              <a href="#">
                <i data-feather="shopping-cart"></i>
                <span>Add to cart</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalProduct;
