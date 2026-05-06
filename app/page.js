export default function Home() {
  return (
    <main style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px', color: '#1a1a1a' }}>Jacob's Craft Interiors</h1>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>Cabinets • Tiling • Interior Finishing • Custom Designs</p>
      </header>

      <section style={{ marginBottom: '50px' }}>
        <h2 style={{ fontSize: '1.8rem', borderBottom: '2px solid #d4a373', paddingBottom: '10px' }}>About Us</h2>
        <p style={{ lineHeight: '1.6', color: '#333' }}>
          We specialize in cabinets, tiling, TV units, and interior finishing. 
          Bringing craftsmanship and modern design to homes across KwaZulu-Natal.
        </p>
      </section>

      <section style={{ marginBottom: '50px' }}>
        <h2 style={{ fontSize: '1.8rem', borderBottom: '2px solid #d4a373', paddingBottom: '10px' }}>Our Services</h2>
        <ul style={{ lineHeight: '2', color: '#333' }}>
          <li>Kitchen & Bedroom Cabinets</li>
          <li>Tiling Services</li>
          <li>TV Units & Wall Panels</li>
          <li>Custom Interior Finishing</li>
        </ul>
      </section>

      <section style={{ textAlign: 'center', background: '#f5f5f5', padding: '30px', borderRadius: '8px' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>Contact</h2>
        <p style={{ fontSize: '1.1rem' }}>
          <strong>WhatsApp:</strong> 27XXXXXXXXX
        </p>
      </section>
    </main>
  )
}
