import React from "react";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import OurProjects from "./components/OurProjects/OurProjects";
const Home = () => {
  return (
    <>
      <div className="min-h-screen centered-container ">
        <Hero />
        <Services />
        <OurProjects />
      </div>
    </>
  );
};

export default Home;
