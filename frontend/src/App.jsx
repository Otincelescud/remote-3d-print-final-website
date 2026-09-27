import { useState } from 'react'
import './App.css'
import WaveDivider from './Wave'
import wavePresets from './wavePresets'
import useAnimatedWave from './useAnimatedWave'
import ProjectCard from './ProjectCard'
import projects from './projectData'

function App() {
  const [page, setPage] = useState("home")
  const target = wavePresets[page]

  const animated = useAnimatedWave(target, 1000)

  return (
    <div>
    <div>
      <header>
        <h1 className="text-4xl font-bold text-orange-500">Placeholder title</h1>
        <nav>
          {Object.keys(wavePresets).map((name) => (
            <button key={name} onClick={() => setPage(name)}>
              {name}
            </button>
          ))}
        </nav>
      </header>
      <WaveDivider {...animated} />
    </div>
    
    <div>
    {projects.map((project) => (
      <ProjectCard key={project.slug} project={project} />
    ))}
    </div>
    </div>
  )
}

export default App
