import React from "react";
import { Card, Form } from "react-bootstrap";
import Input from "./commons/Input";
import { Outlet, useParams } from "react-router-dom";

function FlashCard(props) {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
}

export default FlashCard;
