import Link from "next/link";

const projectGoals = [
  {
    title: "Promote Pangasinan",
    description:
      "Highlight the province's destinations, attractions, culture, heritage, cuisine, and local experiences.",
  },
  {
    title: "Accessibility",
    description:
      "Provide clear and accessible information for a wide range of visitors across desktop, tablet, and mobile devices.",
  },
  {
    title: "Sustainable Tourism",
    description:
      "Encourage responsible travel while supporting local communities and protecting Pangasinan's natural resources.",
  },
  {
    title: "Digital Innovation",
    description:
      "Use modern web technologies to create a fast, maintainable, accessible, and user-friendly tourism experience.",
  },
];

const technology = [
  {
    title: "Framework",
    description: "React and Next.js 14 with the App Router.",
  },
  {
    title: "Design System",
    description:
      "A component-based design system inspired by Atomic Design principles for consistency and maintainability.",
  },
  {
    title: "Accessibility",
    description:
      "Developed with WCAG 2.1 AA principles and accessible interface practices in mind.",
  },
  {
    title: "Performance",
    description:
      "Optimized for fast loading, responsive layouts, and reliable performance across desktop and mobile devices.",
  },
];

export default function About() {
  return (
    <main>
      {/* Hero */}
      <section className="page-head" aria-labelledby="about-title">
        <div className="container">
          <span className="eyebrow">
            Pangasinan Provincial Tourism Office
          </span>

          <h1 id="about-title">About the Project</h1>

          <p>
            Discover Pangasinan through a modern digital tourism platform
            designed to showcase the province&apos;s destinations, culture,
            heritage, and local experiences.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section" aria-labelledby="initiative-title">
        <div className="container">
          <div className="detail-box">
            <span className="eyebrow">Our Initiative</span>

            <h2 id="initiative-title">Connecting Travelers to Pangasinan</h2>

            <p>
              This digital tourism initiative provides visitors with an
              accessible and engaging way to explore Pangasinan. The platform
              brings together destinations, cultural attractions, local
              experiences, events, and tourism resources in one convenient
              place.
            </p>

            <p>
              Our goal is to promote Pangasinan as a welcoming destination
              while supporting sustainable tourism, local communities, and
              businesses throughout the province.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section" aria-labelledby="direction-title">
        <div className="container">
          <h2 id="direction-title" className="sr-only">
            Our Vision and Mission
          </h2>

          <div className="info-grid">
            <article className="info">
              <h3>Our Vision</h3>

              <p>
                A vibrant and sustainable Pangasinan recognized as a premier
                tourism destination where visitors experience meaningful
                journeys and communities benefit from responsible tourism.
              </p>
            </article>

            <article className="info">
              <h3>Our Mission</h3>

              <p>
                To promote the province&apos;s natural attractions, cultural
                heritage, local products, and tourism experiences through
                inclusive, innovative, and sustainable tourism development.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Project Goals */}
      <section className="section" aria-labelledby="goals-title">
        <div className="container">
          <div className="detail-box">
            <span className="eyebrow">What We Aim to Achieve</span>

            <h2 id="goals-title">Project Goals</h2>

            <p>
              The platform makes tourism information easier to discover while
              providing a strong digital foundation for future tourism services
              and content.
            </p>

            <div className="info-grid">
              {projectGoals.map((goal) => (
                <article className="info" key={goal.title}>
                  <h3>{goal.title}</h3>
                  <p>{goal.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="section" aria-labelledby="technology-title">
        <div className="container">
          <div className="detail-box">
            <span className="eyebrow">Built for the Future</span>

            <h2 id="technology-title">Technology &amp; Design</h2>

            <div className="info-grid">
              {technology.map((item) => (
                <article className="info" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section" aria-labelledby="cta-title">
        <div className="container">
          <div className="detail-box">
            <span className="eyebrow">Explore Pangasinan</span>

            <h2 id="cta-title">Your Journey Starts Here</h2>

            <p>
              From breathtaking landscapes and historic landmarks to local
              cuisine and vibrant communities, Pangasinan offers experiences
              waiting to be discovered.
            </p>

            <Link href="/destinations" className="btn">
              Explore Destinations
              <span aria-hidden="true"> →</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}