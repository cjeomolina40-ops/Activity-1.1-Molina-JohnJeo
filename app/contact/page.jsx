export default function Contact() {
  return (
    <main>
      {/* Hero Section */}
      <section className="page-head">
        <div className="container">
          <span className="eyebrow">Pangasinan Provincial Tourism Office</span>

          <h1>Contact Us</h1>

          <p>
            Have questions about visiting Pangasinan? Get in touch with the
            Provincial Tourism Office for tourism information and assistance.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section">
        <div className="container">
          <div className="detail-box">
            <span className="eyebrow">Get in Touch</span>

            <h2>Pangasinan Tourism Information</h2>

            <p>
              The Pangasinan Provincial Tourism Office is here to help visitors
              discover the province&apos;s destinations, attractions, cultural
              experiences, and tourism activities.
            </p>

            <div className="info-grid">
              <div className="info">
                <h3>📍 Office</h3>
                <p>
                  Pangasinan Provincial Tourism Office
                  <br />
                  Province of Pangasinan, Philippines
                </p>
              </div>

              <div className="info">
                <h3>📧 Email</h3>
                <p>
                  <a href="mailto:tourism@example.com">
                    tourism@example.com
                  </a>
                </p>
              </div>

              <div className="info">
                <h3>📞 Telephone</h3>
                <p>
                  Tourism Information Desk
                  <br />
                  Contact details to be provided
                </p>
              </div>

              <div className="info">
                <h3>🕐 Office Hours</h3>
                <p>
                  Monday – Friday
                  <br />
                  8:00 AM – 5:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visitor Assistance */}
      <section className="section">
        <div className="container">
          <div className="detail-box">
            <span className="eyebrow">Visitor Assistance</span>

            <h2>Plan Your Visit</h2>

            <p>
              Looking for places to visit, things to do, or local experiences
              in Pangasinan? Explore our tourism resources and discover what
              the province has to offer.
            </p>

            <div className="info-grid">
              <div className="info">
                <h3>🏝️ Destinations</h3>
                <p>
                  Discover beaches, waterfalls, historical sites, natural
                  attractions, and other destinations across Pangasinan.
                </p>
              </div>

              <div className="info">
                <h3>🍴 Local Experiences</h3>
                <p>
                  Experience Pangasinan through its food, culture, traditions,
                  festivals, and local communities.
                </p>
              </div>

              <div className="info">
                <h3>🗺️ Travel Information</h3>
                <p>
                  Find useful information to help you plan your trip and make
                  the most of your visit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="section">
        <div className="container">
          <div className="detail-box">
            <span className="eyebrow">Stay Connected</span>

            <h2>Follow Pangasinan Tourism</h2>

            <p>
              Stay updated with tourism announcements, events, destinations,
              and activities happening throughout the province.
            </p>

            <div className="info-grid">
              <div className="info">
                <h3>Facebook</h3>
                <p>
                  Official tourism social media page
                </p>
              </div>

              <div className="info">
                <h3>Instagram</h3>
                <p>
                  Discover Pangasinan through photos and stories.
                </p>
              </div>

              <div className="info">
                <h3>Website</h3>
                <p>
                  Visit the official provincial tourism website for verified
                  information and announcements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section">
        <div className="container">
          <div className="detail-box">
            <span className="eyebrow">Explore Pangasinan</span>

            <h2>Ready to Discover Pangasinan?</h2>

            <p>
              Start planning your journey and explore the many destinations,
              experiences, and stories that make Pangasinan special.
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