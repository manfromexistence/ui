import { createContext, useState } from 'react';
import SearchDialog from '../../common/SearchDialog';

export const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const openSearch = () => setSearchOpen(true);
  const closeSearch = () => setSearchOpen(false);
  const toggleSearch = () => setSearchOpen(prev => !prev);

  return (
    <SearchContext.Provider value={{ openSearch, closeSearch, toggleSearch, isSearchOpen }}>
      {children}
      <SearchDialog isOpen={isSearchOpen} onClose={closeSearch} />
    </SearchContext.Provider>
  );
}
