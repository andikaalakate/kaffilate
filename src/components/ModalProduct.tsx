import { useEffect } from "react";

const ModalProduct = () => {
  useEffect(() => {
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
          <div className="modal-content">
            <img src="/img/menu/1.webp" alt="Product 1" />
            <div className="product-content">
              <h3>Coffee 1</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
                magni tempora ab! Ducimus, nemo voluptas corporis facere
                sapiente cumque cum perspiciatis ex, ratione officiis soluta.
              </p>
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
