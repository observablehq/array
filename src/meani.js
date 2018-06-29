import counti from "./counti.js";
import sumi from "./sumi.js";

export default function meani(values, index) {
  return sumi(values, index) / counti(values, index);
}
