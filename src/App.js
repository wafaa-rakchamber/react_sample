import './App.css';
import {useEffect, useState} from "react";

function App() {

  const [checked, setChecked] = useState(false);


  return (
    <div className="App">
      <input 
      type="checkbox"
      value={checked}
      onChange={()=>
        setChecked((checked)=>! checked)
      }

      />

      <label>
        {checked? "checked" : "not checked"}
      </label>



    </div>
  );
}

export default App; //js satement to be able to use it outside of this code 
