import './App.css';
import {useEffect, useState} from "react";



function App() {

    const [data, setData]= useState();
  const [username, setUserName] = useState("wafaa-rakchamber");
    useEffect(()=>{
      fetch(
        `http://api.github.com/users/${username}`
      ).then((response)=>response.json())
      .then(setData);
    },[]);

    if(data)
      return(
        <pre>{JSON.stringify(data,null,2)}</pre>
      );
      return 
        <h1>Data</h1>;
  
}

export default App; //js satement to be able to use it outside of this code 
