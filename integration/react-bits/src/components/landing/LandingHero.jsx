import { Link, Spinner } from "@chakra-ui/react";
import { HeroType, PerspectiveGrid } from "../svg/SvgComponents";

import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-haiku";
import { useStars } from "../../hooks/useStars";
import { useActiveBeams } from "../../hooks/useActiveBeams";
import { useScrollVisibility } from "../../hooks/useScrollVisibility";

import AnimatedContent from "../../content/Animations/AnimatedContent/AnimatedContent";
import FadeContent from "../../content/Animations/FadeContent/FadeContent";
import HeroShowcase from "./HeroShowcase/HeroShowcase";

import githubIcon from "../../assets/common/icon-github.svg";
import starIcon from "../../assets/common/icon-star.svg";
import docsIcon from "../../assets/common/icon-docs.svg";


const LandingHero = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 1024px)");

  const stars = useStars();
  const activeBeams = useActiveBeams();
  const isVisible = useScrollVisibility();

  return (
    <div className="hero-content">
      <div className="type-logo">
        <AnimatedContent initialOpacity={isMobile ? 0 : 1} scale={0.8} reverse={isMobile}>
          <HeroType />
        </AnimatedContent>
      </div>

      <div className="hero-info">
        <HeroShowcase />
        <div className="headline">
          <div className="landing-bottom">
            <div className="divider"></div>
            <FadeContent blur duration={1000}>
              <p>
                Hand-picked animated components collection for{" "}
                <span>creative developers</span>
              </p>
            </FadeContent>
            <div className="divider"></div>
            <Link
              href="https://github.com/DavidHDev/react-bits"
              target="_blank"
              className="landing-button"
            >
              <img src={githubIcon} alt="GitHub Octocat" />
              Star on GitHub
              <div className="button-divider"></div>
              <img className="star-icon" src={starIcon} alt="Star Icon" />
              {stars ? (
                <FadeContent blur>{stars}</FadeContent>
              ) : (
                <Spinner boxSize={3} />
              )}
            </Link>
          </div>
          <div
            className="landing-button docs-button"
            onClick={() => navigate("/text-animations/split-text")}
          >
            <img src={docsIcon} alt="Docs Icon" /> Read Docs
          </div>
        </div>
      </div>

      <div className="perspective-grid">
        <PerspectiveGrid activeBeams={activeBeams} />
      </div>

      <div
        className="scroll-indicator"
        style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.3s ease" }}
      ></div>
    </div>
  );
};

export default LandingHero;