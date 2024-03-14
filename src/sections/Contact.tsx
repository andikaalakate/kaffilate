const Contact = () => {
  return (
    <>
      <section id="contact" className="contact">
        <h2>
          <span>Kontak</span> Kami
        </h2>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, modi.
        </p>

        <div className="row">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15927.245235454942!2d98.7754818!3d3.630521!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303135adf653a451%3A0xde7d11dbf03a4d4c!2sAndika%20Alakate!5e0!3m2!1sid!2sid!4v1702576249877!5m2!1sid!2sid"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="map"
          ></iframe>

          <form autoComplete="off">
            <div className="input-group">
              <i data-feather="user"></i>
              <input type="text" placeholder="Nama" />
            </div>
            <div className="input-group">
              <i data-feather="mail"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-group">
              <i data-feather="phone"></i>
              <input type="tel" placeholder="No HP" />
            </div>
            <button type="submit" className="btn">
              Kirim Pesan
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
