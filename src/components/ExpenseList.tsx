import React, { useContext } from 'react'
import Expense from './Expense'
import GlobalContext, { expenseType } from '../context/MainContext'

const ExpenseList = () => {
    const {expenses} = useContext(GlobalContext) || {id:0,expense:"",cost:0}
    
  return (
    <div>
        {expenses?.map((expense) => {
            return (
                <Expense expense={expense.expense} cost={expense.cost} id={expense.id} key={expense.expense}/>
            )
        })}
    </div>
  )
}

export default ExpenseList