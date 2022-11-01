import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"
import CountDown from "../../components/count"


const Count = () => {
 
    return (
    <div className='MainDiv'>
      <CountDown/>
    </div>
  )
}

export default Count
