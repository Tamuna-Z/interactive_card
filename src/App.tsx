import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import thankComplete from "./images/icon-complete.svg";
import backCard from "./images/bg-card-back.png";
import frontCard from "./images/bg-card-front.png";
import colorBg from "./images/bg-main-mobile.png";
import logo from "./images/card-logo.svg";

function App() {
  const [name, setName] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [cvc, setCvc] = useState<string>("");
  const [confirmed, setConfirmed] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [isCvcValid, setIsCvcValid] = useState<boolean>(false);
  const [showCvcError, setShowCvcError] = useState<boolean>(false);

  // validation username

 
  function validateUsername(name: string) {
    return name.length >= 3 && /^[a-zA-Z0-9 ]+$/.test(name);
  }

  useEffect(() => {
    setIsValid(validateUsername(name));
  }, [name]);

  useEffect(() => {
    setShowError(!isValid && name !== "");
  }, [isValid, name]);
  // validation of cvc

  function validateCvc(cvc: string) {
    return /^\d{3}$/.test(cvc);
  }

  useEffect(() => {
    setIsCvcValid(validateCvc(cvc));
  }, [cvc]);

  useEffect(() => {
    setShowCvcError(!isCvcValid && cvc !== "");
  }, [isCvcValid, cvc]);

  // number validation

  const handleCardNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value.replace(/[^\d\s]/g, "");
    setCardNumber(
      value
        .replace(/\s+/g, " ")
        .replace(/(.{4})/g, "$1 ")
        .trim()
    );
  };

  // const resetClick = () => {
  //   setName("");
  //   setCardNumber("");
  //   setDate("");
  //   setCvc("");
  // };

  // const handleClickButton = () => {
  //   setConfirmed(false);
  //   resetClick();
  // };

  return (
    <div className="mainContainer">
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
              {showError && (
                <div>
                  <p className="error" style={{ color: "red" }}>
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
                onChange={handleCardNumberChange}
                required
              />
            </div>

            <article>
              <div className="inputDate month">
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

              <div className="inputDateCv">
                <label>CVC</label>
                <input
                  className="half"
                  type="number"
                  placeholder=" 123"
                  required
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                  pattern="[0-9]*"
                  maxLength={3}
                />
                {showError && (
                  <div>
                    <p className="error" style={{ color: "red" }}>
                      CVC must be a three-digit number.
                    </p>
                  </div>
                )}
              </div>
            </article>

            <button
              onClick={() => setConfirmed(true)}
              disabled={
                name === "" || cardNumber === "" || date === "" || cvc === ""
              }
            >
              Confirm
            </button>
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
  function resetClick() {
    throw new Error("Function not implemented.");
  }

  return (
    <div>
      <div className="thankComplete">
        <img className="completeImg" src={thankComplete} />
        <h1>THANK YOU!</h1>
        <p>We’ve added your card details</p>
        <button
          onClick={() => {
            setConfirmed(false);
           
          }}
        >
          Continue
        </button>

        {/* onClick={resetClick} */}
      </div>
    </div>
  );
}

export default App;
