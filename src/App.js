import { Link } from 'react-router-dom';
import './App.css';
import {useEffect, useState} from "react";

function Home(){
  return(
    <div>
      <nav>
        <Link to='/about'>About</Link>
        <Link to='/contactus'>Contact</Link>
      </nav>
      <h1>My Website</h1>
      
    </div>
  );
}
export function About(){
  return(
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contactus'>Contact</Link>
      </nav>
      <h1>About Us</h1>

      
    </div>
  );
}
export function Contact(){
  return(
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contactus'>Contact</Link>
      </nav>
      <h1>Contact US</h1>
      
    </div>
  );
}


export function App() {
      return  <Home />;
  
}

export default App; //js satement to be able to use it outside of this code 
