import './Thank.css';
import Card from './Card';
import thankComplete from './images/icon-complete.svg';
import {useState} from 'react';

function Thank(){
  const [confirm, setConfirmed]=useState(false)
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

export default Thank;
