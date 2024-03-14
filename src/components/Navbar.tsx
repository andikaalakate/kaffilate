import { useEffect, useState } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          setActiveLink(`#${section.id}`);
        }
      });
    };

    const toggleMenu = (e: Event) => {
      const navbarNav = document.querySelector(".navbar-nav");
      const hamburgerMenu = document.querySelector("#hamburger-menu");

      if (navbarNav) {
        navbarNav.classList.toggle("active");
        e.preventDefault();
      }

      if (hamburgerMenu) {
        hamburgerMenu.classList.toggle("active");
        e.preventDefault();
      }
    };

    const closeMenu = (e: MouseEvent) => {
      const navbarNav = document.querySelector(".navbar-nav");
      const hamburger = document.querySelector("#hamburger-menu");
      const searchForm = document.querySelector(".search-form");
      const searchButton = document.querySelector("#search-button");
      const shoppingCart = document.querySelector(".shopping-cart");
      const shoppingButton = document.querySelector("#shopping-button");

      if (
        !navbarNav ||
        !hamburger ||
        !searchButton ||
        !searchForm ||
        !shoppingButton ||
        !shoppingCart
      ) {
        return;
      }

      if (
        !(e.target instanceof Node) ||
        (!hamburger.contains(e.target) && !navbarNav.contains(e.target))
      ) {
        navbarNav.classList.remove("active");
        hamburger.classList.remove("active");
      }

      if (
        !(e.target instanceof Node) ||
        (!searchButton.contains(e.target) && !searchForm.contains(e.target))
      ) {
        searchForm.classList.remove("active");
        searchButton.classList.remove("active");
      }

      if (
        !(e.target instanceof Node) ||
        (!shoppingButton.contains(e.target) && !shoppingCart.contains(e.target))
      ) {
        shoppingCart.classList.remove("active");
        shoppingButton.classList.remove("active");
      }
    };

    const toggleSearch = (e: Event) => {
      const searchForm = document.querySelector(".search-form");
      const searchButton = document.querySelector("#search-button");

      if (searchForm) {
        searchForm.classList.toggle("active");
        e.preventDefault();
      }

      if (searchButton) {
        searchButton.classList.toggle("active");
        e.preventDefault();
      }
    };

    const toggleShopping = (e: Event) => {
      const shoppingCart = document.querySelector(".shopping-cart");
      const shoppingButton = document.querySelector("#shopping-button");

      if (shoppingCart) {
        shoppingCart.classList.toggle("active");
        e.preventDefault();
      }

      if (shoppingButton) {
        shoppingButton.classList.toggle("active");
        e.preventDefault();
      }
    };

    const searchButton = document.querySelector("#search-button");
    const hamburgerMenu = document.querySelector("#hamburger-menu");
    const shoppingButton = document.querySelector("#shopping-button");

    hamburgerMenu?.addEventListener("click", toggleMenu);
    shoppingButton?.addEventListener("click", toggleShopping);
    searchButton?.addEventListener("click", toggleSearch);
    document.addEventListener("click", closeMenu);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      hamburgerMenu?.removeEventListener("click", toggleMenu);
      shoppingButton?.removeEventListener("click", toggleShopping);
      searchButton?.removeEventListener("click", toggleSearch);
      document.removeEventListener("click", closeMenu);
    };
  }, []);
  return (
    <>
      <nav className="navbar">
        <a href="#" className="navbar-logo">
          Kopi<span>Alakate</span>.
        </a>

        <div className="navbar-nav">
          <a
            href="#home"
            className={`${activeLink === "#home" ? "active" : null}`}
          >
            Home
          </a>
          <a
            href="#about"
            className={`${activeLink === "#about" ? "active" : null}`}
          >
            About
          </a>
          <a
            href="#menu"
            className={`${activeLink === "#menu" ? "active" : null}`}
          >
            Menu
          </a>
          <a
            href="#products"
            className={`${activeLink === "#products" ? "active" : null}`}
          >
            Product
          </a>
          <a
            href="#contact"
            className={`${activeLink === "#contact" ? "active" : null}`}
          >
            Contact
          </a>
        </div>

        <div className="navbar-extra">
          <a href="#" id="search-button">
            <i data-feather="search"></i>
          </a>
          <a href="#" id="shopping-button">
            <i data-feather="shopping-cart"></i>
          </a>
          <a href="#" id="hamburger-menu">
            <i data-feather="menu"></i>
          </a>
        </div>

        <div className="search-form">
          <input type="search" id="search-box" placeholder="cari disini" />
          <label htmlFor="search-box">
            <i data-feather="search"></i>
          </label>
        </div>

        <div className="shopping-cart">
          <div className="cart-item">
            <img src="img/menu/1.webp" alt="Product 1" />
            <div className="item-detail">
              <h3>Product 1</h3>
              <div className="item-price">IDR 30K</div>
            </div>
            <i data-feather="trash-2" className="remove-item"></i>
          </div>
          <div className="cart-item">
            <img src="img/menu/1.webp" alt="Product 1" />
            <div className="item-detail">
              <h3>Product 1</h3>
              <div className="item-price">IDR 30K</div>
            </div>
            <i data-feather="trash-2" className="remove-item"></i>
          </div>
          <div className="cart-item">
            <img src="img/menu/1.webp" alt="Product 1" />
            <div className="item-detail">
              <h3>Product 1</h3>
              <div className="item-price">IDR 30K</div>
            </div>
            <i data-feather="trash-2" className="remove-item"></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
