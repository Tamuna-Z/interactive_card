import React from "react";
import "./App.css";
import backCard from './images/bg-card-back.png';
import frontCard from './images/bg-card-front.png';
import colorBg from './images/bg-main-mobile.png';
import logo from './images/card-logo.svg'

function App() {
  return (
    <div className="bg">
      <div className="container">
        <div className="cardContainer">
          <div className="colorBg">
            <img src ={colorBg}/>
            <img className="backCard" src={backCard} alt="back_card"/>
            <p className="backCvCode">000</p>
            <img className="frontCard" src={frontCard} />
            <img className="logoCard" src={logo}/>
            <div className="cardData">
              <h2 className="number">0000 0000 0000 0000</h2>
              <ul>
                <li className="name">Tamar Zurabashvili</li>
                <li className="cvCode">00/00</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="formContainer">
          <form>
            <div className="inputName">
            <label>Cardholder Name</label>
            <input type="text" placeholder="e.g. Jane Appleseed"/>
            </div>
            <div className="inputNumber">
            <label>Card Number</label>
            <input type="number" placeholder="e.g. 1234 5678 9123 0000"/>
            </div>
            <div className="inputDate">
            <label>Exp. Date (MM/YY)</label> <span>CVC</span>
            <input type="date" placeholder="e.g. Jane Appleseed"/>
            </div>
          </form>


        </div>
      </div>
    </div>
  );
}

export default App;
