import React, { useContext, useState } from 'react'
import GlobalContext from '../context/MainContext'

const StartExpense = () => {
    const {StartExpenseTracker} = useContext(GlobalContext) || {StartExpenseTracker : (value:string) => {}}
    const [value, setValue] = useState("")

    const handeClick = () => {

        StartExpenseTracker(value)

    }

  return (
    <div>
        <input type="number" value={value} onChange={e => setValue(e.target.value)} className='expense-input'/>
        <button onClick={handeClick} className='expense-button'>Next</button>
    </div>
  )
}

export default StartExpense