"use client";

export default function Home() {
  return (
    <main>

      {/* NAVBAR */}
      <header className="header">
        <div className="logo">Jacob's Craft Interiors</div>
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

          <div className="card">
            <h3>Kitchen Cabinets</h3>
            <p>Modern custom-built kitchen units.</p>
          </div>

          <div className="card">
            <h3>Built-In Cupboards</h3>
            <p>Durable and stylish built-ins for any space.</p>
          </div>

          <div className="card">
            <h3>Wardrobes</h3>
            <p>Fitted wardrobes designed for your lifestyle.</p>
          </div>

          <div className="card">
            <h3>TV Units</h3>
            <p>Modern TV stands and wall panel designs.</p>
          </div>

          <div className="card">
            <h3>Custom Woodwork</h3>
            <p>Unique designs crafted to your vision.</p>
          </div>

          <div className="card">
            <h3>Interior Finishing</h3>
            <p>Clean finishing touches that elevate your space.</p>
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
            <div className="project-overlay">Luxury Wardrobe</div>
          </div>

          <div className="project">
            <div className="project-overlay">TV Wall Unit</div>
          </div>

          <div className="project">
            <div className="project-overlay">Built-In Cupboard</div>
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
