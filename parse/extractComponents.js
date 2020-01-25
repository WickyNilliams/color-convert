var component = /[+-]?(\d+(\.\d+)?|\.\d+)(e[+-]?\d+)?(%|deg|grad|rad|turn)?/ig;

function extractComponents(color) {
  return color.match(component);
}

module.exports = extractComponents;