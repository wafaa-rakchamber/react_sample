import './App.css';
import {useEffect, useState} from "react";

function App() {

  const [emotion, setEmotion] = useState("Happy");

  useEffect(()=> {
    console.log(`it's ${emotion} right now`)
  });

  return (
    <div className="App">
      <h1>{emotion} </h1>
      <button onClick={()=> setEmotion('Sad')}>Sad</button>
      <button onClick={()=> setEmotion('Excited')}>Excited</button>
      <button onClick={()=> setEmotion('Happy')}>Happy</button>
    </div>
  );
}

export default App; //js satement to be able to use it outside of this code 
