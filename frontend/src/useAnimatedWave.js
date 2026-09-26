import { useState, useEffect } from 'react'

function useAnimatedWave(target, duration = 600) {
  const [current, setCurrent] = useState(target)

  useEffect(() => {
    setCurrent(target)
  }, [target])

  return current
}

export default useAnimatedWave