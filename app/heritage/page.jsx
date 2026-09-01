
'use client';

import { useState } from 'react';
import HeritageGrid from '@/components/organisms/HeritageGrid';
import SearchForm from '@/components/molecules/SearchForm';
import { sites } from '@/data';

export default function Heritage() {
  const [query, setQuery] = useState('');

  const filtered = sites.filter((site) =>
    `${site.name} ${site.location}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <main id="main-content">
      <header className="page-head">
        <div className="container">
          <h1>Heritage Sites</h1>
          <p id="page-description">
            Browse destinations featured in the Pangasinan Heritage Digital
            Showcase.
          </p>
        </div>
      </header>

      <section
        className="section"
        aria-labelledby="heritage-sites-heading"
      >
        <div className="container">
          <h2 id="heritage-sites-heading" className="sr-only">
            Browse and search heritage sites
          </h2>

          <div role="search" aria-label="Search heritage sites">
            <SearchForm onSearch={setQuery} />
          </div>

          {/* Announces search results to screen readers */}
          <p
            className="search-status"
            aria-live="polite"
            aria-atomic="true"
          >
            {query
              ? `${filtered.length} ${
                  filtered.length === 1 ? 'heritage site' : 'heritage sites'
                } found for "${query}".`
              : `${filtered.length} heritage ${
                  filtered.length === 1 ? 'site' : 'sites'
                } available.`}
          </p>

          {filtered.length > 0 ? (
            <HeritageGrid sites={filtered} />
          ) : (
            <div
              className="empty"
              role="status"
              tabIndex={-1}
            >
              <p>No heritage sites matched your search.</p>
              <p>
                Try searching by the site's name or location.
              </p>
            </div>
          )}

          <section
            className="heritage-details"
            aria-labelledby="heritage-details-heading"
          >
            <h2 id="heritage-details-heading" className="sr-only">
              Heritage site details
            </h2>

            {sites.map((site) => (
              <article
                id={site.id}
                key={site.id}
                className="detail"
                aria-labelledby={`${site.id}-heading`}
                style={{ marginBottom: 50 }}
              >
                <img
                  src={site.image}
                  alt={site.alt || `Photo of ${site.name}`}
                  loading="lazy"
                />

                <div className="detail-box">
                  <h3 id={`${site.id}-heading`}>{site.name}</h3>

                  <p className="location">
                    <span className="sr-only">Location: </span>
                    {site.location}
                  </p>

                  <p>{site.description}</p>

                  <p>
                    Visitors are encouraged to check current local tourism
                    guidance, opening information, and safety advisories
                    before traveling.
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

