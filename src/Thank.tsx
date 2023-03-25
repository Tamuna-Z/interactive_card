import './Thank.css';
import Card from './Card';
import thankComplete from './images/icon-complete.svg';

function Thank(){
  return(
    <div>
      <Card/>
      <div className='thankComplete'>
        <img  className='completeImg' src ={thankComplete}/>
        <h1>THANK YOU!</h1>
        <p>We’ve added your card details</p>
        <button>Continue</button>

      </div>
    </div>
    
  )
}

export default Thank;
