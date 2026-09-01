export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <section className="page-head">
        <div className="container">
          <span className="eyebrow">Pangasinan Provincial Tourism Office</span>

          <h1>About the Project</h1>

          <p>
            Discover Pangasinan through a modern digital tourism platform
            designed to showcase the province&apos;s destinations, culture,
            heritage, and local experiences.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section">
        <div className="container">
          <div className="detail-box">
            <span className="eyebrow">Our Initiative</span>

            <h2>Connecting Travelers to Pangasinan</h2>

            <p>
              This digital tourism initiative provides visitors with an
              accessible and engaging way to explore Pangasinan. The platform
              brings together information about destinations, cultural
              attractions, local experiences, events, and tourism resources in
              one convenient place.
            </p>

            <p>
              Our goal is to promote Pangasinan as a welcoming destination
              while supporting sustainable tourism, local communities, and
              businesses throughout the province.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <div className="info-grid">
            <div className="info">
              <h3>Our Vision</h3>
              <p>
                A vibrant and sustainable Pangasinan recognized as a premier
                tourism destination where visitors experience meaningful
                journeys and communities benefit from responsible tourism.
              </p>
            </div>

            <div className="info">
              <h3>Our Mission</h3>
              <p>
                To promote the province&apos;s natural attractions, cultural
                heritage, local products, and tourism experiences through
                inclusive, innovative, and sustainable tourism development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Goals */}
      <section className="section">
        <div className="container">
          <div className="detail-box">
            <span className="eyebrow">What We Aim to Achieve</span>

            <h2>Project Goals</h2>

            <p>
              The platform is designed to make tourism information easier to
              discover while providing a strong digital foundation for future
              tourism services and content.
            </p>

            <div className="info-grid">
              <div className="info">
                <h3>🌏 Promote Pangasinan</h3>
                <p>
                  Highlight the province&apos;s destinations, attractions,
                  culture, heritage, cuisine, and local experiences.
                </p>
              </div>

              <div className="info">
                <h3>♿ Accessibility</h3>
                <p>
                  Provide clear and accessible information that can be used by
                  a wide range of visitors across different devices.
                </p>
              </div>

              <div className="info">
                <h3>🌱 Sustainable Tourism</h3>
                <p>
                  Encourage responsible travel and support tourism practices
                  that benefit local communities and protect natural resources.
                </p>
              </div>

              <div className="info">
                <h3>📱 Digital Innovation</h3>
                <p>
                  Use modern web technologies to create a fast, maintainable,
                  and user-friendly tourism experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="section">
        <div className="container">
          <div className="detail-box">
            <span className="eyebrow">Built for the Future</span>

            <h2>Technology &amp; Design</h2>

            <div className="info-grid">
              <div className="info">
                <h3>Framework</h3>
                <p>React + Next.js 14 App Router</p>
              </div>

              <div className="info">
                <h3>Design System</h3>
                <p>
                  Component-based design inspired by Atomic Design principles
                  for consistency and maintainability.
                </p>
              </div>

              <div className="info">
                <h3>Accessibility</h3>
                <p>
                  Developed with WCAG 2.1 AA principles and accessible
                  interface practices in mind.
                </p>
              </div>

              <div className="info">
                <h3>Performance</h3>
                <p>
                  Optimized for fast loading, responsive layouts, and reliable
                  performance across desktop and mobile devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section">
        <div className="container">
          <div className="detail-box">
            <span className="eyebrow">Explore Pangasinan</span>

            <h2>Your Journey Starts Here</h2>

            <p>
              From breathtaking landscapes and historic landmarks to local
              cuisine and vibrant communities, Pangasinan offers experiences
              waiting to be discovered.
            </p>

            <a href="/destinations" className="btn">
              Explore Destinations
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}