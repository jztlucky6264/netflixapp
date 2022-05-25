function Add(a, b) {
  let add = a + b;
  return add;
}
function Sub(a, b) {
  let sub = a - b;
  return sub;
}
function Div(a, b) {
  let div = a / b;
  div = div.toFixed(2);
  return div;
}
function Multi(a, b) {
  let multi = a * b;
  return multi;
}
export default Add;
export { Sub, Div, Multi };
