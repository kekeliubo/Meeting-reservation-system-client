import React, { useEffect } from 'react'
import Login from '@/pages/login'
import DashBoard from '@/pages/dashboard'
import Chart from '@/pages/dashboard/chart'
import History from '@/pages/dashboard/history'
import Date from '@/pages/dashboard/date'
import Reverse from '@/pages/dashboard/reserve'
import Room from '@/pages/dashboard/room'
import HomeUser from '@/pages/dashboard/user'
import User from '@/pages/user'
import { Routes, Route, useNavigate } from 'react-router-dom'
const RedirectInit: React.FC = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const account = localStorage.getItem('account')
    const password = localStorage.getItem('password')
    if (account == null && password == null) {
      navigate('/login')
    } else {
      navigate('/home')
    }
  }, [])
  return null
}
const Redirect: React.FC<{ to: string }> = ({ to }) => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate(to)
  }, [])
  return null
}
const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<RedirectInit />} />
      <Route path="/home" element={<Redirect to="/home/chart" />} />
      <Route path="/home" element={<DashBoard />}>
        <Route path="/home/chart" element={<Chart />}></Route>
        <Route path="/home/date" element={<Date />}></Route>
        <Route path="/home/history" element={<History />}></Route>
        <Route path="/home/room" element={<Room />}></Route>
        <Route path="/home/reverse" element={<Reverse />}></Route>
        <Route path="/home/user" element={<HomeUser />}></Route>
      </Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/user" element={<User />}></Route>
    </Routes>
  )
}

export default App
