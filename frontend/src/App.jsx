import { useState } from 'react'
import './App.css'
import WaveDivider from './Wave'
import wavePresets from './wavePresets'
import useAnimatedWave from './useAnimatedWave'

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'

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

    <Card className="max-w-sm">
      <img className="rounded-t-xl aspect-video object-cover" />
      <CardHeader>
        <CardTitle>title</CardTitle>
        <CardDescription>description</CardDescription>
      </CardHeader>
      <CardContent>
        <span className="text-sm text-muted-foreground">status</span>
      </CardContent>
    </Card>
    </div>
  )
}

export default App
