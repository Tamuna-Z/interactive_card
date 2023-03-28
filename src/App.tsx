import React from "react";
import "./App.css";
import {useState} from "react";
import Thank from './Thank';
import Card from './Card';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
// import {useState} from 'react';



function App() {
  const [confirmed,setConfirmed]=useState(false);
  const[name,setName]=useState('');
  
 
  return (
    <>
   {confirmed ? <SecondPage/>  :<FirstPage/>
    }
    </>
  )
}
   
   

export default App;
