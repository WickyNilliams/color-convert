var component = /-?\d+(\.\d+)?%?/g;
function extractComponents(color) {
  return color.match(component);
}

export default extractComponents;
