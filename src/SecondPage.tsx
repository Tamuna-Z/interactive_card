import Card from './Card';
import Thank from './Thank'
import {useState} from 'react'
function SecondPage(){
    const [confirmed, setConfirmed]=useState(true);
    return(
        <div>
            <Card/>
            <Thank/>
        </div>
    )
}

export default SecondPage;