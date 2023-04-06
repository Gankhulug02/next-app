import React from "react";
import { useRouter } from "next/router";

const About = () => {
  const asd = useRouter();
  const id = asd.query.movie;
  return (
    <div>
      About
      <h1>{id}</h1>
    </div>
  );
};

export default About;
