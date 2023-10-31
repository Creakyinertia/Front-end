import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Home'
import LoginPage from './LoginPage'
import BankDetailsPage from './components/BankDetailsPage'
import UserDetailsPage from './components/UserDetailsPage'
import AddNewUser from './AddNewUser'
import Login from "./LoginForm"

const Routers = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/UserDetailsPage" element={<UserDetailsPage/>}></Route>
    <Route path="/BankDetailsPage" element={<BankDetailsPage/>}></Route>
    <Route path="/AddNewUser" element={<AddNewUser/>}></Route>
    <Route path="/LoginPage" element={<LoginPage/>}></Route>
  </Routes>
    </>
  )
}

export default Routers