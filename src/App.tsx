import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import thankComplete from "./images/icon-complete.svg";
import backCard from "./images/bg-card-back.png";
import frontCard from "./images/bg-card-front.png";
import colorBg from "./images/bg-main-mobile.png";
import logo from "./images/card-logo.svg";
// import {format} from "date-fns"

function App() {
  const [name, setName] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [cvc, setCvc] = useState<string>("");
  const [confirmed, setConfirmed] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);
  function validateUsername(name:string) {
    // perform validation logic here
    // return true if the username is valid, false otherwise
    return name.length >= 3 
    // && /^[a-zA-Z0-9]+$/.test(name)
    ;
  }

  useEffect(() => {
    setIsValid(validateUsername(name));
  }, [name]);

  // useEffect(() => {
  //   if (name === '') {
  //     setErrors(`write user name`);
  //   } else {
  //     setErrors('');
  //   }
  // }, [errors]);

  return (
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
                  <li className="cvCode">{date}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* form */}
      <div className="formContainer">
        {!confirmed && (
          <form action="#" method="post" className="form">
            <div className="inputName">
              <label>Cardholder Name</label>
              <input
                type="text"
                placeholder=" e.g Tamar Zurabashvili"
                value={name}
                autoComplete="off"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setName(e.target.value.toUpperCase())
                }
                required
              />
              {!isValid && (
                <div>
                  <p  className ="error"style={{ color: "red" }}>
                  Username must be at least 3 characters.
                </p>
                </div>
              )}
            </div>

            <div className="inputNumber">
              <label>Card Number</label>
              <input
                type="string"
                placeholder="e.g. 1234 5678 9123 0000"
                maxLength={19}
                value={cardNumber
                  .replace(/\s/g, "")
                  .replace(/(\d{4})/g, "$1 ")
                  .trim()}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />
            </div>

            <article>
              <div className="inputDate">
                <label>Exp. Date (MM/YY)</label>
                <input
                  className="half"
                  type="month"
                  placeholder="MM/YY"
                  value={date}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setDate(e.target.value)
                  }
                  required
                />
              </div>

              {/* interface MyFormProps {
            setCvc: (value: number) => void;
  
          } */}

              <div className="inputDate">
                <label>CVC</label>
                <input
                  className="half"
                  type="number"
                  placeholder=" 123"
                  required
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                />
              </div>
            </article>

            <button onClick={() => setConfirmed(true)}>Confirm</button>
          </form>
        )}

        {confirmed && (
          <Thank
            setConfirmed={setConfirmed}
            setName={setName}
            setCardNumber={setCardNumber}
            setDate={setDate}
            setCvc={setCvc}
          />
        )}
      </div>
    </div>
  );
}
// {/* thank */}
interface ThankProps {
  setConfirmed: (value: boolean) => void;
  setName: (value: string) => void;
  setCardNumber: (value: string) => void;
  setDate: (value: string) => void;
  setCvc: (value: string) => void;
}
function Thank({
  setConfirmed,
  setName,
  setCardNumber,
  setDate,
  setCvc,
}: ThankProps) {
  const resetClick = () => {
    setName("");
    setCardNumber("");
    setDate("");
    setCvc("");
  };
  return (
    <div>
      <div className="thankComplete">
        <img className="completeImg" src={thankComplete} />
        <h1>THANK YOU!</h1>
        <p>We’ve added your card details</p>
        <button onClick={() => setConfirmed(false)}>Continue</button>

        {/* onClick={resetClick} */}
      </div>
    </div>
  );
}

export default App;
