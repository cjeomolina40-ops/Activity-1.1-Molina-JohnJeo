
import HeritageGrid from '@/components/organisms/HeritageGrid';
import SearchForm from '@/components/molecules/SearchForm';
import { sites } from '@/data';

export default function Heritage() {
  return (
    <main id="main-content">
      {/* Page Header */}
      <header className="page-head">
        <div className="container">
          <h1>Heritage Sites</h1>

          <p id="page-description">
            Browse destinations featured in the Pangasinan Heritage Digital
            Showcase.
          </p>
        </div>
      </header>

      {/* Heritage Sites */}
      <section
        className="section"
        aria-labelledby="heritage-sites-heading"
      >
        <div className="container">
          <h2 id="heritage-sites-heading" className="sr-only">
            Browse and search heritage sites
          </h2>

          {/* Interactive search is isolated inside SearchForm */}
          <SearchForm sites={sites} />

          {/* Featured/searchable heritage sites */}
          <HeritageGrid sites={sites} />

          {/* Detailed Information */}
          <section
            className="heritage-details"
            aria-labelledby="heritage-details-heading"
          >
            <h2
              id="heritage-details-heading"
              className="sr-only"
            >
              Heritage site details
            </h2>

            {sites.map((site) => (
              <article
                id={site.id}
                key={site.id}
                className="detail"
                aria-labelledby={`${site.id}-heading`}
              >
                <img
                  src={site.image}
                  alt={site.alt || `Photo of ${site.name}`}
                  loading="lazy"
                  width="800"
                  height="500"
                />

                <div className="detail-box">
                  <h3 id={`${site.id}-heading`}>
                    {site.name}
                  </h3>

                  <p className="location">
                    <span className="sr-only">
                      Location:
                    </span>{' '}
                    {site.location}
                  </p>

                  <p>{site.description}</p>

                  <p>
                    Visitors are encouraged to check current
                    local tourism guidance, opening information,
                    and safety advisories before traveling.
                  </p>
                </div>
              </article>
            ))}
          </section>
        </div>
      </section>
    </main>
  );
}

