import React from "react";
import { useParams } from "react-router-dom";

function Pros2() {
  const { text } = useParams(); // "text" matches route param name
  return (
    <div>
        <h1>page 2</h1>
      <p>{text}</p>
    </div>
  );
}

export default Pros2;
