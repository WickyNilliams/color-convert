var extractComponents = require("./extractComponents");
var clamp = require("../util/clamp");

function parseRgbComponent(component, i) {
  if (i < 3) {
    if (component.indexOf('%') != -1) {
      return Math.round(255 * clamp(parseFloat(component), 0, 100)/100);
    } else {
      return clamp(parseInt(component, 10), 0, 255);
    }
  } else {
    if (component.indexOf('%') != -1) {
      component = parseFloat(component)/100;
    }

    return clamp(parseFloat(component), 0, 1);
  }
}

function rgb(color) {
  return extractComponents(color).map(parseRgbComponent);
}

module.exports = rgb;