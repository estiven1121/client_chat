import { useState } from 'react'
import './App.css'
import Navbar from "./navBar/NavBar"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from './user/Login';
import Register from "./user/Register"
import ChatMessage from './message/ChatMessage';
// import { initSockets } from './util/socket';

// initSockets()
function App() {
  return (
    <Router>
      <Navbar />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/chat" element={<ChatMessage />} />
    </Routes>
  </Router>
  )
}

export default App
