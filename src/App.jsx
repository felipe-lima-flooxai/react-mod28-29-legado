import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GreetingCard from './components/greeting'
import RandomNumbers from './components/RandomNumber.jsx'

function App() {


  return (
    <>
      <GreetingCard name="Felipe"></GreetingCard>
      <RandomNumbers></RandomNumbers>
    </>
  )
}

export default App
