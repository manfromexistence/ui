import { useContext } from 'react';
import { SearchContext } from './SearchContext';

export function useSearch() {
  return useContext(SearchContext);
}
