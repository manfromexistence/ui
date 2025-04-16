import { Box, Button, Icon } from '@chakra-ui/react';
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { synthwave84 } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FiCopy, FiCheckSquare } from "react-icons/fi";

const CodeHighlighter = ({ language, codeString, showLineNumbers = true, maxLines = 25 }) => {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy text: ', error);
    }
  };

  const codeLines = codeString?.split('\n').length;
  const shouldCollapse = codeLines > maxLines;

  return (
    <Box position="relative" mb={5}>
      <Box
        position="relative"
        overflow="hidden"
        maxHeight={shouldCollapse && !expanded ? 'calc(1.2em * ' + maxLines + ')' : 'none'}
      >
        <SyntaxHighlighter
          language={language}
          style={synthwave84}
          showLineNumbers={showLineNumbers}
          className="code-highlighter"
        >
          {codeString || `// Oops! ☹️
// Looks like this is still work in progress, please check back later!`}
        </SyntaxHighlighter>

        {/* Overlay gradient when collapsed */}
        {shouldCollapse && !expanded && (
          <Box
            position="absolute"
            bottom={0}
            left={0}
            right={0}
            height="60%"
            background="linear-gradient(to bottom, transparent, #060606)"
          />
        )}

        {/* Toggle button */}
        {shouldCollapse && (
          <Button
            position="absolute"
            bottom={shouldCollapse && !expanded ? '.75rem' : '2.25rem'}
            right={shouldCollapse && !expanded ? '.75rem' : '1.75rem'}
            rounded="xl"
            height='2.5rem'
            fontWeight={500}
            backgroundColor="#060606"
            border="1px solid #222"
            color="white"
            _hover={{ backgroundColor: '#111' }}
            _active={{ backgroundColor: '#111' }}
            zIndex={2}
            onClick={() => setExpanded(prev => !prev)}
          >
            {expanded ? 'Collapse Snippet' : 'See Full Snippet'}
          </Button>
        )}
      </Box>

      <Button
        position="absolute"
        top={4}
        right={2.5}
        className="code-copy"
        rounded="xl"
        fontWeight={500}
        backgroundColor={copied ? '#3EFF5D' : '#060606'}
        border="1px solid #222"
        color={copied ? 'black' : 'white'}
        _hover={{ backgroundColor: copied ? '#7cff67' : '#111' }}
        _active={{ backgroundColor: '#00F0FF' }}
        transition="background-color 0.3s ease"
        onClick={handleCopy}
      >
        {copied
          ? <Icon as={FiCheckSquare} />
          : <Icon as={FiCopy} />
        }
      </Button>
    </Box>
  );
};

export default CodeHighlighter;
