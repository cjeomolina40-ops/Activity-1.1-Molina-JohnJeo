'use client';

import { useState } from 'react';
import HeritageGrid from '@/components/organisms/HeritageGrid';
import SearchForm from '@/components/molecules/SearchForm';
import { sites } from '@/data';

export default function Heritage() {
  const [query, setQuery] = useState('');

  const search = query.trim().toLowerCase();

  const filteredSites = search
    ? sites.filter((site) => {
        const name = site.name.toLowerCase();
        const location = site.location.toLowerCase();

        return (
          name.includes(search) ||
          location.includes(search)
        );
      })
    : sites;

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

          {filteredSites.length > 0 ? (
            <HeritageGrid sites={filteredSites} />
          ) : (
            <div className="empty" role="status">
              No heritage sites matched your search.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}