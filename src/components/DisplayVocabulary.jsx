import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { getWord, validate } from "../services/dictionary";
import "../styles/DisplayVocabulary.css";

function DisplayVocabulary(props) {
  const [word, setWord] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const validateWord = async () => {
      try {
        const { data } = await getWord(id);
        setWord(data[0]);
        setLoading(false);
      } catch (ex) {
        navigate("/dictionary");
      }
    };

    validateWord();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <div className="container">
      {console.log(word)}
      <div className="m-3">
        <Container>
          <Col>
            <Row>
              <p className="fst-italic ps-2">
                View the word{" "}
                <span className="fw-bold highlight">{word.word}</span> in
                English
              </p>
            </Row>
            <Row>
              <span className="text-uppercase fs-2 fw-bold">{word.word}</span>
            </Row>
            <Row className="d-inline">
              {word.meanings.map((m, index) => (
                <span
                  key={index}
                  className="ps-1 ms-2 fst-italic"
                >{`${m.partOfSpeech}`}</span>
              ))}
            </Row>
            <div className="mt-2">
              Pronunciation:{" "}
              <span className="badge bg-light text-dark">{word.phonetic}</span>
            </div>
            <br />
            <hr className="main-divider" />
            <Row>
              <span className="fw-bold fs-3">Meanings</span>
            </Row>
            {word.meanings.map((m) =>
              m.definitions.map((d, i) => (
                <div key={i} className="mb-5">
                  <hr className="mb-2" />
                  <div className="meaning">
                    <span className="badge rounded-pill bg-yellow-primary me-2">
                      A{i + 1}:
                    </span>
                    <span className="fs-5">
                      {d.definition}
                      <br />
                      {d.example && (
                        <span className="fst-italic example">
                          Eg: {d.example}
                        </span>
                      )}
                    </span>
                  </div>
                </div>
              ))
            )}
          </Col>
        </Container>
      </div>
    </div>
  );
}

export default DisplayVocabulary;
