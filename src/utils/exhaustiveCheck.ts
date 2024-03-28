/**@param t whould trigger an error if its not never type  */
export function exhaustiveCheck(t: never) {
  if (t) throw new Error("Unexpected input type");
}
