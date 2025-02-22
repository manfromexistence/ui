import LandingHeader from "../components/landing/LandingHeader/LandingHeader";
import LandingHero from "../components/landing/LandingHero";
import LandingStats from "../components/landing/LandingStats";
import LandingDemo from "../components/landing/LandingDemo";
import LandingTestimonials from "../components/landing/LandingTestimonials";
import LandingFooter from "../components/landing/LandingFooter";

import { Helmet } from "react-helmet-async";

const LandingPage = () => {
  return (
    <section className="landing-wrapper">
      <Helmet>
        <title>React Bits - Animated UI Components For React</title>
      </Helmet>
      <LandingHeader />
      <LandingHero />
      <LandingStats />
      <LandingDemo />
      <LandingTestimonials />
      <LandingFooter />
    </section>
  );
};

export default LandingPage;
