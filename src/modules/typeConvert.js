export default typeConvert;

function typeConvert(type) {
  if (type === "rows") {
    return "row";
  }
  if (type === "cols") {
    return "col";
  }
  if (type === "boxes") {
    return "box";
  }
}