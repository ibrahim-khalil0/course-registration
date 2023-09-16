import './App.css'
import Header from './components/Header/Header'
import Courses from './components/Courses/Courses'
import Sidebar from './components/SideBar/Sidebar'
import { useState } from 'react'



function App() {
  const [selected, setSelected] = useState([])

  const handleSelected = course => {
    const newCourse = [...selected, course]
    setSelected(newCourse)
  }

  return (
    <>
      <Header></Header>
      
      <main className='w-[90%] mx-auto flex gap-6'>
        <Courses selectedCourse={handleSelected}></Courses>
        <Sidebar selected={selected}></Sidebar>
      </main>
    </>
  )
}

export default App
