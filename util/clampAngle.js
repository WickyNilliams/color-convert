function clampAngle(val) {
  // Convert to positive
  val = (val % 360) + 360

  // Wrap around
  return val % 360;
}

module.exports = clampAngle;