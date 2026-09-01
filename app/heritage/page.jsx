
'use client';

import { useMemo, useState } from 'react';
import HeritageGrid from '@/components/organisms/HeritageGrid';
import SearchForm from '@/components/molecules/SearchForm';
import { sites } from '@/data';

export default function Heritage() {
  const [query, setQuery] = useState('');

  // Normalize the search query only when it changes.
  const normalizedQuery = useMemo(
    () => query.trim().toLowerCase(),
    [query]
  );

  // Only recalculate filtering when the query changes.
  const filtered = useMemo(() => {
    if (!normalizedQuery) {
      return sites;
    }

    return sites.filter((site) => {
      const name = site.name.toLowerCase();
      const location = site.location.toLowerCase();

      return (
        name.includes(normalizedQuery) ||
        location.includes(normalizedQuery)
      );
    });
  }, [normalizedQuery]);

  return (
    <main>
      <section className="page-head">
        <div className="container">
          <h1>Heritage Sites</h1>
          <p>
            Browse destinations featured in the Pangasinan Heritage Digital
            Showcase.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SearchForm onSearch={setQuery} />

          {filtered.length > 0 ? (
            <HeritageGrid sites={filtered} />
          ) : (
            <div className="empty">
              No heritage sites matched your search.
            </div>
          )}

          <div className="heritage-details">
            {sites.map((site) => (
              <article
                id={site.id}
                key={site.id}
                className="detail"
              >
                <img
                  src={site.image}
                  alt={site.alt}
                  width="800"
                  height="500"
                  loading="lazy"
                  decoding="async"
                />

                <div className="detail-box">
                  <h2>{site.name}</h2>

                  <p className="location">
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
          </div>
        </div>
      </section>
    </main>
  );
}

