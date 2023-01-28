import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
  return (
    <div>
      <div className="homeContainer">
        <div className="homeCenter">
          <span className="material-icons">visibility</span>
          <h1>PHENOMENA</h1>
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate("/reports");
            }}
          >
            ENTER
          </button>
        </div>
      </div>
      <div className="photoCred">
        Photo by:
        <a href="https://unsplash.com/@sarahleejs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          {" "}
          Jongsun Lee
        </a>
      </div>
    </div>
  );
};

export default Home;
