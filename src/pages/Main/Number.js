import React from 'react'
import { useState } from 'react'
import Slider from '@mui/material/Slider';
import { useParams } from 'react-router-dom';

export default function Number() {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(10);
  const [rnd, setRnd] = useState(5);
  const handleRandom = () => {
    if(min < max){
      setRnd(Math.floor(Math.random()* (max - min + 1) + min))
    }
    else {
      alert("Minimální hodnota nemůže být větší než maximální!")
    }
    
  };
  return (
    <div className='MainDiv'>
      <h1 style={{fontSize:200}}>{rnd}</h1>
      <p>Minimální hodnota</p>
      <Slider
      type="number"
      value = {min}
      defaultValue={50} 
      aria-label="Default" 
      valueLabelDisplay="auto"
      style={{width: "200px", margin: "auto"}}
      onChange={e => setMin(+e.target.value)}/>
       <p>Maximální hodnota</p>
       <Slider
      type="number"
      value = {max}
      defaultValue={50} 
      aria-label="Default" 
      valueLabelDisplay="auto"
      style={{width: "200px", margin: "auto"}}
      onChange={e => setMax(+e.target.value)}/>
      <p></p>
      <button className='btn btn-success' onClick={handleRandom}>Roztoč!</button>
      
    </div>
  )
}



