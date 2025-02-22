import { useEffect, useState, useRef, useCallback } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Input,
  InputGroup,
  InputLeftElement,
  Box,
  Text
} from '@chakra-ui/react';
import { FiSearch, FiLayers, FiImage, FiType, FiCircle } from 'react-icons/fi';
import { AiOutlineEnter } from 'react-icons/ai';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../../constants/Categories';
import { useSearch } from '../context/SearchContext/useSearch';

const levenshtein = (a, b) => {
  const m = a.length, n = b.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : Math.min(dp[i - 1][j - 1] + 1, dp[i][j - 1] + 1, dp[i - 1][j] + 1);
    }
  }
  return dp[m][n];
};

const fuzzyMatch = (candidate, query) => {
  const lowerCandidate = candidate.toLowerCase();
  const lowerQuery = query.toLowerCase();
  if (lowerCandidate.includes(lowerQuery)) return true;
  const candidateWords = lowerCandidate.split(/\s+/);
  const queryWords = lowerQuery.split(/\s+/);
  return queryWords.every(qw =>
    candidateWords.some(cw => {
      const distance = levenshtein(cw, qw);
      const threshold = Math.max(1, Math.floor(qw.length / 3));
      return distance <= threshold;
    })
  );
};

function searchComponents(query) {
  if (!query || query.trim() === '') return [];
  const results = [];
  CATEGORIES.forEach(category => {
    const { name: categoryName, subcategories } = category;
    if (fuzzyMatch(categoryName, query)) {
      subcategories.forEach(component =>
        results.push({ categoryName, componentName: component })
      );
    } else {
      subcategories.forEach(component => {
        if (fuzzyMatch(component, query))
          results.push({ categoryName, componentName: component });
      });
    }
  });
  return results;
}

const AnimatedResult = ({ children, delay = 0, dataIndex, onMouseEnter, onClick }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.5, triggerOnce: false });
  return (
    <motion.div
      ref={ref}
      data-index={dataIndex}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
      transition={{ duration: 0.2, delay }}
      style={{ cursor: 'pointer' }}
    >
      {children}
    </motion.div>
  );
};

const categoryIconMapping = {
  "Text Animations": FiType,
  "Animations": FiCircle,
  "Components": FiLayers,
  "Backgrounds": FiImage,
};

