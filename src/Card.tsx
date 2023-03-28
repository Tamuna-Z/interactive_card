import "./Card.css";
import backCard from "./images/bg-card-back.png";
import frontCard from "./images/bg-card-front.png";
import colorBg from "./images/bg-main-mobile.png";
import logo from "./images/card-logo.svg";
import { useState } from "react";
// import {format} from 'date-fns';

function Card() {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [date, setDate] = useState("");
  const [cvc, setCvc] = useState();
  return (
    <div className="bg">
      <div className="container">
        <div className="cardContainer">
          <div className="colorBg">
            <img  src={colorBg} />
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
  );
}
export default Card;
