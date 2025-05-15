import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GreetingCard from './components/greeting'
import RandomNumbers from './components/RandomNumber.jsx'
import { Board, Piece } from './components/Tabuleiro.jsx'
import Pedido from './components/FilhoComProps.jsx'
import ColorCard from './components/ColorCard.jsx'

function App() {


  return (
    <>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <GreetingCard name="Visitante"></GreetingCard>
        <ColorCard cor={"azul"}>
          <RandomNumbers></RandomNumbers>
        </ColorCard>
        <ColorCard cor={"verde"}>
          <Board>
          <Piece label="♘" />
          <Piece label="♞" />
          <Piece label="♜" />
          <Piece label="♘" />
          <Piece label="♞" />
          <Piece label="♜" />
        </Board>
        </ColorCard>
        <ColorCard cor={"rosa"}>
          <Pedido></Pedido>
        </ColorCard>
        
      </div>
      

    </>
  )
}

export default App
