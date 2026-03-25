/**
 * Bhutan Post logo SVG generator — shared between generate-icons.js and Logo.js.
 *
 * Uses the EXACT same 44x44 viewBox geometry as MountainMark in Logo.js.
 * SVG's viewBox attribute handles scaling to any output size automatically.
 *
 * Pure CommonJS — safe to require() in Node.js scripts.
 * fill-opacity attributes used instead of rgba() for maximum SVG renderer compat.
 */

function getMountainMarkSvg(size, bgColor) {
  var s = size || 44
  var bg = bgColor || "#C53030"
  return (
    '<svg width="' +
    s +
    '" height="' +
    s +
    '" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">\n' +
    '  <rect width="44" height="44" rx="7" fill="' +
    bg +
    '"/>\n' +
    '  <path d="M5 34 L16 9 L27 34Z" fill="white" fill-opacity="0.88"/>\n' +
    '  <path d="M22 34 L32 17 L42 34Z" fill="white" fill-opacity="0.55"/>\n' +
    '  <path d="M16 9 L12.5 16 L19.5 16Z" fill="white"/>\n' +
    '  <path d="M32 17 L29.5 22 L34.5 22Z" fill="white" fill-opacity="0.9"/>\n' +
    "</svg>"
  )
}

// generateLogoSvg kept for backward compatibility
function generateLogoSvg(opts) {
  var o = opts || {}
  return getMountainMarkSvg(o.size || 100, o.bgColor || "#C53030")
}

module.exports = {
  getMountainMarkSvg: getMountainMarkSvg,
  generateLogoSvg: generateLogoSvg,
}
