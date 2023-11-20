import React, { useContext, useState } from 'react'
import GlobalContext from '../context/MainContext'
import ExpenseList from './ExpenseList'

const ExpenseTracker = () => {
    const {income} = useContext(GlobalContext) ||{income : 0}
    const [value, setValue] = useState("")
  return (
    <div>
        <div>
            <p>{income}</p>
            <p>expense</p>
        </div>
        <ExpenseList />
        <div>
        <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
        <button>Add</button>
        </div>
    </div>
  )
}

export default ExpenseTracker