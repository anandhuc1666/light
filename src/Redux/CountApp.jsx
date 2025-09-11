import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./CountSlice";

function CountApp() {
  const count = useSelector((state) => state.count.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>add</button>
      <button onClick={() => dispatch(decrement())}>sub</button>
    </div>
  );
}

export default CountApp;
