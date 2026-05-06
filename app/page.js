"use client";

export default function Home() {
  return (
    <main>

      {/* NAVBAR */}
      <header className="header">
        <div className="logo">Jacob's Craft</div>
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
          <h1>Luxury Interiors. Crafted To Perfection.</h1>
          <p>
            Cabinets • Ceilings • TV Units • Tiling • Finishing
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

          <div className="card">
            <h3>Kitchen Cabinets</h3>
            <p>Modern, clean and custom-built kitchens.</p>
          </div>

          <div className="card">
            <h3>Wardrobes</h3>
            <p>Stylish fitted wardrobes for every home.</p>
          </div>

          <div className="card">
            <h3>TV Units</h3>
            <p>Luxury TV walls with slatted wood panels.</p>
          </div>

          <div className="card">
            <h3>Ceilings</h3>
            <p>Bulkheads, LED lighting & modern finishes.</p>
          </div>

          <div className="card">
            <h3>Tiling</h3>
            <p>Precision floor & wall tiling.</p>
          </div>

          <div className="card">
            <h3>Finishing</h3>
            <p>Final touches that elevate your space.</p>
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h2>Our Work</h2>

        <div className="grid">

          <div className="project">
            <div className="project-overlay">Modern Kitchen</div>
          </div>

          <div className="project">
            <div className="project-overlay">Luxury Bedroom</div>
          </div>

          <div className="project">
            <div className="project-overlay">TV Wall Unit</div>
          </div>

          <div className="project">
            <div className="project-overlay">Ceiling Design</div>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section dark">
        <h2>Contact Us</h2>

        <p>📞 +27 78 123 4567</p>
        <p>📧 info@jacobscraftinteriors.co.za</p>
        <p>📍 KwaMaphumulo / Durban</p>

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
