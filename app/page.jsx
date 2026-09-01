

import HeritageGrid from '@/components/organisms/HeritageGrid';
import Button from '@/components/atoms/Button';
import { sites } from '@/data';

export default function Home() {
  // Only render the three featured sites on the homepage.
  const featuredSites = sites.slice(0, 3);

  return (
    <main id="main-content">
      {/* Hero */}
      <header className="hero">
        <div className="container">
          <p className="eyebrow">
            The Pangasinan Heritage Digital Showcase
          </p>

          <h1>
            Discover the stories, places, and culture of Pangasinan.
          </h1>

          <p>
            A lightweight, mobile-first tourism showcase designed to make
            heritage information easy to explore—even on limited mobile data.
          </p>

          <nav className="actions" aria-label="Homepage actions">
            <Button href="/heritage">
              Explore Heritage
            </Button>

            <Button href="/about" variant="secondary">
              About the Project
            </Button>
          </nav>
        </div>
      </header>

      {/* Featured Heritage */}
      <section
        className="section"
        aria-labelledby="featured-heading"
      >
        <div className="container">
          <h2 id="featured-heading">
            Featured Heritage Sites
          </h2>

          <p className="section-intro">
            Explore selected destinations and cultural landmarks across
            Pangasinan.
          </p>

          <HeritageGrid sites={featuredSites} />
        </div>
      </section>

      {/* Features */}
      <section
        className="section"
        aria-labelledby="features-heading"
      >
        <div className="container">
          <h2 id="features-heading">
            Why explore the showcase?
          </h2>

          <div className="info-grid">
            <article className="info">
              <h3>Mobile-First</h3>
              <p>
                Responsive layouts prioritize smartphone users and adapt to
                larger screens.
              </p>
            </article>

            <article className="info">
              <h3>Accessible</h3>
              <p>
                Semantic HTML, keyboard-friendly controls, readable text,
                and descriptive image alternatives support inclusive use.
              </p>
            </article>

            <article className="info">
              <h3>Lightweight</h3>
              <p>
                Static pages and reusable components reduce unnecessary
                network requests and support fast loading.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

