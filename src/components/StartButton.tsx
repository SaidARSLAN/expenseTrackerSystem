import React, { useContext, useEffect } from 'react'
import GlobalContext, { contextProps } from '../context/MainContext'

const StartButton = () => {
   
    const {sendStart}   = useContext(GlobalContext) ||{sendStart : () => {}}
   
    const startExpense = () => {
        
        sendStart()
        
    }
 
    return (
        <button onClick={startExpense} className='start-button'>Start</button>
    )
}

export default StartButton