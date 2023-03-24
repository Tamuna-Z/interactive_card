import React from "react";
import "./App.css";
import backCard from './images/bg-card-back.png';
import frontCard from './images/bg-card-front.png';

function App() {
  return (
    <div className="bg">
      <div className="container">
        <div className="cardContainer">
          <div className="colorBg">
            <img className="backCard" src={backCard} alt="back_card"/>
            <img className="frontCard" src={frontCard}/>
          </div>
        </div>
        <div className="formContainer">

        </div>
      </div>
    </div>
  );
}

export default App;
