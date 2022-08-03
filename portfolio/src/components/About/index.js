import React from 'react';
// import coverImage from '../../assets/cover/cover-image.jpg';
import Portrait from "../../assets/images/lu.jpg";


function About() {
  return (
    <section className="home my-5">
      <div className="title">
        <h2>Hi, I'm Lulu Summers</h2>
        <p>lorem!</p>
        {/* <Link to="portfolio">
          <button>View my Projects</button>
        </Link> */}
      </div>
      <div className="portrait">
        <img
          src={Portrait} style={{ width: "10%" }}
          alt="self portrait"
        />
      </div>
    </section>
  );
}

export default About;