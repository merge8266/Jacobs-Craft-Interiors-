"use client";

export default function Home() {
  return (
    <main>

      {/* NAVBAR */}
      <header className="header">
        <div className="logo">
  <img src="/logo.svg" alt="Jacob's Craft Interiors Logo" />
</div>
        <nav>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="overlay"></div>

        <div className="hero-content">
          <h1>Custom Interiors Built With Precision</h1>
          <p>
            Cabinets • Built-Ins • Wardrobes • TV Units
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">View Our Work</a>
            <a
              href="https://wa.me/27781234567"
              target="_blank"
              className="btn-secondary"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      
<section id="services" className="section dark">
  <h2>Our Services</h2>

  <div className="grid">

    <div className="service-card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')" }}>
      <div className="overlay">
        <h3>Kitchen Cabinets</h3>
      </div>
    </div>

    <div className="service-card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1616594039964-ae9021a400a0')" }}>
      <div className="overlay">
        <h3>Built-In Cupboards</h3>
      </div>
    </div>

    <div className="service-card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1615874959474-d609969a20ed')" }}>
      <div className="overlay">
        <h3>Wardrobes</h3>
      </div>
    </div>

    <div className="service-card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6')" }}>
      <div className="overlay">
        <h3>TV Units</h3>
      </div>
    </div>

  </div>
</section>

      {/* PROJECTS */}
      <section id="projects" className="section">
  <h2>Our Work</h2>

  <div className="grid">

    <div className="project" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')" }}>
      <div className="project-overlay">Modern Kitchen</div>
    </div>

    <div className="project" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1616594039964-ae9021a400a0')" }}>
      <div className="project-overlay">Luxury Wardrobe</div>
    </div>

    <div className="project" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6')" }}>
      <div className="project-overlay">TV Wall Unit</div>
    </div>

    <div className="project" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600210492493-0946911123ea')" }}>
      <div className="project-overlay">Built-In Cupboard</div>
    </div>

  </div>
</section>

      {/* CONTACT */}
      <section id="contact" className="section dark">
        <h2>Contact Us</h2>

        <p>📞 +27 71 0142506</p>
        <p>📧 info@jacobscraftinteriors.co.za</p>
        <p>📍 Durban - KZN</p>

        <div className="socials">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="https://wa.me/27781234567">WhatsApp</a>
        </div>

        <form className="form">
          <input placeholder="Your Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Tell us about your project"></textarea>
          <button>Request Quote</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Jacob's Craft Interiors</p>
      </footer>

    </main>
  );
        }
