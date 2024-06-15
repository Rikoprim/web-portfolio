import { Route, Routes } from 'react-router-dom';
import Home from './Home'
import Todo from './TodoList'
import './App.css'

function App() {
  return (
    <>
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/todo' element={<Todo/>} />
       </Routes>
    </>
  )
}

export default App
