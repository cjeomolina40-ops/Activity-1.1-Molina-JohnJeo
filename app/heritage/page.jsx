
'use client';

import { useMemo, useState } from 'react';
import HeritageGrid from '@/components/organisms/HeritageGrid';

export default function SearchForm({ sites }) {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const search = query.trim().toLowerCase();

    if (!search) {
      return sites;
    }

    return sites.filter((site) => {
      return `${site.name} ${site.location}`
        .toLowerCase()
        .includes(search);
    });
  }, [query, sites]);

  const resultText = query
    ? `${filtered.length} ${
        filtered.length === 1
          ? 'heritage site'
          : 'heritage sites'
      } found for "${query}".`
    : `${filtered.length} heritage ${
        filtered.length === 1
          ? 'site'
          : 'sites'
      } available.`;

  return (
    <>
      <div
        role="search"
        aria-label="Search heritage sites"
        className="search"
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
          placeholder="Search by name or location"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          autoComplete="off"
          spellCheck="false"
        />
      </div>

      <p
        className="search-status"
        aria-live="polite"
        aria-atomic="true"
      >
        {resultText}
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

