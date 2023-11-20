import { useContext } from 'react'
import './App.css'
import GlobalContext from './context/MainContext'
import StartButton from './components/StartButton'
import StartExpense from './components/StartExpense'
import ExpenseTracker from './components/ExpenseTracker'

type stepType = {
  step : number
}

function App() {
  const {step} = useContext(GlobalContext) || {step : 0}
  return (
   <div>
      {step === 0 ? <StartButton /> :  step === 1 ? <StartExpense /> : <ExpenseTracker />}
   </div>
  )
}

export default App
