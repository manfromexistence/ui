import { Flex, Text } from "@chakra-ui/react";
import FadeContent from "../../content/Animations/FadeContent/FadeContent";
import LandingMarquee from "./LandingMarquee";

const LandingTestimonials = () => (
  <>
    <FadeContent blur>
      <Flex w="100%" justifyContent="center" alignItems="center" direction="column" mt="4em">
        <Text
          textAlign="center"
          lineHeight={1.6}
          fontSize="clamp(1.2rem, 4vw, 3rem)"
        >
          Here&apos;s what others are saying
        </Text>
        <Text
          textAlign="center"
          maxW={{ base: "25ch", sm: "100%" }}
          lineHeight={1.6}
          fontSize="clamp(1rem, 2vw, 1.2rem)"
          letterSpacing="-0.5px"
        >
          They think React Bits is cool, maybe you will too!
        </Text>
      </Flex>
      <LandingMarquee />
    </FadeContent>
  </>
);

export default LandingTestimonials;