import React from "react";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";

const work = () => {
  return (
    <>
      <div>
        <Hero
          heading="My Work"
          message="This is my recent work travelling the world"
        />
        {/*  Here I passed  the portfolio component to describe my work*/}
        <Portfolio />
      </div>
    </>
  );
};

export default work;
