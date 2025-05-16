import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GreetingCard from './components/greeting'
import RandomNumbers from './components/RandomNumber.jsx'
import { Board, Piece } from './components/Tabuleiro.jsx'
import Pedido from './components/FilhoComProps.jsx'
import ColorCard from './components/ColorCard.jsx'
import ContadorDeMiados from './components/ContadorMiados.jsx'
import VolumeSlider from './components/SliderVolume.jsx'
import ColorSlider from './components/ColorSlider.jsx'
import CampoTextoLimitado from './components/CaracteresRestantes.jsx'
import EscolhedorDeFruta from './components/EscolhedorFruta.jsx'
import FrutaFavorita from './components/MostrarFruta.jsx'

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
        <ColorCard>
          <p>Um exemplo bobo de componente de classe com Estado</p>
          <ContadorDeMiados></ContadorDeMiados>
        </ColorCard>
        <ColorCard cor={"verde"}>
          <VolumeSlider></VolumeSlider>
        </ColorCard>
        <ColorCard cor={"azul"}>
          <ColorSlider></ColorSlider>
        </ColorCard>
        <ColorCard cor={"rosa"}>
          <p>Um componente que possui com Estado Derivado</p>
          <CampoTextoLimitado></CampoTextoLimitado>
        </ColorCard>
        <ColorCard>
          <FrutaFavorita>
            <EscolhedorDeFruta></EscolhedorDeFruta>
          </FrutaFavorita>
        </ColorCard>
      </div>
      

    </>
  )
}

export default App