const SearchDialog = ({ isOpen, onClose }) => {
  const [inputValue, setInputValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [topGradientOpacity, setTopGradientOpacity] = useState(0);
  const [bottomGradientOpacity, setBottomGradientOpacity] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [keyboardNav, setKeyboardNav] = useState(false);
  const resultsRef = useRef(null);
  const navigate = useNavigate();
  const { toggleSearch } = useSearch();

  useEffect(() => {
    if (isOpen) {
      const preventScroll = (e) => {
        if (resultsRef.current && resultsRef.current.contains(e.target)) return;
        e.preventDefault();
        return false;
      };
      window.addEventListener('wheel', preventScroll, { passive: false });
      window.addEventListener('touchmove', preventScroll, { passive: false });
      return () => {
        window.removeEventListener('wheel', preventScroll);
        window.removeEventListener('touchmove', preventScroll);
      };
    }
  }, [isOpen]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchValue(inputValue);
      setSelectedIndex(-1);
    }, 500);
    return () => clearTimeout(handler);
  }, [inputValue]);

  const results = searchComponents(searchValue);

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    setTopGradientOpacity(Math.min(scrollTop / 50, 1));
    const bottomDistance = scrollHeight - (scrollTop + clientHeight);
    setBottomGradientOpacity(scrollHeight <= clientHeight ? 0 : Math.min(bottomDistance / 50, 1));
  };

  useEffect(() => {
    if (resultsRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = resultsRef.current;
      setBottomGradientOpacity(scrollHeight <= clientHeight ? 0 : Math.min((scrollHeight - (scrollTop + clientHeight)) / 50, 1));
    }
  }, [results]);

  const handleSelect = useCallback((result) => {
    const formatForURL = (str) => str.replace(/\s+/g, '-').toLowerCase();
    const path = `/${formatForURL(result.categoryName)}/${formatForURL(result.componentName)}`;
    navigate(path);
    setInputValue('');
    setSearchValue('');
    setSelectedIndex(-1);
    onClose();
  }, [navigate, onClose]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!searchValue) return;
      if (e.key === "ArrowDown" || (e.key === "Tab" && !e.shiftKey)) {
        e.preventDefault();
        setKeyboardNav(true);
        setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
      } else if (e.key === "ArrowUp" || (e.key === "Tab" && e.shiftKey)) {
        e.preventDefault();
        setKeyboardNav(true);
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === "Enter") {
        if (selectedIndex >= 0 && selectedIndex < results.length) {
          e.preventDefault();
          handleSelect(results[selectedIndex]);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [results, searchValue, selectedIndex, handleSelect]);

  useEffect(() => {
    if (!keyboardNav || selectedIndex < 0 || !resultsRef.current) return;
    const container = resultsRef.current;
    const selectedItem = container.querySelector(`[data-index="${selectedIndex}"]`);
    if (selectedItem) {
      const extraMargin = 50; // Extra margin in pixels
      const containerScrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      const itemTop = selectedItem.offsetTop;
      const itemBottom = itemTop + selectedItem.offsetHeight;

      if (itemTop < containerScrollTop + extraMargin) {
        container.scrollTo({ top: itemTop - extraMargin, behavior: 'smooth' });
      } else if (itemBottom > containerScrollTop + containerHeight - extraMargin) {
        container.scrollTo({ top: itemBottom - containerHeight + extraMargin, behavior: 'smooth' });
      }
    }

    setKeyboardNav(false);
  }, [selectedIndex, keyboardNav]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        toggleSearch();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleSearch]);

  // Reset state when modal is closed
  useEffect(() => {
    if (!isOpen) {
      setInputValue('');
      setSearchValue('');
      setSelectedIndex(-1);
      setTopGradientOpacity(0);
      setBottomGradientOpacity(1);
    }
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" blockScrollOnMount returnFocusOnClose={false}>
      <ModalOverlay bg="rgba(0, 0, 0, 0.9)" />
      <ModalContent bg="#060606" border="1px solid #222" p={0} rounded="xl" mt="8em" mx={4}>
        <ModalBody p="1em">
          <InputGroup>
            <InputLeftElement pointerEvents="none" fontSize="xl">
              <FiSearch color="#999" />
            </InputLeftElement>
            <Input
              autoFocus
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Search the docs"
              variant="filled"
              bg="#060606"
              fontSize="lg"
              borderRadius="md"
              color="white"
              _focus={{ bg: '#060606', borderColor: 'transparent' }}
              _hover={{ bg: '#060606' }}
              _placeholder={{ color: '#999' }}
            />
          </InputGroup>
          <AnimatePresence>
            {searchValue && (
              <motion.div
                key="search-results"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: 'hidden' }}
              >
                <Box mt={3} borderTop="1px solid #222" position="relative">
                  <Box
                    ref={resultsRef}
                    maxH={400}
                    overflowY="auto"
                    onScroll={handleScroll}
                    sx={{
                      '&::-webkit-scrollbar': { width: '8px' },
                      '&::-webkit-scrollbar-track': { background: '#060606' },
                      '&::-webkit-scrollbar-thumb': { background: '#222', borderRadius: '4px' },
                      scrollbarWidth: 'thin',
                      scrollbarColor: '#222 #060606'
                    }}
                  >
                    {results.length > 0 ? (
                      results.map((result, index) => {
                        const CategoryIcon = categoryIconMapping[result.categoryName] || FiSearch;
                        const isSelected = index === selectedIndex;
                        return (
                          <AnimatedResult
                            key={`${result.categoryName}-${result.componentName}-${index}`}
                            delay={0.05}
                            dataIndex={index}
                            onMouseEnter={() => setSelectedIndex(index)}
                            onClick={() => handleSelect(result)}
                          >
                            <Box mt={index === 0 ? 8 : 2} mr=".6em" mb={2} p="1em" bg={isSelected ? "#222" : "#111"} rounded="xl" display="flex" alignItems="center">
                              <Box mr="16px">
                                <CategoryIcon size={24} color="#999" />
                              </Box>
                              <Box flex="1">
                                <Text fontWeight="bold" color="white">{result.componentName}</Text>
                                <Text fontSize="sm" color="#999">in {result.categoryName}</Text>
                              </Box>
                              <Box>
                                <AiOutlineEnter size={20} color="#999" />
                              </Box>
                            </Box>
                          </AnimatedResult>
                        );
                      })
                    ) : (
                      <Text textAlign="center" mt={3} color="#999" p="1em">
                        No results found for <span style={{ fontWeight: 900 }}>{searchValue}</span>
                      </Text>
                    )}
                  </Box>
                  <Box position="absolute" top={0} left={0} right={0} height="50px" bgGradient="linear(to-b, #060606, transparent)" pointerEvents="none" style={{ transition: 'opacity 0.3s ease', opacity: topGradientOpacity }} />
                  <Box position="absolute" bottom={0} left={0} right={0} height="100px" bgGradient="linear(to-t, #060606, transparent)" pointerEvents="none" style={{ transition: 'opacity 0.3s ease', opacity: bottomGradientOpacity }} />
                </Box>
              </motion.div>
            )}
          </AnimatePresence>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SearchDialog;
