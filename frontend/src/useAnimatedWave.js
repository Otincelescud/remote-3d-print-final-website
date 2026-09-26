import { useState, useEffect, useRef } from 'react'
import { lerpColor } from './colorUtils'

const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2)

function useAnimatedWave(target, duration = 600) {
  const [current, setCurrent] = useState(target)
  const currentRef = useRef(target)

  useEffect(() => {
    const start = currentRef.current
    const startTime = performance.now()
    let frameId

    const tick = (now) => {
      const t = Math.min(Math.max((now - startTime) / duration, 0), 1)
      const k = ease(t)

      const next = {
        amplitude: start.amplitude + (target.amplitude - start.amplitude) * k,
        frequency: start.frequency + (target.frequency - start.frequency) * k,
        phase: start.phase + (target.phase - start.phase) * k,
        wobbleAmplitude: start.wobbleAmplitude + (target.wobbleAmplitude - start.wobbleAmplitude) * k,
        wobbleFrequency: start.wobbleFrequency + (target.wobbleFrequency - start.wobbleFrequency) * k,
        wobblePhase: start.wobblePhase + (target.wobblePhase - start.wobblePhase) * k,
        color: lerpColor(start.color, target.color, k),
      }

      currentRef.current = next
      setCurrent(next)

      if (t < 1) frameId = requestAnimationFrame(tick)
    }

    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [target, duration])

  return current
}

export default useAnimatedWave