import React from 'react';
// import coverImage from '../../assets/cover/cover-image.jpg';
import Portrait from "../../assets/images/lu.jpg";


function About() {
  return (
    <section className="home my-5">
      <div className="title">
        <h2>Hi, I'm Lulu Summers</h2>
      </div>
  <div>
      <div id ="picture" className="portrait">
        <img
          src={Portrait} style={{ width: "auto" }}
          alt="self portrait"
        />
      </div>
      <div id="info">
        <p>LOREM!</p>
      </div>
      </div>
    </section>
  );
}

export default About;