import HeritageGrid from '@/components/organisms/HeritageGrid';
import Button from '@/components/atoms/Button';
import { sites } from '@/data';

export default function Home() {
  const featuredSites = sites.slice(0, 3);

  return (
    <main id="main-content">

      {/* =========================
          HOME / HERO
      ========================= */}

      <section
        id="home"
        className="hero"
        aria-labelledby="home-heading"
      >
        <div className="container">

          <span className="eyebrow">
            The Pangasinan Heritage Digital Showcase
          </span>

          <h1 id="home-heading">
            Discover the stories, places, and culture of Pangasinan.
          </h1>

          <p>
            A lightweight, mobile-first tourism showcase designed to make
            heritage information easy to explore—even on limited mobile data.
          </p>

          <div className="actions">

            <Button href="#heritage">
              Explore Heritage
            </Button>

            <Button
              href="#about"
              variant="secondary"
            >
              About the Project
            </Button>

          </div>

        </div>
      </section>


      {/* =========================
          HERITAGE
      ========================= */}

      <section
        id="heritage"
        className="section"
        aria-labelledby="heritage-heading"
      >
        <div className="container">

          <h2 id="heritage-heading">
            Featured Heritage Sites
          </h2>

          <p className="section-intro">
            Explore selected destinations and cultural landmarks across
            Pangasinan.
          </p>

          <HeritageGrid sites={featuredSites} />

        </div>
      </section>


      {/* =========================
          PROJECT FEATURES
      ========================= */}

      <section
        className="section"
        aria-labelledby="features-heading"
      >
        <div className="container">

          <h2
            id="features-heading"
            className="sr-only"
          >
            Project Features
          </h2>

          <div className="info-grid">

            <div className="info">
              <h3>
                Mobile-First
              </h3>

              <p>
                Responsive layouts prioritize smartphone users and adapt
                to larger screens.
              </p>
            </div>


            <div className="info">
              <h3>
                Accessible
              </h3>

              <p>
                Semantic HTML, keyboard-friendly controls, readable text,
                and descriptive image alternatives support inclusive use.
              </p>
            </div>


            <div className="info">
              <h3>
                Lightweight
              </h3>

              <p>
                Static pages and reusable components reduce unnecessary
                network requests and support fast loading.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =========================
          ABOUT
      ========================= */}

      <section
        id="about"
        className="section about-section"
        aria-labelledby="about-heading"
      >
        <div className="container">

          <div className="detail-box">

            <h2 id="about-heading">
              About the Project
            </h2>

            <p>
              The Pangasinan Heritage Digital Showcase is a lightweight
              digital initiative focused on making local heritage,
              history, culture, and tourism information easier to discover.
            </p>

            <p>
              The project emphasizes accessibility, maintainability,
              mobile-first design, and performance for visitors using
              different devices and network conditions.
            </p>

            <div className="info-grid">

              <div className="info">
                <h3>
                  Framework
                </h3>

                <p>
                  React + Next.js App Router
                </p>
              </div>


              <div className="info">
                <h3>
                  Design System
                </h3>

                <p>
                  Atomic Design using atoms, molecules, and organisms.
                </p>
              </div>


              <div className="info">
                <h3>
                  Accessibility
                </h3>

                <p>
                  Built with WCAG 2.1 AA principles in mind.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================
          CONTACT
      ========================= */}

      <section
        id="contact"
        className="section contact-section"
        aria-labelledby="contact-heading"
      >
        <div className="container">

          <div className="detail-box">

            <h2 id="contact-heading">
              Contact
            </h2>

            <p>
              Interested in Pangasinan heritage and tourism?
              Get in touch with the project team for more information.
            </p>

            <div className="actions">

              <Button href="mailto:tourism@example.com">
                Contact the Project
              </Button>

              <Button
                href="#home"
                variant="secondary"
              >
                Back to Top
              </Button>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}