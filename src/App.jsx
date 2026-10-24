import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './component/Login'
import Profile from './component/Profile'
import Dashboard from './component/Dashboard'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>} />
    </Routes>
    </BrowserRouter>
    <Profile/>
    <Dashboard/>

    </>
  )
}

export default App
