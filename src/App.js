import logo from "./logo.svg";
import "./App.css";
import {Router_page,Home,About}  from './Router_page';
import Test_use_state from './Test_use_state';
import UseRef_text from './UseRef_text';
import FormUsingState  from './FormUsingState';
import Fetching_data_with_hooks   from './Fetching_data_with_hooks';

import { useState , useEffect} from "react";


function App() {
  return (
    <div className="App">
     Test_use_state
     <Test_use_state/>
     UseRef_text
      <UseRef_text/>
      FormUsingState
      <FormUsingState/>
      Fetching_data_with_hooks
      <Fetching_data_with_hooks/>
    </div>
  );
}

export default App;
