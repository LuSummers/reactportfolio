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
        <p>I am a hardworking and passionate Full Stack Developer with strong organizational and communication skills. 
          I am a Medical Laboratory Scientist by day and a web developer by night. I am looking for an opportunity 
          where I can use my creativity to help others.</p>
          <br/>
          <p>I am ready to help your team achieve and surpass company goals!</p>
      </div>
      </div>
    </section>
  );
}

export default About;