export function parseColor(c) {
  if (c.startsWith('#')) {
    const n = parseInt(c.slice(1), 16)
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255]
  }
  return c.match(/[\d.]+/g).map(Number)
}

export function lerpColor(a, b, k) {
  const ca = parseColor(a)
  const cb = parseColor(b)
  const mixed = ca.map((v, i) => Math.round(v + (cb[i] - v) * k))
  return `rgb(${mixed[0]}, ${mixed[1]}, ${mixed[2]})`
}