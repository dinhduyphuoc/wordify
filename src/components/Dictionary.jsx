import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dictionary.css";

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
    <div className="container">
      <form>
        <div className="form-group">
          <div className="label-wrapper">
            <label className="label" htmlFor="exampleInputEmail1">
              Add your first vocabularies now
            </label>
          </div>
          <input
            className="form-control"
            placeholder="Search for a vocabulary..."
            onChange={(e) => handleChange(e.target.value)}
          />
          <div className="btn-wrapper">
            <button onClick={handleSubmit} className="btn btn-primary">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Dictionary;
