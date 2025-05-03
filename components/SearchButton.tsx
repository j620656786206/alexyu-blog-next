'use client';

import { useState } from 'react';
import siteMetadata from '@/data/siteMetadata';

import { AlgoliaButton } from 'pliny/search/AlgoliaButton';
import { KBarButton } from 'pliny/search/KBarButton';

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-6 w-6 text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
    />
  </svg>
);

const SearchButton = () => {
  const [showSearch, setShowSearch] = useState(false);

  if (
    !siteMetadata.search ||
    (siteMetadata.search.provider !== 'algolia' &&
      siteMetadata.search.provider !== 'kbar')
  ) {
    return null;
  }

  const provider = siteMetadata.search?.provider;

  if (showSearch) {
    if (provider === 'algolia') {
      return (
        <AlgoliaButton aria-label="Search">
          <SearchIcon />
        </AlgoliaButton>
      );
    } else if (provider === 'kbar') {
      return (
        <KBarButton aria-label="Search">
          <SearchIcon />
        </KBarButton>
      );
    }
  }

  return (
    <button
      aria-label="Search"
      onClick={() => setShowSearch(true)}
      className="focus:outline-none"
    >
      <SearchIcon />
    </button>
  );
};

export default SearchButton;
