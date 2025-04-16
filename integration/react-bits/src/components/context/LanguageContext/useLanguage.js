import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

export function useLanguage() {
  return useContext(LanguageContext);
}
