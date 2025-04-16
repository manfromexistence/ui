import { useNavigate } from 'react-router-dom';

import Magnet from '../../../content/Animations/Magnet/Magnet';
import AnimatedContent from '../../../content/Animations/AnimatedContent/AnimatedContent';
import Squares from '../../../content/Backgrounds/Squares/Squares';
import Waves from '../../../content/Backgrounds/Waves/Waves';
import LetterGlitch from '../../../content/Backgrounds/LetterGlitch/LetterGlitch';

import arrow from '../../../assets/common/icon-arrow.svg';
import './HeroShowcase.css';
import MetaBalls from '../../../content/Animations/MetaBalls/MetaBalls';

const HeroShowcase = () => {
  const navigate = useNavigate();

  return (
    <nav className="component-nav-container">
      <AnimatedContent reverse initialOpacity={0}>
        <div className="circle feat-1" onClick={() => navigate('/animations/meta-balls')}>
          <MetaBalls color='#ff87b2' cursorBallColor='#ff87b2' />
        </div>
      </AnimatedContent>
      <AnimatedContent reverse initialOpacity={0}>
        <div className="square feat-2" onClick={() => navigate('/backgrounds/waves')}>
          <Waves lineColor='#ff9346' xGap={8} yGap={8} />
        </div>
      </AnimatedContent>
      <AnimatedContent reverse initialOpacity={0}>
        <div className="circle link" onClick={() => navigate('/text-animations/split-text')}>
          <Magnet padding={25}>
            <div className="docs-link">
              <img src={arrow} alt="arrow pointing diagonally to the upper right corner" />
              <p>Browse Docs</p>
            </div>
          </Magnet>
        </div>
      </AnimatedContent>
      <AnimatedContent reverse initialOpacity={0}>
        <div className="square feat-3" onClick={() => navigate('/backgrounds/letter-glitch')}>
          <LetterGlitch
            glitchSpeed={10}
            centerVignette={false}
            outerVignette={true}
            smooth={true}
          />
        </div>
      </AnimatedContent>
      <AnimatedContent reverse initialOpacity={0}>
        <div className="circle feat-4" onClick={() => navigate('/backgrounds/squares')}>
          <Squares speed={0.2} borderColor='#ffee51' hoverFillColor='#ffee51' />
        </div>
      </AnimatedContent>
    </nav>
  );
}

export default HeroShowcase;