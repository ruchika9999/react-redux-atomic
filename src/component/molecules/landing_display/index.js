import React from "react";
import { Heading, Logo } from "./../../atoms";

const LandingDisplay = () => {
  return (
    <div>
      <Logo size={60} />
      <Heading level={6} grayScale={4} fontWeight={2}>
        React + Redux + ATOM
      </Heading>
    </div>
  );
};

export default LandingDisplay;
