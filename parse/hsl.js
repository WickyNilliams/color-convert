var extractComponents = require("./extractComponents");
var clamp = require("../util/clamp");
var clampAngle = require("../util/clampAngle");
var unitsRegex = /%|deg|grad|rad|turn/i;

function parseHslComponent(component, i) {
  var units = component.match(unitsRegex);
  units = units ? units[0] : '';
  component = parseFloat(component);

  switch(i) {
    case 0:
      // Convert all units to degrees before we clamp them
      switch(units) {
        case 'grad':
          return clampAngle((component / 400) * 360);
        case 'rad':
          return clampAngle((component / (2 * Math.PI)) * 360);
        case 'turn':
          return clampAngle(component * 360);
        case 'deg':
        default:
          return clampAngle(component);
      }
    case 1:
    case 2:
      return clamp(component, 0, 100);
    case 3:
      if (units === '%') {
        component /= 100;
      }

      return clamp(component, 0, 1);
  }
}

function hsl(color) {
  return extractComponents(color).map(parseHslComponent);
}

module.exports = hsl;
