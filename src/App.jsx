import './App.css'
import Header from './components/Header/Header'
import Courses from './components/Courses/Courses'
import Sidebar from './components/SideBar/Sidebar'


function App() {

  return (
    <>
      <Header></Header>
      
      <main className='w-[90%] mx-auto flex gap-6'>
        <Courses></Courses>
        <Sidebar></Sidebar>
      </main>
    </>
  )
}

export default App
