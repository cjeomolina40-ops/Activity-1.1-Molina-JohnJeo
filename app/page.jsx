import HeritageGrid from '@/components/organisms/HeritageGrid';
import Button from '@/components/atoms/Button';
import { sites } from '@/data';

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <span className="eyebrow">The Pangasinan Heritage Digital Showcase</span>
          <h1>Discover the stories, places, and culture of Pangasinan.</h1>
          <p>
            A lightweight, mobile-first tourism showcase designed to make
            heritage information easy to explore—even on limited mobile data.
          </p>
          <div className="actions">
            <Button href="/heritage">Explore Heritage</Button>
            <Button href="/about" variant="secondary">
              About the Project
            </Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Featured Heritage Sites</h2>
          <p className="section-intro">
            Explore selected destinations and cultural landmarks across Pangasinan.
          </p>
          <HeritageGrid sites={sites.slice(0, 3)} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="info-grid">
            <div className="info">
              <h3>Mobile-First</h3>
              <p>
                Responsive layouts prioritize smartphone users and adapt to larger screens.
              </p>
            </div>
            <div className="info">
              <h3>Accessible</h3>
              <p>
                Semantic HTML, keyboard-friendly controls, readable text, and
                descriptive image alternatives support inclusive use.
              </p>
            </div>
            <div className="info">
              <h3>Lightweight</h3>
              <p>
                Static pages and reusable components reduce unnecessary network
                requests and support fast loading.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
