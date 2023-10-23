import React from "react";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
const Home = () => {
  return (
    <>
      <div className="min-h-screen">
        <Hero />
        <Services />
      </div>
    </>
  );
};

export default Home;
