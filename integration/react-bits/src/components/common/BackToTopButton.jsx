import { Button, Icon } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";
import { toast } from 'sonner'

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const messages = [
    '🐴  Country roads, take me home!',
    '🚀  To infinity and beyond!',
    '🦾  Get to the choppa!',
    '🚕  Grove Street, home...',
    '🐉  Fus Ro Dah!',
    '🍄  The princess is in another castle!',
    '🦸‍♂️  Avengers, assemble!',
    '🗡️  It’s dangerous to go alone! Take this.',
    '📜  A wizard is never late.',
    '💍  Foul Tarnished, in search of the Elden Ring!',
    '🐊  See you later, alligator.',
    '🔥  Dracarys!'
  ];

  const getRandomMessage = (messages) => messages[Math.floor(Math.random() * messages.length)];

  const scrollToTop = () => {
    window.scrollTo(0, 0);
    toast(getRandomMessage(messages));
  }

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Button
      fontWeight={500}
      rounded='xl'
      py={4}
      right='2em'
      position='fixed'
      zIndex={98}
      transition="0.3s ease"
      className="back-to-top"
      opacity={visible ? 1 : 0}
      bottom={visible ? '2.5em' : '1em'}
      cursor={visible ? 'pointer' : 'default'}
      onClick={() => visible && scrollToTop()}
    >
      <Icon as={FiArrowUp} />
    </Button>
  );
};

export default BackToTopButton;
