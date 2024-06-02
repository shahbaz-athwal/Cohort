import React, { useState } from 'react';
import useDebouncer from './useDebouncer';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebouncer(inputValue, 500); // 500 milliseconds debounce delay

  // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect

  return <>
    <div>Debounced value : {debouncedValue}</div>
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Search..."
    />
  </>;
};

export default SearchBar;