import "./App.css";
import { useEffect, useReducer, useRef, useState } from "react";

function UseRef_text() {
  const [checked, setChecked] = useReducer((checked) => !checked, false);

  const txtTitle = useRef();
  const hexColor = useRef();

  const submit = (e) => {
    e.preventDefault();

    const title = txtTitle.current.value;
    const color = hexColor.current.value;

    alert(`${title},${color}`);
    txtTitle.current.value = "";
    hexColor.current.value = "";
  };

  return (
    <form onSubmit={submit}>
      <input ref={txtTitle} type="text" placeholder="color title ..." />
      <input ref={hexColor} type="color" />
      <button>ADD</button>
    </form>
  );
}

export default UseRef_text; //js satement to be able to use it outside of this code
