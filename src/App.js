import './App.css';
import {useEffect, useState} from "react";



function App() {

    const [data, setData]= useState();

    useEffect(()=>{
      fetch(
        `http://api.github.com/users/wafaa-rakchamber`
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
