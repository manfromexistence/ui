import { useEffect, useState } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Helmet } from "react-helmet-async";

import Confetti from 'react-confetti';
import Header from "../components/landing/LandingHeader/LandingHeader";
import FadeContent from "../content/Animations/FadeContent/FadeContent";
import logo from "../assets/logos/reactbits-logo.svg";

import '../css/showcase.css';

const ShowcasePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const showcaseItems = [
    {
      name: 'Devraj',
      url: 'https://devrajchatribin.com/about',
      using: '<CountUp />'
    },
    {
      name: 'Abdullah Shafiq',
      url: 'https://resume-tex.vercel.app',
      using: '<Squares />'
    },
    {
      name: 'Oscar Hernandez',
      url: 'https://oscarhernandez.vercel.app',
      using: '<LetterGlitch />'
    },
    {
      name: 'Afaq Razaq',
      url: 'https://www.evolvion.io/',
      using: '<SpotlightCard />'
    }
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
      setIsLoaded(true);
    }, 1000)
  }, [])

  return (
    <section className="showcase-wrapper">
      <Helmet>
        <title>React Bits - Showcase 🎉</title>
      </Helmet>
      <Header />
      {isLoaded && <Confetti run={window.innerWidth > 1000} recycle={false} colors={["#00d8ff"]} gravity={0.5} frameRate={60} numberOfPieces={100} />}

      <Flex>
        <FadeContent blur duration={1000}>
          <Text className="title">Built with</Text>
        </FadeContent>

        <FadeContent blur duration={1000}>
          <Image className="title-logo" src={logo} />
        </FadeContent>
      </Flex>
      <FadeContent blur duration={1000}>
        <Text className="sub-text">Discover how other developers are using React Bits to build awesome user experiences</Text>
      </FadeContent>

      <FadeContent blur duration={1000} className="fade-grid">
        <div className="grid-container">
          <Box as="a" href='https://docs.google.com/forms/d/e/1FAIpQLSdlzugJovfr5HPon3YAi8YYSSRuackqX8XIXSeeQmSQypNc7w/viewform?usp=dialog' target="_blank" rel='noreferrer' className="grid-item add-yours">
            <AiOutlinePlusCircle className="add-icon" />
            <Text>Submit New Project</Text>
          </Box>

          {showcaseItems.map((item, index) =>
            <Box as="a" href={item.url} rel="noreferrer" target="_blank" className="grid-item" key={item.url}>
              <img className="showcase-img" src={`https://davidhaz.com/react-bits-showcase/showcase-${index + 1}.webp`} alt={`Showcase website submitted by: ${item.name ? item.name : 'Anonymous'}`} />
              <div className="showcase-info">
                {item.name && <Text className="author">{item.name}</Text>}
                <Text className="using">Using {item.using}</Text>
              </div>
            </Box>
          )}

          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
        </div>
      </FadeContent>
    </section >
  );
}

export default ShowcasePage;