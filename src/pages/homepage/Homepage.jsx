import SearchBar from "../../components/searchBar/SearchBar";
import "./homepage.scss";
import React from "react";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">
            Find Your Dream Home Using The Real Estate App
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi eaque
            delectus ratione neque, totam hic ducimus doloremque atque
            dignissimos earum amet sunt. Dolores, possimus placeat animi id
            alias inventore quasi.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Awaed Gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="background-image" />
      </div>
    </div>
  );
};

export default Homepage;
