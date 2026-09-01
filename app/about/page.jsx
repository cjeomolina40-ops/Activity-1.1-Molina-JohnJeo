export default function About() {
  return (
    <main>
      <section className="page-head">
        <div className="container">
          <h1>About the Project</h1>
          <p>
            A sample implementation for the Pangasinan Provincial Tourism Office digital initiative.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="detail-box">
            <h2>Project Goals</h2>
            <p>
              The showcase is designed around resilience, accessibility,
              maintainability, and high performance. It uses a component-based
              React architecture and Next.js static export so the content can be
              deployed as a modern static website.
            </p>

            <div className="info-grid">
              <div className="info">
                <h3>Framework</h3>
                <p>React + Next.js 14 App Router</p>
              </div>
              <div className="info">
                <h3>Design System</h3>
                <p>Brad Frost Atomic Design: atoms, molecules, and organisms.</p>
              </div>
              <div className="info">
                <h3>Accessibility</h3>
                <p>Designed with WCAG 2.1 AA principles in mind.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
