function hex(hex) {
  if (hex.length === 4) {
    hex = '#' + hex[1] + hex[1] +
      hex[2] + hex[2] + 
      hex[3] + hex[3];
  }
  return [
    parseInt(hex.substring(1,3), 16),
    parseInt(hex.substring(3,5), 16),
    parseInt(hex.substring(5,7), 16)
  ];
}

module.exports = hex;