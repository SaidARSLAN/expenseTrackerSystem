import React, { useContext } from 'react'
import Expense from './Expense'
import GlobalContext, { expenseType } from '../context/MainContext'

const ExpenseList = () => {
    const {expenses} = useContext(GlobalContext) || {id:0,expense:""}
    
  return (
    <div>
        {expenses?.map((expense) => {
            return (
                <Expense expense={expense.expense} id={expense.id} />
            )
        })}
    </div>
  )
}

export default ExpenseList