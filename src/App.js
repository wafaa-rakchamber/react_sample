import './App.css';
import {useEffect, useState} from "react";

function GitHubUser({name, location, avatar}){
  return(
    <div>
      <h1>{name}</h1>
      <p>{location}</p>
      <img src={avatar} height={150} alt={name} /> 
    </div>
  );
}

function App() {

    const [data, setData]= useState(null);
    const [username, setUserName] = useState("wafaa-rakchamber");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    
    useEffect(()=>{
      setLoading(true);
      fetch(
        `http://api.github.com/users/${username}`
      )
      .then((response)=>response.json())
      .then(setData)
      .then(()=> setLoading(false))
      .catch(setError);
    },[]);


    if(loading) return <h1>Loading ... </h1>;
    if(error)
      return <pre>{JSON.stringify(error)}</pre>;
    if(data)
      return (
      <GitHubUser
      name={data.name}
      location={data.location}
      avatar={data.avatar_url}
      />
    );
      return  null;
  
}

export default App; //js satement to be able to use it outside of this code 
