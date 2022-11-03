import React from 'react'
import { useState, useEffect } from 'react'
import Slider from '@mui/material/Slider';
import { useParams, useSearchParams } from 'react-router-dom';

export default function Number() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(20);
  const [rnd, setRnd] = useState(1);
  const{inputmin} = useParams();
  const{inputmax} = useParams();

  useEffect(()=>{
   if(inputmin && inputmax){
    
    setMin(parseInt(inputmin));
    setMax(parseInt(inputmax));
    setRnd(Math.floor(Math.random()* (parseInt(inputmax) - parseInt(inputmin) + 1) + parseInt(inputmin)))
   }
},[])
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
      <h1 className='zoom-in-out-box' style={{fontSize:200}}>{rnd}</h1>
      <p>Minimální hodnota</p>
      <Slider
      type="number"
      value = {min}
      min={1} 
      aria-label="Default" 
      valueLabelDisplay="auto"
      style={{width: "200px", margin: "auto"}}
      onChange={e => setMin(+e.target.value)}/>
       <p>Maximální hodnota</p>
       <Slider
      type="number"
      value = {max}
      min={2}
      aria-label="Default" 
      valueLabelDisplay="auto"
      style={{width: "200px", margin: "auto"}}
      onChange={e => setMax(+e.target.value)}/>
      <p></p>
      <button className='btn btn-success' onClick={handleRandom}>Roztoč!</button>
      
    </div>
  )
}



