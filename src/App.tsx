import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import './App.css'
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import HomePage from './pages/HomePage';
import AccountSettingsPage from './pages/AccountSettingsPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <div className="font-['Open_Sans']">
    <Routes>
      <Route  path='/' index element={<Login/>}/>
      <Route path='/Dashboard/' element={<Dashboard/>}>
        <Route path='/Dashboard/Home' index element={<HomePage/>}/>
        <Route path='/Dashboard/AccountSettings' element={<AccountSettingsPage/>}/>
        <Route path='/Dashboard/Register' element={<RegisterPage/>}/>
      </Route>
    
    

    </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
