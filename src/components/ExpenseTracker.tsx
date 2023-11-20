import React, { useContext, useState } from 'react'
import GlobalContext, { expenseType } from '../context/MainContext'
import ExpenseList from './ExpenseList'

type currType = {

    cost : number

}


const ExpenseTracker = () => {
    const {income,getExpense,expenses} = useContext(GlobalContext) ||{income : 0,getExpense : (data,cost) => {},expenses:[] as expenseType[]}
    const [value, setValue] = useState("")
    const [cost, setCost] = useState<number>(0)
    const handeClick = () => {

        getExpense(value,cost)
        setValue("")
        setCost(0)
    }

  return (
    <div>
        <div>
            <p>{income}</p>
            <p> {expenses.reduce((total:number, curr:currType) => {
    return total + (curr.cost || 0);
  }, 0)}</p>
        </div>
        <ExpenseList />
        <div>
        <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
        <input type="number" value={cost} onChange={e => setCost(parseInt(e.target.value))}/>
        <button onClick={handeClick}>Add</button>
        </div>
    </div>
  )
}

export default ExpenseTracker