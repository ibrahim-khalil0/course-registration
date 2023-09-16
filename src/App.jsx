import './App.css'
import Header from './components/Header/Header'
import Courses from './components/Courses/Courses'
import Sidebar from './components/SideBar/Sidebar'
import { useState } from 'react'



function App() {
  const [selected, setSelected] = useState([])
  const [credit, setCredit] = useState(0)
  const [remainingCredit, setRemainingCredit] = useState(20)
  const [totalPrice, setTotalPrice] = useState(0)

  const handleSelected = (title, price, credit_time) => {
    if(!selected.includes(title)){
      if(credit + credit_time <= 20){
        const newCourse = [...selected, title]
        setSelected(newCourse)

        const totalCreditTime = credit + credit_time
        setCredit(totalCreditTime)

        const remainingCreditTime = remainingCredit - credit_time
        setRemainingCredit(remainingCreditTime)

        const newPrice = totalPrice + price
        setTotalPrice(newPrice)
      }
      else{
        alert('no credit')
      }
    }
    else{
      alert('already added')
    }
  }

  return (
    <>
      <Header></Header>
      
      <main className='w-[90%] mx-auto lg:flex gap-6'>
        <Courses selectedCourse={handleSelected}></Courses>
        <Sidebar selected={selected} 
        creditTime={credit} 
        remainingCredit={remainingCredit}
        totalPrice={totalPrice}
        ></Sidebar>
      </main>
    </>
  )
}

export default App
