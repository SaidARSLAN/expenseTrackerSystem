import React, { createContext, useState } from "react";

export type contextProps = {

    step : number,
    sendStart : () => void,
    StartExpenseTracker : (data:string) => void,
    income : number,
    getExpense : (data:string,cost:number) => void
    expenses : expenseType[]
    completeDelete : (id:number) => void
}
export type expenseType = {
    id: number,
    expense : string,
    cost : number
}
const GlobalContext = createContext<contextProps | undefined>(undefined)

type childrenProps = {
    children : React.ReactNode
}

export const Provider:React.FC<childrenProps> = ({children}) => {
    const [step, setStep] = useState<number>(0)
    const [income, setIncome] = useState<number>(0)
    const [expenses, setExpenses] = useState<expenseType[]>([])
    const sendStart = () => {
        setStep((currStep) => currStep + 1)
    }

    const StartExpenseTracker = (data:string) => {
        setIncome(parseInt(data))
        setStep((currStep) => currStep + 1)
    }
    const getExpense = (data:string,cost:number) => {
        setExpenses([...expenses,{
            id:expenses.length + 1,
            expense : data,
            cost : cost
        }])
    }
    const completeDelete = (id:number) => {

        setExpenses(expenses.filter((expense) => expense.id !== id))

    }
    return (
        <GlobalContext.Provider value={{step,sendStart,StartExpenseTracker,income,getExpense,expenses,completeDelete}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext