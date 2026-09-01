'use client';

import { useMemo, useState } from 'react';
import HeritageGrid from '@/components/organisms/HeritageGrid';

export default function SearchForm({ sites }) {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const searchTerm = query.trim().toLowerCase();

    if (!searchTerm) {
      return sites;
    }

    return sites.filter((site) =>
      `${site.name} ${site.location}`
        .toLowerCase()
        .includes(searchTerm)
    );
  }, [query, sites]);

  return (
    <>
      <div
        className="search"
        role="search"
        aria-label="Search heritage sites"
      >
        <label
          htmlFor="heritage-search"
          className="sr-only"
        >
          Search heritage sites
        </label>

        <input
          id="heritage-search"
          type="search"
          value={query}
          placeholder="Search by name or location"
          onChange={(event) => setQuery(event.target.value)}
          autoComplete="off"
        />
      </div>

      <p
        className="search-status"
        aria-live="polite"
        aria-atomic="true"
      >
        {query
          ? `${filtered.length} ${
              filtered.length === 1
                ? 'heritage site'
                : 'heritage sites'
            } found for "${query}".`
          : `${filtered.length} heritage ${
              filtered.length === 1
                ? 'site'
                : 'sites'
            } available.`}
      </p>

      {filtered.length > 0 ? (
        <HeritageGrid sites={filtered} />
      ) : (
        <div className="empty" role="status">
          <p>No heritage sites matched your search.</p>

          <p>
            Try searching by the site's name or location.
          </p>
        </div>
      )}
    </>
  );
}