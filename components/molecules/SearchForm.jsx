'use client';

import { useState } from 'react';

export default function SearchForm({ onSearch }) {
  const [value, setValue] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(value);
  }

  return (
    <form className="search" onSubmit={handleSubmit}>
      <label htmlFor="heritage-search" className="sr-only">
        Search heritage sites
      </label>
      <input
        id="heritage-search"
        type="search"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Search heritage sites..."
      />
      <button type="submit">Search</button>
    </form>
  );
}
