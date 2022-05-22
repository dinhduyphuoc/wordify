import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dictionary.css";
import art from "../media/art.png";
import art1 from "../media/art1.png";

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
              <img className="art-left" src={art} alt="" />
            </div>
            <div className="description">
              <h1>
                About <span className="markup p-1">Our sight</span>
              </h1>
              <br />
              <p className="">
                We are developing and providing free, lightweight English
                resources and products, where you can personally use for lingual
                enhancement. <br /> <br /> Free with ads, no spams, just pure
                knowledge.
              </p>
            </div>
          </div>
          <div className="art-wrapper-right mt-5">
            <div className="description-right">
              <h1>
                This is an <span className="markup p-1">Open-source</span>{" "}
                project
              </h1>
              <br />
              <p>
                We are using Free
                <span className="markup-link">
                  <a href="https://dictionaryapi.dev/">Dictionary API</a>
                </span>
                that provides open vocabularies API used in this website. <br />
                <br />
                If you want to have a look at this source, feel free to visit
                their site:{" "}
                <a
                  className="fst-italic text-warning"
                  href="https://dictionaryapi.dev/"
                >
                  Here
                </a>
                .
              </p>
            </div>
            <div>
              <img className="art-right" src={art1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dictionary;
