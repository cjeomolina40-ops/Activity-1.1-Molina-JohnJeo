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
    <main>
      <section className="page-head">
        <div className="container">
          <h1>Heritage Sites</h1>
          <p>
            Browse destinations featured in the Pangasinan Heritage Digital Showcase.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SearchForm onSearch={setQuery} />

          {filtered.length ? (
            <HeritageGrid sites={filtered} />
          ) : (
            <div className="empty">No heritage sites matched your search.</div>
          )}

          <div style={{ marginTop: 40 }}>
            {sites.map((site) => (
              <article
                id={site.id}
                key={site.id}
                className="detail"
                style={{ marginBottom: 50 }}
              >
                <img src={site.image} alt={site.alt} loading="lazy" />
                <div className="detail-box">
                  <h2>{site.name}</h2>
                  <p className="location">{site.location}</p>
                  <p>{site.description}</p>
                  <p>
                    Visitors are encouraged to check current local tourism
                    guidance, opening information, and safety advisories before traveling.
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
