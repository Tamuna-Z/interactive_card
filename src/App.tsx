import React from "react";
import "./App.css";
import {useState} from "react";
import thankComplete from './images/icon-complete.svg';
import backCard from "./images/bg-card-back.png";
import frontCard from "./images/bg-card-front.png";
import colorBg from "./images/bg-main-mobile.png";
import logo from "./images/card-logo.svg";


function App() {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [date, setDate] = useState("");
  const [cvc, setCvc] = useState();
  const [confirmed,setConfirmed]=useState(false);
  return(
    <div>
 {/* <Card/> */}

    <div className="bg">
      <div className="container">
        <div className="cardContainer">
          <div className="colorBg">
            <img className="colorBg" src={colorBg} />
            <img className="backCard" src={backCard} alt="back_card" />
            <p className="backCvCode">{cvc}</p>
            <img className="frontCard" src={frontCard} />
            <img className="logoCard" src={logo} />
            <div className="cardData">
              <h2 className="number">{cardNumber}</h2>
              <ul>
                <li className="name">{name}</li>
                {/* <li className="cvCode">{format(new Date(date), "MM /YY")}</li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
{/* form */}
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

    
    </div>
  ) 
 
}
// {/* thank */}
function Thank(){
  const [confirmed,setConfirmed]=useState(false);
  return(
    <div>
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
