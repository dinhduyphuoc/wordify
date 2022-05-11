import React, { useState } from "react";
import { Form, Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";
import "../../styles/CreateFlashCard.css";
import Input from "../commons/Input";
import InputField from "./InputField";

const format = {
  title: "",
  description: "",
  questions: [],
};

function CreateFlashCard(props) {
  const [fieldNumber, setFieldNumber] = useState(4);
  const [cards, setCards] = useState(format);

  const handleChange = (attr, value) => {
    const data = { ...cards };
    data[attr] = value;
    setCards(data);
  };

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col className="mt-5" md={4}>
            <h3>Create a new card set</h3>
            <Card style={{ backgroundColor: "transparent" }}>
              <Card.Body>
                <Form>
                  <Input
                    label="Title"
                    value={cards.title}
                    placeholder={"Enter a title"}
                    onChange={(e) => handleChange("title", e.target.value)}
                  />
                  <Input
                    label="Description"
                    value={cards.description}
                    placeholder={"Enter description"}
                    onChange={(e) =>
                      handleChange("description", e.target.value)
                    }
                  />
                  <Button
                    onClick={() => console.log(cards)}
                    variant="outline-light mt-2"
                  >
                    Create new flashcard
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md={1}></Col>
          <Col className="mt-5" md={7}>
            {[...Array(fieldNumber)].map((e, i) => (
              <InputField key={i} xs={{ margin: "2em" }} header={i + 1} />
            ))}
          </Col>
        </Row>
      </Container>
      <button onClick={() => scroll.scrollToTop()}>Click me</button>
    </React.Fragment>
  );
}

export default CreateFlashCard;
