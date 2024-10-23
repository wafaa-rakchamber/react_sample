import './App.css';
import {useEffect, useReducer, useState} from "react";

function App() {

  const [checked, setChecked] = useReducer(
    (checked)=>! checked,
    false);


  return (
    <div className="App">
      <input 
      type="checkbox"
      value={checked}
      onChange={setChecked}

      />

      <label>
        {checked? "checked" : "not checked"}
      </label>



    </div>
  );
}

export default App; //js satement to be able to use it outside of this code 
