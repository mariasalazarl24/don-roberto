import React, { useEffect } from 'react';
import './index.css';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-bg"></div>
          <div className="hero-overlay"></div>
          <div className="container">
            <div className="hero-content">
              <h1 className="heading-xl">Don Roberto</h1>
              <p className="hero-subtitle">La auténtica tradición criolla en San Borja. Disfruta de los mejores desayunos y sándwiches en un ambiente cálido y familiar.</p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="#menu" className="btn btn-primary">Ver Menú</a>
                <a href="#location" className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>Encuéntranos</a>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="section container">
          <div className="text-center" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="heading-lg">Nuestras Especialidades</h2>
            <p style={{ color: '#6B7280', maxWidth: '600px', margin: '0 auto' }}>
              Preparados con los ingredientes más frescos y la receta tradicional que nos caracteriza.
            </p>
          </div>

          <div className="grid">
            {/* Card 1 */}
            <div className="card animate-on-scroll">
              <div className="card-img-wrapper">
                <img src="/assets/hero_breakfast_1780075341338.png" alt="Desayuno Criollo" className="card-img" />
              </div>
              <div className="card-body">
                <h3 className="card-title">Desayuno Criollo</h3>
                <p className="card-text">Nuestro clásico irresistible: crujiente pan con chicharrón, tamal calientito y tu elección de café o jugo natural.</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="card-price">Recomendado</span>
                  <a href="https://wa.me/51999999999?text=Hola,%20quisiera%20pedir%20el%20Desayuno%20Criollo" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem', textDecoration: 'none' }}>Pedir</a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
              <div className="card-img-wrapper">
                <img src="/assets/chicharron_sandwich_1780075357991.png" alt="Sándwich Don Roberto" className="card-img" />
              </div>
              <div className="card-body">
                <h3 className="card-title">Sándwich Don Roberto</h3>
                <p className="card-text">Pan francés crujiente relleno de abundante chicharrón, camote frito y nuestra salsa criolla de la casa.</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="card-price">Favorito</span>
                  <a href="https://wa.me/51999999999?text=Hola,%20quisiera%20pedir%20el%20S%C3%A1ndwich%20Don%20Roberto" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem', textDecoration: 'none' }}>Pedir</a>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <div className="card-img-wrapper">
                <img src="/assets/salchipapa_1780075372741.png" alt="Salchipapa Especial" className="card-img" />
              </div>
              <div className="card-body">
                <h3 className="card-title">Salchipapa Especial</h3>
                <p className="card-text">Papas doradas al instante con una selección de embutidos premium, acompañadas de todas nuestras cremas.</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="card-price">Popular</span>
                  <a href="https://wa.me/51999999999?text=Hola,%20quisiera%20pedir%20la%20Salchipapa%20Especial" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem', textDecoration: 'none' }}>Pedir</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="section reviews-section">
          <div className="container reviews-container animate-on-scroll">
            <h2 className="heading-lg" style={{ marginBottom: '2rem' }}>Lo que dicen nuestros clientes</h2>
            <div className="rating-stars">★★★★★</div>
            <p className="review-text">
              "Excelente lugar para tomar un buen desayuno. El pan con chicharrón es espectacular y el servicio es muy rápido y amable. Definitivamente volveré."
            </p>
            <p style={{ fontWeight: '600', fontSize: '1.2rem' }}>- 4.5/5 Calificación General en Google</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="location" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="animate-on-scroll">
              <h3 className="heading-lg text-gradient" style={{ marginBottom: '1rem', fontFamily: 'Inter' }}>Don Roberto</h3>
              <p style={{ marginBottom: '1.5rem', maxWidth: '300px' }}>
                Tu punto de encuentro en San Borja para disfrutar de la mejor comida criolla y un ambiente acogedor.
              </p>
              <div className="delivery-badges">
                <div className="delivery-badge">🏍️ Rappi</div>
                <div className="delivery-badge">🛵 DiDi Food</div>
              </div>
            </div>

            <div className="animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
              <h4 className="footer-title">Ubicación</h4>
              <ul className="footer-list">
                <li>📍 Av. Aviación 3393</li>
                <li>🏙️ San Borja, Lima, Perú</li>
                <li>🚇 A pasos de la estación San Borja Sur</li>
              </ul>
            </div>

            <div className="animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <h4 className="footer-title">Horario</h4>
              <ul className="footer-list">
                <li>Lunes a Viernes: 7:00 AM - 10:00 PM</li>
                <li>Sábados y Domingos: 7:30 AM - 11:00 PM</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Don Roberto. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/51999999999?text=Hola,%20quisiera%20hacer%20un%20pedido" target="_blank" rel="noopener noreferrer" className="whatsapp-float">
        <svg viewBox="0 0 24 24" width="35" height="35" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
        </svg>
      </a>
    </>
  );
}

export default App;
