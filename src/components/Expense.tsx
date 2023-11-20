import React from 'react'
import { expenseType } from '../context/MainContext'



const Expense = ({expense,id}:expenseType) => {

  return (
    <div>{expense} {id}</div>
  )
}

export default Expense