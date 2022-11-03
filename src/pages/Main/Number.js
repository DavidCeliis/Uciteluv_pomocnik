import React from 'react'
import { useState, useEffect } from 'react'
import Slider from '@mui/material/Slider';
import { useParams } from 'react-router-dom';

export default function Number() {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(20);
  const [rnd, setRnd] = useState(1);
  const{inputmin} = useParams();
  const{inputmax} = useParams();

  useEffect(()=>{
   if(inputmin && inputmax){
    const newmax = parseInt(inputmax)
    const newmin = parseInt(inputmin)
    if(newmax > 100 || newmin < 1){
      alert("Zadali jste neplatné hodnoty! Zadejte v rozmezí 1-100")
    }
    else if(newmin < newmax)
    {
      setMin(newmin);
      setMax(newmax);
      setRnd(Math.floor(Math.random()* (newmax - newmin + 1) + newmin))}
    else{
      alert("Minimální hodnota nemůže být větší nebo rovna jak maximální!")
    }
   }
},[])
  const handleRandom = () => {
    if(min < max){

      setRnd(Math.floor(Math.random()* (max - min + 1) + min))
    }
    else {
      alert("Minimální hodnota nemůže být větší nebo rovna jak maximální!")
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



