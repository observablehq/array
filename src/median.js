import quantile from "./quantile.js";

export default function median(values) {
  return quantile(values, 0.5);
}
