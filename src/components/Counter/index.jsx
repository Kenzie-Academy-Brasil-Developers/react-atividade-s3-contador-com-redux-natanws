import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCounter, subCounter } from "../../store/modules/counter/actions";

export default function Counter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handlerAdd = () => {
    dispatch(addCounter(counter));
  };
  const handlerSub = () => {
    dispatch(subCounter(counter));
  };

  return (
    <div>
      <p>Contagem: {counter}</p>
      <button onClick={() => handlerAdd()}>+</button>
      <button onClick={() => handlerSub()}>-</button>
    </div>
  );
}
