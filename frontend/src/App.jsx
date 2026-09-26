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

      {Object.keys(wavePresets).map((name) => (
        <button key={name} onClick={() => setPage(name)}>
          {name}
        </button>
      ))}
    </div>
  )
}

export default App
