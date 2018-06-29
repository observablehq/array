import count from "./count.js";
import sumi from "./sum.js";

export default function mean(values) {
  return sum(values) / count(values);
}
