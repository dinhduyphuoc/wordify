import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import cover from "../media/cover.mp4";
import { Button } from "react-bootstrap";

function HomePage(props) {
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/dictionary/`);
  };

  return (
    <div className="homepage">
      <div className="banner-content">
        <div className="overlay"></div>
        <video className="videoTag" src={cover} autoPlay loop muted />
        <div className="content">
          <h1 className="fw-bold title">Wordify</h1>
          <p>Approach more advanced English resources!</p>
          <Button onClick={handleSubmit} className="start">
            Start now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
