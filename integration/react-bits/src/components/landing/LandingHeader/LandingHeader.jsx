import { Flex, Text } from '@chakra-ui/react';
import { useMediaQuery } from 'react-haiku';
import { Link, useLocation } from 'react-router-dom';

import reactbitslogo from '../../../assets/logos/reactbits-logo.svg';
import github from '../../../assets/common/icon-github.svg';
import showcase from '../../../assets/common/icon-showcase.svg';
import docs from '../../../assets/common/icon-docs.svg';

import FadeContent from '../../../content/Animations/FadeContent/FadeContent';

import './LandingHeader.css';

const LandingHeader = () => {
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const { pathname } = useLocation();

  return (
    <header className="app-header">
      <nav className="header-content">
        <FadeContent blur>
          <Link className='logo' to="/">
            <img src={reactbitslogo} alt="The shape of a 3 point atom, representing a fraction of ReactJS" />
          </Link>
        </FadeContent>

        <Flex gap="8px" className='menu-items'>
          {!isMobile && (
            <FadeContent blur>
              <Text
                as="a"
                fontWeight={500}
                fontSize="16px"
                href="https://github.com/DavidHDev/react-bits"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} className='link-github' alt='minimal github octocat logo' /> GitHub
              </Text>
            </FadeContent>
          )}


          <FadeContent blur>
            <Text
              as={Link}
              fontWeight={500}
              fontSize="16px"
              to={pathname !== '/showcase' ? '/showcase' : '/text-animations/split-text'}
            >
              {pathname !== '/showcase' && <><img src={showcase} alt='gallery' /> Showcase</>}
              {pathname === '/showcase' && <><img src={docs} alt='gallery' /> Docs</>}
            </Text>
          </FadeContent>

          {!isMobile && pathname !== '/showcase' && (
            <FadeContent blur>
              <Text
                as={Link}
                fontWeight={500}
                fontSize="16px"
                to="/text-animations/split-text"
              >
                <img src={docs} alt='a page with some writing on it' /> Docs
              </Text>
            </FadeContent>
          )}
        </Flex>
      </nav>
    </header>
  );
}

export default LandingHeader;