function WaveDivider({amplitude = 20, frequency = 2, phase = 0, color = '#ff6a00'}) {
    const width = 1200
    const height = 200
    const centerY = height / 2
    const safeAmplitude = Math.min(amplitude, centerY)

    const points = []
    const step = 5

    for (let x = 0; x <= width; x += step) {
    const y = centerY + safeAmplitude * Math.sin((2 * Math.PI * frequency * x) / width + phase)
    points.push({ x, y })
    }

    const line = points.map((p) => `${p.x} ${p.y}`).join(' L ')
    const curve = `M ${line}`
    const d = `${curve} L ${width} ${height} L 0 ${height} Z`

    return <svg 
    viewBox={`0 0 ${width} ${height}`} 
    width="100%"
    height="200"
    preserveAspectRatio="none"
    style={{ display: 'block' }}
    >
        <path d={d} fill={color} />
    </svg>
}

export default WaveDivider