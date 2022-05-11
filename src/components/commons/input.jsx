import React from "react";
import { Form } from "react-bootstrap";

function Input({ name, value, label, placeholder, onChange }) {
  return (
    <Form.Group>
      <Form.Label htmlFor={name}>{label}</Form.Label>
      <Form.Control
        className="mb-3"
        id={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </Form.Group>
  );
}

export default Input;
