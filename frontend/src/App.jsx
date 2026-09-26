import { useState } from 'react'
import './App.css'
import WaveDivider from './Wave'
import wavePresets from './wavePresets'
import useAnimatedWave from './useAnimatedWave'

function App() {
  const [page, setPage] = useState("home")
  const target = wavePresets[page]

  const animated = useAnimatedWave(target, 1000)

  return (
    <div>
      <WaveDivider {...animated}/>

      <button onClick={() => setPage('home')}>home</button>
      <button onClick={() => setPage('about')}>about</button>
      <button onClick={() => setPage('projects')}>projects</button>
    </div>
  )
}

export default App
