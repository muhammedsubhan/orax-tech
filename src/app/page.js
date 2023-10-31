import React from "react";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import OurProjects from "./components/OurProjects/OurProjects";
import CaseStudy from "./components/CaseStudy/CaseStudy";
import WorkWith from "./components/WorkWith/WorkWith";
import OurClients from "./components/OurClients/OurClients";
import OurStories from "./components/OurStories/OurStories";
import DiscussProject from "./components/DiscussProject/DiscussProject";
import LatestBlogs from "./components/LatestBlogs/LatestBlogs";
const Home = () => {
  return (
    <>
      <div className=" min-h-screen centered-container ">
        <Hero />
        <Services />
        <OurProjects />
        <CaseStudy />
        <OurClients />
        <OurStories />
        <DiscussProject />
        <WorkWith />
        <LatestBlogs />
      </div>
    </>
  );
};

export default Home;
