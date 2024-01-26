import  { useState } from 'react';
import './index.css';

const App = () => {
const [diceNumber, setDiceNumber]= useState(5)
const refreshDice=()=> {
  const rannm= Math.floor(Math.random() *6) +1
  setDiceNumber(rannm)
}
  return (
    <div>
      <center>
      <img  height={300} width={300} src={require (`./assets/${diceNumber}.png`)}></img>
      <br></br>
      <button onClick={()=> refreshDice()} className="button">Roll</button>
      </center>
    </div>
  );
}

export default App;
