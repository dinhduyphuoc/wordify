import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getWord, validate } from "../services/dictionary";

function DisplayVocabulary(props) {
  const [word, setWord] = useState([]);
  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const validateWord = async () => {
      try {
        const { data } = await getWord(id);
      } catch (ex) {
        navigate("/not-found");
      }
    };

    validateWord();
  }, []);

  return (
    <div>
      <p>{id}</p>
    </div>
  );
}

export default DisplayVocabulary;
