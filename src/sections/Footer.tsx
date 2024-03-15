const Footer = () => {
  return (
    <>
      <footer>
        <div className="socials">
          <a href="#">
            <i data-feather="instagram"></i>
          </a>
          <a href="#">
            <i data-feather="twitter"></i>
          </a>
          <a href="#">
            <i data-feather="facebook"></i>
          </a>
        </div>

        <div className="links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#products">Product</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="credit">
          <p>
            Created by{" "}
            <a href="https://github.com/andikaalakate">Andika Alakate</a>. |
            &copy; 2023.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
