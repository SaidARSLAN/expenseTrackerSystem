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
        <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
        <button onClick={handeClick}>Next</button>
    </div>
  )
}

export default StartExpense