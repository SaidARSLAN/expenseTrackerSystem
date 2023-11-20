import React, { useContext, useState } from 'react'
import GlobalContext from '../context/MainContext'
import ExpenseList from './ExpenseList'

const ExpenseTracker = () => {
    const {income,getExpense} = useContext(GlobalContext) ||{income : 0,getExpense : (data) => {}}
    const [value, setValue] = useState("")

    const handeClick = () => {

        getExpense(value)
        setValue("")

    }

  return (
    <div>
        <div>
            <p>{income}</p>
            <p>expense</p>
        </div>
        <ExpenseList />
        <div>
        <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
        <button onClick={handeClick}>Add</button>
        </div>
    </div>
  )
}

export default ExpenseTracker