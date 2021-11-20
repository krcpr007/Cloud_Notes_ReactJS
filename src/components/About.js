import React from "react";
export const About = () => {
  return (
    <div className="container about-bg mt-5">
      <h1 className="text-center m-2" style={{ color: "#64ffda" }}>
        Welcome to iNote
      </h1>
      <div className="img-fluid">
        <img
          className="my-pic img-fluid d-flex justify-content-sm-center"
          src="https://media-exp1.licdn.com/dms/image/C4D03AQF27_okMDcJVw/profile-displayphoto-shrink_800_800/0/1621483176011?e=1642636800&v=beta&t=GYEZWyKByC0S6B9j0RUkoxug3Q8bq-imfwzGxtgon2A"
          alt="Developer pic"
          width="320px"
        />
      </div>
      <div className="About-intro mt-2 ">
        Hii, My name is
        <h1>
          Rajan Kumar.
          <br />I build things for the web.
        </h1>
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible, human-centered products at Upstatement.
      </div>
    </div>
  );
};
export default About;
