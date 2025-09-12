import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Props1() {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <h2>{text}</h2>
      <input
        type="text"
        value={text}
        placeholder="enter text"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => navigate(`/${text}`)}>send</button>
    </div>
  );
}

export default Props1;
