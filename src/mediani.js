import quantilei from "./quantilei.js";

export default function mediani(values, index) {
  return quantilei(values, index, 0.5);
}
