import React from "react";
import { Outlet, useParams } from "react-router-dom";

function FlashCard(props) {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
}

export default FlashCard;
