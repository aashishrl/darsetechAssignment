import React from "react";
import HeaderAndBanner from "../components/homePage/HeaderAndBanner";
import Partners from "../components/homePage/Partners";
import FitnessGoals from "../components/homePage/FitnessGoals";
import Programs from "../components/homePage/Programs";
import Services from "../components/homePage/Services";
import PlansAndClients from "../components/homePage/PlansAndClients";
import Footer from "../components/homePage/Footer";

function HomePage() {
  return (
    <>
      <HeaderAndBanner />
      <Partners />
      <FitnessGoals />
      <Programs />
      <Services />
      <PlansAndClients />
      <Footer />
    </>
  );
}

export default HomePage;
