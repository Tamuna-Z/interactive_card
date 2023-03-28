import React from "react";
import "./App.css";
import {useState} from "react";
import Card from './Card';
import thankComplete from './images/icon-complete.svg';
// import Thank from './Thank';
// import Card from './Card';
// import FirstPage from './FirstPage';
// import SecondPage from './SecondPage';
// import {useState} from 'react';



function App() {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [date, setDate] = useState("");
  const [cvc, setCvc] = useState();
  const [confirmed,setConfirmed]=useState(false);
  return(
    <div>
      
       <Card/>

       <div className="formContainer">
      <form className="form">
        <div className="inputName">
          <label>Cardholder Name</label>
          <input type="text"
           placeholder=" e.g Tamar Zurabashvili"
           value={name}
           onChange={(e)=>setName(e.target.value)}
            required 
            />
        </div>

        <div className="inputNumber">
          <label>Card Number</label>
          <input
            type="number"
            placeholder="e.g. 1234 5678 9123 0000"
            maxLength={19}
            value={cardNumber.replace(/\s/g, "")
            .replace(/(\d{4})/g, "$1 ")
            .trim()}
           onChange={(e)=>setCardNumber(e.target.value)}
            required 
          />
        </div>

        <article>
          <div className="inputDate">
            <label>Exp. Date (MM/YY)</label>
            <input className="half" type="month" placeholder="MM/YY"
             value={date}
             onChange={(e)=>setDate(e.target.value)}
              required 
             />
          </div>

          <div className="inputDate">
            <label>CVC</label>
            <input className="half" type="number" placeholder=" 123"
             value={cvc}
            //  onChange={(e)=>setCvc(e.target.value)}
              required 
            
             />
          </div>
        </article>

        <button 
        onClick={()=> setConfirmed(true)}
        >Confirm</button>
      </form>
      
    </div>

    <div className='thankComplete'>
        <img  className='completeImg' src ={thankComplete}/>
        <h1>THANK YOU!</h1>
        <p>We’ve added your card details</p>
        <button
        onClick={()=> setConfirmed(false)}
         >Continue</button>

      </div>


    </div>
  )
  
  
 
 
}
   
   

export default App;
