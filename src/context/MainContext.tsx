import React, { createContext, useState } from "react";

export type contextProps = {

    step : number,
    sendStart : () => void,
    StartExpenseTracker : (data:string) => void,
    income : number
}

const GlobalContext = createContext<contextProps | undefined>(undefined)

type childrenProps = {
    children : React.ReactNode
}

export const Provider:React.FC<childrenProps> = ({children}) => {
    const [step, setStep] = useState<number>(0)
    const [income, setIncome] = useState<number>(0)

    const sendStart = () => {
        setStep((currStep) => currStep + 1)
    }

    const StartExpenseTracker = (data:string) => {
        setIncome(parseInt(data))
        setStep((currStep) => currStep + 1)
    }

    return (
        <GlobalContext.Provider value={{step,sendStart,StartExpenseTracker,income}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext