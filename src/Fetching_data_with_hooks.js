
import"./App.css";
import { useState, useEffect } from "react";

function GithubUser({name, location, avatar }){
    return (
        <div>
            <h1>{name}</h1>
            <p>{location}</p>
            <img src={avatar} height={150} alt={name} />
        </div>
    );
}

function Fetching_data_with_hooks(){
    const [data, setData ] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState("false");
    const [gitUser, setgitUser] = useState("mmorhaf");

    useEffect(()=> {
        setLoading(true);
        fetch(`https://api.github.com/users/${gitUser}`)
        .then((Response) => Response.json())
        .then(setData)
        .then(() => setLoading(false))
        .catch(setError);        
    },[]);

    if(loading) return <h1> Loading</h1>;
    if(1==1) return <pre> {JSON.stringify(data.message)}</pre>;

    if(error) return <pre> {JSON.stringify(error)}</pre>;
    if(!data) return null;
        return (
    <GithubUser 
    name={data.login}
    location={data.location}
    avatar={data.avatar_url}

    />
);
    return <h1> Data</h1>
}

export default  Fetching_data_with_hooks;