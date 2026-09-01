
'use client';

import { useState } from 'react';
import HeritageGrid from '@/components/organisms/HeritageGrid';
import SearchForm from '@/components/molecules/SearchForm';

export default function HeritageSearch({ sites }) {
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
  );
}

