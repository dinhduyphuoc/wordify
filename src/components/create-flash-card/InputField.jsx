import React from "react";
import { Card } from "react-bootstrap";
import Input from "../commons/Input";

function InputField({ badge, className, header }) {
  return (
    <Card className="mb-5">
      <Card.Header>Flashcard #{header}</Card.Header>
      <Card.Body>
        <Input label="Question" />
        <Input label="Answer" />
      </Card.Body>
    </Card>
  );
}

export default InputField;
