import { useState } from 'react'
import './App.css'
import WaveDivider from './Wave'
import wavePresets from './wavePresets'

function App() {
  const [page, setPage] = useState("home")
  const target = wavePresets[page]

  return (
    <div>
      <WaveDivider {...target}/>

      <button onClick={() => setPage('home')}>home</button>
      <button onClick={() => setPage('about')}>about</button>
      <button onClick={() => setPage('projects')}>projects</button>
    </div>
  )
}

export default App
