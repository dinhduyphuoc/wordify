import React from "react";
import { Form } from "react-bootstrap";

function Input({ name, value, label, placeholder, onChange }) {
  return (
    <Form.Group>
      <Form.Label htmlFor={name}>{label}</Form.Label>
      <Form.Control
        value={value}
        id={name}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Form.Group>
  );
}

export default Input;
