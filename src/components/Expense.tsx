import React, { useContext } from 'react'
import GlobalContext, { expenseType } from '../context/MainContext'



const Expense = ({expense,id,cost}:expenseType) => {

    const {completeDelete} = useContext(GlobalContext) || {completeDelete : (id:number) => {}}

    const handleClick = () => {

        completeDelete(id)

    }
  return (
    <div>
        <p>{expense} {cost}</p>
        <button onClick={handleClick}>X</button>
    </div>
  )
}

export default Expense