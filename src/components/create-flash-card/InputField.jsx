import React from "react";
import { Card } from "react-bootstrap";
import Input from "../commons/Input";

function InputField({ badge, xs, header }) {
  return (
    <Card
      bg={badge}
      style={xs}
      text={badge === "light" ? "dark" : "white"}
      className="mb-2"
    >
      <Card.Header>Flashcard #{header}</Card.Header>
      <Card.Body>
        <Input label="Question" />
        <Input label="Answer" />
      </Card.Body>
    </Card>
  );
}

export default InputField;
