import logo from "./logo.svg";
import "./App.css";
import { useState , useEffect} from "react";


function Test_use_state() {
  const [emotion, setEmotion] = useState("Happy");
  const [secondary, setSecondary] = useState("Tired");

 useEffect(()=> {
  console.log(`its ${emotion} right now, or felling  ${secondary})`)
 },[emotion, secondary])
  return (
    <div className="App">
      <h1> {emotion} </h1>
      <button onClick={() => setEmotion("Sad")}>Make me sad</button>
      <button onClick={() => setEmotion("Excited")}>Make me Excited</button>
      <button onClick={() => setEmotion("Happy")}>Make me Happy</button>
      <br/>      
      <button onClick={() => setSecondary("Angry")}>Angry</button>
      <button onClick={() => setSecondary("Hangry")}>Hangry</button>
      <button onClick={() => setSecondary("Dead")}>Dead</button>
      
    </div>
  );
}

export default Test_use_state;
