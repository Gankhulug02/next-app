import React from "react";
import { useRouter } from "next/router";

const About = () => {
  const asd = useRouter();
  const sda = asd.query.movie;
  const id: String = "1234";
  return (
    <div>
      About
      <h1>{sda}</h1>
    </div>
  );
};

export default About;
