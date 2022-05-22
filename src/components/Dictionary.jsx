import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dictionary.css";
import art from "../media/art.png";

function Dictionary(props) {
  let navigate = useNavigate();
  const [word, setVocab] = useState("");

  const handleChange = (text) => {
    setVocab(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/dictionary/${word.toLowerCase()}`);
  };

  return (
    <div>
      <form>
        <div className="container form-group">
          <input
            type="search"
            className="form-control mx-3"
            placeholder="Search for a vocabulary..."
            onChange={(e) => handleChange(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit}>
            <i className="fa fa-search" />
          </button>
        </div>
      </form>

      <div className="banner p-4">
        <div className="container pt-5">
          <h1 className="text-light">
            Our dictionary is <span className="markup p-1">Free</span>
          </h1>
          <h5>And will always be .</h5>
          <div className="art-wrapper mt-5">
            <div>
              <img className="art" src={art} alt="" />
            </div>
            <div className="description">
              <h1>
                <span className="markup p-1">Our sight</span>
              </h1>
              <br />
              <p>Hello</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dictionary;
