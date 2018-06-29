import quantile from "./quantile.js";
import take from "./take.js";

export default function quantilei(values, index, p) {
  return quantile(take(values, index), p);
}
