import './App.css';
import {useEffect, useState} from "react";

function App() {

  const [emotion, setEmotion] = useState("Happy");
  const [secondary, setSecondary] = useState("Tired");


  useEffect(()=> {
    console.log(`it's ${emotion} right now`)
  });
  
  useEffect(()=> {
    console.log(`it's ${secondary} right now`)
  },[secondary]);

  return (
    <div className="App">
      <h1>{emotion} </h1>
      <button onClick={()=> setEmotion('Sad')}>Sad</button>
      <button onClick={()=> setEmotion('Excited')}>Excited</button>
      <button onClick={()=> setEmotion('Happy')}>Happy</button>

      <h2>Current secondary emotion is {secondary}.</h2>
      <button onClick={()=> setSecondary('Grateful')}>Grateful</button>
      <button onClick={()=> setSecondary('Psyched')}>Psyched</button>
    </div>
  );
}

export default App; //js satement to be able to use it outside of this code 
