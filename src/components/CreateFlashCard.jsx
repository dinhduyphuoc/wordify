import React from "react";
import { Card, Form } from "react-bootstrap";
import Input from "./commons/input";
import { useParams } from "react-router-dom";

function CreateFlashCard(props) {
  return (
    <div className="container">
      <h3 className="mt-5">Create a new card set</h3>
      <Card style={{ backgroundColor: "transparent" }}>
        <Card.Body>
          <Form>
            <Input label="Hello" />
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CreateFlashCard;
