import React from "react";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import OurProjects from "./components/OurProjects/OurProjects";
import CaseStudy from "./components/CaseStudy/CaseStudy";
import WorkWith from "./components/WorkWith/WorkWith";
import OurClients from "./components/OurClients/OurClients";
import OurStories from "./components/OurStories/OurStories";
const Home = () => {
  return (
    <>
      <div className=" min-h-screen centered-container ">
        <Hero />
        <Services />
        <OurProjects />
        <CaseStudy />
        {/* <WorkWith/> */}
        <OurClients />
        <OurStories />
      </div>
    </>
  );
};

export default Home;
