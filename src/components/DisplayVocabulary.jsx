import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getWord } from "../services/dictionary";

function DisplayVocabulary(props) {
  const [word, setWord] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const validateWord = async () => {
      const { data } = await getWord(id);
      setWord(data);
    };

    validateWord();
  });
  return (
    <div>
      <p>{id}</p>
    </div>
  );
}

export default DisplayVocabulary;
