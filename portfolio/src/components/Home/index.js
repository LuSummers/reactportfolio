import React from 'react';
// import { Link } from "react-router-dom";
// import Portrait from "../../assets/images/profile_pic.jpg";

function Home() {
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
        {/* <img
          src={Portrait}
          alt="self portrait"
        /> */}
      </div>
    </section>
  );
}

export default Home;